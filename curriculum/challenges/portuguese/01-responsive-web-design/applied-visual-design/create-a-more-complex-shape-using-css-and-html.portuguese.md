---
id: 587d78a6367417b2b2512ade
title: Create a More Complex Shape Using CSS and HTML
challengeType: 0
videoUrl: ''
localeTitle: Crie uma forma mais complexa usando CSS e HTML
---

## Description
<section id="description">Uma das formas mais populares do mundo é a forma do coração, e neste desafio você criará um usando CSS puro. Mas primeiro, você precisa entender os pseudo-elementos <code>::before</code> e <code>::after</code>. Esses pseudo-elementos são usados para adicionar algo antes ou depois de um elemento selecionado. No exemplo a seguir, um pseudoelemento <code>::before</code> é usado para adicionar um retângulo a um elemento com o <code>heart</code> da classe: <blockquote> .heart :: before {<br>&nbsp;&nbsp;content: "";<br>&nbsp;&nbsp;background-color: yellow;<br>&nbsp;&nbsp;border-radius: 25%;<br>&nbsp;&nbsp;position: absolute;<br>&nbsp;&nbsp;height: 50px;<br>&nbsp;&nbsp;width: 70px;<br>&nbsp;&nbsp;top: -50px;<br>&nbsp;&nbsp;left: 5px;<br>}</blockquote> Para que os pseudo-elementos <code>::before</code> e <code>::after</code> funcionem corretamente, eles devem ter uma propriedade de <code>content</code> definida. Essa propriedade geralmente é usada para adicionar itens como uma foto ou texto ao elemento selecionado. Quando os pseudoelementos <code>::before</code> e <code>::after</code> são usados para criar formas, a propriedade <code>content</code> ainda é necessária, mas é definida como uma string vazia. No exemplo acima, o elemento com a classe <code>heart</code> possui um pseudoelemento <code>::before</code> que produz um retângulo amarelo com <code>height</code> e <code>width</code> de 50px e 70px, respectivamente. Este retângulo tem cantos arredondados devido ao seu raio de 25% e está posicionado absolutamente a 5px da <code>left</code> e 50px acima da <code>top</code> do elemento. </section>

## Instructions
<section id="instructions"> Transforme o elemento na tela em um coração. No <code>heart::after</code> selector, mude a <code>background-color</code> para pink e o <code>border-radius</code> para 50%. Em seguida, segmente o elemento com o <code>heart</code> da classe (apenas <code>heart</code> ) e preencha a propriedade <code>transform</code> . Use a função <code>rotate()</code> com -45 graus. ( <code>rotate()</code> funciona da mesma forma que <code>skewX()</code> e <code>skewY()</code> ). Finalmente, no <code>heart::before</code> selector, defina sua propriedade <code>content</code> para uma string vazia. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'A propriedade <code>background-color</code> do <code>heart::after</code> selector deve ser rosa.'
    testString: 'assert(code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi), "The <code>background-color</code> property of the <code>heart::after</code> selector should be pink.");'
  - text: 'O <code>border-radius</code> de <code>border-radius</code> do <code>heart::after</code> seletor deve ser de 50%.'
    testString: 'assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2, "The <code>border-radius</code> of the <code>heart::after</code> selector should be 50%.");'
  - text: A propriedade <code>transform</code> para a classe <code>heart</code> deve usar uma função <code>rotate()</code> definida como -45 graus.
    testString: 'assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi), "The <code>transform</code> property for the <code>heart</code> class should use a <code>rotate()</code> function set to -45 degrees.");'
  - text: 'O <code>content</code> do <code>heart::before</code> selector deve ser uma string vazia.'
    testString: 'assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|")\1\s*?;/gi), "The <code>content</code> of the <code>heart::before</code> selector should be an empty string.");'

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
<div class = "heart"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
