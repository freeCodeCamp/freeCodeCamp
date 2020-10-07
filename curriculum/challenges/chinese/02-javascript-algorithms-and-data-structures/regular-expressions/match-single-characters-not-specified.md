---
id: 587d7db6367417b2b2512b98
challengeType: 1
forumTopicId: 301358
title: 匹配单个未指定的字符
---

## Description
<section id='description'>
到目前为止，已经创建了一个想要匹配的字符集合，但也可以创建一个不想匹配的字符集合。这些类型的字符集称为<code>否定字符集</code>。
要创建<code>否定字符集</code>，需要在开始括号后面和不想匹配的字符前面放置<code>插入字符</code>（即<code>^</code>）。
例如，<code>/[^aeiou]/gi</code>匹配所有非元音字符。注意，字符<code>.</code>、<code>!</code>、<code>[</code>、<code>@</code>、<code>/</code>和空白字符等也会被匹配，该否定字符集仅排除元音字符。
</section>

## Instructions
<section id='instructions'>
创建一个匹配所有非数字或元音字符的正则表达式。请记得在正则表达式中包含恰当的标志。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应该匹配 9 项。
    testString: assert(result.length == 9);
  - text: 你的正则表达式<code>myRegex</code>应该使用全局标志。
    testString: assert(myRegex.flags.match(/g/).length == 1);
  - text: 你的正则表达式<code>myRegex</code>应该使用忽略大小写标志。
    testString: assert(myRegex.flags.match(/i/).length == 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

</section>
