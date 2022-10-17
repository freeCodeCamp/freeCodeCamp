---
id: 594faaab4e2a8626833e9c3d
title: Tokenizzare una stringa con escaping
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Scrivi una funzione o un programma che può dividere una stringa ad ogni occorrenza di un carattere separatore (salvo escape).

Dovrebbe accettare tre parametri di input:

<ul>
  <li>La <strong>stringa</strong></li>
  <li>Il carattere <strong>separatore</strong></li>
  <li>Il <strong>carattere di escape</strong></li>
</ul>

Dovrebbe produrre un elenco di stringhe.

Regole di suddivisione:

<ul>
  <li>I campi separati dai separatori diventano gli elementi della lista di output.</li>
  <li>I campi vuoti dovrebbero essere preservati, anche all'inizio e alla fine.</li>
</ul>

Regole di escape:

<ul>
  <li>"Fare l'escape" significa far precedere il carattere da una occorrenza del carattere di escape.</li>
  <li>Quando il carattere di escape precede un carattere che non ha alcun significato speciale, conta ancora come un escape (ma non fa nulla di speciale).</li>
  <li>Ogni occorrenza del carattere di escape che è stato usato per evitare qualcosa, non dovrebbe diventare parte dell'output.</li>
</ul>

Dimostra che la tua funzione soddisfa il seguente caso di test:

Data la stringa

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

e usando `|` come separatore e `^` come carattere di escape la funzione dovrebbe produrre il seguente array:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` dovrebbe essere una funzione.

```js
assert(typeof tokenize === 'function');
```

`tokenize` dovrebbe restituire un array.

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` dovrebbe restituire `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` dovrebbe restituire `['a&bcd', 'ef', '', '@hi']`

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
