import {compare} from 'bcrypt';

import {IUserRepository} from '../../repositories/User/IUsersRepostiory';
import {ILoginRequestDTO} from './LoginDTO';
import {generateAccessToken} from '../../helpers/generateAccessToken';
import {AppError} from '../../common/AppError';
import {HTTPStatusCode} from '../../types/HTTPStatusCode';

export class LoginUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: ILoginRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email);

    if (user) {
      const isValidPassword = await compare(data.password, user.password);

      if (isValidPassword) {
        const token = generateAccessToken(user.name);
        console.log(token);

        return token;
      }
    }

    throw new AppError(
      HTTPStatusCode.UNAUTHORIZED,
      'Invalid login credentials'
    );
  }
}
