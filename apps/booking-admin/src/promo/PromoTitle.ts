import { Promo as TPromo } from "../api/promo/Promo";

export const PROMO_TITLE_FIELD = "id";

export const PromoTitle = (record: TPromo): string => {
  return record.id?.toString() || String(record.id);
};
