---
id: bad87fee1348bd9aed918626
title: Remove Classes from an Element with jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery从元素中删除类
---

## Description
<section id="description">以同样的方式，你可以添加类与jQuery的元素<code>addClass()</code>函数，你可以用jQuery的删除它们<code>removeClass()</code>函数。以下是为特定按钮执行此操作的方法： <code>$(&quot;#target2&quot;).removeClass(&quot;btn-default&quot;);</code>让我们从所有<code>button</code>元素中删除<code>btn-default</code>类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 从所有<code>button</code>元素中删除<code>btn-default</code>类。
    testString: assert($(".btn-default").length === 0);
  - text: 仅使用jQuery从元素中删除此类。
    testString: assert(code.match(/btn btn-default/g));
  - text: 只删除<code>btn-default</code>类。
    testString: assert(code.match(/\.[\v\s]*removeClass[\s\v]*\([\s\v]*('|")\s*btn-default\s*('|")[\s\v]*\)/gm));

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
