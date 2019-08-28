---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: https://scrimba.com/c/cR3bRbCV
forumTopicId: 301008
localeTitle: Добавить возможность выбора даты
---

## Description
<section id='description'>
Формы часто включают поле <code>input</code> . Это поле может использоваться для создания различных элементов управления формой. Атрибут <code>type</code> в этом элементе указывает, какой тип информации может быть введен. Возможно, вы уже встречали в предыдущих задачах типы ввода <code>text</code> и <code>submit</code> . В HTML5 появилась возможность указать поле <code>date</code> . В зависимости от поддержки браузера в поле <code>input</code> появляется окно выбора даты, что облегчает заполнение формы для всех пользователей. Для более старых браузеров будет по умолчанию использоваться тип <code>text</code> , он также помогает показывать пользователям ожидаемый формат даты, но в текстовом виде. Например: <blockquote> &lt;label for = &quot;input1&quot;&gt; Введите дату: &lt;/ label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote>
</section>

## Instructions
<section id='instructions'>
Camper Cat решил организовать турнир по Mortal Kombat и хочет попросить будущих участников определить, какая дата для проведения лучше всего подойдет. Добавьте <code>input</code> тег с <code>type</code> атрибутом «дата», с <code>id</code> атрибутом «pickdate», и <code>name</code> атрибутом «дата».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add one <code>input</code> tag for the date selector field.
    testString: assert($('input').length == 2);
  - text: Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.
    testString: assert($('input').attr('type') == 'date');
  - text: Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.
    testString: assert($('input').attr('id') == 'pickdate');
  - text: Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.
    testString: assert($('input').attr('name') == 'date');

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
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
