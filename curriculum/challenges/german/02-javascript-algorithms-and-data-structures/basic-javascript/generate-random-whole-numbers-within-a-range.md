---
id: cf1111c1c12feddfaeb2bdef
title: Generiere zufällige Ganzzahlen innerhalb eines Bereichs
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Anstatt wie zuvor eine zufällige ganze Zahl zwischen Null und einer bestimmten Zahl zu erzeugen, können wir eine zufällige ganze Zahl erzeugen, die in einen Bereich von zwei bestimmten Zahlen fällt.

Dazu legen wir eine Mindestzahl `min` und eine Höchstzahl `max` fest.

Hier ist die Formel, die wir verwenden werden. Nimm dir einen Moment Zeit, um ihn zu lesen und zu verstehen, was dieser Code macht:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Erstelle eine Funktion namens `randomRange`, die einen Bereich `myMin` und `myMax` annimmt und eine zufällige ganze Zahl zurückgibt, die größer oder gleich `myMin` und kleiner oder gleich `myMax` ist.

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
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
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
  // Only change code below this line
  return 0;
  // Only change code above this line
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
