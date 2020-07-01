---
id: bad87fee1348bd9aec908847
title: Split Your Bootstrap Row
challengeType: 0
isHidden: false
forumTopicId: 18306
---

## Description
<section id='description'>
Now that we have a Bootstrap Row, let's split it into two columns to house our elements.
Create two <code>div</code> elements within your row, both with the class <code>col-xs-6</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Two <code>div class="col-xs-6"</code> elements should be nested within your <code>div class="row"</code> element.
    testString: assert($("div.row > div.col-xs-6").length > 1);
  - text: All your <code>div</code> elements should have closing tags.
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">


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
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```

</section>
