import {ListUserController} from './ListUserController';
import {ListUserUseCase} from './ListUserUseCase';
import {PostgresUserRepository} from '../../repositories/User/implementations/PostgresUserRepository';

const postgresUserRepository = new PostgresUserRepository();
const listUserUseCase = new ListUserUseCase(postgresUserRepository);
const listUserController = new ListUserController(listUserUseCase);

export {listUserController, listUserUseCase};
