---
title: Basic Operations
localeTitle: 基本操作
---
# 基本操作

Java支持对变量进行以下操作：

*   **算术** ： `Addition (+)` ， `Subtraction (-)` ， `Multiplication (*)` ， `Division (/)` ， `Modulus (%)` ， `Increment (++)` ， `Decrement (--)` 。
*   **字符串连接** ： `+`可用于字符串连接，但减法`-`在字符串上不是有效操作。
*   **关系** ： `Equal to (==)` ， `Not Equal to (!=)` ， `Greater than (>)` ， `Less than (<)` ， `Greater than or equal to (>=)` ， `Less than or equal to (<=)`
*   **按位** ： `Bitwise And (&)` ， `Bitwise Or (|)` ， `Bitwise XOR (^)` ， `Bitwise Compliment (~)` `Zero fill right shift (>>>)` `Bitwise Compliment (~)` ， `Left shift (<<)` ， `Right Shift (>>)` ， `Zero fill right shift (>>>)`
*   **逻辑** ： `Logical And (&&)` ， `Logical Or (||)` ， `Logical Not (!)`
*   **赋值** ： `=` ， `+=` ， `-=` ， `*=` ， `/=` ， `%=` ， `<<=` ， `>>=` ， `&=` ， `^=` ， `|=`
*   **其他** ： `Conditional/Ternary(?:)` ， `instanceof`

虽然大多数操作都是不言自明的，但条件（三元）算子的工作原理如下：

`expression that results in boolean output ? return this value if true : return this value if false;`

例： 真实条件：

```java
    int x = 10; 
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true 
```

错误条件：

```java
    int x = 25; 
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false 
```

运算符的实例用于类型检查。它可用于测试对象是否是类，子类或接口的实例。一般格式 - _类/子类/接口的对象**实例**_

这是一个程序来说明instanecof运算符： \`\`\`的Java Person obj1 = new Person（）; 人obj2 =新男孩（）;
```
    // As obj is of type person, it is not an 
    // instance of Boy or interface 
    System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */ 
```

\`\`\`