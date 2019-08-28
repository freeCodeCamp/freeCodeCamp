---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18322
localeTitle: Цель одного и того же элемента с несколькими селекторами jQuery
---

## Description
<section id='description'>
Теперь вы знаете три способа таргетинга элементов: по типу: <code>$(&quot;button&quot;)</code> , по классу: <code>$(&quot;.btn&quot;)</code> и по id <code>$(&quot;#target1&quot;)</code> . Хотя можно добавить несколько классов в один <code>.addClass()</code> , давайте добавим их в один и тот же элемент <em>тремя разными способами</em> . Используя <code>.addClass()</code> , добавьте только один класс за один раз к одному и тому же элементу, тремя разными способами: добавьте <code>animated</code> класс ко всем элементам с <code>button</code> типа. Добавьте класс <code>shake</code> ко всем кнопкам с классом <code>.btn</code> . Добавьте <code>btn-primary</code> к кнопке с идентификатором <code>#target1</code> . <strong>Заметка</strong> <br> Вы должны ориентироваться только на один элемент и одновременно добавлять только один класс. В целом, ваши три отдельных селектора в конечном итоге <code>btn-primary</code> три класса <code>shake</code> , <code>animated</code> и <code>btn-primary</code> в <code>#target1</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use the <code>$&#40"button"&#41</code> selector.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
  - text: Use the <code>$&#40".btn"&#41</code> selector.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
  - text: Use the <code>$&#40"#target1"&#41</code> selector.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
  - text: Only add one class with each of your three selectors.
    testString: assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2);
  - text: Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.
    testString: assert($('#target1').hasClass('animated') && $('#target1').hasClass('shake') && $('#target1').hasClass('btn-primary'));
  - text: Only use jQuery to add these classes to the element.
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

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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

</section>
