import {Request, Response} from 'express';
import {hash, genSalt} from 'bcrypt';
import {AppError} from '../../common/AppError';
import {HTTPStatusCode} from '../../types/HTTPStatusCode';
import {CreateUserUseCase} from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {name, email, password} = req.body;

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const user = await this.createUserUseCase.execute({
        name,
        email,
        password: hashPassword,
      });

      return res.status(HTTPStatusCode.CREATED).json({data: user});
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.status).json({message: error.message});
      }

      return res.status(500).json({message: (error as Error).message});
    }
  }
}
