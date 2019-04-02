---
title: POJO
localeTitle: POJO
---
## POJO

POJO代表“Plain Old Java Object”。这与Plain Old _Javascript_ Objects不同。 Plain Old Java Object指的是Java编程语言中使用的面向对象编程（OOP）范例。 [OOP模型](https://en.wikipedia.org/wiki/Object-oriented_programming)将数据视为“对象”。每个“对象”都是“类”的一个实例，它表示所有对象从中继承其属性和属性的原型或模板。

因此，POJO只是一个Java对象。但是，它还必须满足以下附加标准：

1.  它不能扩展预先指定的Java类;

```java
public class Foo extends javax.servlet.http.HttpServlet { 
 ...// body ... 
 } 
```

2.  它不得实现预先指定的接口;

```java
public class Bar implements javax.ejb.EntityBean { 
  ...  // body 
 } 
```

3.  它不得包含预先指定的注释。

```java
@javax.persistence.Entity public class Baz { 
  ... // body ... 
 } 
```

因此，只有在没有上述修改的情况下，Java对象才有资格作为POJO。因此，遵循正式Java语言规范规定的POJO不受“任何限制”约束。

#### 更多信息：

[维基百科 - POJO](https://en.wikipedia.org/wiki/Plain_old_Java_object)