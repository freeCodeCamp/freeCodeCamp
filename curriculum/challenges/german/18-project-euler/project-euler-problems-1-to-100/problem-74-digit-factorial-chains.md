---
id: 5900f3b61000cf542c50fec9
title: 'Problem 74: Digit factorial chains'
challengeType: 1
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

Die Zahl 145 ist für die Eigenschaft bekannt, dass die Summe der Fakultät ihrer Ziffern 145 beträgt:

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

Vielleicht weniger bekannt ist 169, womit die längste Kette an Zahlen erstellt wird, die wiederum in Verbindung stehen mit 169. Es stellt sich heraus, dass nur drei solcher Schleifen existieren:

$$\begin{align} &169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\ &872 → 45362 → 872\\\\
\end{align}$$

Es ist nicht schwer zu beweisen, dass JEDE Startzahl irgendwann in einer Schleife stecken bleiben wird. Zum Beispiel,

$$\begin{align} &69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\ &540 → 145\\ (→ 145)\\\\
\end{align}$$

Ab 69 wird eine Kette von fünf sich nicht wiederholenden Begriffen produziert, aber die längste sich nicht wiederholende Kette mit einer Anfangszahl von weniger als einer Million beinhaltet sechzig Begriffe.

Wie viele Ketten mit einer Startnummer unter `n` enthalten genau sechzig sich nicht wiederholende Begriffe?

# --hints--

`digitFactorialChains(2000)` sollte eine Zahl zurückgeben.

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` sollte `6` zurückgeben.

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` sollte `42` zurückgeben.

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` sollte `282` zurückgeben.

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` sollte `402` ausgeben.

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0;
    while (number > 0) {
      sum += factorials[number % 10];
      number = Math.floor(number / 10);
    }
    return sum;
  }

  const factorials = [1];
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i);
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0;

  for (let i = 2; i < n; i++) {
    let curNum = i;
    let chainLength = 0;
    const curSequence = [];
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum);
      curNum = sumDigitsFactorials(curNum);
      chainLength++;
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum];
        break;
      }
    }
    if (chainLength === 60) {
      result++;
    }
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j;
    }
  }
  return result;
}
```
