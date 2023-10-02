---
id: 587d7db3367417b2b2512b8e
title: Usare il metodo test
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Le espressioni regolari sono usate nei linguaggi di programmazione per riconoscere parti di stringhe. Creerai dei "pattern" (cioè degli schemi, dei modelli) per aiutarti a trovare queste corrispondenze (match).

Se vuoi trovare la parola `the` nella stringa `The dog chased the cat`, puoi utilizzare la seguente espressione regolare: `/the/`. Nota che le virgolette non sono richieste all'interno dell'espressione regolare.

JavaScript ha diversi modi per utilizzare le espressioni regolari. Un modo per testare un'espressione regolare è usare il metodo `.test()`. Il metodo `.test()` prende l'espressione regolare, la applica a una stringa (che è messa dentro le parentesi), e restituisce `true` o `false` se il tuo pattern trova qualcosa o meno.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

Il metodo `test` qui restituirà `true`.

# --instructions--

Applica l'espressione regolare `myRegex` alla stringa `myString` usando il metodo `.test()`.

# --hints--

Dovresti usare `.test()` per testare l'espressione regolare.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Il tuo risultato dovrebbe restituire `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
