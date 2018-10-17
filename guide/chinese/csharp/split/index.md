---
title: Split
localeTitle: 分裂
---# 拆分方法

`String.Split`方法解析一个字符串：作为输入，它接受一个指示分隔符的字符，并生成一个子字符串数组。

## 例

```csharp
string myText = "I like pizza"; 
 
 // Split the string by ' '(space) character. 
 string[] splitResult = myText.Split(' '); 
 
 // The array splitResult, now contains three substrings. 
 
 // Now print the array of substrings 
 foreach(string x in splitResult) 
 { 
    // Write On Console 
    Console.WriteLine(x); 
 } 
```

## 输出：
```
> I 
 > like 
 > pizza 

```