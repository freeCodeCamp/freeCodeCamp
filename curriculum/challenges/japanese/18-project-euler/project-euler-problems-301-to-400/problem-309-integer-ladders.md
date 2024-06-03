---
id: 5900f4a11000cf542c50ffb4
title: '問題 309: 整数のはしご'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

古典的な「交差するはしご」問題では、それぞれの長さが $x$ と $y$ のはしご 2 本が、狭く平らな道の両壁に 1 本ずつ立て掛けられています。 また、2 本のはしごが交差する個所の、路面からの高さ $h$ が与えられ、道幅 ($w$) を導くよう求められます。

<img class="img-responsive center-block" alt="はしご x と y が高さ h で交差し、幅 w の道の両壁に立て掛けられている" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

ここでは、4 つの変数がすべて正の整数であるケースのみを扱います。 例えば、$x = 70$, $y = 119$, $h = 30$ の場合、$w = 56$ と計算できます。

実は、整数値 $x$, $y$, $h$ および $0 &lt; x &lt; y &lt; 200$ に対し、$w$ の整数解となる三つ組数 ($x$, $y$, $h$) は、(70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35), (119, 175, 40) の 5 つだけです。

整数値 $x$, $y$, $h$ および $0 &lt; x &lt; y &lt; 1\\,000\\,000$ に対し、$w$ が整数解となる三つ組数 ($x$, $y$, $h$) はいくつありますか。

# --hints--

`integerLadders()` は `210139` を返す必要があります。

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
