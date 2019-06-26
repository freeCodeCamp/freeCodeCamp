---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: 匹配一切，但字母和数字
---

## Description
<section id="description">您已经了解到可以使用快捷键来匹配使用<code>\w</code>字母数字<code>[A-Za-z0-9_]</code> 。您可能想要搜索的自然模式与字母数字相反。您可以使用<code>\W</code>搜索<code>\w</code>的反面。注意，相反的模式使用大写字母。此快捷方式与<code>[^A-Za-z0-9_]</code> 。 <blockquote>让shortHand = / \ W /; <br>让数字=“42％”; <br> let sentence =“Coding！”; <br> numbers.match（简写）; //返回[“％”] <br> sentence.match（简写）; //返回[“！”] <br></blockquote></section>

## Instructions
<section id="instructions">使用速记字符类<code>\W</code>来计算各种引号和字符串中的非字母数字字符数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
