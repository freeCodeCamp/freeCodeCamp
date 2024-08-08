---
id: 6462060b0a8a2c15726649ec
title: Step 73
challengeType: 0
dashedName: step-73
---

# --description--

Now everything should work as expected. And since you know that `input` will either be the numbers `0` or `1` at this point, you can combine your two base cases and just return `input` as a string.

For a reliable way to convert a value into a string, even falsy values like `null` and `undefined`, you can use the `String()` function. For example:

```js
const num = 5;

console.log(String(num)); // "5"
console.log(String(null)); // "null"
```

Combine your `if` and `else if` statements into a single `if` statement checking if `input` is equal to `0` or `1`. If it is, use the `String()` function to convert `input` into a string and return it.

# --hints--

Your `decimalToBinary()` function should not have an `else if` statement.

```js
assert.notMatch(String(decimalToBinary), /else\s+if\s*\([\s\S]+\)/);
```

Your `decimalToBinary()` function should have an `if` statement that checks if `input` is equal to `0` or `1`.

```js
assert.match(String(decimalToBinary), /if\s*\(\s*input\s*===?\s*0\s*\|\|\s*input\s*===?\s*1\s*\)|if\s*\(\s*input\s*===?\s*1\s*\|\|\s*input\s*===?\s*0\s*\)/);
```

If input is equal to `0` or `1`, your `decimalToBinary()` function should return `String(input)`.

```js
assert.match(String(decimalToBinary), /if\s*\([\s\S]+\)\s*\{?\s*return\s+String\(\s*input\s*\)\s*;?\s*\}?/);
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
    <h1>
      Decimal to Binary <br />
      Converter
    </h1>
    <section class="input-container">
      <label for="number-input">Enter a decimal number:</label>
      <input
        value=""
        type="number"
        name="decimal number input"
        id="number-input"
        class="number-input"
      />
      <button class="convert-btn" id="convert-btn">Convert</button>
    </section>
    <section class="output-container">
      <output id="result" for="number-input"></output>
      <h2>Call stack</h2>
      <div id="animation-container"></div>
    </section>
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
  padding: 0 4px;
}

h1 {
  font-size: 2.125rem;
  text-align: center;
  margin: 20px 0;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
  margin: 20px 0;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: clamp(320px, 50vw, 460px);
  margin: 10px auto;
}

.input-container label {
  white-space: nowrap;
  word-spacing: -6px;
}

.convert-btn {
  font-size: inherit;
  font-family: inherit;
  background-color: var(--orange);
  width: 100%;
  height: 2rem;
  padding: 0 6px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.number-input {
  font-size: inherit;
  padding: 0.3rem;
  width: 100%;
}

.output-container {
  margin-inline: auto;
  width: clamp(320px, 50vw, 460px);
}

#result {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
  min-height: 80px;
  margin-block-start: 20px;
  padding: 15px;
  border: 2px solid var(--orange);
  border-radius: 2px;
}

#animation-container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  gap: 1rem;
  margin-block-end: 1rem;
  min-height: 40vh;
  border: 2px dashed var(--orange);
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

@media screen and (min-width: 36em) {
  body {
    font-size: 1rem;
  }

  .input-container {
    flex-direction: row;
    width: unset;
  }

  .number-input {
    width: unset;
  }
}
```

```js
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
--fcc-editable-region--
  if (input === 0) {
    return "0";
  } else if (input === 1) {
    return "1";
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
--fcc-editable-region--
};

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  result.textContent = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```
