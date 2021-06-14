---
id: 587d7790367417b2b2512ab1
title: Usare l'attributo tabindex per specificare l'ordine di selezione da tastiera per più elementi
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

L'attributo `tabindex` può anche specificare l'esatto ordine di selezione degli elementi. Questo si ottiene quando il valore dell'attributo è impostato su un numero positivo maggiore o uguale a 1.

Impostare un `tabindex="1"` porterà la selezione della tastiera a quell'elemento per primo. Dopodiché passa attraverso la sequenza dei valori `tabindex` specificati (2, 3, ecc.), prima di passare agli elementi predefiniti e a quelli con `tabindex="0"`.

È importante notare che quando l'ordine di tabulazione è impostato in questo modo, sovrascrive l'ordine predefinito (che utilizza il sorgente HTML). Questo potrebbe confondere gli utenti che si aspettano di iniziare la navigazione dall'inizio della pagina. Questa tecnica può essere necessaria in alcune circostanze, ma in termini di accessibilità fai attenzione prima di applicarla.

Ecco un esempio:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat ha un campo di ricerca sulla sua pagina di Citazioni Motivazionali che prevede di posizionare in alto a destra con CSS. Vuole che l'`input` di ricerca e l'`input` di invio siano i primi due elementi nell'ordine di selezione. Aggiungi un attributo `tabindex` impostato a `1` all'`input` `search`, e un attributo `tabindex` impostato a `2` all'`input` `submit`.

Un'altra cosa da notare è che alcuni browser possono posizionarti al centro del tuo elenco di tabulazione quando viene fatto clic su un elemento. Alla pagina è stato aggiunto un elemento che assicura che inizierai sempre dal primo elemento dell'ordine di tabulazione.

# --hints--

Il tuo codice dovrebbe aggiungere un attributo `tabindex` al tag `input` di tipo `search`.

```js
assert($('#search').attr('tabindex'));
```

Il tuo codice dovrebbe aggiungere un attributo `tabindex` al tag `input` di tipo `submit`.

```js
assert($('#submit').attr('tabindex'));
```

Il tuo codice dovrebbe impostare l'attributo `tabindex` del tag `input` di tipo `search` ad un valore di 1.

```js
assert($('#search').attr('tabindex') == '1');
```

Il tuo codice dovrebbe impostare l'attributo `tabindex` del tag `input` di tipo `submit` a un valore di 2.

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
