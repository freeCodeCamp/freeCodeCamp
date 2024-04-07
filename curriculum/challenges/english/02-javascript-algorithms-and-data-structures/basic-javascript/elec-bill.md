---
id: 6612f46dc9c08b0e5e147c86
title: Calculate Electricity Bill
challengeType: 1
dashedName: elec-bill
---

# --description--

Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity, and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed, along with an additional surcharge.

Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill

**Tips** 

1. Understand how the bill amount varies for different ranges of units consumed.
2. Pay attention to adding the surcharge correctly to the total bill amount.
3. Ensure accuracy in calculations and handle different scenarios effectively.

**Hints**

Click on this <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI 
And use this prompt __________
Prompt 1: How would I handle scenarios where the number of units consumed exceeds the defined ranges?
Prompt 2: How would I ensure accuracy in the calculation of the total bill amount, including the surcharge?



# --hints--

`calculateElectricityBill(200)` should return `192`

```js
assert(calculateElectricityBill(200)===192)
```


# --seed--
## --seed-contents--


```js
function calculateElectricityBill(units) {
    //  Only change code below this line
}

```

# --solutions--

```js
function calculateElectricityBill(units) {
    let totalBill = 0;

    // Define billing slabs and rates
    const slab1Units = 50;
    const slab2Units = 150;
    const slab3Units = 250;

    const rateSlab1 = 0.50;
    const rateSlab2 = 0.75;
    const rateSlab3 = 1.20;
    const rateSlab4 = 1.50;

    // Calculate bill based on units consumed and slabs
    if (units <= slab1Units) {
        totalBill = units * rateSlab1;
    } else if (units <= slab2Units) {
        totalBill = (slab1Units * rateSlab1) + ((units - slab1Units) * rateSlab2);
    } else if (units <= slab3Units) {
        totalBill = (slab1Units * rateSlab1) + ((slab2Units - slab1Units) * rateSlab2) + ((units - slab2Units) * rateSlab3);
    } else {
        totalBill = (slab1Units * rateSlab1) + ((slab2Units - slab1Units) * rateSlab2) + ((slab3Units - slab2Units) * rateSlab3) + ((units - slab3Units) * rateSlab4);
    }

    // Apply surcharge of 20%
    totalBill *= 1.20;

    return totalBill;
}

```
