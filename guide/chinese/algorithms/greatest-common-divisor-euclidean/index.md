---
title: Greatest Common Divisor Euclidean
localeTitle: 最大公约数欧几里得
---
## 最大公约数欧几里得

对于本主题，您必须首先了解最大公约数（GCD）和MOD操作。

#### 最大公约数（GCD）

两个或多个整数的GCD是最大的整数，它将每个整数除以其余数为零。

例-  
GCD为20,30 = 10 _（10是最大数字，其中20和30除以余数为0）_  
GCD为42,120,285 = 3 _（3是将42,120和285除以余数为0的最大数字）_

#### “mod”操作

当两个正整数被分割时，mod运算会给出余数。 我们写如下 -  
`A mod B = R`

这意味着，将A除以B得到余数R，这与给出商的除法运算不同。

例-  
7 mod 2 = 1 _（除以7得到余数1）_  
42 mod 7 = 0 _（将42除以7得到余数0）_

通过理解上述两个概念，您将很容易理解欧几里德算法。

### 最大公约数（GCD）的欧几里德算法

欧几里德算法找到2个数的GCD。

通过查看它的运行情况，您将更好地理解该算法。 假设您要计算1220和516的GCD，让我们应用欧几里德算法 -

假设您要计算1220和516的GCD，让我们应用欧几里德算法 - ![欧几里得实例](https://cdn-media-1.freecodecamp.org/imgr/aa8oGgP.png)

算法的伪代码 -  
第1步： **让`a, b`为两个数字**  
步骤2： **`a mod b = R`**  
步骤3： **设`a = b`且`b = R`**  
步骤4： **重复步骤2和3，直到`a mod b`大于0**  
步骤5： **GCD = b**  
第6步：完成

Javascript代码执行GCD-

```javascript
function gcd(a, b) { 
  var R; 
  while ((a % b) > 0)  { 
    R = a % b; 
    a = b; 
    b = R; 
  } 
  return b; 
 } 
```

使用递归执行GCD的Javascript代码 -

```javascript
function gcd(a, b) { 
  if (b == 0) 
    return a; 
  else 
    return gcd(b, (a % b)); 
 } 
```

您还可以使用欧几里德算法查找两个以上数字的GCD。 由于GCD是关联的，因此以下操作有效-GCD `GCD(a,b,c) == GCD(GCD(a,b), c)`

计算前两个数字的GCD，然后找到结果的GCD和下一个数字。 `GCD(203,91,77) == GCD(GCD(203,91),77) == GCD(7, 77) == 7`

您可以以相同的方式找到`n`数字的GCD。