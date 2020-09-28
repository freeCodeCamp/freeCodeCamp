---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: https://scrimba.com/c/cy87mf3
forumTopicId: 18348
localeTitle: Использовать условную логику с утверждениями If
---

## Description
<section id='description'>
<code>If</code> утверждения используются для принятия решений в коде. Ключевое слово <code>if</code> указывает JavaScript для выполнения кода в фигурных скобках при определенных условиях, определенных в круглых скобках. Эти условия известны как <code>Boolean</code> условия, и они могут быть <code>true</code> или <code>false</code> . Когда условие оценивается как <code>true</code> , программа выполняет оператор внутри фигурных скобок. Когда логическое условие оценивается как <code>false</code> , оператор внутри фигурных скобок не будет выполняться. <strong>ПСЕВДОКОД</strong> <blockquote> если ( <i>условие истинно</i> ) { <br> <i>выполняется инструкция</i> <br> } </blockquote> <strong>пример</strong> <blockquote> функциональный тест (myCondition) { <br> if (myCondition) { <br> возвращение «Это правда»; <br> } <br> return «Это было ложно»; <br> } <br> тест (истина); // возвращает «Это правда» <br> тест (ложь); // возвращает «Было ложно» </blockquote> Когда <code>test</code> вызывается со значением <code>true</code> , то <code>if</code> оператор оценивает <code>myCondition</code> , чтобы увидеть , если это <code>true</code> или нет. Так как это <code>true</code> , функция возвращает <code>&quot;It was true&quot;</code> . Когда мы вызываем <code>test</code> со значением <code>false</code> , <code>myCondition</code> <em>не</em> является <code>true</code> а оператор в фигурных скобках не выполняется, а функция возвращает <code>&quot;It was false&quot;</code> .
</section>

## Instructions
<section id='instructions'>
Создайте оператор <code>if</code> внутри функции, чтобы вернуть <code>&quot;Yes, that was true&quot;</code> если параметр <code>wasThatTrue</code> является <code>true</code> и возвращает <code>&quot;No, that was false&quot;</code> противном случае.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code> should be a function
    testString: assert(typeof trueOrFalse === "function");
  - text: <code>trueOrFalse(true)</code> should return a string
    testString: assert(typeof trueOrFalse(true) === "string");
  - text: <code>trueOrFalse(false)</code> should return a string
    testString: assert(typeof trueOrFalse(false) === "string");
  - text: <code>trueOrFalse(true)</code> should return "Yes, that was true"
    testString: assert(trueOrFalse(true) === "Yes, that was true");
  - text: <code>trueOrFalse(false)</code> should return "No, that was false"
    testString: assert(trueOrFalse(false) === "No, that was false");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```

</section>
