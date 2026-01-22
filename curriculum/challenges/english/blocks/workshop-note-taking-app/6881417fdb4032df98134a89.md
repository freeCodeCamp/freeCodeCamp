---
id: 6881417fdb4032df98134a89
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

The remaining steps for the workshop will involve adding the code for dynamically showing the notes saved message and logging the current notes to the console.

Start by creating a variable called `noteEl` and assigning it the result of querying the document for the element with the `id` of `note`.

Then create another variable called `statusEl` and assign it the result of querying the document for the element with the `id` of `status`.

# --hints--

You should have a `noteEl` variable and assign it the result of querying the document for the element with the `id` of `note`.

```js
assert.equal(noteEl, document.getElementById("note"));
``` 

You should have a `statusEl` variable and assign it the result of querying the document for the element with the `id` of `status`.

```js
assert.equal(statusEl, document.getElementById("status"));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Note taking app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <p class="helper-text">Click or tap on the card to edit your note.</p>

    <div id="note" class="note" contenteditable="true" aria-label="Note editor">
      Many languages have words that carry meanings so specific or culturally rooted that they can't be neatly translated into English. 
        
      One example is the Japanese word "tsundoku", which refers to the habit of acquiring books and letting them pile up unread, something many book lovers can relate to. Another is the Portuguese word "saudade", describing a deep, bittersweet longing for something or someone that is absent. Meanwhile, the French word "Dépaysement" captures the disorienting yet exciting feeling of being in a new place, far from home.
        
      These unique words remind us that language is more than vocabulary: it's a window into the values, habits, and emotions of the cultures that create it.
    </div>

    <div id="status" aria-live="polite"></div>
    
    <script src="script.js"></script>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 2em;
  max-width: 700px;
  background-color: #f5f5f5;
}

.note {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1.5em;
  margin-bottom: 1em;
  line-height: 1.5;
  min-height: 250px;
  font-size: 16px;
  /* This is needed to preserve line breaks in the div */
  white-space: pre-wrap;
}

.note[contenteditable="true"] {
  caret-color: black;
}

.note:hover {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
}

.helper-text {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5em;
  user-select: none;
  font-style: italic;
}

#status {
  color: #00471b;
  padding: 0 1em;
}
```

```js
--fcc-editable-region--

--fcc-editable-region--
```
