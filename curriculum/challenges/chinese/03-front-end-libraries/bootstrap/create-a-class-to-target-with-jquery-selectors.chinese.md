---
id: bad87fee1348bd9aec908852
title: Create a Class to Target with jQuery Selectors
challengeType: 0
videoUrl: ''
localeTitle: 使用jQuery选择器创建一个目标类
---

## Description
<section id="description">并非每个类都需要具有相应的CSS。有时我们创建类只是为了使用jQuery更容易地选择这些元素。为每个<code>button</code>元素提供类<code>target</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将<code>target</code>类应用于每个<code>button</code>元素。
    testString: assert($(".target").length > 5);

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
