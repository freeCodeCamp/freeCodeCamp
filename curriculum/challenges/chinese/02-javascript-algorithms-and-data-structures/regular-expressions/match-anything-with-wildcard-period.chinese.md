---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
forumTopicId: 301348
localeTitle: 用通配符.匹配任何内容
---

## Description
<section id='description'>
有时不（或不需要）知道匹配模式中的确切字符。如果要精确匹配到完整的单词，那出现一个拼写错误就会匹配不到。幸运的是，可以使用通配符<code>.</code>来处理这种情况。
通配符<code>.</code>将匹配任何一个字符。通配符也叫<code>dot</code>或<code>period</code>。可以像使用正则表达式中任何其他字符一样使用通配符。例如，如果想匹配<code>"hug"</code>、<code>"huh"</code>、<code>"hut"</code>和<code>"hum"</code>，可以使用正则表达式<code>/hu./</code>匹配以上四个单词。

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
```

</section>

## Instructions
<section id='instructions'>
完成正则表达式<code>unRegex</code>以匹配字符串<code>"run"</code>、<code>"sun"</code>、<code>"fun"</code>、<code>"pun"</code>、<code>"nun"</code>和<code>"bun"</code>。正则表达式中应该使用通配符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>.test()</code>方法。
    testString: assert(code.match(/\.test\(.*\)/));
  - text: 你应该在你的正则表达式<code>unRegex</code>中使用通配符。
    testString: assert(/\./.test(unRegex.source));
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'Let us go on a run.'</code>中匹配到<code>'run'</code>单词。"
    testString: assert(unRegex.test("Let us go on a run."));
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'The sun is out today.'</code>中匹配到<code>'sun'</code>单词。"
    testString: assert(unRegex.test("The sun is out today."));
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'Coding is a lot of fun.'</code>中匹配到<code>'fun'</code>单词。"
    testString: assert(unRegex.test("Coding is a lot of fun."));
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'Seven days without a pun makes one weak.'</code>中匹配到<code>'pun'</code>单词。"
    testString: assert(unRegex.test("Seven days without a pun makes one weak."));
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'One takes a vow to be a nun.'</code>中匹配到<code>'nun'</code>单词。"
    testString: assert(unRegex.test("One takes a vow to be a nun."));
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'She got fired from the hot dog stand for putting her hair in a bun.'</code>中匹配到<code>'bun'</code>单词。"
    testString: assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."));
  - text: "你的正则表达式<code>unRegex</code>不应该匹配<code>'There is a bug in my code.'</code>。"
    testString: assert(!unRegex.test("There is a bug in my code."));
  - text: "你的正则表达式<code>unRegex</code>不应该匹配<code>'Catch me if you can.'</code>。"
    testString: assert(!unRegex.test("Can me if you can."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```

</section>
