---
id: 587d7790367417b2b2512ab0
title: 使用 tabindex 将键盘焦点添加到元素中
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

HTML 的 `tabindex` 属性有三种与标签焦点相关的功能。 当它在一个元素上时，表示该元素可以获得焦点。 tabindex 的值（可以是零、负整数或正整数）定义了行为。

当用户使用键盘浏览页面时，诸如链接、表单控件等元素可以自动获得焦点。 它们获得焦点的顺序与它们出现在 HTML 文档流中的顺序一致。 我们可以通过将其他标签（如 `div`、`span`、`p` 等）的 `tabindex` 属性值设为 0 来让它们实现类似的效果。 比如：

```html
<div tabindex="0">I need keyboard focus!</div>
```

**注意：** `tabindex` 属性值为负整数（通常为 -1）的标签也是可以获得焦点的，只是不可以通过键盘操作（如 tab 键）来获得焦点。 这种方法通常用于以编程的方式使内容获得焦点（如：将焦点设置到用 `div` 实现的弹出框上）的场景。 只是这部分内容已经超出了当前挑战的范围。

# --instructions--

Camper Cat 新建了一个用来收集他的用户信息的调查。 他知道输入框可以自动获得键盘焦点，但他希望用户使用键盘切换标签时，焦点可以停留在指示文字（Instructions）上。 请给 `p` 标签添加一个 `tabindex` 属性，将属性值设置为 `0`。 注意：使用 `tabindex` 属性还可以让 CSS 伪类 `:focus` 在 `p` 标签上生效。

# --hints--

表单中，作为指示文字（Instructions）的 `p` 标签应具有 `tabindex` 属性。

```js
assert($('p').attr('tabindex'));
```

`p` 标签的 `tabindex` 属性值应设置为 0。

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
