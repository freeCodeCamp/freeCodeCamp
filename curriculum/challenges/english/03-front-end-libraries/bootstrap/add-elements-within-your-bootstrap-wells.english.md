---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
isHidden: false
forumTopicId: 16636
---

## Description
<section id='description'>
Now we're several <code>div</code> elements deep on each column of our row. This is as deep as we'll need to go. Now we can add our <code>button</code> elements.
Nest three <code>button</code> elements within each of your <code>well</code> <code>div</code> elements.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Three <code>button</code> elements should be nested within each of your <code>div</code> elements with class <code>well</code>.
    testString: assert($("div.well:eq(0)").children("button").length === 3 && $("div.well:eq(1)").children("button").length === 3);
  - text: You should have a total of 6 <code>button</code> elements.
    testString: assert($("button") && $("button").length > 5);
  - text: All of your <code>button</code> elements should have closing tags.
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

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
```

</section>
