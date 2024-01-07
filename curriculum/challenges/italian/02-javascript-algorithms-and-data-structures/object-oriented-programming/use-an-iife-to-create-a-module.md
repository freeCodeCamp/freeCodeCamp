---
id: 587d7db2367417b2b2512b8c
title: Usare una IIFE per creare un modulo
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Un'espressione di funzione invocata immediatamente (IIFE) viene spesso usata per raggruppare le funzionalità correlate in un singolo oggetto o <dfn>modulo</dfn>. Per esempio, una sfida precedente ha definito due mixin:

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

Possiamo raggruppare questi mixin in un modulo come segue:

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

Nota che hai un'espressione di funzione invocata immediatamente (IIFE) che restituisce un oggetto `motionModule`. L'oggetto restituito contiene tutti i comportamenti mixin come proprietà dell'oggetto. Il vantaggio del modello dei moduli è che tutti i comportamenti di movimento possono essere impacchettati in un singolo oggetto che può essere utilizzato da altre parti del codice. Ecco un esempio che lo utilizza:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Crea un modulo chiamato `funModule` che racchiuda i due mixin `isCuteMixin` e `singMixin`. `funModule` dovrebbe restituire un oggetto.

# --hints--

`funModule` dovrebbe essere definito e dovrebbe restituire un oggetto.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` dovrebbe accedere a una funzione.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` dovrebbe accedere a una funzione.

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
