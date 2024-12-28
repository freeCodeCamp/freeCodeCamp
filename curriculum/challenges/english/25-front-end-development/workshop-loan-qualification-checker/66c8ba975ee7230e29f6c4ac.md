---
id: 66c8ba975ee7230e29f6c4ac
title: Step 2
challengeType: 1
dashedName: step-2
---

# --description--

When the user is eligible for a loan, you'll want to display a message to them in the console.

For that, you'll build out a function inside which you'll have some checks that'll return what loan the applicant is eligible for.

Create an empty `getLoanMessage` function with an `annualIncome` and `creditScore` parameters.

# --hints--

You should create a `getLoanMessage` function

```js
assert.isFunction(getLoanMessage)
```

Your `getLoanMessage` function should have an `annualIncome` and `creditScore` as parameters.

```js
assert.match(getLoanMessage?.toString(), /\(\s*annualIncome,\s*creditScore\s*\)|\(\s*creditScore,\s*annualIncome\s*\)/);
```

`getLoanMessage` should be an empty function.

```js
assert.match(getLoanMessage?.toString(), /\{\s*\}/);
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

--fcc-editable-region--

--fcc-editable-region--
```
