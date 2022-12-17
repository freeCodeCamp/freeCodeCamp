---
id: 5cd9a70215d3c4e65518328f
title: Utiliza recursión para crear una cuenta regresiva
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

En un <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">reto anterior</a>, aprendiste a utilizar la recursividad para sustituir un bucle `for`. Ahora, echemos un vistazo a una función más compleja que devuelve un arreglo de enteros consecutivos empezando con `1` hasta el número pasado a la función.

Como se menciona en el desafío anterior, habrá un <dfn>caso base</dfn>. El caso base le dice a la función recursiva cuando no necesita llamarse a sí misma. Es un caso simple donde el valor de retorno ya se conoce. También habrá una <dfn>llamada recursiva</dfn> la cual ejecuta la función original con argumentos diferentes. Si la función se escribe correctamente, eventualmente el caso base será alcanzado.

Por ejemplo, digamos que quieres escribir una función recursiva que devuelva un arreglo conteniendo los números `1` hasta `n`. Esta función necesitará aceptar un argumento, `n` que representa el número final. Entonces necesitará llamarse a sí misma con valores progresivamente más pequeños de `n` hasta que alcance `1`. Podrías escribir la función de la siguiente manera:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

El valor `[1, 2, 3, 4, 5]` se mostrará en la consola.

Al principio, esto parece contraintuitivo ya que el valor de `n` *disminuye*, pero los valores en el arreglo final se están *incrementando*. Esto sucede porque la inserción ocurre al último, después de la llamada recursiva. En el punto donde `n` es empujado en el arreglo, `countup(n - 1)` ya ha sido evaluada y devuelto `[1, 2, ..., n - 1]`.

# --instructions--

Hemos definido una función llamada `countdown` con un parámetro (`n`). La función debe usar recursión para devolver un arreglo conteniendo los `n` enteros hasta `1` basado en el parámetro `n`. Si la función es llamada con un número menor a 1, la función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con `n = 5` debe devolver el arreglo `[5, 4, 3, 2, 1]`. Tu función debe usar recursión llamándose a sí misma y no debe usar bucles de ningún tipo.

# --hints--

`countdown(-1)` debe devolver un arreglo vacío.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` debe devolver `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` debe devolver `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Tu código no debe depender de ningún tipo de bucles (`for`, `while` o funciones de orden alto tales como `forEach`, `map`, `filter`, y `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Debes usar recursión para resolver este problema.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

No se debe usar variables globales como almacenamiento temporal del array.

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
