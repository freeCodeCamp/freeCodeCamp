---
id: 64475c0b61cddb6feaab4e2e
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

Now you can alert the user if they don't enter a number, or the number is invalid before you attempt to convert it into binary.

In the body of the `if` statement, use the `alert()` method to display the text `"Please provide a decimal number greater than or equal to 0"`.

Note that `alert()` is a method on the `window` object in the browser, so you can use either `window.alert()` or `alert()`.

# --hints--

You should call the `alert()` method within the body of your `if` statement within `checkUserInput`.

```js
assert.match(String(checkUserInput), /if\s*\(\s*.+\s*\)\s*\{\s*(window\s*.)?\s*alert\(/);
```

When there is a falsy value in the `#number-input` element and the `checkUserInput()` function is called, the `alert()` method should display the text `"Please provide a decimal number greater than or equal to 0"`.

```js
const numberInput = document.getElementById("number-input");
let alertMessage;
window.alert = (message) => alertMessage = message; // Override alert and store message

numberInput.value = '';
checkUserInput();

assert.strictEqual(alertMessage.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'please provide a decimal number greater than or equal to 0');
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
      <label for="number-input">Enter a decimal number:</label>
      <input
        value=""
        type="number"
        name="decimal number input"
        id="number-input"
        class="number-input"
      />
      <button class="convert-btn" id="convert-btn">Convert</button>
    </div>
    <output id="result" for="number-input"></output>
    <h2>Call stack</h2>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console,
    monospace;
  font-size: 1.125rem;
  color: var(--light-grey);
  background-color: var(--dark-blue);
  padding: 0 15px;
}

h1 {
  font-size: 2.3rem;
  text-align: center;
  margin: 20px 0;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
  margin: 10px 0 20px 0;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.convert-btn {
  font-size: inherit;
  font-family: inherit;
  background-color: var(--orange);
  width: 5rem;
  height: 2rem;
  padding: 4px;
  border: none;
  cursor: pointer;
}

.number-input {
  font-size: inherit;
  padding: 0.3rem;
}

#result {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
  min-width: 200px;
  width: fit-content;
  min-height: 80px;
  margin: 10px 0;
  padding: 15px;
  border: 5px solid var(--orange);
}

#animation-container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  gap: 1rem;
  margin-inline: auto;
  margin-block-end: 1rem;
  width: clamp(320px, 30vw, 420px);
  min-height: 40vh;
  border: 2px solid var(--orange);
  padding: 1rem;
}

.animation-frame {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial,
    sans-serif;
  padding: 15px 10px;
  border: 5px solid var(--orange);
  font-size: 1.2rem;
  text-align: center;
}

@media screen and (min-width: 540px) {
  .input-container {
    flex-direction: row;
  }

  #result {
    max-width: 460px;
  }
}
```

```js
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
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
