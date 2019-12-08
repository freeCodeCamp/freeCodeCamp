---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
isRequired: true
forumTopicId: 301570
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://incongruous-beard.glitch.me/' target='_blank'>https://incongruous-beard.glitch.me/</a>.
Working on this project will involve you writing your code on Glitch on our starter project. After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Glitch using <a href='https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/'>this repository</a> on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I will prevent the client from trying to guess(sniff) the MIME type.
    testString: ''
  - text: I will prevent cross-site scripting (XSS) attacks.
    testString: ''
  - text: 'I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)'
    testString: ''
  - text: I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
    testString: 'getUserInput => { 
                    $.get(getUserInput(''url'') + ''/api/convert?input=1gal'')
                    .then(data => {
                        assert.equal(data.returnNum, 3.78541); 
                        assert.equal(data.returnUnit, ''l'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=10gal'')
                    .then(data => {
                        assert.equal(data.returnNum, 37.8541); 
                        assert.equal(data.returnUnit, ''l'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=1l'')
                    .then(data => {
                        assert.equal(data.returnNum, 0.26417); 
                        assert.equal(data.returnUnit, ''gal'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=10l'')
                    .then(data => {
                        assert.equal(data.returnNum, 2.64172); 
                        assert.equal(data.returnUnit, ''gal'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });
                }'

  - text: I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
    testString: 'getUserInput => { 
                    $.get(getUserInput(''url'') + ''/api/convert?input=1lbs'')
                    .then(data => {
                        assert.equal(data.returnNum, 0.453592); 
                        assert.equal(data.returnUnit, ''kg'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=10lbs'')
                    .then(data => {
                        assert.equal(data.returnNum, 4.53592); 
                        assert.equal(data.returnUnit, ''kg'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=1kg'')
                    .then(data => {
                        assert.equal(data.returnNum, 2.20462); 
                        assert.equal(data.returnUnit, ''lbs'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=10kg'')
                    .then(data => {
                        assert.equal(data.returnNum, 22.04624); 
                        assert.equal(data.returnUnit, ''lbs'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });
                }'
  - text: I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
    testString: 'getUserInput => { 
                    $.get(getUserInput(''url'') + ''/api/convert?input=1mi'')
                    .then(data => {
                        assert.equal(data.returnNum, 1.60934); 
                        assert.equal(data.returnUnit, ''km'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=10mi'')
                    .then(data => {
                        assert.equal(data.returnNum, 16.0934); 
                        assert.equal(data.returnUnit, ''km'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=1km'')
                    .then(data => {
                        assert.equal(data.returnNum, 0.62137); 
                        assert.equal(data.returnUnit, ''mi'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });

                    $.get(getUserInput(''url'') + ''/api/convert?input=10km'')
                    .then(data => {
                        assert.equal(data.returnNum, 6.21373); 
                        assert.equal(data.returnUnit, ''mi'');
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });
                }'
  - text: If my unit of measurement is invalid, returned will be 'invalid unit'.
    testString: 'getUserInput => { 
                    $.get(getUserInput(''url'') + ''/api/convert?input=1min'')
                    .then(data => {
                        assert.equal(data.error, ''invalid unit''); 
                    } xhr => {
                        throw new Error(xhr.responseText);
                    });
                }'
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
