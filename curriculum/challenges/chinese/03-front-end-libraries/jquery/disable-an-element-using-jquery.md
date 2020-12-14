---
id: bad87fee1348bd9aed808826
challengeType: 6
forumTopicId: 17563
title: 使用 jQuery 禁用元素
---

## Description
<section id='description'>
你还能用 jQuery 改变 HTML 标签的非 CSS 属性,例如:能禁用按钮。
当你禁用按钮时，它将变成灰色并无法点击。
jQuery 有一个<code>.prop()</code>方法，你可以用其调整标签的属性。
下面的代码效果是禁用所有的按钮：
<code>$("button").prop("disabled", true);</code>
请仅禁用<code>target1</code>按钮。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 禁用<code>target1</code>按钮。
    testString: assert($("#target1") && $("#target1").prop("disabled") && code.match(/["']disabled["'],( true|true)/g));
  - text: 不禁用其他的按钮。
    testString: assert($("#target2") && !$("#target2").prop("disabled"));
  - text: 仅用 jQuery 给标签添加类。
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

<!-- 请修改本行以上的代码 -->

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

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);

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

</section>
