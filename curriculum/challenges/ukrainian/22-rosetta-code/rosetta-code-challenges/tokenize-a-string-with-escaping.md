---
id: 594faaab4e2a8626833e9c3d
title: Tokenize a string with escaping
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Write a function or program that can split a string at each non-escaped occurrence of a separator character.

Вона має приймати три вхідні параметри:

<ul>
  <li><strong>рядок</strong></li>
  <li><strong>відокремлювальний символ</strong></li>
  <li><strong>символ переходу</strong></li>
</ul>

Вона має вивести список рядків.

Правила для відокремлення:

<ul>
  <li>Поля, розділені відокремлювальними символами, стають елементами вихідного списку.</li>
  <li>Порожні поля мають зберегтись, навіть спочатку та вкінці.</li>
</ul>

Правила для переходу:

<ul>
  <li>"Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.</li>
  <li>When the escape character precedes a character that has no special meaning, it still counts as an escape (but does not do anything special).</li>
  <li>Each occurrences of the escape character that was used to escape something, should not become part of the output.</li>
</ul>

Доведемо, що функція задовольняє такий випадок:

Дано рядок

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

використовуючи `|` як відокремлювальний символ та `^` як символ переходу, функція має вивести наступний масив:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` має бути функцією.

```js
assert(typeof tokenize === 'function');
```

`tokenize` має повернути масив.

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` має повернути `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` має повернути `['a&bcd', 'ef', '', '@hi']`

```js
assert.deepEqual(tokenize(testStr2, '&', '@'), res2);
```

# --seed--

## --after-user-code--

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

// TODO add more tests
const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];
```

## --seed-contents--

```js
function tokenize(str, sep, esc) {
  return true;
}
```

# --solutions--

```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? '' : (
          a.token + (blnEscChar ? '' : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: '',
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}
```
