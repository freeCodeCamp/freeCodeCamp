---
title: Converting from Decimal to Binary
localeTitle: 从十进制转换为二进制
---
## 从十进制转换为二进制

您可以使用余数将十进制数转换为二进制数。

### 一般方法

1）将原始十进制数除以2并记录商和余数。 2）重复第一步，用你找到的最后一个商替换原始十进制数，直到得到一个等于0的商。 3）将你记录的最后一个余数作为你的MSB（最高位）和你记录的第一个余数作为你的LSB（最低有效位）。记下与生成它们的顺序相反的余数。

### 例子

将十进制数30转换为二进制数。
```
30 / 2 = 15 r 0 
 15 / 2 = 7 r 1 
 7 / 2 = 3 r 1 
 3 / 2 = 1 r 1 
 1 / 2 = 0 r 1 
 
 Writing out the remainders bottom to top gives you the bit pattern: 
 
 11110 
 
 Checking your answer by converting the binary number back to decimal: 
 
 (1*2^4)+(1*2^3)+(1*2^2)+(1*2^1)+(0*2^0) = 30 
 
 So your answer is correct. 
```

将十进制数116转换为二进制数。
```
116 / 2 = 58 r 0 
 58 / 2 = 29 r 0 
 29 / 2 = 14 r 1 
 14 / 2 = 7 r 0 
 7 / 2 = 3 r 1 
 3 / 2 = 1 r 1 
 1 / 2 = 0 r 1 
 
 Writing out the remainders bottom to top gives you the bit pattern: 
 
 1110100 
 
 Checking your answer by converting the binary number back to decimal: 
 
 (1*2^6)+(1*2^5)+(1*2^4)+(0*2^3)+(1*2^2)+(0*2^1)+(0*2^0) = 116 
 
 So your answer is correct. 

```