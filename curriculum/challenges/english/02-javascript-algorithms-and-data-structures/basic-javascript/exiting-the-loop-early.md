---
id: 661bbe8b685931595f61b791
videoId: GiBdLRYmewY
title: Exiting the Loop early
challengeType: 11
dashedName: exiting-the-loop-early
---

# --description--

In JavaScript, the `break` statement is used to exit or "break out" of a loop prematurely. It is commonly used in `for`, `while`, and `do...while` loops, as well as in `switch` statements.

Let’s have a look at a flowchart for this problem



When the `break` statement is encountered inside a loop, the loop is immediately terminated, and the program continues execution after the loop. This can be useful for stopping a loop early if a certain condition is met, or for exiting a loop once a specific task is completed.

Here's an example of using `break` in a `for` loop:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
}
// Output: 1, 2, 3, 4
```

In this example, the loop stops executing when `i` is equal to 5, and the numbers 1 to 4 are logged to the console.

<h2>Hinglish</h2>

JavaScript mein, `break` statement ka istemal loop ko pehle se bahar nikalne ya "break" karne ke liye kiya jata hai. Yeh aam taur par `for`, `while`, aur `do...while` loops mein istemal hota hai, sath hi `switch` statements mein bhi.

Is samasya ke liye ek flowchart dekhte hain

`break` statement jab kisi loop ke andar paya jata hai, tab loop turant khatam ho jata hai, aur program loop ke baad ki execution jari rakhta hai. Yeh ek vishesh sthiti ke anusaar ek loop ko jaldi se rokne ke liye ya ek nishchit karya pura hone par ek loop se bahar nikalne ke liye upyogi ho sakta hai.

Yahan ek `for` loop mein `break` ka istemal ka ek udaharan hai:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // i ke barabar 5 hone par loop se bahar nikalna
    }
    console.log(i);
}
// Output: 1, 2, 3, 4
```

Is udaharan mein, jab `i` 5 ke barabar hota hai, tab loop ka execution ruk jata hai, aur console mein 1 se lekar 4 tak ke numbers print hote hain.

# --question--

## --text--

What will be the output for the following code?

```js
let n = 7;
let arr = [0,1,2,3,4,6,9,9];
let i = 0;
while(i<n){
	if(arr[i]%3 == 0){
  	console.log(i);
    break;
  
  }
}
```

## --answers--

3

---

9

---

6

---

0

## --video-solution--

4
