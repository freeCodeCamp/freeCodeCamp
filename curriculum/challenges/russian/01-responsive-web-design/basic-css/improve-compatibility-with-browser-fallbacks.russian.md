---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ''
forumTopicId: 301087
localeTitle: Улучшение совместимости с отказами браузера
---

## Description
<section id='description'>
При работе с CSS вы, вероятно, столкнетесь с проблемами совместимости браузеров в какой-то момент. Вот почему важно обеспечить резервные копии браузера, чтобы избежать потенциальных проблем. Когда ваш браузер анализирует CSS веб-страницы, он игнорирует любые свойства, которые он не распознает или не поддерживает. Например, если вы используете переменную CSS для назначения цвета фона на сайте, Internet Explorer игнорирует цвет фона, поскольку он не поддерживает переменные CSS. В этом случае браузер будет использовать любое значение, которое он имеет для этого свойства. Если он не может найти какое-либо другое значение, установленное для этого свойства, оно вернется к значению по умолчанию, которое обычно не является идеальным. Это означает, что если вы хотите предоставить резервную копию браузера, это так же просто, как предоставить еще одно широко поддерживаемое значение непосредственно перед вашей декларацией. Таким образом, у более старого браузера есть что-то, на что можно положиться, в то время как более новый браузер будет просто интерпретировать любое объявление, которое позднее появится в каскаде.
</section>

## Instructions
<section id='instructions'>
Похоже, что переменная используется для установки цвета фона класса <code>.red-box</code> . Давайте улучшим совместимость с браузером, добавив еще одно <code>background</code> объявление прямо перед существующим объявлением и установив его значение в красный цвет.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to red immediately before the existing <code>background</code> declaration.
    testString: assert(code.replace(/\s/g, "").match(/\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

</section>
