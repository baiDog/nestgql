import { Entity, Column, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column({ unique: true })
  readonly name: string;

  @Column()
  readonly coffee: string;
}
