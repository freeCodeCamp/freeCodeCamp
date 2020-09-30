---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
---

## Description
<section id='description'>
The <code>tabindex</code> attribute also specifies the exact tab order of elements. This is achieved when the value of the attribute is set to a positive number of 1 or higher.
Setting a <code>tabindex="1"</code> will bring keyboard focus to that element first. Then it cycles through the sequence of specified <code>tabindex</code> values (2, 3, etc.), before moving to default and <code>tabindex="0"</code> items.
It's important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.
Here's an example:
<code>&lt;div tabindex=&quot;1&quot;&gt;I get keyboard focus, and I get it first!&lt;/div&gt;</code>
<code>&lt;div tabindex=&quot;2&quot;&gt;I get keyboard focus, and I get it second!&lt;/div&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat has a search field on his Inspirational Quotes page that he plans to position in the upper right corner with CSS. He wants the search <code>input</code> and submit <code>input</code> form controls to be the first two items in the tab order. Add a <code>tabindex</code> attribute set to <code>"1"</code> to the search <code>input</code>, and a <code>tabindex</code> attribute set to <code>"2"</code> to the submit <code>input</code>.
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
