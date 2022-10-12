---
id: 598f48a36c8c40764b4e52b3
title: Prevenire la mutazione degli oggetti
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

Come visto nella sfida precedente, la dichiarazione `const` da sola non protegge davvero i tuoi dati dalla mutazione. Per garantire che i tuoi dati non cambino, JavaScript fornisce una funzione `Object.freeze` per prevenire la mutazione dei dati.

Qualsiasi tentativo di cambiare l'oggetto verrà rifiutato, con un errore generato se lo script viene eseguito in modalità rigorosa.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

Gli assegnamenti `obj.review` e `obj.newProp` provocheranno errori, perché il nostro editor viene eseguito in modalità rigorosa per impostazione predefinita e la console mostrerà il valore `{ name: "FreeCodeCamp", review: "Awesome" }`.

# --instructions--

In questa sfida utilizzerai `Object.freeze` per impedire di cambiare le costanti matematiche. È necessario congelare l'oggetto `MATH_CONSTANTS` in modo che nessuno sia in grado di modificare il valore di `PI`, aggiungere o eliminare proprietà.

# --hints--

Non dovresti sostituire la parola chiave `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` dovrebbe essere una variabile costante (usando `const`).

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

Non dovresti cambiare la dichiarazione originale di `MATH_CONSTANTS`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` dovrebbe essere uguale `3.14`.

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
