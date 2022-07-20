import {Request, Response} from 'express';
import {RouteConfig} from '../common/RouteConfig';
import {loginController} from '../useCases/Login';

export class AuthRoutes extends RouteConfig {
  constructor() {
    super();
  }

  registerRoutes() {
    this.router.post('/', (req: Request, res: Response) => {
      return loginController.handle(req, res);
    });
  }
}
