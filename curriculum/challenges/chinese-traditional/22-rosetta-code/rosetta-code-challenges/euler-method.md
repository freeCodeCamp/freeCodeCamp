---
id: 59880443fb36441083c6c20e
title: 歐拉方法
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value. It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">this article</a>.

ODE 必須以下列形式提供：

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

有初始值

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

爲了得到數值解，我們用有限差分近似替換 LHS 上的導數：

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

然後求解 $y(t+h)$：

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

這與下述相同

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

那麼迭代求解規則是：

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

其中 $h$ 是步長，與解的準確性最相關的參數。 較小的步長會提高準確性，但也會增加計算成本，因此必須始終根據手頭的問題手動選擇。

**示例：牛頓冷卻定律**

牛頓冷卻定律描述了初始溫度爲 $T(t_0) = T_0$ 的物體如何在溫度爲 $T_R$ 的環境中冷卻：

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

或者

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

它表示物體的冷卻速率 $\\frac{dT(t)}{dt}$ 與當前與周圍環境的溫差 $\\Delta T = (T(t) - T_R)$ 成正比。

我們將與數值近似進行比較的解析解是

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

實現歐拉方法的一個例程，然後使用它來解決三個不同步長的牛頓冷卻定律的給定示例：

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> 和</li>
  <li><code>10 s</code></li>
</ul>

並與解析解進行比較。

**初始值：**

<ul>
  <li>initial temperature <big>$T_0$</big> shall be <code>100 °C</code></li>
  <li>室溫 <big>$T_R$</big> 應爲 <code>20 °C</code></li>
  <li>冷卻常數 <big>$k$</big> 應爲 <code>0.07</code></li>
  <li>計算時間間隔爲 <code>0 s</code> 到 <code>100 s</code></li>
</ul>

該函數的第一個參數是初始時間，第二個參數是初始溫度，第三個參數是經過時間，第四個參數是步長。

# --hints--

`eulersMethod` 應該是一個函數。

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` 應該返回一個數字。

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` 應該返回 20.0424631833732。

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` 應該返回 20.01449963666907。

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` 應該返回 20.000472392。

```js
assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);
```

# --seed--

## --seed-contents--

```js
function eulersMethod(x1, y1, x2, h) {

}
```

# --solutions--

```js
function eulersMethod(x1, y1, x2, h) {
  let x = x1;
  let y = y1;

  while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
    y += h * (-0.07 * (y - 20));
    x += h;
  }

  return y;
}
```
