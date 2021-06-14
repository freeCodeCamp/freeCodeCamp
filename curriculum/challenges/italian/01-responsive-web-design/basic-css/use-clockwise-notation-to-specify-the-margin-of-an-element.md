---
id: bad87fee1348bd9afdf08726
title: Usare la notazione in senso orario per specificare il margine di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Proviamo di nuovo, ma con `margin` questa volta.

Invece di specificare il `margin-top`, `margin-right`, `margin-bottom`, e `margin-left` di un elemento individualmente, è possibile specificarli tutti in una riga, come in questo esempio:

```css
margin: 10px 20px 10px 20px;
```

Questi quattro valori funzionano come un orologio: in alto, a destra, in basso, a sinistra, e produrranno lo stesso risultato delle istruzioni specifiche per i singoli lati.

# --instructions--

Usa la notazione in senso orario per dare all'elemento con la classe `blue-box` un margine di `40px` sul suo lato superiore e sinistro, ma di soli `20px` sul suo lato inferiore e destro.

# --hints--

La tua classe `blue-box` dovrebbe dare alla parte superiore degli elementi `40px` di `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

La tua classe `blue-box` dovrebbe dare alla parte destra degli elementi `20px` di `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte inferiore degli elementi `20px` di `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte sinistra degli elementi `40px` di `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

Dovresti usare la notazione in senso orario per impostare il margine della classe `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
