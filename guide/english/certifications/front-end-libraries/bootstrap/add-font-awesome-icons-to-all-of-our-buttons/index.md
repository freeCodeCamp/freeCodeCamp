---
title: Add Font Awesome Icons to all of our Buttons
---
## Add Font Awesome Icons to all of our Buttons

### Problem Explanation

Use Font Awesome to add an `info-circle` icon to your info button and a `trash` icon to your delete button.

#### Relevant Links:
  - [Font Awesome](https://fontawesome.com/)
  - [Different between Font Awesome v4 and v5](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4)
  
### Hint
* The Font Awesome stylesheet of this page is version 4.5.0, so you should use `fa` prefix instead of new `fas`. Check the [link](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4) to learn more about difference between v4 and new v5.
* Logos and the relevant CSS classes for the logos can be found [here](https://fontawesome.com/icons?d=gallery) .
* Adding a space between the `<i>` tag and the text will give it a nice spacing.

## Spoiler alert!

**Solution ahead!**

### Solution:
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
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i>Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i>Delete</button>
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