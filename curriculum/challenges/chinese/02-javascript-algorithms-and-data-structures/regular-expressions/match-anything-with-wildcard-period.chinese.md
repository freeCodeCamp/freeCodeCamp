---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
videoUrl: ''
localeTitle: 匹配通配符期间的任何内容
---

## Description
<section id="description">有时您不会（或不需要）知道模式中的确切字符。想到所有匹配的单词，比如拼写错误需要很长时间。幸运的是，您可以使用通配符来节省时间： <code>.</code>通配符<code>.</code>将匹配任何一个字符。通配符也称为<code>dot</code>和<code>period</code> 。您可以像使用正则表达式中的任何其他字符一样使用通配符。例如，如果你想匹配<code>&quot;hug&quot;</code> ， <code>&quot;huh&quot;</code> ， <code>&quot;hut&quot;</code>和<code>&quot;hum&quot;</code> ，你可以使用正则表达式<code>/hu./</code>来匹配所有四个单词。 <blockquote>让humStr =“我会哼唱一首歌”; <br>让hugStr =“熊抱”; <br>让huRegex = /hu./; <br> humStr.match（huRegex）; //返回[“hum”] <br> hugStr.match（huRegex）; //返回[“拥抱”] </blockquote></section>

## Instructions
<section id="instructions">完成正则表达式<code>unRegex</code> ，使其匹配字符串<code>&quot;run&quot;</code> ， <code>&quot;sun&quot;</code> ， <code>&quot;fun&quot;</code> ， <code>&quot;pun&quot;</code> ， <code>&quot;nun&quot;</code>和<code>&quot;bun&quot;</code> 。你的正则表达式应该使用通配符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该使用<code>.test()</code>方法。
    testString: 'assert(code.match(/\.test\(.*\)/), "You should use the <code>.test()</code> method.");'
  - text: 您应该在正则表达式<code>unRegex</code>使用通配符
    testString: 'assert(/\./.test(unRegex.source), "You should use the wildcard character in your regex <code>unRegex</code>");'
  - text: 你的正则表达式<code>unRegex</code>应该匹配<code>&quot;run&quot;</code> <code>&quot;Let us go on a run.&quot;</code> <code>&quot;run&quot;</code>中的<code>&quot;run&quot;</code> <code>&quot;Let us go on a run.&quot;</code>
    testString: 'assert(unRegex.test("Let us go on a run."), "Your regex <code>unRegex</code> should match <code>"run"</code> in <code>"Let us go on a run."</code>");'
  - text: 你的正则表达式<code>unRegex</code>应该与<code>&quot;sun&quot;</code> <code>&quot;The sun is out today.&quot;</code> <code>&quot;sun&quot;</code>中的<code>&quot;sun&quot;</code>匹配<code>&quot;The sun is out today.&quot;</code>
    testString: 'assert(unRegex.test("The sun is out today."), "Your regex <code>unRegex</code> should match <code>"sun"</code> in <code>"The sun is out today."</code>");'
  - text: 你的正则表达式<code>unRegex</code>应该与<code>&quot;fun&quot;</code> <code>&quot;Coding is a lot of fun.&quot;</code> <code>&quot;fun&quot;</code>中的<code>&quot;fun&quot;</code>匹配<code>&quot;Coding is a lot of fun.&quot;</code>
    testString: 'assert(unRegex.test("Coding is a lot of fun."), "Your regex <code>unRegex</code> should match <code>"fun"</code> in <code>"Coding is a lot of fun."</code>");'
  - text: 你的正则表达式<code>unRegex</code>应该匹配<code>&quot;pun&quot;</code> <code>&quot;Seven days without a pun makes one weak.&quot;</code> <code>&quot;pun&quot;</code> <code>&quot;Seven days without a pun makes one weak.&quot;</code>
    testString: 'assert(unRegex.test("Seven days without a pun makes one weak."), "Your regex <code>unRegex</code> should match <code>"pun"</code> in <code>"Seven days without a pun makes one weak."</code>");'
  - text: 你的正则表达式<code>unRegex</code>应该与<code>&quot;nun&quot;</code> <code>&quot;One takes a vow to be a nun.&quot;</code> <code>&quot;nun&quot;</code>中的<code>&quot;nun&quot;</code>匹配<code>&quot;One takes a vow to be a nun.&quot;</code>
    testString: 'assert(unRegex.test("One takes a vow to be a nun."), "Your regex <code>unRegex</code> should match <code>"nun"</code> in <code>"One takes a vow to be a nun."</code>");'
  - text: 你的正则表达式<code>unRegex</code>应该匹配<code>&quot;bun&quot;</code> <code>&quot;She got fired from the hot dog stand for putting her hair in a bun.&quot;</code> <code>&quot;bun&quot;</code>中的<code>&quot;bun&quot;</code> <code>&quot;She got fired from the hot dog stand for putting her hair in a bun.&quot;</code>
    testString: 'assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."), "Your regex <code>unRegex</code> should match <code>"bun"</code> in <code>"She got fired from the hot dog stand for putting her hair in a bun."</code>");'
  - text: 您的正则表达式<code>unRegex</code>不应与<code>&quot;There is a bug in my code.&quot;</code>匹配<code>&quot;There is a bug in my code.&quot;</code>
    testString: 'assert(!unRegex.test("There is a bug in my code."), "Your regex <code>unRegex</code> should not match <code>"There is a bug in my code."</code>");'
  - text: 您的正则表达式<code>unRegex</code>不应该匹配<code>&quot;Catch me if you can.&quot;</code>
    testString: 'assert(!unRegex.test("Can me if you can."), "Your regex <code>unRegex</code> should not match <code>"Catch me if you can."</code>");'

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
// solution required
```
</section>
