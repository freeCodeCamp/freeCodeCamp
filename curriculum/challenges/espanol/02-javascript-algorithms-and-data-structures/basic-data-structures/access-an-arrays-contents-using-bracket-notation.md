---
id: 5a661e0f1068aca922b3ef17
title: Accede a los contenidos de un arreglo utilizando la notación de corchetes
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

La principal característica de cualquier estructura de datos es, por supuesto, la habilidad no solo de guardar datos, sino también de ser capaz de recuperar esos datos cuando le es requerido. Entonces, ahora que hemos aprendido como crear un arreglo, comencemos a pensar en cómo podemos acceder a la información de ese arreglo.

Cuando definimos un arreglo simple como el que se ve a continuación, hay 3 elementos en él:

```js
let ourArray = ["a", "b", "c"];
```

En un arreglo, cada elemento tiene un <dfn>índice</dfn>. Este índice funciona como la posición de ese elemento en el arreglo y es como puedes referenciarlo. Sin embargo, es importante tener en cuenta, que los arreglos en JavaScript son <dfn>indexados en base cero</dfn>, es decir que el primer elemento de un arreglo está en la posición ***cero***, no en la uno. Para recuperar un elemento de un arreglo podemos encerrar un índice entre corchetes y agregarlo al final de este, o más comúnmente, a una variable que hace referencia a un objeto tipo arreglo. Esto es conocido como <dfn>notación de corchetes</dfn>. Por ejemplo, si queremos recuperar la `a` de `ourArray` y asignársela a una variable, podemos hacerlo con el siguiente código:

```js
let ourVariable = ourArray[0];
```

Ahora `ourVariable` tiene el valor de `a`.

Además de acceder al valor asociado con un índice, también puedes *establecer* un índice a un valor usando la misma notación:

```js
ourArray[1] = "not b anymore";
```

Utilizando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 de la cadena `b`, a `not b anymore`. Ahora `ourArray` es `["a", "not b anymore", "c"]`.

# --instructions--

Para completar este desafío, establece la segunda posición (índice `1`) de `myArray` a cualquier cosa que quieras, además de la letra `b`.

# --hints--

`myArray[0]` debe ser igual a la letra `a`

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` no debe ser igual a la letra `b`

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]`debe ser igual a la letra `c`

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` debe ser igual a la letra `d`

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
