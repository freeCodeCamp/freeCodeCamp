---
id: 587d7dba367417b2b2512ba8
challengeType: 1
forumTopicId: 301338
title: 检查全部或无
---

## Description
<section id='description'>
有时，想要搜寻的匹配模式可能有不确定是否存在的部分。尽管如此，还是想检查它们。
为此，可以使用问号<code>?</code>指定可能存在的元素。这将检查前面的零个或一个元素。可以将此符号视为前面的元素是可选的。
例如，美式英语和英式英语略有不同，可以使用问号来匹配两种拼写。

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>favRegex</code>以匹配美式英语（favorite）和英式英语（favourite）的单词版本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用可选符号<code>?</code>。
    testString: assert(favRegex.source.match(/\?/).length > 0);
  - text: "你的正则表达式应该匹配<code>'favorite'</code>。"
    testString: assert(favRegex.test("favorite"));
  - text: "你的正则表达式应该匹配<code>'favourite'</code>。"
    testString: assert(favRegex.test("favourite"));
  - text: "你的正则表达式不应该匹配<code>'fav'</code>。"
    testString: assert(!favRegex.test("fav"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```

</section>
