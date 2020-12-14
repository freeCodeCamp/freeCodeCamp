---
id: bad87fee1348bd9aec908850
challengeType: 0
forumTopicId: 16657
title: 给 Bootstrap 按钮添加默认样式
---

## Description
<section id='description'>
Bootstrap 还有另外一种属于按钮的 class 属性叫做 <code>btn-default</code>。
为 <code>button</code> 元素增加两个 class： <code>btn</code> 和 <code>btn-default</code>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将 <code>btn</code> class 添加到所有的 <code>button</code> 元素中。
    testString: assert($(".btn").length > 5);
  - text: 将 <code>btn-default</code> class 添加到每一个 <code>button</code> 元素中。
    testString: assert($(".btn-default").length > 5);

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
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```

</section>
