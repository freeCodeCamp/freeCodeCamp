---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
videoUrl: ''
localeTitle: Разбить строку на массив Используя метод split
---

## Description
<section id="description"> Метод <code>split</code> разбивает строку на массив строк. Он принимает аргумент для разделителя, который может быть символом, используемым для разбиения строки или регулярного выражения. Например, если разделитель является пространством, вы получаете массив слов, и если разделитель является пустой строкой, вы получаете массив каждого символа в строке. Вот два примера, которые разделяют одну строку пробелами, а затем цифрами, используя регулярное выражение: <blockquote> var str = &quot;Hello World&quot;; <br> var bySpace = str.split (&quot;&quot;); <br> // Устанавливает bySpace в [&quot;Hello&quot;, &quot;World&quot;] <br><br> var otherString = &quot;How9are7you2today&quot;; <br> var byDigits = otherString.split (/ \ d /); <br> // Устанавливает byDigits в [&quot;How&quot;, &quot;are&quot;, &quot;you&quot;, &quot;today&quot;] </blockquote> Поскольку строки неизменяемы, метод <code>split</code> облегчает работу с ними. </section>

## Instructions
<section id="instructions"> Используйте метод <code>split</code> внутри функции <code>splitify</code> чтобы разбить <code>str</code> на массив слов. Функция должна возвращать массив. Обратите внимание, что слова не всегда разделяются пробелами, и массив не должен содержать знаков препинания. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>split</code> .
    testString: 'assert(code.match(/\.split/g), "Your code should use the <code>split</code> method.");'
  - text: '<code>splitify(&quot;Hello World,I-am code&quot;)</code> должен возвращать <code>[&quot;Hello&quot;, &quot;World&quot;, &quot;I&quot;, &quot;am&quot;, &quot;code&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), "<code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.");'
  - text: '<code>splitify(&quot;Earth-is-our home&quot;)</code> должна вернуться <code>[&quot;Earth&quot;, &quot;is&quot;, &quot;our&quot;, &quot;home&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), "<code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.");'
  - text: '<code>splitify(&quot;This.is.a-sentence&quot;)</code> должен возвращать <code>[&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]), "<code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.");'

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
// solution required
```
</section>
