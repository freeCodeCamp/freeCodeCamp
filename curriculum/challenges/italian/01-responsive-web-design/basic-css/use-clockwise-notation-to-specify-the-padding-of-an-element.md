---
id: bad87fee1348bd9aedf08826
title: Usare la notazione in senso orario per specificare il padding di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

Invece di specificare il `padding-top`, `padding-right`, `padding-bottom`, e `padding-left` di un elemento individualmente, è possibile specificarli tutti in una riga come la seguente:

```css
padding: 10px 20px 10px 20px;
```

Questi quattro valori funzionano come un orologio: in alto, a destra, in basso, a sinistra, e produrranno lo stesso risultato delle istruzioni di padding specifiche per i singoli lati.

# --instructions--

Usa la notazione in senso orario per dare alla classe `.blue-box` un `padding` di `40px` nei suoi lati superiore e sinistro, ma di soli `20px` sul lato inferiore e destro.

# --hints--

La tua classe `blue-box` dovrebbe dare alla parte superiore degli elementi `40px` di `padding`.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

La tua classe `blue-box` dovrebbe dare al lato destro degli elementi `20px` di `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte inferiore degli elementi `20px` di `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

La tua classe `blue-box` dovrebbe dare alla parte sinistra degli elementi `40px` di `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
```

Dovresti usare la notazione in senso orario per impostare il padding della classe `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
