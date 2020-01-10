---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
forumTopicId: 301366
localeTitle: 只指定匹配的下限
---

## Description
<section id='description'>
可以使用带有花括号的<code>数量说明符</code>来指定匹配模式的上下限。但有时候只想指定匹配模式的下限而不需要指定上限。
为此，在第一个数字后面跟一个逗号即可。
例如，要匹配至少出现<code>3</code>次字母<code>a</code>的字符串<code>"hah"</code>，正则表达式应该是<code>/ha{3,}h/</code>。

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```

</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>haRegex</code>，匹配包含四个或更多字母<code>z</code>的单词<code>"Hazzah"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用花括号。
    testString: assert(haRegex.source.match(/{.*?}/).length > 0);
  - text: "你的正则表达式不应该匹配<code>'Hazzah'</code>。"
    testString: assert(!haRegex.test("Hazzah"));
  - text: "你的正则表达式不应该匹配<code>'Hazzzah'</code>。"
    testString: assert(!haRegex.test("Hazzzah"));
  - text: 正则表达式应该匹配 <code>"Hazzzzah"</code>
    testString: assert("Hazzzzah".match(haRegex)[0].length === 8);
  - text: "你的正则表达式应该匹配<code>'Hazzzzah'</code>。"
    testString: assert("Hazzzzzah".match(haRegex)[0].length === 9);
  - text: 正则表达式应该匹配 <code>"Hazzzzzzah"</code>
    testString: assert("Hazzzzzzah".match(haRegex)[0].length === 10);
  - text: 正则表达式应该匹配 <code>"Hazzah"</code> with 30 <code>z</code>'s in it.
    testString: assert("Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah".match(haRegex)[0].length === 34);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

</section>
