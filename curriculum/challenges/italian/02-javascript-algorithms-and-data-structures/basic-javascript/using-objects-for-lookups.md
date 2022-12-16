---
id: 56533eb9ac21ba0edf2244ca
title: Usare gli oggetti per fare ricerche
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Gli oggetti possono essere pensati come una memorizzazione di coppie chiave / valore, come in un dizionario. Se hai dei dati tabulari, puoi usare un oggetto per cercare valori piuttosto che un'istruzione `switch` o una catena `if/else`. Questo è maggiormente utile quando sai che i dati di input sono limitati a un determinato intervallo.

Ecco un esempio di un oggetto article:

```js
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```

`articleAuthor` è la stringa `Kaashan Hussain`, `articleLink` è la stringa `https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/` e `valueLookup` è la stringa `How to create objects in JavaScript`.

# --instructions--

Converti l'istruzione switch in un oggetto chiamato `lookup`. Usalo per cercare `val` e assegnare la stringa associata alla variabile `result`.

# --hints--

`phoneticLookup("alpha")` dovrebbe essere uguale alla stringa `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` dovrebbe essere uguale alla stringa `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` dovrebbe essere uguale alla stringa `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` dovrebbe essere uguale alla stringa `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` dovrebbe essere uguale alla stringa `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` dovrebbe essere uguale alla stringa `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` dovrebbe restituire `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

Non dovresti modificare l'istruzione `return`

```js
assert(code.match(/return\sresult;/));
```

Non dovresti usare le istruzioni `case`, `switch`o `if`

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
