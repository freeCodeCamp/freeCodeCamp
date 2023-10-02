---
id: 5900f3fc1000cf542c50ff0f
title: '問題 144：一束激光的多次反射研究'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

激光物理學中，“白腔”是一個使激光束產生延遲的鏡面系統。 激光束進入白腔後，會在鏡面上不斷反射，並最終射出。

本題中涉及的白腔是一個橢圓，對應方程爲 $4{x}^2 + y^2 = 100$。

橢圓頂部削去了 $−0.01 ≤ x ≤ +0.01$ 的部分，使得激光束可以通過該部分進入和離開白腔。

<div style="text-align: center">
  <img class="img-responsive center-block" alt="light beam starting at point (0.0, 10.1), and impacting the mirror at point (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animation with first 10 reflections of the beam" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

本題中，激光束從白腔外一點 (0.0, 10.1) 發出，首次接觸鏡面的點爲 (1.4, -9.6)。

每當激光束擊中橢圓表面時，均遵循反射定律：“入射角等於反射角”。 即入射光束和反射光束與界面法線的夾角角度相等。

左圖中，紅線展示了激光束擊中白腔鏡面的前兩個接觸點；藍線表示第一次反射時在入射點處與橢圓的切線。

對橢圓任意點 (x, y)，均有切線斜率 m 滿足 $m = −4 × \frac{x}{y}$。

法線垂直於入射點處的切線。

右側動畫展示了激光束前十次反射的路徑。

請求出在激光束離開白腔前，它在橢圓的內表面上擊中了多少次？

# --hints--

`laserBeamReflections()` 應該返回 `354`。

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
