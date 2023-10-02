---
id: 5690307fddb111c6084545d7
title: Orden lógico de las sentencias "if else"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

El orden es importante en las sentencias `if`, `else if`.

La función se ejecuta de arriba a abajo, por lo que habrá que tener cuidado con qué sentencia va primero.

Tomemos como ejemplo estas dos funciones.

Aquí está la primera:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

Y la segunda, simplemente cambia el orden de las sentencias:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

Mientras que estas dos funciones parecen casi idénticas, si pasamos un número a ambas, obtenemos diferentes salidas.

```js
foo(0)
bar(0)
```

`foo(0)` devolverá la cadena `Less than one`, y `bar(0)` devolverá la cadena `Less than two`.

# --instructions--

Cambia el orden lógico en la función para que devuelva el resultado correcto en todos los casos.

# --hints--

`orderMyLogic(4)` debe devolver la cadena `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` debe devolver la cadena `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)` debe devolver la cadena `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
