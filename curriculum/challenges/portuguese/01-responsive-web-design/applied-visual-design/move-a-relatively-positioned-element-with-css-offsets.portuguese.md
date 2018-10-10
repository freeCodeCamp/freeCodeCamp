---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: ''
localeTitle: Mover um Elemento Posicionado Relativamente com Deslocamentos CSS
---

## Description
<section id="description"> Os deslocamentos de CSS de <code>top</code> ou de <code>bottom</code> e à <code>left</code> ou à <code>right</code> informam ao navegador a distância para compensar um item em relação ao local em que ele ficaria no fluxo normal do documento. Você está deslocando um elemento para longe de um determinado ponto, o que afasta o elemento do lado referenciado (efetivamente, na direção oposta). Como você viu no último desafio, usar o deslocamento superior moveu o <code>h2</code> para baixo. Da mesma forma, usar um deslocamento à esquerda move um item para a direita. <h2> Instruções </h2><section id="instructions"> Use deslocamentos CSS para mover os <code>h2</code> 15 pixels para a direita e 10 pixels para cima. </section><h2> Testes </h2><section id="tests"><pre> <code class="language-yml">tests: - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;bottom&quot;) == &quot;10px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&quot;);&#39; - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;left&quot;) == &quot;15px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&quot;);&#39;</code> </pre></section><h2> Semente do Desafio </h2><section id="challengeSeed"><div id="html-seed"><pre> <code class="language-html">&lt;head&gt; &lt;style&gt; h2 { position: relative; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;On Being Well-Positioned&lt;/h1&gt; &lt;h2&gt;Move me!&lt;/h2&gt; &lt;p&gt;I still think the h2 is where it normally sits.&lt;/p&gt; &lt;/body&gt;</code> </pre></div></section><h2> Solução </h2><section id="solution"><pre> <code class="language-js">// solution required</code> </pre></section></section>

## Instructions
<section id="instructions"> Use deslocamentos CSS para mover os <code>h2</code> 15 pixels para a direita e 10 pixels para cima. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu código deve usar um deslocamento CSS para posicionar relativamente o <code>h2</code> 10px para cima. Em outras palavras, movê-lo 10px longe da <code>bottom</code> de onde normalmente se senta.'
    testString: 'assert($("h2").css("bottom") == "10px", "Your code should use a CSS offset to relatively position the <code>h2</code> 10px upwards. In other words, move it 10px away from the <code>bottom</code> of where it normally sits.");'
  - text: 'Seu código deve usar um deslocamento CSS para posicionar o <code>h2</code> 15px de maneira relativamente à direita. Em outras palavras, mova-o a 15px da <code>left</code> de onde normalmente fica.'
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
