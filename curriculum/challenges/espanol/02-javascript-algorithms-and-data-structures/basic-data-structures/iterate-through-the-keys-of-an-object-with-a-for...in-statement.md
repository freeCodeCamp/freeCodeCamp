---
id: 587d7b7d367417b2b2512b1d
title: Itera a través de las claves de un objeto con una sentencia "for...in"
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis específica en JavaScript llamada sentencia <dfn>for...in</dfn>. Para nuestro objeto `users`, esto podría verse así:

```js
for (let user in users) {
  console.log(user);
}
```

Esto devolvería `Alan`, `Jeff`, y `Sarah` - cada valor en su propia línea.

En esta sentencia, definimos una variable `user`, y como puedes ver, esta variable se restablece durante cada iteración a cada una de las claves del objeto a medida que la sentencia hace un bucle a través del objeto, dando como resultado que el nombre de cada usuario se imprima en la consola.

**NOTA:** Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave.

# --instructions--

Hemos definido una función `countOnline` que acepta un argumento (un objeto usuario). Utiliza una sentencia <dfn>for...in</dfn> dentro de esta función para iterar sobre el objeto usuarios (users) pasado a la función y devuelve el número de usuarios cuya propiedad `online` esté establecida como `true`. A continuación se muestra un ejemplo de un objeto usuario que podría pasarse a `countOnline`. Cada usuario tendrá una propiedad `online` con un valor `true` o `false`.

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

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
