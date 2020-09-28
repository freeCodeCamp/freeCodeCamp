---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cDKVPuv'
forumTopicId: 16814
---

## Description
<section id='description'>
HTML has a special element for creating <dfn>unordered lists</dfn>, or bullet point style lists.
Unordered lists start with an opening <code>&#60;ul&#62;</code> element, followed by any number of <code>&#60;li&#62;</code> elements. Finally, unordered lists close with a <code>&#60;/ul&#62;</code>
For example:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

would create a bullet point style list of "milk" and "cheese".
</section>

## Instructions
<section id='instructions'>
Remove the last two <code>p</code> elements and create an unordered list of three things that cats love at the bottom of the page.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create a <code>ul</code> element.
    testString: assert($("ul").length > 0);
  - text: You should have three <code>li</code> elements within your <code>ul</code> element.
    testString: assert($("ul li").length > 2);
  - text: Your <code>ul</code> element should have a closing tag.
    testString: assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length);
  - text: Your <code>li</code> elements should have closing tags.
    testString: assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length);
  - text: Your <code>li</code> elements should not contain an empty string or only white-space.
    testString: assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>
```

</section>
