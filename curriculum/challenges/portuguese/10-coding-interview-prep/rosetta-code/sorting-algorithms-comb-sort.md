---
id: 5a23c84252665b21eecc8005
title: Algoritmos de ordenação/ordenação do pente
challengeType: 1
forumTopicId: 302313
dashedName: sorting-algorithmscomb-sort
---

# --description--

Implemente uma *ordenação de pente*.

A **ordenação de pente** (Comb Sort) é uma variante da ordenação de bolha (Bubble Sort).

Assim como ordenação Shell Sort, a Comb Sort aumenta a diferença usada nas comparações e trocas.

Dividir a diferença por $(1-e^{-\\varphi})^{-1} \\approx 1,247330950103979$ funciona melhor, mas 1,3 pode ser mais prático.

Algumas implementações usam a ordenação de inserção, já que a diferença é menor do que uma certa quantidade.

Variantes:

<ul>
  <li>Combsort11 garante que a diferença termine em (11, 8, 6, 4, 3, 2, 1), o que é significativamente mais rápido do que as outras duas terminações possíveis.</li>
  <li>A ordenação de pente com terminações diferentes muda para uma ordenação mais eficiente quando os dados estão quase ordenados (quando a diferença é pequena). A ordenação de pente com diferença baixa não é muito melhor que a ordenação de bolha.</li>
</ul>

Pseudocódigo:

<pre><b>function</b> combsort(<b>array</b> input)
  gap := input<b>.size</b> <i>//inicialize o tamanho da diferença</i>
  <b>loop until</b> gap = 1 <b>and</b> swaps = 0
    <i>//atualize o valor da diferença para o próximo pente. Abaixo, vemos um exemplo</i>
    gap := int(gap / 1.25)
    <b>if</b> gap &#x3C; 1 
      <i>//a diferença mínima é 1</i>
      gap := 1
    <b>end if</b>
    i := 0
    swaps := 0 <i>//veja <a href='https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort' target='_blank'>ordenação de bolha</a> para uma explicação</i>
    <i>//um único "pente" sobre a lista de entradas</i>
    <b>loop until</b> i + gap >= input<b>.size</b> <i>//consulte a <a href='https://rosettacode.org/wiki/Sorting_algorithms/Shell_sort' target='_blank'>ordenação de concha</a> para ver uma ideia semelhante</i>
      <b>if</b> input[i] > input[i+gap]
        <b>swap</b>(input[i], input[i+gap])
        swaps := 1 <i>// Marque uma troca que ocorreu, para que</i>
            <i>// a lista não esteja garantidamente ordenada</i>
      <b>end if</b>
      i := i + 1
    <b>end loop</b>
  <b>end loop</b>
<b>end function</b>
</pre>

# --instructions--

Escreva uma função que ordene um determinado array usando uma ordenação de pente.

# --hints--

`combSort` deve ser uma função.

```js
assert(typeof combSort == 'function');
```

`combSort([25, 32, 12, 7, 20])` deve retornar um array.

```js
assert(Array.isArray(combSort([25, 32, 12, 7, 20])));
```

`combSort([25, 32, 12, 7, 20])` deve retornar `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(combSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`combSort([38, 45, 35, 8, 13])` deve retornar `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(combSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`combSort([43, 36, 20, 34, 24])` deve retornar `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(combSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`combSort([12, 33, 26, 18, 1, 16, 38])` deve retornar `[1, 12, 16, 18, 26, 33, 38]`.

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

`combSort([3, 39, 48, 16, 1, 4, 29])` deve retornar `[1, 3, 4, 16, 29, 39, 48]`.

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
