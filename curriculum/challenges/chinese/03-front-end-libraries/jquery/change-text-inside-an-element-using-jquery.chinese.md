---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: 使用jQuery更改元素内的文本
---

## Description
<section id="description">使用jQuery，您可以更改元素的开始和结束标记之间的文本。您甚至可以更改HTML标记。 jQuery有一个名为<code>.html()</code>的函数，它允许您在元素中添加HTML标记和文本。之前在元素中的任何内容都将完全替换为您使用此功能提供的内容。以下是重写和强调标题文本的方法： <code>$(&quot;h3&quot;).html(&quot;&lt;em&gt;jQuery Playground&lt;/em&gt;&quot;);</code> jQuery也有一个类似的函数<code>.text()</code> ，它只改变文本而不添加标签。换句话说，此函数不会评估传递给它的任何HTML标记，而是将其视为要替换现有内容的文本。通过强调其文本来更改id为<code>target4</code>的按钮。查看此<a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/em" target="_blank">链接</a>以了解有关<code>&lt;i&gt;</code>和<code>&lt;em&gt;</code>之间的区别及其用途的更多信息。请注意，虽然<code>&lt;i&gt;</code>标签传统上一直用于强调文本，但它已被合并用作图标标签。 <code>&lt;em&gt;</code>标签现在被广泛接受为强调标签。两者都可以应对这一挑战。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 通过添加HTML标记强调<code>target4</code>按钮中的文本。
    testString: assert.isTrue((/<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi).test($("#target4").html()));
  - text: 确保文本不变。
    testString: assert($("#target4") && $("#target4").text().trim() === '#target4');
  - text: 不要改变任何其他文字。
    testString: assert.isFalse((/<em>|<i>/gi).test($("h3").html()));
  - text: 确保使用<code>.html()</code>而不是<code>.text()</code> 。
    testString: assert(code.match(/\.html\(/g));
  - text: 确保使用jQuery选择<code>button id=&quot;target4&quot;</code> 。
    testString: assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
