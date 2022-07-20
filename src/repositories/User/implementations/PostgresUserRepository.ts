import {User} from '@prisma/client';
import {IUserRepository} from '../IUsersRepostiory';
import {ICreateUserRequestDTO} from '../../../useCases/CreateUser/CreateUserDTO';
import {prisma} from '../../../common/PrismaClient';

export class PostgresUserRepository implements IUserRepository {
  async find(): Promise<User[]> {
    const userList = await prisma.user.findMany();

    return userList;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({where: {email}});

    return user;
  }

  async save(data: ICreateUserRequestDTO): Promise<User> {
    const user = await prisma.user.create({data});

    return user;
  }
}
