---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
forumTopicId: 18305
localeTitle: Разбить строку на массив используя метод split
---

## Description
<section id='description'>
Метод <code>split</code> разбивает строку на массив строк. В качестве аргумента она принимает разделитель, который может быть символом или регулярным выражением и используется для разбиения строки. Например, если разделитель является пробелом, вы получаете массив слов, и если разделитель является пустой строкой, вы получаете массив из символов строки. Вот два примера, которые разбивают одну строку пробелами, а затем цифрами, используя регулярное выражение: <blockquote> var str = &quot;Hello World&quot;; <br> var bySpace = str.split (&quot;&quot;); <br> // Устанавливает bySpace в [&quot;Hello&quot;, &quot;World&quot;] <br><br> var otherString = &quot;How9are7you2today&quot;; <br> var byDigits = otherString.split (/ \ d /); <br> // Устанавливает byDigits в [&quot;How&quot;, &quot;are&quot;, &quot;you&quot;, &quot;today&quot;] </blockquote> Поскольку строки неизменяемы, метод <code>split</code> облегчает работу с ними.
</section>

## Instructions
<section id='instructions'>
Используйте метод <code>split</code> внутри функции <code>splitify</code> чтобы разбить <code>str</code> на массив слов. Функция должна возвращать массив. Обратите внимание, что слова не всегда разделяются пробелами, и массив не должен содержать знаков препинания.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>split</code> method.
    testString: assert(code.match(/\.split/g));
  - text: <code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.
    testString: assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]));
  - text: <code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.
    testString: assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]));
  - text: <code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.
    testString: assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitify(str) {
  // Add your code below this line


  // Add your code above this line
}
splitify("Hello World,I-am code");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
```

</section>
