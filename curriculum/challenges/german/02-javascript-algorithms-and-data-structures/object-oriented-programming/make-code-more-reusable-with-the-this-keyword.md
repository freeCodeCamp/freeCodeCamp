---
id: 587d7dad367417b2b2512b76
title: Erstelle wiederverwendbaren Code mit dem Schlüsselwort "this"
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

In der letzten Aufgabe wurde eine Methode für das Objekt `duck` eingeführt. Es verwendet die Punktnotation `duck.name`, um auf den Wert der Eigenschaft `name` innerhalb der Rückgabeanweisung zuzugreifen:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

Das ist zwar eine zulässige Möglichkeit, auf die Eigenschaft des Objekts zuzugreifen, aber es gibt einen Haken. Wenn sich der Variablenname ändert, muss jeder Code, der auf den ursprünglichen Namen verweist, ebenfalls aktualisiert werden. Bei einer kurzen Objektdefinition ist das kein Problem, aber wenn ein Objekt viele Verweise auf seine Eigenschaften hat, ist die Wahrscheinlichkeit für Fehler größer.

Eine Möglichkeit, diese Probleme zu vermeiden, ist das Schlüsselwort `this`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` ist ein umfangreiches Thema, und das obige Beispiel ist nur eine Möglichkeit, es zu nutzen. Im aktuellen Kontext bezieht sich `this` auf das Objekt, mit dem die Methode verbunden ist: `duck`. Wenn der Name des Objekts in `mallard` geändert wird, ist es nicht nötig, alle Verweise auf `duck` im Code zu finden. Das macht den Code wiederverwendbar und einfacher zu lesen.

# --instructions--

Ändere die Methode `dog.sayLegs`, um alle Verweise auf `dog` zu entfernen. Nimm das Beispiel von `duck` zur Hilfe.

# --hints--

`dog.sayLegs()` sollte den vorgegebenen String zurückgeben.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

Dein Code sollte das Schlüsselwort `this` verwenden, um auf die Eigenschaft `numLegs` von `dog` zuzugreifen.

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
