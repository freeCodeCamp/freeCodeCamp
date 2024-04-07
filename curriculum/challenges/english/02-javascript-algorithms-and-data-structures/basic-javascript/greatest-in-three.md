---
id: 6612efd3bc9597095156b8a1
title: Finding Greatest in Three Numbers
challengeType: 1
dashedName: greatest-in-three
---

# --description--

Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

# --instructions--

Comparison with the Less than Operator instructions.

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
 And use this prompt prompt __________
Prompt: Can you make me understand how to find Greatest number in three Numbers? 



# --hints--

`20, 3, 43` should return `43`


```js
assert(findGreatestNumber(20,3,43)===43)
```

# --seed--
## --seed-contents--

```js
function findGreatestNumber(num1, num2, num3) {
    //  Only change code below this line
}
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
