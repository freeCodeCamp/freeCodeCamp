---
id: 5900f3fc1000cf542c50ff0f
title: '問題 144: レーザー光線の多重反射を調べ上げる'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

レーザー物理学において、「ホワイトセル」(white cell) はレーザー光線に対して遅延線の働きをするミラー系のことです。 光線はホワイトセルに入り、ミラーで反射し、最終的に出て行きます。

ここでは、特定のホワイトセルを式 $4{x}^2 + y^2 = 100$ で表される楕円と考えます。

その上部には $−0.01 ≤ x ≤ +0.01$ に対応する個所に穴があり、そこから光線が出入りできます。

<div style="text-align: center">
  <img class="img-responsive center-block" alt="light beam starting at point (0.0, 10.1), and impacting the mirror at point (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animation with first 10 reflections of the beam" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

この問題では、光線はホワイトセルのすぐ外側 (0.0, 10.1) から発射され、まず (1.4, -9.6) でミラーに反射します。

光線は、楕円の内側に当たるたびに、「入射角と反射角は等しい」という反射の一般法則に従って進みます。 つまり、入射光線と反射光線の両方が、入射点における法線に対して同じ角度を成します。

上に示した左側の図では、赤い線は光線がホワイトセルの壁に接する最初の 2 点を示し、青い線は最初に反射する入射点における楕円の接線を示しています。

与えられた楕円の任意の点 (x, y) における接線の m の傾きは $m = −4 × \frac{x}{y}$ です。

法線は、入射点における接線に対して直角を成します。

右側のアニメーションは、最初の 10 回の反射を示しています。

光線は、ホワイトセルから出るまでの間にその内側に何回当たりますか。

# --hints--

`laserBeamReflections()` は `354` を返す必要があります。

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
