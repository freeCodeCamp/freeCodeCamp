---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
forumTopicId: 18198
---

## Description
<section id='description'>
Now let's make sure all the content on your page is mobile-responsive.
Let's nest your <code>h3</code> element within a <code>div</code> element with the class <code>container-fluid</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>div</code> element should have the class <code>container-fluid</code>.
    testString: assert($("div").hasClass("container-fluid"));
  - text: Each of your <code>div</code> elements should have closing tags.
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);
  - text: Your <code>h3</code> element should be nested inside a <code>div</code> element.
    testString: assert($("div").children("h3").length >0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>


```

</div>



</section>

## Solution
<section id='solution'>

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```

</section>
