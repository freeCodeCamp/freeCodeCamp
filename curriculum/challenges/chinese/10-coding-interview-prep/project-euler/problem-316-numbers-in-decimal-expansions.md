---
id: 5900f4a81000cf542c50ffbb
challengeType: 5
title: 'Problem 316: Numbers in decimal expansions'
videoUrl: ''
localeTitle: 问题316：十进制扩展中的数字
---

## Description
<section id="description">
令p = p1 p2 p3 ...是无限数的随机数字序列，它们以相等的概率从{0,1,2,3,4,5,6,7,8,9}中选择。
可以看出p对应于实数0.p1 p2 p3 ....
还可以看出，从间隔[0,1）中选择一个随机实数等效于选择一个从{0,1,2,3,4,5,6,7,8， 9}的概率相等。

对于具有d个十进制数字的任何正整数n，令k为最小索引，以使pk，pk + 1，... pk + d-1为n的十进制数字，顺序相同。
同样，令g（n）为k的期望值； 可以证明g（n）总是有限的，有趣的是，总是整数。

例如，如果n = 535，则
对于p = 31415926535897 ....，我们得到k = 9
对于p = 355287143650049560000490848764084685354 ...，我们得到k = 36
等等，我们发现g（535）= 1008。

鉴于此，找到

注意：代表发言权功能。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler316()</code>应该返回542934735751917760。
    testString: assert.strictEqual(euler316(), 542934735751917760);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler316() {
  // Good luck!
  return true;
}

euler316();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
