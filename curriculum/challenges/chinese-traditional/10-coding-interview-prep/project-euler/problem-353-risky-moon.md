---
id: 5900f4cd1000cf542c50ffe0
title: '問題 353：危險的月亮'
challengeType: 1
forumTopicId: 302013
dashedName: problem-353-risky-moon
---

# --description--

A moon could be described by the sphere $C(r)$ with centre (0, 0, 0) and radius $r$.

There are stations on the moon at the points on the surface of $C(r)$ with integer coordinates. The station at (0, 0, $r$) is called North Pole station, the station at (0, 0, $-r$) is called South Pole station.

所有車站都通過車站的大弧上最短的道路相互連接。 兩個站之間的旅程是有風險的。 If $d$ is the length of the road between two stations, $\{\left(\frac{d}{πr}\right)}^2$ is a measure for the risk of the journey (let us call it the risk of the road). 如果旅程包括兩個以上的車站，則旅程的風險是使用過的道路的風險總和。

A direct journey from the North Pole station to the South Pole station has the length $πr$ and risk 1. The journey from the North Pole station to the South Pole station via (0, $r$, 0) has the same length, but a smaller risk:

$${\left(\frac{\frac{1}{2}πr}{πr}\right)}^2+{\left(\frac{\frac{1}{2}πr}{πr}\right)}^2 = 0.5$$

The minimal risk of a journey from the North Pole station to the South Pole station on $C(r)$ is $M(r)$.

You are given that $M(7) = 0.178\\,494\\,399\\,8$ rounded to 10 digits behind the decimal point.

Find $\displaystyle\sum_{n = 1}^{15} M(2^n - 1)$.

Give your answer rounded to 10 digits behind the decimal point in the form a.bcdefghijk.

# --hints--

`riskyMoon()` should return `1.2759860331`.

```js
assert.strictEqual(riskyMoon(), 1.2759860331);
```

# --seed--

## --seed-contents--

```js
function riskyMoon() {

  return true;
}

riskyMoon();
```

# --solutions--

```js
// solution required
```
