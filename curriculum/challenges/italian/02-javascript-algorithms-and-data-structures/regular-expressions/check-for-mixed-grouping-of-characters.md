---
id: 5c3dda8b4d8df89bea71600f
title: Riconoscere gruppi misti di caratteri
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

A volte vogliamo controllare la presenza di gruppi di caratteri usando un'espressione regolare e per farlo usiamo le parentesi `()`.

Se vuoi trovare `Penguin` o `Pumpkin` in una stringa, puoi utilizzare la seguente espressione regolare: `/P(engu|umpk)in/g`

Quindi controllare se i gruppi di stringhe desiderati sono nella stringa di test utilizzando il metodo `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

Il metodo `test` qui restituirà `true`.

# --instructions--

Sistema l'espressione regolare in modo che riconosca i nomi di `Franklin Roosevelt` o `Eleanor Roosevelt` facendo distinzione tra maiuscole e minuscole e permetta i secondi nomi.

Quindi correggi il codice in modo che l'espressione regolare sia usata su `myString` e venga restituito `true` o `false` a seconda della corrispondenza della regex.

# --hints--

La tua espressione regolare `myRegex` dovrebbe restituire `true` per la stringa `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

La tua espressione regolare `myRegex` dovrebbe restituire `true` per la stringa `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

La tua espressione regolare `myRegex` dovrebbe restituire `false` per la stringa `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

La tua espressione regolare `myRegex` dovrebbe restituire `false` per la stringa `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

La tua espressione regolare `myRegex` dovrebbe restituire `false` per la stringa `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

La tua espressione regolare `myRegex` dovrebbe restituire `false` per la stringa `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

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
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
