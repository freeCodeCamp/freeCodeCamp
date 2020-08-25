---
id: bad87fee1348bd9aed908826
title: Change the CSS of an Element Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery更改元素的CSS
---

## Description
<section id="description">我们也可以使用jQuery直接更改HTML元素的CSS。 jQuery有一个名为<code>.css()</code>的函数，允许您更改元素的CSS。以下是我们将其颜色更改为蓝色的方法： <code>$(&quot;#target1&quot;).css(&quot;color&quot;, &quot;blue&quot;);</code>这与普通的CSS声明略有不同，因为CSS属性及其值在引号中，并用逗号而不是冒号分隔。删除jQuery选择器，留下一个空的<code>document ready function</code> 。选择<code>target1</code>并将其颜色更改为红色。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>target1</code>元素应该有红色文本。
    testString: assert($("#target1").css("color") === 'rgb(255, 0, 0)');
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(!code.match(/class.*animated/g));

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
    $("button").removeClass("btn-default");

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
