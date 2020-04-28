---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: 匹配数字和字母的字母
---

## Description
<section id="description">使用连字符（ <code>-</code> ）匹配一系列字符不仅限于字母。它也适用于匹配一系列数字。例如， <code>/[0-5]/</code>匹配<code>0</code>到<code>5</code>之间的任何数字，包括<code>0</code>和<code>5</code> 。此外，可以在单个字符集中组合一系列字母和数字。 <blockquote>让jennyStr =“Jenny8675309”; <br>让myRegex = / [a-z0-9] / ig; <br> //匹配jennyStr中的所有字母和数字<br> jennyStr.match（myRegex）; </blockquote></section>

## Instructions
<section id="instructions">创建一个与<code>h</code>和<code>s</code>之间的字母范围匹配的正则表达式，以及介于<code>2</code>和<code>6</code>之间的数字范围。请记住在正则表达式中包含适当的标志。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应该匹配17项。
    testString: assert(result.length == 17);
  - text: 你的正则表达式<code>myRegex</code>应该使用全局标志。
    testString: assert(myRegex.flags.match(/g/).length == 1);
  - text: 你的正则表达式<code>myRegex</code>应该使用不区分大小写的标志。
    testString: assert(myRegex.flags.match(/i/).length == 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
