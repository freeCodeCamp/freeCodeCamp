---
id: 58c383d33e2e3259241f3076
title: Usare i selettori degli attributi per stilizzare gli elementi
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpymfJ'
forumTopicId: 301092
dashedName: use-attribute-selectors-to-style-elements
---

# --description--

Hai aggiunto gli attributi `id` o `class` agli elementi che desideri stilizzare in modo specifico. Questi sono conosciuti come selettori di id e di classe. Ci sono altri selettori CSS che puoi usare per selezionare gruppi personalizzati di elementi da stilizzare.

Prendiamo di nuovo CatPhotoApp per fare pratica con i selettori CSS.

Per questa sfida, userai il selettore di attributi `[attr=value]` per stilizzare le caselle di spunta in CatPhotoApp. Questo selettore trova e stilizza gli elementi con un valore di attributo specifico. Ad esempio, il codice seguente cambia i margini di tutti gli elementi con l'attributo `type` e un valore corrispondente di `radio`:

```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

# --instructions--

Utilizzando il selettore di attributi `type`, prova a dare alle caselle di spunta in CatPhotoApp un margine superiore di 10px e un margine inferiore di 15px.

# --hints--

Per selezionare le caselle di spunta deve essere utilizzato il selettore di attributo `type`.

```js
assert(
  code.match(
    /<style>[\s\S]*?\[\s*?type\s*?=\s*?("|')checkbox\1\s*?\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi
  )
);
```

I margini superiori delle caselle di spunta dovrebbero essere di 10px.

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginTop') === '10px') {
        count++;
      }
    });
    return count === 3;
  })()
);
```

I margini inferiori delle caselle di spunta dovrebbero essere di 15px.

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginBottom') === '15px') {
        count++;
      }
    });
    return count === 3;
  })()
);
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

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

# --solutions--

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
  [type='checkbox'] {
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
