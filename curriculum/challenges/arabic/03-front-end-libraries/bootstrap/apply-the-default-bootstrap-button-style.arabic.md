---
id: bad87fee1348bd9aec908850
title: Apply the Default Bootstrap Button Style
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> يحتوي Bootstrap فئة زر آخر يسمى <code>btn-default</code> . قم <code>btn</code> فئات <code>btn</code> و <code>btn-default</code> على كل عنصر من عناصر <code>button</code> الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم <code>btn</code> فئة <code>btn</code> على كل عنصر من عناصر <code>button</code> الخاص بك.
    testString: 'assert($(".btn").length > 5, "Apply the <code>btn</code> class to each of your <code>button</code> elements.");'
  - text: قم <code>btn-default</code> فئة <code>btn-default</code> على كل عنصر من عناصر <code>button</code> الخاص بك.
    testString: 'assert($(".btn-default").length > 5, "Apply the <code>btn-default</code> class to each of your <code>button</code> elements.");'

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
