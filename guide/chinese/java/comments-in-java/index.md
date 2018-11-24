---
title: Comments in Java
localeTitle: Java中的评论
---
## Java中的评论

java中的注释就像现实生活中用于显示一些信息的便利贴，其他程序员或开发人员可以阅读和理解这些信息。

最好在代码中添加注释，尤其是在与团队或公司合作时。这有助于未来的开发人员或团队成员在查看代码时更轻松地了解正在发生的事情。注释使您的代码更整洁有序。

编译器和解释器不执行Java注释。

### Java注释的类型

#### 1.单行注释

要创建单行注释，只需在文本前添加两个`//`正斜杠。

```java
// This is how single line comment looks like 
```

#### 2.多行注释

要创建多行注释包装`/*`行之间的行到这里`*/`

```java
public class MyFirstJava { 
    public static void main(String[] args) { 
    /* This Java Code 
       Prints out "Hello world" 
       and you are looking at a multi line comment 
    */ 
        System.out.println("Hello World"); 
    } 
 } 
```

#### 3.文件评论

Javadoc工具使用文档注释来创建代码文档。文档注释开发人员使用注释来记录代码，例如类的功能或方法的功能。这是由javadoc工具使用的，它将编译一组预先格式化的html文件，其中包含注释中可用的所有信息。

```java
/** 
 * The Following Java program displays a random between 0 - 50 
 * Most Developer dont document simple program like this 
 * 
 * @author      Quincy Larson 
 * @version     1.0 
 */ 
 
 public class RandomNumbers{ 
    public static void main(String[] args) { 
        int random = (int)(Math.random() * 50 + 1); 
        System.out.println("Hello World"); 
    } 
 } 
```

#### 更多信息：

*   [Java资源](http://guide.freecodecamp.org/java/resources/)
    
*   [编译的Javadoc示例](https://docs.oracle.com/javase/8/docs/api/)