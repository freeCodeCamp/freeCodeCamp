---
id: 594810f028c0303b75339acc
title: Задача ABC
challengeType: 1
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

Вам надано набір блоків ABC (тобто дитячі кубики з алфавітом). Загалом 20 блоків по дві літери на кожному. Гарантовано, що на блоках розташовано всі літери алфавіту. Зразок такого набору:

<pre>(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>

# --instructions--

Реалізуйте функцію, яка приймає рядок (слово) та визначає, чи з даного набору блоків можна скласти це слово.

Деякі правила:

<ul>
  <li>Якщо літера на блоці вже використана, цей блок не можна використати ще раз.</li>
  <li>Функція не має бути чутливою до регістру.</li>
</ul>

# --hints--

`canMakeWord` має бути функцією.

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` має повернути булеве значення.

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")` має повернути `true`.

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` має повернути `false`.

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` має повернути `true`.

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` має повернути `false`.

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` має повернути `true`.

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` має повернути `true`.

```js
assert(canMakeWord(words[5]));
```

# --seed--

## --after-user-code--

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

## --seed-contents--

```js
function canMakeWord(word) {

}
```

# --solutions--

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```
