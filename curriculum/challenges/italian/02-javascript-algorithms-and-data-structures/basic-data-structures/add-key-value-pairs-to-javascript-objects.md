---
id: 587d7b7c367417b2b2512b18
title: Aggiungere coppie chiave-valore agli oggetti JavaScript
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

In linea di massima, gli oggetti sono solo collezioni di coppie <dfn>chiave-valore</dfn>. In altre parole, sono dati (<dfn>valori</dfn>) mappati da identificatori univoci chiamati <dfn>proprietà</dfn> (<dfn>chiavi</dfn>). Dai un'occhiata ad un esempio:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

Il codice qui sopra definisce l'oggetto di un personaggio del videogioco Tekken, chiamato `tekkenCharacter`. Ha tre proprietà, ad ognuna delle quali corrisponde un valore specifico. Se desiderassi aggiungere una nuova proprietà, ad esempio "origin", potresti farlo assegnando `origin` all'oggetto:

```js
tekkenCharacter.origin = 'South Korea';
```

Questo usa la notazione a punti. Se tu osservi l'oggetto `tekkenCharacter`, esso ora includerà la proprietà `origin`. Hwoarang aveva anche dei caratteristici capelli arancioni. È possibile aggiungere questa proprietà con la notazione a parentesi scrivendo:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

La notazione a parentesi è obbligatoria se la proprietà ha uno spazio o se si vuole utilizzare una variabile per selezionare la proprietà. Nel caso precedente, la proprietà è racchiusa tra virgolette per indicarla come una stringa e verrà aggiunta esattamente come mostrato. Senza virgolette, sarà valutata come una variabile e il nome della proprietà sarà qualsiasi valore sia assegnato alla variabile. Ecco un esempio con una variabile:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

Dopo aver aggiunto tutti gli esempi, l'oggetto apparirà così:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

È stato creato un oggetto `foods` con tre voci. Usando una sintassi a tua scelta, aggiungi altre tre voci ad esso: `bananas` con un valore di `13`, `grapes` con un valore di `35`, e `strawberries` con un valore di `27`.

# --hints--

`foods` dovrebbe essere un oggetto.

```js
assert(typeof foods === 'object');
```

L'oggetto `foods` dovrebbe avere una chiave `bananas` con un valore di `13`.

```js
assert(foods.bananas === 13);
```

L'oggetto `foods` dovrebbe avere una chiave `grapes` con un valore di `35`.

```js
assert(foods.grapes === 35);
```

L'oggetto `foods` dovrebbe avere una chiave `strawberries` con un valore di `27`.

```js
assert(foods.strawberries === 27);
```

Le coppie chiave-valore devono essere impostate usando la notazione punto o parentesi.

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
