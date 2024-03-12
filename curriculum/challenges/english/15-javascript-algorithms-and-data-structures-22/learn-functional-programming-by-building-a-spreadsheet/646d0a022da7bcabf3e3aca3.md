---
id: 646d0a022da7bcabf3e3aca3
title: Step 45
challengeType: 0
dashedName: step-45
---

# --description--

The concept of returning a function within a function is called <dfn>currying</dfn>. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call.

For example:

```js
const innerOne = elemValue(1);
const final = innerOne("A");
```

`innerOne` would be your `inner` function, with `num` set to `1`, and `final` would have the value of the cell with the `id` of `A1`. This is possible because functions have access to all variables declared at their creation. This is called <dfn>closure</dfn>.

You'll get some more practice with this. Declare a function called `addCharacters` which takes a `character1` parameter.

# --hints--

You should declare an `addCharacters` variable.

```js
assert.match(code, /const\s+evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*(\(\s*id\s*\)|id)\s*=>\s*cells\.find\(\s*(\(\s*cell\s*\)|cell)\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value\s*;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig)\s*;?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\)\s*;?\s*const\s+elemValue\s*=\s*(\(\s*num\s*\)|num)\s*=>\s*\{\s*const\s+inner\s*=\s*(\(\s*character\s*\)|character)\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\)\s*;?\s*}\s*;?\s*return\s+inner\s*;?\s*\}\s*(?:var|let|const)\s+addCharacters/);
```

You should use `const` to declare your `addCharacters` variable.

```js
assert.match(code, /const\s+evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*(\(\s*id\s*\)|id)\s*=>\s*cells\.find\(\s*(\(\s*cell\s*\)|cell)\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value\s*;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig)\s*;?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\)\s*;?\s*const\s+elemValue\s*=\s*(\(\s*num\s*\)|num)\s*=>\s*\{\s*const\s+inner\s*=\s*(\(\s*character\s*\)|character)\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\)\s*;?\s*}\s*;?\s*return\s+inner\s*;?\s*\}\s*const\s+addCharacters/);
```

Your `addCharacters` variable should be an arrow function.

```js
assert.match(code, /const\s+evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*(\(\s*id\s*\)|id)\s*=>\s*cells\.find\(\s*(\(\s*cell\s*\)|cell)\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value\s*;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig)\s*;?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\)\s*;?\s*const\s+elemValue\s*=\s*(\(\s*num\s*\)|num)\s*=>\s*\{\s*const\s+inner\s*=\s*(\(\s*character\s*\)|character)\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\)\s*;?\s*}\s*;?\s*return\s+inner\s*;?\s*\}\s*const\s+addCharacters\s*=\s*(\(.*\)|[^\s()]+)\s*=>/);
```

Your `addCharacters` function should not use an implicit return.

```js
assert.match(code, /const\s+evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*(\(\s*id\s*\)|id)\s*=>\s*cells\.find\(\s*(\(\s*cell\s*\)|cell)\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value\s*;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig)\s*;?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\)\s*;?\s*const\s+elemValue\s*=\s*(\(\s*num\s*\)|num)\s*=>\s*\{\s*const\s+inner\s*=\s*(\(\s*character\s*\)|character)\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\)\s*;?\s*}\s*;?\s*return\s+inner\s*;?\s*\}\s*const\s+addCharacters\s*=\s*(\(.*\)|[^\s()]+)\s*=>\s*\{/);
```

Your `addCharacters` function should have a `character1` parameter.

```js
assert.match(code, /const\s+evalFormula\s*=\s*\(\s*x\s*,\s*cells\s*\)\s*=>\s*{\s*const\s+idToText\s*=\s*(\(\s*id\s*\)|id)\s*=>\s*cells\.find\(\s*(\(\s*cell\s*\)|cell)\s*=>\s*(?:cell\.id\s*===\s*id|id\s*===\s*cell\.id)\s*\)\.value\s*;?\s*const\s+rangeRegex\s*=\s*\/\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\):\(\[A-J\]\)\(\[1-9\]\[0-9\]\?\)\/(gi|ig)\s*;?\s*const\s+rangeFromString\s*=\s*\(\s*num1\s*,\s*num2\s*\)\s*=>\s*range\(\s*parseInt\(\s*num1\s*\)\s*,\s*parseInt\(\s*num2\s*\)\s*\)\s*;?\s*const\s+elemValue\s*=\s*(\(\s*num\s*\)|num)\s*=>\s*\{\s*const\s+inner\s*=\s*(\(\s*character\s*\)|character)\s*=>\s*\{\s*return\s+idToText\(\s*character\s*\+\s*num\s*\)\s*;?\s*}\s*;?\s*return\s+inner\s*;?\s*\}\s*const\s+addCharacters\s*=\s*(\(\s*character1\s*\)|character1)\s*=>/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Functional Programming Spreadsheet</title>
  </head>
  <body>
    <div id="container">
      <div></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
#container {
  display: grid;
  grid-template-columns: 50px repeat(10, 200px);
  grid-template-rows: repeat(11, 30px);
}

.label {
  background-color: lightgray;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
}
```

```js
const isEven = num => num % 2 === 0;
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const average = nums => sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}

const spreadsheetFunctions = {
  sum,
  average,
  median
}

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

--fcc-editable-region--
const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => {
    const inner = character => {
      return idToText(character + num);
    }
    return inner;
  }

}
--fcc-editable-region--

window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      input.onchange = update;
      container.appendChild(input);
    })
  })
}

const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {

  }
}
```
