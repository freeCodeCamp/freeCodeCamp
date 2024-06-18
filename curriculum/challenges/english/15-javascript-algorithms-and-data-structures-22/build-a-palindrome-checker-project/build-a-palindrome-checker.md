---
id: 657bdc55a322aae1eac3838f
title: Build a Palindrome Checker
challengeType: 14
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

A <dfn>palindrome</dfn> is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.

**Note:** You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

**Objective:** Build an app that is functionally similar to <a href="https://palindrome-checker.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://palindrome-checker.freecodecamp.rocks</a>

**User Stories:**

1. You should have an `input` element with an `id` of `"text-input"`
1. You should have a `button` element with an `id` of `"check-btn"`
1. You should have a `div`, `span` or `p` element with an `id` of `"result"`
1. When you click on the `#check-btn` element without entering a value into the `#text-input` element, an alert should appear with the text `"Please input a value"`
1. When the `#text-input` element only contains the letter `A` and the `#check-btn` element is clicked, the `#result` element should contain the text `"A is a palindrome"`
1. When the `#text-input` element contains the text `eye` and the `#check-btn` element is clicked, the `#result` element should contain the text `"eye is a palindrome"`
1. When the `#text-input` element contains the text `_eye` and the `#check-btn` element is clicked, the `#result` element should contain the text `"_eye is a palindrome"`
1. When the `#text-input` element contains the text `race car` and the `#check-btn` element is clicked, the `#result` element should contain the text `"race car is a palindrome"`
1. When the `#text-input` element contains the text `not a palindrome` and the `#check-btn` element is clicked, the `#result` element should contain the text `"not a palindrome is not a palindrome"`
1. When the `#text-input` element contains the text `A man, a plan, a canal. Panama` and the `#check-btn` element is clicked, the `#result` element should contain the text `"A man, a plan, a canal. Panama is a palindrome"`
1. When the `#text-input` element contains the text `never odd or even` and the `#check-btn` element is clicked, the `#result` element should contain the text `"never odd or even is a palindrome"`
1. When the `#text-input` element contains the text `nope` and the `#check-btn` element is clicked, the `#result` element should contain the text `"nope is not a palindrome"`
1. When the `#text-input` element contains the text `almostomla` and the `#check-btn` element is clicked, the `#result` element should contain the text `"almostomla is not a palindrome"`
1. When the `#text-input` element contains the text `My age is 0, 0 si ega ym.` and the `#check-btn` element is clicked, the `#result` element should contain the text `"My age is 0, 0 si ega ym. is a palindrome"`
1. When the `#text-input` element contains the text `1 eye for of 1 eye.` and the `#check-btn` element is clicked, the `#result` element should contain the text `"1 eye for of 1 eye. is not a palindrome"`
1. When the `#text-input` element contains the text `0_0 (: /-\ :) 0-0` and the `#check-btn` element is clicked, the `#result` element should contain the text `"0_0 (: /-\ :) 0-0 is a palindrome"`
1. When the `#text-input` element contains the text `five|\_/|four` and the `#check-btn` element is clicked, the `#result` element should contain the text `"five|\_/|four is not a palindrome"`

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have an `input` element with an `id` of `"text-input"`.

```js
const el = document.getElementById('text-input');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'input');
```

You should have a `button` element with an `id` of `"check-btn"`.

```js
const el = document.getElementById('check-btn');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'button');
```

You should have a `div`, `span`, or `p` element with an `id` of `result`.

```js
const el = document.getElementById('result');
assert(['div', 'span', 'p'].includes(el?.nodeName?.toLowerCase()));
```

When you click on the `#check-btn` element without entering a value into the `#text-input` element, an alert should appear with the text `"Please input a value"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
let alertMessage;
window.alert = (message) => alertMessage = message; // Override alert and store message

inputEl.value = '';
checkBtn.click();
assert.strictEqual(alertMessage.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'please input a value');
```

When the `#text-input` element only contains the letter `A` and the `#check-btn` element is clicked, the `#result` element should contain the text `"A is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'A';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'a is a palindrome');
```

When the `#text-input` element contains the text `eye` and the `#check-btn` element is clicked, the `#result` element should contain the text `"eye is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'eye';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'eye is a palindrome');
```

When the `#text-input` element contains the text `_eye` and the `#check-btn` element is clicked, the `#result` element should contain the text `"_eye is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = '_eye';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), '_eye is a palindrome');
```

When the `#text-input` element contains the text `race car` and the `#check-btn` element is clicked, the `#result` element should contain the text `"race car is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'race car';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'race car is a palindrome');
```

When the `#text-input` element contains the text `not a palindrome` and the `#check-btn` element is clicked, the `#result` element should contain the text `"not a palindrome is not a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'not a palindrome';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'not a palindrome is not a palindrome');
```

