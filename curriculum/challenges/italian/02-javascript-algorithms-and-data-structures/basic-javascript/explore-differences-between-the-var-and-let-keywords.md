---
id: 587d7b87367417b2b2512b3f
title: Esplorare le differenze tra le parole chiave var e let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Uno dei maggiori problemi quando si dichiarano delle variabili con la parola chiave `var` è che è possibile sovrascrivere le dichiarazioni delle variabili senza errori.

```js
var camper = 'James';
var camper = 'David';
console.log(camper);
```

Qui la console mostrerà la stringa `David`.

Come puoi vedere nel codice qui sopra, la variabile `camper` è originariamente dichiarata come `James` per poi essere sovrascritta con `David`. In una piccola applicazione si potrebbe non incorrere in questo tipo di problema, ma quando il codice diventa più grande, potresti accidentalmente sovrascrivere una variabile che non hai intenzione di sovrascrivere. Poiché questo comportamento non lancia un errore, la ricerca e la correzione di bug diventa più difficile.  
Una nuova parola chiave, chiamata `let`, è stata introdotta in ES6 per risolvere questo potenziale problema con la parola chiave `var`. Se dovessi sostituire `var` con `let` nelle dichiarazioni delle variabili nel codice sopra, il risultato sarebbe un errore.

```js
let camper = 'James';
let camper = 'David';
```

Questo errore può essere visto nella console del tuo browser. Quindi, a differenza di `var`, quando si utilizza `let`, una variabile con lo stesso nome può essere dichiarata solo una volta. Nota l'`"use strict"`. Questo abilita la Strict Mode (Modalità Rigorosa), che cattura gli errori di codifica comuni e le azioni "non sicure". Per esempio:

```js
"use strict";
x = 3.14;
```

Questo mostrerà l'errore `x is not defined`.

# --instructions--

Aggiorna il codice in modo che utilizzi solo la parola chiave `let`.

# --hints--

`var` non dovrebbe esistere nel codice.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`catName` dovrebbe essere uguale alla stringa `Oliver`.

```js
assert(catName === 'Oliver');
```

`quote` dovrebbe essere uguale alla stringa `Oliver says Meow!`

```js
assert(quote === 'Oliver says Meow!');
```

# --seed--

## --seed-contents--

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
```

# --solutions--

```js
let catName;
let quote;
function catTalk() {
  'use strict';

  catName = 'Oliver';
  quote = catName + ' says Meow!';
}
catTalk();
```
