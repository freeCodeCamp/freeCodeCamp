---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: https://scrimba.com/c/cmzRRcb
forumTopicId: 301028
localeTitle: Использование tabindex для указания порядка фокуса клавиатуры для нескольких элементов
---

## Description
<section id='description'>
<code>tabindex</code> атрибут также определяет точный порядок вкладок элементов. Это достигается, когда значение атрибута установлено как положительное число, равное 1 или выше.
Установка <code>tabindex = "1"</code>  сначала приведет фокусировку клавиатуры на этот элемент. Затем он перемещается по последовательности указанных значений <code>tabindex</code> (2, 3 и т.д.), прежде чем перейти к настройкам по умолчанию и <code>tabindex = "0"</code> элементам.
Важно отметить, что когда порядок табуляции задан таким образом, он переопределяет порядок по умолчанию (который использует источник HTML). Это может смутить пользователей, которые ожидают начать навигацию в верхней части страницы. Этот метод может быть необходим в некоторых случаях, но с точки зрения доступности, будьте аккуратны с его применением.
Вот пример:
<code>&lt;div tabindex=&quot;1&quot;&gt;Я получаю фокус клавиатуры, и я получаю его первым!&lt;/div&gt;</code>
<code>&lt;div tabindex=&quot;2&quot;&gt;Я получаю фокус клавиатуры, и я получаю его вторым!&lt;/div&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat имеет поле поиска на странице Вдохновляющие цитаты, которое он планирует позиционировать в верхнем правом углу с помощью CSS. Он хочет ввести <code>input</code> и представить элементы управления формой <code>input</code> как первые два элемента в порядке табуляции. Добавьте атрибут <code>tabindex</code>, со значением «1» в поиск <code>input</code> и атрибут <code>tabindex</code> со значением «2», в отправляемый <code>input</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>tabindex</code> attribute to the search <code>input</code> tag.
    testString: assert($('#search').attr('tabindex'));
  - text: Your code should add a <code>tabindex</code> attribute to the submit <code>input</code> tag.
    testString: assert($('#submit').attr('tabindex'));
  - text: Your code should set the <code>tabindex</code> attribute on the search <code>input</code> tag to a value of 1.
    testString: assert($('#search').attr('tabindex') == '1');
  - text: Your code should set the <code>tabindex</code> attribute on the submit <code>input</code> tag to a value of 2.
    testString: assert($('#submit').attr('tabindex') == '2');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
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
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
