---
id: 5900f3a31000cf542c50feb6
title: 'Problem 55: Lychrel-Zahlen'
challengeType: 1
forumTopicId: 302166
dashedName: problem-55-lychrel-numbers
---

# --description--

Wenn man 47 nimmt, umdreht und addiert, ergibt sich 47 + 74 = 121, was palindromisch ist.

Nicht alle Zahlen erzeugen so schnell Palindrome. Zum Beispiel,

<div style="margin-left: 4em;">
  349 + 943 = 1292,<br>
  1292 + 2921 = 4213<br>
  4213 + 3124 = 7337<br>
</div>

Das heißt, 349 brauchte drei Iterationen, um ein Palindrom zu erzeugen.

Obwohl es noch niemand bewiesen hat, geht man davon aus, dass einige Zahlen, wie 196, niemals ein Palindrom bilden. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Aufgrund der theoretischen Natur dieser Zahlen und für dieses Problem werden wir annehmen, dass es sich um eine Lychrel-Zahl handelt, bis das Gegenteil bewiesen ist. Außerdem wird angegeben, dass jede Zahl unter zehntausend entweder (i) in weniger als fünfzig Iterationen zu einem Palindrom wird, oder (ii) dass es bisher niemandem gelungen ist, sie mit all der vorhandenen Rechenleistung in ein Palindrom umzuwandeln. Tatsächlich ist 10677 die erste Zahl, die nachweislich mehr als fünfzig Iterationen benötigt, bevor sie ein Palindrom bildet: 4668731596684224866951378664 (53 Iterationen, 28 Ziffern).

Überraschenderweise gibt es palindromische Zahlen, die selbst Lychrel-Zahlen sind; das erste Beispiel ist 4994.

Wie viele Lychrel-Zahlen gibt es unter `num`?

**Hinweis:** Der Wortlaut wurde am 24. April 2007 leicht geändert, um den theoretischen Charakter der Lychrel-Zahlen hervorzuheben.

# --hints--

`countLychrelNumbers(1000)` sollte eine Zahl zurückgeben.

```js
assert(typeof countLychrelNumbers(1000) === 'number');
```

`countLychrelNumbers(1000)` sollte 13 zurückgeben.

```js
assert.strictEqual(countLychrelNumbers(1000), 13);
```

`countLychrelNumbers(3243)` sollte 39 zurückgeben.

```js
assert.strictEqual(countLychrelNumbers(3243), 39);
```

`countLychrelNumbers(5000)` sollte 76 zurückgeben.

```js
assert.strictEqual(countLychrelNumbers(5000), 76);
```

`countLychrelNumbers(7654)` sollte 140 zurückgeben.

```js
assert.strictEqual(countLychrelNumbers(7654), 140);
```

`countLychrelNumbers(10000)` sollte 249 zurückgeben.

```js
assert.strictEqual(countLychrelNumbers(10000), 249);
```

# --seed--

## --seed-contents--

```js
function countLychrelNumbers(num) {

  return true;
}

countLychrelNumbers(10000);
```

# --solutions--

```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```
