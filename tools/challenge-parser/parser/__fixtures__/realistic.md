# --description--

When you add a lower rank heading element to the page, it's implied that you're starting a new subsection.

After the last <code>h2</code> element of the second `section` element, add an `h3` element with the text `Things cats love:`.

<blockquote>
  <p>Some text in a blockquote</p>
  <p>
    Some text in a blockquote, with <code>code</code>
  </p>
</blockquote>

# --instructions--

Do something with the `code`.

To test that adjacent tags are handled correctly:

a bit of <code>code</code> <tag>with more after a space</tag> and another pair of <strong>elements</strong> <em>with a space</em>

# --hints--

The second `section` element appears to be missing or does not have both an opening and closing tag.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

There should be an `h3` element right above the second `section` element's closing tag.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

The `h3` element right above the second `section` element's closing tag should have the text `Things cats love:`. Make sure to include the colon at the end of the text.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

There should be an `h2` element with the text `Cat Lists` above the last `h3` element that is nested in the last `section` element'. You may have accidentally deleted the `h2` element.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
);
```

# --seed--

## --before-user-code--

```js
  // this runs before the user's code is evaluated.
```

## --seed-contents--

::id{#html-key}

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>
          Click here to view more
          <a target="_blank" href="https://www.freecodecamp.org/cat-photos"
            >cat photos</a
          >.
        </p>
        <a href="https://www.freecodecamp.org/cat-photos"
          ><img
            src="https://bit.ly/fcc-relaxing-cat"
            alt="A cute orange cat lying on its back."
        /></a>
      </section>
      --fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>
      </section>
      --fcc-editable-region--
    </main>
  </body>
</html>
```

```css
body {
  background: white;
}

h1 {
  font-size: 20px;
}
--fcc-editable-region--

--fcc-editable-region--

a {
  color: green;
}
```

::id{#final-key}

```js
var x = 'y';
```

# --solutions--

::id{#html-key}

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>
          Click here to view more
          <a target="_blank" href="https://www.freecodecamp.org/cat-photos"
            >cat photos</a
          >.
        </p>
        <a href="https://www.freecodecamp.org/cat-photos"
          ><img
            src="https://bit.ly/fcc-relaxing-cat"
            alt="A cute orange cat lying on its back."
        /></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
      </section>
    </main>
  </body>
</html>
```

```css
body {
  background: white;
}

h1 {
  font-size: 20px;
}


a {
  color: green;
}
```

::id{#final-key}

```js
var x = 'y';
```
