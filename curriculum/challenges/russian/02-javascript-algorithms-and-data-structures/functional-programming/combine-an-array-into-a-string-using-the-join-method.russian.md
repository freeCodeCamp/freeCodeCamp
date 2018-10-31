---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
videoUrl: ''
localeTitle: Объединение массива в строку Использование метода объединения
---

## Description
<section id="description"> Метод <code>join</code> используется для объединения элементов массива вместе для создания строки. Он принимает аргумент для разделителя, который используется для разделения элементов массива в строке. Вот пример: <blockquote> var arr = [&quot;Hello&quot;, &quot;World&quot;]; <br> var str = arr.join (&quot;&quot;); <br> // Устанавливает str для «Hello World» </blockquote></section>

## Instructions
<section id="instructions"> Используйте метод <code>join</code> (среди других) внутри функции <code>sentensify</code> чтобы сделать предложение из слов в строке <code>str</code> . Функция должна возвращать строку. Например, «I-like-Star-Wars» будет преобразован в «Мне нравятся« Звездные войны ». Для этой задачи не используйте метод <code>replace</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>join</code> .
    testString: 'assert(code.match(/\.join/g), "Your code should use the <code>join</code> method.");'
  - text: Ваш код не должен использовать метод <code>replace</code> .
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> должен возвращать строку.
    testString: 'assert(typeof sentensify("May-the-force-be-with-you") === "string", "<code>sentensify("May-the-force-be-with-you")</code> should return a string.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> должна вернуться <code>&quot;May the force be with you&quot;</code> .
    testString: 'assert(sentensify("May-the-force-be-with-you") === "May the force be with you", "<code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.");'
  - text: <code>sentensify(&quot;The.force.is.strong.with.this.one&quot;)</code> должен вернуться <code>&quot;The force is strong with this one&quot;</code> .
    testString: 'assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one", "<code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.");'
  - text: '<code>sentensify(&quot;There,has,been,an,awakening&quot;)</code> должен вернуться <code>&quot;There has been an awakening&quot;</code> .'
    testString: 'assert(sentensify("There,has,been,an,awakening") === "There has been an awakening", "<code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.");'

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
// solution required
```
</section>
