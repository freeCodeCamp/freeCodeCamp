---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
---

## Description
<section id='description'>
Forms commonly use <dfn>checkboxes</dfn> for questions that may have more than one answer.
Checkboxes are a type of <code>input</code>.
Each of your checkboxes can be nested within its own <code>label</code> element. By wrapping an <code>input</code> element inside of a <code>label</code> element it will automatically associate the checkbox input with the label element surrounding it.
All related checkbox inputs should have the same <code>name</code> attribute.
It is considered best practice to explicitly define the relationship between a checkbox <code>input</code> and its corresponding <code>label</code> by setting the <code>for</code> attribute on the <code>label</code> element to match the <code>id</code> attribute of the associated <code>input</code> element.
Here's an example of a checkbox:
<code>&#60;label for="loving"&#62;&#60;input id="loving" type="checkbox" name="personality"&#62; Loving&#60;/label&#62;</code>
</section>

## Instructions
<section id='instructions'>
Add to your form a set of three checkboxes. Each checkbox should be nested within its own <code>label</code> element. All three should share the <code>name</code> attribute of <code>personality</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your page should have three checkbox elements.
    testString: assert($('input[type="checkbox"]').length > 2);
  - text: Each of your three checkbox elements should be nested in its own <code>label</code> element.
    testString: assert($('label > input[type="checkbox"]:only-child').length > 2);
  - text: Make sure each of your <code>label</code> elements has a closing tag.
    testString: assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length);
  - text: Your checkboxes should be given the <code>name</code> attribute of <code>personality</code>.
    testString: assert($('label > input[type="checkbox"]').filter('[name="personality"]').length > 2);
  - text: Each of your checkboxes should be added within the <code>form</code> tag.
    testString: assert($('label').parent().get(0).tagName.match('FORM'));
    
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
