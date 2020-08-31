---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
---

## Description
<section id='description'>
Placeholder text is what is displayed in your <code>input</code> element before your user has inputted anything.
You can create placeholder text like so:
<code>&#60;input type="text" placeholder="this is placeholder text"&#62;</code><br>
<strong>Note:</strong> Remember that <code>input</code> elements are self-closing.
</section>

## Instructions
<section id='instructions'>
Set the <code>placeholder</code> value of your text <code>input</code> to "cat photo URL".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should add a <code>placeholder</code> attribute to the existing text <code>input</code> element.
    testString: assert($("input[placeholder]").length > 0);
  - text: You should set the value of your placeholder attribute to <code>cat photo URL</code>.
    testString: assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi));
  - text: The finished <code>input</code> element should not have a closing tag.
    testString: assert(!code.match(/<input.*\/?>.*<\/input>/gi));
  - text: The finished <code>input</code> element should have valid syntax.
    testString: assert($("input[type=text]").length > 0);
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
  <input type="text">
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
  <input type="text" placeholder="cat photo URL">
</main>
```

</section>
