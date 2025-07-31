---
id: 67213641373a23696b74424b
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Within your new function, you need to filter the instruments depending on the selected category.

Filter out items from `instrumentsArr` and make your function return an array containing the instrument objects with the same category of `instrumentCategory`. If `instrumentCategory` is equal to `all`, return the whole `instrumentsArr` array.

Then, remove the `console.log` from the callback of your event listener and log the result of calling `instrumentCards` with the selected option from the dropdown menu as argument so you can test your function selecting different category options.

# --hints--

`instrumentCards("all")` should return `instrumentsArr`.

```js
assert.sameDeepMembers(instrumentCards("all"), instrumentsArr);
```

`instrumentCards("woodwinds")` should return `[{ category: "woodwinds", instrument: "Flute", price: 500 }, { category: "woodwinds", instrument: "Clarinet", price: 200 }, { category: "woodwinds", instrument: "Oboe", price: 4000 }]`.

```js
assert.sameDeepMembers(instrumentCards("woodwinds"), [{ category: "woodwinds", instrument: "Flute", price: 500 }, { category: "woodwinds", instrument: "Clarinet", price: 200 }, { category: "woodwinds", instrument: "Oboe", price: 4000 }]);
```

`instrumentCards("brass")` should return `[{ category: "brass", instrument: "Trumpet", price: 200 }, { category: "brass", instrument: "Trombone", price: 300 }, { category: "brass", instrument: "French Horn", price: 4300 }]`.

```js
assert.sameDeepMembers(instrumentCards("brass"), [{ category: "brass", instrument: "Trumpet", price: 200 }, { category: "brass", instrument: "Trombone", price: 300 }, { category: "brass", instrument: "French Horn", price: 4300 }]);
```

`instrumentCards("percussion")` should return `[{ category: "percussion", instrument: "Drum Set", price: 500 }, { category: "percussion", instrument: "Xylophone", price: 3000 }, { category: "percussion", instrument: "Cymbals", price: 200 }, { category: "percussion", instrument: "Marimba", price: 3000 }]`.

```js
assert.sameDeepMembers(instrumentCards("percussion"), [{ category: "percussion", instrument: "Drum Set", price: 500 }, { category: "percussion", instrument: "Xylophone", price: 3000 }, { category: "percussion", instrument: "Cymbals", price: 200 }, { category: "percussion", instrument: "Marimba", price: 3000 }]);
```

When you change the selected category from the dropdown menu, you should log the result of `instrumentCards(selectContainer.value)` to the console.

```js
let flag = false;
const temp = console.log;
console.log = (arg) => {
  if (arg === instrumentCards(selectContainer.value)) flag = true;
}
try {
  selectContainer.dispatchEvent(new Event("change"));
  assert.isTrue(flag);
} finally {
  console.log = temp;
}
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Instruments product page</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Student Instruments</h1>

    <main>
      <select class="select-container">
        <option id="all" value="all">All</option>
        <option id="woodwinds" value="woodwinds">Woodwinds</option>
        <option id="brass" value="brass">Brass</option>
        <option id="percussion" value="percussion">Percussion</option>
      </select>

      <div class="products-container">
        <div class="card">
          <h2>Flute</h2>
          <p>$500</p>
        </div>
        <div class="card">
          <h2>Clarinet</h2>
          <p>$200</p>
        </div>
        <div class="card">
          <h2>Oboe</h2>
          <p>$4000</p>
        </div>

        <div class="card">
          <h2>Trumpet</h2>
          <p>$200</p>
        </div>
        <div class="card">
          <h2>Trombone</h2>
          <p>$300</p>
        </div>
        <div class="card">
          <h2>French Horn</h2>
          <p>$4300</p>
        </div>

        <div class="card">
          <h2>Drum Set</h2>
          <p>$500</p>
        </div>
        <div class="card">
          <h2>Xylophone</h2>
          <p>$3000</p>
        </div>
        <div class="card">
          <h2>Cymbals</h2>
          <p>$200</p>
        </div>
        <div class="card">
          <h2>Marimba</h2>
          <p>$3000</p>
        </div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark-grey: #0a0a23;
  --white: #ffffff;
  --yellow: #f1be32;
}

body {
  background-color: var(--dark-grey);
  color: var(--white);
}

h1 {
  text-align: center;
  margin-top: 20px;
}

.select-container {
  display: block;
  margin: 25px auto;
  padding: 8px;
  border: 4px solid var(--white);
  border-radius: 4px;
  width: 200px;
}

.products-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

@media (min-width: 760px) {
  .products-container {
    flex-direction: row;
  }
}

.card {
  background-color: var(--white);
  color: var(--dark-grey);
  border: 4px solid var(--yellow);
  border-radius: 5px;
  padding: 10px;
  width: 200px;
}
```

```js
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
]

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");
--fcc-editable-region--
function instrumentCards(instrumentCategory) {
  
}

selectContainer.addEventListener("change", () => {
  console.log(selectContainer.value);
});
--fcc-editable-region--
```
