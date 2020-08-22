---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
videoUrl: ''
localeTitle: 将id属性添加到Bootstrap元素
---

## Description
<section id="description">回想一下，除了类属性之外，您还可以为每个元素赋予一个<code>id</code>属性。每个id必须对特定元素是唯一的，并且每页只使用一次。让我们给一个唯一的ID给我们每一个的<code>div</code>类的元素<code>well</code> 。请记住，你可以给一个元素这样的id： <code>&lt;div class=&quot;well&quot; id=&quot;center-well&quot;&gt;</code>给<code>left-well</code> 。给<code>right-well</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给你留下<code>well</code>的id <code>left-well</code> 。
    testString: assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0);
  - text: 给您的权利<code>well</code>的ID <code>right-well</code> 。
    testString: assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0);

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
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
