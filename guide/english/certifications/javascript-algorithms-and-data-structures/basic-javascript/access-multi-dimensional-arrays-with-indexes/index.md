---
title: Access Multi-Dimensional Arrays With Indexes
---
## Access Multi-Dimensional Arrays With Indexes

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Consider the following multi-dimensional array:

```javascript
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
```

This is what it looks like in tabular form.

   | Position | 0 | 1 | 2 | 3 |
   |   ---    |---|---|---|---|
   | **0**    | 1 | 4 | 7 | 10|
   | **1**    | 2 | 5 | 8 | 11|
   | **2**    | 3 | 6 | 9 | 12|
   
Now all you have to do, is choose the coordinates of the data you desire! For examples, if we want `myNum` to equal 8, then...

```javascript
var myNum = arr[2][1]; // Equal to 8
```

Or, if you want it to equal 1. You do...

```javascript
var myNum = arr[0][0]; // Equal to 1
```

You first start off by choosing what column the number is in, then you choose the row. It's kind of like the x-y coordinate plane!
