---
title: Use Destructuring Assignment to Assign Variables from Arrays
localeTitle: 使用解构分配从数组中分配变量
---
## 使用解构分配从数组中分配变量

在这种情况下，我们必须采取一些预防措施。

1.  不需要const \[b，a\]因为它将保持赋值局部的效果。
    
2.  const \[b，a\] = \[a，b\]将导致a，b的值为undefined（从左到右的简单赋值规则）。
    

因此，这个问题的解决方案是 \[b，a\] = \[a，b\]