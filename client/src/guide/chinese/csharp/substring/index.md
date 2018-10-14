---
title: Substring
localeTitle: 子
---# 子

`Substring`提取字符串值的一部分。它与2个整数参数一起使用，第一个是第一个字符的位置（以索引0开头），第二个是所需的字符长度。

## 例
```
string firstSentence = "Apple, I have."; 
 string secondSentence = "I have a Pen."; 
 
 string apple = firstSentence.Substring(0,5); 
 string pen = secondSentence.Substring(9,3); 
 
 Console.WriteLine(apple); 
 Console.WriteLine(pen); 
```

## 输出：
```
>Apple 
 >Pen 

```