When the `#text-input` element contains the text `A man, a plan, a canal. Panama` and the `#check-btn` element is clicked, the `#result` element should contain the text `"A man, a plan, a canal. Panama is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'A man, a plan, a canal. Panama';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'a man, a plan, a canal. panama is a palindrome');
```

When the `#text-input` element contains the text `never odd or even` and the `#check-btn` element is clicked, the `#result` element should contain the text `"never odd or even is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'never odd or even';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'never odd or even is a palindrome');
```

When the `#text-input` element contains the text `nope` and the `#check-btn` element is clicked, the `#result` element should contain the text `"nope is not a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'nope';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'nope is not a palindrome');
```

When the `#text-input` element contains the text `almostomla` and the `#check-btn` element is clicked, the `#result` element should contain the text `"almostomla is not a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'almostomla';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'almostomla is not a palindrome');
```

When the `#text-input` element contains the text `My age is 0, 0 si ega ym.` and the `#check-btn` element is clicked, the `#result` element should contain the text `"My age is 0, 0 si ega ym. is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'My age is 0, 0 si ega ym.';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'my age is 0, 0 si ega ym. is a palindrome');
```

When the `#text-input` element contains the text `1 eye for of 1 eye.` and the `#check-btn` element is clicked, the `#result` element should contain the text `"1 eye for of 1 eye. is not a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = '1 eye for of 1 eye.';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), '1 eye for of 1 eye. is not a palindrome');
```

When the `#text-input` element contains the text `0_0 (: /-\ :) 0-0` and the `#check-btn` element is clicked, the `#result` element should contain the text `"0_0 (: /-\ :) 0-0 is a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = '0_0 (: /-\ :) 0-0';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), '0_0 (: /-\ :) 0-0 is a palindrome');
```

When the `#text-input` element contains the text `five|\_/|four` and the `#check-btn` element is clicked, the `#result` element should contain the text `"five|\_/|four is not a palindrome"`.

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

inputEl.value = 'five|\_/|four';
inputEl.dispatchEvent(new Event('change'))
checkBtn.click();
assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'five|\_/|four is not a palindrome');
```

When the `#text-input` element contains an alphanumeric palindrome, the `#result` element should correctly identify it as a palindrome. 

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

const firstLetter = characters.charAt(Math.floor(Math.random() * charactersLength));
const secondLetter = characters.charAt(Math.floor(Math.random() * charactersLength));
const thirdLetter = characters.charAt(Math.floor(Math.random() * charactersLength));
const fourthLetter = characters.charAt(Math.floor(Math.random() * charactersLength));

const phrase = firstLetter + secondLetter + thirdLetter + fourthLetter + fourthLetter + thirdLetter + secondLetter + firstLetter;

inputEl.value = phrase;
checkBtn.click();

assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), phrase + ' is a palindrome');
```

When the `#text-input` element contains a random sequence of alphanumeric characters that is not a palindrome, the `#result` element should say it is not a palindrome. 

```js
const inputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultEl = document.getElementById('result');

let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let charactersLength = characters.length;

const firstIndex = Math.floor(Math.random() * charactersLength);
const firstLetter = characters.charAt(firstIndex);
characters = characters.slice(0,firstIndex) + characters.slice(firstIndex + 1);
charactersLength--; 


const secondIndex = Math.floor(Math.random() * charactersLength); 
const secondLetter = characters.charAt(secondIndex);
characters = characters.slice(0,secondIndex) + characters.slice(secondIndex + 1);
charactersLength--; 

const thirdIndex = Math.floor(Math.random() * charactersLength); 
const thirdLetter = characters.charAt(thirdIndex);
characters = characters.slice(0,thirdIndex) + characters.slice(thirdIndex + 1);
charactersLength--; 

const fourthIndex = Math.floor(Math.random() * charactersLength); 
const fourthLetter = characters.charAt(fourthIndex);
characters = characters.slice(0,fourthIndex) + characters.slice(fourthIndex + 1);
charactersLength--; 

const phrase = firstLetter + secondLetter + thirdLetter + fourthLetter;

inputEl.value = phrase;
checkBtn.click();

assert.strictEqual(resultEl.innerText.trim().replace(/[.,?!]+$/g, '').toLowerCase(), phrase + ' is not a palindrome');
```

# --seed--

## --seed-contents--

```html

```

```css

```

```js

```

# --solutions--

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
        <button class="palindrome-btn" id="check-btn">Check</button>
        <div class="results-div hidden" id="result"></div>
      </div>
      <div class="palindrome-definition-div">
        <p class="palindrome-definition">
          <span role="img" aria-label="light-bulb">&#128161;</span>
          A <dfn>palindrome</dfn> is a word or sentence that's spelled the same
          way both forward and backward, ignoring punctuation, case, and
          spacing.
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
const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = (input) => {
  const originalInput = input; // Store for later output

  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove("hidden");
};

checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = "";
  }
});
```
