---
id: 587d7790367417b2b2512ab0
title: 使用 tabindex 將鍵盤焦點添加到元素中
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

HTML 的 `tabindex` 屬性有三種與標籤焦點相關的功能。 當它在一個元素上時，表示該元素可以獲得焦點。 tabindex 的值（可以是零、負整數或正整數）定義了行爲。

當用戶使用鍵盤瀏覽頁面時，諸如鏈接、表單控件等元素可以自動獲得焦點。 它們獲得焦點的順序與它們出現在 HTML 文檔流中的順序一致。 我們可以通過將其他標籤（如 `div`、`span`、`p` 等）的 `tabindex` 屬性值設爲 0 來讓它們實現類似的效果。 比如：

```html
<div tabindex="0">I need keyboard focus!</div>
```

**注意：** `tabindex` 屬性值爲負整數（通常爲 -1）的標籤也是可以獲得焦點的，只是不可以通過鍵盤操作（如 tab 鍵）來獲得焦點。 這種方法通常用於以編程的方式使內容獲得焦點（如：將焦點設置到用 `div` 實現的彈出框上）的場景。 只是這部分內容已經超出了當前挑戰的範圍。

# --instructions--

Camper Cat 新建了一個用來收集他的用戶信息的調查。 他知道輸入框可以自動獲得鍵盤焦點，但他希望用戶使用鍵盤切換標籤時，焦點可以停留在指示文字（Instructions）上。 請給 `p` 標籤添加一個 `tabindex` 屬性，將屬性值設置爲 `0`。 注意：使用 `tabindex` 屬性還可以讓 CSS 僞類 `:focus` 在 `p` 標籤上生效。

# --hints--

表單中，作爲指示文字（Instructions）的 `p` 標籤應具有 `tabindex` 屬性。

```js
assert($('p').attr('tabindex'));
```

`p` 標籤的 `tabindex` 屬性值應設置爲 0。

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
