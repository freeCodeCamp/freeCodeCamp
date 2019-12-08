---
id: 5ddb965c65d27e1512d44dad
title: Part 20
challengeType: 0
isBeta: true
---

## Description

<section id='description'>

We want to sum up all of the numbers in the `total` array.

As an example, let's says we have an array `[1,3,5]` named `arr` and we want to sum up all the numbers.

We can use the reduce function as follows
`arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);`

At `arr[0]`, the function is `(0, 1) => 0 + 1`,
since `arr[0] = 1 = currentValue`

Note that the `accumulator` starts at `0` because that is what we provide as the initial value argument. After running `0 + 1`, the accumulator is now `1`, which is passed to next invocation of the callback function at

arr[1], the function is `(1, 3) => 1 + 3`,

arr[2], the function is `(4, 5) => 4 + 5`, now the accumulator is `9` and we have gone through all of the items in `arr`, the reduce function will return `9`.

Replace the whole body of the callback function (`{/*code to run*\/}`) with `accumulator + currentValue`.

If you desire, you can now check your progress by adding `console.log(total)`, entering in values in the form, and then push the Calculate button. You will see that the console will log the sum of the inputs that you entered, this is awesome!

</section>

## Instructions

<section id='instructions'>
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').match(/reduce\(\(accumulator\,currentValue\)\=\>accumulator\+currentValue\,0\)/) );
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();

    const total = Array.from(document.getElementsByClassName('cal-control'))
      .map(meal => Number(meal.value))
      .reduce((accumulator, currentValue) => {
        /*code to run*/
      }, 0);
  }
</script>
```

</div>

### Before Test

<div id='html-setup'>

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

</div>

### After Test

<div id='html-teardown'>

```html
  </body>
</html>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<script>
  document.getElementById('calorie-form').onsubmit = calculate;

  function calculate(e) {
    e.preventDefault();

    const total = Array.from(document.getElementsByClassName('cal-control'))
      .map(meal => Number(meal.value))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
</script>
```

</section>
