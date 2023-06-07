---
id: 594810f028c0303b75339acc
title: Проблема ABC
challengeType: 1
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

Вам дано набір кубиків ABC (наприклад, дитячі кубики з алфавітом). Існує 20 блоків з двома літерами на кожному кубику. Завершений алфавіт гарантовано є на всіх сторонах кубиків. Зразок кубиків:

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

Реалізуйте функцію, яка бере рядок (слово) та визначає, чи можна написати слово з даного набору кубиків.

Правила, які треба добре запам'ятати:

<ul>
  <li>Після використання букви на кубику, цей кубик не можна використати знову.</li>
  <li>Функція має бути чутливою до регістру.</li>
</ul>

# --hints--

`canMakeWord` має бути функцією.

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` повинен повернути логічний тип даних.

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")` має повернути true.

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` має повернути false.

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` має повернути true.

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` має повернути false.

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` має повернути true.

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` має повернути true.

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
