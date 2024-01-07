---
id: 587d78af367417b2b2512b03
title: Crea un modulo di sondaggio
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>

**User story:**

1. Dovresti avere un titolo di pagina in un elemento `h1` con un attributo `id` di `title`
1. Dovrebbe esserci una breve spiegazione in un elemento `p` con un attributo `id` con il valore `description`
1. Dovrebbe esserci un elemento `form` con un attributo `id` dal valore `survey-form`
1. All'interno dell'elemento form, devi inserire obbligatoriamente (**required**) il nome in un campo di `input` che ha un `id` con il valore `name` e un `type` con il valore `text`
1. All'interno dell'elemento form, devi inserire obbligatoriamente (**required**) l'email in un campo di `input` che ha un `id` con il valore `email`
1. Se inserisci una email che non è formattata correttamente, vedrai un errore di validazione HTML5
1. All'interno del modulo, puoi inserire un numero in un campo di `input` con un `id` del valore di `number`
1. L'input del numero non dovrebbe accettare valori non numerici, impedendo all'utente di inserirli o tramite una validazione degli errori HTML5 (a seconda del browser).
1. Se immetti un numero al di fuori del range del campo del numero, che hai definito con gli attributi `min` e `max`, vedrai un errore di validazione HTML5
1. Per le caselle di input per il nome, l'email e il numero, puoi vedere gli elementi `label` corrispondenti nel modulo che descrivono lo scopo di ogni campo con i seguenti attributi id: `id="name-label"`, `id="email-label"` e `id="number-label"`
1. Per i campi di input di nome, e-mail e numero, puoi vedere il testo del placeholder che fornisce una descrizione o delle istruzioni per ogni campo
1. Dentro l'elemento form, dovresti avere un elemento `select` a tendina con un `id` del valore di `dropdown` e almeno due opzioni tra cui scegliere
1. Dentro l'elemento form, puoi selezionare una opzione da un gruppo di almeno due pulsanti di opzione che sono raggruppati con l'attributo `name`
1. All'interno dell'elemento form, puoi selezionare diversi campi da una serie di caselle di spunta, ciascuno dei quali deve avere un attributo `value`
1. All'interno dell'elemento form, deve essere un elemento `textarea` per commenti aggiuntivi
1. All'interno dell'elemento form, deve essere presente un pulsante con un `id` del valore di `submit` per inviare tutti gli input

Soddisfa le user story e passa tutti i test per completare questo progetto. Usa il tuo stile personale. Buon divertimento!

**Nota:** Assicurati di aggiungere `<link rel="stylesheet" href="styles.css">` nel tuo HTML per linkare il foglio di stile e applicare il CSS

# --hints--

Dovrebbe esserci un elemento `h1` con un `id` di `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

L'elemento `#title` non dovrebbe essere vuoto.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

Dovrebbe esserci un elemento `p` con un `id` di `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

L'elemento `#description` non dovrebbe essere vuoto.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

Dovrebbe esserci un elemento `form` con un attributo `id` di `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

Dovrebbe esserci un elemento `input` con un `id` di `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

L'elemento `#name` dovrebbe avere un attributo `type` con il valore `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

L'elemento `#name` dovrebbe richiedere un input.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

L'elemento `#name` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

Dovrebbe esserci un elemento `input` con un `id` con il valore `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

L'elemento `#email` dovrebbe avere un attributo `type` con il valore `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

L'elemento `#email` dovrebbe richiedere un input.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

L'elemento `#email` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

Dovresti avere un elemento `input` con un `id` con il valore `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

L'elemento `#number` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

L'elemento `#number` dovrebbe avere un attributo `type` con il valore `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

L'elemento `#number` dovrebbe avere un attributo `min` con un valore numerico.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

L'elemento `#number` dovrebbe avere un attributo `max` con un valore numerico.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

Dovresti avere un elemento `label` con un `id` con il valore `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

Dovresti avere un elemento `label` con un `id` con il valore `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

Dovresti avere un elemento `label` con un `id` con il valore `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

Il tuo elemento `#name-label` dovrebbe contenere del testo che descrive l'input.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

Il tuo elemento `#email-label` dovrebbe contenere del testo che descrive l'input.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

Il tuo elemento `#number-label` dovrebbe contenere del testo che descrive l'input.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

L'elemento `#name-label` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

L'elemento `#email-label` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

L'elemento `#number-label` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

L'elemento `#name` dovrebbe avere un attributo `placeholder` con un valore.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

L'elemento `#email` dovrebbe avere un attributo `placeholder` con un valore.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

L'elemento `#number` dovrebbe avere un attributo `placeholder` con un valore.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Dovrebbe esserci un campo `select` con un `id` con il valore `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

L'elemento `#dropdown` dovrebbe avere almeno due elementi `option` selezionabili (non disattivati).

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

L'elemento `#dropdown` dovrebbe essere un discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

Dovresti avere almeno due elementi `input` con un attributo `type` con il valore `radio` (pulsanti radio o di opzione).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

Dovresti avere almeno due pulsanti di opzione discendenti di `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

Tutti i pulsanti di opzione dovrebbero avere un attributo `value` con un valore.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Tutti i pulsanti di opzione dovrebbero avere un attributo `name` con un valore.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

Ogni gruppo di pulsanti di opzione dovrebbe avere almeno 2 pulsanti.

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

Dovresti avere almeno due elementi `input` con un attributo `type` con il valore `checkbox` (caselle di spunta) discendenti di `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

Tutte le caselle di spunta dentro l'elemento `#survey-form` dovrebbero avere un attributo `value` con un valore.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Dovrebbe esserci almeno un elemento `textarea` discendente di `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

Dovrebbe esserci un elemento `input` o `button` con un `id` con il valore `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

L'elemento `#submit` dovrebbe avere un attributo `type` con il valore `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

L'elemento `#submit` dovrebbe essere un discendente di `#survey-form`.

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
