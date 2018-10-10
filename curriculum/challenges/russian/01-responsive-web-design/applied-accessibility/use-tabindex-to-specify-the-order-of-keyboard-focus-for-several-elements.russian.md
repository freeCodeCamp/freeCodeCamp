---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: ''
localeTitle: Используйте tabindex для указания порядка фокусировки клавиатуры для нескольких элементов
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("#search").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the search <code>input</code> tag.");'
  - text: ''
    testString: 'assert($("#submit").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the submit <code>input</code> tag.");'
  - text: ''
    testString: 'assert($("#search").attr("tabindex") == "1", "Your code should set the <code>tabindex</code> attribute on the search <code>input</code> tag to a value of 1.");'
  - text: ''
    testString: 'assert($("#submit").attr("tabindex") == "2", "Your code should set the <code>tabindex</code> attribute on the submit <code>input</code> tag to a value of 2.");'

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

```js
// solution required
```
</section>
