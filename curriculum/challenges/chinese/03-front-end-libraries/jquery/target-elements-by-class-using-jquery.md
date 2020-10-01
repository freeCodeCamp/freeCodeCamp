---
id: bad87fee1348bd9aedc08826
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18316
title: 使用 jQuery 配合 class 选择器选择元素
---

## Description
<section id='description'>
我们如何使所有的<code>button</code>标签有弹性的动画效果？我们用<code>$("button")</code>选取所有的<code>button</code>标签，并用<code>.addClass("animated bounce");</code>给其添加一些 CSS 属性。
jQuery 的<code>.addClass()</code>方法用来给标签添加类。
首先，我们使用<code>$(".well")</code>选取类为<code>well</code>的<code>div</code>标签。
值得注意的是，和 CSS 声明一样，在类名前需要添加<code>.</code>。
然后，用 jQuery 的<code>.addClass()</code>方法添加<code>animated</code>和<code>shake</code>类。
例如，在<code>document ready function</code>中添加下面的代码，能使所有类为<code>text-primary</code>的标签抖动：
<code>$(".text-primary").addClass("animated shake");</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 用 jQuery 的<code>addClass&#40&#41</code>方法给所有类为<code>well</code>的标签添加<code>animated</code>和<code>shake</code>类。
    testString: assert($(".well").hasClass("animated") && $(".well").hasClass("shake"));
  - text: 仅用 jQuery 给标签添加类。
    testString: assert(!code.match(/class\.\*animated/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
