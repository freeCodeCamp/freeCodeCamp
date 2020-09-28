---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: https://scrimba.com/c/c2MDNUR
forumTopicId: 301061
localeTitle: Блокировка элемента в окне браузера с фиксированным позиционированием
---

## Description
<section id='description'>
Следующая схема компоновки, которую предлагает CSS, - это <code>fixed</code> позиция, которая является типом абсолютного позиционирования, который блокирует элемент относительно окна браузера. Подобно абсолютному позиционированию, он используется со свойствами смещения CSS, а также удаляет элемент из обычного потока документа. Другие предметы больше не «реализуют», где они позиционируются, что может потребовать некоторых корректировок компоновки в другом месте. Одно ключевое различие между <code>fixed</code> и <code>absolute</code> позициями состоит в том, что элемент с фиксированной позицией не будет перемещаться, когда пользователь прокручивается.
</section>

## Instructions
<section id='instructions'>
Навигационная панель в коде помечена идентификатором <code>navbar</code> . Измените его <code>position</code> на <code>fixed</code> и смещайте его на 0 пикселей <code>top</code> и на 0 пикселей <code>left</code> . Обратите внимание на (отсутствие) воздействия на позицию <code>h1</code> , оно не было сдвинуто вниз, чтобы разместить панель навигации, и ее необходимо будет отрегулировать отдельно.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#navbar</code> element should have a <code>position</code> set to <code>fixed</code>.
    testString: assert($('#navbar').css('position') == 'fixed');
  - text: Your code should use the <code>top</code> CSS offset of 0 pixels on the <code>#navbar</code> element.
    testString: assert($('#navbar').css('top') == '0px');
  - text: Your code should use the <code>left</code> CSS offset of 0 pixels on the <code>#navbar</code> element.
    testString: assert($('#navbar').css('left') == '0px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

</section>
