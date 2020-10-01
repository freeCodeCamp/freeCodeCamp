---
id: 5900f3ac1000cf542c50febf
challengeType: 5
title: 'Problem 64: Odd period square roots'
videoUrl: ''
localeTitle: 问题64：奇数期平方根
---

## Description
<section id="description">所有平方根都是周期性的，当写为连续分数时，可以写成以下形式： <p> √N= a0 + 1 </p><p> a1 + 1 </p><p> a2 + 1 </p><p> a3 + ...... </p><p>例如，让我们考虑√23： </p><p> √23= 4 +√23 -  4 = 4 + 1 = 4 + 1 </p><p> 1√23-4 </p><p> 1 +√23 -  37 </p><p>如果我们继续，我们将得到以下扩展： </p><p> √23= 4 + 1 </p><p> 1 + 1 </p><p> 3 + 1 </p><p> 1 + 1 </p><p> 8 + ...... </p><p>该过程可归纳如下： </p><p> a0 = 4， </p><p> 1√23-4=√23+ 47 = 1 +√23-37a1 = 1， </p><p> 7√23-3= 7（√23+ 3）14 = 3 +√23-32a2= 3， </p><p> 2√23-3= 2（√23+ 3）14 = 1 +√23-47a3 = 1， </p><p> 7√23-4= 7（√23+ 4）7 = 8 +√23-4a4= 8， </p><p> 1√23-4=√23+ 47 = 1 +√23-37a5 = 1， </p><p> 7√23-3= 7（√23+ 3）14 = 3 +√23-32a6= 3， </p><p> 2√23-3= 2（√23+ 3）14 = 1 +√23-47a7 = 1， </p><p> 7√23-4= 7（√23+ 4）7 = 8 +√23-4 </p><p>可以看出序列是重复的。为简明起见，我们使用符号√23= [4;（1,3,1,8）]来表示块（1,3,1,8）无限重复。 </p><p> （无理）平方根的前十个连续分数表示为：√2= [1;（2）]，周期=1√3= [1;（1,2）]，周期=2√5= [2; （4）]，期间=1√6= [2;（2,4）]，期间=2√7= [2;（1,1,1,4）]，期间=4√8= [2; （1,4）]，期间=2√10= [3;（6）]，期间=1√11= [3;（3,6）]，期间=2√12= [3;（2,6 ）]，period =2√13= [3;（1,1,1,1,6）]，period = 5对于N≤13，恰好四个连续分数具有奇数周期。 N≤10000的连续分数有多少个奇数周期？ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler64()</code>应返回1322。
    testString: assert.strictEqual(euler64(), 1322);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler64() {
  // Good luck!
  return true;
}

euler64();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
