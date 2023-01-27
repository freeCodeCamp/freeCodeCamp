---
id: 587d78af367417b2b2512b03
title: 制作一个调查表格
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**目标：** 构建一个功能类似于 <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a> 的应用程序

**需求：**

1. 你应该有一个 `id` 为 `title` 的 `h1` 元素
1. 你应该有一个 `id` 为 `description` 的 `p` 元素
1. 你应该有一个 `id` 为 `survey-form` 的 `form` 元素
1. 在表单元素内，你**需要**在 `input` 字段中输入你的名字，该字段的 `id` 为 `name`，`type` 为 `text`
1. 在表单元素内，你**需要**在 `input` 字段中输入你的邮箱，该字段的 `id` 为 `email`
1. 如果你输入了格式不正确的邮箱，你将会看见 HTML5 验证错误信息
1. 在表单中，你可以在 `input` 字段中输入一个数字，该字段的 `id` 为 `number`
1. 数字输入不应接受非数字，或是阻止你输入它们，或是显示一个 HTML5 验证错误（取决于你的浏览器）。
1. 如果你输入的数字超出了范围（使用 `min` 和 `max` 属性定义），你将会看见 HTML5 验证错误信息
1. 表单中的名字、邮箱和数字输入框需有对应的包含描述输入框用途的 `label` 元素，id 应分别为 `id="name-label"`、`id="email-label"` 和 `id="number-label"`
1. 在表单中的名字、邮箱和数字输入框中，你能看到各自的描述文字作为占位符
1. 在表单元素内， 你应该有一个 `select` 下拉元素， `id` 为 `dropdown`，它至少有两个选项
1. 在表单元素内， 你可以从至少两个单选按钮的组中选择一个选项，该选项使用 `name` 属性
1. 在表单元素内，你可以从一系列复选框中选择几个字段，每个复选框都必须具有 `value` 属性
1. 在表单元素内，你会有一个 `textarea` 以获取额外的评论
1. 在表单元素内，你将收到一个按钮，其 `id` 为 `submit`，提交所有输入

完成需求并通过下面的所有测试来完成这个项目。 赋予它你自己的个人风格。 编程愉快！

**注意：** 请在你的 HTML 中添加 `<link rel="stylesheet" href="styles.css">` 以链接你的样式表并应用你的 CSS

# --hints--

你应该有一个 `id` 为 `title` 的 `h1` 元素。

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

你的 `#title` 元素不应为空。

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

你应该有一个 `id` 为 `description` 的 `p` 元素。

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

你的 `#description` 不应为空。

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

你应该有一个 `id` 为 `survey-form` 的 `form` 元素。

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

你应该有一个 `id` 为 `name` 的 `input` 元素。

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#name` 元素应该具有 `type` 为 `text`。

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

你的 `#name` 元素应该需要输入。

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

你的 `#name` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

你应该有一个 `id` 为 `email` 的 `input` 元素。

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#email` 元素应该具有 `type` 为 `email`。

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

你的 `#email` 元素应该需要输入。

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

你的 `#email` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

你应该有一个 `id` 为 `number` 的 `input` 元素。

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#number` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

你的 `#number` 元素应该具有 `type` 为 `number`。

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

你的 `#number` 应该有一个值为数字的 `min` 属性。

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

你的 `#number` 应该有一个值为数字的 `max` 属性。

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

你应该有一个 `id` 为 `name-label` 的 `label` 元素。

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

你应该有一个 `id` 为 `email-label` 的 `label` 元素。

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

你应该有一个 `id` 为 `number-label` 的 `label` 元素。

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

你的 `#name-label` 应包含描述输入的文本。

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

你的 `#email-label` 应包含描述输入的文本。

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

你的 `#number-label` 应该包含描述输入的文本。

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

你的 `#name-label` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

你的 `#email-label` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

你的 `#number-label` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

你的 `#name` 元素应该有 `placeholder` 属性与占位符文本。

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你的 `#email` 元素应该有 `placeholder` 属性与占位符文本。

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你的 `#number` 元素应该有 `placeholder` 属性与占位符文本。

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你应该有一个 `id` 为 `dropdown` 的 `select` 元素。

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

你的 `#dropdown` 应该至少有两个可选择（未禁用）`option` 元素。

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

你的 `#dropdown` 元素应该是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

你应该有至少两个 `input` 元素，`type` 为 `radio`（单选按钮）。

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

你至少应该有两个单选按钮，是 `#survey-form` 的子元素。

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

你所有的单选按钮都应该有一个 `value` 属性和值。

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

你所有的单选按钮都应该有一个 `name` 属性和值。

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

每个单选按钮组应至少有 2 个单选按钮。

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

你应该至少有两个 `input` 元素，`type` 为 `checkbox`（复选框），它们是 `#survey-form` 的子元素。

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

你在 `#survey-form` 中的所有复选框都应该有 `value` 属性和值。

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

你至少应该有一个 `textarea` 元素，它是 `#survey-form` 的子元素。

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

你应该有一个 `id` 为 `submit` 的 `input` 或 `button` 元素。

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

你的 `#submit` 元素应该具有 `type` 为 `submit`。

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

你的 `#submit` 元素应该是 `#survey-form` 元素的子元素。

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
