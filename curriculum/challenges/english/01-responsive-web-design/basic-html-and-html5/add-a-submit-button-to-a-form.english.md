---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
guideUrl: 'https://www.freecodecamp.org/guide/certificates/add-a-submit-button-to-a-form'
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
---

## Description
<section id='description'>
Let's add a <code>submit</code> button to your form. Clicking this button will send the data from your form to the URL you specified with your form's <code>action</code> attribute.
Here's an example submit button:
<code>&#60;button type="submit"&#62;this button submits the form&#60;/button&#62;</code>
</section>

## Instructions
<section id='instructions'>
Add a button as the last element of your <code>form</code> element with a type of <code>submit</code>, and "Submit" as its text.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your form should have a button inside it.
    testString: assert($("form").children("button").length > 0, 'Your form should have a button inside it.');
  - text: Your submit button should have the attribute <code>type</code> set to <code>submit</code>.
    testString: assert($("button").attr("type") === "submit", 'Your submit button should have the attribute <code>type</code> set to <code>submit</code>.');
  - text: Your submit button should only have the text "Submit".
    testString: assert($("button").text().match(/^\s*submit\s*$/gi), 'Your submit button should only have the text "Submit".');
  - text: Make sure your <code>button</code> element has a closing tag.
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'Make sure your <code>button</code> element has a closing tag.');

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
  <form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

<div id='html-seed'>

```js
// solution required
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
    <button type="submit">Submit</button>
  </form>
</main>
```
  
</div>
</section>
