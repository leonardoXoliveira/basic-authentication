import {IUserRepository} from '../../repositories/User/IUsersRepostiory';

export class ListUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute() {
    const userList = await this.usersRepository.find();

    return userList;
  }
}
