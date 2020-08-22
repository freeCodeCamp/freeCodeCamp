---
id: bad87fee1348bd9aec908850
title: Apply the Default Bootstrap Button Style
challengeType: 0
videoUrl: ''
localeTitle: 应用默认引导按钮样式
---

## Description
<section id="description"> Bootstrap有另一个名为<code>btn-default</code>按钮类。将<code>btn</code>和<code>btn-default</code>类同时应用于每个<code>button</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将<code>btn</code>类应用于每个<code>button</code>元素。
    testString: assert($(".btn").length > 5);
  - text: 将<code>btn-default</code>类应用于每个<code>button</code>元素。
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

```js
// solution required
```

/section>
