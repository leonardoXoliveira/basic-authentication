import {PostgresUserRepository} from '../../repositories/User/implementations/PostgresUserRepository';
import {LoginController} from './LoginController';
import {LoginUseCase} from './LoginUseCase';

const postgresUserRepository = new PostgresUserRepository();
const loginUseCase = new LoginUseCase(postgresUserRepository);
const loginController = new LoginController(loginUseCase);

export {loginController, loginUseCase};
