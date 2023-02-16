---
id: 6391d1a4f7ac71efd0621380
title: Build a Recipe Page Project
challengeType: 14
dashedName: top-build-a-recipe-project
---

# --description--

The website will consist of a main index page which will have links to a few recipes. The website won’t look very pretty by the time you’ve finished.

**User Stories:**

1. Your recipe page should contain a `DOCTYPE` tag.
1. Your recipe page should include an `html` element with a `head` and `body` element as children.
1. You should have a `title` element within the `head` element with the text `The Odin Recipes`.
1. You should see an `h1` element that has the text `Creamy Chocolate Fudge`.
1. You should see an image with the url `*placeholder-fcc-cdn*` with a fitting `alt` text.
1. There should be an `h2` element with the text `Description` under the image.
1. You should see a couple of paragraphs under `Description` that describe the recipe.
1. There should be an `h2` element with the text `Ingredients`
1. Under the `Ingredients` heading there should be an unordered list with the ingredients needed for the recipe.
1. Under the list of ingredients add another heading called `Steps`.
1. You should see an ordered list with a couple of steps needed to complete the recipe.
1. Under the steps there should be an `h2` element with the text `More Recipes`
1. You should see a couple of links to other recipes inside an unordered list which has a couple of list items with anchor elements within.
1. These anchor elements should have `href` attribute with the value set to `#`

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

You should have a `<ol>` with the the steps as the list items `<li>`.

```js
const orderedList = document.querySelectorAll('OL')[0];
const listItems = document.querySelectorAll('OL > LI');

assert(orderedList && listItems && listItems.length > 1);
```

You should have an `h2` element with the text `More Recipes`. 

```js
const h2 = document.querySelectorAll('H2')[3];

assert(h2.innerText == 'More Recipes');
```

You should have an unordered list `<ul>` element with list items `<li>` that contain `<a>` tags which lead to other recipes.

```js
const unorderedList = document.querySelectorAll('UL')[1];
const listItems = unorderedList.querySelectorAll('LI');

const allAreListItems = unorderedList.children.length == listItems.length;

const containsAnchors =  [...listItems].every(function(listItem) {
  return listItem.querySelector("a") !== null;
});

assert(unorderedList && allAreListItems && containsAnchors && listItems.length > 1);
```

Your anchor tags linking to the recipes should have a `href` attribute with the value set to `#`

```js
const anchorTags = document.querySelectorAll("a");

const allAnchorsHaveHrefHash = [...anchorTags].every(function(anchorTag) {
  return anchorTag.hasAttribute("href") && anchorTag.getAttribute("href") === "#";
});

assert(allAnchorsHaveHrefHash && anchorTags.length > 0); 
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html

```
