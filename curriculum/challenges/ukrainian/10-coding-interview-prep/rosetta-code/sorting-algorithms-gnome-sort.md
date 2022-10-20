---
id: 5a23c84252665b21eecc8007
title: Алгоритми сортування/Сортування гнома
challengeType: 1
forumTopicId: 302314
dashedName: sorting-algorithmsgnome-sort
---

# --description--

Gnome sort is a sorting algorithm which is similar to <a href="https://rosettacode.org/wiki/Insertion_sort" target="_blank" rel="noopener noreferrer nofollow">Insertion sort</a>, except that moving an element to its proper place is accomplished by a series of swaps, as in <a href="https://rosettacode.org/wiki/Bubble" target="_blank" rel="noopener noreferrer nofollow">Bubble Sort</a>.

Псевдокод для алгоритму:

<pre><b>function</b> <i>gnomeSort</i>(a[0..size-1])
  i := 1
  j := 2
  <b>while</b> i &#x3C; size <b>do</b>
    <b>if</b> a[i-1] &#x3C;= a[i] <b>then</b>
      <i>/// для сортування за спаданням використовуйте >= для порівняння</i>
      i := j
      j := j + 1
    <b>else</b>
      <b>swap</b> a[i-1] <b>and</b> a[i]
      i := i - 1
      <b>if</b> i = 0 <b>then</b>
        i := j
        j := j + 1
      <b>endif</b>
    <b>endif</b>
  <b>done</b>
</pre>

# --instructions--

Напишіть функцію для виконання зазначеного вище псевдокоду. Функція має повернути впорядкований масив.

# --hints--

`gnomeSort` має бути функцією.

```js
assert(typeof gnomeSort == 'function');
```

`gnomeSort([25, 32, 12, 7, 20])` має повернути масив.

```js
assert(Array.isArray(gnomeSort([25, 32, 12, 7, 20])));
```

`gnomeSort([25, 32, 12, 7, 20])` має повернути `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(gnomeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`gnomeSort([38, 45, 35, 8, 13])` має повернути `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(gnomeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`gnomeSort([43, 36, 20, 34, 24])` має повернути `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(gnomeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`gnomeSort([12, 33, 26, 18, 1, 16, 38])` має повернути `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(gnomeSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`gnomeSort([3, 39, 48, 16, 1, 4, 29])` має повернути `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(gnomeSort([3, 39, 48, 16, 1, 4, 29]), [
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
function gnomeSort(a) {

}
```

# --solutions--

```js
function gnomeSort(a) {
  function moveBack(i) {
    for (; i > 0 && a[i - 1] > a[i]; i--) {
      var t = a[i];
      a[i] = a[i - 1];
      a[i - 1] = t;
    }
  }
  for (var i = 1; i < a.length; i++) {
    if (a[i - 1] > a[i]) moveBack(i);
  }
  return a;
}
```
