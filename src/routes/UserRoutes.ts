import {Request, Response} from 'express';
import {RouteConfig} from '../common/RouteConfig';
import {authenticateToken} from '../helpers/authenticateToken';
import {listUserController} from '../useCases/ListUser';
import {createUserController} from '../useCases/CreateUser';

export class UserRoutes extends RouteConfig {
  constructor() {
    super();
  }

  registerRoutes() {
    this.router.get('/', authenticateToken, (req: Request, res: Response) => {
      return listUserController.handle(req, res);
    });

    this.router.post('/', (req: Request, res: Response) => {
      return createUserController.handle(req, res);
    });
  }
}
