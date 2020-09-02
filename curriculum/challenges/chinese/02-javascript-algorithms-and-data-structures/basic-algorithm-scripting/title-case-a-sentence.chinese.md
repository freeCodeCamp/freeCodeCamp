---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 标题案例句子
---

## Description
<section id="description">返回提供的字符串，每个单词的首字母大写。确保单词的其余部分为小写。出于本练习的目的，您还应该将诸如“the”和“of”之类的连接词大写。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code>应该返回一个字符串。'
    testString: assert(typeof titleCase("I'm a little tea pot") === "string");
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code>应该归还<code>I&#39;m A Little Tea Pot</code> 。'
    testString: assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
  - text: <code>titleCase(&quot;sHoRt AnD sToUt&quot;)</code>应返回<code>Short And Stout</code> 。
    testString: assert(titleCase("sHoRt AnD sToUt") === "Short And Stout");
  - text: <code>titleCase(&quot;HERE IS MY HANDLE HERE IS MY SPOUT&quot;)</code> <code>Here Is My Handle Here Is My Spout</code> <code>titleCase(&quot;HERE IS MY HANDLE HERE IS MY SPOUT&quot;)</code>应该回到<code>Here Is My Handle Here Is My Spout</code> 。
    testString: assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
