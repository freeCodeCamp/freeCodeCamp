---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1

videoUrl: ''
localeTitle: Word Blanks
---

## Description
<section id='description'>
现在，我们来用字符串的相关知识实现一个 "<a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Libs</a>" 类的文字游戏，称为 "Word Blanks"。 你将创建一个（可选幽默的）“填空”样式句子。
在 "Mad Libs" 游戏中，提供一个缺少一些单词的句子，缺少的单词包括名词，动词，形容词和副词等。然后，你选择一些单词填写句子缺失的地方，使句子完整并且有意义。
思考一下这句话 - "It was really <strong>____</strong>, and we <strong>____</strong> ourselves <strong>____</strong>"。这句话有三个缺失的部分 - 形容词，动词和副词，选择合适单词填入完成它。然后将完成的句子赋值给变量，如下所示：
<blockquote>var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";</blockquote>
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
  - text: "<code>wordBlanks('','','','')</code>应该返回一个字符串"
    testString: assert(typeof wordBlanks("","","","") === 'string', '<code>wordBlanks("","","","")</code>应该返回一个字符串');
  - text: "<code>wordBlanks('dog', 'big', 'ran', 'quickly')</code>应包含由非单词字符（以及 madlib 中的其他单词）分隔的所有传入的单词。"
    testString: assert(/\bdog\b/.test(test1) && /\bbig\b/.test(test1) && /\bran\b/.test(test1) && /\bquickly\b/.test(test1),'<code>wordBlanks("dog", "big", "ran", "quickly")</code>应包含由非单词字符（以及 madlib 中的其他单词）分隔的所有传入的单词。');
  - text: "<code>wordBlanks('cat', 'little', 'hit', 'slowly')</code>应包含由非单词字符（以及 madlib 中的其他单词）分隔的所有传入的单词。"
    testString: assert(/\bcat\b/.test(test2) && /\blittle\b/.test(test2) && /\bhit\b/.test(test2) && /\bslowly\b/.test(test2),'<code>wordBlanks("cat", "little", "hit", "slowly")</code>应包含由非单词字符（以及 madlib 中的其他单词）分隔的所有传入的单词。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
var test1 = wordBlanks("dog", "big", "ran", "quickly");
var test2 = wordBlanks("cat", "little", "hit", "slowly");
```

</div>

</section>

## Solution
<section id='solution'>

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
  result += "It " + myVerb + " " + myAdverb + " around the yard.";

  return result;
}
```

</section>
              