/** Shuffle array using the Fisher–Yates shuffle algorithm */
export const shuffleArray = <T>(arrToShuffle: Array<T>) => {
  const arr = [...arrToShuffle];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    // tsc would throw an error here as it can't guarantee that
    // the elements being swapped would have the same type.
    // Type check can be ignored here since the function isn't interested in the element values.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};
