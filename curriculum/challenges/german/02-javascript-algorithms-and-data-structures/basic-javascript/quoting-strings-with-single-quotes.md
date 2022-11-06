---
id: 56533eb9ac21ba0edf2244b4
title: Zitierung von Strings mit einfachen Anführungszeichen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

<dfn>String</dfn>-Werte in JavaScript können mit einfachen oder doppelten Anführungszeichen geschrieben werden, solange sie mit der gleichen Art von Anführungszeichen beginnen und enden. Im Gegensatz zu einigen anderen Programmiersprachen funktionieren einfache und doppelte Anführungszeichen in JavaScript gleich.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

Der Grund, warum du eine Anführungszeichenart der anderen vorziehen solltest, ist, wenn du beide in einer Zeichenkette verwenden willst. Dies kann der Fall sein, wenn du eine Konversation in einem String speichern willst und die Konversation in Anführungszeichen steht. Eine andere Verwendung wäre das Speichern eines `<a>`-Tags mit verschiedenen Attributen in Anführungszeichen, die alle in einem String enthalten sind.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

Dies wird jedoch zu einem Problem, wenn du die äußeren Anführungszeichen darin verwenden musst. Denke daran, dass ein String am Anfang und am Ende dieselbe Art von Anführungszeichen haben muss. Wenn du aber dasselbe Anführungszeichen irgendwo in der Mitte hast, wird die Zeichenkette vorzeitig beendet und ein Fehler ausgegeben.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Hier wird `badStr` einen Fehler auslösen.

In dem obigen <dfn>goodStr</dfn> kannst du beide Anführungszeichen sicher verwenden, indem du den Backslash `\` als Escape-Zeichen benutzt.

**Hinweis:** Der Backslash `\` ist nicht zu verwechseln mit dem Schrägstrich (Forward Slash) `/`. Sie tun nicht dasselbe.

# --instructions--

Ändere den vorgegebenen String in einen String mit einfachen Anführungszeichen am Anfang und Ende und ohne Escape-Zeichen.

Derzeit werden im `<a>`-Tag in dem String überall doppelte Anführungszeichen verwendet. Du musst die äußeren Anführungszeichen in einfache Anführungszeichen ändern, damit du die Escape-Zeichen entfernen kannst.

# --hints--

Du solltest alle Backslashes (`\`) entfernen.

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

Du solltest zwei einfache Anführungszeichen `'` und vier doppelte Anführungszeichen `"` verwenden.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
