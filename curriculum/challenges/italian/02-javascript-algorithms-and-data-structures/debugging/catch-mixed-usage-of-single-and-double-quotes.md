---
id: 587d7b84367417b2b2512b37
title: Scovare l'uso misto di virgolette singole e doppie
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript consente l'uso dell'apostrofo (`'`) e delle virgolette (`"`) per dichiarare una stringa. Decidere quale utilizzare generalmente è una questione di gusti personali, con alcune eccezioni.

Avere due scelte è ottimo quando una stringa ha all'interno contrazioni o un altro pezzo di testo citato. Basta stare attenti a non chiudere la stringa troppo presto, perché provocherebbe un errore di sintassi.

Ecco alcuni esempi di virgolette miste:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

I primi due sono corretti, ma il terzo è sbagliato.

Naturalmente, va bene usare solo uno stile di virgolette. Puoi fare l'escaping delle virgolette all'interno della stringa usando il carattere di escape backslash (`\`):

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Correggi la stringa in modo da usare virgolette diverse per il valore `href` o fai l'escaping di quelle esistenti. Mantieni le virgolette doppie intorno all'intera stringa.

# --hints--

Il tuo codice dovrebbe correggere le virgolette intorno al valore `href` `#Home` cambiandole o facendone l'escaping.

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Il tuo codice dovrebbe mantenere le virgolette doppie intorno all'intera stringa.

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
