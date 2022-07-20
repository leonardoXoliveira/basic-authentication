import {Request, Response} from 'express';
import {AppError} from '../../common/AppError';
import {HTTPStatusCode} from '../../types/HTTPStatusCode';
import {ListUserUseCase} from './ListUserUseCase';

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(_: Request, res: Response): Promise<Response> {
    try {
      const userList = await this.listUserUseCase.execute();

      return res.status(HTTPStatusCode.OK).json({data: userList});
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.status).json({message: error.message});
      }

      return res.status(500).json({message: (error as Error).message});
    }
  }
}
