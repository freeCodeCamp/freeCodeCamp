---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: https://scrimba.com/c/ce2p7cL
forumTopicId: 301177
localeTitle: Понимание неопределенного значения, возвращаемого функцией
---

## Description
<section id='description'>
Функция может включать оператор <code>return</code> но это не обязательно. В случае, если функция не имеет оператора <code>return</code> , когда вы вызываете его, функция обрабатывает внутренний код, но возвращаемое значение не <code>undefined</code> . <strong>пример</strong> <blockquote> var sum = 0; <br> function addSum (num) { <br> sum = sum + num; <br> } <br> var receivedValue = addSum (3); // сумма будет изменена, но возвращаемое значение не определено </blockquote> <code>addSum</code> - это функция без оператора <code>return</code> . Функция изменит глобальную переменную <code>sum</code> но возвращаемое значение функции не <code>undefined</code>
</section>

## Instructions
<section id='instructions'>
Создайте функцию <code>addFive</code> без каких-либо аргументов. Эта функция добавляет 5 к переменной <code>sum</code> , но ее возвращаемое значение не <code>undefined</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code> should be a function
    testString: assert(typeof addFive === 'function');
  - text: <code>sum</code> should be equal to 8
    testString: assert(sum === 8);
  - text: Returned value from <code>addFive</code> should be <code>undefined</code>
    testString: assert(addFive() === undefined);
  - text: Inside of your functions, add 5 to the <code>sum</code> variable
    testString: assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line



// Only change code above this line
var returnedValue = addFive();

```

</div>

### After Tests
<div id='js-teardown'>

```js
var sum = 0;
function addThree() {sum = sum + 3;}
addThree();
addFive();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function addFive() {
 sum = sum + 5;
}
```

</section>
