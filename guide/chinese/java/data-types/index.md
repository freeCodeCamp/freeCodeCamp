---
title: Data Types
localeTitle: 数据类型
---
# 数据类型

Java是一种强类型语言。这意味着，在Java中，每种数据类型都有自己的严格定义。当数据类型之间发生任何冲突时，没有隐式数据类型转换。程序员应明确声明数据类型的任何更改。

Java定义了8种原始数据类型： `byte` ， `short` ， `int` ， `long` ， `char` ， `float` ， `double`和`boolean` 。

它们分为以下几类：

*   整型
*   浮点数字
*   人物
*   布尔类型

下面给出了每种数据类型的详细信息：

## 整数：

它们有四种类型： `byte` ， `short` ， `int` ， `long` 。重要的是要注意这些是正负值。有符号整数使用[2的补码](http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html)存储在计算机中。它包含负值和正值，但采用不同的格式，如`(-1 to -128)`或`(0 to +127)` 。无符号整数可以保存较大的正值，而不包含负值`(0 to 255)` 。与C ++不同，Java中没有无符号整数。

### 字节：

字节数据类型是8位带符号的二进制补码整数。
```
Wrapper Class: Byte 
 
 Minimum value: -128 (-2^7) 
 
 Maximum value: 127 (2^7 -1) 
 
 Default value: 0 
 
 Example: byte a = 10 , byte b = -50; 
```

### 短：

短数据类型是16位带符号的二进制补码整数。
```
Wrapper Class: Short 
 
 Minimum value: -32,768 (-2^15) 
 
 Maximum value: 32,767 (2^15 -1) 
 
 Default value: 0. 
 
 Example: short s = 10, short r = -1000; 
```

### INT：

int数据类型是32位带符号的二进制补码整数。除非存在对内存的担忧，否则它通常用作整数值的默认数据类型。
```
Wrapper Class: Integer 
 
 Minimum value: (-2^31) 
 
 Maximum value: (2^31 -1) 
 
 The default value: 0. 
 
 Example: int a = 50000, int b = -20 
```

### 长：

长数据类型是64位带符号的二进制补码整数。
```
Wrapper Class: Long 
 
 Minimum value: (-2^63) 
 
 Maximum value: (2^63 -1) 
 
 Default value: 0L. 
 
 Example: long a = 100000L, long b = -600000L; 
 
 By default all integer type variable is "int". So long num=600851475143  will give an error. 
 But it can be specified as long by appending the suffix L (or l) 
```

## 浮点：

这些也称为实数，用于涉及分数精度的表达式。它们有两种类型： `float` ， `double` 。在货币或研究数据等精确数据的情况下，实际上可以避免浮动。

### 浮动：

float数据类型是单精度32位[IEEE 754浮点数](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) 。
```
Wrapper Class: Float 
 
 Float is mainly used to save memory in large arrays of floating point numbers. 
 
 Default value: 0.0f. 
 
 Example: float f1 = 24.5f; 
 
 The default data type of floating-point number is double. So float f = 24.5 will introduce an error. 
 However, we can append the suffix F (or f) to designate the data type as float. 
```

### 双：

双数据类型是双精度64位[IEEE 754浮点](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) 。此数据类型通常是默认选择。绝不应将此数据类型用于精确值，例如货币。
```
Wrapper Class: Double 
 
 This data type is generally used as the default data type for decimal values. 
 
 Default value: 0.0d. 
 
 Example: double d1 = 123.400778; 
```

## 字符：

我们使用此数据类型来存储字符。这与C / C ++中的char不同。 Java使用`UNICODE` ，国际公认的字符集。 Java中的Char为16位长，而C / C ++中的Char为8位。
```
Wrapper Class: Character 
 
 Minimum value: '\u0000' (or 0). 
 
 Maximum value: '\uffff' (or 65,535). 
 
 Default value: null ('\u0000'). 
 
 Example: char letterA ='a'; 
```

## 布尔：

这用于存储逻辑值。布尔类型的值可以为true或false。此类型通常由关系运算符返回。
```
There are only two possible values: true and false. 
 
 Wrapper Class: Boolean 
 
 This data type is used for simple flags that track true/false conditions. 
 
 Default value is false. 
 
 Example: boolean b = true, boolean b1 = 1(this is not possible in java and give incompatible type error), boolean b2; 
```

## 参考数据类型：

除了原始数据类型之外，还有使用不同类的构造函数创建的引用变量。引用变量用于任何类以及数组，字符串，扫描程序，随机，模具等。引用变量使用new关键字初始化。

示例：

```java
public class Box{ 
 
    int length, breadth, height; 
 
    public Box(){ 
        length=5; 
        breadth=3; 
        height=2; 
    } 
 } 
 
 class demo{ 
 
    public static void main(String args[]) { 
        Box box1 = new Box();                //box1 is the reference variable 
        char[] arr = new char[10];           //arr is the reference variable 
    } 
 } 
```

## 串：

String不是原始数据类型，但它允许您在数组中存储多个字符数据类型，并且可以使用许多方法。当用户键入数据并且您必须对其进行操作时，它会非常常用。

在下面的示例中，我们尝试从字符串中删除所有字母并输出它：

```java
String input = "My birthday is 10 January 1984 and my favorite number is 42"; 
 String output = ""; 
 
 for(int i=0;i<input.length();i++){ 
 
 //if the character at index i on the string is a letter or a space, move on to the next index 
 if(Character.isLetter(input.charAt(i)) || input.charAt(i)==' '){ 
 
    continue; 
 } 
 
 output = output + input.charAt(i); //the number is added onto the output 
 
 } 
 
 System.out.println(output); 
```

输出：
```
10198442 

```