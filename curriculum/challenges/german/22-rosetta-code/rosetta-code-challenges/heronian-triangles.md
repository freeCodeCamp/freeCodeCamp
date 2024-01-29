---
id: 595b98f8b5a2245e243aa831
title: Heronische Dreiecke
challengeType: 1
forumTopicId: 302285
dashedName: heronian-triangles
---

# --description--

Hero's formula for the area of a triangle given the length of its three sides `a`, `b`, and `c` is given by:

$A = \\sqrt{s(s-a)(s-b)(s-c)},$

wobei `s` die Hälfte des Umfangs des Dreiecks beträgt; das heißt,

$s=\\frac{a+b+c}{2}.$

Heronische Dreiecke sind Dreiecke, deren Seiten und Fläche ganzzahlig sind.

Ein Beispiel ist das Dreieck mit den Seiten `3, 4, 5`, dessen Fläche `6` ist (und dessen Umfang `12` ist).

Beachte, dass jedes Dreieck, dessen Seiten ein ganzzahliges Vielfaches von `3, 4, 5` sind, wie z. B. `6, 8, 10,` auch ein heronisches Dreieck ist.

Definiere ein primitives heronisches Dreieck als ein heronisches Dreieck, bei dem der größte gemeinsame Teiler

aller drei Seiten ist `1` (Einheit).

Dies schließt zum Beispiel das Dreieck `6, 8, 10 aus.`

# --instructions--

Implementiere eine Funktion, die auf der Formel von Hero basiert und die ersten <code>n<sub>th</sub></code> geordneten Dreiecke in einem Array von Arrays zurückgibt.

# --hints--

`heronianTriangle` sollte eine Funktion sein.

```js
assert(typeof heronianTriangle === 'function');
```

`heronianTriangle(10)` sollte `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]` zurückgeben

```js
assert.deepEqual(heronianTriangle(testCases[0]), res[0]);
```

`heronianTriangle(15)` sollte `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],` zurückgeben

```js
assert.deepEqual(heronianTriangle(testCases[1]), res[1]);
```

`heronianTriangle(20)` sollte `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],` zurückgeben

```js
assert.deepEqual(heronianTriangle(testCases[2]), res[2]);
```

`heronianTriangle(25)` sollte `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]` zurückgeben

```js
assert.deepEqual(heronianTriangle(testCases[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [10, 15, 20, 25];

const res = [
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37], [16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]
];
```

## --seed-contents--

```js
function heronianTriangle(n) {


  return [];
}
```

# --solutions--

```js
function heronianTriangle(n) {
  const list = [];
  const result = [];

  let j = 0;
  for (let c = 1; c <= 200; c++) {
    for (let b = 1; b <= c; b++) {
      for (let a = 1; a <= b; a++) {
        if (gcd(gcd(a, b), c) === 1 && isHeron(heronArea(a, b, c))) {
          list[j++] = new Array(a, b, c, heronArea(a, b, c));
        }
      }
    }
  }

  sort(list);

  for (let i = 0; i < n; i++) {
    result[i] = [list[i][0], list[i][1], list[i][2]];
  }

  return result;

  function heronArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  function isHeron(h) { return h % 1 === 0 && h > 0; }

  function gcd(a, b) {
    let leftover = 1;
    let dividend = a > b ? a : b;
    let divisor = a > b ? b : a;
    while (leftover !== 0) {
      leftover = dividend % divisor;
      if (leftover > 0) {
        dividend = divisor;
        divisor = leftover;
      }
    }
    return divisor;
  }

  function sort(arg) {
    let swapped = true;
    let temp = [];
    while (swapped) {
      swapped = false;
      for (let i = 1; i < arg.length; i++) {
        if (arg[i][4] < arg[i - 1][4] || arg[i][4] === arg[i - 1][4] && arg[i][3] < arg[i - 1][3]) {
          temp = arg[i];
          arg[i] = arg[i - 1];
          arg[i - 1] = temp;
          swapped = true;
        }
      }
    }
  }
}
```
