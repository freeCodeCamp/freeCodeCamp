---
title: Ternary operator
localeTitle: 三元运算符
---
# 三元运算符（ `?:` :)

三元运算符根据条件返回两个表达式中的一个。它可以用作if ... else语句的快捷方式。

## 句法
```
condition_expression ? expression_1 : expression_2 
```

### 参数

`condition_expression` 布尔表达式。

`expression_1` 如果`condition_expression`为true，则返回。

`expression_2` 如果`condition_expression`为false，则返回。

## 例
```
// initialize - set true or false here to view different result 
 bool hasFreeSweet = false; 
 
 string str = hasFreeSweet ? "Free sweet!" : "No free sweet."; 
 
 //output in console 
 Console.WriteLine(str); 
```

## 产量
```
if hasFreeSweet == true 
 > Free sweet! 
 
 if hasFreeSweet == false 
 > No free sweet. 

```