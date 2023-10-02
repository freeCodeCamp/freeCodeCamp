---
id: 587d78ae367417b2b2512afd
title: Utilizzare la proprietà flex-basis per impostare la dimensione iniziale di un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

La proprietà `flex-basis` specifica la dimensione iniziale dell'elemento prima che il CSS apporti aggiustamenti con `flex-shrink` o `flex-grow`.

Le unità utilizzate dalla proprietà `flex-basis` sono le stesse delle altre proprietà di dimensione (`px`, `em`, `%`, etc.). Il valore `auto` ridimensiona gli elementi in base al contenuto.

# --instructions--

Imposta la dimensione iniziale dei riquadri usando `flex-basis`. Aggiungi la proprietà CSS `flex-basis` sia a `#box-1` che a `#box-2`. Dai a `#box-1` un valore di `10em` e a `#box-2` un valore di `20em`.

# --hints--

L'elemento `#box-1` dovrebbe avere la proprietà `flex-basis`.

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

L'elemento `#box-1` dovrebbe avere un valore `flex-basis` di `10em`.

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

L'elemento `#box-2` dovrebbe avere la proprietà `flex-basis`.

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

L'elemento `#box-2` dovrebbe avere un valore `flex-basis` di `20em`.

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
