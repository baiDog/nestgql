import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
@ObjectType()
export class CoffeesTypeGraphql {
  @Field(() => ID)
  readonly id: any;

  readonly title: string;

  readonly ratio?: number;

  readonly cup?: number;

  readonly description?: string;
}

@InputType()
export class CoffeesInsertTypeGraphql {
  readonly title: string;

  readonly ratio?: number;

  readonly cup?: number;

  readonly description?: string;
}

@InputType()
export class CoffeesInputTypeGraphql {
  @Field(() => ID)
  readonly id: any;

  readonly title: string;

  readonly ratio?: number;

  readonly cup?: number;

  readonly description?: string;
}
