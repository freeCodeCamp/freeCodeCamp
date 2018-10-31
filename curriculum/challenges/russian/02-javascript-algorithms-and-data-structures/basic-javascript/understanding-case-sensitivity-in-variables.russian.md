---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: ''
localeTitle: Понимание чувствительности к регистру в переменных
---

## Description
<section id="description"> В JavaScript все переменные и имена функций чувствительны к регистру. Это означает, что капитализация имеет значение. <code>MYVAR</code> - это не то же самое, что <code>MyVar</code> и <code>myvar</code> . Возможно иметь несколько разных переменных с одним и тем же именем, но с другим корпусом. Настоятельно рекомендуется, чтобы для ясности вы <em>не</em> использовали эту функцию языка. <h4> Лучшая практика </h4> Введите имена переменных в JavaScript в <dfn>camelCase</dfn> . В <dfn>camelCase</dfn> имена переменных с несколькими словами имеют первое слово в нижнем регистре, а первая буква каждого последующего слова заглавная. <strong>Примеры:</strong> <blockquote> var someVariable; <br> var anotherVariableName; <br> var thisVariableNameIsSoLong; </blockquote></section>

## Instructions
<section id="instructions"> Измените существующие объявления и задания, чтобы их имена использовали <dfn>camelCase</dfn> . <br> Не создавайте никаких новых переменных. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code> определяется и имеет значение <code>10</code>
    testString: 'assert(typeof studlyCapVar !== "undefined" && studlyCapVar === 10, "<code>studlyCapVar</code> is defined and has a value of <code>10</code>");'
  - text: <code>properCamelCase</code> определяется и имеет значение <code>&quot;A String&quot;</code>
    testString: 'assert(typeof properCamelCase !== "undefined" && properCamelCase === "A String", "<code>properCamelCase</code> is defined and has a value of <code>"A String"</code>");'
  - text: <code>titleCaseOver</code> определяется и имеет значение <code>9000</code>
    testString: 'assert(typeof titleCaseOver !== "undefined" && titleCaseOver === 9000, "<code>titleCaseOver</code> is defined and has a value of <code>9000</code>");'
  - text: <code>studlyCapVar</code> должен использовать camelCase в разделах объявления и назначения.
    testString: 'assert(code.match(/studlyCapVar/g).length === 2, "<code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>properCamelCase</code> должен использовать camelCase в разделах объявления и назначения.
    testString: 'assert(code.match(/properCamelCase/g).length === 2, "<code>properCamelCase</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>titleCaseOver</code> должен использовать camelCase в разделах объявления и назначения.
    testString: 'assert(code.match(/titleCaseOver/g).length === 2, "<code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.");'

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
// solution required
```
</section>
