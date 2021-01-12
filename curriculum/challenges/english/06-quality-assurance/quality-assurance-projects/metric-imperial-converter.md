---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

Build a full stack JavaScript app that is functionally similar to this: <https://metric-imperial-converter.freecodecamp.rocks/>. Working on this project will involve you writing your code using one of the following methods:

-   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/) and complete your project locally.
-   Use [our repl.it starter project](https://repl.it/github/freeCodeCamp/boilerplate-project-metricimpconverter) to complete your project.
-   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.

# --hints--

I can provide my own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)

```js

```

I can convert `'gal'` to `'L'` and vice versa. (1 gal to 3.78541 L)

```js
async (getUserInput) => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

I can convert `'lbs'` to `'kg'` and vice versa. (1 lbs to 0.453592 kg)

```js
async (getUserInput) => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1lbs');
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10lbs');
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1kg');
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10kg');
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

I can convert `'mi'` to `'km'` and vice versa. (1 mi to 1.60934 km)

```js
async (getUserInput) => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1mi');
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10mi');
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1km');
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10km');
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

All incoming units should be accepted in both upper and lower case, but should be returned in both the `initUnit` and `returnUnit` in lower case, except for liter, which should be represented as an uppercase `'L'`.

```js
async (getUserInput) => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10L');
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10KM');
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

If my unit of measurement is invalid, returned will be `'invalid unit'`.

```js
async (getUserInput) => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

If my number is invalid, returned will be `'invalid number'`.

```js
async (getUserInput) => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2gal'
    );
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

If both the unit and number are invalid, returned will be `'invalid number and unit'`.

```js
async (getUserInput) => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2min'
    );
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.

```js
async (getUserInput) => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=mi');
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=1/5mi');
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(
      getUserInput('url') + '/api/convert?input=1.5/7km'
    );
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(
      getUserInput('url') + '/api/convert?input=3/2.7km'
    );
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

My return will consist of the `initNum`, `initUnit`, `returnNum`, `returnUnit`, and `string` spelling out units in the format `'{initNum} {initial_Units} converts to {returnNum} {return_Units}'` with the result rounded to 5 decimals.

```js
async (getUserInput) => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=2mi');
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

All 16 unit tests are complete and passing.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests ->/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach((test) => {
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
};
```

All 5 functional tests are complete and passing.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests ->/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach((test) => {
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
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
