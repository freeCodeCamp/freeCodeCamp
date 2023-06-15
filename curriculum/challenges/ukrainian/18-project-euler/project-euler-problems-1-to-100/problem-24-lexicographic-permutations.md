---
id: 5900f3841000cf542c50fe97
title: 'Завдання 24: лексикографічні перестановки'
challengeType: 1
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

Перестановкою називають впорядковане розташування об’єктів. Наприклад, 3124 — єдина можлива перестановка цифр 1, 2, 3 та 4. Якщо перестановку виконано за числовим значенням або за алфавітом, її називають лексикографічною. Лексикографічними перестановками цифр 0, 1 та 2 є:

<div style='text-align: center;'>012   021   102   120   201   210</div>

Яка `n`-на лексикографічна перестановка цифр 0, 1, 2, 3, 4, 5, 6, 7, 8 і 9?

# --hints--

`lexicographicPermutations(699999)` має повернути число.

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` має повернути 1938246570.

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` має повернути 2536987410.

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` має повернути 2537014689.

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` має повернути 2783915460.

```js
assert(lexicographicPermutations(999999) == 2783915460);
```

# --seed--

## --seed-contents--

```js
function lexicographicPermutations(n) {

  return n;
}

lexicographicPermutations(999999);
```

# --solutions--

```js
// solution required
```
