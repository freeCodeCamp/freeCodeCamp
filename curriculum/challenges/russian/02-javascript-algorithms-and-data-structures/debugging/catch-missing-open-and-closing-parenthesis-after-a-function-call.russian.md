---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
forumTopicId: 301185
localeTitle: Поймать не открывать и закрывать скобки после вызова функции
---

## Description
<section id='description'>
Когда функция или метод не принимает никаких аргументов, вы можете забыть включить (пустые) открывающие и закрывающие круглые скобки при вызове. Часто время вызова функции сохраняется в переменной для другого использования в вашем коде. Эта ошибка может быть обнаружена путем записи значений переменных (или их типов) в консоль и просмотра того, что для нее задана ссылка на функцию, а не ожидаемое значение, возвращаемое функцией. Переменные в следующем примере отличаются: <blockquote> function myFunction () { <br> возвращение «Ты качаешь!»; <br> } <br> пусть varOne = myFunction; // установить равную функцию <br> пусть varTwo = myFunction (); // установите равную строку «Ты качаешься!» </blockquote>
</section>

## Instructions
<section id='instructions'>
Исправьте код, чтобы <code>result</code> переменной был установлен на значение, возвращаемое из вызова функции <code>getNine</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the variable <code>result</code> so it is set to the number that the function <code>getNine</code> returns.
    testString: assert(result == 9);
  - text: Your code should call the <code>getNine</code> function.
    testString: assert(code.match(/getNine\(\)/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```

</section>
