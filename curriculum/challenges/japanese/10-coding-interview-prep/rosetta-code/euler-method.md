---
id: 59880443fb36441083c6c20e
title: オイラー法
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

オイラー法は、所定の初期値を持つ1階の常微分方程式 (ODE) の解における近似値を求めます。 It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">this article</a>.

ODEは以下の形式で書きます。

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

下記が初期値です。

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

数値解を得るために、LHS上の導関数を有限差分近似に置き換えます。

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

次に $y(t+h)$ の値を求めます。

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

これは以下と同じです。

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

反復解法ルールは次のとおりです。

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

$h$ はステップサイズで、解の精度に関連する最も重要なパラメータです。 ステップサイズが小さいほど精度は向上しますが、計算コストも高くなるため、目の前の問題に応じて常に手作業で処理する必要があります。

**例: ニュートンの冷却の法則**

ニュートンの冷却の法則は、温度$T_R$下において、初期温度$T(t_0) = T_0$ のオブジェクトが冷却される様子を表した法則です。

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

または

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

オブジェクトの冷却率 $\\frac{dT(t)}{dt}$ は、周囲環境に対する現在の温度差 $\\Delta T = (T) - T_R)$ に比例するとされています。

数値近似との比較として、解析解は以下のとおりです。

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

オイラー方のルーチンを実装して、以下の3つの異なるステップサイズのニュートンの冷却の法則の例題を解きます。

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code></li>
  <li><code>10 s</code></li>
</ul>

次に、解析解と比較します。

**初期値：**

<ul>
  <li>初期温度 <big>$T_0$</big> は <code>100 °C</code> です</li>
  <li>室温 <big>$T_R$</big> は <code>20 °C</code> です</li>
  <li>冷却定数 <big>$k$</big> は <code>0.07</code>です</li>
  <li>計算する時間間隔は、 <code>0 s</code> から <code>100 s</code>です</li>
</ul>

関数の最初のパラメータは初期時間、2番目のパラメータは初期温度、3番目のパラメータは経過時間、4番目のパラメータはステップサイズです。

# --hints--

`eulersMethod` という関数です。

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` は数字を返します。

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` は 20.0424631833732 を返します。

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` は 20.01449963666907 を返します。

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` は 20.000472392 を返します。

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
