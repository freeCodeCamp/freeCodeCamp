---
id: bad87fee1348bd9aeda08826
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18317
title: 使用 jQuery 配合 id 选择器选择元素
---

## Description
<section id='description'>
你也能通过 id 属性选取标签。
首先，用<code>$("#target3")</code>选择器选取 id 为<code>target3</code>的<code>button</code>标签。
注意，和 CSS 属性一样，在 id 名前需要添加<code>#</code>。
然后，用 jQuery 的<code>.addClass()</code>方法添加<code>animated</code>和<code>fadeOut</code>类。
下面的代码的效果是使 id 为<code>target6</code>的<code>button</code>标签淡出：
<code>$("#target6").addClass("animated fadeOut")</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 用 jQuery 的<code>addClass&#40&#41</code>方法给<code>id</code>为<code>target3</code>的<code>button</code>标签添加<code>animated</code>类。
    testString: assert($("#target3").hasClass("animated"));
  - text: 用 jQuery 的<code>addClass&#40&#41</code>方法给<code>id</code>为<code>target3</code>的标签的类添加<code>fadeOut</code>类。
    testString: assert(($("#target3").hasClass("fadeOut") || $("#target3").hasClass("fadeout"))  && code.match(/\$\(\s*.#target3.\s*\)/g));
  - text: 仅用 jQuery 给标签设置类。
    testString: assert(!code.match(/class.*animated/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");

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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
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
