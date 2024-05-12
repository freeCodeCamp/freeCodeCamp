---
id: 66338666063672f0f8d895f7
title: Find Greatest of Three Numbers
challengeType: 1
dashedName: find-greatest-in-three-numbers
---

# --description--


The task is to create a simple program that prompts the user to input three numbers, and then the program determines which of those three numbers is greater.

Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

<h2>Hinglish</h2>

Program likho jo istemal ko protsahan deta hai teen numbers daalne ke liye, phir program tay karta hai ki in teeno numbers mein se kaunsa bada hai.

Ek aasan program likho jo istemal se teen numbers le aur un teeno numbers mein se bada number print kare. (Maan lo ki teeno numbers alag-alag hain)


# --instructions--

Comparison with the Less than Operator instructions.

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
 And use this prompt prompt __________
Prompt: Can you make me understand how to find Greatest number in three Numbers? 



# --hints--

`findGreatestNumber(20, 3, 43)` should return `43`.


```js
assert(findGreatestNumber(20,3,43)===43)
```

# --seed--
## --seed-contents--

```js
function findGreatestNumber(num1, num2, num3) {
    //  Only change code below this line
    return ;
}
findGreatestNumber(20,3,43)
```

# --solutions--

```js
function findGreatestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
findGreatestNumber(20,3,43)
```

