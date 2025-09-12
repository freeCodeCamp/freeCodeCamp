---
id: 67c562286b29447da020d407
title: Build a One-Time Password Generator
challengeType: 25
dashedName: build-a-one-time-password-generator
demoType: onClick
---

# --description--

In this lab, you will generate a 6-digit OTP (One-Time Password) and display it to the user. The OTP will expire after 5 seconds, and a new OTP will be generated when the user clicks the `"Generate New OTP"` button.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab. 

**User Stories:**

1. You should use the `useEffect` hook to manage the countdown timer.
2. Your `OTPGenerator` component should return a `div` element with the class name `container`.
3. The `div` having the class `container` should include the following elements:

    - An `h1` element with the ID `otp-title` and text `"OTP Generator"`.
    - An `h2` element with the ID `otp-display` that either displays the message `"Click 'Generate OTP' to get a code"` or shows the generated OTP if one is available.
    - A `p` element with the ID `otp-timer` and `aria-live` attribute set to a valid value that:
        - Starts off empty.
        - Displays `"Expires in: X seconds"` after the button is clicked, where `X` represents the remaining time before the OTP expires.
        - Shows the message `"OTP expired. Click the button to generate a new OTP."` once the countdown reaches `0`.
    - A `button` element with the ID `generate-otp-button` labeled `"Generate OTP"`. When clicked, it should generate a new OTP and start a 5-second countdown.
    - The `"Generate OTP"` button must be disabled while the countdown is active.

4. You should ensure the countdown timer stops automatically once it reaches `0` seconds to prevent unnecessary updates.
5. The generated OTP should be 6 digits long.

# --before-all--

```js
let clock = __FakeTimers.install();
```

# --after-all--

```js
clock.uninstall();
```

# --hints--

You should not remove the existing `const { useState, useEffect, useRef } = React;` assignment from the code.

```js
assert.match(code, /{\s*(useState\s*,\s*useEffect\s*,\s*useRef|useState\s*,\s*useRef\s*,\s*useEffect|useEffect\s*,\s*useState\s*,\s*useRef|useEffect\s*,\s*useRef\s*,\s*useState|useRef\s*,\s*useState\s*,\s*useEffect|useRef\s*,\s*useEffect\s*,\s*useState|useState|useEffect|useRef)\s*}\s*=\s*React;/);
```

You should render a `div` with the class `.container`.

```js
const containerDiv = document.querySelector('.container');
assert.exists(containerDiv);
```

The `.container` should contain an `h1` element with the ID `otp-title` the text `"OTP Generator"`.

```js
const h1 = document.querySelector(".container h1#otp-title");
assert.exists(h1);
assert.equal(h1.textContent, "OTP Generator");
```

The `.container` should contain an `h2` element with the ID `otp-display` that displays the OTP when generated. 

```js
const h2 = document.querySelector(".container h2#otp-display");
assert.exists(h2);
```

Initially, the `h2` inside `.container` should display the message `"Click 'Generate OTP' to get a code"`.

```js
assert.strictEqual(document.querySelector('.container h2#otp-display').textContent.trim(), "Click 'Generate OTP' to get a code");
```

The `.container` element should contain a `p` element with the ID `otp-timer`.

```js
const container = document.querySelector('.container');
assert.exists(container, "The container element should exist");
const pElements = container.querySelectorAll('p');
assert.strictEqual(pElements.length, 1);
assert.strictEqual(pElements[0].id, "otp-timer", "The p element should have the id otp-timer");
```

The `p` element should have an `aria-live` attribute set to `assertive` or `polite`.

```js
const pElement = document.querySelector('.container p');
assert.exists(pElement?.ariaLive);
assert.oneOf(pElement?.ariaLive, ["assertive", "polite"]);
```

Initially, the `p` element should be empty.

```js
const pElement = document.querySelector('.container p');
assert.strictEqual(pElement?.innerText, "", "The `p` element should be empty");
```

The `.container` should contain a `button` element with the ID `generate-otp-button` and text `"Generate OTP"`. 

```js
const button = document.querySelector('.container button#generate-otp-button').textContent;
assert.exists(button);
assert.strictEqual(button, 'Generate OTP');
```

When the button is clicked, it should display a new OTP in the `h2` element with id `otp-display`.

```js
try {
// allow the page to render
clock.tick(1)
const button = document.querySelector(".container button#generate-otp-button");
const h2 = document.querySelector(".container h2#otp-display");

button.click();

clock.tick(300)

assert.match(h2.textContent?.trim(), /[0-9]/, "OTP should be a number");
} finally {
// we need to wait for the countdown to finish for the next test to work otherwise the button will be disabled
await clock.runAllAsync();
}
```

