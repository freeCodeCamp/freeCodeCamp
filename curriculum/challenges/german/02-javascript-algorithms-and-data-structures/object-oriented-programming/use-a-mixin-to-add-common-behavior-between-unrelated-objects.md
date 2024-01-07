---
id: 587d7db2367417b2b2512b89
title: Verwende ein Mixin, um gemeinsames Verhalten zwischen unverbundenen Objekten hinzuzufügen
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

Wie du gesehen hast, wird das Verhalten durch Vererbung geteilt. Es gibt jedoch Fälle, in denen die Vererbung nicht die beste Lösung ist. Die Vererbung funktioniert nicht gut für nicht verwandte Objekte wie Vogel (`Bird`) und Flugzeug (`Airplane`). Sie können beide fliegen, aber ein `Bird` ist kein Typ von `Airplane` und andersherum.

Für nicht verwandte Objekte ist es besser, <dfn>Mixins</dfn> zu verwenden. Ein Mixin ermöglicht es anderen Objekten, eine Sammlung von Funktionen zu nutzen.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

Das `flyMixin` nimmt ein beliebiges Objekt und gibt ihm die Methode `fly`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Hier werden `bird` und `plane` an `flyMixin` übergeben, das dann jedem Objekt die Funktion `fly` zuweist. Jetzt können `bird` und `plane` beide fliegen:

```js
bird.fly();
plane.fly();
```

Die Konsole würde den String `Flying, wooosh!` zweimal anzeigen, einmal für jeden `.fly()`-Aufruf.

Beachte, wie das Mixin es ermöglicht, dieselbe Methode `fly` für die nicht verwandten Objekte `bird` und `plane` wiederzuverwenden.

# --instructions--

Erstelle ein Mixin namens `glideMixin`, das eine Methode namens `glide` definiert. Verwende dann das `glideMixin`, um sowohl `bird` als auch `boat` die Fähigkeit zu geben, zu gleiten.

# --hints--

Dein Code sollte eine Variable `glideMixin` deklarieren, die eine Funktion ist.

```js
assert(typeof glideMixin === 'function');
```

Dein Code sollte `glideMixin` auf das `bird`-Objekt anwenden, um ihm die Methode `glide` zu geben.

```js
assert(typeof bird.glide === 'function');
```

Dein Code sollte `glideMixin` auf das `boat`-Objekt anwenden, um ihm die Methode `glide` zu geben.

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```
