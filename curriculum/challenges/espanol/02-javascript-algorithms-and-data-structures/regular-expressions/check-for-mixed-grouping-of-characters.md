---
id: 5c3dda8b4d8df89bea71600f
title: Comprueba agrupaciones mixtas de caracteres
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo usamos paréntesis `()`.

Si deseas encontrar `Penguin` o `Pumpkin` en una cadena, puedes usar la siguiente expresión regular: `/P(engu|umpk)in/g`

Luego, comprueba si los grupos de cadena deseados están en la cadena de prueba usando el método `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

El método `test` aquí devolverá `true`.

# --instructions--

Corrige la expresión regular para que compruebe los nombres de `Franklin Roosevelt` o `Eleanor Roosevelt` de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.

Luego, corrige el código para que la expresión regular que has creado se compruebe con `myString` y devuelva `true` o `false` dependiendo de si la expresión regular coincide.

# --hints--

Tu expresión regular `myRegex` debe devolver `true` para la cadena `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

Tu expresión regular `myRegex` debe devolver `true` para la cadena `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

Tu expresión regular `myRegex` debe devolver `false` para la cadena `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

Tu expresión regular `myRegex` debe devolver `false` para la cadena `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

Tu expresión regular `myRegex` debe devolver `false` para la cadena `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

Tu expresión regular `myRegex` debe devolver `false` para la cadena `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

Debes usar `.test()` para probar la expresión regular.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

Tu resultado debe devolver `true`.

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
