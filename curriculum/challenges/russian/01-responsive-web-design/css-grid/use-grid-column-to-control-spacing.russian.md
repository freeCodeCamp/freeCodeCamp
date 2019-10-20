---
id: 5a90372638fddaf9a66b5d38
title: Use grid-column to Control Spacing
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cnzkDSr
forumTopicId: 301136
localeTitle: Использование grid-column для управления пространством
---

## Description
<section id='description'>
До этого момента все свойства, которые обсуждались, предназначены для грид контейнеров. Свойство <code>grid-column</code> - первое свойство для использования в элементах грида. Гипотетические горизонтальные и вертикальные линии, которые создают грид, называются <dfn>линиями</dfn> . Эти линии нумеруются начиная с 1 в верхнем левом углу грида и перемещаются вправо для столбцов и вниз для строк. Вот как выглядят линии для грида 3x3: <div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;"> линии столбцов </p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 1 </p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 2 </p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 3 </p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 4 </p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;"> линии строк </p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;"> 1 </p><p style="left:-10%;top:21%;font-size:130%;position:absolute;"> 2 </p><p style="left:-10%;top:53%;font-size:130%;position:absolute;"> 3 </p><p style="left:-10%;top:85%;font-size:130%;position:absolute;"> 4 </p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;"></div></div> Чтобы контролировать количество столбцов, которые будет занимать элемент, вы можете использовать свойство <code>grid-column</code> в сочетании с номерами линий начала и конца элемента. Вот пример: <blockquote> grid-column: 1/3; </blockquote> Это приведет к тому, что элемент начнется с первой вертикальной линии грида слева и продолжится до третьей линии грида, занимая два столбца.
</section>

## Instructions
<section id='instructions'>
Создайте элемент с классом <code>item5</code> , который занимает последние два столбца грида.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> class should have a <code>grid-column</code> property.
    testString: assert($('style').text().replace(/\s/g, '').match(/\.item5{.*grid-column:.*}/g));
  - text: <code>item5</code> class should have a <code>grid-column</code> property which results in the <code>div</code> with the <code>item5</code> consuming the last two columns of the grid.
    testString: assert(hasCorrectSpacing());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>

### Before Tests
<div id='html-setup'>

```html
<script>
const hasCorrectSpacing = () => {
  const contTwoPlusThreePlusGapWidth = $('.item2').width() * 2 + 10;
  const item5Width = $('.item5').width();
  const diff = Math.abs(contTwoPlusThreePlusGapWidth - item5Width);
  /* To avoid rounding errors the largest allowed diff is set at 0.01px */
  return diff <= 0.01; 
};
</script>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

</section>
