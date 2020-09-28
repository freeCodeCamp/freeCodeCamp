---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: https://scrimba.com/c/c9bQEA4
forumTopicId: 301065
localeTitle: Перемещение Относительно Позиционированного Элемента с помощью смещений CSS
---

## Description
<section id='description'>
Смещение CSS <code>top</code> или <code>bottom</code> , а также <code>left</code> или <code>right</code> указывают браузеру, насколько можно смещать элемент относительно того, где он будет сидеть в нормальном потоке документа. Вы компенсируете элемент вдали от заданного места, которое перемещает элемент от указанной стороны (фактически, в противоположном направлении). Как вы видели в последнем вызове, использование верхнего смещения сдвинуло <code>h2</code> вниз. Аналогично, используя левое смещение перемещает элемент справа. <h2> инструкции </h2><section id="instructions"> Используйте смещения CSS для перемещения <code>h2</code> 15 пикселей вправо и 10 пикселей вверх. </section><h2> тесты </h2><section id="tests"><pre> <code class="language-yml">tests: - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;bottom&quot;) == &quot;10px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&quot;);&#39; - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;left&quot;) == &quot;15px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&quot;);&#39;</code> </pre></section><h2> Сезон испытания </h2><section id="challengeSeed"><div id="html-seed"><pre> <code class="language-html">&lt;head&gt; &lt;style&gt; h2 { position: relative; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;On Being Well-Positioned&lt;/h1&gt; &lt;h2&gt;Move me!&lt;/h2&gt; &lt;p&gt;I still think the h2 is where it normally sits.&lt;/p&gt; &lt;/body&gt;</code> </pre></div></section><h2> Решение </h2><section id="solution"><pre> <code class="language-js">// solution required</code> </pre></section>
</section>

## Instructions
<section id='instructions'>
Используйте смещения CSS для перемещения <code>h2</code> 15 пикселей вправо и 10 пикселей вверх.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use a CSS offset to relatively position the <code>h2</code> 10px upwards. In other words, move it 10px away from the <code>bottom</code> of where it normally sits.
    testString: assert($('h2').css('bottom') == '10px');
  - text: Your code should use a CSS offset to relatively position the <code>h2</code> 15px towards the right. In other words, move it 15px away from the <code>left</code> of where it normally sits.
    testString: assert($('h2').css('left') == '15px');

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

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

</section>
