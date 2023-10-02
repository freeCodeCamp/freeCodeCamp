---
id: 587d78af367417b2b2512b03
title: Erstelle ein Umfrageformular
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a> aufweist

**User Stories:**

1. Du solltest einen Seitentitel in einem `h1`-Element mit einer `id` von `title` haben
1. Du solltest eine kurze Erklärung in einem `p`-Element mit einer `id` von `description` haben
1. Du solltest ein `form`-Element mit einer `id` von `survey-form` haben
1. Innerhalb des Formular-Elements **musst** du deinen Namen in ein `input`-Feld mit einer `id` von `name` und einem `type` von `text` eingeben
1. Innerhalb des Formular-Elements **musst** du deine E-Mail in ein `input`-Feld mit einer `id` von `email` eingeben
1. Wenn du eine falsch formatierte E-Mail angibst, wird dir ein HTML5-Validierungsfehler ausgegeben
1. Innerhalb des Formulars kannst du eine Zahl in das `input`-Feld, das die `id` von `number` hat, eingeben
1. Das Nummernfeld sollte ausschließlich Nummern als Eingabewert akzeptieren – entweder, indem es dich davon abhält, andere Werte einzugeben, oder durch Ausgabe eines HTML5-Überprüfungsfehler (abhängig vom Browser).
1. Wenn du eine Nummer eingibst, die außerhalb des Bereichs der Zahleneingabe liegt, wird dir ein HTML5-Validierungsfehler ausgegeben. Der genannte Bereich wird durch die `min`- und `max`-Attribute festgelegt
1. Für die Namen-, E-Mail- und Nummern-Eingabefelder findest du zugehörige `label`-Elemente im Formular, welches den Nutzen jedes Felds der folgenden IDs beschreibt: `id="name-label"`, `id="email-label"`, und `id="number-label"`
1. Für die Namen-, E-Mail- und Nummern-Eingabefelder findest du einen Platzhalter-Text, der eine Beschreibung oder Anweisung für jedes Feld enthält
1. Innerhalb des Formular-Elements solltest du ein `select`-Dropdown-Element auffinden, welches sowohl über eine `id` von `dropdown` als auch über mindestens zwei Optionen zum Auswählen verfügt
1. Innerhalb des Fomular-Elements kannst du aus einer Gruppe von mindestens zwei Radio-Buttons, die mit dem `name`-Attribut unterteilt wurden, auswählen
1. Innerhalb des Formular-Elements kannst du mehrere Felder aus einer Reihe von Checkboxen auswählen, die alle über ein `value`-Attribut verfügen müssen
1. Innerhalb des Formular-Elements findest du eine `textarea` mit zusätzlichen Kommentaren
1. Innerhalb des Formular-Elementes wird dir ein Button mit der `id` von `submit` angezeigt, um alle Eingaben abzuschicken

Erfülle die folgenden User Stories und bestehe alle Tests, um dieses Projekt abzuschließen. Gib dem Ganzen deinen persönlichen Stil. Viel Spaß beim Programmieren!

**Hinweis:** Achte darauf, `<link rel="stylesheet" href="styles.css">` in deinen HTML-Code einzufügen, um dein Stylesheet zu verknüpfen und deinen CSS-Code anwenden zu können

# --hints--

Du solltest ein `h1`-Element mit einer `id` von `title` haben.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

Dein `#title` sollte nicht leer sein.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

Du solltest ein `p`-Element mit einer `id` von `description` haben.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

Deine `#description` sollte nicht leer sein.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

Du solltest ein `form`-Element mit einer `id` von `survey-form` haben.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

Du solltest ein `input`-Element mit einer `id` von `name` haben.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

Dein `#name` sollte einen `type` von `text` haben.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

Dein `#name` sollte eine Eingabe benötigen.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

Dein `#name` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

Du solltest ein `input`-Element mit einer `id` von `email` haben.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Deine `#email` sollte einen `type` von `email` haben.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Deine `#email` sollte eine Eingabe benötigen.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

Deine `#email` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

Du solltest ein `input`-Element mit einer `id` von `number` haben.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

Deine `#number` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

Deine `#number` sollte einen `type` von `number` haben.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

Deine `#number` sollte ein `min`-Attribut mit numerischen Wert haben.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

Deine `#number` sollte ein `max`-Attribut mit numerischen Wert haben.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

Du solltest ein `label`-Element mit einer `id` von `name-label` haben.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

Du solltest ein `label`-Element mit einer `id` von `email-label` haben.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

Du solltest ein `label`-Element mit einer `id` von `number-label` haben.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

Dein `#name-label` sollte Text enthalten, der die Eingabe beschreibt.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

Dein `#email-label` sollte Text enthalten, der die Eingabe beschreibt.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

Dein `#number-label` sollte Text enthalten, der die Eingabe beschreibt.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

Dein `#name-label` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

Dein `#email-label` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

Dein `#number-label` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

