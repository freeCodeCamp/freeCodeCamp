---
id: 56105e7b514f539506016a5e
title: Cuenta hacia atrás con un bucle "for"
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Un bucle for también puede contar hacia atrás, siempre que definamos las condiciones adecuadas.

Para poder disminuirle dos cada iteración, necesitaremos cambiar nuestra inicialización, condición, y expresión final.

Empezaremos en `i = 10` e iteraremos mientras `i > 0`. Disminuiremos `i` en 2 por cada bucle con `i -= 2`.

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` ahora contendrá `[10,8,6,4,2]`. Cambiemos nuestra inicialización y expresión final para que podamos contar hacia atrás por dos números impares.

# --instructions--

Inserta los números impares desde el 9 hasta el 1 en `myArray` utilizando un bucle `for`.

# --hints--

Debes utilizar un bucle `for` para esto.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Debes utilizar el método de arreglo `push`.

```js
assert(code.match(/myArray.push/));
```

`myArray` debe ser igual a `[9,7,5,3,1]`.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
var myArray = [];

// Only change code below this line
```

# --solutions--

```js
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
