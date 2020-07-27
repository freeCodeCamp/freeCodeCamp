---
id: bad87fee1348bd9aedf08829
title: Create a Text Field
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/c2EVnf6'
forumTopicId: 16823
---

## Description
<section id='description'>
Now let's create a web form.
<code>input</code> elements are a convenient way to get input from your user.
You can create a text input like this:
<code>&#60;input type="text"&#62;</code>
Note that <code>input</code> elements are self-closing.
</section>

## Instructions
<section id='instructions'>
Create an <code>input</code> element of type <code>text</code> below your lists.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should have an <code>input</code> element of type <code>text</code>.
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
  <form>
	<input type="text">
  </form>
</main>
```

</section>
