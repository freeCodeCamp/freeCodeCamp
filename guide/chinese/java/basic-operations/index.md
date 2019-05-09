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

虽然大多数操作都是不言自明的，但条件（三元）运算符的工作原理如下：

`结果为布尔值得表达式 ? 如果为True返回这个结果 : 如果为False返回这个结果;`

例： 真实条件：

```java
    int x = 10; 
    int y = (x == 10) ? 5 : 9; // y等于5因为表达式‘x == 10’是true
```

错误条件：

```java
    int x = 25; 
    int y = (x == 10) ? 5 : 9; // y等于9因为表达式‘x == 10’是false
```

运算符的实例用于类型检查。它可用于测试对象是否是类，子类或接口的实例。一般格式 - _对象**instanceof**类/子类/接口_

这是一个程序来说明instanecof运算符： 

```Java
  Person obj1 = new Person();
        Person obj2 = new Boy();
 
        // 因为obj1是Person类，it is not an
        // 它不是Boy的实例也不是接口的实例
        System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*返回true因为obj1是Person的实例 */
                           
       
 ```
