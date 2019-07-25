---
title: Convert Celsius to Fahrenheit
---

# Convert Celsius to Fahrenheit

---
## Problem Explanation

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable **celsius** representing a temperature in Celsius. Use the variable **fahrenheit** already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.

#### Relevant Links

*   <a href='http://www.purplemath.com/modules/orderops.htm' target='_blank' rel='nofollow'>The Order of Operations: PEMDAS</a>
*   <a href='https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations' target='_blank' rel='nofollow'>Order of Operation: Video</a>

---
## Hints

### Hint 1

Take a look at the code. There is an area that you're not supposed to edit. From there, ask yourself - what is used there that I haven't seen before?

### Hint 2

Keep in mind the **order of operation** check the link in the _links_ section for more information.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function convertToF(celsius) {
  // Only change code below this line
  var fahrenheit = celsius * (9 / 5) + 32;

  // Only change code above this line
  if (typeof fahrenheit !== "undefined") {
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }
}

// Change the inputs below to test your code
convertToF(30);
```

#### Code Explanation

*   Declare the **fahrenheit** variable.
*   Make sure the proper order of arithmetic operations is followed by using parenthesis (`()`) when needed.

</details>