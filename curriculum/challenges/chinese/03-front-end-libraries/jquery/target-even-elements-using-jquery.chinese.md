---
id: bad87fee1348bd9aed008826
title: Target Even Elements Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery定位偶数元素
---

## Description
<section id="description">您还可以使用<code>:odd</code>或<code>:even</code>选择器根据位置定位元素。请注意，jQuery是零索引的，这意味着选择中的第一个元素的位置为0.这可能有点令人困惑，因为反直觉地<code>:odd</code>选择第二个元素（位置1），第四个元素（位置3） ， 等等。以下是如何使用类<code>target</code>定位所有奇数元素并给它们类： <code>$(&quot;.target:odd&quot;).addClass(&quot;animated shake&quot;);</code>尝试选择所有偶数<code>target</code>元素，并为它们提供<code>animated</code>和<code>shake</code>类。请记住， <strong>甚至</strong>指的是基于零系统的元素的位置。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: jQuery认为的所有<code>target</code>元素都应该动摇。
    testString: assert($('.target:even').hasClass('animated') && $('.target:even').hasClass('shake'));
  - text: '您应该使用<code>:even</code>选择器来修改这些元素。'
    testString: assert(code.match(/\:even/g));
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(code.match(/\$\(".target:even"\)/g) || code.match(/\$\('.target:even'\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g) || code.match(/\$\('.target'\).filter\(':even'\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

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
