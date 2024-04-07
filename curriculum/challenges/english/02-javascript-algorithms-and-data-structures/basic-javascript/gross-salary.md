---
id: 6612f3accc64ff0b6dc7c9b9
title: Calculate Gross Salary
challengeType: 1
dashedName: gross-salary
---

# --description--

Calculate the gross salary of an employee based on their basic salary and specified allowances.

As a payroll manager in a company, your responsibility is to determine the gross salary of employees considering their basic salary and various allowances such as House Rent Allowance (HRA) and Dearness Allowance (DA). These allowances vary based on the employee's basic salary range.

Write a program to take the basic salary of an employee as input and calculate their gross salary according to predefined rules.

```js
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
```


# --instructions--

Since the basic salary lies in the bracket 10000 <= basic salary <= 20000, the HRA equals 25% of the salary = 4250, and the DRA equals 90% of the basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550.

**Tips** 

1. Understand the different allowance percentages based on the employee's basic salary range.
2. Pay attention to how the gross salary is calculated by adding the basic salary, HRA, and DA.
3. Ensure accuracy in calculations and handle different basic salary scenarios effectively.

**Hints**

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt prompt __________
Prompt 1: Can you explain the significance of considering different basic salary ranges in determining the HRA and DA percentages?
Prompt 2: What approach would I  take to handle scenarios where the basic salary does not fall into any defined range?

# --hints--

`calculateGrossSalary(17000)` should return `36550`

```js
assert(calculateGrossSalary(17000)===36550)
```



# --seed--
## --after-user-code--
For the first 50 units, the rate is Rs. 0.50/unit, so the cost is 50 * 0.50 = Rs. 25.
For the next 100 units, the rate is Rs. 0.75/unit, so the cost is 100 * 0.75 = Rs. 75.
The total cost for the first 150 units is Rs. 25 + Rs. 75 = Rs. 100.
For the next 50 units (200 - 150 = 50 units), the rate is Rs. 1.20/unit, so the cost is 50 * 1.20 = Rs. 60.
The total cost for 200 units is Rs. 100 + Rs. 60 = Rs. 160.
Adding the 20% surcharge, the total bill becomes 1.20 * 160 = Rs. 192.

## --seed-contents--

```js
function calculateGrossSalary(basicSalary){
     //  Only change code below this line
    }
```

# --solutions--

```js
function calculateGrossSalary(basicSalary) {
    let HRA, DA;

    if (basicSalary <= 10000) {
        HRA = 0.2 * basicSalary;
        DA = 0.8 * basicSalary;
    } else if (basicSalary <= 20000) {
        HRA = 0.25 * basicSalary;
        DA = 0.9 * basicSalary;
    } else {
        HRA = 0.3 * basicSalary;
        DA = 0.95 * basicSalary;
    }

    return basicSalary + HRA + DA;
}

```