Dein `#name` sollte ein `placeholder`-Attribut und -Wert haben.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Deine `#email` sollte ein `placeholder`-Attribut und -Wert haben.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Deine `#number` sollte ein `placeholder`-Attribut und -Wert haben.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Du solltest ein `select`-Feld mit einer `id` von `dropdown` haben.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

Dein `#dropdown` sollte mindestens zwei auswählbare (nicht deaktivierte) `option`-Elemente haben.

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

Dein `#dropdown` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

Du solltest mindestens zwei `input`-Elemente mit einem `type` von `radio` (Radio-Buttons) haben.

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

Du solltest mindestens zwei Radio-Buttons haben, die Nachfahren der `#survey-form` sind.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

All deine Radio-Buttons sollten ein `value`-Attribut und -Wert haben.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

All deine Radio-Buttons sollten ein `name`-Attribut und -Wert haben.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

Jede Gruppe der Radio-Buttons sollte mindestens 2 Radio-Buttons enthalten.

```js
const radioButtons = document.querySelectorAll('input[type="radio"]');
const groups = {}

if (radioButtons) {
  radioButtons.forEach(el => {
    if (!groups[el.name]) groups[el.name] = []
    groups[el.name].push(el)
  })
}

const groupKeys = Object.keys(groups)

groupKeys.forEach(key => {
  if (groups[key].length < 2) assert(false)
})

assert(groupKeys.length > 0)
```

Du solltest mindestens zwei `input`-Elemente mit einem `type` von `checkbox` (Checkboxen) haben, die Nachfahren von `#survey-form` sind.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

All deine Checkboxen innerhalb von `#survey-form` sollten ein `value`-Attribut und -Wert haben.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Du solltest mindestens ein `textarea`-Element haben, das ein Nachfahre von `#survey-form` ist.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

Du solltest ein `input`- oder `button`-Element mit einer `id` von `submit` haben.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

Dein `#submit` sollte ein `type` von `submit` haben.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Dein `#submit` sollte ein Nachfahre von `#survey-form` sein.

```js
const el = document.querySelector('#survey-form #submit')
assert(!!el)
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <title>Survey Form</title>
  </head>
  <body>
    <h1>Survey Form</h1>
    <p>The card below was built as a sample survey form for freeCodeCamp.</p>
    <main id="main">
      <h1 id="title">Join the Togepi Fan Club!</h1>
      <p id="description">
        Enter your information here to receive updates about club activities,
        our monthly newsletter, and other email communications.
      </p>
      <form id="survey-form" action="#">
        <label for="name" id="name-label"
          ><p>Name:</p>
          <input type="text" id="name" placeholder="e.g. John Smith" required />
        </label>
        <label for="email" id="email-label"
          ><p>Email:</p>
          <input
            type="email"
            id="email"
            placeholder="e.g. john.smith@email.com"
            required
          />
        </label>
        <label for="age" id="number-label"
          ><p>Age<em>(optional)</em>:</p>
          <input
            type="number"
            id="number"
            placeholder="e.g. 19"
            min="18"
            max="99"
          />
        </label>
        <label for="interest" id="interest-label"
          ><p>What are you most interested in?</p>
          <select id="dropdown">
            <option selected disabled hidden></option>
            <option id="battles">Battling</option>
            <option id="breeding">Breeding</option>
            <option id="catching">Completing my Pokedex</option>
            <option id="exploring">Exploring new regions</option>
          </select>
        </label>
        <p>Who is your favourite Pokemon?</p>
        <label for="togepi">
          <input
            id="togepi"
            type="radio"
            name="favorite"
            value="togepi"
          />Togepi!
        </label>
        <label for="pikachu">
          <input
            id="pikachu"
            type="radio"
            name="favorite"
            value="pikachu"
          />Pikachu
        </label>
        <label for="other">
          <input id="other" type="radio" name="favorite" value="other" />Other
        </label>
        <p>Which communications do you want to receive?</p>
        <label for="newsletter">
          <input
            id="newsletter"
            type="checkbox"
            name="communications"
            value="newsletter"
          />Newsletter
        </label>
        <label for="events">
          <input
            id="events"
            type="checkbox"
            name="communications"
            value="events"
          />Event updates
        </label>
        <label for="updates">
          <input
            id="updates"
            type="checkbox"
            name="communications"
            value="updates"
          />Club updates
        </label>
        <p>Any other information you would like to share?</p>
        <textarea id="additional-information" rows="4" cols="50">
You can provide comments, suggestions, or feedback here.</textarea
        >
        <p>
          <em
            >Please note: This form is a proof of concept. Submitting the form
            will not actually transmit your data.</em
          >
        </p>
        <button type="Submit" id="submit">Submit</button>
      </form>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
main {
  text-align: center;
  background-color: #92869c;
  background-blend-mode: lighten;
  max-width: 500px;
  margin: 20px auto;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
  color: black;
}
body {
  text-align: center;
  background: #3a3240;
  color: white;
}
input, textarea, select, button {
  background: #3a3240;
  color: white;
}
a {
  color: white;
}
```
