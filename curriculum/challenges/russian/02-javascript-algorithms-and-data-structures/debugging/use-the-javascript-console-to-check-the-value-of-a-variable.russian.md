---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
challengeType: 1
forumTopicId: 18372
localeTitle: Используйте консоль JavaScript для проверки значения переменной
---

## Description
<section id='description'>
У Chrome и Firefox есть отличные консоли JavaScript, также известные как DevTools, для отладки вашего JavaScript. Инструменты разработчика можно найти в меню Chrome или в веб-консоли в меню FireFox. Если вы используете другой браузер или мобильный телефон, настоятельно рекомендуем перейти на настольный Firefox или Chrome. Метод <code>console.log()</code> , который «печатает» вывод того, что находится в его круглых скобках на консоли, скорее всего, станет наиболее полезным инструментом отладки. Размещение его в стратегических точках вашего кода может показывать промежуточные значения переменных. Хорошая практика - иметь представление о том, что должен делать вывод, прежде чем смотреть на то, что это такое. Наличие контрольных точек для просмотра состояния ваших вычислений в вашем коде поможет сузить проблему. Вот пример печати «Hello world!». на консоль: <code>console.log(&#39;Hello world!&#39;);</code>
</section>

## Instructions
<section id='instructions'>
Use the <code>console.log()</code> method to print the value of the variable <code>a</code> where noted in the code.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>console.log()</code> to check the value of the variable <code>a</code>.
    testString: assert(code.match(/console\.log\(a\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 5;
let b = 1;
a++;
// Add your code below this line


let sumAB = a + b;
console.log(sumAB);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var a = 5; console.log(a);
```

</section>
