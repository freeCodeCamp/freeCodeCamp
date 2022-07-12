---
id: 5900f4731000cf542c50ff85
title: '問題 262: 山脈'
challengeType: 1
forumTopicId: 301911
dashedName: problem-262-mountain-range
---

# --description--

下の式は山岳地帯の連続した地形図を表し、任意の地点 ($x$,$y$) の標高 $h$ を示しています。

$$h = \left(5000 - \frac{x^2 + y^2 + xy}{200} + \frac{25(x + y)}{2}\right) \times e^{-\left|\frac{x^2 + y^2}{1\\,000\\,000} - \frac{3(x + y)}{2000} + \frac{7}{10}\right|}$$

1 匹の蚊が、$0 ≤ x$, $y ≤ 1600$ で表される領域を離れることなく、A(200,200) から B(1400,1400) まで飛んで行こうとしています。

山に遮られるので、蚊はまず標高 $f$ の地点 A' まで真上に飛びます。 次に、同じ標高 $f$ を保ったまま障害物を避けながら飛び、B の真上にある地点 B' まで飛びます。

まず、指定された領域内にとどまりながら上述のとおりに A から B へ移動できる、最小の一定の標高 $f_{min}$ を決定しなさい。 次に、その一定の標高 $f_{min}$ で飛びながら A' から B' へ移動するための最短経路の長さを求めなさい。

回答は、経路の長さを四捨五入して小数第 3 位まで示すこと。

**注:** 参考として、多くのプログラム言語に適した形で上述の標高関数を次に再掲します。`h=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) )* exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )`

# --hints--

`mountainRange()` は `2531.205` を返す必要があります。

```js
assert.strictEqual(mountainRange(), 2531.205);
```

# --seed--

## --seed-contents--

```js
function mountainRange() {

  return true;
}

mountainRange();
```

# --solutions--

```js
// solution required
```
