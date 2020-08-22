---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: 使用多个jQuery选择器定位相同的元素
---

## Description
<section id="description">现在你知道三种定位元素的方法：按类型： <code>$(&quot;button&quot;)</code> ，按类： <code>$(&quot;.btn&quot;)</code>和id <code>$(&quot;#target1&quot;)</code> 。虽然可以在单个<code>.addClass()</code>调用中添加多个类，但是让我们以<em>三种不同的方式</em>将它们添加到同一个元素中。使用<code>.addClass()</code> ，一次只向同一个元素添加一个类，有三种不同的方式：使用类型<code>button</code>将<code>animated</code>类添加到所有元素。使用类<code>.btn</code>将<code>shake</code>类添加到所有按钮。将<code>btn-primary</code>类添加到id为<code>#target1</code>的按钮。 <strong>注意</strong> <br>您应该只定位一个元素，一次只添加一个类。总而言之，您的三个选择器最终会将三个类<code>shake</code> ， <code>animated</code>和<code>btn-primary</code>到<code>#target1</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用<code>$(&quot;button&quot;)</code>选择器。
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
  - text: 使用<code>$(&quot;.btn&quot;)</code>选择器。
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
  - text: '使用<code>$(&quot;#target1&quot;)</code>选择器。'
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
  - text: 只为每个三个选择器添加一个类。
    testString: assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2);
  - text: '你的<code>#target1</code>元素应该有<code>animated</code>类， <code>shake</code>和<code>btn-primary</code> 。'
    testString: assert($('#target1').hasClass('animated') && $('#target1').hasClass('shake') && $('#target1').hasClass('btn-primary'));
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
