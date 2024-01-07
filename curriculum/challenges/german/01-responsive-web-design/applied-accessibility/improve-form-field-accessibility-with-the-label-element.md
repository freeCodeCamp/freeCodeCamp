---
id: 587d778a367417b2b2512aa6
title: Verbessere die Zugänglichkeit von Formularfeldern mit der Bezeichnung Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

Die Verbesserung der Barrierefreiheit mit semantischem HTML-Markup bezieht sich sowohl auf die Verwendung geeigneter Tag-Namen als auch Attribute. Die nächsten Aufgaben decken einige wichtige Szenarien mithilfe von Attributen in Formularen ab.

Das `label`-Tag umschließt den Text für ein bestimmtes Formularsteuerelement, normalerweise den Namen oder die Bezeichnung für eine Auswahl. Dies bindet die Bedeutung an das Element und macht das Formular lesbarer. Das `for`-Attribut auf einem `label`-Tag verknüpft dieses `label` explizit mit dem Formularsteuerelement und wird von Screenreadern verwendet.

In einer Lektion im Bereich Basic HTML hast du etwas über Optionsfelder und deren Labels gelernt. In der Lektion haben wir die Optionsfelder in ein `label` Element mit einem Lable Text gesetzt um diesen Text anklickbar zu machen. Eine andere Möglichkeit, dies zu erreichen, ist die Verwendung des `for`-Attributs, wie es in dieser Lektion erklärt wird.

Der Wert des `for`-Attributs muss mit dem Wert des `id`-Attributs des Formularsteuerelements übereinstimmen. Hier ist ein Beispiel:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat erwartet ein großes Interesse an seinen durchdachten Blogbeiträgen und möchte ein E-Mail-Anmeldeformular einbauen. Füge ein `for`-Attribut auf dem E-Mail-`label` hinzu, das mit der `id` auf seinem `input`-Feld übereinstimmt.

# --hints--

Dein Code sollte ein `for` Attribut am `label` Tag haben, das nicht leer ist.

```js
assert($('label').attr('for'));
```

Dein `for` Attributwert sollte mit dem `id` Wert in der E-mail `input` übereinstimmen.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
