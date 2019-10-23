---
id: 599a789b454f2bbd91a3ff4d
title: Practice comparing different values
challengeType: 1
videoUrl: https://scrimba.com/c/cm8PqCa
forumTopicId: 301174
localeTitle: Практика сравнения разных значений
---

## Description
<section id='description'>
В двух последних проблемах мы узнали об операторе равенства ( <code>==</code> ) и строгого оператора равенства ( <code>===</code> ). Давайте сделаем быстрый обзор и практикуем использование этих операторов еще немного. Если сравниваемые значения не относятся к одному типу, оператор равенства выполняет преобразование типа, а затем оценивает значения. Тем не менее, строгий оператор равенства будет сравнивать как тип данных, так и значение as-is, без преобразования одного типа в другой. <strong>Примеры</strong> <blockquote> 3 == &#39;3&#39; // возвращает true, потому что JavaScript выполняет преобразование типов из строки в число <br> 3 === &#39;3&#39; // возвращает false, потому что типы разные, и преобразование типов не выполняется </blockquote> <strong>Заметка</strong> <br> В JavaScript вы можете определить тип переменной или значение с помощью оператора <code>typeof</code> следующим образом: <blockquote> typeof 3 // возвращает &#39;number&#39; <br> typeof &#39;3&#39; // возвращает &#39;string&#39; </blockquote>
</section>

## Instructions
<section id='instructions'>
Функция <code>compareEquality</code> в редакторе сравнивает два значения с помощью <code>equality operator</code> . Измените функцию так, чтобы она возвращала «Равно» только тогда, когда значения строго равны.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>compareEquality(10, "10")</code> should return "Not Equal"
    testString: assert(compareEquality(10, "10") === "Not Equal");
  - text: <code>compareEquality("20", 20)</code> should return "Not Equal"
    testString: assert(compareEquality("20", 20) === "Not Equal");
  - text: You should use the <code>===</code> operator
    testString: assert(code.match(/===/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
