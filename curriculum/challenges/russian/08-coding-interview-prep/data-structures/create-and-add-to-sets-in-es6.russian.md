---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
videoUrl: ''
localeTitle: Создание и добавление к наборам в ES6
---

## Description
<section id="description"> Теперь, когда вы работали с ES5, вы собираетесь выполнить что-то подобное в ES6. Это будет значительно проще. ES6 содержит встроенную структуру данных. <code>Set</code> операций, которые вы написали вручную, теперь включены для вас. Давайте посмотрим: Чтобы создать новый пустой набор: <code>var set = new Set();</code> Вы можете создать набор со значением: <code>var set = new Set(1);</code> Вы можете создать набор с массивом: <code>var set = new Set([1, 2, 3]);</code> Когда вы создали набор, вы можете добавить нужные значения с помощью метода <code>add</code> : <blockquote> var set = new Set ([1, 2, 3]); <br> set.add ([4, 5, 6]); </blockquote> Напомним, что набор представляет собой структуру данных, которая не может содержать повторяющиеся значения: <blockquote> var set = new Set ([1, 2, 3, 1, 2, 3]); <br> // set содержит только [1, 2, 3] </blockquote></section>

## Instructions
<section id="instructions"> Для этого упражнения верните набор со следующими значениями: <code>1, 2, 3, &#39;Taco&#39;, &#39;Cat&#39;, &#39;Awesome&#39;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш <code>Set</code> должен содержать только значения <code>1, 2, 3, Taco, Cat, Awesome</code> .'
    testString: 'assert((function(){var test = checkSet(); return (test.size == 6) && test.has(1) && test.has(2) && test.has(3) && test.has("Taco") && test.has("Cat") && test.has("Awesome");})(), "Your <code>Set</code> should only contain the values <code>1, 2, 3, Taco, Cat, Awesome</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line

  // change code above this line
  console.log(set);
  return set;
}

checkSet();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
