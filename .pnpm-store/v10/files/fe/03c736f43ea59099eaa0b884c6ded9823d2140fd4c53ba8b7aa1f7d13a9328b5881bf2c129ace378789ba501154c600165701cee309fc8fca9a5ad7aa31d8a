export function bubbleSort (list, comparator) {
  let upperIndex = list.length - 1;

  while (upperIndex > 0) {
    let swapIndex = 0;

    for (let i = 0; i < upperIndex; i += 1) {
      if (comparator(list[i], list[i + 1]) > 0) {
        const temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
        swapIndex = i;
      }
    }

    upperIndex = swapIndex;
  }

  return list;
}
