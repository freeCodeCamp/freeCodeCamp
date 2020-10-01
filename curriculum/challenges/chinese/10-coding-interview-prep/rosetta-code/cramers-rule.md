---
id: 59713da0a428c1a62d7db430
challengeType: 5
videoUrl: ''
title: 克莱默的统治
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/linear algebra" title="wp：线性代数">在线性代数中</a> ， <a href="https://en.wikipedia.org/wiki/Cramer&#x27;s rule" title="wp：Cramer的规则">Cramer规则</a>是一个<a href="https://en.wikipedia.org/wiki/system of linear equations" title="wp：线性方程组">线性方程组</a>解的显式公式，其中包含与未知数一样多的方程，只要系统具有唯一解，就有效。它通过用方程右边的矢量替换一列来表示（方形）系数矩阵的决定因素和从它获得的矩阵的解决方案。 </p><p>特定</p><p><big></big></p><p> <big>$ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z＆= {\ color {red} d_1} \\ a_2x + b_2y + c_2z＆= {\ color {red} d_2} \\ a_3x + b_3y + c_3z＆= {\颜色{红} D_3} \ {结束矩阵} \权。$</big> </p><p>以矩阵格式表示</p><p><big></big></p><p> <big>$ \ begin {bmatrix} a_1＆b_1＆c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {red} d_1} \\ {\ color {red} d_2} \\ {\ color {red} d_3} \ end {bmatrix}。$</big> </p><p>然后可以找到$ x，y $和$ z $的值，如下所示： </p><p><big></big></p><p> <big>$ x = \ frac {\ begin {vmatrix} {\ color {red} d_1}＆b_1＆c_1 \\ {\ color {red} d_2}＆b_2＆c_2 \\ {\ color {red} d_3}＆b_3＆ c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1＆b_1＆c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {vmatrix}}，\ quad y = \ frac {\ begin {vmatrix } a_1＆{\ color {red} d_1}＆c_1 \\ a_2＆{\ color {red} d_2}＆c_2 \\ a_3＆{\ color {red} d_3}＆c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1＆b_1＆c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {vmatrix}}，\ text {和} z = \ frac {\ begin {vmatrix} a_1＆b_1＆{\ color {red} d_1} \\ a_2＆b_2＆{\ color {red} d_2} \\ a_3＆b_3＆{\ color {red} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1＆b_1＆ c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {vmatrix}}。$</big> </p>任务<p>给定以下方程组： </p><p> <big>$ \ begin {例} 2w-x + 5y + z = -3 \\ 3w + 2x + 2y-6z = -32 \\ w + 3x + 3y-z = -47 \\ 5w-2x-3y + 3z = 49 \\ \ end {cases} $</big> </p><p>使用Cramer的规则解决<big>$ w $，$ x $，$ y $</big>和<big>$ z $</big> 。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cramersRule</code>是一个函数。
    testString: assert(typeof cramersRule === 'function');
  - text: '<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code>应返回<code>[2, -12, -4, 1]</code> 。'
    testString: assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0]);
  - text: '<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code>应返回<code>[1, 1, -1]</code> 。'
    testString: assert.deepEqual(cramersRule(matrices[1], freeTerms[1]), answers[1]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function cramersRule (matrix, freeTerms) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
