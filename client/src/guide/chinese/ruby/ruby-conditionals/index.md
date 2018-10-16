---
title: Ruby Conditionals
localeTitle: Ruby条件
---
Ruby有几个常用的条件。

## 如果声明

在许多编程语言中非常常见的条件，语句测试条件是否为真，然后分支到指定的操作。 if语句包含一个`if` ， 任何数量的`elsif`和至多一个`else`声明。

*   ```ruby
    fruit = :apple 
     
     if fruit == :apple 
      puts "Your fruit is an apple" 
     elsif fruit == :orange 
      puts "Your fruit is an orange" 
     else 
      puts "This is not an apple or an orange" 
     end 
    
    ```
    

### 除非声明

除非语句与if语句相反。它与否定的if语句相同。

*   `ruby happy = true if !happy puts "This person is not happy" end` 以上陈述等同于以下陈述
*   `ruby unless happy puts "This person is not happy" end`

## 三元声明

三元语句用作短条件语句。它写成如下

*   `ruby game = "won" fans = game == "won" ? "happy" : unhappy fans # => "happy"`

## 案例陈述

case语句类似于if / elsif / else语句

*   ```ruby
    fruit = :apple 
     
     case fruit 
     when :apple 
      puts "Your fruit is an apple" 
     when :orange 
      puts "Your fruit is an orange" 
     else 
      puts "This is not an apple or an orange" 
     end 
    
    ```