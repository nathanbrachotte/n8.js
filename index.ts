/**
 * TypeScript Utilities
 */
export type ValidValue<T> = Exclude<T, null | undefined | 0 | "" | false>;
export type Optional<T> = T | undefined | null;

/**
 * Just like .filter(Boolean), but allows TypeScript to exclude falsy values in return type
 * @example
 * ```ts
 * const x = [1, 2, 3, "", null, undefined, 0, false]
 * const y = x.filter(BooleanFilter)
 * // y is [1, 2, 3]
 * ```
 */
export const BooleanFilter = <T>(x: T): x is ValidValue<T> => Boolean(x);
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

/**
 * Strings
 */
export function capitaliseFirstChar(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function enumToNiceString(str: string) {
  const newStr = str
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Money
 */
export const formatMoneyCompact = (
  currency: string | undefined,
  amount: number
) =>
  new Intl.NumberFormat("en-GB", {
    ...(currency && {
      style: "currency",
      currency: currency,
    }),
    notation: "compact",
    minimumFractionDigits: 0,
  }).format(amount);

export const formatMoney = (currency: string | undefined, amount: number) => {
  return new Intl.NumberFormat("en-GB", {
    ...(currency && {
      style: "currency",
      currency: currency,
    }),
    minimumFractionDigits: 2,
    currencyDisplay: "narrowSymbol",
  }).format(amount);
};
