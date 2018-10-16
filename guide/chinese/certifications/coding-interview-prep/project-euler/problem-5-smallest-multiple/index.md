---
title: Smallest multiple
localeTitle: 最小的倍数
---
## 问题5：最小的倍数

### 方法：

*   在这个挑战中，我们需要找到1到n个数的LCM。
*   要查找数字的LCM，我们使用以下公式：
*   ![LCM](https://wikimedia.org/api/rest_v1/media/math/render/svg/9453a93953efe119b7502c1827aeeb869ab121d6)
*   为了找到两个数的GCD（最大公约数），我们使用欧几里德算法。
*   一旦我们得到两个数字的LCM，我们就可以得到从1到n的数字的LCM。

### 解：

```js
//LCM of two numbers 
 function lcm(a, b){ 
  return (a*b)/gcd(a, b); 
 } 
 
 //Euclidean recursive algorithm 
 function gcd(a, b){ 
  if (b === 0) return a; 
  return gcd(b, a%b); 
 } 
 
 function smallestMult(n){ 
  let maxLCM = 1; 
 
  //Getting the LCM in the range 
  for (let i = 2; i <= n; i++){ 
    maxLCM = lcm(maxLCM, i); 
  } 
  return maxLCM; 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Problem-5-Smallest-multiple)

### 参考文献：

*   [欧几里德算法](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [LCM](https://en.wikipedia.org/wiki/Least_common_multiple)