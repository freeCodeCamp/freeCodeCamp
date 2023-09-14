const numToCommas = (num: number) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

// the number is used to indicate to the doner about how much hours of free education their dontation will provide.
const EDUCATION_HOURS_PER_DOLLAR = 50;
export const CENTS_IN_DOLLAR = 100;
export const convertToTimeContributed = (amount: number) =>
  numToCommas((amount / convertAmountToUSD) * contributedHoursOfFreeEduction);
export const formattedAmountLabel = (amount: number) =>
  numToCommas(amount / convertAmountToUSD);
