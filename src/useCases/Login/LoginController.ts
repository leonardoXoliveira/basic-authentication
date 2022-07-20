import {Request, Response} from 'express';
import {AppError} from '../../common/AppError';
import {HTTPStatusCode} from '../../types/HTTPStatusCode';
import {LoginUseCase} from './LoginUseCase';

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {email, password} = req.body;

      const token = await this.loginUseCase.execute({email, password});

      return res.status(HTTPStatusCode.OK).json({data: token});
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.status).json({message: error.message});
      }

      return res.status(500).json({message: (error as Error).message});
    }
  }
}
