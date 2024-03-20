/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PromoWhereInput } from "./PromoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PromoOrderByInput } from "./PromoOrderByInput";

@ArgsType()
class PromoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PromoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PromoWhereInput, { nullable: true })
  @Type(() => PromoWhereInput)
  where?: PromoWhereInput;

  @ApiProperty({
    required: false,
    type: [PromoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PromoOrderByInput], { nullable: true })
  @Type(() => PromoOrderByInput)
  orderBy?: Array<PromoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PromoFindManyArgs as PromoFindManyArgs };