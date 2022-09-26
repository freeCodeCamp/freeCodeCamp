---
id: 5a23c84252665b21eecc8005
title: Algoritmi di Ordinamento/Comb Sort
challengeType: 1
forumTopicId: 302313
dashedName: sorting-algorithmscomb-sort
---

# --description--

Implementa un *comb sort*.

L'algoritmo **Comb Sort** è una variante di Bubble Sort.

Come Shell Sort, Comb Sort aumenta gli spazi usati nelle comparazioni e negli scambi.

Dividere il divario per $(1-e^{-\\varphi})^{-1} \\ca. 1.247330950103979$ funziona meglio, ma 1.3 può essere più pratico.

Alcune implementazioni usano l'insertion sort una volta che il divario è inferiore a una certa quantità.

Varianti:

<ul>
  <li>Combsort11 assicura che il divario finisca in (11, 8, 6, 4, 3, 2, 1), che è significativamente più veloce delle altre due possibili terminazioni.</li>
  <li>Combsort con diversi terminali diventa un ordinamento più efficiente quando i dati sono quasi del tutto ordinati (quando il divario è piccolo). Combsort con un gap basso non è molto meglio di Bubble Sort.</li>
</ul>

Pseudocodice:

<pre><b>function</b> combsort(<b>array</b> input)
  gap := input<b>.size</b> <i>//initialize gap size</i>
  <b>loop until</b> gap = 1 <b>and</b> swaps = 0
    <i>//update the gap value for a next comb. Below is an example</i>
    gap := int(gap / 1.25)
    <b>if</b> gap &#x3C; 1 
      <i>//minimum gap is 1</i>
      gap := 1
    <b>end if</b>
    i := 0
    swaps := 0 <i>//see <a href='https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort' target='_blank'>Bubble Sort</a> for an explanation</i>
    <i>//a single "comb" over the input list</i>
    <b>loop until</b> i + gap >= input<b>.size</b> <i>//see <a href='https://rosettacode.org/wiki/Sorting_algorithms/Shell_sort' target='_blank'>Shell sort</a> for similar idea</i>
      <b>if</b> input[i] > input[i+gap]
        <b>swap</b>(input[i], input[i+gap])
        swaps := 1 <i>// Flag a swap has occurred, so the</i>
            <i>// list is not guaranteed sorted</i>
      <b>end if</b>
      i := i + 1
    <b>end loop</b>
  <b>end loop</b>
<b>end function</b>
</pre>

# --instructions--

Scrivi una funzione che ordina un determinato array usando Combsort.

# --hints--

`combSort` dovrebbe essere una funzione.

```js
assert(typeof combSort == 'function');
```

`combSort([25, 32, 12, 7, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(combSort([25, 32, 12, 7, 20])));
```

`combSort([25, 32, 12, 7, 20])` dovrebbe restituire `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(combSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`combSort([38, 45, 35, 8, 13])` dovrebbe restituire `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(combSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`combSort([43, 36, 20, 34, 24])` dovrebbe restituire `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(combSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`combSort([12, 33, 26, 18, 1, 16, 38])` dovrebbe restituire `[1, 12, 16, 18, 26, 33, 38]`.

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

`combSort([3, 39, 48, 16, 1, 4, 29])` dovrebbe restituire `[1, 3, 4, 16, 29, 39, 48]`.

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
