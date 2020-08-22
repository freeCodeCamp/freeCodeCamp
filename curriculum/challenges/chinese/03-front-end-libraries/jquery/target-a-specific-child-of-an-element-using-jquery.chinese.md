---
id: bad87fee1348bd9aed108826
title: Target a Specific Child of an Element Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery定位元素的特定子元素
---

## Description
<section id="description">您已经了解了为什么id属性对于使用jQuery选择器进行定位非常方便。但是你不会总是有这么整洁的ids。幸运的是，jQuery还有一些其他技巧可用于定位正确的元素。 jQuery使用CSS选择器来定位元素。 <code>target:nth-child(n)</code> CSS选择器允许您选择具有目标类或元素类型的所有第n个元素。以下是如何给每个井中的第三个元素提供反弹类： <code>$(&quot;.target:nth-child(3)&quot;).addClass(&quot;animated bounce&quot;);</code>让每个井元素中的第二个孩子反弹。您必须选择具有<code>target</code>类的元素子项。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>target</code>元素中的第二个元素应该反弹。
    testString: assert($(".target:nth-child(2)").hasClass("animated") && $(".target:nth-child(2)").hasClass("bounce"));
  - text: 只有两个元素应该反弹。
    testString: assert($(".animated.bounce").length === 2);
  - text: '您应该使用<code>:nth-child()</code>选择器来修改这些元素。'
    testString: assert(code.match(/\:nth-child\(/g));
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(code.match(/\$\(".target:nth-child\(2\)"\)/g) || code.match(/\$\('.target:nth-child\(2\)'\)/g) || code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) || code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g));

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
