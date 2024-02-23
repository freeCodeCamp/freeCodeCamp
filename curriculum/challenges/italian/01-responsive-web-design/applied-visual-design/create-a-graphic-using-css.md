---
id: 587d78a6367417b2b2512add
title: Creare una grafica usando CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

Gestendo diversi selettori e proprietà, è possibile creare forme interessanti. Una delle più facili da provare è la forma a mezzaluna. Per questa sfida devi lavorare con la proprietà `box-shadow`, che imposta l'ombra di un elemento, e con la proprietà `border-radius` che controlla l'arrotondamento degli angoli dell'elemento.

Creerai un oggetto rotondo trasparente con un'ombra netta leggermente sfalsata sul lato - l'ombra sarà la forma della luna che vedi.

Per creare un oggetto rotondo, la proprietà `border-radius` dovrebbe essere impostata su un valore del 50%.

Potresti ricordare da una sfida precedente che la proprietà `box-shadow` richiede dei valori per `offset-x`, `offset-y`, `blur-radius`, `spread-radius`, e un valore per `color`, in quest'ordine. I valori `blur-radius` e `spread-radius` sono opzionali.

# --instructions--

Manipola l'elemento quadrato nell'editor per creare la forma della luna. Innanzitutto, cambia il `background-color` con `transparent`, quindi imposta la proprietà `border-radius` al 50% per rendere la forma circolare. Infine, cambia la proprietà `box-shadow` per impostare l'`offset-x` a 25px, l'`offset-y` a 10px, il `blur-radius` a 0, lo `spread-radius` a 0, e `color` a `blue`.

# --hints--

Il valore della proprietà `background-color` dovrebbe essere impostato su `transparent`.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

Il valore della proprietà `border-radius` dovrebbe essere impostato a `50%`.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

I valori della proprietà `box-shadow` dovrebbero essere impostati a 25px per l'`offset-x`, 10px per l'`offset-y`, 0 per il `blur-radius`, 0 per lo `spread-radius`, e infine `blue` per `color`.

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
