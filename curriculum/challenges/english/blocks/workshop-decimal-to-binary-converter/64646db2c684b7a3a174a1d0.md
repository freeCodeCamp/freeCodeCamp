---
id: 64646db2c684b7a3a174a1d0
title: Step 81
challengeType: 0
dashedName: step-81
---

# --description--

If you test your code, you'll notice that your console logs are not in the expected order. Instead of logging `"free"`, pausing for a second before logging `"Code"`, and finally logging `"Camp"`, you'll see this:

```md
free
Camp
Code
```

This is because the `setTimeout()` function is <dfn>asynchronous</dfn>, meaning that it doesn't stop the execution of the rest of your code. All the code in the `showAnimation()` function runs line by line, but because `setTimeout()` is asynchronous, `free` and `Camp` are logged to the console immediately, and then `Code` is logged to the console after a one second delay.

One way to fix this is to use multiple `setTimeout()` functions. Use `setTimeout()` to log `free` to the console after half a second, or `500` milliseconds.

# --hints--

You should add a second `setTimeout()` function to your `showAnimation()` function.

```js
assert.lengthOf(
  code.match(/setTimeout\(/g),
  2
);
```

You should pass a callback function as the first argument to the new `setTimeout()` function.

```js
assert.lengthOf(
  code.match(/setTimeout\(\s*\(\s*\)\s*=>\s*\{?|setTimeout\(\s*function\s*\(\s*\)\s*\{/g),
  2
);
```

Within the new `setTimeout()` function's callback, you should log the text `"free"` to the console.

```js
assert.match(code, /setTimeout\(\s*\(\s*\)\s*=>\s*\{?\s*console\.log\(\s*('|"|`)\s*free\s*\1\s*\)|setTimeout\(\s*function\s*\(\s*\)\s*\{\s*console\.log\(\s*('|"|`)\s*free\s*\2\s*\)/i);
```

You should pass `500` as the second argument to the new `setTimeout()` function.

```js
assert.match(code, /console\.log\(\s*('|"|`)\s*free\s*\1\s*\)\s*;?\s*\}?\s*,\s*500\s*\)/);
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
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
--fcc-editable-region--
  console.log("free");
--fcc-editable-region--
  setTimeout(() => {
    console.log("Code");
  }, 1000);
  console.log("Camp");
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```
