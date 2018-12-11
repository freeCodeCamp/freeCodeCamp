---
title: nameof Expressions
localeTitle: 表达名称
---
# 表达名称

有时，您需要变量，类型或成员的字符串名称，例如引发异常，记录或触发属性更改事件。在C＃6.0之前，您可以将字符串文字用于此类目的。

# ＃
```
public void ProcessStudent(Student student) 
 { 
    if (student == null) throw new ArgumentNullException("student"); 
 } 
```

但是，如果要重命名student参数，则必须记住也要修改字符串文字。现在使用nameof表达式，您不必使用字符串文字，如果您使用的名称不正确，编译器将能够发出警告。

# ＃
```
public void ProcessStudent(Student student) 
 { 
    if (student == null) throw new ArgumentNullException(nameof(student)); 
 } 
```

nameof表达式可能有用的一些示例包括：

*   在参数验证期间抛出异常
*   在设置MVC操作链接时传递操作名称
*   在实现INotifyPropertyChanged的类中触发属性更改事件时需要传递属性的名称
*   在注册XAML依赖项属性时传递属性的名称
*   记录时包括变量，类型或成员名称

应该注意的是，如果您使用限定名称提供nameof，编译器将为最右侧的名称生成一个字符串。