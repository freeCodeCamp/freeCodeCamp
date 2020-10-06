---
id: 5ddb965c65d27e1512d44d9c
title: Part 3
challengeType: 0
---

## Description

<section id='description'>

Now we need to specify what should be done with the form when the user submits it by clicking the Calculate button.

Forms have an `onsubmit` event that can execute a function when the form is submitted.

For example, in `document.getElementById('my-form').onsubmit = processForm;`, the function `processForm` will run when the form is submitted.

Assign a function named `calculate` to the `onsubmit` event of your form.

You will create the `calculate` function later.

</section>

## Instructions

<section id='instructions'>
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').match(/document\.getElementById\([\'\"\`]calorie\-form[\'\"\`]\)\.onsubmit\=calculate/) );
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.getElementById('calorie-form');
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
</script>
```

</section>
