---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery按类目标元素
---

## Description
<section id="description">您看到我们如何使所有<code>button</code>元素反弹？我们用<code>$(&quot;button&quot;)</code>选择它们，然后我们用<code>.addClass(&quot;animated bounce&quot;);</code>为它们添加了一些CSS类<code>.addClass(&quot;animated bounce&quot;);</code> 。您刚刚使用了jQuery的<code>.addClass()</code>函数，它允许您向元素添加类。首先，让我们使用<code>$(&quot;.well&quot;)</code>选择器将你的<code>div</code>元素与类<code>well</code>对准。请注意，就像CSS声明一样，您键入一个<code>.</code>在课堂名称之前。然后使用jQuery的<code>.addClass()</code>函数中添加类<code>animated</code>和<code>shake</code> 。例如，您可以通过将以下内容添加到<code>document ready function</code>来创建具有类<code>text-primary</code> shake的所有元素： <code>$(&quot;.text-primary&quot;).addClass(&quot;animated shake&quot;);</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用jQuery <code>addClass()</code>函数为类赋予<code>animated</code>并使用类<code>well</code> <code>shake</code>所有元素。
    testString: assert($(".well").hasClass("animated") && $(".well").hasClass("shake"));
  - text: 只使用jQuery将这些类添加到元素中。
    testString: assert(!code.match(/class\.\*animated/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
