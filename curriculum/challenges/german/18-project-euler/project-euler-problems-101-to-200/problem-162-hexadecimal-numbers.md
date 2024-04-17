---
id: 5900f40e1000cf542c50ff21
title: 'Problem 162: Hexadezimale Zahlen'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

Im Hexadezimalsystem werden Zahlen mit 16 verschiedenen Ziffern dargestellt:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

Die hexadezimale Zahl AF entspricht im dezimalen Zahlensystem $10 \mal 16 + 15 = 175$.

In den dreistelligen Hexadezimalzahlen 10A, 1A0, A10 und A01 sind die Ziffern 0, 1 und A alle vorhanden.

Like numbers written in base ten we write hexadecimal numbers without leading zeroes.

Wie viele Hexadezimalzahlen mit höchstens sechzehn Hexadezimalziffern gibt es, bei denen alle Ziffern 0, 1 und A mindestens einmal vorkommen?

Gib deine Antwort als Hexadezimalzahl in Form eines Strings an.

**Hinweis:** (A,B,C,D,E und F in Großbuchstaben, ohne einen führenden oder abschließenden Code, der die Zahl als hexadezimal oder ohne führende Nullen kennzeichnet z.B. 1A3F und nicht: 1a3f und nicht 0x1a3f und nicht $1A3F und nicht #1A3F und nicht 0000001A3F)

# --hints--

`hexadecimalNumbers()` sollte einen String zurückgeben.

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` sollte den String `3D58725572C62302` zurückgeben.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
