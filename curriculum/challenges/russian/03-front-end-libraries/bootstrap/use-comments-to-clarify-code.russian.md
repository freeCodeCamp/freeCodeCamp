---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
forumTopicId: 18347
localeTitle: Использовать комментарии для уточнения кода
---

## Description
<section id='description'>
Когда мы начнем использовать jQuery, мы изменим HTML-элементы без необходимости их изменения в HTML. Давайте убедиться, что все знают, что они не должны фактически изменять какой-либо из этого кода напрямую. Помните, что вы можете начинать комментарий с <code>&lt;!--</code> и заканчивать комментарий с помощью <code>--&gt;</code> Добавить комментарий в верхней части вашего HTML, который говорит <code>Only change code above this line.</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Start a comment with <code>&#60;!--</code> at the top of your HTML.
    testString: assert(code.match(/^\s*<!--/));
  - text: Your comment should have the text <code>Only change code above this line</code>.
    testString: assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
  - text: Be sure to close your comment with <code>--&#62;</code>.
    testString: assert(code.match(/-->.*\n+.+/g));
  - text: You should have the same number of comment openers and closers.
    testString: assert(code.match(/<!--/g).length === code.match(/-->/g).length);

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
