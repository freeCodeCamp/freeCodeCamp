const numToCommas = (num: number) => Intl.NumberFormat('en-US').format(num);
const EDUCATION_HOURS_PER_DOLLAR = 50;
export const CENTS_IN_DOLLAR = 100;
export const convertToTimeContributed = (amount: number) =>
  numToCommas((amount / CENTS_IN_DOLLAR) * EDUCATION_HOURS_PER_DOLLAR);
export const formattedAmountLabel = (amount: number) =>
  numToCommas(amount / CENTS_IN_DOLLAR);
