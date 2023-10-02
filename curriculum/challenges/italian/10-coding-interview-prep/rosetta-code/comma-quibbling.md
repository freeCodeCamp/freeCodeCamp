---
id: 596e414344c3b2872167f0fe
title: Cavillare
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Comma quibbling</a> è una sfida creata da Eric Lippert sul suo blog.

# --instructions--

Scrivi una funzione per generare una stringa output che è la concatenazione di parole di input da una lista/sequenza dove:

<ol>
  <li>Un input senza parole produce una stringa output con solo due parentesi graffe (<code>"{}"</code>)</li>
  <li>Un input di una sola parola, per esempio <code>["ABC"]</code> produce una stringa output con la parola dentro due parentesi graffe (<code>"{ABC}"</code>)</li>
  <li>Un input di due parole, per esempio <code>["ABC", "DEF"]</code> produce una stringa output con due parole dentro le due parentesi graffe con le parole separate dalla stringa <code>" and "</code>, per esempio (<code>"{ABC and DEF}"</code>)</li>
  <li>Un input di tre o più parole, per esempio <code>["ABC", "DEF", "G", "H"]</code> produce una stringa output con tutte le parole, tranne le ultime due, separate da <code>", "</code>, e con l'ultima parola separata da <code>" and "</code>; per esempio (<code>"{ABC, DEF, G and H}"</code>)</li>
</ol>

Testa la tua funzione con la seguente serie di input mostrando il tuo output qui sulla pagina:

<ul>
  <li>[] # (Nessuna parola di input).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**Nota:** Assumi che le parole siano stringhe non vuote di caratteri maiuscoli per questa sfida.

# --hints--

`quibble` dovrebbe essere una funzione.

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` dovrebbe restituire una stringa.

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` dovrebbe restituire "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` dovrebbe restituire `"{ABC}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` dovrebbe restituire `"{ABC and DEF}"`.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` dovrebbe restituire `"{ABC, DEF, G and H}"`.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC, DEF, G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(", ") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
