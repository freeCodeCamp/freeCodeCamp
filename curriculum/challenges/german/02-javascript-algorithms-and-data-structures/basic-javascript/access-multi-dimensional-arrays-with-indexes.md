---
id: 56592a60ddddeae28f7aa8e1
title: Zugriff auf mehrdimensionale Arrays mit Indizes
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

Man kann sich ein <dfn>mehrdimensionales</dfn> Array als ein *Array von Arrays* vorstellen. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

**Beispiel**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```

In diesem Beispiel, hat `subarray` den Wert `[[10, 11, 12], 13, 14]`, `nestedSubarray` hat den Wert `[10, 11, 12]`,  und `element` hat den Wert `11` .

**Hinweis:** Zwischen dem Array-Namen und den eckigen Klammern sollten keine Leerzeichen stehen, zum Beispiel `array [0][0]` oder selbst dies `array [0] [0]` ist nicht erlaubt. Obwohl JavaScript dies problemlos verarbeiten kann, könnte es andere Programmierer, die deinen Code lesen, verwirren.

# --instructions--

Wähle mithilfe der Klammernotation ein Element aus `myArray` so aus, dass `myData` gleich `8` ist.

# --hints--

`myData` sollte gleich `8` sein.

```js
assert(myData === 8);
```

Du solltest die Klammernotation verwenden, um den richtigen Wert aus `myArray` zu lesen.

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
```

# --solutions--

```js
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = myArray[2][1];
```
