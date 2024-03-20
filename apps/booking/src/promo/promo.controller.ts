import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromoService } from "./promo.service";
import { PromoControllerBase } from "./base/promo.controller.base";

@swagger.ApiTags("promos")
@common.Controller("promos")
export class PromoController extends PromoControllerBase {
  constructor(protected readonly service: PromoService) {
    super(service);
  }
}
