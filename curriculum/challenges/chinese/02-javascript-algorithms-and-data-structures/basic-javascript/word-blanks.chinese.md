---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: ''
localeTitle: 字空白
---

## Description
<section id="description">我们现在将使用我们的弦乐知识来构建一个“ <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">疯狂的自由</a> ”风格的文字游戏，我们称之为“Word Blanks”。您将创建一个（可选幽默的）“填空”样式句子。在“疯狂的自由人”游戏中，您将获得包含名词，动词，形容词和副词等缺失单词的句子。然后，您可以用完成的句子有意义的方式用您选择的单词填写缺失的部分。想想这句话- “这是真的<strong>____，</strong>我们<strong>____</strong> <strong>____</strong>自己”。这句话有三个缺失的部分 - 形容词，动词和副词，我们可以添加我们选择的单词来完成它。然后我们可以将完成的句子分配给变量，如下所示： <blockquote> var sentence =“它真的是”+“热”+“，我们”+“笑”+“自己”+“傻。”; </blockquote></section>

## Instructions
<section id="instructions">在这个挑战中，我们为您提供名词，动词，形容词和副词。您需要使用您选择的单词以及我们提供的单词来形成完整的句子。您将需要使用字符串连接运算符<code>+</code>来使用提供的变量构建新字符串： <code>myNoun</code> ， <code>myAdjective</code> ， <code>myVerb</code>和<code>myAdverb</code> 。然后，您将形成的字符串分配给<code>result</code>变量。您还需要考虑字符串中的空格，以便最后一句话在所有单词之间有空格。结果应该是一个完整的句子。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>wordBlanks(&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;)</code>应该返回一个字符串。'
    testString: assert(typeof wordBlanks("","","","") === "string");
  - text: '<code>wordBlanks(&quot;dog&quot;, &quot;big&quot;, &quot;ran&quot;, &quot;quickly&quot;)</code>应包含由非单词字符（以及madlib中的任何其他单词）分隔的所有传入单词。'
    testString: assert(/\bdog\b/.test(test1) && /\bbig\b/.test(test1) && /\bran\b/.test(test1) && /\bquickly\b/.test(test1));
  - text: '<code>wordBlanks(&quot;cat&quot;, &quot;little&quot;, &quot;hit&quot;, &quot;slowly&quot;)</code>应包含由非单词字符（以及madlib中的任何其他单词）分隔的所有传入单词。'
    testString: assert(/\bcat\b/.test(test2) && /\blittle\b/.test(test2) && /\bhit\b/.test(test2) && /\bslowly\b/.test(test2));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
