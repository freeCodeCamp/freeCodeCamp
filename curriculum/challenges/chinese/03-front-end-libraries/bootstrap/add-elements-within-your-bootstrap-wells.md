---
id: bad87fee1348bd9aec908849
challengeType: 0
forumTopicId: 16636
title: 在 Bootstrap Wells 中添加元素
---

## Description
<section id='description'>
现在我们的每一行的每一列都已经有了 <code>div</code> 元素。这已经足够了，现在让我们添加 <code>button</code> 元素吧。
在每一个 <code>well</code> <code>div</code> 元素下放置三个 <code>button</code> 元素。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在每一个 class 属性为 <code>well</code> 的 <code>div</code> 元素内分别放置三个 <code>button</code> 元素。
    testString: assert($("div.well:eq(0)").children("button").length === 3 && $("div.well:eq(1)").children("button").length === 3);
  - text: 总共有 6 个 <code>button</code> 元素。
    testString: assert($("button") && $("button").length > 5);
  - text: 确保 <code>button</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);

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
      <div class="well">



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```

</section>
