---
id: 587d78ae367417b2b2512afd
title: Verwende die Eigenschaft flex-basis, um die Anfangsgröße eines Elements festzulegen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

Die `flex-basis` Eigenschaft definiert die ursprüngliche Größe eines Elements, bevor CSS Anpassungen mittels `flex-shrink` oder `flex-grow` vornimmt.

Die verwendeten Einheiten der `flex-basis` Eigenschaft sind dieselben wie bei anderen Größeneigenschaften (`px`, `em`, `%`, etc.). Der Wert `auto` skaliert Element auf Basis des Inhalts.

# --instructions--

Lege die Anfangsgröße der Boxen mit `flex-basis` fest. Füge die CSS-Eigenschaft `flex-basis` sowohl zu `#box-1` als auch zu `#box-2` hinzu. Gib `#box-1` einen Wert von `10em` und `#box-2` einen von `20em`.

# --hints--

Das `#box-1` Element sollte eine `flex-basis` Eigenschaft besitzen.

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

Das `#box-1` Element sollte einen `flex-basis` Wert von `10em` haben.

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

Das `#box-2` Element sollte eine `flex-basis` Eigenschaft besitzen.

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

Das `#box-2` Element sollte einen `flex-basis` Wert von `20em` haben.

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
