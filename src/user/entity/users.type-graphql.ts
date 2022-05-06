import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
@ObjectType()
export class UsersTypeGraphql {
  @Field(() => ID)
  readonly id: any;

  readonly name: string;

  readonly coffee?: string;
  readonly title?: string;
}

@InputType()
export class UsersInsertTypeGraphql {
  readonly name: string;

  readonly coffee?: string;
}

@InputType()
export class UsersInputTypeGraphql {
  @Field(() => ID)
  readonly id: any;

  readonly name: string;

  readonly coffee?: string;
}

@InputType()
export class UsersTypeGraphql2 {
  @Field(() => ID)
  readonly id: any;

  readonly name: string;

  readonly coffee?: string;

  readonly title?: string;

  readonly ratio?: number;

  readonly cup?: number;

  readonly description?: string;
}
