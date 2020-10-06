---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
forumTopicId: 301570
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank">https://metric-imperial-converter.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-metricimpconverter">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can provide my own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: 'I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)'
    testString: ''
  - text: I can convert <code>'gal'</code> to <code>'L'</code> and vice versa. (1 gal to 3.78541 L)
    testString: "async getUserInput => { 
      try {
        const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
        assert.equal(data1.returnNum, 3.78541);
        assert.equal(data1.returnUnit, 'l');
        const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
        assert.equal(data2.returnNum, 37.8541);
        assert.equal(data2.returnUnit, 'l');
        const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
        assert.equal(data3.returnNum, 0.26417);
        assert.equal(data3.returnUnit, 'gal');
        const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
        assert.equal(data4.returnNum, 2.64172);
        assert.equal(data4.returnUnit, 'gal');
      } catch(xhr) {
        throw new Error(xhr.responseText);
      }
    }
    "
  - text: I can convert <code>'lbs'</code> to <code>'kg'</code> and vice versa. (1 lbs to 0.453592 kg)
    testString: "async getUserInput => { 
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
      } catch(xhr) {
        throw new Error(xhr.responseText);
      }
    }
    "
  - text: I can convert <code>'mi'</code> to <code>'km'</code> and vice versa. (1 mi to 1.60934 km)
    testString: "async getUserInput => { 
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
      } catch(xhr) {
        throw new Error(xhr.responseText);
      }
    }
    "
  - text: If my unit of measurement is invalid, returned will be <code>'invalid unit'</code>.
    testString: "async getUserInput => { 
      try {
        const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
        assert(data.initUnit === 'invalid unit' || data === 'invalid unit');
      } catch(xhr) {
        throw new Error(xhr.responseText);
      }
    }
    "
  - text: If my number is invalid, returned with will 'invalid number'.
    testString: ''
  - text: If both are invalid, return will be 'invalid number and unit'.
    testString: ''
  - text: I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
    testString: ''
  - text: My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format '{initNum} {initial_Units} converts to {returnNum} {return_Units}' with the result rounded to 5 decimals in the string.
    testString: ''
  - text: All 16 unit tests are complete and passing.
    testString: ''
  - text: All 5 functional tests are complete and passing.
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
