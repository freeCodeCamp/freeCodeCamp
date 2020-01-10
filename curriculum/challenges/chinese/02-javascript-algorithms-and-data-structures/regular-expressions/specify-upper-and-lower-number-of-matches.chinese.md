---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
forumTopicId: 301367
localeTitle: 指定匹配的上限和下限
---

## Description
<section id='description'>
回想一下，使用加号<code>+</code>查找一个或多个字符，使用星号<code>*</code>查找零个或多个字符。这些都很方便，但有时需要匹配一定范围的匹配模式。
可以使用<code>数量说明符</code>指定匹配模式的上下限。数量说明符与花括号（<code>{</code>和<code>}</code>）一起使用。可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。
例如，要在字符串<code>"ah"</code>中匹配仅出现<code>3</code>到<code>5</code>次的字母<code>a</code>，正则表达式应为<code>/a{3,5}h/</code>。

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>ohRegex</code>以匹配在<code>"Oh no"</code>中仅出现<code>3</code>到<code>6</code>次的字母<code>h</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用花括号。
    testString: assert(ohRegex.source.match(/{.*?}/).length > 0);
  - text: "你的正则表达式不应该匹配<code>'Ohh no'</code>。"
    testString: assert(!ohRegex.test("Ohh no"));
  - text: "你的正则表达式应该匹配<code>'Ohhh no'</code>。"
    testString: assert("Ohhh no".match(ohRegex)[0].length === 7);
  - text: 正则表达式应该匹配 <code>"Ohhhh no"</code>。
    testString: assert("Ohhhh no".match(ohRegex)[0].length === 8);
  - text: "你的正则表达式应该匹配<code>'Ohhhhh no'</code>。"
    testString: assert("Ohhhhh no".match(ohRegex)[0].length === 9);
  - text: "你的正则表达式应该匹配<code>'Ohhhhhh no'</code>。"
    testString: assert("Ohhhhhh no".match(ohRegex)[0].length === 10);
  - text: "你的正则表达式不应该匹配<code>'Ohhhhhhh no'</code>。"
    testString: assert(!ohRegex.test("Ohhhhhhh no"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

</div>
</section>

## Solution
<section id='solution'>

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```

</section>
