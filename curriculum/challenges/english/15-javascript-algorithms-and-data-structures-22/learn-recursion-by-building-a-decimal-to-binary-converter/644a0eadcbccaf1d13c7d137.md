---
id: 644a0eadcbccaf1d13c7d137
title: Step 19
challengeType: 0
dashedName: step-19
---

# --description--

In the base-2 number system, the rightmost digit represents the ones place, the next digit to the left represents the twos place, then the fours place, then the eights place, and so on. In this system, each digit's place value is two times greater than the digit to its right.

Here are numbers zero to nine in the base-10 and base-2 number systems:

```md
| Base-10 | Base-2 |
| ------- | ------ |
|    0    |  0     |
|    1    |  1     |
|    2    |  10    |
|    3    |  11    |
|    4    |  100   |
|    5    |  101   |
|    6    |  110   |
|    7    |  111   |
|    8    |  1000  |
|    9    |  1001  |
```

Notice that binary numbers are formed from left to right, from the digit with the greatest place value on the left, to the least significant on the right. For example, the number `3` in binary is `11`, or `1` in the twos place and `1` in the ones place. Then for the number `4`, a digit to represent the fours place is included on the left and set to `1`, the twos place is `0`, and the ones place is `0`.

In your `decimalToBinary` function, convert the number `10` into binary and `return` it as a string.

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

const decimalToBinary = (input) => {
--fcc-editable-region--
  return "1";
--fcc-editable-region--
};

const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a number");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```
