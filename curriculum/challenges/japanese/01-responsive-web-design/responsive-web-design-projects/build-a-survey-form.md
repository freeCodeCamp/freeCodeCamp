---
id: 587d78af367417b2b2512b03
title: アンケートフォームを作成する
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**目標:** <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a> と似た機能を持つアプリを作成します

**ユーザーストーリー:**

1. `id` の値が `title` に設定されている `h1` 要素内に、ページタイトルがあります
1. `id` の値が `description` に設定されている `p` 要素内に、簡単な説明が記載されています
1. `id` の値が `survey-form` に設定されている `form` 要素が 1 つあります
1. その form 要素の中では、`id` の値が `name`、`type` の値が `text` である `input` 欄への名前の入力が**必須**となっています
1. その form 要素の中では、`id` の値が `email` である `input` 欄へのメールアドレスの入力が**必須**となっています
1. メールアドレスを不正なフォーマットで入力すると、HTML5 のバリデーションエラーが表示されます
1. フォームの中で、`id` の値が `number` に設定されている `input` の欄内に数値を入力できます
1. 数値入力欄は数値でない値を受け付けないように、数値以外の値が入力できないか、HTML5 のバリデーションエラーが表示されるようになっています (ブラウザによって動作が異なります)
1. `min` と `max` 属性で定義した範囲外の数字を入力すると、HTML5 のバリデーションエラーが表示されます
1. 名前、メールアドレス、数値の入力欄にそれぞれ対応して、各欄の目的を説明する `label` 要素がフォーム内にあり、それぞれ以下の id が設定されています: `id="name-label"`、`id="email-label"`、`id="number-label"`
1. 名前、メールアドレス、数値の入力欄には、各欄の説明や指示を示すプレイスホルダーテキストが表示されます
1. form 要素内には、`id` の値が `dropdown` に設定されている `select` ドロップダウン要素が 1 つあり、選択肢が少なくとも 2 つあります
1. form 要素内では、`name` 属性を使用してグループ化した 2 つ以上のラジオボタンのグループから、オプションを 1 つ選択できます
1. フォーム要素内では、一連のチェックボックスから複数の欄を選択することができ、各チェックボックスには `value` 属性が設定されています
1. form 要素内には、追加のコメント用に `textarea` が用意されています
1. form 要素内には、すべての入力内容を送信するために、`id` の値が `submit` に設定されたボタンが用意されています

上記のユーザーストーリーを満たし、以下のすべてのテストが通るようにして、このプロジェクトを完成させてください。 あなた独自のスタイルを加えましょう。 ハッピーコーディング！

**注:** スタイルシートをリンクして CSS を適用するため、HTML のコード内に必ず `<link rel="stylesheet" href="styles.css">` を追加してください。

# --hints--

`id` の値が `title` に設定されている `h1` 要素が 1 つ必要です。

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

`#title` が空でないようにしてください。

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

`id` が `description` である `p` 要素が 1 つ必要です。

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

`#description` が空でないようにしてください。

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

`id` の値が `survey-form` に設定されている `form` 要素が 1 つ必要です。

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

`id` の値が `name` に設定されている `input` 要素が 1 つ必要です。

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

`#name` の `type` の値は `text` に設定されている必要があります。

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

`#name` の入力が必須である必要があります。

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

`#name` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

`id` の値が `email` に設定されている `input` 要素が 1 つ必要です。

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

`#email` の `type` の値は `email` に設定されている必要があります。

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

`#email` の入力が必須である必要があります。

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

`#email` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

`id` の値が `number` に設定されている `input` 要素が 1 つ必要です。

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

`#number` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

`#number` の `type` の値は `number` に設定されている必要があります。

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

`#number` は数値が設定された `min` 属性をもつ必要があります。

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

`#number` は数値が設定された `max` 属性をもつ必要があります。

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

`id` の値が `name-label` に設定されている `label` 要素が 1 つ必要です。

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

`id` の値が `email-label` に設定されている `label` 要素が 1 つ必要です。

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

`id` の値が `number-label` に設定されている `label` 要素が 1 つ必要です。

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

`#name-label` には入力欄について説明するテキストを含める必要があります。

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

`#email-label` には入力欄について説明するテキストを含める必要があります。

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

`#number-label` には入力欄について説明するテキストを含める必要があります。

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

`#name-label` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

`#email-label` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

`#number-label` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

`#name` は `placeholder` 属性とその値をもつ必要があります。

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`#email` は `placeholder` 属性とその値をもつ必要があります。

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`#number` は `placeholder` 属性とその値をもつ必要があります。

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

`id` の値が `dropdown` に設定されている `select` 欄が 1 つ必要です。

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

`#dropdown` は少なくとも 2 つの選択可能な (無効化されていない) `option` 要素をもつ必要があります。

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

`#dropdown` は `#survey-form` の子孫要素である必要があります。

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

`type` の値が `radio` (ラジオボタン) に設定されている `input` 要素が少なくとも 2 つ必要です。

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

少なくとも 2 つのラジオボタンが `#survey-form` の子孫要素として必要です。

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

すべてのラジオボタンには `value` 属性とその値が必要です。

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

すべてのラジオボタンには `name` 属性とその値が必要です。

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

ラジオボタンの各グループには少なくとも 2 つのラジオボタンが必要です。

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

`type` の値が `checkbox` (チェックボックス) に設定されている `input` 要素が `#survey-form` の子孫要素として少なくとも 2 つ必要です。

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

`#survey-form` 内のすべてのチェックボックスには `value` 属性とその値が必要です。

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

少なくとも 1 つの `textarea` 要素が `#survey-form` の子孫要素として必要です。

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

`id` の値が `submit` に設定されている、`input` または `button` 要素が 1 つ必要です。

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

`#submit` は `type` が `submit` に設定されている必要があります。

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

`#submit` は `#survey-form` の子孫要素である必要があります。

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
