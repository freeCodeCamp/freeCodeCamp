---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cmQ3Kfa'
---

## Description
<section id='description'>
You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your <code>form</code> element.
For example:
<code>&#60;form action="/url-where-you-want-to-submit-form-data"&#62;&#60;/form&#62;</code>
</section>

## Instructions
<section id='instructions'>
Nest your text field inside a <code>form</code> element, and add the <code>action="/submit-cat-photo"</code> attribute to the form element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nest your text input element within a <code>form</code> element.
    testString: assert($("form") && $("form").children("input") && $("form").children("input").length > 0);
  - text: Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>/submit-cat-photo</code>
    testString: assert($("form").attr("action") === "/submit-cat-photo");
  - text: Make sure your <code>form</code> element has well-formed open and close tags.
    testString: assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length);

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

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
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
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
</main>
```

</section>
