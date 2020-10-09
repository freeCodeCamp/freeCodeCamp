---
id: 5ddb965c65d27e1512d44dd4
title: Part 61
challengeType: 0
---

## Description

<section id='description'>

Later we will want to remove these extra `calorieInput` elements that we added. This will happen when the user pushes the "Clear" button.

To keep track of them, add the class name `extra-cal-control` to the `calorieInput` element.

</section>

## Instructions

<section id='instructions'>
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').match(/calorieInput\.classList\.add\([\'\"\`]extra-cal\-control[\'\"\`]\)/) );
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
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

    const difference = total - maxCalories;

    const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';

    const output = document.getElementById('output');

    const result = document.createElement('h3');
    result.className = 'green-text';
    const resultText = document.createTextNode(
      `${Math.abs(difference)} Calorie ${surplusOrDeficit}`
    );

    result.appendChild(resultText);
    output.appendChild(result);

    const line = document.createElement('hr');
    output.appendChild(line);

    const recommended = document.createElement('h4');
    const recommendedText = document.createTextNode(
      `${maxCalories} Recommended Calories`
    );

    recommended.appendChild(recommendedText);
    output.appendChild(recommended);

    const consumed = document.createElement('h4');
    consumed.innerHTML = `${total} Consumed Calories`;
    output.appendChild(consumed);

    output.setAttribute('class', 'bordered-class');
    output.style.backgroundColor = '#FFF9C4';
  }

  document.getElementById('add').onclick = function() {
    const foodInput = document.createElement('input');
    foodInput.placeholder = 'food name';
    foodInput.classList.add('food-control');
    document.getElementById('entries').appendChild(foodInput);

    const calorieInput = document.createElement('input');
    calorieInput.setAttribute('type', 'number');
    calorieInput.setAttribute('min', '0');
    calorieInput.classList.add('cal-control');
  };
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

    const maxCalories = document.getElementById('female').checked ? 2000 : 2500;

    const difference = total - maxCalories;

    const surplusOrDeficit = difference > 0 ? 'Surplus' : 'Deficit';

    const output = document.getElementById('output');

    const result = document.createElement('h3');
    result.className = 'green-text';
    const resultText = document.createTextNode(
      `${Math.abs(difference)} Calorie ${surplusOrDeficit}`
    );

    result.appendChild(resultText);
    output.appendChild(result);

    const line = document.createElement('hr');
    output.appendChild(line);

    const recommended = document.createElement('h4');
    const recommendedText = document.createTextNode(
      `${maxCalories} Recommended Calories`
    );

    recommended.appendChild(recommendedText);
    output.appendChild(recommended);

    const consumed = document.createElement('h4');
    consumed.innerHTML = `${total} Consumed Calories`;
    output.appendChild(consumed);

    output.setAttribute('class', 'bordered-class');
    output.style.backgroundColor = '#FFF9C4';
  }

  document.getElementById('add').onclick = function() {
    const foodInput = document.createElement('input');
    foodInput.placeholder = 'food name';
    foodInput.classList.add('food-control');
    document.getElementById('entries').appendChild(foodInput);

    const calorieInput = document.createElement('input');
    calorieInput.setAttribute('type', 'number');
    calorieInput.setAttribute('min', '0');
    calorieInput.classList.add('cal-control');
    calorieInput.classList.add('extra-cal-control');
  };
</script>
```

</section>
