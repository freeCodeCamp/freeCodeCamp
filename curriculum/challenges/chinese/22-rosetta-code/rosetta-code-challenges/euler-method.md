---
id: 59880443fb36441083c6c20e
title: 欧拉方法
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value. It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">this article</a>.

ODE 必须以下列形式提供：

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

有初始值

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

为了得到数值解，我们用有限差分近似替换 LHS 上的导数：

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

然后求解 $y(t+h)$：

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

这与下述相同

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

那么迭代求解规则是：

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

其中 $h$ 是步长，与解的准确性最相关的参数。 较小的步长会提高准确性，但也会增加计算成本，因此必须始终根据手头的问题手动选择。

**示例：牛顿冷却定律**

牛顿冷却定律描述了初始温度为 $T(t_0) = T_0$ 的物体如何在温度为 $T_R$ 的环境中冷却：

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

或者

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

它表示物体的冷却速率 $\\frac{dT(t)}{dt}$ 与当前与周围环境的温差 $\\Delta T = (T(t) - T_R)$ 成正比。

我们将与数值近似进行比较的解析解是

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

实现欧拉方法的一个例程，然后使用它来解决三个不同步长的牛顿冷却定律的给定示例：

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> 和</li>
  <li><code>10 s</code></li>
</ul>

并与解析解进行比较。

**初始值：**

<ul>
  <li>initial temperature <big>$T_0$</big> shall be <code>100 °C</code></li>
  <li>室温 <big>$T_R$</big> 应为 <code>20 °C</code></li>
  <li>冷却常数 <big>$k$</big> 应为 <code>0.07</code></li>
  <li>计算时间间隔为 <code>0 s</code> 到 <code>100 s</code></li>
</ul>

该函数的第一个参数是初始时间，第二个参数是初始温度，第三个参数是经过时间，第四个参数是步长。

# --hints--

`eulersMethod` 应该是一个函数。

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` 应该返回一个数字。

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` 应该返回 20.0424631833732。

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` 应该返回 20.01449963666907。

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` 应该返回 20.000472392。

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
