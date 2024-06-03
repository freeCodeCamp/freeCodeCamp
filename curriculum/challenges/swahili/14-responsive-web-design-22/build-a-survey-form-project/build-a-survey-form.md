---
id: 587d78af367417b2b2512b03
title: Tengeneza Fomu ya Utafiti
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>. **Do not copy this demo project**.

**Maelekezo:**

1. Unapaswa kuwa na kichwa cha ukurasa katika kipengele cha `h1` chenye `id` ya `title`
1. Unapaswa kuwa na maelezo mafupi katika kipengele cha `p` chenye `id` ya `description`
1. Unapaswa kuwa na kipengele cha `form` chenye `id` ya `survey-form`
1. Ndani ya kipengee cha fomu, **unahitajika** kuingiza jina lako katika sehemu ya `input` ambayo ina `id` ya `name` na `type` ya `text`
1. Ndani ya kipengee cha fomu, **unahitajika** kuingiza barua pepe yako katika sehemu ya `input` ambayo ina `id` ya `email`
1. Ukiingiza barua pepe ambayo haijaandikwa ipasavyo, utaona hitilafu ya uthibitishaji wa HTML5
1. Ndani ya fomu, unaweza kuingiza nambari katika sehemu ya `input` ambayo ina `id` ya `number`
1. Ingizo la nambari haipaswi kukubali chochote kisicho nambari, ama kwa kukuzuia kuziandika au kwa kuonyesha hitilafu ya uthibitishaji wa HTML5 (kulingana na kivinjari chako).
1. Ukiingiza nambari nje ya safu ya ingizo la nambari, ambalo linafafanuliwa na sifa za `min` na `max`, utaona hitilafu ya uthibitishaji wa HTML5
1. Kwa jina, barua pepe, na sehemu za kuingiza nambari, unaweza kuona vipengele vinavyolingana vya `label` katika fomu, vinavyoelezea madhumuni ya kila sehemu yenye ids vifuatavyo: `id="name-label" `, `id="email-label"`, na `id="number-label"`
1. Kwa jina, barua pepe, na sehemu za kuingiza nambari, unaweza kuona maandishi ya kishikilia nafasi ambayo yanatoa maelezo au maagizo kwa kila sehemu
1. Ndani ya kipengele cha fomu, unapaswa kuwa na `select` kipengee cha menyu ya kushuka yenye `id` ya `dropdown` na angalau chaguo mbili za kuchagua
1. Ndani ya kipengele cha fomu, unaweza kuchagua chaguo kutoka kwa kikundi cha angalau vitufe viwili ambavyo vimepangwa kwa kutumia sifa ya `name`
1. Ndani ya kipengee cha fomu, unaweza kuchagua sehemu kadhaa kutoka kwa mfululizo wa visanduku vya kuteua, ambavyo kila kimoja lazima kiwe na sifa ya `value`
1. Ndani ya kipengele cha fomu, umewasilishwa na `textarea` kwa maoni ya ziada
1. Ndani ya kipengele cha fomu, umeonyeshwa kitufe chenye `id` ya `submit` ili kuwasilisha ingizo zote

Timiza maelezo na upite majaribio yote hapa chini ili kukamilisha mradi huu. Ipe muundo wako wa kibinafsi. Happy Coding!

**Kumbuka:** Hakikisha umeongeza `<link rel="stylesheet" href="styles.css">` katika HTML yako ili kuunganisha stylesheet yako na utumie CSS yako

# --hints--

Unapaswa kuwa na kipengele cha `h1` chenye `id` ya `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

`#title` yako haipaswi kuwa tupu.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

Unapaswa kuwa na kipengele cha `p` chenye `id` ya `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

`#description` yako haipaswi kuwa tupu.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

Unapaswa kuwa na kipengele cha `form` chenye `id` ya `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

Unapaswa kuwa na kipengele cha `input` chenye `id` ya `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

`#name` yako inapaswa kuwa na `type` ya `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

`#name` yako inapaswa kuhitaji uingizaji.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

`#name` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

Unapaswa kuwa na kipengele cha `input` chenye `id` ya `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

`#email` yako inapaswa kuwa na `type` ya `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

`#email` yako inapaswa kuhitaji uingizaji.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

`#email` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

Unapaswa kuwa na kipengele cha `input` chenye `id` ya `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

`#number` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

`#number` yako inapaswa kuwa na `type` ya `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

`#number` yako inapaswa kuwa na sifa ya `min` yenye thamani ya nambari.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

`#number` yako inapaswa kuwa na sifa ya `max` yenye thamani ya nambari.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

Unapaswa kuwa na kipengele cha `label` chenye `id` ya `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

Unapaswa kuwa na kipengele cha `label` chenye `id` ya `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

Unapaswa kuwa na kipengele cha `label` chenye `id` ya `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

`#name-label` yako inapaswa kuwa na maandishi yanayoelezea ingizo.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

`#email-label` yako inapaswa kuwa na maandishi yanayoelezea ingizo.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

`#number-label` yako inapaswa kuwa na maandishi yanayoelezea ingizo.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

`#name-label` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

`#email-label` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

`#number-label` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

`#name` yako inapaswa kuwa na sifa ya `placeholder` yenye thamani.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`#email` yako inapaswa kuwa na sifa ya `placeholder` yenye thamani.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`#number` yako inapaswa kuwa na sifa ya `placeholder` yenye thamani.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Unapaswa kuwa na sehemu ya `select` yenye `id` ya `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

`#dropdown` yako inapaswa kuwa na angalau `option` ya vipengele viwili vinavyoweza kuchaguliwa (sio kulemazwa).

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

`#dropdown` yako inapaswa kuwa mzao wa `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

Unapaswa kuwa na angalau vipengele viwili vya `input` vyenye `type` ya `radio` (radio buttons).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

Unapaswa kuwa na angalau vitufe viwili vya redio ambavyo ni wazawa wa `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

Vitufe vyako vyote vya redio vinapaswa kuwa na sifa ya `value` yenye sifa na thamani.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Vitufe vyako vyote vya redio vinapaswa kuwa na sifa ya `name` yenye sifa na thamani.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

Kila kikundi cha vitufe vya redio kinapaswa kuwa na angalau vitufe 2 vya redio.

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

Unapaswa kuwa na angalau vipengele viwili vya `input` vyenye `type` ya `checkbox` (kisanduku cha kuteua) ambavyo ni vizazi vya `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

Visanduku vyako vyote vya kuteua ndani ya `#survey-form` vinapaswa kuwa na sifa ya `value` na thamani.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Unapaswa kuwa na angalau kipengele kimoja cha `textarea` ambacho ni kizazi cha `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

Unapaswa kuwa na kipengele cha `input` au `button` chenye `id` ya `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

`#submit` yako inapaswa kuwa na `type` ya `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

`#submit` yako inapaswa kuwa mzao wa `#survey-form`.

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

# --solutions--

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
