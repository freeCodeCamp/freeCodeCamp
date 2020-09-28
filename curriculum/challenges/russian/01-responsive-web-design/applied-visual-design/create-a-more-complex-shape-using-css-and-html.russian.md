---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: https://scrimba.com/c/cPpz4fr
forumTopicId: 301050
localeTitle: Создание более сложной формы с использованием CSS и HTML
---

## Description
<section id='description'>
Одна из самых популярных фигур в мире - это форма сердца, и в этой задаче вы создадите один, используя чистый CSS. Но сначала вам нужно понять псевдо-элементы <code>::before</code> и <code>::after</code> . Эти псевдоэлементы используются для добавления чего-либо до или после выбранного элемента. В следующем примере под <code>::before</code> a <code>::before</code> используется для добавления прямоугольника к элементу с <code>heart</code> класса: <blockquote> .heart :: before { <br> content: &quot;&quot;; <br> background-color: желтый; <br> пограничный радиус: 25%; <br> позиция: абсолютная; <br> высота: 50 пикселей; <br> ширина: 70 пикселей; <br> top: -50px; <br> left: 5px; <br> } </blockquote> Чтобы функции <code>::before</code> и <code>::after</code> псевдоэлементов функционировали должным образом, они должны иметь определенное свойство <code>content</code> . Это свойство обычно используется для добавления к выбранному элементу таких вещей, как фотография или текст. Когда для создания фигур используются элементы <code>::before</code> и <code>::after</code> псевдоэлементов, свойство <code>content</code> по-прежнему требуется, но оно установлено в пустую строку. В приведенном выше примере элемент с классом <code>heart</code> имеет <code>::before</code> псевдоэлементом, который создает желтый прямоугольник с <code>height</code> и <code>width</code> 50 пикселей и 70 пикселей соответственно. Этот прямоугольник имеет круглые углы из-за его 25-процентного пограничного радиуса и расположен абсолютно в 5px <code>left</code> и 50px над <code>top</code> частью элемента.
</section>

## Instructions
<section id='instructions'>
Преобразуйте элемент на экране в сердце. В <code>heart::after</code> селектора измените <code>background-color</code> на розовый и <code>border-radius</code> до 50%. Затем задайте элемент с <code>heart</code> класса (просто <code>heart</code> ) и заполните свойство <code>transform</code> . Используйте функцию <code>rotate()</code> с -45 градусов. ( <code>rotate()</code> работает так же, как <code>skewX()</code> и <code>skewY()</code> do). Наконец, в <code>heart::before</code> селектором установите его свойство <code>content</code> в пустую строку.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>background-color</code> property of the <code>heart::after</code> selector should be pink.
    testString: assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi));
  - text: The <code>border-radius</code> of the <code>heart::after</code> selector should be 50%.
    testString: assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
  - text: The <code>transform</code> property for the <code>heart</code> class should use a <code>rotate()</code> function set to -45 degrees.
    testString: assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
  - text: The <code>content</code> of the <code>heart::before</code> selector should be an empty string.
    testString: assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

</section>
