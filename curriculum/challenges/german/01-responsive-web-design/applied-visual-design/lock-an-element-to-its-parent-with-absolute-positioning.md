---
id: 587d781e367417b2b2512acb
title: Fixiere ein Element mittels absoluter Positionierung an seinem Elternteil
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

Die nächste Option für die Eigenschaft `position` ist `absolute`, welche das Element relativ zu seinem übergeordneten Container ausrichtet und daran fixiert. Anders als die Positionierungseigenschaft `relative` entfernt dies das Element aus dem normalen Fluss des Dokuments, sodass umgebende Elemente es ignorieren. Die CSS-Offset-Eigenschaften (oben oder unten bzw. links oder rechts) werden verwendet, um die Position anzupassen.

Ein bemerkenswertes Detail von absoluter Positionierung ist, dass das platzierte Element relativ seinem nächstgelegenen, übergeordneten Element *mit Position-Eigenschaft* gesperrt wird. Solltest du vergessen eine Positionsregel zum übergeordneten Element hinzuzufügen (dies geschieht normalerweise mit `position: relative;`), sucht der Browser nach oben hin weiter und wird notfalls auf das `body`-Tag zurückgreifen.

# --instructions--

Sperre das `#searchbar`-Element oben rechts in seinem Elternteil `section`, indem du seine `position` als `absolute` deklarierst. Gib ihm `top` und `right`-Offsets von jeweils 50 Pixel.

# --hints--

Das `#searchbar`-Element sollte eine `position`-Eigenschaft mit Wert `absolute` haben.

```js
assert($('#searchbar').css('position') == 'absolute');
```

Dein Code sollte einen `top`-Offset von 50 Pixel auf dem `#searchbar`-Element verwenden.

```js
assert($('#searchbar').css('top') == '50px');
```

Dein Code sollte einen `right`-Offset von 50 Pixel auf dem `#searchbar`-Element verwenden.

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
