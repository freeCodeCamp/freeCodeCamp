---
id: 56533eb9ac21ba0edf2244bb
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
title: 填词造句
---

## Description
<section id='description'>
现在，我们来用字符串的相关知识实现一个 "<a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Libs</a>" 类的文字游戏，称为 "Word Blanks"。 你将创建一个（可选幽默的）“填空”样式句子。
在 "Mad Libs" 游戏中，提供一个缺少一些单词的句子，缺少的单词包括名词，动词，形容词和副词等。然后，你选择一些单词填写句子缺失的地方，使句子完整并且有意义。
思考一下这句话 - "It was really <strong>____</strong>, and we <strong>____</strong> ourselves <strong>____</strong>"。这句话有三个缺失的部分 - 形容词，动词和副词，选择合适单词填入完成它。然后将完成的句子赋值给变量，如下所示：

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

</section>

## Instructions
<section id='instructions'>
在这个挑战中，我们为你提供名词，动词，形容词和副词。你需要使用合适单词以及我们提供的单词来形成完整的句子。
你需要使用字符串连接运算符<code>+</code>来拼接字符串变量：<code>myNoun</code>，<code>myAdjective</code>，<code>myVerb</code>，和<code>myAdverb</code>来构建一个新字符串。然后，将新字符串赋给<code>result</code>变量。
你还需要考虑字符串中的空格，确保句子的所有单词之间有空格。结果应该是一个完整的句子。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>wordBlanks("","","","")</code>应该返回一个字符串。
    testString: assert(typeof wordBlanks === 'string');
  - text: 不能改变 <code>myNoun</code>、<code>myVerb</code>、<code>myAdjective</code> 或者 <code>myAdverb</code> 的值。
    testString: assert(myNoun === "dog" && myVerb === "ran" && myAdjective === "big" && myAdverb === "quickly");    
  - text: 不能直接使用 "dog"、"ran"、"big" 或者 "quickly" 来创建 <code>wordBlanks</code>。
    testString: const newCode = removeAssignments(code); assert(!/dog/.test(newCode) && !/ran/.test(newCode) && !/big/.test(newCode) && !/quickly/.test(newCode));    
  - text: <code>wordBlanks</code> 应包含分配给变量 <code>myNoun</code>、<code>myVerb</code>、<code>myAdjective</code> 和 <code>myAdverb</code> 的所有单词，并用非单词字符（以及 madlib 中的其它单词）分隔。
    testString: assert(/\bdog\b/.test(wordBlanks) && /\bbig\b/.test(wordBlanks) && /\bran\b/.test(wordBlanks) && /\bquickly\b/.test(wordBlanks));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = ""; // Only change this line;

```

</div>

<div id='js-teardown'>

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```

</section>
