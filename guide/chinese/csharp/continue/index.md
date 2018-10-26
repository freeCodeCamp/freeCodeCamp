---
title: Continue statement
localeTitle: 继续声明
---
# 继续声明

`continue`语句将控制传递给循环内的下一个迭代。

在此示例中，当i的值为2时，将跳过循环中的下一个语句。

## 例
```
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if( i == 2) 
  { 
    continue; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## 输出：
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 3 is 4 
 > Item on index 4 is 5 

```