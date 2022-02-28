---
id: 587d7b87367417b2b2512b3f
title: Explora las diferencias entre las palabras claves var y let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

Uno de los mayores problemas con la declaración de variables utilizando la palabra clave `var` es que tú puedes fácilmente sobrescribir declaraciones de variables:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

En el código anterior, la variable `camper` se declara originalmente como `James`, y se anula para ser `David`. La consola después muestra la cadena de texto `David`.

En una aplicación pequeña, tal vez no te encuentres con este tipo de problema. Pero a medida que tu código base se hace más grande, puedes ser que accidentalmente sobrescribas una variable que no tenías la intención de hacer. Debido a que este comportamiento no causa un error, la búsqueda y corrección de errores se vuelve más difícil.

Una palabra clave llamada `let` fue introducida en ES6, una actualización importante para JavaScript, para resolver este problema potencial con la palabra clave `var`. Aprenderás sobre otras características de ES6 en desafíos posteriores.

Si reemplazas `var` por `let` en el código anterior, resultará en un error:

```js
let camper = "James";
let camper = "David";
```

El error se puede ver en tu consola de tu navegador.

Así que a diferencia de `var`, al usar `let`, una variable con el mismo nombre solo puede declararse una vez.

# --instructions--

Actualiza el código para que solo utilice la palabra clave `let`.

# --hints--

`var` no debe existir en el código.

```js
assert.notMatch(code, /var/g);
```

`catName` debe ser la cadena `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

`catSound` debe ser la cadena `Meow!`

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
