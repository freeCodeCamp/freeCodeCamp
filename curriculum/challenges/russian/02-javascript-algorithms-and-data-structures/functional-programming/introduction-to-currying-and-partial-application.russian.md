---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
videoUrl: ''
localeTitle: Введение в каррирование и частичное применение
---

## Description
undefined

## Instructions
<section id="instructions"> Заполните тело функции <code>add</code> чтобы он использовал currying для добавления параметров <code>x</code> , <code>y</code> и <code>z</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(add(10)(20)(30) === 60, "<code>add(10)(20)(30)</code> should return <code>60</code>.");'
  - text: <code>add(1)(2)(3)</code> должен вернуть <code>6</code> .
    testString: 'assert(add(1)(2)(3) === 6, "<code>add(1)(2)(3)</code> should return <code>6</code>.");'
  - text: <code>add(11)(22)(33)</code> должен вернуться <code>66</code> .
    testString: 'assert(add(11)(22)(33) === 66, "<code>add(11)(22)(33)</code> should return <code>66</code>.");'
  - text: 'Ваш код должен содержать заключительный оператор, который возвращает <code>x + y + z</code> .'
    testString: 'assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g), "Your code should include a final statement that returns <code>x + y + z</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add(x) {
  // Add your code below this line


  // Add your code above this line
}
add(10)(20)(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
