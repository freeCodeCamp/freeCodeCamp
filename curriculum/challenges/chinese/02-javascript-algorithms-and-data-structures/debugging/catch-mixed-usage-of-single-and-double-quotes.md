---
id: 587d7b84367417b2b2512b37
challengeType: 1
forumTopicId: 301188
title: 捕捉单引号和双引号的混合用法
---

## Description
<section id='description'>
JavaScript允许使用单引号('')和双引号("")声明字符串。决定使用哪一个通常看个人偏好，但有一些例外。 
如果字符串中有缩写或存在一段带引号的文本，你就会明白为什么 JavaScript 允许两种引号了。请注意，不要提前用引号结束字符串，这会导致语法错误。
下面是混合使用引号的一些示例：

```js
// These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

当然，只使用一种引号是可以的。你可以使用反斜杠 (<code>\\</code>) 转义字符来转义字符串中的引号：

```js
// 一种引号的正确使用方式
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

</section>

## Instructions
<section id='instructions'>
修复字符串，对<code>href</code>属性的值使用不同的引号，或者转义现有的引号。注意，整个字符串外面的双引号要保留。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你应通过更改或转义来修复<code>href</code>的值 '#Home' 周围的引号。"
    testString: assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
  - text: 你应该在整个字符串外围保留双引号。
    testString: assert(code.match(/"<p>.*?<\/p>";/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```

</section>
