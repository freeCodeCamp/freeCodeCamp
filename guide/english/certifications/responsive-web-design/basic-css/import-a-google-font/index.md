---
title: Import a Google Font
---
## Import a Google Font
The below example shows one of the ways in which you can import and use a Google Font.
The example uses a link to the font's API, in the ```<head>``` of the HTML document rather than in the CSS.

To browse through other fonts offered by Google, please check [Google Fonts](https://fonts.google.com "Google Fonts") 

To look at what is going on behind a font, you can open the URL for the font.
We have used the _Lobster_ font, [click here](https://fonts.googleapis.com/css?family=Lobster) to have a look at what's going on under-the-hood for the _Lobster_ font 

### Solution

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
  .red-text {
    color: red;
  }
  h2 {
    font-family: Lobster;
  }
  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div>
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
  
  <form action="/submit-cat-photo">
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

#### More Information
* [Developers Google - Getting Started with the Google Fonts API](https://developers.google.com/fonts/docs/getting_started)
* [Google Fonts](https://fonts.google.com/)\
* [How to use Google Fonts](https://www.w3schools.com/howto/howto_google_fonts.asp)
* [Another way of importing font: using @font-face](https://css-tricks.com/snippets/css/using-font-face/)
* [Don't just copy the fonts out of Google Fonts URLs](https://css-tricks.com/dont-just-copy-the-font-face-out-of-google-fonts-urls/)
