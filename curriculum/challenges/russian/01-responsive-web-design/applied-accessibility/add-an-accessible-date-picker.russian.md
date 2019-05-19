---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''

localeTitle: Добавить возможность выбора даты
---


## Description (Описание)
<section id="description"> Формы часто включают поле <code>input</code> . Это поле может использоваться для создания различных элементов управления формой. Атрибут <code>type</code> в этом элементе указывает, какой тип информации может быть введен. Возможно, вы уже встречали в предыдущих задачах типы ввода <code>text</code> и <code>submit</code> . В HTML5 появилась возможность указать поле <code>date</code> . В зависимости от поддержки браузера в поле <code>input</code> появляется окно выбора даты, что облегчает заполнение формы для всех пользователей. Для более старых браузеров будет по умолчанию использоваться тип <code>text</code> , он также помогает показывать пользователям ожидаемый формат даты, но в текстовом виде. Например: <blockquote> &lt;label for = &quot;input1&quot;&gt; Введите дату: &lt;/ label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote></section>


## Instructions (Задание)
<section id="instructions"> Camper Cat решил организовать турнир по Mortal Kombat и хочет попросить будущих участников определить, какая дата для проведения лучше всего подойдет. Добавьте <code>input</code> тег с <code>type</code> атрибутом «дата», с <code>id</code> атрибутом «pickdate», и <code>name</code> атрибутом «дата». </section>


## Tests (Тесты)
<section id='tests'>

```yml
tests:

  - text: Вы должны добавить один тег <code>input</code> для поля выбора даты.
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: Тег <code>input</code> должен иметь атрибут <code>type</code> со значением date.
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: Ваш тег <code>input</code> должен иметь атрибут <code>id</code> со значением pickdate.
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: Ваш тег <code>input</code> должен иметь атрибут <code>name</code> со значением date.
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

        <!-- Добавьте ваш код под этой линией -->



        <!-- Добавьте ваш код над этой линией -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution (Решение)
<section id='solution'>

```js
// здесь должно быть ваше решение
```
</section>
