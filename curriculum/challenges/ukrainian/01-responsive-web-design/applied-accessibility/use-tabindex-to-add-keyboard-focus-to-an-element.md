---
id: 587d7790367417b2b2512ab0
title: Використовуйте tabindex, щоб додати фокус клавіатури до елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

Значення HTML `tabindex` має три різні функції, що відносяться до елемента фокусу на клавіатурі. Коли він з'явиться на клавіатурі, це означає, що елемент можна фокусувати. Значення (ціле число: додатнє, від'ємне або нуль) визначає поводження об'єкта.

Певні елементи, такі як посилання і форми управління, отримують автоматично фокус клавіатури, якщо користувач виділяє їх через сторінку. В тому ж самому порядку як елементи надходять у HTML джерела розмітки. Цю ж саму функцію можна додати до інших елементів, таких як `div`, `span` і `p`, розмістивши для них значення `tabindex="0"`. Для прикладу:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Note:**: від'ємне значення `tabindex` (як правило -1) показує, що елемент фокусується, але не доступний за допомогою клавіатури. Зазвичай цей метод використовується для надання контенту фокусу програмного (наприклад, коли `div` використовується для активації спливаючого вікна), і виходить за рамки самих завдань.

# --instructions--

Camper Cat створив нову анкету, щоб зібрати інформацію про своїх користувачів. Він знає, що поля вводу автоматично фокусуються на клавіатурі, але хоче переконатися, що його користувачі клавіатури слідують інструкціям при табуляції через елементи. Додайте значення `tabindex` до тегу `p` та задайте це значення до `0`. Бонус - використання `tabindex` також дозволяє псевдокласу CSS `:focus` працювати з тегом `p`.

# --hints--

Ваш код повинен додати значення `tabindex` до тегу `p`, який містить інструкції до форми.

```js
assert($('p').attr('tabindex'));
```

Ваш код повинен встановити значення `tabindex` до тегу `p` зі значенням 0.

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
