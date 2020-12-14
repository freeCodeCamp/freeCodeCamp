---
id: bad87fee1348bd9aec908857
challengeType: 0
forumTopicId: 18347
title: 使用注释来说明代码
---

## Description
<section id='description'>
当我们开始使用 jQuery，我们将修改HTML元素，但是实际上我们并不是直接在 HTML 文本中修改。
我们必须确保让每个人都知道，他们不应该直接修改此页面上这些代码。
记住，你可以在 <code>&#60;!--</code> 为开始，<code>--&#62;</code> 为结束的地方进行评论注释（像这样，<code>&#60;!-- 我是一段注释 --&#62;</code>）。
请你在你的 HTML 顶部加如下一段注释： <code>Only change code above this line.</code> 。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在添加注释前，在你的 HTML 顶部增加此代码 <code>&#60;!--</code>。
    testString: assert(code.match(/^\s*<!--/));
  - text: 注释内容应该为 <code>Only change code above this line</code>。
    testString: assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
  - text: 注释应该用 <code>--&#62;</code> 进行闭合。
    testString: assert(code.match(/-->.*\n+.+/g));
  - text: 注意，注释的开始标签和闭合标签数量应该一一对应，保持数量一致。
    testString: assert(code.match(/<!--/g).length === code.match(/-->/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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
