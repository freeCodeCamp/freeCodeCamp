---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: https://scrimba.com/c/c2QvgSr
forumTopicId: 17568
localeTitle: Исключение буквенных котировок в строках
---

## Description
<section id='description'>
Когда вы определяете строку, вы должны начинать и заканчивать одиночную или двойную кавычку. Что происходит, когда вам нужна буквальная цитата: <code>&quot;</code> или <code>&#39;</code> внутри вашей строки? В JavaScript вы можете <dfn>избежать</dfn> цитаты, рассматривая ее как конец строки, помещая <dfn>обратную косую черту</dfn> ( <code>\</code> ) перед цитатой. <code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code> Это сигнализирует JavaScript, что следующая цитата не является концом строки, но должна появляться внутри строки. Поэтому, если вы должны были напечатать это на консоли, вы бы получили: <code>Alan said, &quot;Peter is learning JavaScript&quot;.</code>
</section>

## Instructions
<section id='instructions'>
Используйте <dfn>обратную косую черту,</dfn> чтобы назначить строку переменной <code>myStr</code> чтобы, если вы должны были ее распечатать на консоль, вы увидите: « <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).
    testString: assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
  - text: 'Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>'
    testString: assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

</section>
