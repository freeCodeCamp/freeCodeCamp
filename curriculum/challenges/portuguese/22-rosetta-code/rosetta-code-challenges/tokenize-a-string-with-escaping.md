---
id: 594faaab4e2a8626833e9c3d
title: Tokenizar uma string com escape
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Write a function or program that can split a string at each non-escaped occurrence of a separator character.

Ela deve aceitar três parâmetros de entrada:

<ul>
  <li>The <strong>string</strong></li>
  <li>The <strong>separator character</strong></li>
  <li>The <strong>escape character</strong></li>
</ul>

Ela deve ter como saída uma lista de strings.

Regras para a divisão:

<ul>
  <li>The fields that were separated by the separators, become the elements of the output list.</li>
  <li>Campos vazios devem ser preservados, mesmo no início e no fim.</li>
</ul>

Regras para o escape:

<ul>
  <li>"Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.</li>
  <li>Quando o caractere de escape preceder um caractere que não tem nenhum significado especial, ele ainda conta como um escape (mas não faz nada especial).</li>
  <li>Cada ocorrência do caractere de escape que for usada para fazer o escape de algo não deve se tornar parte do resultado.</li>
</ul>

Demonstre que sua função satisfaz o seguinte caso de teste:

Dada a string

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

e usando `|` como separador e `^` como caractere de escape, a função deve dar como resultado o seguinte array:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` deve ser uma função.

```js
assert(typeof tokenize === 'function');
```

`tokenize` deve retornar um array.

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` deve retornar `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` deve retornar `['a&bcd', 'ef', '', '@hi']`

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
