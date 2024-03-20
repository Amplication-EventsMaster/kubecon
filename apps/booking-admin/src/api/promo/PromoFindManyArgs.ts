import { PromoWhereInput } from "./PromoWhereInput";
import { PromoOrderByInput } from "./PromoOrderByInput";

export type PromoFindManyArgs = {
  where?: PromoWhereInput;
  orderBy?: Array<PromoOrderByInput>;
  skip?: number;
  take?: number;
};
