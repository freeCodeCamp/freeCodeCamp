---
id: 5c6c06847491271903d37cfd
title: Use the value attribute with Radio Buttons and Checkboxes
challengeType: 0
isHidden: false
forumTopicId: 301099
---

## Description
<section id='description'>
When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type <code>radio</code> and <code>checkbox</code> report their values from the <code>value</code> attribute.

For example:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```


Here, you have two <code>radio</code> inputs. When the user submits the form with the <code>indoor</code> option selected, the form data will include the line: <code>indoor-outdoor=indoor</code>. This is from the <code>name</code> and <code>value</code> attributes of the "indoor" input.

If you omit the <code>value</code> attribute, the submitted form data uses the default value, which is <code>on</code>. In this scenario, if the user clicked the "indoor" option and submitted the form, the resulting form data would be <code>indoor-outdoor=on</code>, which is not useful. So the <code>value</code> attribute needs to be set to something to identify the option.
</section>

## Instructions
<section id='instructions'>
Give each of the <code>radio</code> and <code>checkbox</code> inputs the <code>value</code> attribute. Use the input label text, in lowercase, as the value for the attribute.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: One of your radio buttons should have the <code>value</code> attribute of <code>indoor</code>.
    testString: assert($('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']").length > 0);
  - text: One of your radio buttons should have the <code>value</code> attribute of <code>outdoor</code>.
    testString: assert($('label:contains("Outdoor") > input[type="radio"]').filter("[value='outdoor']").length > 0);
  - text: One of your checkboxes should have the <code>value</code> attribute of <code>loving</code>.
    testString: assert($('label:contains("Loving") > input[type="checkbox"]').filter("[value='loving']").length > 0);
  - text: One of your checkboxes should have the <code>value</code> attribute of <code>lazy</code>.
    testString: assert($('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']").length > 0);
  - text: One of your checkboxes should have the <code>value</code> attribute of <code>energetic</code>.
    testString: assert($('label:contains("Energetic") > input[type="checkbox"]').filter("[value='energetic']").length > 0);
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
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
