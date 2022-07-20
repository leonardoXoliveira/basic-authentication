import {Router} from 'express';

export abstract class RouteConfig {
  router: Router;

  constructor() {
    this.router = Router();

    this.registerRoutes();
  }

  abstract registerRoutes(): void;
}
