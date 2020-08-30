---
id: aa7697ea2477d1316795783b
title: Pig Latin
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 猪拉丁文
---

## Description
<section id="description">将提供的字符串翻译为pig latin。 <a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a>使用英语单词的第一个辅音（或辅音簇），将其移到单词的末尾并加上“ay”后缀。如果一个单词以元音开头，你只需添加“way”到最后。输入字符串保证全部为小写英文单词。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>translatePigLatin(&quot;california&quot;)</code>应该返回“aliforniacay”。
    testString: assert.deepEqual(translatePigLatin("california"), "aliforniacay");
  - text: <code>translatePigLatin(&quot;paragraphs&quot;)</code>应该返回“aragraphspay”。
    testString: assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay");
  - text: <code>translatePigLatin(&quot;glove&quot;)</code>应该返回“oveglay”。
    testString: assert.deepEqual(translatePigLatin("glove"), "oveglay");
  - text: <code>translatePigLatin(&quot;algorithm&quot;)</code>应返回“algorithmway”。
    testString: assert.deepEqual(translatePigLatin("algorithm"), "algorithmway");
  - text: <code>translatePigLatin(&quot;eight&quot;)</code>应该返回“八通”。
    testString: assert.deepEqual(translatePigLatin("eight"), "eightway");
  - text: 应该处理第一个元音出现在单词末尾的单词。
    testString: assert.deepEqual(translatePigLatin("schwartz"), "artzschway");
  - text: 应该处理没有元音的单词。
    testString: assert.deepEqual(translatePigLatin("rhythm"), "rhythmay");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
