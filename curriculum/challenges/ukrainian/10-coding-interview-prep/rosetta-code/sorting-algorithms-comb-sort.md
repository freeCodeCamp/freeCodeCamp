---
id: 5a23c84252665b21eecc8005
title: Алгоритми сортування/Сортування гребінцем
challengeType: 1
forumTopicId: 302313
dashedName: sorting-algorithmscomb-sort
---

# --description--

Виконайте *сортування гребінцем*.

The **Comb Sort** is a variant of the Bubble Sort.

Like the Shell sort, the Comb Sort increases the gap used in comparisons and exchanges.

Поділ розриву найкраще здійснити на $(1-e^{-\\varphi})^{-1} \\approx 1.247330950103979$, але значення 1.3 може бути практичнішим.

Деякі реалізації використовують сортування включенням, коли розрив менший за певну величину.

Variants:

<ul>
  <li>Combsort11 makes sure the gap ends in (11, 8, 6, 4, 3, 2, 1), which is significantly faster than the other two possible endings.</li>
  <li>Combsort with different endings changes to a more efficient sort when the data is almost sorted (when the gap is small). Comb sort with a low gap isn't much better than the Bubble Sort.</li>
</ul>

Pseudocode:

<pre><b>function</b> combsort(<b>array</b> input)
  gap := input<b>.size</b> <i>//встановити розмір розриву</i>
  <b>loop until</b> gap = 1 <b>and</b> swaps = 0
    <i>//оновити значення розриву для наступного гребінця. Нижче наведено приклад</i>
    gap := int(gap / 1.25)
    <b>if</b> gap &#x3C; 1 
      <i>//1 – це мінімальний розрив</i>
      gap := 1
    <b>end if</b>
    i := 0
    swaps := 0 <i>//see <a href='https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort' target='_blank'>Bubble Sort</a> for an explanation</i>
    <i>//одинарний «гребінець» над вхідним списком</i>
    <b>loop until</b> i + gap >= input<b>.size</b> <i>//see <a href='https://rosettacode.org/wiki/Sorting_algorithms/Shell_sort' target='_blank'>Shell sort</a> for similar idea</i>
      <b>if</b> input[i] > input[i+gap]
        <b>swap</b>(input[i], input[i+gap])
        swaps := 1 <i>// Позначте, що заміна сталася, тому</i>
            <i>// не гарантовано, що список упорядкований</i>
      <b>end if</b>
      i := i + 1
    <b>end loop</b>
  <b>end loop</b>
<b>end function</b>
</pre>

# --instructions--

Write a function that sorts a given array using Comb sort.

# --hints--

`combSort` має бути функцією.

```js
assert(typeof combSort == 'function');
```

`combSort([25, 32, 12, 7, 20])` має повернути масив.

```js
assert(Array.isArray(combSort([25, 32, 12, 7, 20])));
```

`combSort([25, 32, 12, 7, 20])` має повернути `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(combSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`combSort([38, 45, 35, 8, 13])` має повернути `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(combSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`combSort([43, 36, 20, 34, 24])` має повернути `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(combSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`combSort([12, 33, 26, 18, 1, 16, 38])` має повернути `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(combSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`combSort([3, 39, 48, 16, 1, 4, 29])` має повернути `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(combSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function combSort(arr) {

}
```

# --solutions--

```js
function combSort(arr) {
  function is_array_sorted(arr) {
    var sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        break;
      }
    }
    return sorted;
  }
  var iteration_count = 0;
  var gap = arr.length - 2;
  var decrease_factor = 1.25;

  // Until array is not sorted, repeat iterations
  while (!is_array_sorted(arr)) {
    // If not first gap
    if (iteration_count > 0)
      // Calculate gap
      gap = gap == 1 ? gap : Math.floor(gap / decrease_factor);

    // Set front and back elements and increment to a gap
    var front = 0;
    var back = gap;
    while (back <= arr.length - 1) {
      // If elements are not ordered swap them
      if (arr[front] > arr[back]) {
        var temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
      }

      // Increment and re-run swapping
      front += 1;
      back += 1;
    }
    iteration_count += 1;
  }

  return arr;
}
```
