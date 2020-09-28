---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: https://scrimba.com/c/cvmqRh6
forumTopicId: 17567
localeTitle: Последовательности выхода в строках
---

## Description
<section id='description'>
Цитаты не являются единственными символами, которые могут быть <dfn>экранированы</dfn> внутри строки. Существует две причины использования экранирующих символов: во-первых, чтобы вы могли использовать символы, которые вы в противном случае не могли бы вывести, например, backspace. Во-вторых, вы можете представить несколько кавычек в строке без неправильного толкования JavaScript, что вы имеете в виду. Мы узнали об этом в предыдущей задаче. <table class="table table-striped"><thead><tr><th> Код </th><th> Вывод </th></tr></thead><tbody><tr><td> <code>\&#39;</code> </td> <td> одиночная цитата </td></tr><tr><td> <code>\&quot;</code> </td> <td> двойная цитата </td></tr><tr><td> <code>\\</code> </td> <td> обратный слэш </td></tr><tr><td> <code>\n</code> </td> <td> новая линия </td></tr><tr><td> <code>\r</code> </td> <td> возврат каретки </td></tr><tr><td> <code>\t</code> </td> <td> табуляция </td></tr><tr><td> <code>\b</code> </td> <td> возврат на одну позицию </td></tr><tr><td> <code>\f</code> </td> <td> форма подачи </td></tr></tbody></table> <em>Обратите внимание, что обратная косая черта должна быть экранирована, чтобы отображать ее как обратную косую черту.</em>
</section>

## Instructions
<section id='instructions'>
Назначьте следующие три строки текста в единственную переменную <code>myStr</code> используя escape-последовательности. <blockquote> Первая линия <br> \Вторая линия <br> ThirdLine </blockquote> Для правильной вставки специальных символов вам необходимо использовать escape-последовательности. Вам также нужно будет следить за интервалом, как он выглядит выше, без пробелов между escape-последовательностями или словами. Вот текст с выведенными escape-последовательностями. <q>FirstLine <code>newline</code> <code>tab</code> <code>backslash</code> второй</q> линии <q><code>newline</code> ThirdLine</q>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> should not contain any spaces
    testString: assert(!/ /.test(myStr));
  - text: <code>myStr</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)
    testString: assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr));
  - text: <code>FirstLine</code> should be followed by the newline character <code>\n</code>
    testString: assert(/FirstLine\n/.test(myStr));
  - text: <code>myStr</code> should contain a tab character <code>\t</code> which follows a newline character
    testString: assert(/\n\t/.test(myStr));
  - text: <code>SecondLine</code> should be preceded by the backslash character <code>\</code>
    testString: assert(/\\SecondLine/.test(myStr));
  - text: There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>
    testString: assert(/SecondLine\nThirdLine/.test(myStr));
  - text: <code>myStr</code> should only contain characters shown in the instructions
    testString: assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr; // Change this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

</section>
