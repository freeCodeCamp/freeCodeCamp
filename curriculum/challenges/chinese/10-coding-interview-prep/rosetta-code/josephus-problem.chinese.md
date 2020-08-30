---
title: Josephus problem
id: 5a23c84252665b21eecc7ec5
challengeType: 5
videoUrl: ''
localeTitle: 约瑟夫斯问题
---

## Description
<section id="description"> <a href="https://en.wikipedia.org/wiki/Josephus problem">约瑟夫斯问题</a>是一个严峻描述的数学难题：$ n $囚犯站在一个圆圈上，顺序编号从$ 0 $到$ n-1 $。一名刽子手沿着圈子走，从囚犯$ 0 $开始，移走每个$ k $囚犯并杀死他。随着过程的继续，圆圈变得越来越小，直到只剩下一个囚犯，然后被释放。例如，如果$ n = 5 $囚犯和$ k = 2 $，囚犯被杀的命令（我们称之为“杀戮序列”）将是1,3,0和4，幸存者将是＃2。鉴于任何<big>$ n，k&gt; 0 $</big> ，找出哪个囚犯将成为最后的幸存者。在一个这样的事件中，有41个囚犯和每3 <sup>次</sup>囚犯被杀死<big>（$ K = 3 $）。</big>其中有一个聪明的名字约瑟夫斯，他解决了这个问题，站在幸存的位置，并继续讲述这个故事。他是哪个号码？写一个函数，以囚犯的初始数量和&#39;k&#39;作为参数，并返回幸存的囚犯的数量。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>josephus</code>应该是一个功能。
    testString: assert(typeof josephus=='function');
  - text: '<code>josephus(30,3)</code>应该返回一个数字。'
    testString: assert(typeof josephus(30,3)=='number');
  - text: '<code>josephus(30,3)</code>应该回<code>29</code> 。'
    testString: assert.equal(josephus(30,3),29);
  - text: '<code>josephus(30,5)</code>应该返回<code>3</code> 。'
    testString: assert.equal(josephus(30,5),3);
  - text: '<code>josephus(20,2)</code>应该返回<code>9</code> 。'
    testString: assert.equal(josephus(20,2),9);
  - text: '<code>josephus(17,6)</code>应该回归<code>2</code> 。'
    testString: assert.equal(josephus(17,6),2);
  - text: '<code>josephus(29,4)</code>应该返回<code>2</code> 。'
    testString: assert.equal(josephus(29,4),2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function josephus (init, kill) {
  // Good luck!
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
