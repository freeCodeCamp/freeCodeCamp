---
title: Converting Units Centimeters to Meters
localeTitle: 将单位厘米转换为米
---
## 将单位厘米转换为米

Centi-（符号c）是度量系统中的单位前缀，表示百分之一的因子

意思是一个厘米是一百分之一米。 x cm = xm / 100

例子 1厘米= 1米/ 100 = 0.01米 10厘米= 10米/ 100 = 0.1米 1.2厘米= 1.2米/ 100 = 0.012米

根据定义， _一_厘米是_一_米的_一个千分之一_

在下面的公式中，单位用括号\[\]表示
```
[cm] / 100 = [m] 
```

如果你输入你所拥有的值，比方说50厘米，它会像这样计算：
```
50[cm] / 100 = 0.5[m] 
```

计算结果返回0.5米的值，50厘米的米数。

### 例子

1.  1厘米= 0.01 M（1/100）
2.  25厘米= 0.25米（25/100）
3.  200厘米=2米（200/100）

### 编码

```js
function convertCentimeterToMeter (cm) { 
  return ( cm / 100 ); 
 } 
 
 // Set some example measurements 
 var lengthInCm = 300; 
 var lengthInM; 
 
 lengthInM = convertCentimeterToMeter(lengthInCm); // 3 
```

### 更多信息：

*   [将cm转换为m](https://www.convertunits.com/from/cm/to/m)
*   [关于Centi的维基百科文章](https://en.wikipedia.org/wiki/Centi-)