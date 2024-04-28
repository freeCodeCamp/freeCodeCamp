---
id: cf1111c1c12feddfaeb2bdef
title: Generiere zufällige Ganzzahlen innerhalb eines Bereichs
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Du kannst eine zufällige ganze Zahl im Bereich von Null bis zu einer bestimmten Zahl generieren. Du kannst auch eine andere niedrigere Zahl für diesen Bereich wählen.

Du nennst deine niedrigste Zahl `min` und deine höchste Zahl `max`.

Diese Formel gibt eine ganze Zahl im Bereich von `min` bis `max` an. Nimm dir einen Moment Zeit, um ihn zu lesen und zu verstehen, was dieser Code macht:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Erstelle eine Funktion namens `randomRange`, die einen Bereich `myMin` und `myMax` verwendet und eine zufällige ganze Zahl zurückgibt, die größer oder gleich `myMin` und kleiner oder gleich `myMax` ist.

# --hints--

Die niedrigste Zufallszahl, die mit `randomRange` erzeugt werden kann, sollte gleich deiner Mindestzahl, `myMin`, sein.

```js
assert(calcMin === 5);
```

Die höchste Zufallszahl, die mit `randomRange` erzeugt werden kann, sollte gleich deiner maximalen Zahl, `myMax`, sein.

```js
assert(calcMax === 15);
```

Die Zufallszahl, die von `randomRange` erzeugt wird, sollte eine ganze Zahl sein, keine Dezimalzahl.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` sollte sowohl `myMax` als auch `myMin` verwenden und eine Zufallszahl in deinem Bereich zurückgeben.

```js
assert(
  (function () {
    if (
      __helpers.removeJSComments(code).match(/myMax/g).length > 1 &&
      __helpers.removeJSComments(code).match(/myMin/g).length > 2 &&
      __helpers.removeJSComments(code).match(/Math.floor/g) &&
      __helpers.removeJSComments(code).match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
