---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
forumTopicId: 16822
---

## Description
<section id='description'>
You can use <dfn>radio buttons</dfn> for questions where you want the user to only give you one answer out of multiple options.
Radio buttons are a type of <code>input</code>.
Each of your radio buttons can be nested within its own <code>label</code> element. By wrapping an <code>input</code> element inside of a <code>label</code> element it will automatically associate the radio button input with the label element surrounding it.
All related radio buttons should have the same <code>name</code> attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.
Here's an example of a radio button:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

It is considered best practice to set a <code>for</code> attribute on the <code>label</code> element, with a value that matches the value of the <code>id</code> attribute of the <code>input</code> element. This allows assistive technologies to create a linked relationship between the label and the child <code>input</code> element. For example:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

</section>

## Instructions
<section id='instructions'>
Add a pair of radio buttons to your form, each nested in its own <code>label</code> element. One should have the option of <code>indoor</code> and the other should have the option of <code>outdoor</code>. Both should share the <code>name</code> attribute of <code>indoor-outdoor</code> to create a radio group.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your page should have two radio button elements.
    testString: assert($('input[type="radio"]').length > 1);
  - text: Your radio buttons should be given the <code>name</code> attribute of <code>indoor-outdoor</code>.
    testString: assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
  - text: Each of your two radio button elements should be nested in its own <code>label</code> element.
    testString: assert($('label > input[type="radio"]:only-child').length > 1);
  - text: Each of your <code>label</code> elements should have a closing tag.
    testString: assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length));
  - text: One of your radio buttons should have the label <code>indoor</code>.
    testString: assert($("label").text().match(/indoor/gi));
  - text: One of your radio buttons should have the label <code>outdoor</code>.
    testString: assert($("label").text().match(/outdoor/gi));
  - text: Each of your radio button elements should be added within the <code>form</code> tag.
    testString: assert($("label").parent().get(0).tagName.match('FORM'));

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
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
