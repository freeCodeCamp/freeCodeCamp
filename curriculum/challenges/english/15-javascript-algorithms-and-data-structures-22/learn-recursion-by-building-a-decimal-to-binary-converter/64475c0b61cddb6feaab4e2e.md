---
id: 64475c0b61cddb6feaab4e2e
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

Now you can alert the user if they don't enter a number, or the number is invalid before you attempt to convert it into binary.

In the body of the `if` statement, use the `alert()` method to display the text `Please provide a valid number`.

Note that `alert()` is a method on the `window` object in the browser, so you can use either `window.alert()` or `alert()`.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Decimal to Binary Converter</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <h1>Decimal to Binary Converter</h1>
    <div class="input-container">
      <input
        value=""
        placeholder="Type in a number"
        type="number"
        name="decimal"
        id="number"
        class="number-input"
      />
      <button class="convert-btn" id="convert">Convert</button>
    </div>

    <h2 id="result"></h2>
    <div id="animation-container"></div>
    <script src="script.js"></script>
  </body>
</html>
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --light-grey: #f5f6f7;
  --dark-blue: #1b1b32;
  --orange: #f1be32;
}

body {
  background-color: var(--dark-blue);
  font-family: "Times New Roman", Times, serif;
  color: var(--light-grey);
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin: 20px 0;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.convert-btn {
  background-color: var(--orange);
  cursor: pointer;
  border: none;
  padding: 4px;
}

.number-input {
  height: 25px;
}

#result {
  width: 200px;
  min-height: 80px;
  padding: 15px 0;
  margin: 30px auto 0;
  border: 5px solid var(--orange);
  font-size: 2rem;
  text-align: center;
}

#animation-container {
  margin: auto;
  max-width: 300px;
}

.animation-frame {
  margin: 250px auto 0;
  padding: 15px 10px;
  border: 5px solid var(--orange);
  font-size: 1.2rem;
  text-align: center;
}
```

```js
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");

const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    --fcc-editable-region--

    --fcc-editable-region--
  }

  console.log(numberInput.value);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```
