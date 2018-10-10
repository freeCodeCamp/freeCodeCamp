---
id: 5a90372638fddaf9a66b5d38
title: Use grid-column to Control Spacing
challengeType: 0
videoUrl: ''
localeTitle: Usa la cuadrícula para controlar el espaciado
---

## Description
<section id="description"> Hasta este punto, todas las propiedades que se han discutido son para contenedores de cuadrícula. La propiedad de la <code>grid-column</code> es la primera que se utiliza en los propios elementos de la cuadrícula. Las líneas hipotéticas horizontales y verticales que crean la cuadrícula se denominan <dfn>líneas</dfn> . Estas líneas están numeradas comenzando con 1 en la esquina superior izquierda de la cuadrícula y se mueven hacia la derecha para columnas y hacia abajo para filas, contando hacia arriba. Así es como se ven las líneas para una cuadrícula de 3x3: <div style="position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;"><p style="left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;"> líneas de columna </p><p style="left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 1 </p><p style="left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 2 </p><p style="left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 3 </p><p style="left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;"> 4 </p><p style="left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;"> líneas de fila </p><p style="left:-10%;top:-10%;font-size:130%;position:absolute;"> 1 </p><p style="left:-10%;top:21%;font-size:130%;position:absolute;"> 2 </p><p style="left:-10%;top:53%;font-size:130%;position:absolute;"> 3 </p><p style="left:-10%;top:85%;font-size:130%;position:absolute;"> 4 </p><div style="left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;"></div><div style="left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;"></div><div style="left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;"></div></div> Para controlar la cantidad de columnas que consumirá un artículo, puede usar la propiedad de la <code>grid-column</code> la <code>grid-column</code> junto con los números de línea en los que desea que empiece y se detenga el artículo. Aquí hay un ejemplo: <blockquote> cuadrícula-columna: 1/3; </blockquote> Esto hará que el elemento comience en la primera línea vertical de la cuadrícula de la izquierda y se extienda hasta la tercera línea de la cuadrícula, consumiendo dos columnas. </section>

## Instructions
<section id="instructions"> Haga que el elemento con la clase <code>item5</code> consuma las dos últimas columnas de la cuadrícula. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> clase debe tener una <code>grid-column</code> propiedad que tiene el valor de <code>2 / 4</code> .
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-column\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-column</code> property that has the value of <code>2 / 4</code>.");'

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



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
