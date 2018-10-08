---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
localeTitle: Utilice la propiedad de base flexible para establecer el tamaño inicial de un artículo
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
La propiedad de <code>flex-basis</code> especifica el tamaño inicial del elemento antes de que CSS realice ajustes con <code>flex-shrink</code> o <code>flex-grow</code> . 
Las unidades utilizadas por la propiedad de <code>flex-basis</code> son las mismas que otras propiedades de tamaño ( <code>px</code> , <code>em</code> , <code>%</code> , etc.). El valor <code>auto</code> dimensiona los elementos en función del contenido. 
</section>

## Instructions
<section id='instructions'> 
Establezca el tamaño inicial de las cajas utilizando <code>flex-basis</code> . Agregue la propiedad CSS <code>flex-basis</code> a <code>#box-1</code> y <code>#box-2</code> . Dé a <code>#box-1</code> un valor de <code>10em</code> y <code>#box-2</code> un valor de <code>20em</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;El elemento <code>#box-1</code> debería tener una propiedad de <code>flex-basis</code> .&#39;
    testString: 'assert($("#box-1").css("flex-basis") != "auto", "The <code>#box-1</code> element should have a <code>flex-basis</code> property.");'
  - text: &#39;El elemento <code>#box-1</code> debe tener un valor de <code>flex-basis</code> de <code>10em</code> &#39;.
    testString: 'assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g), "The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.");'
  - text: &#39;El elemento <code>#box-2</code> debería tener la propiedad de <code>flex-basis</code> .&#39;
    testString: 'assert($("#box-2").css("flex-basis") != "auto", "The <code>#box-2</code> element should have the <code>flex-basis</code> property.");'
  - text: &#39;El elemento <code>#box-2</code> debe tener un valor de <code>flex-basis</code> de <code>20em</code> &#39;.
    testString: 'assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g), "The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
