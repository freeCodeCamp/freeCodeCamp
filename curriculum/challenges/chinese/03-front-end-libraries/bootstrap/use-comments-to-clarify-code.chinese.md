---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
videoUrl: ''
localeTitle: 使用注释来澄清代码
---

## Description
<section id="description">当我们开始使用jQuery时，我们将修改HTML元素，而无需在HTML中实际更改它们。让我们确保每个人都知道他们不应该直接修改任何代码。请记住，您可以使用<code>&lt;!--</code>开始发表评论并使用<code>--&gt;</code>在HTML顶部添加评论“ <code>Only change code above this line.</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在HTML的顶部用<code>&lt;!--</code>开始评论。
    testString: assert(code.match(/^\s*<!--/));
  - text: 您的评论应该包含<code>Only change code above this line</code>的文本。
    testString: assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
  - text: 请务必使用<code>--&gt;</code>关闭您的评论。
    testString: assert(code.match(/-->.*\n+.+/g));
  - text: 你应该有相同数量的评论开启者和关闭者。
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

```js
// solution required
```

/section>
