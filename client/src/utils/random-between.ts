// returns a random number between x and y
export const randomBetween = (x: number, y: number): number =>
  Math.floor(Math.random() * (y - x + 1)) + x;
