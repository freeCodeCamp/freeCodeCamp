---
id: 587d778b367417b2b2512aa8
title: Füge eine barrierefreie Datumsauswahl hinzu
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

Formulare enthalten oft das `input`-Feld mit dem verschiedene Formularsteuerelemente erstellt werden können. Das `type`-Attribut dieses Elements gibt an, welche Art von `input`-Element erstellt wird.

Möglicherweise hast Du den `text`- und `submit`-Tag in vorherigen Aufgaben schon gesehen. Und mit HTML5 wurde eine Option eingeführt, um ein `date`-Feld für Datumsangaben zu nutzen. Abhängig von der Browserunterstützung wird eine Datumsauswahl im `input`-Feld angezeigt, wenn es im Fokus ist, was das Ausfüllen eines Formulars für alle Benutzer erleichtert.

Bei älteren Browsern wird der Typ standardmäßig auf `text` gesetzt, so dass es hilfreich ist, dem Benutzer das erwartete Datumsformat im `label`- oder `placeholder`-Text anzuzeigen, nur für den Fall.

Hier ist ein Beispiel:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat stellt ein Mortal Kombat-Turnier auf die Beine und möchte seine Teilnehmer fragen, welches Datum dafür in Frage kommt. Füge ein `input`-Tag mit dem Attribut `type` `date`, dem Attribut `id` `pickdate` und dem Attribut `name` `date` ein.

# --hints--

Dein Code sollte einen `input` Tag für das Datumsauswahlfeld hinzufügen.

```js
assert($('input').length == 2);
```

Dein `input`-Tag sollte ein `type`-Attribut mit einem Wert `date` enthalten.

```js
assert($('input').attr('type') == 'date');
```

Dein `input`-Tag sollte ein `id`-Attribut mit einem Wert `pickdate` enthalten.

```js
assert($('input').attr('id') == 'pickdate');
```

Dein `input`-Tag sollte ein `name`-Attribut mit einem Wert `date` enthalten.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
