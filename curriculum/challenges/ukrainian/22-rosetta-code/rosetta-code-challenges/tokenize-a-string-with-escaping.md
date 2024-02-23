---
id: 594faaab4e2a8626833e9c3d
title: Токенізація рядка символами екранування
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Напишіть функцію або програму, яка може поділити рядок кожного разу, коли зустрічається неекранований відокремлювальний символ.

Вона має приймати три вхідні параметри:

<ul>
  <li><strong>рядок</strong></li>
  <li><strong>відокремлювальний символ</strong></li>
  <li><strong>символ екранування</strong></li>
</ul>

Вона має вивести список рядків.

Правила для відокремлення:

<ul>
  <li>Поля, розділені відокремлювальними символами, стають елементами вихідного списку.</li>
  <li>Порожні поля мають зберегтись, навіть спочатку та вкінці.</li>
</ul>

Правила для екранування:

<ul>
  <li>«Екранованим» вважають символ, якщо перед ним стоїть символ екранування, який сам не є екранованим.</li>
  <li>Якщо символ екранування передує символу, який не має особливого значення, він все одно вважається символом екранування (але не робить нічого особливого).</li>
  <li>Частиною вихідних даних не повинен бути кожен випадок, коли символ екранування було використано для екранування.</li>
</ul>

Доведемо, що функція задовольняє такий випадок:

Дано рядок

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

використовуючи `|` як відокремлювальний символ та `^` як символ екранування, функція має вивести наступний масив:

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
