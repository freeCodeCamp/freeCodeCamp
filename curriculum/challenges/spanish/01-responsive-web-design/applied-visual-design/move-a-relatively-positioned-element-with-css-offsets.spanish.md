---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: ''
localeTitle: Mueva un elemento de posición relativa con compensaciones de CSS
---

## Description
<section id="description"> Las compensaciones de CSS de la <code>top</code> o <code>bottom</code> , y de la <code>left</code> o la <code>right</code> indican al navegador la distancia que debe desplazar un elemento en relación con el lugar donde se ubicaría en el flujo normal del documento. Está desplazando un elemento lejos de un punto dado, lo que lo aleja del lado al que se hace referencia (efectivamente, en la dirección opuesta). Como viste en el último desafío, usando el desplazamiento superior movió el <code>h2</code> hacia abajo. Del mismo modo, utilizando un desplazamiento a la izquierda mueve un elemento a la derecha. <h2> Instrucciones </h2><section id="instructions"> Use las compensaciones de CSS para mover el <code>h2</code> 15 píxeles a la derecha y 10 píxeles hacia arriba. </section><h2> Pruebas </h2><section id="tests"><pre> <code class="language-yml">tests: - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;bottom&quot;) == &quot;10px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&quot;);&#39; - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;left&quot;) == &quot;15px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&quot;);&#39;</code> </pre></section><h2> Semilla de desafío </h2><section id="challengeSeed"><div id="html-seed"><pre> <code class="language-html">&lt;head&gt; &lt;style&gt; h2 { position: relative; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;On Being Well-Positioned&lt;/h1&gt; &lt;h2&gt;Move me!&lt;/h2&gt; &lt;p&gt;I still think the h2 is where it normally sits.&lt;/p&gt; &lt;/body&gt;</code> </pre></div></section><h2> Solución </h2><section id="solution"><pre> <code class="language-js">// solution required</code> </pre></section></section>

## Instructions
<section id="instructions"> Use las compensaciones de CSS para mover el <code>h2</code> 15 píxeles a la derecha y 10 píxeles hacia arriba. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su código debe usar un desplazamiento de CSS para colocar relativamente el <code>h2</code> 10px hacia arriba. En otras palabras, aléjelo 10px de la <code>bottom</code> de donde normalmente se sienta.'
    testString: 'assert($("h2").css("bottom") == "10px", "Your code should use a CSS offset to relatively position the <code>h2</code> 10px upwards. In other words, move it 10px away from the <code>bottom</code> of where it normally sits.");'
  - text: 'Su código debe usar un desplazamiento de CSS para colocar relativamente el <code>h2</code> 15px hacia la derecha. En otras palabras, aléjelo 15px de la <code>left</code> de donde normalmente se sienta.'
    testString: 'assert($("h2").css("left") == "15px", "Your code should use a CSS offset to relatively position the <code>h2</code> 15px towards the right. In other words, move it 15px away from the <code>left</code> of where it normally sits.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
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

```js
// solution required
```
</section>
