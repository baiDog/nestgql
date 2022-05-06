import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) public usersRepository: Repository<Users>) {}

  public findAll() {
    return this.usersRepository.find();
  }

  public findOneById(id: any) {
    return this.usersRepository.findOne(id);
  }

  public updateOne(users: Partial<Users>) {
    return this.usersRepository.update(users.id, users);
  }

  public addOne(users: Partial<Users>) {
    return this.usersRepository.save(users);
  }

  public deleteOne(id: string) {
    return this.usersRepository.delete(id);
  }
}
