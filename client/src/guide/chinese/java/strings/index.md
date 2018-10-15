---
title: Strings
localeTitle: 字符串
---
# 字符串

字符串是字符序列。在Java中， `String`是一个`Object` 。字符串不应与`char`混淆，因为字符实际上是1个值而不是字符序列。您仍然可以在String中使用1个值，但是在检查1个字符时最好使用`char` 。

```java
String course = "FCC"; 
 System.out.println(course instanceof Object); 
```

输出：
```
true 
```

您可以通过以下方式创建String对象：

1.  `String str = "I am a String"; //as a String literal`
2.  `String str = "I am a " + "String"; //as a constant expression`
3.  `String str = new String("I am a String"); //as a String Object using the constructor`

你可能会想：这三者有什么区别？

好吧，使用`new`关键字可以保证创建一个新的`String`对象，并在`Heap`分配一个新的内存位置 记忆[（点击这里了解更多）](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html) 。串 文本和常量String表达式在编译时缓存。编译器将它们放在String Literal Pool中以防止重复 并改善内存消耗。对象分配很昂贵，这个技巧在实例化字符串时提高了性能。如果你使用 再次使用相同的文字，JVM使用相同的对象。使用上面这样的构造函数几乎总是更糟糕的选择。

在此代码段中，创建了多少个String对象？

```java
String str = "This is a string"; 
 String str2 = "This is a string"; 
 String str3 = new String("This is a string"); 
```

答案是：创建2个String对象。 `str`和`str2`都指向同一个对象。 `str3`具有相同的内容，但使用`new`强制 创造一个新的，独特的对象。

当您创建String文本时，JVM会在内部检查所谓的`String pool` ，以查看它是否可以找到类似的内容（内容明智） 字符串对象。如果找到它，则返回相同的引用。否则，它只是继续并在池中创建一个新的String对象，以便 将来可以进行相同的检查。

您可以使用swallow，fast Object comparison `==`和实现的`equals()`来测试它。

```java
System.out.println(str == str2); // This prints 'true' 
 System.out.println(str == str3); // This prints 'false' 
 System.out.println(str.equals(str3)); // This prints 'true' 
```

这是另一个关于如何使用不同方法在Java中创建字符串的示例：

```java
public class StringExample{ 
 
   public static void main(String args[]) { 
      String s1 = "java";  // creating string by Java string literal 
      char ch[] = {'s','t','r','i','n','g','s'}; 
      String s2 = new String(ch);  // converting char array to string 
      String s3 = new String("example");  // creating Java string by new keyword 
      System.out.println(s1); 
      System.out.println(s2); 
      System.out.println(s3); 
   } 
 } 
```

#### 比较字符串

如果要比较两个String变量的值，则不能使用==。这是因为这将比较变量的引用 而不是链接到它们的值。要比较字符串的存储值，请使用方法equals。

```java
boolean equals(Object obj) 
```

如果两个对象相等则返回true，否则返回false。

```java
String str = "Hello world"; 
 String str2 = "Hello world"; 
 
 System.out.println(str == str2); // This prints false 
 System.out.println(str.equals(str2); // This prints true 
```

第一个比较是假的，因为“==”查看引用并且它们不相同。

第二个比较是正确的，因为变量存储相同的值。在这种情况下，“Hello world”。

我们在String中有几个内置方法。以下是String Length（）方法的示例。

```java
public class StringDemo { 
 
   public static void main(String args[]) { 
      String palindrome = "Dot saw I was Tod"; 
      int len = palindrome.length(); 
      System.out.println( "String Length is : " + len ); 
   } 
 } 
```

这将导致 - `String Length is : 17`

**答案是：**创建**2个** String对象。 **笔记**

1.  String方法使用从零开始的索引，但`substring()`的第二个参数除外。
2.  String类是final - 它的方法不能被覆盖。
3.  当JVM找到String文字时，它将被添加到字符串文字池中。
4.  String类具有方法名`length()` ，而数组具有属性命名长度。
5.  在java中，字符串对象是不可变的。永恒只是意味着不可修改或不可改变。创建字符串对象后，无法更改其数据或状态，但会创建新的字符串对象。

字符串长度

字符串的“长度”只是其中的字符数。所以“hi”是长度2，“Hello”是长度5.字符串上的length（）方法返回它的长度，如下所示：

```java
String a = "Hello"; 
 int len = a.length();  // len is 5 
```

#### 其他可以在String上使用的比较方法是：

1.  equalsIgnoreCase（）： - 比较字符串而不考虑区分大小写。

```java
String a = "HELLO"; 
 String b = "hello"; 
 System.out.println(a.equalsIgnoreCase(b));   // It will print true 
```

2.  compareTo： - 按字典顺序比较值并返回一个整数。

```java
String a = "Sam"; 
 String b = "Sam"; 
 String c = "Ram"; 
 System.out.println(a.compareTo(b));       // 0 
 System.out.prinltn(a.compareTo(c));       // 1 since (a>b) 
 System.out.println(c.compareTo(a));       // -1 since (c<a) 

```