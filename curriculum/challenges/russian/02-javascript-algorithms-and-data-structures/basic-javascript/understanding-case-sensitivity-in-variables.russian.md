---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: https://scrimba.com/c/cd6GDcD
forumTopicId: 18334
localeTitle: Понимание чувствительности к регистру в переменных
---

## Description
<section id='description'>
В JavaScript все переменные и имена функций чувствительны к регистру. Это означает, что капитализация имеет значение. <code>MYVAR</code> - это не то же самое, что <code>MyVar</code> и <code>myvar</code> . Возможно иметь несколько разных переменных с одним и тем же именем, но с другим корпусом. Настоятельно рекомендуется, чтобы для ясности вы <em>не</em> использовали эту функцию языка. <h4> Лучшая практика </h4> Введите имена переменных в JavaScript в <dfn>camelCase</dfn> . В <dfn>camelCase</dfn> имена переменных с несколькими словами имеют первое слово в нижнем регистре, а первая буква каждого последующего слова заглавная. <strong>Примеры:</strong> <blockquote> var someVariable; <br> var anotherVariableName; <br> var thisVariableNameIsSoLong; </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените существующие объявления и задания, чтобы их имена использовали <dfn>camelCase</dfn> . <br> Не создавайте никаких новых переменных.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code> is defined and has a value of <code>10</code>
    testString: assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
  - text: <code>properCamelCase</code> is defined and has a value of <code>"A String"</code>
    testString: assert(typeof properCamelCase !== 'undefined' && properCamelCase === "A String");
  - text: <code>titleCaseOver</code> is defined and has a value of <code>9000</code>
    testString: assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
  - text: <code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.
    testString: assert(code.match(/studlyCapVar/g).length === 2);
  - text: <code>properCamelCase</code> should use camelCase in both declaration and assignment sections.
    testString: assert(code.match(/properCamelCase/g).length === 2);
  - text: <code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.
    testString: assert(code.match(/titleCaseOver/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

```

</div>

</section>

## Solution
<section id='solution'>

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

</section>
