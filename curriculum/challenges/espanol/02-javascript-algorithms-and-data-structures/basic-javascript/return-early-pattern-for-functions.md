---
id: 56533eb9ac21ba0edf2244c4
title: Patrón de devolución anticipado para funciones
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Cuando se alcanza una sentencia `return`, la ejecución de la función actual se detiene y el control se devuelve a la ubicación de la llamada.

**Ejemplo**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

Lo anterior mostrará la cadena `Hello` en la consola y devolverá la cadena `World`. La cadena `byebye` nunca se mostrará en la consola, porque la función termina en la sentencia `return`.

# --instructions--

Modifica la función `abTest` para que cuando `a` o `b` sean menores que `0` la función salga inmediatamente con un valor `undefined`.

**Pista**  
Recuerda que <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> es una palabra clave</a>, no una cadena.

# --hints--

`abTest(2, 2)` debe devolver un número

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` debe devolver `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` debe devolver `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` debe devolver `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` debe devolver `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` debe devolver `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` debe devolver `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
