---
id: 5900f3ca1000cf542c50fedc
title: 'Problem 93: Arithmetische Ausdrücke'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

Wenn man jede Ziffer aus dem Set, {1, 2, 3, 4}, genau einmal verwendet und die vier arithmetischen Operationen (+, −, \*, /) und Klammer/Klammern gebraucht, ist es möglich, verschiedene positive Integer-Ziele zu bilden.

Zum Beispiel,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Beachte, dass Verkettungen von Ziffern, wie 12 + 34, nicht zulässig sind.

Mit der Menge {1, 2, 3, 4} kann man einunddreißig verschiedene Zielzahlen erhalten, von denen 36 das Maximum ist, und jede der Zahlen 1 bis 28 kann erhalten werden, bevor man auf die erste nicht aussprechbare Zahl trifft.

Finde die Menge der vier verschiedenen Ziffern, `a` &lt; `b` &lt; `c` &lt; `d`, für die die längste Menge aufeinanderfolgender positiver ganzer Zahlen, 1 bis `n`, erhalten werden kann, indem du deine Antwort als String angibst: `abcd`.

# --hints--

`arithmeticExpressions()` sollte eine Zahl zurückgeben.

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` sollte 1258 zurückgeben.

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
