---
id: 56533eb9ac21ba0edf2244b9
title: Costruire stringhe con le variabili
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

A volte, avrai bisogno di costruire una stringa. Utilizzando l'operatore di concatenazione (`+`), puoi inserire una o più variabili in una stringa che stai costruendo.

Esempio:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` avrà un valore stringa `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Assegna una stringa con valore pari al tuo nome a `myName` e crea `myStr` con `myName` tra le stringhe `My name is` e `and I am well!`

# --hints--

`myName` dovrebbe avere il valore di una stringa lunga almeno 3 caratteri.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

Dovresti usare due operatori `+` per costruire `myStr` con `myName` al suo interno.

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```