The generated OTP should be 6 digits long.

```js
  try {
const button = document.querySelector(".container button#generate-otp-button");
button.click();
clock.tick(1);
const h2 = document.querySelector(".container h2#otp-display");

assert.match(h2.textContent.trim(), /^[0-9]{6}$/, "OTP should be a 6-digit number");

 } finally {
// we need to wait for the countdown to finish for the next test to work otherwise the button will be disabled
await clock.runAllAsync();
}
```


When the button is clicked, the `p` element with id of `otp-timer` should show a 5-second countdown.

```js
  try {
// allow the page to render
clock.tick(1)
const button = document.querySelector(".container button#generate-otp-button");
const h2 = document.querySelector(".container h2#otp-display");

button.click();

clock.tick(300)
const p = document.querySelector(".container p#otp-timer");
assert.match(p.textContent, /Expires in: 5 seconds/, "Countdown should start at 5 seconds");

  } finally {
// we need to wait for the countdown to finish for the next test to work otherwise the button will be disabled
await clock.runAllAsync();
}
```

The message in the `p` element with id `otp-timer` should update every second to show the remaining time.

```js
const button = document.querySelector(".container button#generate-otp-button");
button.click();
clock.tick(1)
let p = document.querySelector(".container p#otp-timer");
assert.match(p.textContent, /Expires in: 5 seconds/);
await clock.tickAsync(1000)
p = document.querySelector(".container p#otp-timer");
assert.match(p.textContent, /Expires in: 4 seconds/, "Countdown should update to 4 seconds after 1 second");
```

The `"Generate OTP"` button should be disabled while the countdown timer is running.

```js
try {
  const button = document.querySelector(".container button#generate-otp-button");
  button.click();
  clock.tick(1);
  
  assert.isTrue(button.disabled);
} finally {
  await clock.runAllAsync();
}
```

The `"Generate OTP"` button should be enabled once the countdown timer reaches 0.

```js

const button = document.querySelector(".container button#generate-otp-button");
button.click();
await clock.tickAsync(6000);
  
assert.isFalse(button.disabled);
```

When the countdown timer reaches `0`, you should display the message `OTP expired. Click the button to generate a new OTP.`.

```js
  const button = document.querySelector(".container button#generate-otp-button");
  button.click();

  await clock.tickAsync(6000);

  const p = document.querySelector(".container p#otp-timer");
  assert.equal(p.textContent.trim(), "OTP expired. Click the button to generate a new OTP.");
```

You should export the `OTPGenerator` component.

```js
assert.isFunction(window.index.OTPGenerator);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>OTP Generator</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
</head>

<body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { OTPGenerator } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<OTPGenerator />);
    </script>
</body>

</html>
```

```css

```

```jsx
const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {};
```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>OTP Generator</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.development.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.5/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { OTPGenerator } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<OTPGenerator />);
    </script>
</body>

</html>
```

```css
body {
    font-family: 'Castoro Titling', cursive;
}

.container {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 30px;
    color: #333;
}

h2 {
    font-size: 25px;
    color: #555;
}

p {
    font-size: 16px;
    color: #888;
}

button {
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    border: none;
    background-color: #383f59;
    color: white;
    border-radius: 5px;
}

button:disabled {
  background-color:#57585c;
  cursor: not-allowed;
}

button:hover {
    background-color: #444;
}
```

```jsx
const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const intervalId = useRef(null);
  const [otp, setOtp] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const [hasGeneratedOtp, setHasGeneratedOtp] = useState(false);

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

  const handleGenerateOtp = () => {
    setOtp(generateOTP());
    setSecondsLeft(5);
    setIsCounting(true);
    setHasGeneratedOtp(true);
    intervalId.current = setInterval(() => {
      setSecondsLeft(prevSeconds => prevSeconds - 1);
    }, 1000);
  };

  useEffect(() => {
    if (secondsLeft === 0) {
      setIsCounting(false);
      clearInterval(intervalId.current);
    }
  }, [secondsLeft]);

  useEffect(
    () => () => {
      clearInterval(intervalId.current);
    },
    []
  );

  return (
    <div className='container'>
      <h1 id='otp-title'>OTP Generator</h1>
      <h2 id='otp-display'>
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id='otp-timer' aria-live='assertive'>
        {isCounting
          ? `Expires in: ${secondsLeft} seconds`
          : hasGeneratedOtp && 
            "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        id='generate-otp-button'
        onClick={handleGenerateOtp}
        disabled={isCounting}
      >
        Generate OTP
      </button>
    </div>
  );
};
```
