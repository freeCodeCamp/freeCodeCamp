---
id: bad82fee1322bd9aedf08721
title: Comprendere le unità assolute e le unità relative
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

Le ultime sfide impostavano tutte il margine o il riempimento di un elemento con i pixel (`px`). I pixel sono un tipo di unità di lunghezza, che è quello che dice al browser come dimensionare o spaziare un elemento. Oltre a `px`, CSS ha un certo numero di diverse opzioni utilizzabili per le unità di lunghezza.

Le due principali categorie di unità di lunghezza sono assolute e relative. Le unità assolute sono legate alle unità fisiche di lunghezza. Ad esempio, `in` e `mm` si riferiscono rispettivamente a pollici e millimetri. Le unità di lunghezza assoluta approssimano la misura effettiva su uno schermo, ma ci sono alcune differenze a seconda della risoluzione.

Le unità relative, come `em` o `rem`, sono relative ad un altro valore di lunghezza. Per esempio, `em` è basato sulla dimensione del carattere di un elemento. Se lo usi per impostare la proprietà `font-size`, questa è relativa al `font-size` del genitore.

**Nota:** Ci sono diverse opzioni di unità relative che sono legate alla dimensione della viewport (lo schermo). Esse sono spiegate nella sezione Principi di Web Design Responsivo.

# --instructions--

Aggiungi una proprietà `padding` all'elemento con la classe `red-box` e impostala a `1.5em`.

# --hints--

La classe `red-box` dovrebbe avere una proprietà `padding`.

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

La classe `red-box` dovrebbe dare agli elementi 1.5em di `padding`.

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
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
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
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
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
