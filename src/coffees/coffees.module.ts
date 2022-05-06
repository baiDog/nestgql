import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffees } from './entity/coffees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffees])],
  providers: [CoffeesService, CoffeesResolver],
  exports: [CoffeesService],
})
export class CoffeesModule {}
