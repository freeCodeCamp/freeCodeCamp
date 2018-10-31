---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
videoUrl: ''
localeTitle: Совпадение пробелов
---

## Description
<section id="description"> На сегодняшний день проблемы охватывают соответствующие буквы алфавита и цифры. Вы также можете сопоставить пробелы или пробелы между буквами. Вы можете искать пробелы с помощью <code>\s</code> , которая является строчной <code>s</code> . Этот шаблон не только соответствует пробелу, но также возвращает карету, вкладку, форму и новые символы строки. Вы можете считать это похожим на класс символов <code>[ \r\t\f\n\v]</code> . <blockquote> let whiteSpace = &quot;Пробел. Пробел везде!&quot; <br> пусть пространство Regex = / \ s / g; <br> whiteSpace.match (spaceRegex); <br> // Возвращает [&quot;&quot;, &quot;&quot;] <br></blockquote></section>

## Instructions
<section id="instructions"> Измените регулярное выражение <code>countWhiteSpace</code> для поиска нескольких символов пробела в строке. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: В вашем регулярном выражении должен использоваться глобальный флаг.
    testString: 'assert(countWhiteSpace.global, "Your regex should use the global flag.");'
  - text: Вашему регулярному выражению следует использовать сокращенный символ
    testString: 'assert(/\\s/.test(countWhiteSpace.source), "Your regex should use the shorthand character <code>\s</code> to match all whitespace characters.");'
  - text: Ваше регулярное выражение должно найти восемь пробелов в <code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8, "Your regex should find eight spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: 'Ваше регулярное выражение должно найти три пробела в <code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3, "Your regex should find three spaces in <code>"Space: the final frontier."</code>");'
  - text: Ваше регулярное выражение не должно <code>&quot;MindYourPersonalSpace&quot;</code> пробелов в <code>&quot;MindYourPersonalSpace&quot;</code>
    testString: 'assert("MindYourPersonalSpace".match(countWhiteSpace) == null, "Your regex should find no spaces in <code>"MindYourPersonalSpace"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
