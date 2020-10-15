---
id: 596e414344c3b2872167f0fe
challengeType: 5
videoUrl: ''
title: 逗号狡猾
---

## Description
<section id="description"><p> Comma quibbling是Eric Lippert在他的<a href="http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" title="链接：http：//blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx">博客中</a>最初设定的任务。 </p>任务： <p>编写一个函数来生成一个字符串输出，它是列表/序列中输入字的串联，其中： </p>没有单词的输入产生仅两个大括号字符“{}”的输出字符串。只有一个单词的输入，例如[“ABC”]，会在两个大括号内产生单词的输出字符串，例如“{ABC}”。两个单词的输入，例如[“ABC”，“DEF”]，产生两个大括号内的两个单词的输出字符串，其中单词由字符串“和”分隔，例如“{ABC和DEF}”。三个或更多单词的输入，例如[“ABC”，“DEF”，“G”，“H”]，产生除了最后一个单词之外的所有输出字符串，用“，”分隔，最后一个单词用“和”分隔。 “并且都在括号内;例如“{ABC，DEF，G和H}”。 <p>在此页面上显示输出的以下一系列输入测试您的功能： </p> []＃（无输入字）。 [“ABC”] [“ABC”，“DEF”] [“ABC”，“DEF”，“G”，“H”] <p>注意：假设此单词是此任务的非空字符串大写字符。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code>是一种功能。
    testString: assert(typeof quibble === 'function');
  - text: <code>quibble(["ABC"])</code>应该返回一个字符串。
    testString: assert(typeof quibble(["ABC"]) === 'string');
  - text: <code>quibble([])</code>应返回“{}”。
    testString: assert.equal(quibble(testCases[0]), results[0]);
  - text: <code>quibble(["ABC"])</code>应该返回“{ABC}”。
    testString: assert.equal(quibble(testCases[1]), results[1]);
  - text: <code>quibble(["ABC", "DEF"])</code>应返回“{ABC和DEF}”。
    testString: assert.equal(quibble(testCases[2]), results[2]);
  - text: <code>quibble(["ABC", "DEF", "G", "H"])</code>应返回“{ABC，DEF，G和H}”。
    testString: assert.equal(quibble(testCases[3]), results[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble (words) {
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
