---
id: bad87fee1348bd9bedc08826
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18319
title: 使用 jQuery 配合元素选择器选择元素
---

## Description
<section id='description'>
接下来我们学习<code>document ready function</code>。
首先，我们完成第一个 jQuery 语句。所有的 jQuery 函数以<code>$</code>开头，这个符号通常被称为<code>美元符号（dollar sign operator）</code>或<code>bling</code>。
jQuery 通常选取并操作带有<code>选择器（selector）</code>的 HTML 标签。
例如，如果要所有<code>button</code>有弹性的动画效果，只需在<code>document ready function</code>中添加如下代码即可：
<code>$("button").addClass("animated bounce");</code>
请注意，为了能在编辑器里直接使用，我们已经为你在后台引入了 jQuery 库和 Animate.css 库。因此，你只需要通过 jQuery 给<code>button</code>元素添加<code>bounce</code>类就可以了。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 用 jQuery 的<code>addClass&#40&#41</code>方法给<code>button</code>标签添加<code>animated</code>和<code>bounce</code>类。
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"));'
  - text: 仅用 jQuery 给标签添加颜色。
    testString: 'assert(!code.match(/class.*animated/g));'
  - text: jQuery 代码应该放在<code>$(document).ready();</code>函数里。
    testString: assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

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
