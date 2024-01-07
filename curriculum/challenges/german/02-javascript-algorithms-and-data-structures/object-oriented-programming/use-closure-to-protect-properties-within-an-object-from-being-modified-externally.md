---
id: 587d7db2367417b2b2512b8a
title: >-
  Verwende Closure, um Eigenschaften innerhalb eines Objekts vor externen Änderungen zu schützen
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

In der vorherigen Aufgabe hatte `bird` eine öffentliche Eigenschaft `name`. Sie gilt als öffentlich, weil auf sie außerhalb der Definition von `bird` zugegriffen und sie verändert werden kann.

```js
bird.name = "Duffy";
```

Deshalb kann jeder Teil deines Codes den Namen von `bird` einfach in einen beliebigen Wert ändern. Denk an Dinge wie Passwörter und Bankkonten, die von jedem Teil deiner Codebasis leicht geändert werden können. Das könnte eine Menge Probleme verursachen.

Der einfachste Weg, diese öffentliche Eigenschaft privat zu machen, ist die Erstellung einer Variablen innerhalb der Konstruktorfunktion. Dadurch ändert sich der Geltungsbereich der Variablen, sodass sie innerhalb der Konstruktorfunktion und nicht mehr global verfügbar ist. Auf diese Weise kann auf die Variable nur durch Methoden zugegriffen werden, die auch innerhalb der Konstruktorfunktion vorhanden sind.

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

Hier ist `getHatchedEggCount` eine privilegierte Methode, weil sie Zugriff auf die private Variable `hatchedEgg` hat. Das ist möglich, weil `hatchedEgg` im gleichen Kontext deklariert wird wie `getHatchedEggCount`. In JavaScript hat eine Funktion immer Zugriff auf den Kontext, in dem sie erstellt wurde. Das nennt man `closure`.

# --instructions--

Ändere die Deklaration von `weight` in der Funktion `Bird`, damit es eine private Variable ist. Erstelle dann eine Methode `getWeight`, die den Wert 15 von `weight` zurückgibt.

# --hints--

Die Eigenschaft `weight` sollte eine private Variable sein und den Wert `15` zugewiesen bekommen.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

Dein Code sollte eine Methode in `Bird` namens `getWeight` erstellen, die den Wert der privaten Variable `weight` zurückgibt.

```js
assert(new Bird().getWeight() === 15);
```

Deine Funktion `getWeight` sollte die private Variable `weight` zurückgeben.

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
