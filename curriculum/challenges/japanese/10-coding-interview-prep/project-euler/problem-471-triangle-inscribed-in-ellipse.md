---
id: 5900f5431000cf542c510056
title: '問題 471: 楕円に内接する三角形'
challengeType: 1
forumTopicId: 302148
dashedName: problem-471-triangle-inscribed-in-ellipse
---

# --description--

$0 &lt; 2b &lt; a$ を満たす整数 $a$, $b$ について、三角形 $ΔABC$ は式 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ で表される楕円に内接しています。

三角形 $ΔABC$ の内接円の中心が $(2b, 0)$ で、$A$ の座標が $\left(\frac{a}{2}, \frac{\sqrt{3}}{2}b\right)$ のとき、その内接円の半径を $r(a, b)$ とします。

たとえば、$r(3, 1) = \frac{1}{2}, r(6, 2) = 1, r(12, 3) = 2$ です。

<img class="img-responsive center-block" alt="楕円に内接する三角形 ΔABC。ΔABC の内接円の半径 r(6, 2) = 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-1.png" style="background-color: white; padding: 10px;" />

<img class="img-responsive center-block" alt="楕円に内接する三角形 ΔABC。ΔABC の内接円の半径 r(12, 3) = 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-2.png" style="background-color: white; padding: 10px;" />

$G(n) = \sum_{a = 3}^n \sum_{b = 1}^{\left\lfloor\frac{a - 1}{2} \right\rfloor} r(a, b)$ と定義します。

$G(10) = 20.59722222$, $G(100) = 19223.60980$ (有効数字 10 桁に四捨五入) が与えられます。

$G({10}^{11})$ を求めなさい。 回答は、有効数字 10 桁に四捨五入された科学的記数法の文字列にすること。 また、小文字 `e` で仮数部と指数部を区切ること。

$G(10)$ の場合、回答は `2.059722222e1` となります。

# --hints--

`triangleInscribedInEllipse()` は文字列を返す必要があります。

```js
assert(typeof triangleInscribedInEllipse() === 'string');
```

`triangleInscribedInEllipse()` は文字列 `1.895093981e31` を返す必要があります。

```js
assert.strictEqual(triangleInscribedInEllipse(), '1.895093981e31');
```

# --seed--

## --seed-contents--

```js
function triangleInscribedInEllipse() {

  return true;
}

triangleInscribedInEllipse();
```

# --solutions--

```js
// solution required
```
