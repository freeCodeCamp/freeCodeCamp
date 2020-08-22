---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 搜索和替换
---

## Description
<section id="description">使用提供的参数执行搜索并替换句子并返回新句子。第一个参数是执行搜索和替换的句子。第二个参数是你要替换的词（之前）。第三个参数是你将用（后）替换第二个参数。 <strong>注意</strong> <br>在更换原始单词时保留原始单词中第一个字符的大小写。例如，如果您的意思是将“Book”替换为“dog”，则应将其替换为“Dog”。如果卡住，请记住使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myReplace(&quot;Let us go to the store&quot;, &quot;store&quot;, &quot;mall&quot;)</code>应该返回“让我们去商场”。'
    testString: assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
  - text: '<code>myReplace(&quot;He is Sleeping on the couch&quot;, &quot;Sleeping&quot;, &quot;sitting&quot;)</code>应该回归“他正坐在沙发上”。'
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
  - text: '<code>myReplace(&quot;This has a spellngi error&quot;, &quot;spellngi&quot;, &quot;spelling&quot;)</code>应该返回“这有一个拼写错误”。'
    testString: assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
  - text: '<code>myReplace(&quot;His name is Tom&quot;, &quot;Tom&quot;, &quot;john&quot;)</code>应该回归“他的名字是约翰”。'
    testString: assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John");
  - text: '<code>myReplace(&quot;Let us get back to more Coding&quot;, &quot;Coding&quot;, &quot;algorithms&quot;)</code>应该返回“让我们回到更多算法”。'
    testString: assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
