---
title: If
localeTitle: 如果
---
# 如果

if语句根据条件执行不同的代码块。
```
if (condition) 
 { 
    // Do something when `condition` is true 
 } 
 else 
 { 
    // Do something when `condition` is false 
 } 
```

当`condition`为真，代码里面`if`部分执行，否则`else`执行。有时您需要添加第二个条件。为了便于阅读，您应该使用`else if`而不是嵌套`if`语句。 而不是写：
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else 
 { 
    if (anotherCondition) 
    { 
        // Do something if `anotherCondition` is true 
    } 
    else 
    { 
        // Do something if `condition` AND `anotherCondition` is false 
    } 
 } 
```

你可以使用更简洁的写作：
```
if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) 
 { 
    // Do something if `anotherCondition` is ture 
 } 
 else 
 { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
```

还可以检查条件是否为假并在不必具有else语句的情况下对其进行操作。
```
if(!condition) 
 { 
 //do something if the condition is false 
 } 
```

```
int number = 3; 
 //!= implies that you wish to check if the object's value is not equal to the value next to it 
 if(number !=2) 
 { 
     Console.WriteLine("Number is not 2"); 
 } 
```

请注意， `else`和`else if`部分不是必需的，而`if`是必需的。

## 例
```
    Console.WriteLine("Who are you? "); 
    string name = Console.ReadLine(); 
 
    if (name == "John") 
    { 
        Console.WriteLine("Hi John!"); 
    } 
    else if (name == "Fabio") 
    { 
        Console.WriteLine("Oh, it's you Fabio :)"); 
    } 
    else 
    { 
        Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name); 
    } 
 
    /* Run and type some names: 
        -> If name is "John", then output is "Hi John!" 
        -> If name is "Fabio", then output is "Oh, it's you Fabio :)" 
        -> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name. 
    */ 
```

if语句需要一个布尔结果，即true或false。在某些编程语言中，几种数据类型可以自动转换为布尔值，但在C＃中，您必须专门将结果设置为布尔值。例如，你不能使用if（number），但你可以将数字与某些东西进行比较，以生成true或false。