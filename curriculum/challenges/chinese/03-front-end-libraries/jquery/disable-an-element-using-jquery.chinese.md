---
id: bad87fee1348bd9aed808826
title: Disable an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery禁用元素
---

## Description
<section id="description">您还可以使用jQuery更改HTML元素的非CSS属性。例如，您可以禁用按钮。禁用按钮后，它将变为灰色，无法再单击。 jQuery有一个名为<code>.prop()</code>的函数，允许您调整元素的属性。以下是禁用所有按钮的方法： <code>$(&quot;button&quot;).prop(&quot;disabled&quot;, true);</code>仅禁用<code>target1</code>按钮。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 禁用<code>target1</code>按钮。
    testString: assert($("#target1") && $("#target1").prop("disabled") && code.match(/["']disabled["'],( true|true)/g));
  - text: 不要禁用任何其他按钮。
    testString: assert($("#target2") && !$("#target2").prop("disabled"));
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(!code.match(/disabled[^<]*>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
