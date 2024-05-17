---
id: 6612f3accc64ff0b6dc7c9b9
title: Calculate Gross Salary
challengeType: 1
dashedName: gross-salary
---

# --description--

Objective: Calculate the gross salary of an employee based on their basic salary and specified allowances.

Introduction: As a payroll manager in a company, your responsibility is to determine the gross salary of employees considering their basic salary and various allowances such as House Rent Allowance (HRA) and Dearness Allowance (DA). These allowances vary based on the employee's basic salary range.


Challenge: Write a program to take the basic salary of an employee as input and calculate their gross salary according to predefined rulesas follows.


```js
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
```

**Explanation** 

Since the basic salary lies in the bracket 10000 <= basic salary <= 20000, the HRA equals 25% of the salary = 4250, and the DRA equals 90% of the basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550.

## --instructions--

<h2>Hinglish</h2>

Lakshya:

Kisi company mein vetan prabandhak ke roop mein, aapka zimmedari hai karmachariyon ke mool vetan aur vibhinn bhattaon jaise Ghar Kiraya Bhatta (HRA) aur Mahangaayi Bhatta (DA) ke madhya nazar rakhte hue unka gross vetan tay karna. Ye bhatta karmachari ke mool vetan shreni ke aadhaar par vibhinn hote hain.

Prastavana:

Ek program likhein jo ek karmachari ka mool vetan input ke roop mein le aur pree-nirdhaarit niyamon ke anusaar unka gross vetan ganit karein.

Challenge: Ek program likho jismein ek karmachari ka moolya vetan input ke roop mein liya jata hai aur unka bruto vetan pehle se nirdharit niyamon ke anusar calculate kiya jata hai.



```js
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
```

**Spashtikaran**

Moolya vetan 10000 se kam ya 20000 se adhik hai, isliye HRA 25% of vetan hai = 4250, aur DA moolya vetan ka 90% hai = 15300. Is tarah, total vetan 17000+15300+4250 = 36550 hai.


**Hints**

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Can you explain the significance of considering different basic salary ranges in determining the HRA and DA percentages?

2. Prompt 2: What approach would I  take to handle scenarios where the basic salary does not fall into any defined range?

# --hints--

`calculateGrossSalary(17000)` should return `36550`.

```js
assert(calculateGrossSalary(17000)===36550);
```

`calculateGrossSalary(basicSalary)` should be completed with correct implementation.

```js
assert(calculateGrossSalary(8000)===14400):
```

# --seed--

## --seed-contents--

```js
function calculateGrossSalary(basicSalary){
     //  Only change code below this line
     return ;
    }
calculateGrossSalary(17000)
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

