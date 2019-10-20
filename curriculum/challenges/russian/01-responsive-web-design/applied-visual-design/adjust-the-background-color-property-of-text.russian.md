---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: https://scrimba.com/c/cEDqwA6
forumTopicId: 301032
localeTitle: Отрегулируйте фоновый цвет Свойство текста
---

## Description
<section id='description'>
Вместо исправления общего фона или цвета текста, для читаемости переднего плана вы можете добавить <code>background-color</code> к элементу, содержащему текст, который вы хотите подчеркнуть. Эта проблема использует <code>rgba()</code> вместо <code>hex</code> кодов или нормальный <code>rgb()</code> . <blockquote> rgba акроним расшифровывается как: <br> r = красный <br> g = зеленый <br> b = синий <br> a = альфа / уровень непрозрачности </blockquote> Значения RGB могут находиться в диапазоне от 0 до 255. Значение альфа может варьироваться от 1, полностью непрозрачного или сплошного цвета, до 0, что является полностью прозрачным или невидимым. <code>rgba()</code> отлично подходит для использования в этом случае, так как он позволяет вам регулировать непрозрачность. Это означает, что вам не нужно полностью блокировать фон. Для этой задачи вы будете использовать <code>background-color: rgba(45, 45, 45, 0.1)</code> . Он производит темно-серый цвет, который почти прозрачен, учитывая низкое значение непрозрачности 0,1.
</section>

## Instructions
<section id='instructions'>
Чтобы текст сильнее выделялся, отрегулируйте <code>background-color</code> элемента <code>h4</code> на заданное значение <code>rgba()</code> . Также для <code>h4</code> удалите свойство <code>height</code> и добавьте <code>padding</code> 10px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>background-color</code> property to the <code>h4</code> element set to <code>rgba(45, 45, 45, 0.1)</code>.
    testString: assert(code.match(/(background-color|background):\s*?rgba\(\s*?45\s*?,\s*?45\s*?,\s*?45\s*?,\s*?0?\.1\s*?\);/gi));
  - text: Your code should add a <code>padding</code> property to the <code>h4</code> element and set it to 10 pixels.
    testString: assert($('h4').css('padding-top') == '10px' && $('h4').css('padding-right') == '10px' && $('h4').css('padding-bottom') == '10px' && $('h4').css('padding-left') == '10px');
  - text: The <code>height</code> property on the <code>h4</code> element should be removed.
    testString: assert(!($('h4').css('height') == '25px'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>
