---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: ''
localeTitle: Стиль элемента тела HTML
---

## Description
<section id="description"> Теперь давайте начнем свежими и поговорим о наследовании CSS. На каждой странице HTML есть элемент <code>body</code> . </section>

## Instructions
<section id="instructions"> Мы можем доказать, что элемент <code>body</code> существует здесь, задавая ему черный <code>background-color</code> . Мы можем сделать это, добавив следующее к нашему <code>style</code> : <blockquote> body { <br> background-color: black; <br> } </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Дайте вашему <code>body</code> элемент <code>background-color</code> черного цвета.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the <code>background-color</code> of black.");'
  - text: 'Убедитесь, что правило CSS правильно отформатировано как с открывающимися, так и закрывающимися фигурными скобками.'
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule is properly formatted with both opening and closing curly brackets.");'
  - text: 'Убедитесь, что правило CSS заканчивается точкой с запятой.'
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule ends with a semi-colon.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
