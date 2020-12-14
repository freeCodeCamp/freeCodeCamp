---
id: bad87fee1348bd9aed908626
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18322
title: 用多个 jQuery 选择器选择同一个元素
---

## Description
<section id='description'>
现在你知道三种选取标签的方法：用标签选择器，如<code>$("button")</code>；用类选择器，<code>$(".btn")</code>以及用 id 选择器，<code>$("#target1")</code>。
虽然可以在单个<code>.addClass()</code>内添加多个类，但是我们可以用<em>三种不同的方式</em>给一种标签添加类。
以三种不同的方式用<code>.addClass()</code>方法每次只给一种标签添加一个类：
给所有的<code>button</code>标签添加<code>animated</code>类。
给所有类为<code>.btn</code>的<code>button</code>标签添加<code>shake</code>类。
给所有 id 为<code>#target1</code>的<code>button</code>标签添加<code>btn-primary</code>类。
<strong>注意：</strong><br>虽然三个选择器最终给 id 为<code>#target1</code>的<code>button</code>标签添加<code>shake</code>、<code>animated</code>和<code>btn-primary</code>等三个类，但是你需要用且仅用三种不同的选择器给三种标签各添加一个类（译者注：所谓的“一种标签”是指他们有某种共同的特点，如包含同一个 class）。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "用<code>$&#40'button'&#41</code>选择标签。"
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
  - text: "用<code>$&#40'.btn'&#41</code>选择标签。"
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
  - text: "用<code>$&#40'#target1'&#41</code>选择标签。"
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
  - text: 三个选择器每个只添加一个类。
    testString: assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2);
  - text: <code>#target1</code>标签应具有<code>animated</code>、<code>shake</code>和<code>btn-primary</code>三个类。
    testString: assert($('#target1').hasClass('animated') && $('#target1').hasClass('shake') && $('#target1').hasClass('btn-primary'));
  - text: 仅用 jQuery 给标签添加类。
    testString: assert(!code.match(/class.*animated/g));

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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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

