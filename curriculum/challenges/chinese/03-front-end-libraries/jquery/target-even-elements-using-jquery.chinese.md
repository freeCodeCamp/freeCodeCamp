---
id: bad87fee1348bd9aed008826
title: Target Even Elements Using jQuery
challengeType: 0

videoUrl: ''
localeTitle: Target Even Elements Using jQuery
---

## Description
<section id='description'>
把 HTML 标签放到另一个级别的标签里，这些 HTML 标签被称为该标签的<code>子标签（children element）</code>。例如，本次挑战中文本为 "#target1"、"#target2" 和 "#target3" 的按钮都是<code>&#60;div class="well" id="left-well"&#62;</code>标签的<code>子标签</code>。
jQuery 有一个<code>children()</code>方法，可以访问被选取标签的子标签。
下面的代码展示了用<code>children()</code>方法把<code>left-well</code>标签的子标签的颜色设置成<code>蓝色（blue）</code>：
<code>$("#left-well").children().css("color", "blue")</code>
</section>

## Instructions
<section id='instructions'>
请把<code>right-well</code>标签的所有子标签颜色设置成<code>橙色（orange）</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有的<code>target</code>标签应该抖动。
    testString: 'assert($(".target:even").hasClass("animated") && $(".target:even").hasClass("shake"), "所有的<code>target</code>标签应该抖动。");'
  - text: 应该用<code>&#58;even</code>选择器修改这些标签。
    testString: 'assert(code.match(/\:even/g), "应该用<code>&#58;even</code>选择器修改这些标签。");'
  - text: 仅用 jQuery 给标签添加类。
    testString: 'assert(code.match(/\$\(".target:even"\)/g) || code.match(/\$\(".target:even"\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g), "仅用 jQuery 给标签添加类。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<script>,  $(document).ready(function() {,    $("#target1").css("color", "red");,    $("#target1").prop("disabled", true);,    $("#target4").remove();,    $("#target2").appendTo("#right-well");,    $("#target5").clone().appendTo("#left-well");,    $("#target1").parent().css("background-color", "red");,    $("#right-well").children().css("color", "orange");,    $("#left-well").children().css("color", "green");,    $(".target:nth-child(2)").addClass("animated bounce");,,  });,</script>,,<!-- 请修改本行以上的代码 -->,,<div class="container-fluid">,  <h3 class="text-primary text-center">jQuery Playground</h3>,  <div class="row">,    <div class="col-xs-6">,      <h4>#left-well</h4>,      <div class="well" id="left-well">,        <button class="btn btn-default target" id="target1">#target1</button>,        <button class="btn btn-default target" id="target2">#target2</button>,        <button class="btn btn-default target" id="target3">#target3</button>,      </div>,    </div>,    <div class="col-xs-6">,      <h4>#right-well</h4>,      <div class="well" id="right-well">,        <button class="btn btn-default target" id="target4">#target4</button>,        <button class="btn btn-default target" id="target5">#target5</button>,        <button class="btn btn-default target" id="target6">#target6</button>,      </div>,    </div>,  </div>,</div>
```





</div>





</section>

              