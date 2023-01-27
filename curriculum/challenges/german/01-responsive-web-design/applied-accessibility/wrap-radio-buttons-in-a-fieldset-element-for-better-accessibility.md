---
id: 587d778b367417b2b2512aa7
title: Radiobuttons in ein fieldset-Element für bessere Zugänglichkeit einbetten
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

Das nächste Formular-Thema behandelt die Zugänglichkeit von Optionsfeldern. Jede Option erhält ein `label` mit einem `for`-Attribut, das an die `id` des entsprechenden Elements gebunden ist, wie in der letzten Aufgabe behandelt. Da Optionsfelder oft in einer Gruppe enthalten sind, aus der der Benutzer eines auswählen muss, gibt es eine Möglichkeit, semantisch zu zeigen, dass die Optionen Teil eines Sets sind.

Das `fieldset`-Tag umgibt die gesamte Gruppierung der Optionsfelder, um dies zu erreichen. Oft wird ein `legend`-Tag verwendet, um eine Beschreibung für die Gruppierung zu liefern, die Bildschirmleser für jede einzelne Option im `fieldset`-Element lesen.

Der `fieldset`-Wrapper und der `legend`-Tag sind nicht notwendig, wenn die Optionen selbsterklärend sind, wie z. B. eine Geschlechterauswahl. Die Verwendung eines `label` mit dem `for`-Attribut für jedes Optionsfeld ist ausreichend.

Hier ist ein Beispiel:

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

Camper Cat möchte Informationen über den Ninja-Level seiner Benutzer erhalten, wenn sie sich für seine E-Mail-Liste anmelden. Er hat eine Reihe von Optionsfeldern hinzugefügt und aus unserer letzten Lektion gelernt, `label`-Tags mit `for`-Attributen für jede Option zu verwenden. Los Camper Cat! Allerdings braucht sein Code noch etwas Hilfe. Ändere das `div`-Tag, das die Optionsschaltflächen umgibt, in ein `fieldset`-Tag, und ändere das `p`-Tag darin in ein `legend`.

# --hints--

Dein Code sollte ein `fieldset`-Tag um das Radio-Button-Set haben.

```js
assert($('fieldset').length == 1);
```

Das `fieldset`-Element sollte ein schließendes Tag haben.

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

Dein Code sollte ein `legend`-Tag um den Text enthalten, das fragt, welche Ninja-Stufe ein Benutzer hat.

```js
assert($('legend').length == 1);
```

Dein Code sollte keine `div`-Tags enthalten.

```js
assert($('div').length == 0);
```

Dein Code sollte nicht mehr länger ein `p`-Tag um den Text haben, das fragt, welche Ninja-Stufe ein Benutzer hat.

```js
assert($('p').length == 4);
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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Only change code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Only change code above this line -->


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

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>

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
