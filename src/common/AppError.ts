import {HTTPStatusCode} from '../types/HTTPStatusCode';

export class AppError extends Error {
  status: HTTPStatusCode;
  message: string;

  constructor(status?: AppError['status'], message?: AppError['message']) {
    super(message || 'Internal server error');
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = status || HTTPStatusCode.INTERNAL_SERVER_ERROR;
    this.message = message || 'Internal server error';
  }
}
