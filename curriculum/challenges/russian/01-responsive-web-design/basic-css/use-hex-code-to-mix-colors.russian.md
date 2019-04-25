---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: Используйте шестнадцатеричный код для смешивания цветов
---

## Description
<section id="description"> Для представления цвета шестнадцатеричные коды используют 6 шестнадцатеричных цифр, по две для красного (R), зеленого (G) и синего (B) компонентов. Для этих трех чистых цветов (красный, зеленый и синий) мы можем варьировать количество каждого из них, чтобы создать более 16 миллионов других цветов! Например, оранжевый чистый красный, смешанный с каким-то зеленым, и не синий. В шестнадцатеричном коде это означает, что это <code>#FFA500</code> . Цифра <code>0</code> является наименьшим числом в шестнадцатеричном коде и представляет полное отсутствие цвета. Цифра <code>F</code> является наивысшим числом в шестнадцатеричном коде и представляет максимально возможную яркость. </section>

## Instructions
<section id="instructions"> Замените цветные слова в нашем элементе <code>style</code> на их правильные шестнадцатеричные коды. <table class="table table-striped"><tbody><tr><th> цвет </th><th> Шестнадцатеричный код </th></tr><tr><td> Dodger Blue </td><td> <code>#1E90FF</code> </td> </tr><tr><td> зеленый </td><td> <code>#00FF00</code> </td> </tr><tr><td> оранжевый </td><td> <code>#FFA500</code> </td> </tr><tr><td> красный </td><td> <code>#FF0000</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Дайте вашему текстовому <code>h1</code> элементу  <code>I am red!</code> <code>color</code> красный.'
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: Используйте <code>hex code</code> для красного цвета вместо слова <code>red</code> .
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color red instead of the word <code>red</code>.");'
  - text: 'Дайте вашему текстовому <code>h1</code>  элементу <code>I am green!</code> <code>color</code> зеленый.'
    testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
  - text: Используйте <code>hex code</code> для зеленого цвета вместо слова <code>green</code> .
    testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color green instead of the word <code>green</code>.");'
  - text: 'Дайте вашему текстовому <code>h1</code> элементу <code>I am dodger blue!</code> <code>color</code> утка синий.'
    testString: 'assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)", "Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.");'
  - text: Используйте <code>hex code</code> для синтаксиса цвета вместо слова <code>dodgerblue</code> .
    testString: 'assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.");'
  - text: 'Дайте вашему элементу <code>h1</code> текст, который <code>I am orange!</code> <code>color</code> оранжевый.'
    testString: 'assert($(".orange-text").css("color") === "rgb(255, 165, 0)", "Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.");'
  - text: Используйте <code>hex code</code> для оранжевого цвета вместо слова « <code>orange</code> .
    testString: 'assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
