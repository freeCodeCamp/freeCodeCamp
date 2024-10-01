/** Shuffle array using the Fisher–Yates shuffle algorithm */
export const shuffleArray = <T>(arrToShuffle: Array<T>) => {
  const arr = [...arrToShuffle];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};
