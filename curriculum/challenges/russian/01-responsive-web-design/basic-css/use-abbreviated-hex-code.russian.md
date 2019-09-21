---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: https://scrimba.com/c/cRkpKAm
forumTopicId: 18338
localeTitle: Используйте сокращенный шестнадцатеричный код
---

## Description
<section id='description'>
Многие люди чувствуют себя в замешательстве, когда им предоставляется возможность использовать более 16 миллионов цветов. И очень сложно запомнить шестнадцатеричный код. К счастью, вы можете сократить его. Например, шестнадцатеричный код красного цвета <code>#FF0000</code> можно сократить до <code>#F00</code> . Эта сокращенная форма дает одну цифру для красного, одну цифру для зеленого и одну цифру для синего. Это уменьшает общее количество возможных цветов примерно до 4000. Но браузеры будут интерпретировать <code>#FF0000</code> и <code>#F00</code> как один и тот же цвет.
</section>

## Instructions
<section id='instructions'>
Вперед, попробуйте использовать сокращенные шестнадцатеричные коды, чтобы покрасить правильные элементы. <table class="table table-striped"><tbody><tr><th> цвет </th><th> Короткие шестнадцатеричные коды </th></tr><tr><td> Cyan </td><td> <code>#0FF</code> </td> </tr><tr><td> зеленый </td><td> <code>#0F0</code> </td> </tr><tr><td> красный </td><td> <code>#F00</code> </td> </tr><tr><td> фуксия </td><td> <code>#F0F</code> </td> </tr></tbody></table>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.
    testString: assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
  - text: Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.
    testString: assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi));
  - text: Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.
    testString: assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
  - text: Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.
    testString: assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi));
  - text: Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.
    testString: assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
  - text: Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.
    testString: assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi));
  - text: Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.
    testString: assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
  - text: Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.
    testString: assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

</section>
