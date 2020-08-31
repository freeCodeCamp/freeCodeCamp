---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/cb6k8Cb'
forumTopicId: 18244
---

## Description
<section id='description'>

You can nest links within other text elements.

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

Let's break down the example:
Normal text is wrapped in the <code>p</code> element:<br> <code>&#60;p&#62; Here's a ... for you to follow. &#60;/p&#62;</code>
Next is the <i>anchor</i> element <code>&#60;a&#62;</code> (which requires a closing tag <code>&#60;/a&#62;</code>):<br>  <code>&#60;a&#62; ... &#60;/a&#62;</code>
<code>target</code> is an anchor tag attribute that specifies where to open the link and the value <code>"_blank"</code> specifies to open the link in a new tab
<code>href</code> is an anchor tag attribute that contains the URL address of the link:<br>  `<a href="http://freecodecamp.org"> ... </a>`
The text, <strong>"link to freecodecamp.org"</strong>, within the <code>a</code> element called <code>anchor text</code>, will display a link to click:<br>  <code>&#60;a href=" ... "&#62;link to freecodecamp.org&#60;/a&#62;</code>
The final output of the example will look like this:<br><p>Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.</p>
</section>

## Instructions
<section id='instructions'>

Nest the existing <code>a</code> element within a new <code>p</code> element. The new paragraph should have text that says "View more cat photos", where "cat photos" is a link, and the rest is plain text.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have an <code>a</code> element that links to "https://freecatphotoapp.com".
    testString: assert(($("a[href=\"https://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0));
  - text: Your <code>a</code> element should have the anchor text of "cat photos"
    testString: assert($("a").text().match(/cat\sphotos/gi));
  - text: You should create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.
    testString: assert($("p") && $("p").length > 2);
  - text: Your <code>a</code> element should be nested within your new <code>p</code> element.
    testString: assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")));
  - text: Your <code>p</code> element should have the text "View more " (with a space after it).
    testString: assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)));
  - text: Your <code>a</code> element should <em>not</em> have the text "View more".
    testString: assert(!$("a").text().match(/View\smore/gi));
  - text: Each of your <code>p</code> elements should have a closing tag.
    testString: assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);
  - text: Each of your <code>a</code> elements should have a closing tag.
    testString: assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

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
  <p>View more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a></p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
