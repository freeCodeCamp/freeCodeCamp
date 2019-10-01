---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
challengeType: 5
forumTopicId: 302234
localeTitle: Запястья
---

## Description
<section id='description'>
<p> Comma quibbling - это задача, первоначально заданная Эриком Липпертом в его <a href="http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" title="ссылка: http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx">блоге</a> . </p> Задача: <p> Напишите функцию для генерации вывода строки, которая представляет собой конкатенацию входных слов из списка / последовательности, где: </p> Ввод без слов выводит строку вывода только двух символов скобок «{}». Ввод только одного слова, например [&quot;ABC&quot;], выводит строку вывода слова внутри двух фигурных скобок, например, &quot;{ABC}&quot;. Ввод двух слов, например [&quot;ABC&quot;, &quot;DEF&quot;], выдает строку вывода двух слов внутри двух фигурных скобок словами, разделенными строкой &quot;и&quot;, например &quot;{ABC и DEF}&quot;. Ввод трех или более слов, например [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;], выводит строку вывода всего, кроме последнего слова, разделенного символом &quot;,&quot; с последним словом, разделенным символом &quot;и&quot; «и все в фигурных скобках; например, «{ABC, DEF, G и H}». <p> Протестируйте свою функцию со следующей серией входов, показывающей ваш вывод здесь, на этой странице: </p> [] # (Нет входных слов). [&quot;ABC&quot;] [&quot;ABC&quot;, &quot;DEF&quot;] [&quot;ABC&quot;, &quot;DEF&quot;, &quot;G&quot;, &quot;H&quot;] <p> Примечание. Предположим, что для этой задачи слова являются непустыми строками символов верхнего регистра. </p>
</section>

## Instructions
<section id='instructions'>
Write a function to generate a string output which is the concatenation of input words from a list/sequence where:
<ol>
  <li>An input of no words produces the output string of just the two brace characters (<code>"{}"</code>)</li>
  <li>An input of just one word, e.g. <code>["ABC"]</code>, produces the output string of the word inside the two braces, e.g. <code>"{ABC}"</code></li>
  <li>An input of two words, e.g. <code>["ABC", "DEF"]</code>, produces the output string of the two words inside the two braces with the words separated by the string <code>" and "</code>, e.g. <code>"{ABC and DEF}"</code></li>
  <li>An input of three or more words, e.g. <code>["ABC", "DEF", "G", "H"]</code>, produces the output string of all but the last word separated by <code>", "</code> with the last word separated by <code>" and "</code> and all within braces; e.g. <code>"{ABC, DEF, G and H}"</code></li>
</ol>
Test your function with the following series of inputs showing your output here on this page:
<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>
<strong>Note:</strong> Assume words are non-empty strings of uppercase characters for this task.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code> is a function.
    testString: assert(typeof quibble === 'function');
  - text: <code>quibble(["ABC"])</code> should return a string.
    testString: assert(typeof quibble(["ABC"]) === 'string');
  - text: <code>quibble([])</code> should return "{}".
    testString: assert.equal(quibble(testCases[0]), results[0]);
  - text: <code>quibble(["ABC"])</code> should return "{ABC}".
    testString: assert.equal(quibble(testCases[1]), results[1]);
  - text: <code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".
    testString: assert.equal(quibble(testCases[2]), results[2]);
  - text: <code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".
    testString: assert.equal(quibble(testCases[3]), results[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble(words) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC,DEF,G and H}"];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```

</section>
