import {AppError} from '../../common/AppError';
import {IUserRepository} from '../../repositories/User/IUsersRepostiory';
import {HTTPStatusCode} from '../../types/HTTPStatusCode';
import {ICreateUserRequestDTO} from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new AppError(HTTPStatusCode.CONFLICT, 'User already exists');
    }

    const user = await this.usersRepository.save(data);

    return user;
  }
}
