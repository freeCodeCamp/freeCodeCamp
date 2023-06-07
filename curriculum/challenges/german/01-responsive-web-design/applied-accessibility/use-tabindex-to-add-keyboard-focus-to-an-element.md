---
id: 587d7790367417b2b2512ab0
title: Verwende tabindex, um den Tastaturfokus zu einem Element hinzuzufügen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

Das HTML-Attribut `tabindex` hat drei verschiedene Funktionen in Bezug auf den Tastaturfokus eines Elements. Wenn es an einem Tag steht, zeigt es an, dass das Element fokussiert werden kann. Der Wert (eine Ganzzahl, die positiv, negativ oder Null ist) bestimmt das Verhalten.

Bestimmte Elemente, wie z. B. Links und Formularsteuerelemente, erhalten automatisch den Tastaturfokus, wenn ein Benutzer durch eine Seite blättert. Die Reihenfolge ist dieselbe, in der die Elemente im HTML-Quelltext stehen. Die gleiche Funktionalität kann man auch anderen Elementen wie `div`, `span` und `p` geben, indem man ihnen ein `tabindex="0"`-Attribut zuweist. Hier ist ein Beispiel:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Hinweis:** Ein negativer `tabindex`-Wert (typischerweise -1) zeigt an, dass ein Element fokussierbar, aber nicht über die Tastatur erreichbar ist. Diese Methode wird in der Regel verwendet, um den Fokus programmatisch auf den Inhalt zu legen (z. B. wenn ein `div` für ein Pop-up-Fenster aktiviert wird) und ist nicht Gegenstand dieser Aufgaben.

# --instructions--

Camper Cat hat eine neue Umfrage erstellt, um Informationen über seine Nutzer zu sammeln. Er weiß, dass Eingabefelder automatisch den Tastaturfokus erhalten, aber er möchte sicherstellen, dass seine Tastaturbenutzer bei den Anweisungen pausieren, während sie durch die Elemente navigieren. Füge ein `tabindex`-Attribut zum `p`-Tag hinzu und setze dessen Wert auf `0`. Bonus: Die Verwendung von `tabindex` ermöglicht auch, dass die CSS-Pseudoklasse `:focus` auf dem `p`-Tag wirkt.

# --hints--

Dein Code sollte ein `tabindex`-Attribut zum `p`-Tag hinzufügen, das die Formularanweisungen enthält.

```js
assert($('p').attr('tabindex'));
```

Dein Code sollte das `tabindex`-Attribut am `p`-Tag auf den Wert 0 setzen.

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
