---
id: 587d7b87367417b2b2512b42
title: Mutare un array dichiarato con const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

Se non hai familiarità con `const`, controlla <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">questa sfida che parla della parola chiave <code>const</code></a>.

La dichiarazione `const` ha molti casi di utilizzo nel JavaScript moderno.

Alcuni sviluppatori preferiscono assegnare tutte le loro variabili usando `const` come impostazione predefinita, a meno che non sappiano che dovranno riassegnare il valore. Solo in quel caso usano `let`.

Tuttavia, è importante capire che gli oggetti (inclusi gli array e le funzioni) assegnati a una variabile utilizzando `const` sono ancora mutabili. L'utilizzo della dichiarazione `const` impedisce solo la riassegnazione dell'identificatore della variabile.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` comporterà un errore. Dopo aver trasformato la riga in un commento, il `console.log` mostrerà il valore `[5, 6, 45]`.

Come puoi vedere, puoi mutare l'oggetto `[5, 6, 7]` stesso e la variabile `s` punterà ancora all'array alterato `[5, 6, 45]`. Come tutti gli array, gli elementi in `s` sono mutabili, ma poiché è stata usata `const`, non è possibile utilizzare l'identificatore di variabile `s` per puntare ad un array diverso utilizzando l'operatore di assegnazione.

# --instructions--

Un array è dichiarato come `const s = [5, 7, 2]`. Cambia l'array in `[2, 5, 7]` usando varie assegnazioni di elementi.

# --hints--

Non dovresti sostituire la parola chiave `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` dovrebbe essere una variabile costante (usando `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

Non dovresti cambiare la dichiarazione originale dell'array.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` dovrebbe essere uguale a `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
