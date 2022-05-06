import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { CoffeesModule } from '../coffees/coffees.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), CoffeesModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
