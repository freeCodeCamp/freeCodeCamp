---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
forumTopicId: 18221
localeTitle: Объединение массива в строку Использование метода объединения
---

## Description
<section id='description'>
Метод <code>join</code> используется для объединения элементов массива вместе для создания строки. Он принимает аргумент для разделителя, который используется для разделения элементов массива в строке. Вот пример: <blockquote> var arr = [&quot;Hello&quot;, &quot;World&quot;]; <br> var str = arr.join (&quot;&quot;); <br> // Устанавливает str для «Hello World» </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте метод <code>join</code> (среди других) внутри функции <code>sentensify</code> чтобы сделать предложение из слов в строке <code>str</code> . Функция должна возвращать строку. Например, «I-like-Star-Wars» будет преобразован в «Мне нравятся« Звездные войны ». Для этой задачи не используйте метод <code>replace</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>join</code> method.
    testString: assert(code.match(/\.join/g));
  - text: Your code should not use the <code>replace</code> method.
    testString: assert(!code.match(/\.replace/g));
  - text: <code>sentensify("May-the-force-be-with-you")</code> should return a string.
    testString: assert(typeof sentensify("May-the-force-be-with-you") === "string");
  - text: <code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.
    testString: assert(sentensify("May-the-force-be-with-you") === "May the force be with you");
  - text: <code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.
    testString: assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one");
  - text: <code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.
    testString: assert(sentensify("There,has,been,an,awakening") === "There has been an awakening");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sentensify(str) {
  // Add your code below this line


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(' ');
  // Add your code above this line
}
```

</section>
