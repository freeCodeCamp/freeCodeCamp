---
id: bad87fee1348bd9aed308826
title: Target the Parent of an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery定位元素的父级
---

## Description
<section id="description">每个HTML元素都有一个<code>parent</code>元素，它从中<code>inherits</code>属性。例如，您的<code>jQuery Playground</code> <code>h3</code>元素具有<code>&lt;div class=&quot;container-fluid&quot;&gt;</code>的父元素，它本身具有父<code>body</code> 。 jQuery有一个名为<code>parent()</code>的函数，允许您访问您选择的任何元素的父级。下面是一个如何使用<code>parent()</code>函数的例子，如果你想给<code>left-well</code>元素的父元素一个蓝色的背景颜色： <code>$(&quot;#left-well&quot;).parent().css(&quot;background-color&quot;, &quot;blue&quot;)</code>为<code>#target1</code>元素的父级<code>#target1</code>背景颜色为红色。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>left-well</code>元素应该有红色背景。
    testString: assert($("#left-well").css("background-color") === 'red' || $("#left-well").css("background-color") === 'rgb(255, 0, 0)' || $("#left-well").css("background-color").toLowerCase() === '#ff0000' || $("#left-well").css("background-color").toLowerCase() === '#f00');
  - text: 您应该使用<code>.parent()</code>函数来修改此元素。
    testString: assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g));
  - text: '应该在<code>#target1</code>元素上调用<code>.parent()</code>方法。'
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")\s*?\)\s*?\.parent/gi));
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(code.match(/<div class="well" id="left-well">/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");

  });
</script>

<!-- Only change code above this line. -->

<body>
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
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
