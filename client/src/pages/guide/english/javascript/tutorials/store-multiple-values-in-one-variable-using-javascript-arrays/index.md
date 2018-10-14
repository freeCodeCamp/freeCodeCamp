---
title: Store Multiple Values in One Variable Using JavaScript Arrays
---
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening bracket, end it with a closing bracket, and put a comma between each entry, like this:

```javascript
    var sandwich = ["peanut butter", "jelly", "bread"];
```
To access a variable that has been stored inside an array, you can use something called an index. Index values start at 0 for the first variable, 1 for the second and so on.

In the example above, the string "peanut butter" would have the index 0, "jelly" the index 1 and lastly "bread" would have the index 2.

If we wanted to log the string with the index of 1 ("jelly") in our sandwich array, we could write the name of the array followed by a pair of brackets, with the index inside the brackets. It would look like the below example:
 
 ```javascript
    console.log(sandwich[1]);
```
Arrays can store many different types of data, like for example integers, booleans and objects. We can even store arrays inside arrays.
