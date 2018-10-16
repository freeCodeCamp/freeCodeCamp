---	
title: Iterate Through an Array with a For Loop	
---

## Iterate Through an Array with a For Loop

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Here’s the setup:

```javascript
// Example
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
```

We need to declare and initialize a variable ```total``` to ```0```. Use a ```for``` loop to add the value of each element of the ```myArr``` array to ```total```.

We start from declare a variable ```total```:

```javascript

// Only change code below this line
var total = 0;
```

Next, we need to use a ```for``` loop to add the value of each element of the ```myArr``` array to ```total```:

```javascript
for (var i = 0; i < myArr.length; i++) {

}
```

Now we need to add each value of ```myArr``` to variable ```total```:

```javascript
for (var i = 0; i < myArr.length; i++) {
  total +=myArr[i];
}
```

 Here’s a full solution:

```javascript
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
// Setup
var myArr = [ 2, 3, 4, 5, 6];
// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total +=myArr[i];
}
```
