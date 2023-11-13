---
id: a7f4d8f2483413a6ce226cac
title: Build A Roman Numeral Converter
challengeType: 14
forumTopicId: 16044
dashedName: build-a-roman-numeral-converter
---

# --description--

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals. For example:

| Roman numerals | Arabic numerals |
|----------------|-----------------|
| M              | 1000            |
| CM             | 900             |
| D              | 500             |
| CD             | 400             |
| C              | 100             |
| XC             | 90              |
| L              | 50              |
| XL             | 40              |
| X              | 10              |
| IX             | 9               |
| V              | 5               |
| IV             | 4               |
| I              | 1               |

**Objective:** Build an app that is functionally similar to <a href="https://roman-numeral-converter.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://roman-numeral-converter.freecodecamp.rocks</a>

**User Stories:**

1. You should have an `input` element with an `id` of `number`
1. You should have a `button` element with an `id` of `convert-btn`
1. You should have a `div` element with an `id` of `output`
1. When you click on `#convert-btn` without providing a value, an alert should appear with the text `Please enter a valid number`
1. When `#number` contains the number `-1` and `#convert-btn` is clicked, an alert should appear with the text `Please enter a number greater than or equal to 1`
1. When `#number` contains the number `4000` or greater and `#convert-btn` is clicked, an alert should appear with the text `Please enter a number less than or equal to 3999`
1. When `#number` contains the number `9` and `#convert-btn` is clicked, `#output` should contain the text `IX`
1. When `#number` contains the number `16` and `#convert-btn` is clicked, `#output` should contain the text `XVI`
1. When `#number` contains the number `649` and `#convert-btn` is clicked, `#output` should contain the text `DCXLIX`
1. When `#number` contains the number `1023` and `#convert-btn` is clicked, `#output` should contain the text `MXXIII`
1. When `#number` contains the number `3999` and `#convert-btn` is clicked, `#output` should contain the text `MMMCMXCIX`

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have an `input` element with an `id` of `number`.

```js
const el = document.getElementById('number');
assert(!!el && el.nodeName.toLowerCase() === 'input');
```

You should have a `button` element with an `id` of `convert-btn`.

```js
const el = document.getElementById('convert-btn');
assert(!!el && el.nodeName.toLowerCase() === 'button');
```

You should have a `div` element with an `id` of `output`.

```js
const el = document.getElementById('output');
assert(!!el && el.nodeName.toLowerCase() === 'div');
```

When you click on `#convert-btn` without providing a value, an alert should appear with the text `Please enter a valid number`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'please enter a valid number');
};

numberInputEl.value = '';
convertBtnEl.click();
```

When `#number` contains the number `-1` and `#convert-btn` is clicked, an alert should appear with the text `Please enter a number greater than or equal to 1`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'please enter a number greater than or equal to 1');
};

numberInputEl.value = '-1';
convertBtnEl.click();
```

When `#number` contains the number `4000` or greater and `#convert-btn` is clicked, an alert should appear with the text `Please enter a number less than or equal to 3999`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'please enter a number less than or equal to 3999');
};

numberInputEl.value = '4000';
convertBtnEl.click();
```

When `#number` contains the number `9` and `#convert-btn` is clicked, `#output` should contain the text `IX`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

numberInputEl.value = '9';
convertBtnEl.click();
assert(outputEl.innerText.trim() === 'IX');
```

When `#number` contains the number `16` and `#convert-btn` is clicked, `#output` should contain the text `XVI`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

numberInputEl.value = '16';
convertBtnEl.click();
assert(outputEl.innerText.trim() === 'XVI');
```

When `#number` contains the number `649` and `#convert-btn` is clicked, `#output` should contain the text `DCXLIX`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

numberInputEl.value = '649';
convertBtnEl.click();
assert(outputEl.innerText.trim() === 'DCXLIX');
```

When `#number` contains the number `1023` and `#convert-btn` is clicked, `#output` should contain the text `MXXIII`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

numberInputEl.value = '1023';
convertBtnEl.click();
assert(outputEl.innerText.trim() === 'MXXIII');
```

When `#number` contains the number `3999` and `#convert-btn` is clicked, `#output` should contain the text `MMMCMXCIX`.

```js
const numberInputEl = document.getElementById('number');
const convertBtnEl = document.getElementById('convert-btn');
const outputEl = document.getElementById('output');

numberInputEl.value = '3999';
convertBtnEl.click();
assert(outputEl.innerText.trim() === 'MMMCMXCIX');
```

# --seed--

## --seed-contents--

```html

```

```css

```

```js

```

## --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link
      rel="icon"
      type="image/png"
      href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
    />
    <title>Roman Numeral Converter</title>
  </head>
  <body>
    <main>
      <img
        class="freecodecamp-logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_secondary.svg"
        alt="freeCodeCamp Logo"
      />
      <h1>Roman Numeral Converter</h1>
      <form id="form" class="form">
        <fieldset>
          <label for="number">Enter a Number:</label><br />
          <input type="number" id="number" required />
          <button type="button" id="convert-btn">Convert</button>
        </fieldset>
      </form>
      <div id="output" class="output hidden"></div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

```css
:root {
  --gray-00: #ffffff;
  --gray-05: #f5f6f7;
  --gray-15: #d0d0d5;
  --gray-75: #3b3b4f;
  --gray-85: #1b1b32;
  --gray-90: #0a0a23;
  --error: #a94442;
  --danger-color: #850000;
  --danger-background: #ffadad;
}

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: #dfdfe2;
  color: var(--gray-85);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.freecodecamp-logo {
  height: 30px;
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  margin: 20px auto;
  max-width: 350px;
  font-family: 'Castoro Titling', cursive;
}

form {
  color: white;
  margin: auto 25px;
  padding: 15px auto;
  border: 3px solid var(--gray-90);
  text-align: center;
  width: 90%;
  background-color: var(--gray-85);
}

fieldset {
  border: 0 none;
  height: 100%;
  padding: 25px;
  margin: 10px 20px;
}

label {
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

input {
  display: block;
  font-size: 2.5rem;
  width: 100%;
  height: 60px;
  padding: 6px 12px;
  margin: 10px 0;
  line-height: 1.4;
  color: white;
  background-color: var(--gray-90);
  border-color: var(--gray-85);
  border-radius: 0;
  outline: none;
  outline-style: none;
}

button {
  outline: none;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
  padding: 10px 16px;
  font-size: 23px;
  width: 100%;
}

.output {
  color: white;
  background-color: var(--gray-85);
  border: 3px solid var(--gray-90);
  font-size: 2.5rem;
  width: 90%;
  min-height: 55px;
  margin-top: 25px;
  border-radius: 0;
  padding: 15px;
  overflow-wrap: break-word;
  text-align: center;
}

.alert {
  font-size: 2rem;
  background-color: var(--danger-background);
  border: 3px solid var(--danger-color);
  color: var(--danger-color);
}

.hidden {
  display: none;
}

@media (min-width: 700px) {
  form,
  .output {
    max-width: 450px;
  }
}
```

```js
const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

const isValid = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    errText = 'Please enter a number less than or equal to 3999.';
  } else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = errText;
  output.classList.add('alert');

  return false;
};

const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUI();
});

convertButton.addEventListener('click', () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clearOutput();

  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
};
```
