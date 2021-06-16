---
id: 5ddb965c65d27e1512d44dad
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

Let's says we have an array `[1, 3, 5]` named `arr` and we want to sum up all the numbers.

We can use the reduce function as follows:

```js
arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```

At `arr[0]`, the function is `(0, 1) => { return 0 + 1 }`, since `arr[0] = 1 = currentValue`.

At `arr[1]`, the function is `(1, 3) => 1 + 3`,

Finally at `arr[2]`, the function is `(4, 5) => 4 + 5`. Now the accumulator is `9` and since we have gone through all of the items in `arr`, the `reduce()` method will return `9`.

In the body of the callback function, replace `/* code to run */` with `return accumulator + currentValue`.

# --hints--

See description above for instructions.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /reduce\(\(accumulator\,currentValue\)\=\>{returnaccumulator\+currentValue\;?},0\)/
    )
);
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
        /* code to run */
      }, 0);
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
        return accumulator + currentValue;
      }, 0);
  }
</script>
```
