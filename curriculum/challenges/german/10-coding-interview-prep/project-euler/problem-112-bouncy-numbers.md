---
id: 5900f3dd1000cf542c50feef
title: 'Problem 112: Bouncy numbers'
challengeType: 1
forumTopicId: 301738
dashedName: problem-112-bouncy-numbers
---

# --description--

Wenn man von links nach rechts arbeitet und keine Ziffer durch die Ziffer links davon übertroffen wird, spricht man von einer aufsteigenden Zahl, zum Beispiel 134468.

Ähnlich verhält es sich, wenn keine Ziffer von der Ziffer rechts überschritten wird, wird es eine abnehmende Zahl genannt; zum Beispiel, 66420.

We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.

Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.

Find the least number for which the proportion of bouncy numbers is exactly 99%.

# --hints--

`bouncyNumbers()` should return `1587000`.

```js
assert.strictEqual(bouncyNumbers(), 1587000);
```

# --seed--

## --seed-contents--

```js
function bouncyNumbers() {

  return true;
}

bouncyNumbers();
```

# --solutions--

```js
// solution required
```
