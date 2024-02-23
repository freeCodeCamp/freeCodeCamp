---
id: bad87fee1348bd9aedf08808
title: Specificare in che modo i caratteri devono degradare
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

Esistono diversi caratteri predefiniti disponibili in tutti i browser. Queste famiglie generiche di caratteri includono `monospace`, `serif` e `sans-serif`.

Quando un carattere non è disponibile, puoi dire al browser di "degradare" a un altro carattere.

Ad esempio, se desideri che un elemento utilizzi il carattere `Helvetica`, ma degradi al carattere `sans-serif` quando `Helvetica` non è disponibile, lo specificherai come segue:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

I nomi delle famiglie di caratteri generici non fanno distinzione tra maiuscole e minuscole. Inoltre, non hanno bisogno di virgolette perché sono parole chiave CSS.

# --instructions--

Per iniziare, applica il carattere `monospace` all'elemento `h2`, in modo che ora abbia due caratteri: `Lobster` e `monospace`.

Nell'ultima sfida, hai importato il carattere `Lobster` utilizzando il tag `link`. Ora commenta l'importazione del carattere `Lobster` (utilizzando i commenti HTML che hai imparato in precedenza) da Google Fonts in modo che non sia più disponibile. Nota come il tuo elemento `h2` degrada al carattere `monospace`.

**Nota:** se hai il carattere `Lobster` installato sul tuo computer, non vedrai il degrado perché il tuo browser sarà comunque in grado di trovare il carattere.

# --hints--

Il tuo elemento h2 dovrebbe usare il carattere `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

Il tuo elemento h2 dovrebbe degradare al carattere `monospace` quando `Lobster` non è disponibile.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

Dovresti commentare la tua chiamata a Google per il carattere `Lobster` inserendo `<!--` davanti.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

Dovresti chiudere il tuo commento aggiungendo `-->`.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --seed--

## --seed-contents--

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
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
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
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
