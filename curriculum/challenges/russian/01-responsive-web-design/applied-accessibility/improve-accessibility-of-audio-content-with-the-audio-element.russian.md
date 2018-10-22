---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: ''
localeTitle: Улучшаем доступность аудиоконтента
---

## Description (Описание)
<section id="description"> Согласно стандартам HTML5 элемент <code>audio</code> указывает на наличие звуковой компоненты в разметке. Аудиоконтент также нуждается в описании (текстовой альтернативе), которое делает ваш контент доступным для глухих или слабослышащих людей. Описание можно разместить рядом с текстом или ссылкой. Тег <code>audio</code> поддерживает атрибут <code>controls</code>, который поддерживает воспроизведение по умолчанию в браузере, паузу и другие элементы управления, которыемогут быть задействованы с клавиатуры. Это логический атрибут, следовательно, он не нуждается в указании дополнительного значения, а просто дает возможность настройки. Например: <blockquote> &lt;audio id = &quot;meowClip&quot; элементы управления&gt; <br> &lt;источник src = &quot;audio / meow.mp3&quot; type = &quot;audio / mpeg&quot; /&gt; <br> &lt;источник src = &quot;audio / meow.ogg&quot; type = &quot;audio / ogg&quot; /&gt; <br> &lt;/ Аудио&gt; <br></blockquote> Мультимедийный контент обычно имеет как визуальные, так и звуковые компоненты. Значит вам потребуются подписи к изображениям и расшифровки аудиоконтента, чтобы пользователи с визуальными и/или слуховыми нарушениями могли воспользоваться информацией. Как правило, веб-разработчик не несет ответственность за создание титров к видео или расшифровки звукозаписей, но должен знать как они встраиваются в страницу. </section>

## Instructions (Задание)
<section id="instructions"> Пора отдохнуть от Camper Cat и познакомиться с новым героем Zersiax (@zersiax), который предпочитает пользоваться аудиоинтерфейсом для озвучивания контента на экране. Чтобы услышать, как работает его читалка, добавьте <code>audio</code> элемент после <code>p</code> . Включите атрибут <code>controls</code> . Затем поместите тег <code>source</code> внутри тегов <code>audio</code> с атрибутом <code>src</code>, связанным с ссылкой «https://s3.amazonaws.com/freecodecamp/screen-reader.mp3», и добавьте <code>type</code> атрибут «audio / mpeg». Звуковой ряд может показаться очень быстрым и непонятным, это обычная скорость для пользователей аудиоинтерфейсов для чтения с экрана. </section>

## Tests (Тесты)
<section id='tests'>

```yml
tests:
  - text: В вашем коде должен быть один <code>audio</code> тег.
    testString: 'assert($("audio").length === 1, "Your code should have one <code>audio</code> tag.");'
  - text: 'Убедитесь, что ваш <code>audio</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Make sure your <code>audio</code> element has a closing tag.");'
  - text: <code>audio</code> тег должен иметь атрибут <code>controls</code> .
    testString: 'assert($("audio").attr("controls"), "The <code>audio</code> tag should have the <code>controls</code> attribute.");'
  - text: Ваш код должен иметь один тег <code>source</code> .
    testString: 'assert($("source").length === 1, "Your code should have one <code>source</code> tag.");'
  - text: Ваш тег <code>source</code> должен находиться внутри <code>audio</code> тегов.
    testString: 'assert($("audio").children("source").length === 1, "Your <code>source</code> tag should be inside the <code>audio</code> tags.");'
  - text: Значение атрибута <code>src</code> в теге <code>source</code> должно точно соответствовать ссылке в инструкциях.
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.");'
  - text: Ваш код должен включать атрибут <code>type</code> в тег <code>source</code> со значением audio / mpeg.
    testString: 'assert($("source").attr("type") === "audio/mpeg", "Your code should include a <code>type</code> attribute on the <code>source</code> tag with a value of audio/mpeg.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// здесь должно быть ваше решение
```
</section>
