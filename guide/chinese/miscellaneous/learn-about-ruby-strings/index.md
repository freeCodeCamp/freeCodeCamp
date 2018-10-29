---
title: Learn About Ruby Strings
localeTitle: 了解Ruby字符串
---
### 基本：

*   字符串是引号之间串联的一系列字符。
    
*   单引号或双引号可用于在Ruby中创建字符串。
    
*   Ruby对使用双引号创建的字符串进行了一些额外的评估，例如：
    
    *   转义字符： `\n` ， `\t` ， `\s`
        
    *   在里面使用变量和表达式： `#{variable or expression}`
        
*   带单引号的字符串按原样呈现，没有任何特殊注意事项。
    

## 例子：
```
"Hello World" 
 # is equivalent to: 
 'Hello World' 
 
 "This is line 1.\nAnd this is line 2." 
 # returns: 
 This is line 1. 
 And this is line 2. 
 
 name = "Batman" 
 "Hello, my name is #{name}!" 
 # returns: 
 Hello, my name is Batman! 
 
 # Note that for single quotes, ruby doesn't take special consideration for variables or backslashes: 
 'This is your name:\n#{name}' 
 # returns: 
 This is your name:\n#{name} 
```

## 参考文献：

*   [字符串的官方Ruby文档](http://ruby-doc.org/core-2.2.0/String.html) 。