---
id: 587d7db2367417b2b2512b8c
title: Utiliza una IIFE para crear un módulo
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Una expresión de función inmediatamente invocada (IIFE) se utiliza a menudo para agrupar la funcionalidad relacionada en un solo objeto o <dfn>módulo</dfn>. Por ejemplo, en el desafío anterior se definieron dos "mixins":

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

Podemos agrupar estos mixins en un módulo:

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

Ten en cuenta que has invocado una IIFE que devuelve un objeto `motionModule`. El objeto devuelto contiene todos los comportamientos de los mixins como propiedades del objeto. La ventaja del patrón del módulo es que todos los comportamientos de movimiento pueden ser empaquetados en un solo objeto que puede ser usado por otras partes del código. Así se debe utilizar:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Crea un módulo llamado `funModule` para envolver los dos mixins `isCuteMixin` y `singMixin`. `funModule` debe devolver un objeto.

# --hints--

`funModule` debe ser definido y devolver un objeto.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` debe acceder a una función.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` debe acceder a una función.

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

# --solutions--

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```
