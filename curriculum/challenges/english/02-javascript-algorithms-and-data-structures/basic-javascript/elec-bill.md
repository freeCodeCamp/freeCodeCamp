---
id: 6612f46dc9c08b0e5e147c86
title: Calculate Electricity Bill
challengeType: 1
dashedName: elec-bill
---

# --description--

Objective: Calculate the electricity bill based on the number of units consumed.


Introduction: As part of your responsibilities, you are tasked with calculating electricity bills for households. The bill calculation depends on the number of units consumed, with different rates applied to various ranges of units, along with an additional surcharge.


Challenge: Write a program to input the number of electricity units consumed and calculate the total electricity bill according to the provided conditions.

<h2>Hinglish</h2>

Lakshya: Bijli ka bill gine gaye units ke aadhar par calculate karna.

Parichay: Apni zimmedariyon ke hisse ke taur par, aapko gharo ke liye bijli ke bill ka hisaab lagana hai. Bill calculation units ke aadhar par hota hai, jisme alag-alag units ke liye vibhinn dar lagu hoti hai, saath hi ek adhikansh surcharge bhi lagta hai.

Challenge: Ek program likho jismein bijli ke units ka input liya jaye aur diye gaye sharton ke anusar total bijli ka bill calculate kiya jaye.

# --instructions--

For the first 50 units, the rate is Rs. 0.50/unit, so the cost is 50 * 0.50 = Rs. 25.
For the next 100 units, the rate is Rs. 0.75/unit, so the cost is 100 * 0.75 = Rs. 75.
The total cost for the first 150 units is Rs. 25 + Rs. 75 = Rs. 100.
For the next 50 units (200 - 150 = 50 units), the rate is Rs. 1.20/unit, so the cost is 50 * 1.20 = Rs. 60.
The total cost for 200 units is Rs. 100 + Rs. 60 = Rs. 160.
Adding the 20% surcharge, the total bill becomes 1.20 * 160 = Rs. 192.

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
    let totalBill = 0;
    //  Only change code below this line

    // Only change code above this line
    return totalBill;
}
calculateElectricityBill(192)

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

