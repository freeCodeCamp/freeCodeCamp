---
id: 587d7db6367417b2b2512b99
challengeType: 1
forumTopicId: 301350
title: 匹配出现一次或多次的字符
---

## Description
<section id='description'>
有时，需要匹配出现一次或者连续多次的的字符（或字符组）。这意味着它至少出现一次，并且可能重复出现。
可以使用<code>+</code>符号来检查情况是否如此。记住，字符或匹配模式必须一个接一个地连续出现。
例如，<code>/a+/g</code>会在<code>"abc"</code>中匹配到一个匹配项，并且返回<code>["a"]</code>。因为<code>+</code>的存在，它也会在<code>"aabc"</code>中匹配到一个匹配项，然后返回<code>["aa"]</code>。
如果它是检查字符串<code>"abab"</code>，它将匹配到两个匹配项并且返回<code>["a", "a"]</code>，因为<code>a</code>字符不连续，在它们之间有一个<code>b</code>字符。最后，因为在字符串<code>"bcd"</code>中没有<code>"a"</code>，因此找不到匹配项。
</section>

## Instructions
<section id='instructions'>
想要在字符串<code>"Mississippi"</code>中匹配到出现一次或多次的字母<code>s</code>的匹配项。编写一个使用<code>+</code>符号的正则表达式。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应该使用<code>+</code>符号来匹配一个或多个<code>s</code>字符。
    testString: assert(/\+/.test(myRegex.source));
  - text: 你的正则表达式<code>myRegex</code>应该匹配两项。
    testString: assert(result.length == 2);
  - text: "<code>结果</code>变量应该是一个包含两个<code>'ss'</code>匹配项的数组。"
    testString: assert(result[0] == 'ss' && result[1] == 'ss');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```

</section>
