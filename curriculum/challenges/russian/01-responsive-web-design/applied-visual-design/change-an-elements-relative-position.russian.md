---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: https://scrimba.com/c/czVmMtZ
forumTopicId: 301044
localeTitle: Изменение относительного положения элемента
---

## Description
<section id='description'>
CSS обрабатывает каждый элемент HTML как свой собственный ящик, который обычно называют <code>CSS Box Model</code> . Элементы уровня блока автоматически начинаются с новой строки (считайте заголовки, абзацы и div), в то время как встроенные элементы располагаются внутри окружающего содержимого (например, изображения или промежутки). Стандартная компоновка элементов таким образом называется <code>normal flow</code> документа, но CSS предлагает свойство position, чтобы переопределить его. Когда позиция элемента установлена ​​на <code>relative</code> , она позволяет указать, как CSS должен перемещать ее <i>относительно</i> текущей позиции в обычном потоке страницы. Он соединяется со свойствами смещения CSS <code>left</code> или <code>right</code> , а <code>top</code> или <code>bottom</code> . Они говорят , сколько пикселей, проценты, или Эмс , чтобы переместить элемент <i>от</i> места , где она обычно располагается. В следующем примере перемещение абзаца 10 пикселей снизу: <blockquote> п { <br> позиция: относительная; <br> снизу: 10 пикселей; <br> } </blockquote> Изменение положения элемента относительно относительного не удаляет его из обычного потока - другие элементы вокруг него все еще ведут себя так, как если бы этот элемент находился в позиции по умолчанию. <strong>Заметка</strong> <br> Позиционирование дает вам большую гибкость и силу над визуальным расположением страницы. Приятно помнить, что независимо от положения элементов базовая разметка HTML должна быть организована и иметь смысл при чтении сверху вниз. Это то, как пользователи с нарушениями зрения (которые полагаются на вспомогательные устройства, такие как устройства чтения с экрана) получают доступ к вашему контенту.
</section>

## Instructions
<section id='instructions'>
Измените <code>position</code> <code>h2</code> на <code>relative</code> и используйте смещение CSS, чтобы переместить его на 15 пикселей от <code>top</code> где он находится в нормальном потоке. Обратите внимание, что нет никакого влияния на позиции окружающих элементов h1 и p.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.
    testString: assert($('h2').css('position') == 'relative');
  - text: Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.
    testString: assert($('h2').css('top') == '15px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

</section>
