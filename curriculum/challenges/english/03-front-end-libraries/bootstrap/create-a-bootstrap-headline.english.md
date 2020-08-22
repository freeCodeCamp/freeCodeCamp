---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
isHidden: false
forumTopicId: 16812
---

## Description
<section id='description'>
Now let's build something from scratch to practice our HTML, CSS and Bootstrap skills.
We'll build a jQuery playground, which we'll soon put to use in our jQuery challenges.
To start with, create an <code>h3</code> element, with the text <code>jQuery Playground</code>.
Color your <code>h3</code> element with the <code>text-primary</code> Bootstrap class, and center it with the <code>text-center</code> Bootstrap class.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should add an <code>h3</code> element to your page.
    testString: assert($("h3") && $("h3").length > 0);
  - text: Your <code>h3</code> element should have a closing tag.
    testString: assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length);
  - text: Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>
    testString: assert($("h3").hasClass("text-primary"));
  - text: Your <code>h3</code> element should be centered by applying the class <code>text-center</code>
    testString: assert($("h3").hasClass("text-center"));
  - text: Your <code>h3</code> element should have the text <code>jQuery Playground</code>.
    testString: assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

</section>
