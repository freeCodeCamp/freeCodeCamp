---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: ''
localeTitle: Комментарий HTML
---

## Description
<section id="description"> Помните, что для того, чтобы начать комментарий, вам нужно использовать <code>&lt;!--</code> и для завершения комментария, вам нужно использовать <code>--&gt;</code> Здесь вам нужно будет закончить комментарий до того, как начнется ваш элемент <code>h2</code> . </section>

## Instructions
<section id="instructions"> Вы можете комментровать элементы <code>h1</code> и <code>p</code> , но не элемент <code>h2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Прокомментируйте свой элемент <code>h1</code> чтобы он не был виден на вашей странице.
    testString: 'assert(($("h1").length === 0), "Comment out your <code>h1</code> element so that it is not visible on your page.");'
  - text: 'Оставьте свой <code>h2</code> элемент раскомментированным, чтобы он был виден на вашей странице.'
    testString: 'assert(($("h2").length > 0), "Leave your <code>h2</code> element uncommented so that it is visible on your page.");'
  - text: Прокомментируйте свой элемент <code>p</code> чтобы он не был виден на вашей странице.
    testString: 'assert(($("p").length === 0), "Comment out your <code>p</code> element so that it is not visible on your page.");'
  - text: Не забудьте закрыть каждый из ваших комментариев с помощью <code>--&gt;</code> .
    testString: 'assert(code.match(/[^fc]-->/g).length > 1, "Be sure to close each of your comments with <code>--&#62;</code>.");'
  - text: Не изменяйте порядок <code>h1</code> <code>h2</code> или <code>p</code> в коде.
    testString: 'assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , "Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
