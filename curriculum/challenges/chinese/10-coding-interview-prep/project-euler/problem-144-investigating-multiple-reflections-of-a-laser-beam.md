---
id: 5900f3fc1000cf542c50ff0f
title: '问题 144：一束激光的多次反射研究'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

激光物理学中，“白腔”是一个使激光束产生延迟的镜面系统。 激光束进入白腔后，会在镜面上不断反射，并最终射出。

本题中涉及的白腔是一个椭圆，对应方程为 $4{x}^2 + y^2 = 100$。

椭圆顶部削去了 $−0.01 ≤ x ≤ +0.01$ 的部分，使得激光束可以通过该部分进入和离开白腔。

<div style="text-align: center">
  <img class="img-responsive center-block" alt="light beam starting at point (0.0, 10.1), and impacting the mirror at point (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animation with first 10 reflections of the beam" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

本题中，激光束从白腔外一点 (0.0, 10.1) 发出，首次接触镜面的点为 (1.4, -9.6)。

每当激光束击中椭圆表面时，均遵循反射定律：“入射角等于反射角”。 即入射光束和反射光束与界面法线的夹角角度相等。

左图中，红线展示了激光束击中白腔镜面的前两个接触点；蓝线表示第一次反射时在入射点处与椭圆的切线。

对椭圆任意点 (x, y)，均有切线斜率 m 满足 $m = −4 × \frac{x}{y}$。

法线垂直于入射点处的切线。

右侧动画展示了激光束前十次反射的路径。

请求出在激光束离开白腔前，它在椭圆的内表面上击中了多少次？

# --hints--

`laserBeamReflections()` 应该返回 `354`。

```js
assert.strictEqual(laserBeamReflections(), 354);
```

# --seed--

## --seed-contents--

```js
function laserBeamReflections() {

  return true;
}

laserBeamReflections();
```

# --solutions--

```js
// solution required
```
