---
id: 6721128fdf008f9fd484486a
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Add another two objects to your `instrumentsArr` to represent the remaining woodwinds instruments, clarinet and oboe.

# --hints--

You should have `{ category: "woodwinds", instrument: "Clarinet", price: 200 }` inside your `instrumentsArr`.

```js
assert.deepInclude(instrumentsArr, { category: "woodwinds", instrument: "Clarinet", price: 200 });
```

You should have `{ category: "woodwinds", instrument: "Oboe", price: 4000 }` inside your `instrumentsArr`.

```js
assert.deepInclude(instrumentsArr, { category: "woodwinds", instrument: "Oboe", price: 4000 });
```

You should still have `{ category: "woodwinds", instrument: "Flute", price: 500 }` inside your `instrumentsArr`.

```js
assert.deepInclude(instrumentsArr, { category: "woodwinds", instrument: "Flute", price: 500 });
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
--fcc-editable-region--
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 }
]
--fcc-editable-region--
```
