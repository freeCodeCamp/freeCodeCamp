---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: Добавить доступный выбор даты
---

## Description

<section id="description"> Формы часто включают поле <code>input</code> , которое может использоваться для создания нескольких различных элементов управления данной формой. Атрибут <code>type</code> в этом элементе указывает, какой тип ввода будет создан. Возможно, вы заметили <code>text</code> и <code>submit</code> типы ввода в предыдущих задачах, а в HTML5 появилась опция указать поле <code>date</code> . В зависимости от поддержки браузера в поле <code>input</code> появляется окно выбора даты, когда оно находится в фокусе, что облегчает заполнение формы для всех пользователей. Для более старых браузеров тип будет по умолчанию использоваться для <code>text</code> , поэтому он помогает показывать пользователям ожидаемый формат даты на этикетке или в качестве заменителя текста на всякий случай. Вот пример: <blockquote> &lt;label for = &quot;input1&quot;&gt; Введите дату: &lt;/ label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat создает турнир Mortal Kombat и хочет попросить своих конкурентов посмотреть, какая дата лучше всего работает. Добавьте <code>input</code> тег с <code>type</code> атрибутом «дата», с <code>id</code> атрибута «pickdate», и <code>name</code> атрибута «дата». </section>


## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны добавить один тег <code>input</code> для поля выбора даты.
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: Тег <code>input</code> должен иметь атрибут <code>type</code> со значением даты.
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: Ваш тег <code>input</code> должен иметь атрибут <code>id</code> со значением pickdate.
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: Ваш тег <code>input</code> должен иметь атрибут <code>name</code> со значением даты.
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Add your code below this line -->



        <!-- Add your code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
