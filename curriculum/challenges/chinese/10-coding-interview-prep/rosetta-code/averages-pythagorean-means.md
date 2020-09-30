---
title: Averages-Pythagorean means
id: 594d966a1467eb84194f0086
challengeType: 5
videoUrl: ''
localeTitle: 平均值 - 毕达哥拉斯指的是
---

## Description
<section id="description"><p class="rosetta__paragraph">计算整数<big>1</big>到<big>10</big> （包括）的所有三个<a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Pythagorean means" title="wp：毕达哥拉斯意味着">毕达哥拉斯方法</a> 。 </p><p class="rosetta__paragraph">为这组正整数显示<big>$ A（x_1，\ ldots，x_n）\ geq G（x_1，\ ldots，x_n）\ geq H（x_1，\ ldots，x_n）$</big> 。 </p>这三种方法中最常见的<a class="rosetta__link--rosetta" href="http://rosettacode.org/wiki/Averages/Arithmetic mean" title="平均值/算术平均值">算术平均值</a>是列表的总和除以其长度： <big>$ A（x_1，\ ldots，x_n）= \ frac {x_1 + \ cdots + x_n} {n} $</big> <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Geometric mean" title="wp：几何平均值">几何mean</a>是列表产品的$ n $ th根： <big>$ G（x_1，\ ldots，x_n）= \ sqrt [n] {x_1 \ cdots x_n} $</big> <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/Harmonic mean" title="wp：谐波意味着">调和平均值</a>是$ n $除以总和列表中每个项目的倒数： <big>$ H（x_1，\ ldots，x_n）= \ frac {n} {\ frac {1} {x_1} + \ cdots + \ frac {1} {x_n}} $</big> <p class="rosetta__paragraph">假设输入是包含所有数字的有序数组。 </p><p class="rosetta__paragraph">要获得答案，请按以下格式输出对象： </p><pre class="rosetta__pre"> {
  值：{
    算术：5.5，
    几何：4.528728688116765，
    谐波：3.414171521474055
  }，
  测试：&#39;是A&gt; = G&gt; = H？是&#39;
}
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pythagoreanMeans</code>是一种功能。
    testString: assert(typeof pythagoreanMeans === 'function');
  - text: '<code>pythagoreanMeans([1, 2, ..., 10])</code>应该等于上面相同的输出。'
    testString: assert.deepEqual(pythagoreanMeans(range1), answer1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pythagoreanMeans (rangeArr) {
  // Good luck!
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
