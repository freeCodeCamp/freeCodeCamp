---
id: bad87fee1348bd9aedd08845
title: Add Font Awesome Icons to our Buttons
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css'
    raw: true
challengeType: 0
---

## Description
<section id='description'>
Font Awesome is a convenient library of icons. These icons are vector graphics, stored in the <code>.svg</code> file format. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.
You can include Font Awesome in any app by adding the following code to the top of your HTML:
<code>&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous"&#62;</code>
In this case, we've already added it for you to this page behind the scenes.
The <code>i</code> element was originally used to make other elements italic, but is now commonly used for icons. You can add the Font Awesome classes to the <code>i</code> element to turn it into an icon, for example:
<code>&lt;i class="fa fa-info-circle"&gt;&lt;/i&gt;</code>
Note that the <code>span</code> element is also acceptable for use with icons.
Use Font Awesome to add a <code>thumbs-up</code> icon to your like button by giving it an <code>i</code> element with the classes <code>fa</code> and <code>fa-thumbs-up</code>; make sure to keep the text "Like" next to the icon.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Add an <code>i</code> element with the classes <code>fa</code> and <code>fa-thumbs-up</code>.
  testString: 'assert($("i").is(".fa.fa-thumbs-up") || $("span").is(".fa.fa-thumbs-up"), "Add an <code>i</code> element with the classes <code>fa</code> and <code>fa-thumbs-up</code>.");'
- text: Your <code>fa-thumbs-up</code> icon should be located within the Like button.
  testString: 'assert(($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fa.fa-thumbs-up")) || ($("span.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > span").is(".fa.fa-thumbs-up")), "Your <code>fa-thumbs-up</code> icon should be located within the Like button.");'
- text: Nest your <code>i</code> element within your <code>button</code> element.
  testString: 'assert($("button").children("i").length > 0 || $("button").children("span").length > 0, "Nest your <code>i</code> element within your <code>button</code> element.");'
- text: Make sure your icon element has a closing tag.
  testString: 'assert(code.match(/<\/i>|<\/span>/g), "Make sure your icon element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
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
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
