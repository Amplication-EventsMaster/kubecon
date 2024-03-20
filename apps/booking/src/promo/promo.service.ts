import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromoServiceBase } from "./base/promo.service.base";

@Injectable()
export class PromoService extends PromoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
