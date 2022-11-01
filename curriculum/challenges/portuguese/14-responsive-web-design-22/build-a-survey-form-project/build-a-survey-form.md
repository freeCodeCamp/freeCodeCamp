---
id: 587d78af367417b2b2512b03
title: Criar um formulário de pesquisa
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objetivo:** criar uma aplicação que funcione de modo semelhante a <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>

**Histórias de usuário:**

1. Você deve ter um título de página em um elemento `h1` com o `id` `title`
1. Você deve ter uma breve explicação em um elemento `p` com o `id` `description`
1. Você deve ter um elemento `form` com o `id` `survey-form`
1. Dentro do elemento do formulário, deve ser **obrigatório** inserir seu nome em um campo `input` que tenha um `id` `name` e um `type` `text`
1. Dentro do elemento do formulário, deve ser **obrigatório** inserir seu e-mail em um campo `input` que tenha um `id` `email`
1. Se for informado um e-mail que não esteja formatado corretamente, um erro de validação HTML5 deve ser mostrado
1. Dentro do formulário, você pode inserir um número em um campo `input` que tenha o `id` `number`
1. A entrada de número não deve aceitar algo que não seja números, impedindo que você os digite ou mostrando um erro de validação do HTML5 (dependendo do seu navegador).
1. Se forem inseridos números fora do intervalo do campo de entrada do número, intervalo esse definido pelos atributos `min` e `max`, um erro de validação de HTML5 deve ser mostrado
1. Para os campos de entrada (inputs) name, email e number dentro do formulário, deve haver elementos `label` correspondentes que descrevam o propósito de cada campo com os seguintes ids: `id="name-label"`, `id="email-label"` e `id="number-label"`
1. Para os campos de entrada name, email e number, deve haver um texto placeholder (texto ilustrativo) que forneça uma descrição ou instruções para cada campo
1. Dentro do elemento do formulário, você deve ter um elemento de menu suspenso `select` com um `id` `dropdown` e pelo menos duas opções para escolher
1. Dentro do elemento do formulário, você pode selecionar uma opção de um grupo de pelo menos dois botões de opção (radio) que serão agrupados usando o atributo `name`
1. Dentro do elemento de formulário, deve ser possível selecionar vários campos de uma série de caixas de seleção (checkboxes). Cada um desses campos deve ter um atributo `value`
1. Dentro do elemento de formulário, você receberá uma `textarea` para comentários adicionais
1. Dentro do elemento de formulário, você receberá um botão com o `id` `submit` para enviar as informações

Atenda às histórias de usuário e passe em todos os testes abaixo para concluir este projeto. Dê ao projeto o seu próprio estilo pessoal. Boa programação!

**Observação:** não se esqueça de adicionar `<link rel="stylesheet" href="styles.css">` em seu HTML para vincular sua folha de estilo e aplicar seu CSS

# --hints--

Você deve ter um elemento `h1` com o `id` `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

O elemento `#title` não deve estar vazio.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

Você deve ter um elemento `p` com o `id` `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

O elemento `#description` não deve estar vazio.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

Você deve ter um elemento `form` com o `id` `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

Você deve ter um elemento `input` com o `id` `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

O elemento `#name` deve ter o atributo `type` com o valor `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

O elemento `#name` deve exigir a entrada.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

O elemento `#name` deve ser um descendente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

Você deve ter um elemento `input` com o `id` de `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

O elemento `#email` deve ter o atributo `type` com o valor `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

O elemento `#email` deve exigir a entrada.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

O elemento `#email` deve ser um descendente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

Você deve ter um elemento `input` com o `id` `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

O elemento `#number` deve ser um descendente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

O elemento `#number` deve ter o atributo `type` com o valor `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

O elemento `#number` deve ter um atributo `min` com um valor numérico.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

O elemento `#number` deve ter um atributo `max` com um valor numérico.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

Você deve ter um elemento `label` com o `id` `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

Você deve ter um elemento `label` com o `id` `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

Você deve ter um elemento `label` com o `id` `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

`#name-label` deve conter um texto que descreva a entrada.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

`#email-label` deve conter um texto que descreva a entrada.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

`#number-label` deve conter um texto que descreva a entrada.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

O elemento `#name-label` deve ser um descendente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

O elemento `#email-label` deve ser um descendente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

O elemento `#number-label` deve ser um descendente de `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

O elemento `#name` deve ter o atributo `placeholder` e um valor.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

O elemento `#email` deve ter o atributo `placeholder` e um valor.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

O elemento `#number` deve ter o atributo `placeholder` e um valor.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Você deve ter um campo `select` com o `id` `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

O elemento `#dropdown` deve ter pelo menos dois elementos selecionáveis (não desativados) `option`.

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

O elemento `#dropdown` deve estar aninhado dentro de `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

Você deve ter pelo menos dois elementos `input` com `type` `radio` (botões de opção).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

Você deve ter pelo menos dois botões de opção aninhados dentro de `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

Todos os seus botões de opção devem ter um atributo `value` e um valor.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Todos os seus botões de opção devem ter um atributo `name` e um valor.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

Todos os grupos de botões de opção devem ter pelo menos 2 botões de opção.

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

Você deve ter pelo menos dois elementos `input` com `type` `checkbox` (caixas de seleção) aninhados dentro de `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

Todas as caixas de seleção dentro de `#survey-form` devem ter um atributo `value` e um valor.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

Você deve ter pelo menos um elemento `textarea` aninhado dentro de `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

Você deve ter um elemento `input` ou um elemento `button` com o `id` `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

O elemento `#submit` deve ter o atributo `type` com o valor `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

O elemento `#submit` deve estar aninhado dentro de `#survey-form`.

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
