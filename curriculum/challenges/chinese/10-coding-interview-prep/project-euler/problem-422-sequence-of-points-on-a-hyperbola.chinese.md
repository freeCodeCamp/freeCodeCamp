---
id: 5900f5131000cf542c510025
challengeType: 5
title: 'Problem 422: Sequence of points on a hyperbola'
videoUrl: ''
localeTitle: 问题422：双曲线上的点序列
---

## Description
<section id="description">
假设H是由等式12x2 + 7xy-12y2 = 625定义的双曲线。

接下来，将X定义为点（7，1）。 可以看出X在H中。

现在，我们将H中的点序列{Pi：i≥1}定义为：
  P1 =（13，61/4）。
  P2 =（-43/6，-4）。
  对于i> 2，Pi是H中与Pi-1不同的唯一点，因此线PiPi-1与线Pi-2X平行。 可以证明Pi是定义明确的，并且其坐标始终是有理的。
您得到P3 =（-19/2，-229/24），P4 =（1267/144，-37/12）和P7 =（17194218091/143327232，274748766781/1719926784）。

用以下格式找到n = 1114的Pn：如果Pn =（a / b，c / d），其中分数是最低项，而分母是正数，则答案是（a + b + c + d）mod 1 000 007。

对于n = 7，答案应该是：806236837。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler422()</code>应该返回92060460。
    testString: assert.strictEqual(euler422(), 92060460);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler422() {
  // Good luck!
  return true;
}

euler422();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
