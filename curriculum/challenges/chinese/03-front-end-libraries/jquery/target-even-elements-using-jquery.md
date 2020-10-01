---
id: bad87fee1348bd9aed008826
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18318
title: 使用 jQuery 选择偶数元素
---

## Description
<section id='description'>
你也可以用基于位置的<code>:odd</code>和<code>:even</code>选择器选取标签。
注意，jQuery 是<code>零索引（zero-indexed）</code>的，这意味着第 1 个标签的位置编号是<code>0</code>。这有点混乱和反常——<code>:odd</code>表示选择第 2 个标签（位置编号 1），第 4 个标签（位置编号 3）……等等，以此类推。
下面的代码展示了选取所有的奇标签并设置类：
<code>$(".target:odd").addClass("animated shake");</code>
请尝试选取所有<code>target</code>标签的偶标签并给他们设置<code>animated</code>和<code>shake</code>类。要考虑到<strong>偶（even）</strong>指的是标签位置编号基于<code>0</code>的系统。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有的<code>target</code>标签应该抖动。
    testString: assert($('.target:even').hasClass('animated') && $('.target:even').hasClass('shake'));
  - text: 应该用<code>&#58;even</code>选择器修改这些标签。
    testString: assert(code.match(/\:even/g));
  - text: 仅用 jQuery 给标签添加类。
    testString: assert(code.match(/\$\(".target:even"\)/g) || code.match(/\$\('.target:even'\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g) || code.match(/\$\('.target'\).filter\(':even'\)/g));

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
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

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
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
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
