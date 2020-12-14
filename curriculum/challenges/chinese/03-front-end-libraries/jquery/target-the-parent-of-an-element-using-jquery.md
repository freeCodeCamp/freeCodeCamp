---
id: bad87fee1348bd9aed308826
challengeType: 6
forumTopicId: 18321
title: 使用 jQuery 选择元素的父元素
---

## Description
<section id='description'>
每个 HTML 标签都默认<code>继承（inherits）</code>其<code>父标签（parent element）</code>的 CSS 属性。
例如，<code>h3</code>标签<code>jQuery Playground</code>的父标签是<code>&#60;div class="container-fluid"&#62</code>，<code>&#60;div class="container-fluid"&#62</code>的父标签是<code>body</code>。
jQuery 有一个<code>parent()</code>方法，可以访问被选取标签的父标签。
下面的代码展示了使用<code>parent()</code>方法把<code>left-well</code>标签的父标签背景色设置成<code>蓝色（blue）</code>的方式：
<code>$("#left-well").parent().css("background-color", "blue")</code>
请把<code>#target1</code>标签的父标签背景色设置成<code>红色（red）</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>left-well</code>标签应该有红色的背景。
    testString: assert($("#left-well").css("background-color") === 'red' || $("#left-well").css("background-color") === 'rgb(255, 0, 0)' || $("#left-well").css("background-color").toLowerCase() === '#ff0000' || $("#left-well").css("background-color").toLowerCase() === '#f00');
  - text: 应该用<code>&#46;parent&#40;&#41;</code>方法修改该标签。
    testString: assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g));
  - text: 应该在<code>&#35;target1</code>标签上调用<code>&#46;parent&#40;&#41;</code>方法。
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")\s*?\)\s*?\.parent/gi));
  - text: 仅用 jQuery 给标签添加类。
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

<!-- 请修改本行以上的代码 -->

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

</section>

