---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
videoUrl: https://scrimba.com/p/pzrPu4/crzN7T8
forumTopicId: 301141
localeTitle: Сделать отзывчивость типографии
---

## Description
<section id='description'>
Вместо использования текста <code>em</code> или <code>px</code> для размера вы можете использовать единицы просмотра для гибкой типографии. Единицы просмотра, такие как проценты, являются относительными единицами, но они основаны на разных позициях. Единицы Viewport относятся к размеру видового экрана (ширина или высота) устройства, а проценты относятся к размеру элемента родительского контейнера. Четыре различных видовых экрана: <ul><li> <code>vw: 10vw</code> будет составлять 10% от ширины <code>vw: 10vw</code> просмотра. </li><li> <code>vh: 3vh</code> будет 3% высоты просмотра. </li><li> <code>vmin: 70vmin</code> будет на 70% меньше размера <code>vmin: 70vmin</code> просмотра (высота и ширина). </li><li> <code>vmax: 100vmax</code> будет на 100% больше размера <code>vmax: 100vmax</code> просмотра (высота и ширина). </li></ul>
</section>

## Instructions
<section id='instructions'>
Установите <code>width</code> тега <code>h2</code> на 80% ширины окна просмотра и <code>width</code> абзаца как на 75% меньшего размера окна просмотра.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h2</code> tag should have a <code>width</code> of 80vw.
    testString: assert(code.match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g));
  - text: Your <code>p</code> tag should have a <code>width</code> of 75vmin.
    testString: assert(code.match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

</section>
