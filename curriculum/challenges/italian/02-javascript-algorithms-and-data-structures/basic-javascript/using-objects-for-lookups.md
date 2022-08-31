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

Ecco l'esempio di una semplice ricerca in un alfabeto inverso:

```js
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

const thirdLetter = alpha[2];
const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];
```

`thirdLetter` è la stringa `Y`, `lastLetter` è la stringa `C` e `valueLookup` è la stringa `Y`.

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
