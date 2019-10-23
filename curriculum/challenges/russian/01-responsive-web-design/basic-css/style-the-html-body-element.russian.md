---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: https://scrimba.com/c/cB77PHW
forumTopicId: 18313
localeTitle: Стиль HTML-элемента body
---

## Description
<section id='description'>
Теперь давайте поговорим о наследовании в CSS. На каждой странице HTML есть элемент <code>body</code> .
</section>

## Instructions
<section id='instructions'>
Мы можем доказать, что элемент <code>body</code> присутствует здесь, задавая ему черный <code>background-color</code> . Мы можем сделать это, добавив следующее к нашему <code>style</code> : <blockquote> body { <br> background-color: black; <br> } </blockquote>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>body</code> element the <code>background-color</code> of black.
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)");
  - text: Make sure your CSS rule is properly formatted with both opening and closing curly brackets.
    testString: assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));
  - text: Make sure your CSS rule ends with a semi-colon.
    testString: assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));

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

```html
<style>
body {
  background-color: black;
}
</style>
```

</section>
