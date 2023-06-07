---
id: cf1111c1c11feddfaeb1bdef
title: Iterieren mit JavaScript While-Schleifen
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

Du kannst denselben Code mehrmals ausführen, indem du eine Schleife verwendest.

Die erste Art von Schleife, die wir lernen werden, heißt `while`-Schleife, weil sie läuft, solange eine bestimmte Bedingung wahr ist und stoppt, sobald diese Bedingung nicht mehr wahr ist.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Im obigen Codebeispiel wird die `while`-Schleife 5 Mal ausgeführt und fügt die Zahlen 0 bis 4 an `ourArray` an.

Versuchen wir, eine while-Schleife zum Laufen zu bringen, indem wir Werte in ein Array einfügen.

# --instructions--

Füge die Zahlen 5 bis 0 (einschließlich) in absteigender Reihenfolge zu `myArray` hinzu, indem du eine `while`-Schleife benutzt.

# --hints--

Du solltest dafür eine `while`-Schleife verwenden.

```js
assert(code.match(/while/g));
```

`myArray` sollte gleich `[5, 4, 3, 2, 1, 0]` sein.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
