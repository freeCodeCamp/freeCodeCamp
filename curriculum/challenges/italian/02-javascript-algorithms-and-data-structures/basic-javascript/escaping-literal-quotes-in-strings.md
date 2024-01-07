---
id: 56533eb9ac21ba0edf2244b5
title: Fare l'escaping delle virgolette nelle stringhe
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Quando definisci una stringa devi cominciare e finire con una virgoletta singola o doppia. Cosa succede quando ti serve una virgoletta letterale `"` o `'` dentro la tua stringa?

In JavaScript, puoi fare l'<dfn>escape</dfn> di una virgoletta per distinguerla da quella usata per terminare la stringa posizionando una <dfn>barra rovesciata</dfn> (`\`) davanti alla virgoletta.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Questo segnala a JavaScript che la virgoletta seguente non è la fine della stringa, ma dovrebbe invece apparire dentro la stringa. Quindi se dovessi farla visualizzare nella console, otterresti:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

Usa le <dfn>barre rovesciate</dfn> per assegnare una stringa alla variabile `myStr` in modo che se dovessi farla visualizzare sulla console, si vedrebbe:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

Dovresti usare due virgolette doppie (`"`) e quattro virgolette doppie con escape (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

La variabile `myStr` dovrebbe contenere la stringa: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
