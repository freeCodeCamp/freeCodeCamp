---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakyZfL'
forumTopicId: 18339
---

## Description
<section id='description'>
One cool thing about <code>id</code> attributes is that, like classes, you can style them using CSS.
However, an <code>id</code> is not reusable and should only be applied to one element. An <code>id</code> also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the <code>id</code> will be applied.
Here's an example of how you can take your element with the <code>id</code> attribute of <code>cat-photo-element</code> and give it the background color of green. In your <code>style</code> element:

```css
#cat-photo-element {
  background-color: green;
}
```

Note that inside your <code>style</code> element, you always reference classes by putting a <code>.</code> in front of their names. You always reference ids by putting a <code>#</code> in front of their names.
</section>

## Instructions
<section id='instructions'>
Try giving your form, which now has the <code>id</code> attribute of <code>cat-photo-form</code>, a green background.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>form</code> element should have the id of <code>cat-photo-form</code>.
    testString: assert($("form").attr("id") === "cat-photo-form");
  - text: Your <code>form</code> element should have the <code>background-color</code> of green.
    testString: assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)");
  - text: Your <code>form</code> element should have an <code>id</code> attribute.
    testString: assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0);
  - text: You should not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.
    testString: assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }

  #cat-photo-form {
    background-color: green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div class="silver-background">
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
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
