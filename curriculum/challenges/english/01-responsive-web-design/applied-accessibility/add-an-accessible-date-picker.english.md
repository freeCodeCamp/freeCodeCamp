---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
---

## Description
<section id='description'>
Forms often include the <code>input</code> field, which can be used to create several different form controls. The <code>type</code> attribute on this element indicates what kind of input will be created.
You may have noticed the <code>text</code> and <code>submit</code> input types in prior challenges, and HTML5 introduced an option to specify a <code>date</code> field. Depending on browser support, a date picker shows up in the <code>input</code> field when it's in focus, which makes filling in a form easier for all users.
For older browsers, the type will default to <code>text</code>, so it helps to show users the expected date format in the label or as placeholder text just in case.
Here's an example:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

</section>

## Instructions
<section id='instructions'>
Camper Cat is setting up a Mortal Kombat tournament and wants to ask his competitors to see what date works best. Add an <code>input</code> tag with a <code>type</code> attribute of "date", an <code>id</code> attribute of "pickdate", and a <code>name</code> attribute of "date".
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

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

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
