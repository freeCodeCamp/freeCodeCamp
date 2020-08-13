---
title: Euler method
id: 59880443fb36441083c6c20e
challengeType: 5
videoUrl: ''
localeTitle: 欧拉方法
---

## Description
<section id="description"><p>欧拉方法在数值上近似具有给定初始值的一阶常微分方程（ODE）的解。它是解决初始值问题（IVP）的一种显式方法，如<a href="https://en.wikipedia.org/wiki/Euler method" title="wp：欧拉方法">维基百科页面中所述</a> 。 </p><p> ODE必须以下列形式提供： </p><p> :: <big>$ \ frac {dy（t）} {dt} = f（t，y（t））$</big> </p><p>具有初始值</p><p> :: <big>$ y（t_0）= y_0 $</big> </p><p>为了得到数值解，我们用有限差分近似替换LHS上的导数： </p><p> :: <big>$ \ frac {dy（t）} {dt} \ approx \ frac {y（t + h）-y（t）} {h} $</big> </p><p>然后解决$ y（t + h）$： </p><p> :: <big>$ y（t + h）\ about y（t）+ h \，\ frac {dy（t）} {dt} $</big> </p><p>这是一样的</p><p> :: <big>$ y（t + h）\ about y（t）+ h \，f（t，y（t））$</big> </p><p>然后迭代解决方案规则是： </p><p> :: <big>$ y_ {n + 1} = y_n + h \，f（t_n，y_n）$</big> </p><p>其中<big>$ h $</big>是步长，是解决方案准确性最相关的参数。较小的步长会提高精度，但也会增加计算成本，因此必须根据手头的问题手工挑选。 </p><p>示例：牛顿冷却法</p><p> Newton的冷却定律描述了在温度<big>$ T_R $</big>的环境中初始温度<big>$ T（t_0）= T_0 $</big>的对象如何冷却： </p><p> :: <big>$ \ frac {dT（t）} {dt} = -k \，\ Delta T $</big> </p><p>要么</p><p> :: <big>$ \ frac {dT（t）} {dt} = -k \，（T（t） -  T_R）$</big> </p><p>它表示物体的冷却速率<big>$ \ frac {dT（t）} {dt} $</big>与周围环境的当前温差<big>$ \ Delta T =（T（t） -  T_R）$成正比</big> 。 </p><p>我们将与数值近似进行比较的解析解是</p><p> :: <big>$ T（t）= T_R +（T_0  -  T_R）\; Ë^ { -克拉} $</big> </p>任务： <p>实现欧拉方法的一个例程，然后用它来解决牛顿冷却定律的给定例子，它有三种不同的步长： </p><p> :: * 2秒</p><p> :: * 5秒和</p><p> :: * 10秒</p><p>并与分析解决方案进行比较。 </p>初始值： <p> :: *初始温度<big>$ T_0 $</big>应为100°C </p><p> :: *室温<big>$ T_R $</big>应为20°C </p><p> :: *冷却常数<big>$ k $</big>应为0.07 </p><p> :: *计算的时间间隔应为0s──►100s </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eulersMethod</code>是一个函数。
    testString: assert(typeof eulersMethod === 'function');
  - text: '<code>eulersMethod(0, 100, 100, 10)</code>应该返回一个数字。'
    testString: assert(typeof eulersMethod(0, 100, 100, 10) === 'number');
  - text: '<code>eulersMethod(0, 100, 100, 10)</code>应返回20.0424631833732。'
    testString: assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
  - text: '<code>eulersMethod(0, 100, 100, 10)</code>应返回20.01449963666907。'
    testString: assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
  - text: '<code>eulersMethod(0, 100, 100, 10)</code>应返回20.000472392。'
    testString: assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eulersMethod (x1, y1, x2, h) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
