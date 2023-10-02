---
id: 587d7db2367417b2b2512b8c
title: Usar uma IIFE para criar um módulo
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Uma expressão de função imediatamente invocada (IIFE) é frequentemente utilizada para agrupar funcionalidades relacionadas para um único objeto ou <dfn>módulo</dfn>. Por exemplo, um desafio anterior definiu dois mixins:

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

Podemos agrupar esses mixins em um módulo como o seguinte:

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

Note que você possui uma expressão de função imediatamente invocada (IIFE) que retorna um objeto `motionModule`. Esse objeto retornado contém todos os comportamentos de mixin como propriedades do objeto. A vantagem do padrão módulo é que todos os comportamentos de movimento podem ser embalados em um único objeto que pode em seguida ser usado por outras partes do seu código. Aqui está um exemplo utilizando isso:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Crie um módulo chamado `funModule` para embrulhar os dois mixins `isCuteMixin` e `singMixin`. `funModule` deve retornar um objeto.

# --hints--

`funModule` deve ser definido e retornar um objeto.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` deve acessar uma função.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` deve acessar uma função.

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
