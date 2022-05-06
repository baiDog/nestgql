import { Entity, Column, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffees {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column()
  readonly title: string;

  @Column()
  readonly ratio: number;

  @Column()
  readonly cup: number;

  @Column()
  readonly description: string;
}
