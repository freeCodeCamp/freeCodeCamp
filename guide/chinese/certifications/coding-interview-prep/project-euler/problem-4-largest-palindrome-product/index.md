---
title: Largest palindrome product
localeTitle: 最大的回文产品
---
## 问题4：最大的回文产品

### 方法：

*   回文数字是反转时读取的数字。
*   从两位3位数的乘积得到的最大数字是`999 * 999` ，所以我们可以制作一个循环，从产生最大数字开始，并检查该数字是否是回文。

### 解：

```js
function largestPalindromeProduct(n) { 
 
  //To get the maximum n digit number, + operator type castes String to Number type 
  let max = +[...Array(n)].reduce((a, c) => a+=9, ""); 
 
  //Next we get minimum n digit number from the max 
  let min = (max+1)/10; 
 
  //To store the result 
  let res = []; 
 
  //Starting the loop from max to min 
  for (let i = max; i >= min; i--){ 
 
    //Another loop 
    for (let j =  max; j >= min; j--){ 
 
      //Getting the product 
      let num = i*j; 
 
      //Reversing the number 
      let numReverse = [...String(num)].reverse().join(''); 
 
      //Checking for palindromic number 
      if (num == numReverse) { 
 
        //Pushing the number into array and breaking the loop for efficiency 
        res.push(num); 
        break; 
      } 
    } 
  } 
 
  // Returning the maximum of the result array 
  return Math.max(...res); 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Problem-4-Largest-palindrome-product)

### 参考文献：

*   [维基百科](https://en.wikipedia.org/wiki/Palindromic_number)