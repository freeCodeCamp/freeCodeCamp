---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> ترى كيف يمكننا جعل كل من لديك <code>button</code> عناصر ترتد؟ لقد اخترناها بـ <code>$(&quot;button&quot;)</code> ، ثم أضفنا بعض فئات CSS إليها باستخدام <code>.addClass(&quot;animated bounce&quot;);</code> . لقد استخدمت للتو وظيفة <code>.addClass()</code> jQuery&#39;s ، والتي تسمح لك بإضافة فئات إلى العناصر. أولاً ، دعنا نستهدف عناصر <code>div</code> مع الفصل <code>well</code> باستخدام محدد <code>$(&quot;.well&quot;)</code> . لاحظ أنه مثلما هو الحال مع إعلانات CSS ، فإنك تكتب a <code>.</code> قبل اسم الفصل. ثم استخدم مسج ل <code>.addClass()</code> وظيفة لإضافة فئات <code>animated</code> و <code>shake</code> . على سبيل المثال ، يمكنك جعل جميع العناصر ذات اهتزاز <code>text-primary</code> عن طريق إضافة ما يلي إلى <code>document ready function</code> : <code>$(&quot;.text-primary&quot;).addClass(&quot;animated shake&quot;);</code> </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($(".well").hasClass("animated") && $(".well").hasClass("shake"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>shake</code> to all your elements with the class <code>well</code>.");'
  - text: استخدم jQuery فقط لإضافة هذه الفئات إلى العنصر.
    testString: 'assert(!code.match(/class\.\*animated/g), "Only use jQuery to add these classes to the element.");'

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
</section>
