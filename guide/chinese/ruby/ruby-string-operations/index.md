---
title: Ruby String Operations
localeTitle: Ruby字符串操作
---
连接和乘法都可以在字符串上执行。

## 级联：

*   可以使用以下任何方法将字符串连接在一起：
    
    *   `+`运算符
    *   `<<`运营商
    *   `.concat`方法
    
    ```ruby
    "Hello" + " World" + "!"  #=> Hello World! 
    
    ```
    
    ```ruby
    "Hello" << " World!" #=> Hello World! 
    
    ```
    
    ```ruby
    string1 = "Hello" 
     string2 = " World!" 
     string1.concat(string2) #=> Hello World! 
    
    ```
    

## 乘法：

*   可以使用`*`运算符将字符串乘以整数值。 `ruby "Hello" * 3 #=> HelloHelloHello`

## 替换子字符串

*   我们可以搜索子字符串或使用Regex搜索和替换字符串中的字符。 `ruby "Hey mom, look at this string".sub('mom', 'dad') #=> Hey dad, look at this string`

## 比较：

*   可以比较字符串，返回-1,0，+ 1或nil，具体取决于字符串是否小于，等于或大于other\_string。

```ruby
"abcdef" <=> "abcde"     #=> 1 
 "abcdef" <=> "abcdef"    #=> 0 
 "abcdef" <=> "abcdefg"   #=> -1 
 "abcdef" <=> "ABCDEF"    #=> 1 

```