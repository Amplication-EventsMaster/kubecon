/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Promo } from "@prisma/client";

export class PromoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PromoCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromoCountArgs>
  ): Promise<number> {
    return this.prisma.promo.count(args);
  }

  async promos<T extends Prisma.PromoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromoFindManyArgs>
  ): Promise<Promo[]> {
    return this.prisma.promo.findMany(args);
  }
  async promo<T extends Prisma.PromoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromoFindUniqueArgs>
  ): Promise<Promo | null> {
    return this.prisma.promo.findUnique(args);
  }
  async createPromo<T extends Prisma.PromoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromoCreateArgs>
  ): Promise<Promo> {
    return this.prisma.promo.create<T>(args);
  }
  async updatePromo<T extends Prisma.PromoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromoUpdateArgs>
  ): Promise<Promo> {
    return this.prisma.promo.update<T>(args);
  }
  async deletePromo<T extends Prisma.PromoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromoDeleteArgs>
  ): Promise<Promo> {
    return this.prisma.promo.delete(args);
  }
}
