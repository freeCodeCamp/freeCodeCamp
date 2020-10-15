---
id: bad87fee1348bd9aed108826
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18315
title: 使用 jQuery 选择元素的特定子元素
---

## Description
<section id='description'>
你已经看到了为什么 id 属性对于 jQuery 选择器选取标签非常方便，但这并不适用于所有情景。
幸运的是，jQuery 有一些其他的方法可以选取正确的标签。
jQuery 可以用<code>CSS 选择器（CSS Selectors）</code>选取标签。<code>target:nth-child(n)</code>CSS 选择器可以选取所有的第 n 个标签并设置目标属性和目标样式。
下面的代码展示了给每个区域（well）的第 3 个标签设置<code>bounce</code>类：
<code>$(".target:nth-child(3)").addClass("animated bounce");</code>
请给每个区域（well）的第 2 个标签设置<code>bounce</code>类，必须用<code>target</code>类选取标签。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>target</code>标签中的第二个标签应该有弹性的动画效果。
    testString: assert($(".target:nth-child(2)").hasClass("animated") && $(".target:nth-child(2)").hasClass("bounce"));
  - text: 应该仅两个标签有弹性的动画效果。
    testString: assert($(".animated.bounce").length === 2);
  - text: 应该用<code>&#58;nth-child&#40&#41</code>选择器修改这些标签。
    testString: assert(code.match(/\:nth-child\(/g));
  - text: 仅用 jQuery 给标签添加类。
    testString: assert(code.match(/\$\(".target:nth-child\(2\)"\)/g) || code.match(/\$\('.target:nth-child\(2\)'\)/g) || code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) || code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g));

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
    $("#right-well").children().css("color", "orange");

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
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
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
