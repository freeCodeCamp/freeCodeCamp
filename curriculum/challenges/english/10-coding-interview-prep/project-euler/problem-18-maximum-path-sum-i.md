---
id: 5900f37e1000cf542c50fe91
title: 'Problem 18: Maximum path sum I'
challengeType: 1
forumTopicId: 301815
dashedName: problem-18-maximum-path-sum-i
---

# --description--

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

<span style='display: block; text-align: center;'>
  <strong style='color: red;'>3</strong><br>
  <strong style='color: red;'>7</strong> 4<br>
  2 <strong style='color: red;'>4</strong> 6<br>
  8 5 <strong style='color: red;'>9</strong> 3
</span>

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75  
95 64  
17 47 82  
18 35 87 10  
20 04 82 47 65  
19 01 23 75 03 34  
88 02 77 73 07 63 67  
99 65 04 28 06 16 70 92  
41 41 26 56 83 40 80 70 33  
41 48 72 33 47 32 37 16 94 29  
53 71 44 65 25 43 91 52 97 51 14  
70 11 33 28 77 73 17 78 39 68 17 57  
91 71 52 38 17 14 91 43 58 50 27 29 48  
63 66 04 68 89 53 67 30 73 16 69 87 40 31  
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

**NOTE:** As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

# --hints--

`maximumPathSumI(testTriangle)` should return a number.

```js
assert(typeof maximumPathSumI(testTriangle) === 'number');
```

`maximumPathSumI(testTriangle)` should return 23.

```js
assert.strictEqual(maximumPathSumI(testTriangle), 23);
```

`maximumPathSumI(numTriangle)` should return 1074.

```js
assert.strictEqual(maximumPathSumI(numTriangle), 1074);
```

# --seed--

## --before-user-code--

```js
const numTriangle = [[75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [95, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [17, 47, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [18, 35, 87, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [20, 4, 82, 47, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [19, 1, 23, 75, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0], [88, 2, 77, 73, 7, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0], [99, 65, 4, 28, 6, 16, 70, 92, 0, 0, 0, 0, 0, 0, 0], [41, 41, 26, 56, 83, 40, 80, 70, 33, 0, 0, 0, 0, 0, 0], [41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 0, 0, 0, 0, 0], [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 0, 0, 0, 0], [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 0, 0, 0], [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 0, 0], [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31, 0], [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]];
```

## --seed-contents--

```js
function maximumPathSumI(triangle) {

  return true;
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);
```

# --solutions--

```js
const testTriangle = [[3, 0, 0, 0],
  [7, 4, 0, 0],
  [2, 4, 6, 0],
  [8, 5, 9, 3]];

function maximumPathSumI(triangle) {
  let maxSum = triangle.slice();

  for (let i = triangle.length - 1; i > 0; i--) {
    let currentRow = maxSum[i];
    let previousRow = maxSum[i - 1];
    const temp = [];
    for (let j = 0; j < i; j++) {
      temp.push(Math.max((currentRow[j] + previousRow[j]), (currentRow[j + 1] + previousRow[j])));
    }
    maxSum[i - 1] = temp;
    maxSum.pop();
  }
  return maxSum[0][0];
}
```
