---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

Forms often include the `input` field, which can be used to create several different form controls. The `type` attribute on this element indicates what kind of `input` element will be created.

You may have noticed the `text` and `submit` input types in prior challenges, and HTML5 introduced an option to specify a `date` field. Depending on browser support, a date picker shows up in the `input` field when it's in focus, which makes filling in a form easier for all users.

For older browsers, the type will default to `text`, so it helps to show users the expected date format in the `label` or `placeholder` text just in case.

Here's an example:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat is setting up a Mortal Kombat tournament and wants to ask his competitors to see what date works best. Add an `input` tag with a `type` attribute of `date`, an `id` attribute of `pickdate`, and a `name` attribute of `date`.

# --hints--

Your code should add one `input` tag for the date selector field.

```js
assert($('input').length == 2);
```

Your `input` tag should have a `type` attribute with a value of `date`.

```js
assert($('input').attr('type') == 'date');
```

Your `input` tag should have an `id` attribute with a value of `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

Your `input` tag should have a `name` attribute with a value of `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

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

# --solutions--

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
