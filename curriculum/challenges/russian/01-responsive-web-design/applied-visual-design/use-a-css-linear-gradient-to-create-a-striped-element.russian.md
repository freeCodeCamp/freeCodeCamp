---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: https://scrimba.com/c/c6bmQh2
forumTopicId: 301072
localeTitle: Используйте линейный градиент CSS для создания полосатого элемента
---

## Description
<section id='description'>
Функция <code>repeating-linear-gradient()</code> очень похожа на <code>linear-gradient()</code> с большой разницей, что повторяет заданный шаблон градиента. <code>repeating-linear-gradient()</code> принимает множество значений, но для простоты вы будете работать с значениями угла и значениями остановки цвета в этой задаче. Значением угла является направление градиента. Остановки цвета - это значения ширины, которые указывают, где происходит переход, и даются с процентом или количеством пикселей. В примере, показанном в редакторе кода, градиент начинается с <code>yellow</code> цвета в 0 пикселей, который смешивается со вторым <code>blue</code> цветом в 40 пикселей от начала. Так как следующая остановка цвета также находится на 40 пикселях, градиент сразу же меняется на третий <code>green</code> цвет, который сам вписывается в четвертое значение цвета <code>red</code> которое составляет 80 пикселей от начала градиента. В этом примере это помогает думать о цветовых остановках как о парах, где смешиваются два разных цвета. <code>0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px</code> Если каждые два значения останова цвета имеют один и тот же цвет, смешение не заметно, потому что оно находится между одним и тем же цветом, за которым следует жесткий переход к следующему цвету, так что вы попадаете в полоску.
</section>

## Instructions
<section id='instructions'>
Сделайте полосы, изменив <code>repeating-linear-gradient()</code> чтобы использовать градиентный угол <code>45deg</code> , затем установите, чтобы первые два цвета остановились на <code>yellow</code> , и, наконец, второй цвет прекратился до <code>black</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The angle of the <code>repeating-linear-gradient()</code> should be 45deg.
    testString: assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
  - text: The angle of the <code>repeating-linear-gradient()</code> should no longer be 90deg
    testString: assert(!code.match(/90deg/gi));
  - text: The color stop at 0 pixels should be <code>yellow</code>.
    testString: assert(code.match(/yellow\s+?0(px)?/gi));
  - text: One color stop at 40 pixels should be <code>yellow</code>.
    testString: assert(code.match(/yellow\s+?40px/gi));
  - text: The second color stop at 40 pixels should be <code>black</code>.
    testString: assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
  - text: The last color stop at 80 pixels should be <code>black</code>.
    testString: assert(code.match(/black\s+?80px/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```

</section>
