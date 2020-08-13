---
id: bad87fee1348bd9aeda08726
title: Delete Your jQuery Functions
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 删除您的jQuery函数
---

## Description
<section id="description">这些动画起初很酷，但现在它们让人分心。从<code>document ready function</code>删除所有这三个jQuery函数，但保留<code>document ready function</code>本身。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 从<code>document ready function</code>删除所有三个jQuery <code>document ready function</code> 。
    testString: assert(code.match(/\{\s*\}\);/g));
  - text: 保持<code>script</code>元素不变。
    testString: assert(code.match(/<script>/g));
  - text: '将<code>$(document).ready(function() {</code>保留到<code>script</code>元素的开头。'
    testString: assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g));
  - text: '保持“文档就绪功能”关闭<code>})</code>完好无损。'
    testString: assert(code.match(/.*\s*\}\);/g));
  - text: 保持<code>script</code>元素结束标记不变。
    testString: assert(code.match(/<\/script>/g) && code.match(/<script/g) && code.match(/<\/script>/g).length === code.match(/<script/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
