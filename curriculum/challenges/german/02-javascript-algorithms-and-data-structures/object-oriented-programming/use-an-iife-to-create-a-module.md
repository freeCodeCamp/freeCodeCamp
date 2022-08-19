---
id: 587d7db2367417b2b2512b8c
title: Ein IIFE verwenden, um ein Modul zu erstellen
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

Ein sofort aufgerufener Funktionsausdruck (IIFE) wird oft verwendet, um verwandte Funktionen in einem einzigen Objekt oder <dfn>Modul</dfn> zusammenzufassen. In einer früheren Aufgabe wurden zum Beispiel zwei Mixins definiert:

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

Wir können diese Mixins wie folgt in einem Modul zusammenfassen:

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

Beachte, dass du einen sofort aufgerufenen Funktionsausdruck (IIFE) hast, der ein Objekt `motionModule` zurückgibt. Dieses zurückgegebene Objekt enthält alle Mixin-Verhaltensweisen als Eigenschaften des Objekts. Der Vorteil des Modulmusters ist, dass alle Bewegungsabläufe in ein einziges Objekt verpackt werden können, das dann von anderen Teilen deines Codes verwendet werden kann. Hier ist ein Beispiel dafür:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

Erstelle ein Modul namens `funModule`, um die beiden Mixins `isCuteMixin` und `singMixin` zu verpacken. `funModule` sollte ein Objekt zurückgeben.

# --hints--

`funModule` sollte definiert sein und ein Objekt zurückgeben.

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` sollte auf eine Funktion zugreifen.

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` sollte auf eine Funktion zugreifen.

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
