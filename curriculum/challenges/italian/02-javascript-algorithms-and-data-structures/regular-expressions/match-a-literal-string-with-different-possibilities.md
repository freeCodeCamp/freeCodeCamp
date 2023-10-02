---
id: 587d7db4367417b2b2512b90
title: Riconoscere una stringa letterale con diverse possibilità
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

Utilizzando espressioni regolari come `/coding/`, puoi cercare il pattern `coding` in un'altra stringa.

Questo è utile per cercare singole stringhe, ma è limitato a un solo pattern. È possibile cercare più pattern utilizzando l'operatore `alternation` o `OR`: `|`.

Questo operatore riconosce sia il pattern prima che quello dopo di esso. Ad esempio, se vuoi riconoscere le stringhe `yes` o `no`, l'espressione regolare che ti serve è `/yes|no/`.

Puoi anche cercare più di due pattern. Puoi farlo aggiungendo altri pattern con più operatori `OR` che li separano, come `/yes|no|maybe/`.

# --instructions--

Completa l'espressione regolare `petRegex` per riconoscere gli animali domestici `dog`, `cat`, `bird` o `fish`.

# --hints--

La tua espressione regolare `petRegex` dovrebbe restituire `true` per la stringa `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

La tua espressione regolare `petRegex` dovrebbe restituire `false` per la stringa `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

La tua espressione regolare `petRegex` dovrebbe restituire `true` per la stringa `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

La tua espressione regolare `petRegex` dovrebbe restituire `true` per la stringa `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

La tua espressione regolare `petRegex` dovrebbe restituire `false` per la stringa `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

La tua espressione regolare `petRegex` dovrebbe restituire `true` per la stringa `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

La tua espressione regolare `petRegex` dovrebbe restituire `false` per la stringa `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
