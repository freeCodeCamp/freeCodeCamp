---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: 在Bootstrap Wells中添加元素
---

## Description
<section id="description">现在，我们行的每一列都有几个<code>div</code>元素。这是我们需要去的深度。现在我们可以添加我们的<code>button</code>元素。在每个<code>well</code> <code>div</code>元素中嵌套三个<code>button</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在每个<code>div</code>元素中嵌入三个<code>button</code>元素，并且类<code>well</code> 。
    testString: assert($("div.well:eq(0)").children("button").length === 3 && $("div.well:eq(1)").children("button").length === 3);
  - text: 你应该总共有6个<code>button</code>元素。
    testString: assert($("button") && $("button").length > 5);
  - text: 确保所有<code>button</code>元素都有结束标记。
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);

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



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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
