---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1

videoUrl: ''
localeTitle: Match Anything with Wildcard Period
---

## Description
<section id='description'>
有时你不会（或不需要）知道匹配模式中的确切字符。如果要精确匹配到完整的单词，那出现一个拼写错误就会匹配不到。幸运的是，你可以使用通配符<code>.</code>来处理这种情况。
通配符<code>.</code>将匹配任何一个字符。通配符也叫<code>dot</code>或<code>period</code>。你可以像使用正则表达式中任何其他字符一样使用通配符。例如，如果你想匹配<code>"hug"</code>、<code>"huh"</code>、<code>"hut"</code>和<code>"hum"</code>，你可以使用正则表达式<code>/hu./</code>匹配以上四个单词。
<blockquote>let humStr = "I'll hum a song";<br>let hugStr = "Bear hug";<br>let huRegex = /hu./;<br>humStr.match(huRegex); // Returns ["hum"]<br>hugStr.match(huRegex); // Returns ["hug"]</blockquote>
</section>

## Instructions
<section id='instructions'>
完成正则表达式<code>unRegex</code>以匹配字符串<code>"run"</code>、<code>"sun"</code>、<code>"fun"</code>、<code>"pun"</code>、<code>"nun"</code>和<code>"bun"</code>。你的正则表达式中应该使用通配符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>.test()</code>方法。
    testString: assert(code.match(/\.test\(.*\)/), '你应该使用<code>.test()</code>方法。');
  - text: 你应该在你的正则表达式<code>unRegex</code>中使用通配符。
    testString: assert(/\./.test(unRegex.source), '你应该在你的正则表达式<code>unRegex</code>中使用通配符。');
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'Let us go on a run.'</code>中匹配到<code>'run'</code>单词。"
    testString: assert(unRegex.test("Let us go on a run."), '你的正则表达式<code>unRegex</code>应该在字符串<code>"Let us go on a run."</code>中匹配到<code>"run"</code>单词。');
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'The sun is out today.'</code>中匹配到<code>'sun'</code>单词。"
    testString: assert(unRegex.test("The sun is out today."), '你的正则表达式<code>unRegex</code>应该在字符串<code>"The sun is out today."</code>中匹配到<code>"sun"</code>单词。');
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'Coding is a lot of fun.'</code>中匹配到<code>'fun'</code>单词。"
    testString: assert(unRegex.test("Coding is a lot of fun."), '你的正则表达式<code>unRegex</code>应该在字符串<code>"Coding is a lot of fun."</code>中匹配到<code>"fun"</code>单词。');
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'Seven days without a pun makes one weak.'</code>中匹配到<code>'pun'</code>单词。"
    testString: assert(unRegex.test("Seven days without a pun makes one weak."), '你的正则表达式<code>unRegex</code>应该在字符串<code>"Seven days without a pun makes one weak."</code>中匹配到<code>"pun"</code>单词。');
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'One takes a vow to be a nun.'</code>中匹配到<code>'nun'</code>单词。"
    testString: assert(unRegex.test("One takes a vow to be a nun."), '你的正则表达式<code>unRegex</code>应该在字符串<code>"One takes a vow to be a nun."</code>中匹配到<code>"nun"</code>单词。');
  - text: "你的正则表达式<code>unRegex</code>应该在字符串<code>'She got fired from the hot dog stand for putting her hair in a bun.'</code>中匹配到<code>'bun'</code>单词。"
    testString: assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."), '你的正则表达式<code>unRegex</code>应该在字符串<code>"She got fired from the hot dog stand for putting her hair in a bun."</code>中匹配到<code>"bun"</code>单词。');
  - text: "你的正则表达式<code>unRegex</code>不应该匹配<code>'There is a bug in my code.'</code>。"
    testString: assert(!unRegex.test("There is a bug in my code."), '你的正则表达式<code>unRegex</code>不应该匹配<code>"There is a bug in my code."</code>。');
  - text: "你的正则表达式<code>unRegex</code>不应该匹配<code>'Catch me if you can.'</code>。"
    testString: assert(!unRegex.test("Can me if you can."), '你的正则表达式<code>unRegex</code>不应该匹配<code>"Catch me if you can."</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              