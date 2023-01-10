---
id: 587d7b84367417b2b2512b37
title: Gemischte Verwendung von einfachen und doppelten Anführungszeichen abfangen
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript erlaubt die Verwendung von einfachen (`'`) und doppelten (`"`) Anführungszeichen zur Deklaration eines Strings. Die Entscheidung für eine der beiden Varianten ist in der Regel eine Frage der persönlichen Vorliebe, es gibt aber auch Ausnahmen.

Zwei Möglichkeiten zu haben ist toll, wenn ein String Kontraktionen oder einen anderen Textteil enthält, der in Anführungszeichen steht. Achte nur darauf, dass du den String nicht zu früh schließt, denn das führt zu einem Syntaxfehler.

Hier sind einige Beispiele für gemischte Anführungszeichen:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

Die ersten Beiden sind richtig, aber das Dritte ist falsch.

Natürlich ist es in Ordnung, nur eine Art von Anführungszeichen zu verwenden. Du kannst die Anführungszeichen innerhalb des Strings mit dem Escape-Zeichen Backslash (`\`) umgehen:

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

Korrigiere den String so, dass er entweder andere Anführungszeichen für den Wert `href` verwendet oder die vorhandenen escaped werden. Behalte die doppelten Anführungszeichen um den gesamten String herum bei.

# --hints--

Dein Code sollte die Anführungszeichen um den Wert `href` `#Home` korrigieren, indem du sie entweder änderst oder umgehst (escaping).

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

Dein Code sollte die doppelten Anführungszeichen um den gesamten String herum beibehalten.

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
