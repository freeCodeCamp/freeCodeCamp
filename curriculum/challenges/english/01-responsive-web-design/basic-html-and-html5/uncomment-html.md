---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
---

## Description

<section id='description'>

Commenting is a way that you can leave comments for other developers within your code without affecting the resulting output that is displayed to the end user.

Commenting is also a convenient way to make code inactive without having to delete it entirely.

Comments in HTML start with `<!--` and end with a `-->`

</section>

## Instructions

<section id='instructions'>

Uncomment your `h1`, `h2` and `p` elements.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should be visible on the page by uncommenting it.
    testString: assert($("h1").length > 0);
  - text: Your <code>h2</code> element should be visible on the page by uncommenting it.
    testString: assert($("h2").length > 0);
  - text: Your <code>p</code> element should be visible on the page by uncommenting it.
    testString: assert($("p").length > 0);
  - text: No trailing comment tags should be visible on the page (i.e. <code>--></code>).
    testString: assert(!$('*:contains("-->")')[1]);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

</div>

</section>

## Solution

<section id='solution'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</section>
