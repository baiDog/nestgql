import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { CoffeesTypeGraphql, CoffeesInputTypeGraphql, CoffeesInsertTypeGraphql } from './entity/coffees.type-graphql';
import { awaitWrap } from '../utils';

@Resolver('Coffees')
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  //查询所有商品
  @Query(() => [CoffeesTypeGraphql])
  async getAllCoffees() {
    return this.coffeesService.findAll();
  }

  //查询单个商品
  @Query(() => CoffeesTypeGraphql)
  async getCoffees(@Args('id') id: string) {
    return this.coffeesService.findOneById(id);
  }

  //新增一个商品
  @Mutation(() => CoffeesTypeGraphql)
  async addOneCoffees(@Args('coffees') coffees: CoffeesInsertTypeGraphql) {
    return this.coffeesService.addOne({ ...coffees });
  }

  // 更新一个商品信息
  @Mutation(() => CoffeesTypeGraphql)
  async updateCoffees(@Args('coffees') coffees: CoffeesInputTypeGraphql) {
    const [err] = await awaitWrap(this.coffeesService.updateOne(coffees));
    if (err) {
      return coffees;
    }
    return this.coffeesService.findOneById(coffees.id);
  }

  // 删除一个商品信息
  @Mutation(() => Boolean)
  async deleteOneCoffees(@Args('id') id: string) {
    const [err] = await awaitWrap(this.coffeesService.deleteOne(id));
    if (err) {
      return false;
    }
    return true;
  }
}
