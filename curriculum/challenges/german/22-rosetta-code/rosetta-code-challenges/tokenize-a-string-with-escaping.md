---
id: 594faaab4e2a8626833e9c3d
title: Tokenisierung einer Zeichenkette mit Escaping
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Write a function or program that can split a string at each non-escaped occurrence of a separator character.

Sie sollte drei Eingabeparameter akzeptieren:

<ul>
  <li>The <strong>string</strong></li>
  <li>The <strong>separator character</strong></li>
  <li>The <strong>escape character</strong></li>
</ul>

Es sollte eine Liste von Zeichenketten ausgeben.

Regeln für die Aufteilung:

<ul>
  <li>The fields that were separated by the separators, become the elements of the output list.</li>
  <li>Leere Felder sollten beibehalten werden, auch am Anfang und am Ende.</li>
</ul>

Regeln für die Flucht:

<ul>
  <li>"Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.</li>
  <li>Wenn das Escape-Zeichen vor einem Zeichen steht, das keine besondere Bedeutung hat, gilt es trotzdem als Escape-Zeichen (hat aber keine besondere Wirkung).</li>
  <li>Jedes Vorkommen des Escape-Zeichens, das verwendet wurde, um etwas zu entkommen, sollte nicht Teil der Ausgabe werden.</li>
</ul>

Zeige, dass deine Funktion den folgenden Testfall erfüllt:

Angesichts der Zeichenkette

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

und unter Verwendung von `|` als Trennzeichen und `^` als Escape-Zeichen, sollte deine Funktion die folgende Anordnung ausgeben:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` sollte eine Funktion sein.

```js
assert(typeof tokenize === 'function');
```

`tokenize` sollte ein Array zurückgeben.

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` sollte `['one|uno', '', 'three^^', 'four^|cuatro', '']` zurückgeben

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` sollte `['a&bcd', 'ef', '', '@hi']` zurückgeben

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
