---
id: bad87fee1348bd9aecf08806
title: Usare una classe CSS per stilizzare un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Le classi sono stili riutilizzabili che possono essere aggiunti agli elementi HTML.

Ecco un esempio di dichiarazione di classe CSS:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Puoi vedere che abbiamo creato una classe CSS chiamata `blue-text` all'interno del tag `<style>`. Puoi applicare una classe a un elemento HTML in questo modo: `<h2 class="blue-text">CatPhotoApp</h2>`. Nota che nel tuo elemento CSS `style`, i nomi delle classi iniziano con un punto. Nell'attributo di classe degli elementi HTML, il nome della classe non include il punto.

# --instructions--

All'interno del tuo elemento `style`, modifica il selettore `h2` in `.red-text` ed aggiorna il valore del colore da `blue` a `red`.

Dai al tuo elemento `h2` l'attributo `class` con un valore `red-text`.

# --hints--

Il tuo elemento `h2` dovrebbe essere rosso.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Il tuo elemento `h2` dovrebbe avere la classe `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

Il tuo foglio di stile dovrebbe dichiarare una classe `red-text` e avere il suo colore impostato su `red`.

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

Non dovresti usare dichiarazioni di stile in linea come `style="color: red"` nel tuo elemento `h2`.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
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

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
