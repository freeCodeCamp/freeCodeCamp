---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
videoUrl:
localTitle: Elementlerinizin Çevresine Kenarlıklar Ekleyin
---

## Tanım
<section id='description'>
CSS sınırları <code>style</code>, <code>color</code> ve <code>width</code> gibi özelliklere sahiptir. 
Örneğin, bir HTML öğesinin etrafında kırmızı, 5 piksel kenarlık oluşturmak istiyorsak, bu sınıfı kullanabiliriz.

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

</section>

## Talimatlar
<section id='instructions'>
<code>thick-green-border</code> denilen bir sınıf oluşturun. 
Bu sınıf, bir HTML öğesinin etrafına 10 piksel, düz, yeşil kenarlık eklemelidir. Sınıfı kedi fotoğrafınıza uygulayın. 
Her bir sınıf adını bir boşlukla ayırarak, <code>class</code> niteliğini kullanarak bir öğeye birden çok sınıf uygulayabileceğinizi unutmayın. Örneğin: <code>&lt;img class="class1 class2"&gt;</code>
</section>

## Testler
<section id='tests'>

```yml
tests:
  - text: <code>img</code> elementin class <code>smaller-image</code> classına sahip olmalıdır.
    testString: assert($("img").hasClass("smaller-image"));
  - text: <code>img</code> elementin <code>thick-green-border</code> classına sahip olmalıdır.
    testString: assert($("img").hasClass("thick-green-border"));
  - text: Fotoğrafına <code>10px</code> boyutunda bir sınır ver.
    testString: assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12);
  - text: Fotoğrafına <code>solid</code> stilinde bir sınır ver.
    testString: assert($("img").css("border-right-style") === "solid");
  - text: <code>img</code> elementinin etrafındaki sınır yeşil olmalıdır.
    testString: assert($("img").css("border-left-color") === "rgb(0, 128, 0)");

```

</section>

## Meydan Okuma
<section id='challengeSeed'>

<div id='html-seed'>

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

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Daha fazla <a href="#">kedi fotoğrafları</a> görüntülemek için buraya tıklayın.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Kedilerin sevdiği şeyler:</p>
    <ul>
      <li>kedi nanesi</li>
      <li>lazer işaretleyici</li>
      <li>lazanya</li>
    </ul>
    <p>Kedilerin en sevmediği 3 şey:</p>
    <ol>
      <li>pire tedavisi</li>
      <li>gök gürültüsü</li>
      <li>diğer kediler</li>
    </ol>
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Ev içi</label>
    <label><input type="radio" name="indoor-outdoor"> Dışarısı</label><br>
    <label><input type="checkbox" name="personality" checked> Sevimli</label>
    <label><input type="checkbox" name="personality"> Tembel</label>
    <label><input type="checkbox" name="personality"> Enerjik</label><br>
    <input type="text" placeholder="kedi fotoğrafı URL'i" required>
    <button type="submit">Onayla</button>
  </form>
</main>
```

</div>

</section>

## Çözüm
<section id='solution'>

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

  .smaller-image {
    width: 100px;
  }

  .thick-green-border {
    border-width: 10px;
    border-color: green;
    border-style: solid;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Daha fazla <a href="#">kedi fotoğrafları</a> görüntülemek için buraya tıklayın.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Kedilerin sevdiği şeyler:</p>
    <ul>
      <li>kedi nanesi</li>
      <li>lazer işaretleyici</li>
      <li>lazanya</li>
    </ul>
    <p>Kedilerin en sevmediği 3 şey:</p>
    <ol>
      <li>pire tedavisi</li>
      <li>gök gürültüsü</li>
      <li>diğer kediler</li>
    </ol>
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Ev içi</label>
    <label><input type="radio" name="indoor-outdoor"> Dışarısı</label><br>
    <label><input type="checkbox" name="personality" checked> Sevimli</label>
    <label><input type="checkbox" name="personality"> Tembel</label>
    <label><input type="checkbox" name="personality"> Enerjik</label><br>
    <input type="text" placeholder="kedi fotoğrafı URL'i" required>
    <button type="submit">Onayla</button>
  </form>
</main>
```

</section>
