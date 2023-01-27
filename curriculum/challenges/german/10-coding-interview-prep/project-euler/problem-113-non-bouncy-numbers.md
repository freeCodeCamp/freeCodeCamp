---
id: 5900f3dd1000cf542c50fef0
title: 'Problem 113: Nicht sprunghafte Zahlen'
challengeType: 1
forumTopicId: 301739
dashedName: problem-113-non-bouncy-numbers
---

# --description--

Wenn man von links nach rechts arbeitet und keine Ziffer durch die Ziffer links davon übertroffen wird, spricht man von einer aufsteigenden Zahl, zum Beispiel 134468.

Ähnlich verhält es sich, wenn keine Ziffer von der Ziffer rechts daneben übertroffen wird. Man spricht dann von einer absteigenden Zahl, zum Beispiel 66420.

We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

As n increases, the proportion of bouncy numbers below n increases such that there are only 12951 numbers below one-million that are not bouncy and only 277032 non-bouncy numbers below ${10}^{10}$.

Wie viele Zahlen unterhalb eines Googols (${10}^{100}$) sind nicht sprunghaft?

# --hints--

`nonBouncyNumbers()` sollte `51161058134250` zurückgeben.

```js
assert.strictEqual(nonBouncyNumbers(), 51161058134250);
```

# --seed--

## --seed-contents--

```js
function nonBouncyNumbers() {

  return true;
}

nonBouncyNumbers();
```

# --solutions--

```js
// solution required
```
