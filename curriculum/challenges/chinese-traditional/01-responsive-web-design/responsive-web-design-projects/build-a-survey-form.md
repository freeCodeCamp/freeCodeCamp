---
id: 587d78af367417b2b2512b03
title: 製作一個調查表格
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**目標：** 構建一個功能類似於 <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a> 的應用程序

**需求：**

1. 你應該有一個 `id` 爲 `title` 的 `h1` 元素
1. 你應該有一個 `id` 爲 `description` 的 `p` 元素
1. 你應該有一個 `id` 爲 `survey-form` 的 `form` 元素
1. 在表單元素內，你**需要**在 `input` 字段中輸入你的名字，該字段的 `id` 爲 `name`，`type` 爲 `text`
1. 在表單元素內，你**需要**在 `input` 字段中輸入你的郵箱，該字段的 `id` 爲 `email`
1. 如果你輸入了格式不正確的郵箱，你將會看見 HTML5 驗證錯誤信息
1. 在表單中，你可以在 `input` 字段中輸入一個數字，該字段的 `id` 爲 `number`
1. 數字輸入不應接受非數字，或是阻止你輸入它們，或是顯示一個 HTML5 驗證錯誤（取決於你的瀏覽器）。
1. 如果你輸入的數字超出了範圍（使用 `min` 和 `max` 屬性定義），你將會看見 HTML5 驗證錯誤信息
1. 表單中的名字、郵箱和數字輸入框需有對應的包含描述輸入框用途的 `label` 元素，id 應分別爲 `id="name-label"`、`id="email-label"` 和 `id="number-label"`
1. 在表單中的名字、郵箱和數字輸入框中，你能看到各自的描述文字作爲佔位符
1. 在表單元素內， 你應該有一個 `select` 下拉元素， `id` 爲 `dropdown`，它至少有兩個選項
1. 在表單元素內， 你可以從至少兩個單選按鈕的組中選擇一個選項，該選項使用 `name` 屬性
1. 在表單元素內，你可以從一系列複選框中選擇幾個字段，每個複選框都必須具有 `value` 屬性
1. 在表單元素內，你會有一個 `textarea` 以獲取額外的評論
1. 在表單元素內，你將收到一個按鈕，其 `id` 爲 `submit`，提交所有輸入

完成需求並通過下面的所有測試來完成這個項目。 賦予它你自己的個人風格。 編程愉快！

**注意：** 請在你的 HTML 中添加 `<link rel="stylesheet" href="styles.css">` 以鏈接你的樣式表並應用你的 CSS

# --hints--

你應該有一個 `id` 爲 `title` 的 `h1` 元素。

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

你的 `#title` 元素不應爲空。

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

你應該有一個 `id` 爲 `description` 的 `p` 元素。

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

你的 `#description` 不應爲空。

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

你應該有一個 `id` 爲 `survey-form` 的 `form` 元素。

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

你應該有一個 `id` 爲 `name` 的 `input` 元素。

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#name` 元素應該具有 `type` 爲 `text`。

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

你的 `#name` 元素應該需要輸入。

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

你的 `#name` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

你應該有一個 `id` 爲 `email` 的 `input` 元素。

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#email` 元素應該具有 `type` 爲 `email`。

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

你的 `#email` 元素應該需要輸入。

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

你的 `#email` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

你應該有一個 `id` 爲 `number` 的 `input` 元素。

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

你的 `#number` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

你的 `#number` 元素應該具有 `type` 爲 `number`。

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

你的 `#number` 應該有一個值爲數字的 `min` 屬性。

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

你的 `#number` 應該有一個值爲數字的 `max` 屬性。

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

你應該有一個 `id` 爲 `name-label` 的 `label` 元素。

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

你應該有一個 `id` 爲 `email-label` 的 `label` 元素。

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

你應該有一個 `id` 爲 `number-label` 的 `label` 元素。

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

你的 `#name-label` 應包含描述輸入的文本。

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

你的 `#email-label` 應包含描述輸入的文本。

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

你的 `#number-label` 應該包含描述輸入的文本。

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

你的 `#name-label` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

你的 `#email-label` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

你的 `#number-label` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

你的 `#name` 元素應該有 `placeholder` 屬性與佔位符文本。

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你的 `#email` 元素應該有 `placeholder` 屬性與佔位符文本。

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你的 `#number` 元素應該有 `placeholder` 屬性與佔位符文本。

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

你應該有一個 `id` 爲 `dropdown` 的 `select` 元素。

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

你的 `#dropdown` 應該至少有兩個可選擇（未禁用）`option` 元素。

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

你的 `#dropdown` 元素應該是 `#survey-form` 元素的子元素。

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

你應該有至少兩個 `input` 元素，`type` 爲 `radio`（單選按鈕）。

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

你至少應該有兩個單選按鈕，是 `#survey-form` 的子元素。

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

你所有的單選按鈕都應該有一個 `value` 屬性和值。

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

你所有的單選按鈕都應該有一個 `name` 屬性和值。

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

每個單選按鈕組應至少有 2 個單選按鈕。

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

你應該至少有兩個 `input` 元素，`type` 爲 `checkbox`（複選框），它們是 `#survey-form` 的子元素。

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

你在 `#survey-form` 中的所有複選框都應該有 `value` 屬性和值。

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

你至少應該有一個 `textarea` 元素，它是 `#survey-form` 的子元素。

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

你應該有一個 `id` 爲 `submit` 的 `input` 或 `button` 元素。

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

你的 `#submit` 元素應該具有 `type` 爲 `submit`。

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

你的 `#submit` 元素應該是 `#survey-form` 元素的子元素。

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
