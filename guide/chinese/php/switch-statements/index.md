---
title: Switch Statements
localeTitle: 切换语句
---
## 切换语句

Switch语句根据条件的值执行代码块。

### 句法：

```PHP
switch(x) { 
  case 1: 
    statement1; 
    break; 
   case 2: 
     statement2; 
     break; 
   default: 
     defaultstatement; 
 } 
```

在上面的例子中，x是条件。将执行匹配案例之后的陈述。如果没有匹配项，则将运行默认语句。

`break`关键字用于结束每个案例。

### 更多信息：

[PHP开关](http://php.net/manual/en/control-structures.switch.php)