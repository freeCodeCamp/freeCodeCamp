---
id: 5f07be6ef7412fbad0c5626b
title: Step 18
challengeType: 0
dashedName: step-18
---

# --description--

Before adding any new content, you should make use of a `section` element to separate the cat photos content from the future content.

The `section` element is used to define sections in a document, such as chapters, headers, footers, or any other sections of the document. It is a semantic element that helps with SEO and accessibility.

```html
<section>
  <h2>Section Title</h2>
  <p>Section content...</p>
</section>
```

Take your `h2` element, two `p` elements, and anchor (`a`) element and nest them in a `section` element.

# --hints--

Your `section` element should have an opening tag. Opening tags have the following syntax: `<elementName>`.

```js
assert.exists(document.querySelector('section'));
```

Your `section` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert.match(code, /<\/section\s*>/i);
```

The entire `section` element should be between the opening and closing tags of the `main` element.

```js
assert.equal(document.querySelector('section')?.parentNode.nodeName, 'MAIN');
```

The existing `h2`, `p` elements, and anchor (`a`) element should be between the opening and closing tags of the `section` element.

```js
const sectionEl = document.querySelector('section');
assert.isNotNull(sectionEl);
const childrenOfSection = [...sectionEl.childNodes];

const foundElements = childrenOfSection.filter((child) => {
  return ['H2', 'A', 'P'].includes(child.nodeName);
});
assert.lengthOf(foundElements, 4)
```

The `h1` element should not be nested in the `section` element.

```js
const sectionEl = document.querySelector('section');
assert.isNotNull(sectionEl);
const childrenOfSection = [...sectionEl.childNodes];

const includesH1 = childrenOfSection.some((child) => child.nodeName === 'H1');
assert.isFalse(includesH1);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
--fcc-editable-region--
    <main>
      <h1>CatPhotoApp</h1>

      <h2>Cat Photos</h2>
      <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a> online!</p>
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
      <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

    </main>
--fcc-editable-region--
  </body>
</html>
```
