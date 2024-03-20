import * as graphql from "@nestjs/graphql";
import { PromoResolverBase } from "./base/promo.resolver.base";
import { Promo } from "./base/Promo";
import { PromoService } from "./promo.service";

@graphql.Resolver(() => Promo)
export class PromoResolver extends PromoResolverBase {
  constructor(protected readonly service: PromoService) {
    super(service);
  }
}
