import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { CoffeesService } from '../coffees/coffees.service';

import { UsersTypeGraphql, UsersInputTypeGraphql, UsersInsertTypeGraphql } from './entity/users.type-graphql';
import { awaitWrap } from '../utils';

@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService, private coffeesService: CoffeesService) {}

  @Query(() => [UsersTypeGraphql])
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Query(() => UsersTypeGraphql)
  async getUsers(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }
  // 查询 userCoffee及数据
  @Query(() => UsersTypeGraphql)
  async getUsersAndC(@Args('id') id: string) {
    const userData: any = await this.usersService.findOneById(id);
    if (userData.coffee) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...coffeeData } = await this.coffeesService.findOneById(userData.coffee);
      return { ...userData, ...coffeeData };
    }
    // return userData;
  }

  @Mutation(() => UsersTypeGraphql)
  async addOneUsers(@Args('users') users: UsersInsertTypeGraphql) {
    return this.usersService.addOne({ ...users });
  }

  @Mutation(() => UsersTypeGraphql)
  async updateUsers(@Args('users') users: UsersInputTypeGraphql) {
    const [err] = await awaitWrap(this.usersService.updateOne(users));
    if (err) {
      return users;
    }
    return this.usersService.findOneById(users.id);
  }

  @Mutation(() => Boolean)
  async deleteOneUsers(@Args('id') id: string) {
    const [err] = await awaitWrap(this.usersService.deleteOne(id));
    if (err) {
      return false;
    }
    return true;
  }
}
