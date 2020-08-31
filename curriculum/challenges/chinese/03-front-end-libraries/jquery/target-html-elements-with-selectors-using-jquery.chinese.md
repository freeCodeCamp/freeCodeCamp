---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用选择器使用jQuery定位HTML元素
---

## Description
<section id="description">现在我们有一个<code>document ready function</code> 。现在让我们编写第一个jQuery语句。所有jQuery函数都以<code>$</code>开头，通常称为<code>dollar sign operator</code> ，或者作为<code>bling</code> 。 jQuery经常选择带有<code>selector</code>的HTML元素，然后对该元素执行某些操作。例如，让我们使所有<code>button</code>元素反弹。只需在您的文档就绪函数中添加此代码： <code>$(&quot;button&quot;).addClass(&quot;animated bounce&quot;);</code>请注意，我们已经在后台包含了jQuery库和Animate.css库，以便您可以在编辑器中使用它们。所以你使用jQuery将Animate.css <code>bounce</code>类应用于你的<code>button</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用jQuery <code>addClass()</code>函数将类<code>animated</code>并<code>bounce</code>回到<code>button</code>元素。
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"));'
  - text: 只使用jQuery将这些颜色添加到元素中。
    testString: 'assert(!code.match(/class.*animated/g));'
  - text: 你的jQuery代码应该在<code>$(document).ready();</code>功能。
    testString: assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
