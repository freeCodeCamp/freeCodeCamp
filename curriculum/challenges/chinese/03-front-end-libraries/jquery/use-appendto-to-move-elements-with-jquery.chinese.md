---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
challengeType: 6
videoUrl: ''
localeTitle: 使用appendTo使用jQuery移动元素
---

## Description
<section id="description">现在让我们尝试将元素从一个<code>div</code>移动到另一个<code>div</code> 。 jQuery有一个名为<code>appendTo()</code>的函数，它允许您选择HTML元素并将它们附加到另一个元素。例如，如果我们想将<code>target4</code>从我们的右井移动到我们的左井，我们将使用： <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code>将<code>target2</code>元素从<code>left-well</code>到<code>right-well</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>target2</code>元素不应位于<code>left-well</code> 。
    testString: assert($("#left-well").children("#target2").length === 0);
  - text: 你的<code>target2</code>元素应该在你的<code>right-well</code> 。
    testString: assert($("#right-well").children("#target2").length > 0);
  - text: 只使用jQuery来移动这些元素。
    testString: assert(!code.match(/class.*animated/g));

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
