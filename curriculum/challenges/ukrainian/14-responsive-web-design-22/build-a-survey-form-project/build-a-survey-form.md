---
id: 587d78af367417b2b2512b03
title: Створіть форму для опитування
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Мета:** створити застосунок, функціонально схожий до <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>

**Історія користувача:**

1. Ви повинні мати титул сторінки в елементі `h1` з `id` зі значенням `title`
1. Ви повинні мати коротке роз'яснення в елементі `p` з `id` зі значенням `description`
1. Ви повинні мати елемент `form` з `id` зі значенням `survey-form`
1. В елементі форми вам **потрібно** ввести своє ім'я в полі `input`, яке має `id` зі значенням `name` та `type` зі значенням `text`
1. В елементі форми вам **потрібно** ввести свою електронну пошту в полі `input`, яке має `id` зі значенням `email`
1. Якщо ви введете неправильно сформовану електронну адресу, то побачите помилку перевірки HTML5
1. В формі ви можете ввести число в поле `input`, яке має `id` зі значенням `number`
1. Ввід для чисел повинен приймати лише числа, або забороняючи вводити їх, або показуючи помилку перевірки HTML5 (залежно від вашого браузера).
1. Якщо ви введете число поза межами діапазону чисел, що визначено атрибутами `min` та `max`, то побачите помилку перевірки HTML5
1. Для імені, електронної пошти та полів введення чисел можна побачити відповідні елементи `label` в формі, що описують мету кожного поля відповідними ідентифікаторами: `id="name-label"`, `id="email-label"` та `id="number-label"`
1. Для імені, електронної пошти та полів введення чисел можна побачити текст заповнювача з описом або інструкцією до кожного поля
1. В елементі форми ви повинні мати випадний елемент `select` з `id` зі значенням `dropdown` та принаймні два варіанти вибору
1. В елементі форми ви можете вибрати опцію з групи принаймні двох радіокнопок, які згруповані з використанням атрибуту `name`
1. В елементі форми ви можете вибрати декілька полів з низки прапорців, кожен з яких повинен мати атрибут `value`
1. В елементі форми представлено `textarea` для додаткових коментарів
1. В елементі форми представлено кнопку з `id` зі значенням `submit` для відправки всіх введень

Виконайте історію користувача та пройдіть тести, наведені нижче, щоб завершити цей проєкт. Оформте за власним стилем. Щасливого програмування!

**Примітка:** переконайтеся, що додали `<link rel="stylesheet" href="styles.css">` до HTML для прив’язки з аркушем стилів та застосували CSS

# --hints--

Ви повинні мати елемент `h1` з `id` зі значенням `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

Ваш `#title` не повинен бути порожнім.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

Ви повинні мати елемент `p` з `id` зі значенням `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

Ваш `#description` не повинен бути порожнім.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

Ви повинні мати елемент `form` з `id` зі значенням `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

Ви повинні мати елемент `input` з `id` зі значенням `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

Ваш `#name` повинен мати `type` зі значенням `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

Ваш `#name` повинен вимагати введення.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

Ваш `#name` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

Ви повинні мати елемент `input` з `id` зі значенням `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Ваш `#email` повинен мати `type` зі значенням `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Ваш `#email` повинен вимагати введення.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

Ваш `#email` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

Ви повинні мати елемент `input` з `id` зі значенням `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

Ваш `#number` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

Ваш `#number` повинен мати `type` зі значенням `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

Ваш `#number` повинен мати атрибут `min` з числовим значенням.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

Ваш `#number` повинен мати атрибут `max` з числовим значенням.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

Ви повинні мати елемент `label` з `id` зі значенням `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

Ви повинні мати елемент `label` з `id` зі значенням `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

Ви повинні мати елемент `label` з `id` зі значенням `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

Ваш `#name-label` повинен містити текст, який описує введені дані.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

Ваш `#email-label` повинен містити текст, який описує введені дані.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

Ваш `#number-label` повинен містити текст, який описує введені дані.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

Ваш `#name-label` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

Ваш `#email-label` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

Ваш `#number-label` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

Ваш `#name` повинен мати атрибут `placeholder` та значення.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Ваш `#email` повинен мати атрибут `placeholder` та значення.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Ваш `#number` повинен мати атрибут `placeholder` та значення.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Ви повинні мати поле `select` з `id` зі значенням `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

Ваш `#dropdown` повинен мати щонайменше два елементи `option` з можливістю вибору (не відключені).

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

Ваш `#dropdown` повинен бути нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

Ви повинні мати щонайменше два елементи `input` з `type` зі значенням `radio` (радіокнопки).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

Ви повинні мати щонайменше дві радіокнопки, які є нащадками `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

Всі радіокнопки повинні мати атрибут `value` та значення.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Всі радіокнопки повинні мати атрибут `name` та значення.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

В кожній групі радіокнопок повинно бути щонайменше 2 радіокнопки.

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

Ви повинні мати щонайменше два елементи `input` з `type` зі значенням `checkbox` (прапорцями), що є нащадками `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

Всі прапорці всередині `#survey-form` повинні мати атрибут `value` та значення.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Ви повинні мати щонайменше один елемент `textarea`, що є нащадком `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

Ви повинні мати елемент `input` або `button` з `id` зі значенням `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

Ваш `#submit` повинен мати `type` зі значенням `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Ваш `#submit` повинен бути нащадком `#survey-form`.

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
