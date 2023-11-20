---
id: aaa48de84e1ecc7c742e1124
title: Build A Palindrome Checker
challengeType: 14
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

A <dfn>palindrome</dfn> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Objective:** Build an app that is functionally similar to <a href="https://palindrome-checker.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://palindrome-checker.freecodecamp.rocks</a>

**User Stories:**

1. Your palindrome checker should have an `input` element with an `id` of `text-input`
1. You should have a `button` element with an `id` of `btn` (is `check-btn` better?)
1. You should have a `div` element with an `id` of `result`
1. When you click on `#btn` without providing an input, an alert should appear with the text `Please input a value`
1. When `#text-input` contains special characters or digits and `#btn` is clicked, an alert should appear with the text `Input should not include numbers and special characters`
1. When `#text-input` contains the letter `A` and `#btn` is clicked, `#result` should contain the text `A is a palindrome`
1. When `#text-input` contains the word `eye` and `#btn` is clicked, `#result` should contain the text `eye is a palindrome`
1. When `#text-input` contains the words `race car` and `#btn` is clicked, `#result` should contain the text `race car is a palindrome`
1. When `#text-input` contains the text `not a palindrome` and `#btn` is clicked, `#result` should contain the text `not a palindrome is not a palindrome`
1. When `#text-input` contains the text `saippuakivikauppias` and `#btn` is clicked, `#result` should contain the text `saippuakivikauppias is a palindrome`

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

Your palindrome checker should have an `input` element with an `id` of `text-input`.

```js
const el = document.getElementById('text-input');
assert(!!el && el.nodeName.toLowerCase() === 'input');
```

You should have a `button` element with an `id` of `btn`.

```js
const el = document.getElementById('btn');
assert(!!el && el.nodeName.toLowerCase() === 'button');
```

You should have a `div` element with an `id` of `result`.

```js
const el = document.getElementById('result');
assert(!!el && el.nodeName.toLowerCase() === 'div');
```

When you click on `#btn` without providing an input, an alert should appear with the text `Please input a value`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'please input a value');
};

inputEl.value = '';
btnEl.click();
```

When `#text-input` contains special characters or digits and `#btn` is clicked, an alert should appear with the text `Input should not include numbers and special characters`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
// Override alert
window.alert = (message) => {
  assert(message.trim().toLowerCase() === 'input should not include numbers and special characters');
};

inputEl.value = 'racecar123!';
btnEl.click();
```

When `#text-input` contains the letter `A` and `#btn` is clicked, `#result` should contain the text `A is a palindrome`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

inputEl.value = 'A';
btnEl.click();
assert(resultEl.innerText.trim().match(/^a is a palindrome/i));
```

When `#text-input` contains the word `eye` and `#btn` is clicked, `#result` should contain the text `eye is a palindrome`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

inputEl.value = 'eye';
btnEl.click();
assert(resultEl.innerText.trim().match(/^eye is a palindrome/i));
```

When `#text-input` contains the words `race car` and `#btn` is clicked, `#result` should contain the text `race car is a palindrome`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

inputEl.value = 'race car';
btnEl.click();
assert(resultEl.innerText.trim().match(/^race car is a palindrome/i));
```

When `#text-input` contains the text `not a palindrome` and `#btn` is clicked, `#result` should contain the text `not a palindrome is not a palindrome`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

inputEl.value = 'not a palindrome';
btnEl.click();
assert(resultEl.innerText.trim().match(/^not a palindrome is not a palindrome/i));
```

When `#text-input` contains the text `saippuakivikauppias` and `#btn` is clicked, `#result` should contain the text `saippuakivikauppias is a palindrome`.

```js
const inputEl = document.getElementById('text-input');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

inputEl.value = 'saippuakivikauppias';
btnEl.click();
assert(resultEl.innerText.trim().match(/^saippuakivikauppias is a palindrome/i));
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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/png"
      href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
    />
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="container">
      <img
        class="freecodecamp-logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="freeCodeCamp Logo"
      />
      <h1 class="title">Is it a Palindrome?</h1>
      <div class="palindrome-div">
        <label for="text-input"
          >Enter in text to check for a palindrome:
        </label>
        <input class="palindrome-input" id="text-input" value="" type="text" />
        <button class="palindrome-btn" id="btn">Check</button>
        <div class="results-div hidden" id="result"></div>
      </div>
      <div class="palindrome-definition-div">
        <p class="palindrome-definition">
          <span role="img" aria-label="light-bulb">&#128161;</span>
          A <b>palindrome</b> is a word or phrase that can be read the same way
          forwards and backwards.
        </p>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #0a0a23;
  color: #ffffff;
}

.container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.freecodecamp-logo {
  height: 30px;
  margin-bottom: 20px;
}

.title {
  text-align: center;
  padding: 10px 0;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.palindrome-div {
  width: min(100vw, 450px);
  min-height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 6px 6px #002ead;
}

label {
  color: #0a0a23;
  margin-bottom: 20px;
}

.palindrome-btn {
  width: 90px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: #5a01a7;
  color: #fff;
  cursor: pointer;
}

.palindrome-input {
  height: 30px;
  width: 250px;
  text-align: center;
  font-size: 1.2rem;
  margin: 10px;
  border: none;
  border-bottom: 2px solid #5a01a7;
}

.palindrome-input:focus {
  border-bottom: 3px solid #5a01a7;
}

.palindrome-input::placeholder {
  text-align: center;
}

.user-input {
  font-size: 1.4rem;
  margin-top: 10px;
  text-align: center;
}

.results-div {
  overflow-y: auto;
  word-wrap: break-word;
  min-height: 50px;
  color: black;
}

.hidden {
  display: none;
}

.palindrome-definition-div {
  width: min(100vw, 450px);
  font-size: 1.3rem;
  min-height: 140px;
  background-color: #00471b;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.palindrome-definition {
  vertical-align: middle;
  text-align: center;
}
```

```js
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input; // Store for later output
  // Remove whitespace before checking for special characters and digits
  const hasSpecialCharactersOrDigits = /[\W\d_]/.test(input.replace(/\s/g, ''));

  if (input === '') {
    alert('Please input a value');
    return;
  }

  if (hasSpecialCharactersOrDigits === true) {
    alert('Input should not include numbers and special characters');
    return;
  }
  // Remove the previous result.
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Z0-9]/gi, '').toLowerCase();
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.appendChild(document.createTextNode(resultMsg));
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
```
