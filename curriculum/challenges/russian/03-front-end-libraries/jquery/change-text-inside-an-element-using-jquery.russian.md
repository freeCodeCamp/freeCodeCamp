---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
forumTopicId: 16773
localeTitle: Изменение текста внутри элемента с помощью jQuery
---

## Description
<section id='description'>
Используя jQuery, вы можете изменить текст между начальным и конечным тегами элемента. Вы даже можете изменить разметку HTML. В jQuery есть функция, называемая <code>.html()</code> которая позволяет добавлять HTML-теги и текст внутри элемента. Любое содержимое, ранее содержавшееся в элементе, будет полностью заменено содержимым, которое вы предоставляете, используя эту функцию. Вот как вы могли бы переписать и подчеркнуть текст нашего заголовка: <code>$(&quot;h3&quot;).html(&quot;&lt;em&gt;jQuery Playground&lt;/em&gt;&quot;);</code> jQuery также имеет аналогичную функцию под названием <code>.text()</code> которая изменяет текст без добавления тегов. Другими словами, эта функция не будет оценивать любые теги HTML, переданные ей, но вместо этого будет рассматривать ее как текст, который вы хотите заменить существующим контентом. Измените кнопку с id <code>target4</code> , выделив ее текст. Проверьте эту <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/em" target="_blank">ссылку,</a> чтобы узнать больше о различии между <code>&lt;i&gt;</code> и <code>&lt;em&gt;</code> и их использованием. Обратите внимание, что, хотя <code>&lt;i&gt;</code> традиционно используется для подчеркивания текста, с тех пор он был использован для использования в качестве тега для значков. Тег <code>&lt;em&gt;</code> теперь широко признан тегом для акцента. Либо будет работать для этой задачи.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Emphasize the text in your <code>target4</code> button by adding HTML tags.
    testString: assert.isTrue((/<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi).test($("#target4").html()));
  - text: Make sure the text is otherwise unchanged.
    testString: assert($("#target4") && $("#target4").text().trim() === '#target4');
  - text: Do not alter any other text.
    testString: assert.isFalse((/<em>|<i>/gi).test($("h3").html()));
  - text: Make sure you are using <code>.html()</code> and not <code>.text()</code>.
    testString: assert(code.match(/\.html\(/g));
  - text: Make sure to select <code>button id="target4"</code> with jQuery.
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

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');
  });
</script>

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

</section>
