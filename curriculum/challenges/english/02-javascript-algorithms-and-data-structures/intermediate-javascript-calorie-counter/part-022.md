---
id: 5e302e8ce003129199103c79
title: Part 22
challengeType: 0
---

## Description

<section id='description'>

Now let's simplify the `reduce()` callback function by refactoring it.

Essentially, the current callback function is `(accumulator, currentValue) => { return accumulator + currentValue }`. Since there's only one expression in the function body, we can omit the `{}`. Additionally, we can omit the `return` keyword since that is implicit when using arrow function syntax.

So the function can be simplified to just `(accumulator, currentValue) => accumulator + currentValue`.

Replace the current callback function argument in the `reduce()` function with the simplified callback function from above.

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
        //console.log({ accumulator });
        //console.log({ currentValue });
        return accumulator + currentValue;
      }, 0);

    //console.log({ total });
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
