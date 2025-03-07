---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

Return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf`. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is `1`. Return `true` if the string is a valid US phone number; otherwise return `false`.

# --hints--

`telephoneCheck("555-555-5555")` should return a boolean.

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` should return `true`.

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` should return `true`.

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` should return `true`.

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` should return `true`.

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` should return `true`.

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` should return `true`.

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` should return `false`.

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` should return `false`.

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` should return `false`.

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` should return `true`.

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` should return `true`.

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` should return `false`.

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` should return `false`.

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` should return `false`.

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` should return `false`.

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` should return `false`.

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` should return `false`.

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` should return `false`.

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` should return `false`.

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` should return `false`.

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` should return `false`.

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` should return `false`.

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` should return `false`.

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` should return `false`.

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

`telephoneCheck("11 555-555-5555")` should return `false`.

```js
assert(telephoneCheck('11 555-555-5555') === false);
```

`telephoneCheck()`, when called with any valid number, should return `true`.

```js

const validPatterns = [
  '1 XXX-XXX-XXXX',
  '1 (XXX)XXX-XXXX',
  '1(XXX)XXX-XXXX',
  '1 XXX XXX XXXX',
  'XXXXXXXXXX',
  'XXX-XXX-XXXX',
  '(XXX)XXX-XXXX',
];

validPatterns.forEach(pattern => {
  while (pattern.includes('X')) {
    pattern = pattern.replace('X',  Math.floor(Math.random() * 7) + 2); //While this may seem weird at first, it's required for the CI build to pass
    //This is apparently because the solution provided for CI purposes actually checks for valid area and exchange codes.
  }
  assert.isTrue(telephoneCheck(pattern));
});
```

`telephoneCheck()`, when called with an invalid number, should return `false`.

```js

const invalidPatterns = [
  '10 XXX-XXX-XXXX',
  '1 (XX)XXX-XXXX',
  '1!(XXX)XXX-XXXX',
  '-1 XXX XXX XXXX',
  'XXXXXXXX',
  'XXX#XXX-XXXX',
  '(XXXXXX-XXXX',
];

invalidPatterns.forEach(pattern => {
  while (pattern.includes('X')) {
    pattern = pattern.replace('X',  Math.floor(Math.random() * 10));
  }
  assert.isFalse(telephoneCheck(pattern));
});
```


# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
