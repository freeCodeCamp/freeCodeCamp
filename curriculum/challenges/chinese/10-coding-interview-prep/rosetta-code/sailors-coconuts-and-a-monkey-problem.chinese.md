---
title: 'Sailors, coconuts and a monkey problem'
id: 59da22823d04c95919d46269
challengeType: 5
videoUrl: ''
localeTitle: 水手，椰子和猴子问题
---

## Description
<section id="description"><p>五名水手在岛上遭遇海难，并在白天收集了一大堆椰子。 </p><p>那天晚上，第一个水手醒来并决定早点拿走他的第一份，所以试图将一堆椰子平分成五堆，但发现剩下一个椰子，所以他把它扔到一只猴子然后隐藏“他的”五个同样大小的椰子堆中的一个，并将其他四个桩推到一起，再次形成一堆可见的椰子并上床睡觉。 </p><p>长话短说，每个水手轮流在夜间起床，并执行将椰子堆分成五个的相同动作，发现剩下一个椰子并将剩下的椰子留给猴子。 </p><p>在早上（在夜间五个水手的暗中和分开行动之后），剩下的椰子被分成五个相等的堆，每个水手，然后发现一堆椰子在水手之间平分没有余数。 （早上猴子没什么。） </p><p>任务： </p><pre> <code> Create a function that returns the the minimum possible size of the initial pile of coconuts collected during the day for N sailors.</code> </pre><p>注意： </p><pre> <code> Of course the tale is told in a world where the collection of any amount of coconuts in a day and multiple divisions of the pile, etc can occur in time fitting the story line, so as not to affect the mathematics.</code> </pre><p> CF卡： </p><p> <a href="https://www.youtube.com/watch?v=U9qU20VmvaU" title="链接：https：//www.youtube.com/watch？v = U9qU20VmvaU">猴子和椰子 -  Numberphile</a> （视频）分析解决方案。 </p><pre> <code> &lt;a href=&quot;http://oeis.org/A002021&quot; title=&quot;link: http://oeis.org/A002021&quot;&gt;A002021 Pile of coconuts problem&lt;/a&gt; The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</code> </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>splitCoconuts</code>是一个函数。
    testString: assert(typeof splitCoconuts === 'function');
  - text: <code>splitCoconuts(5)</code>应该返回3121。
    testString: assert(splitCoconuts(5) === 3121);
  - text: <code>splitCoconuts(6)</code>应返回233275。
    testString: assert(splitCoconuts(6) === 233275);
  - text: <code>splitCoconuts(7)</code>应该返回823537。
    testString: assert(splitCoconuts(7) === 823537);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function splitCoconuts(intSailors) {
  // Good luck!
  return true;
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
