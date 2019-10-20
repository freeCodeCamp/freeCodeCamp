---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
challengeType: 1
videoUrl: https://scrimba.com/c/cQe39Sq
forumTopicId: 18272
localeTitle: Возврат раннего шаблона для функций
---

## Description
<section id='description'>
Когда оператор <code>return</code> достигнут, выполнение текущей функции прекращается, и управление возвращается в вызывающее местоположение. <strong>пример</strong> <blockquote> function myFun () { <br> console.log ( &quot;Hello&quot;); <br> возвращение «Мир»; <br> console.log ( &quot;Byebye&quot;) <br> } <br> myFun (); </blockquote> Вышеупомянутые выходы «Hello» на консоль возвращают «Мир», но <code>&quot;byebye&quot;</code> никогда не выводится, потому что функция выходит из оператора <code>return</code> .
</section>

## Instructions
<section id='instructions'>
Измените функцию <code>abTest</code> так, чтобы, если <code>a</code> или <code>b</code> меньше <code>0</code> функция немедленно выйдет со значением <code>undefined</code> . <strong>намек</strong> <br> Помните, что <a href="http://www.freecodecamp.org/challenges/understanding-uninitialized-variables" target="_blank"><code>undefined</code> - это ключевое слово</a> , а не строка.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>abTest(2,2)</code> should return a number
    testString: assert(typeof abTest(2,2) === 'number' );
  - text: <code>abTest(2,2)</code> should return <code>8</code>
    testString: assert(abTest(2,2) === 8 );
  - text: <code>abTest(-2,2)</code> should return <code>undefined</code>
    testString: assert(abTest(-2,2) === undefined );
  - text: <code>abTest(2,-2)</code> should return <code>undefined</code>
    testString: assert(abTest(2,-2) === undefined );
  - text: <code>abTest(2,8)</code> should return <code>18</code>
    testString: assert(abTest(2,8) === 18 );
  - text: <code>abTest(3,3)</code> should return <code>12</code>
    testString: assert(abTest(3,3) === 12 );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

</section>
