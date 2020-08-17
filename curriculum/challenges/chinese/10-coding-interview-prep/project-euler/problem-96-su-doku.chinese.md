---
id: 5900f3cc1000cf542c50fedf
challengeType: 5
title: 'Problem 96: Su Doku'
videoUrl: ''
localeTitle: 问题96：苏杜库
---

## Description
<section id="description"> Su Doku（日语含义数字位置）是流行拼图概念的名称。它的起源尚不清楚，但必须归功于莱昂哈德·欧拉（Leonhard Euler），他发明了一种类似的，更加困难的拼图游戏，称为拉丁广场（Latin Squares）。然而，Su Doku谜题的目标是替换9乘9网格中的空白（或零），使得每行，每列和3乘3包含每个数字1到9.下面是一个示例一个典型的起始拼图网格及其解决方案网格。 <p> 0 0 39 0 00 0 1 0 2 03 0 58 0 6 6 0 00 0 14 0 0 0 0 87 0 00 0 6 1 0 20 0 07 0 8 9 0 00 0 82 0 0 0 0 28 0 00 0 5 6 0 92 0 30 1 0 5 0 00 0 93 0 0 </p><p> 4 8 39 6 72 5 1 9 2 13 4 58 7 6 6 5 78 2 14 9 3 5 4 87 2 91 3 6 1 3 25 6 47 9 8 9 7 61 3 82 4 5 3 7 28 1 46 9 5 6 8 92 5 34 1 7 5 1 47 6 93 8 2 </p><p>一个构造良好的Su Doku拼图有一个独特的解决方案，可以通过逻辑解决，虽然可能需要采用“猜测和测试”方法来消除选项（对此有很多争议的意见）。搜索的复杂性决定了拼图的难度;上面的例子被认为是简单的，因为它可以通过直接直接扣除来解决。 6K文本文件，sudoku.txt（右键单击和&#39;保存链接/目标为...&#39;），包含五十个不同的Su Doku难题，但都有独特的解决方案（文件中的第一个谜题是上面的例子） ）。通过解决所有五十个谜题，找到每个解决方案网格左上角找到的3位数字的总和;例如，483是上面解决方案网格左上角的3位数字。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler96()</code>应返回24702。
    testString: assert.strictEqual(euler96(), 24702);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler96() {
  // Good luck!
  return true;
}

euler96();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
