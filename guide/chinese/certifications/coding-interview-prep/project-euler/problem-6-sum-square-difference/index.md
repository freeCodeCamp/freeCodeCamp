---
title: Sum square difference
localeTitle: 和方差
---
## 问题6：求和方差

### 方法：

*   前n个自然数的总和可以使用以下公式计算：
    
*   ![n个数的总和](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)
    
*   n个自然数的平方和可以使用以下公式计算：
    
*   ![n个正方形的总和](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae043bef33d41161541238bdbf4feca9f5e179dd)
    
*   我们可以使用上面的公式计算值并减去它们以得到结果。
    

### 解：

```js
function sumSquareDifference(n) { 
  const sumOfN = (n*(n+1))/2; 
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6; 
 
  //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)` 
  return (sumOfN ** 2) - sumOfNSquare; 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Problem-6-Sum-square-difference)

### 参考文献：

*   [n个数字的总和 - 维基百科](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
*   [n平方数的总和 - 维基百科](https://en.wikipedia.org/wiki/Square_pyramidal_number)