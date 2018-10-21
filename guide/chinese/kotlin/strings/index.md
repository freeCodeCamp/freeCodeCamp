---
title: Strings
localeTitle: 字符串
---
# 字符串

字符串是编程语言中的基本数据类型。字符串由`String`类型表示。字符串是不可变的。 Kotlin有一个丰富的API来处理字符串。

### 基本用法

#### 宣言

```kotlin
// Explicit type declaration 
 var firstName : String = "Elon" 
 
 // or Implicit type declaration and will still compile 
 val lastName = "Musk" 
```

另外，请注意`val`变量类型的用法，以下是它的行为方式

```kotlin
firstName = "Mark" // can be changed 
 lastName = "Zuckerberg" // cannot be changed 
 lastName = 12 // Error: type mismatch 
```

#### 字符串连接

显示在代码片段中，就像Java一样，将`Int`追加到 `String`将导致`String`输出

```kotlin
var str = "abc" + 1 
 println(str + "def") 
```

输出：

```shell
abc1def 
```

即使没有显式地将`Int`值1显式转换为`String`对象，结果输出仍然是`String` 。

#### 具有多行的字符串

程序员可以使用三引号而不是双引号来声明具有多行的`String`变量

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """ 
 println(str) 
```

输出：

```shell
        This is line 1 
        This is line 2 
        This is line 3 
```

或者使用`.trimIndent()`

使用`trimIndent()`还可以通过消除每行上多余的和不必要的缩进来提供干净的输出格式。检查下面的代码段：

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """.trimIndent() 
 println(str) 
```

输出：

```shell
This is line 1 
 This is line 2 
 This is line 3 
```

### 访问字符串的字符

#### 索引访问

程序员可以使用索引访问运算符访问字符串的元素（字符）：

```kotlin
var str = "Example" 
 println(str[2]) 
```

输出：

```shell
a 
```

就像从数组中访问元素一样，您得到：

```kotlin
var str = "Example" 
 println(str[9]) // Error: index out of bounds 
```

#### 通过String迭代

字符串的元素是可以通过索引操作访问的字符： `s[i]` 。

```kotlin
var str = "Example" 
 for (c in str) { 
    println(c) 
 } 
```

输出：

```shell
E 
 x 
 a 
 m 
 p 
 l 
 e 
```

### 字符串的不变性

就像Java一样，您无法更改`String`各个元素

```kotlin
var str = "Example" 
 str[2] = "b" // Error 
```

#### 重新分配字符串值

```kotlin
var str = "Example" 
 println(str) 
 str = "Example was changed" 
 println(str) 
```

输出：

```shell
Example 
 Example was changed 
```

### 字符串属性

#### 确定字符串的长度

```kotlin
var str = "Example" 
 println(str.length) 
```

输出：

```shell
7 
```

### 字符串函数

这些是当前Kotlin版本中可用的一些常见`String`函数

### 相比于

将此对象与指定的对象进行比较以获得顺序。如果此对象等于指定的其他对象，则返回零;如果小于其他对象，则返回负数;如果它大于其他对象，则返回正数。

```kotlin
var str = "Example" 
 var str2 = "Example123" 
 var str3 = "Example12345" 
 println(str.compareTo(str2)) 
 println(str.compareTo(str3)) 
 println(str3.compareTo(str)) 
 println(str.compareTo("Example")) 
```

输出：

```shell
-3 
 -5 
 5 
 0 # Equal 
```

### 等于

指示`String`对象是否与另一个`String`对象完全相同

```kotlin
var str = "Example" 
 var str2 = "Example2" 
 println(str.equals("Example")) 
 println(str2.equals("Example")) 
```

输出：

```shell
true 
 false 
```

### 得到

返回此字符序列中指定索引处的字符。

\`\`\`kotlin var str =“示例” 的println（str.get（3））
```
Output: 
```

贝壳 米
```
### toString 
 
 Returns a string representation of the object. 
```

科特林 println（9.toString（）+ 10） println（9 + 10）
```
Output: 
```

贝壳 “910” 19 \`\`\`

#### 资源

*   [Kotlin基本类型](https://kotlinlang.org/docs/reference/basic-types.html)
*   [Kotlin字符串参考](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)