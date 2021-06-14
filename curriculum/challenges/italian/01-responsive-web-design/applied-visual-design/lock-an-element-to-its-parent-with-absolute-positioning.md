---
id: 587d781e367417b2b2512acb
title: Vincolare un elemento al suo genitore con il posizionamento assoluto
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

La prossima opzione per la proprietà CSS `position` è `absolute`, che vincola l'elemento in una posizione rispetto al suo contenitore genitore. A differenza della posizione `relative`, questo rimuove l'elemento dal flusso normale del documento, quindi gli elementi circostanti lo ignorano. Le proprietà di offset CSS (superiore o inferiore e sinistra o destra) sono usate per regolare la posizione.

Una sfumatura con posizionamento assoluto, sarà vincolata rispetto al suo antenato più vicino che sia *posizionato*. Se si dimentica di aggiungere una regola di posizione all'elemento genitore (questo viene tipicamente fatto usando `position: relative;`), il browser continuerà a cercare nella catena fino a usare il valore di default del tag `body`.

# --instructions--

Blocca l'elemento `#searchbar` in alto a destra nella sua `section` genitore dichiarando `position` come `absolute`. Dagli un offset `top` e `right` di 50 pixel ciascuno.

# --hints--

L'elemento `#searchbar` dovrebbe avere una `position` impostata su `absolute`.

```js
assert($('#searchbar').css('position') == 'absolute');
```

Il tuo codice dovrebbe utilizzare un offset CSS `top` di 50 pixel sull'elemento `#searchbar`.

```js
assert($('#searchbar').css('top') == '50px');
```

Il tuo codice dovrebbe utilizzare uno spostamento `right` di 50 pixel sull'elemento `#searchbar`.

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
