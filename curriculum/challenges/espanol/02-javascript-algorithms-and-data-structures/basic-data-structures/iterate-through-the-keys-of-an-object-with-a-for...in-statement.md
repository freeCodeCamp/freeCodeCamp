---
id: 587d7b7d367417b2b2512b1d
title: Itera a través de las claves de un objeto con una sentencia "for...in"
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

En ocasiones, necesitas iterar todas las claves de un objeto. Puedes usar un bucle <dfn>for...in</dfn> para hacerlo. Un bucle <dfn>for...in</dfn> se ve así:

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

Este código saca por consola `milk 1` y  `eggs 12`, cada par clave-valor en su propia línea.

Definimos una variable `food` en la declaración del bucle, en cada iteración el valor de esta variable toma el valor una de las claves del objeto. De esta manera cada nombre de comida se escribe en la consola.

**NOTA:** Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave.

# --instructions--

Hemos definido una función `countOnline` que acepta un argumento, `allUsers`. Usa una sentencia <dfn>for...in</dfn> dentro de esta función para recorrer el objeto `allUsers` y devolver el número de usuarios que tienen la propiedad `online` igual a `true`. Un ejemplo del tipo de objeto que podría ser pasado a `countOnline` se muestra a continuación. Cada usuario tendrá una propiedad `online` con su valor igual a `true` o `false`.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

La función `countOnline` debe utilizar una sentencia `for in` para iterar por las claves del objeto que se le pasa.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

La función `countOnline` debe devolver `1` cuando se le pasa el objeto `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj1) === 1);
```

La función `countOnline` debe devolver `2` cuando se le pasa el objeto `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }`

```js
assert(countOnline(usersObj2) === 2);
```

La función `countOnline` debe devolver `0` cuando se le pasa el objeto `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(allUsers) {
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
}
```
