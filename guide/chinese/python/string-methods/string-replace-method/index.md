---
title: String Replace Method
localeTitle: 字符串替换方法
---
## 字符串替换方法

`str.replace(old, new, max)`方法用于将字符串`old`替换为字符串`new` ，总计`max`次数。此方法返回带有替换的字符串的新副本。原始字符串`str`保持不变。

#### 例子

1.  用`"WAS"`替换所有出现的`"is"` `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS") 
 print(newString) 
```

产量

```python
ThWAS WAS nice. ThWAS WAS good. 
```

2.  用`"WAS"`替换前两次出现的`"is"` `"WAS"`

```python
string = "This is nice. This is good." 
 newString = string.replace("is","WAS", 2) 
 print(newString) 
```

产量

```python
ThWAS WAS nice. This is good. 
```

#### 更多信息：

阅读[Python文档中](https://docs.python.org/2/library/string.html#string.replace)有关字符串替换的更多信息