---
id: 587d7b89367417b2b2512b49
title: Usa sintaxis de desestructuración para asignar variables desde objetos
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del ejemplo anterior:

```js
const user = { name: 'John Doe', age: 34 };
```

Así es como puedes dar nuevos nombres de variables en la asignación:

```js
const { name: userName, age: userAge } = user;
```

Puedes leerlo como "obtén el valor de `user.name` y asígnalo a una nueva variable llamada `userName`" y así sucesivamente. El valor de `userName` sería la cadena `John Doe`, y el valor de `userAge` sería el número `34`.

# --instructions--

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables `highToday` y `highTomorrow` con los valores de `today` y `tomorrow` del objeto `HIGH_TEMPERATURES`.

# --hints--

Debes eliminar la sintaxis de asignación ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Debes usar desestructuración para crear la variable `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Debes usar desestructuración para crear la variable `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` debe ser igual a `77` y `highTomorrow` debe ser igual a `80`.

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
