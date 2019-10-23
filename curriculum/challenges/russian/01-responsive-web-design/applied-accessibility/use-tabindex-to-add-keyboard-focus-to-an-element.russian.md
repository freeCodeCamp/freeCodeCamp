---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
challengeType: 0
videoUrl: https://scrimba.com/c/cmzMDHW
forumTopicId: 301027
localeTitle: Использование tabindex для добавления фокуса клавиатуры к элементу
---

## Description
<section id='description'>
<code>tabindex</code> HTML имеет три различные функции, относящиеся к фокусу клавиатуры элемента. Когда он находится в теге, он указывает, что элемент можно сфокусировать. Значение (целое число, положительное, отрицательное или нулевое) определяет поведение. Некоторые элементы, такие как ссылки и элементы управления формами, автоматически получают фокус клавиатуры, когда пользователь переходит через страницу. Он находится в том же порядке, что и элементы, входящие в разметку HTML-источника. Эта же функциональность может быть предоставлена ​​другим элементам, таким как <code>div</code> , <code>span</code> и <code>p</code> , поместив на них <code>tabindex=&quot;0&quot;</code> . Вот пример: <code>&lt;div tabindex=&quot;0&quot;&gt;I need keyboard focus!&lt;/div&gt;</code> <strong>Примечание.</strong> <br> Отрицательное значение <code>tabindex</code> (обычно -1) указывает, что элемент является настраиваемым, но недоступен клавиатурой. Этот метод обычно используется для программного программирования фокуса на контент (например, когда активируется <code>div</code> для всплывающего окна) и выходит за рамки этих задач.
</section>

## Instructions
<section id='instructions'>
Camper Cat создал новый опрос для сбора информации о своих пользователях. Он знает, что поля ввода автоматически получают фокус клавиатуры, но он хочет убедиться, что его пользователи клавиатуры приостанавливаются при выполнении инструкций при перемещении элементов. Добавьте атрибут <code>tabindex</code> к тегу <code>p</code> и установите его значение «0». Бонус - использование <code>tabindex</code> также позволяет псевдо-классу CSS <code>:focus</code> работать <code>p</code> тегом <code>p</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>tabindex</code> attribute to the <code>p</code> tag that holds the form instructions.
    testString: assert($('p').attr('tabindex'));
  - text: Your code should set the <code>tabindex</code> attribute on the <code>p</code> tag to a value of 0.
    testString: assert($('p').attr('tabindex') == '0');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
