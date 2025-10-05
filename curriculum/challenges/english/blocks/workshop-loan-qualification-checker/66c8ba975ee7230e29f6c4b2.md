---
id: 66c8ba975ee7230e29f6c4b2
title: Step 7
challengeType: 1
dashedName: step-7
---

# --description--

Now, it is time to test out your `getLoanMessage` function.

Use the table below to create `4` variables and their values:

| Variable Name | Value   |
| ----------- | ------- |
| `duplexLoanMsg`       | `getLoanMessage(85000, 850)` |
| `condoLoanMsg`   | `getLoanMessage(65000, 690)`   |
| `carLoanMsg`   | `getLoanMessage(45000, 660)`   |
| `noLoanMsg`   | `getLoanMessage(25000, 550)`   |

After that, log each variable to the console to see the messages.

With that, your loan qualification checker project is complete!

# --hints--

You should have a variable called `duplexLoanMsg`.

```js
assert.isNotNull(duplexLoanMsg);
```

Your `duplexLoanMsg` variable should be set to the result of `getLoanMessage(85000, 850)`.

```js
assert.equal(duplexLoanMsg, getLoanMessage(85000, 850));
```

You should log the `duplexLoanMsg` variable to the console.

```js
assert.match(code, /console\.log\(duplexLoanMsg\)/)
```

You should have a variable called `condoLoanMsg`.

```js
assert.isNotNull(condoLoanMsg);
```

Your `condoLoanMsg` variable should be set to the result of `getLoanMessage(65000, 690)`.

```js
assert.equal(condoLoanMsg, getLoanMessage(65000, 690));
```

You should log the `condoLoanMsg` variable to the console.

```js
assert.match(code, /console\.log\(condoLoanMsg\)/)
```

You should have a variable called `carLoanMsg`.

```js
assert.isNotNull(carLoanMsg);
```

Your `carLoanMsg` variable should be set to the result of `getLoanMessage(45000, 660)`.

```js
assert.equal(carLoanMsg, getLoanMessage(45000, 660));
```

You should log the `carLoanMsg` variable to the console.

```js
assert.match(code, /console\.log\(carLoanMsg\)/)
```

You should have a variable called `noLoanMsg`.

```js
assert.isNotNull(noLoanMsg);
```

Your `noLoanMsg` variable should be set to the result of `getLoanMessage(25000, 550)`.

```js
assert.equal(noLoanMsg, getLoanMessage(25000, 550));
```

You should log the `noLoanMsg` variable to the console.

```js
assert.match(code, /console\.log\(noLoanMsg\)/)
```

# --seed--

## --seed-contents--

```js
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

--fcc-editable-region--

--fcc-editable-region--
```

# --solutions--

```js
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850)
console.log(duplexLoanMsg)

const condoLoanMsg = getLoanMessage(65000, 690)
console.log(condoLoanMsg)

const carLoanMsg = getLoanMessage(45000, 660)
console.log(carLoanMsg)

const noLoanMsg = getLoanMessage(25000, 550)
console.log(noLoanMsg)
```
