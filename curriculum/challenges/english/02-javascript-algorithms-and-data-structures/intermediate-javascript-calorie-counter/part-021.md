---
id: 5e302e80e003129199103c78
title: Part 21
challengeType: 0
dashedName: part-21
---

# --description--

To track how the `reduce()` function works, log the values of the `accumulator` and `currentValue` in the callback function before the `return` statement like this: `console.log({ accumulator })`

You can also check your progress by adding `console.log({ total })` at the end of the `calculate()` function.

When you enter calorie values in the form and push the Calculate button, you will see the values of `accumulator` and `currentValue` in each iteration of the `reduce()` callback function.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').match(/console.log\({accumulator}\)/));
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <form id="calorie-form">
        <h2 class="center">Calorie Counter</h2>
        <div class="grid">
          <legend>Sex</legend>
          <div>
            <input type="radio" name="sex" id="female" value="F" checked />
            <label for="female">
              Female (2,000 calories)
            </label>

            <div>
              <input type="radio" name="sex" id="male" value="M" />
              <label for="male">
                Male (2,500 calories)
              </label>
            </div>
          </div>
        </div>
        <div class="grid" id="entries">
          Breakfast
          <input
            type="number"
            min="0"
            class="cal-control"
            id="breakfast"
          /><br />
          Lunch
          <input type="number" min="0" class="cal-control" id="lunch" /><br />
          Dinner <input type="number" min="0" class="cal-control" id="dinner" />
        </div>
        <button type="button" class="btn-add" id="add">
          Add Entry
        </button>
        <button type="submit" class="btn-solid" id="calculate">
          Calculate
        </button>
        <button type="button" class="btn-outline" id="clear">
          Clear
        </button>
      </form>
      <div id="output"></div>
    </div>
  </body>
</html>
```

## --after-user-code--

```html
  </body>
</html>
```

## --seed-contents--

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();

    const total = Array.from(document.getElementsByClassName('cal-control'))
      .map(meal => Number(meal.value))
      .reduce((accumulator, currentValue) => {
        // log the values of the `accumulator` and `currentValue` here
        return accumulator + currentValue;
      }, 0);

    // log the value of `total` here
  }
</script>
```

# --solutions--

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();

    const total = Array.from(document.getElementsByClassName('cal-control'))
      .map(meal => Number(meal.value))
      .reduce((accumulator, currentValue) => {
        console.log({ accumulator });
        console.log({ currentValue });
        return accumulator + currentValue;
      }, 0);

    console.log({ total });
  }
</script>
```
