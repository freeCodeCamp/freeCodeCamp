---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
---

## Description
<section id='description'>
HTML5 introduces more descriptive HTML tags. These include <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>video</code>, <code>article</code>, <code>section</code> and others.
These tags give a descriptive structure to your HTML, make your HTML easier to read, and help with Search Engine Optimization (SEO) and accessibility. The <code>main</code> HTML5 tag helps search engines and other developers find the main content of your page.
Example usage, a <code>main</code> element with two child elements nested inside it:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

<strong>Note:</strong> Many of the new HTML5 tags and their benefits are covered in the Applied Accessibility section.
</section>

## Instructions
<section id='instructions'>
Create a second <code>p</code> element after the existing <code>p</code> element with the following kitty ipsum text: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code>
Then, create a <code>main</code> element and nest the two <code>p</code> elements inside the <code>main</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have 2 <code>p</code> elements with Kitty Ipsum text.
    testString: assert($("p").length > 1);
  - text: Each of your <code>p</code> elements should have a closing tag.
    testString: assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);
  - text: Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.
    testString: assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()));
  - text: Your code should have one <code>main</code> element.
    testString: assert($('main').length === 1);
  - text: The <code>main</code> element should have two paragraph elements as children.
    testString: assert($("main").children("p").length === 2);
  - text: The opening <code>main</code> tag should come before the first paragraph tag.
    testString: assert(code.match(/<main>\s*?<p>/g));
  - text: The closing <code>main</code> tag should come after the second closing paragraph tag.
    testString: assert(code.match(/<\/p>\s*?<\/main>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
