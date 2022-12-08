---
id: 6391d1a4f7ac71efd0621380
title: Build a Recipe Page Project
challengeType: 14
dashedName: project-create-a-recipe-page
---

# --description--


**User Stories:**

1. Your recipe page should contain a `DOCTYPE` tag.
1. Your recipe page should include a `html` element with a `head` and `body` element as 
children.
1. You should have a `title` element within the `head` element with the text `The Odin Recipes`.
1. You should see a `h1` element that has the text `Creamy Chocolate Fudge`.
1. You should see an image with the url `*placeholder-fcc-cdn*` with a fitting `alt` text.
1. There should be a `h2` element with the text `Description` under the image.
1. You should see a couple of paragraphs under that describe the recipe.
1. There should be a `h2` element with the text `Ingredients`
1. Under the `Ingredients` heading there should be an unordered with the ingredients needed for the recipe.
1. Under the list of ingredients add another heading called `Steps`.
1. You should see an ordered list with some steps needed to complete the recipe.

# --hints--

You should have a `DOCTYPE` tag.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

You should have a `html` element with `head` and `body` element.

```js
const html = document.querySelectorAll('html')[0];
const head = document.querySelectorAll('html > head')[0];
const body = document.querySelectorAll('html > body')[0];

assert(html && head && body);
```

You should have a `title` element within the `head` element that contains the text 
`The Odin Recipes`.

```js
assert(document.querySelectorAll('HEAD > TITLE')[0].innerText == 'The Odin Recipes');
```

You should have a `h1` element within your `body` element that contains the text
`Creamy Chocolate Fudge`.

```js
assert(document.querySelectorAll('BODY > H1')[0].innerText == 'Creamy Chocolate Fudge');
```

You should have an image with the url `*placeholder-fcc-cdn*` with an `alt` attribute that has
a fitting text.

```js
const img = document.querySelectorAll('IMG')[0];

assert(img && img.alt !='' && img.src === 'https://i.imgur.com/p0J5baJ.jpg')
```

You should have an `h2` element with the text `Description`.

```js
const h2 = document.querySelectorAll('H2')[0];

assert(h2.innerText == 'Description');
```

You should have at least two `p` elements describing the recipe.

```js
const paragraphs = document.querySelectorAll('P');

assert(paragraphs.length > 1);
```

You should have an `h2` element with the text `Ingredients`.

```js
const h2 = document.querySelectorAll('H2')[1];

assert(h2.innerText == 'Ingredients');
```

You should have an unordered list `<ul>` with some ingredients as the list items `<li>`.

```js
const unorderedList = document.querySelectorAll('UL')[0];
const listItems = document.querySelectorAll('UL > LI');

assert(unorderedList && listItems && listItems.length > 1);
```

You should have an `h2` element with the text `Steps`.

```js
const h2 = document.querySelectorAll('H2')[2];

assert(h2.innerText == 'Steps');
```

You should have a `<ol>` with the the steps as list items `<li>`.

```js
const orderedList = document.querySelectorAll('OL')[0];
const listItems = document.querySelectorAll('OL > LI');

assert(orderedList && listItems && listItems.length > 1);
```


# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
