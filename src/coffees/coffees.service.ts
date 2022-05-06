import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffees } from './entity/coffees.entity';

@Injectable()
export class CoffeesService {
  constructor(@InjectRepository(Coffees) public coffeesRepository: Repository<Coffees>) {}

  public findAll() {
    return this.coffeesRepository.find();
  }

  public findOneById(id: any) {
    return this.coffeesRepository.findOne(id);
  }

  public updateOne(coffees: Partial<Coffees>) {
    return this.coffeesRepository.update(coffees.id, coffees);
  }

  public addOne(coffees: Partial<Coffees>) {
    return this.coffeesRepository.save(coffees);
  }

  public deleteOne(id: string) {
    return this.coffeesRepository.delete(id);
  }
}
