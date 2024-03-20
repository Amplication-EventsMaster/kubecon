import { Module } from "@nestjs/common";
import { PromoModuleBase } from "./base/promo.module.base";
import { PromoService } from "./promo.service";
import { PromoController } from "./promo.controller";
import { PromoResolver } from "./promo.resolver";

@Module({
  imports: [PromoModuleBase],
  controllers: [PromoController],
  providers: [PromoService, PromoResolver],
  exports: [PromoService],
})
export class PromoModule {}
