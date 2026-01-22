---
id: 63e9eb5b2328eed3d194b28a
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like `type` and `target`.

Since you want to perform an action when the `Enter` key is pressed, the most helpful property is `key`, which tells you the string value of the key that was pressed.

Remove the `console.log()` statement from the callback function and add an `if` statement that checks if `e.key` is equal to the string `"Enter"`. Leave the body of your `if` statement empty for now.

Note: Since the `Enter` and `Return` keys have similar functions, they both have the same string value of `"Enter"`.

# --hints--

Your callback function should not contain a `console.log()` statement.

```js
assert.notMatch(code, /('|"|`)keydown\1\s*,\s*(\(\s*e\s*\)|e)\s*=>\s*{\s*.*console\.log\(/);
```

Your `if` statement should check if `e.key` is equal to the string `"Enter"`.

```js
assert.match(code, /if\s*\(\s*(?:e\s*\.\s*key\s*===?\s*('|"|`)Enter\1|('|"|`)Enter\2\s*===?\s*e\s*\.key)\s*\)\s*\{/);
```

The body of your `if` statement should be empty.

```js
assert.match(code, /if\s*\(\s*(?:e\s*\.\s*key\s*===?\s*('|"|`)Enter\1|('|"|`)Enter\2\s*===?\s*e\s*\.key)\s*\)\s*\{\s*\}/);
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

const checkUserInput = () => {
  console.log(numberInput.value);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  --fcc-editable-region--
  console.log(e);
  --fcc-editable-region--
});
```
