---
id: 587d7b89367417b2b2512b4a
title: Usa sintaxis de desestructuración para asignar variables desde objetos anidados
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos anidados.

Usando un objeto similar a los ejemplos anteriores:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

```js
const { johnDoe: { age, email }} = user;
```

Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables `lowToday` y `highToday` con los valores de `today.low` y `today.high` del objeto `LOCAL_FORECAST`.

# --hints--

Debes eliminar la sintaxis de asignación ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Debes usar desestructuración para crear la variable `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Debes usar desestructuración para crear la variable `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` debe ser igual a `64` y `highToday` debe ser igual a `77`.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
