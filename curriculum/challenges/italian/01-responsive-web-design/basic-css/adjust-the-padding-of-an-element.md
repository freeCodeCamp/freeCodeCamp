---
id: bad88fee1348bd9aedf08825
title: Regolare il padding di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

Ora mettiamo da parte per un po' la nostra Cat Photo App e impariamo di più sugli stili in HTML.

Potresti averlo già notato, ma tutti gli elementi HTML sono essenzialmente piccoli rettangoli.

Tre importanti proprietà controllano lo spazio che circonda ogni elemento HTML: `padding`, `border` e `margin`.

Un elemento `padding` controlla la quantità di spazio tra il contenuto dell'elemento e il suo `border`.

Qui possiamo vedere che il riquadro blu e quello rosso sono annidati all'interno del riquadro giallo. Si noti che il riquadro rosso ha più `padding` di quello blu.

Quando aumenti il `padding` del riquadro blu, aumenterà la distanza (`padding`) tra il testo e il bordo attorno ad esso.

# --instructions--

Cambia il `padding` del riquadro blu per farlo corrispondere a quello del riquadro rosso.

# --hints--

La tua classe `blue-box` dovrebbe dare agli elementi `20px` di `padding`.

```js
assert($('.blue-box').css('padding-top') === '20px');
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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
