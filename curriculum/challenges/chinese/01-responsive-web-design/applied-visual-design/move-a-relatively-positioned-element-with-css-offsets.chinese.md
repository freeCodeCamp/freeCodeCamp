---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS偏移移动相对定位的元素
---

## Description
<section id="description"> <code>top</code>或<code>bottom</code> ， <code>left</code>或<code>right</code>的CSS偏移告诉浏览器将项目相对于文档正常流程中的位置偏移多远。您将元素偏离给定的点，这会使元素远离引用的边（有效地，相反的方向）。正如您在上一次挑战中看到的那样，使用顶部偏移将<code>h2</code>向下移动。同样，使用左偏移会将项目向右移动。 <h2>说明</h2><section id="instructions">使用CSS偏移将<code>h2</code>移动15像素向右移动10像素。 </section><h2>测试</h2><section id="tests"><pre> <code class="language-yml">tests: - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;bottom&quot;) == &quot;10px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&quot;);&#39; - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;left&quot;) == &quot;15px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&quot;);&#39;</code> </pre></section><h2>挑战种子</h2><section id="challengeSeed"><div id="html-seed"><pre> <code class="language-html">&lt;head&gt; &lt;style&gt; h2 { position: relative; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;On Being Well-Positioned&lt;/h1&gt; &lt;h2&gt;Move me!&lt;/h2&gt; &lt;p&gt;I still think the h2 is where it normally sits.&lt;/p&gt; &lt;/body&gt;</code> </pre></div></section><h2>解</h2><section id="solution"><pre> <code class="language-js">// solution required</code> </pre></section></section>

## Instructions
<section id="instructions">使用CSS偏移将<code>h2</code>移动15像素向右移动10像素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用CSS偏移量来相对定位<code>h2</code> 10px。换句话说，将它从通常所在位置的<code>bottom</code>移开10px。
    testString: 'assert($("h2").css("bottom") == "10px", "Your code should use a CSS offset to relatively position the <code>h2</code> 10px upwards. In other words, move it 10px away from the <code>bottom</code> of where it normally sits.");'
  - text: 您的代码应该使用CSS偏移来相对地将<code>h2</code> 15px定位到右侧。换句话说，将它从通常所在的位置<code>left</code>移动15px。
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
