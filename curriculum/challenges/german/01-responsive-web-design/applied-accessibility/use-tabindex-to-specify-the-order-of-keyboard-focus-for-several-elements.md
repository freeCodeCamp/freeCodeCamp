---
id: 587d7790367417b2b2512ab1
title: Verwende das tabindex-Attribut, um die Reihenfolge des Tastaturfokus für mehrere Elemente festzulegen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

Das `tabindex`-Attribut legt die exakte Reihenfolge von Elementen für die Navigation per Tabulatortaste fest. Dies wird erreicht, indem der Wert des Attributs auf eine positive Zahl von 1 oder mehr gesetzt wird.

Das Setzen eines `tabindex="1"` lenkt den Tastaturfokus zuerst auf dieses Element. Anschließend rotiert er durch die Sequenz der angegebenen `tabindex`-Werte (2, 3 etc.), bevor er zu Elementen mit Standardwerten bzw. `tabindex="0"` wechselt.

Wenn die Reihenfolge der Tabulatornavigation auf diese Weise festgelegt wird, ist es wichtig zu beachten, dass die Standardreihenfolge überschrieben wird, welche der Reihenfolge im HTML-Quellcode entspricht. Dies kann Benutzer verwirren, die erwarten, dass sie von oben beginnend durch die Seite navigieren. Diese Technik kann unter bestimmten Umständen notwendig sein, aber im Hinblick auf die Barrierefreiheit sollte man dabei behutsam vorgehen.

Hier ist ein Beispiel:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat hat ein Suchfeld auf seiner Seite mit inspirierenden Zitaten, das er mit CSS in der oberen rechten Ecke positionieren möchte. Er möchte, dass die Formularsteuerelemente, d. h. das `input`-Element "search" (dt. "Suche") und das `input`-Element "submit" (dt. "absenden"), die ersten beiden in der Tab-Reihenfolge sind. Füge ein `tabindex`-Attribut mit Wert `1` zum `search` `input` hinzu und ein `tabindex`-Attribut mit Wert `2` zum `submit` `input`.

Es ist auch zu beachten, dass manche Browser einen mitten in der Tab-Reihenfolge platzieren, wenn ein Element angeklickt wird. Ein Element wurde zur Seite hinzugefügt, das sicherstellt, dass du immer am Anfang deiner Tab-Reihenfolge beginnst.

# --hints--

Dein Code sollte ein `tabindex`-Attribut zum `search` `input`-Tag hinzufügen.

```js
assert($('#search').attr('tabindex'));
```

Dein Code sollte ein `tabindex`-Attribut zum `submit` `input`-Tag hinzufügen.

```js
assert($('#submit').attr('tabindex'));
```

Dein Code sollte das `tabindex`-Attribut auf dem `search` `input`-Tag auf einen Wert von 1 setzen.

```js
assert($('#search').attr('tabindex') == '1');
```

Dein Code sollte das `tabindex`-Attribut auf dem `submit` `input`-Tag auf einen Wert von 2 setzen.

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
