import {User} from '@prisma/client';
import {ICreateUserRequestDTO} from '../../useCases/CreateUser/CreateUserDTO';

export interface IUserRepository {
  find(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  save(user: ICreateUserRequestDTO): Promise<User>;
}
