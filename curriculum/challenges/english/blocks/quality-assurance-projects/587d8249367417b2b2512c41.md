---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

Build a full-stack JavaScript app that is functionally similar to this: <a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://metric-imperial-converter.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete your project locally.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

**Note:** This project's tests do not work when using `glitch.com`.

# --instructions--

- Complete the necessary conversion logic in `/controllers/convertHandler.js`
- Complete the necessary routes in `/routes/api.js`
- Copy the `sample.env` file to `.env` and set the variables appropriately
- To run the tests automatically, add `NODE_ENV=test` in your `.env` file
- To run the tests in the console, use the command `npm run test`.

Write the following tests in `tests/1_unit-tests.js`:

- `convertHandler` should correctly read a whole number input.
- `convertHandler` should correctly read a decimal number input.
- `convertHandler` should correctly read a fractional input.
- `convertHandler` should correctly read a fractional input with a decimal.
- `convertHandler` should correctly return an error on a double-fraction (i.e. `3/2/3`).
- `convertHandler` should correctly default to a numerical input of `1` when no numerical input is provided.
- `convertHandler` should correctly read each valid input unit.
- `convertHandler` should correctly return an error for an invalid input unit.
- `convertHandler` should return the correct return unit for each valid input unit.
- `convertHandler` should correctly return the spelled-out string unit for each valid input unit.
- `convertHandler` should correctly convert `gal` to `L`.
- `convertHandler` should correctly convert `L` to `gal`.
- `convertHandler` should correctly convert `mi` to `km`.
- `convertHandler` should correctly convert `km` to `mi`.
- `convertHandler` should correctly convert `lbs` to `kg`.
- `convertHandler` should correctly convert `kg` to `lbs`.

Write the following tests in `tests/2_functional-tests.js`:

- Convert a valid input such as `10L`: `GET` request to `/api/convert`.
- Convert an invalid input such as `32g`: `GET` request to `/api/convert`.
- Convert an invalid number such as `3/7.2/4kg`: `GET` request to `/api/convert`.
- Convert an invalid number AND unit such as `3/7.2/4kilomegagram`: `GET` request to `/api/convert`.
- Convert with no number such as `kg`: `GET` request to `/api/convert`.

# --hints--

You can provide your own project, not the example URL.

```js
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      code
    )
  );
```

You can `GET` `/api/convert` with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)

```js

```

You can convert `'gal'` to `'L'` and vice versa. (1 gal to 3.78541 L)

```js
  try {
    const response1 = await fetch(code + '/api/convert?input=1gal');
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const response2 = await fetch(code + '/api/convert?input=10gal');
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const response3 = await fetch(code + '/api/convert?input=1l');
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const response4 = await fetch(code + '/api/convert?input=10l');
    if (!response4.ok) {
      throw Error(await response4.text());
    }
    const data4 = await response4.json();
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

You can convert `'lbs'` to `'kg'` and vice versa. (1 lbs to 0.453592 kg)

```js
  try {
    const response1 = await fetch(code + '/api/convert?input=1lbs');
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const response2 = await fetch(code + '/api/convert?input=10lbs');
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const response3 = await fetch(code + '/api/convert?input=1kg');
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const response4 = await fetch(code + '/api/convert?input=10kg');
    if (!response4.ok) {
      throw Error(await response4.text());
    }
    const data4 = await response4.json();
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

You can convert `'mi'` to `'km'` and vice versa. (1 mi to 1.60934 km)

```js
  try {
    const response1 = await fetch(code + '/api/convert?input=1mi');
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const response2 = await fetch(code + '/api/convert?input=10mi');
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const response3 = await fetch(code + '/api/convert?input=1km');
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const response4 = await fetch(code + '/api/convert?input=10km');
    if (!response4.ok) {
      throw Error(await response4.text());
    }
    const data4 = await response4.json();
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

All incoming units should be accepted in both upper and lower case, but should be returned in both the `initUnit` and `returnUnit` in lower case, except for liter, which should be represented as an uppercase `'L'`.

```js
  try {
    const response1 = await fetch(code + '/api/convert?input=1gal');
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const response2 = await fetch(code + '/api/convert?input=10L');
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const response3 = await fetch(code + '/api/convert?input=1l');
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const response4 = await fetch(code + '/api/convert?input=10KM');
    if (!response4.ok) {
      throw Error(await response4.text());
    }
    const data4 = await response4.json();
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

If the unit of measurement is invalid, returned will be `'invalid unit'`.

```js
  try {
    const response = await fetch(code + '/api/convert?input=1min');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.text();
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

If the number is invalid, returned will be `'invalid number'`.

```js
  try {
    const response = await fetch(
      code + '/api/convert?input=1//2gal'
    );
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.text();
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

If both the unit and number are invalid, returned will be `'invalid number and unit'`.

```js
  try {
    const response = await fetch(
      code + '/api/convert?input=1//2min'
    );
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.text();
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

You can use fractions, decimals or both in the parameter (ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.

```js
  try {
    const response1 = await fetch(code + '/api/convert?input=mi');
    if (!response1.ok) {
      throw Error(await response1.text());
    }
    const data1 = await response1.json();
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const response2 = await fetch(code + '/api/convert?input=1/5mi');
    if (!response2.ok) {
      throw Error(await response2.text());
    }
    const data2 = await response2.json();
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const response3 = await fetch(
      code + '/api/convert?input=1.5/7km'
    );
    if (!response3.ok) {
      throw Error(await response3.text());
    }
    const data3 = await response3.json();
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const response4 = await fetch(
      code + '/api/convert?input=3/2.7km'
    );
    if (!response4.ok) {
      throw Error(await response4.text());
    }
    const data4 = await response4.json();
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Your return will consist of the `initNum`, `initUnit`, `returnNum`, `returnUnit`, and `string` spelling out units in the format `'{initNum} {initUnitString} converts to {returnNum} {returnUnitString}'` with the result rounded to 5 decimals.

```js
  try {
    const response = await fetch(code + '/api/convert?input=2mi');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const data = await response.json();
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
```

All 16 unit tests are complete and passing.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
    assert.isArray(getTests);
    const unitTests = getTests.filter(test => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach(test => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

All 5 functional tests are complete and passing.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
    assert.isArray(getTests);
    const functTests = getTests.filter(test => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach(test => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

