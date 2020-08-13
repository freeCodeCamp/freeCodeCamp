---
title: Amicable pairs
id: 5949b579404977fbaefcd737
challengeType: 5
videoUrl: ''
localeTitle: 友好的对
---

## Description
<section id="description">如果$ N \ neq M $和N $ $的<a href="http://rosettacode.org/wiki/Proper divisors" title="适当的除数">适当除数之</a>和（$ \ mathrm {sum}（\ mathrm {propDivs}（N）），两个整数$ N $和$ M $被认为是<a href="https://en.wikipedia.org/wiki/Amicable numbers" title="wp：友善号码">友好对</a> $）$ = M $以及$ \ mathrm {sum}（\ mathrm {propDivs}（M））= N $。示例：1184和1210是友好对，具有适当的除数：1,2,4,8,16,32,37,74,148,296,592和1,2,5,10,11,25,55，分别为110,121,242,605。任务：计算并显示低于20,000的Amicable对（有八个）。相关任务<a href="http://rosettacode.org/wiki/Proper divisors" title="适当的除数">适当的除数</a> <a href="http://rosettacode.org/wiki/Abundant, deficient and perfect number classifications" title="丰富，不足和完善的数字分类">丰富，缺陷和完善的数字分类</a> <a href="http://rosettacode.org/wiki/Aliquot sequence classifications" title="等分序列分类">等分序列分类</a>及其友好分类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>amicablePairsUpTo</code>是一个函数。
    testString: assert(typeof amicablePairsUpTo === 'function');
  - text: '<code>[[220,284]]</code> <code>amicablePairsUpTo(300)</code>应返回<code>[[220,284]]</code> 。'
    testString: assert.deepEqual(amicablePairsUpTo(300), answer300);
  - text: '<code>[[220,284],[1184,1210],[2620,2924]]</code> <code>amicablePairsUpTo(3000)</code>应返回<code>[[220,284],[1184,1210],[2620,2924]]</code> 。'
    testString: assert.deepEqual(amicablePairsUpTo(3000), answer3000);
  - text: '<code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code> <code>amicablePairsUpTo(20000)</code>应返回<code>[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]</code> 。'
    testString: assert.deepEqual(amicablePairsUpTo(20000), answer20000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function amicablePairsUpTo (maxNum) {
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
