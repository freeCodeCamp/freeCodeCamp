---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery定位元素的子元素
---

## Description
<section id="description">当HTML元素放在另一个下面时，它们被称为该元素的<code>children</code>元素。例如，在与文本“＃Target1时”，“＃TARGET2”，和“＃target3”这一挑战的按钮元件都是<code>children</code>的的<code>&lt;div class=&quot;well&quot; id=&quot;left-well&quot;&gt;</code>元素。 jQuery有一个名为<code>children()</code>的函数，允许您访问您选择的元素的子元素。下面是一个示例，说明如何使用<code>children()</code>函数为<code>left-well</code>元素的子项设置<code>blue</code> ： <code>$(&quot;#left-well&quot;).children().css(&quot;color&quot;, &quot;blue&quot;)</code> </section>

## Instructions
<section id="instructions">给你的<code>right-well</code>元素的所有孩子颜色为橙色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#right-well</code>所有孩子都应该有橙色文字。'
    testString: assert($("#right-well").children().css("color") === 'rgb(255, 165, 0)');
  - text: 您应该使用<code>children()</code>函数来修改这些元素。
    testString: assert(code.match(/\.children\(\)\.css/g));
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(code.match(/<div class="well" id="right-well">/g));

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
    $("#target1").parent().css("background-color", "red");

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
