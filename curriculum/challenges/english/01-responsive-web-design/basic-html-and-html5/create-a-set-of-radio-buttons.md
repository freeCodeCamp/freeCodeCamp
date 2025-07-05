---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

You can use <dfn>radio buttons</dfn> for questions where you want the user to only give you one answer out of multiple options.

Radio buttons are a type of `input`.

Each of your radio buttons can be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the radio button input with the label element surrounding it.

All related radio buttons should have the same `name` attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.

Here's an example of a radio button:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

It is considered best practice to set a `for` attribute on the `label` element, with a value that matches the value of the `id` attribute of the `input` element. This allows assistive technologies to create a linked relationship between the label and the related `input` element. For example:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

We can also nest the `input` element within the `label` tags:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

Add a pair of radio buttons to your form, each nested in its own `label` element. One should have the option of `indoor` and the other should have the option of `outdoor`. Both should share the `name` attribute of `indoor-outdoor` to create a radio group.

# --hints--

Your page should have two `radio` button elements.

```js
assert.lengthOf(document.querySelectorAll('input[type="radio"]'),2);
```

Your radio buttons should be given the `name` attribute of `indoor-outdoor`.

```js
assert.lengthOf([...document.querySelectorAll('input[type="radio"]')].filter(input => input.name === "indoor-outdoor"),2);
```

Each of your two radio button elements should be nested in its own `label` element.

```js
assert.lengthOf(document.querySelectorAll('label > input[type="radio"]:only-child'),2);
```

Each of your `label` elements should have a closing tag.

```js
assert.match(code,/<\/label>/g);
assert.match(code,/<label/g);
assert.strictEqual(code.match(/<\/label>/g).length,code.match(/<label/g).length);
```

One of your radio buttons should have the label `indoor`.

```js
const labelTexts = [...document.querySelectorAll('label')].map(label => label.textContent);
const hasMatch = labelTexts.some(label =>  label.match(/indoor/gi));
assert.isTrue(hasMatch); 
```

One of your radio buttons should have the label `outdoor`.

```js
const labelTexts = [...document.querySelectorAll('label')].map(label => label.textContent);
const hasMatch = labelTexts.some(label => label.match(/outdoor/gi));
assert.isTrue(hasMatch); 
```

Each of your radio button elements should be added within the `form` tag.

```js
const labelParent = document.querySelector('label').parentNode;
assert.strictEqual(labelParent.tagName,'FORM');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>catnip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  
  <p>Things cats love:</p>
  <ul>
    <li>catnip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
   <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
