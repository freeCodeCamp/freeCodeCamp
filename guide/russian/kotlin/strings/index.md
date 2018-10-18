---
title: Strings
localeTitle: Струны
---
# Струны

Строка - это базовый тип данных на языке программирования. Строки представлены типом `String` . Строки неизменяемы. У Kotlin есть богатый API для работы со строками.

### Основное использование

#### декларация

```kotlin
// Explicit type declaration 
 var firstName : String = "Elon" 
 
 // or Implicit type declaration and will still compile 
 val lastName = "Musk" 
```

Кроме того, обратите внимание на использование типа переменной `val` , вот как он себя ведет

```kotlin
firstName = "Mark" // can be changed 
 lastName = "Zuckerberg" // cannot be changed 
 lastName = 12 // Error: type mismatch 
```

#### Конкатенация строк

Показан в фрагменте кода, как и Java, добавляя `Int` к `String` приведет к выводу `String`

```kotlin
var str = "abc" + 1 
 println(str + "def") 
```

Вывод:

```shell
abc1def 
```

Даже без явного преобразования значения `Int` 1 в объект `String` , в результате результат остается `String` .

#### Строка с несколькими строками

Программисты могут объявлять переменные `String` с несколькими строками, используя тройные кавычки вместо двойных кавычек

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """ 
 println(str) 
```

Вывод:

```shell
        This is line 1 
        This is line 2 
        This is line 3 
```

или с `.trimIndent()`

Использование `trimIndent()` дополнительно поможет обеспечить чистый выходной формат, удалив лишние и ненужные отступы в каждой строке. Изучите фрагмент кода ниже:

```kotlin
var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """.trimIndent() 
 println(str) 
```

Вывод:

```shell
This is line 1 
 This is line 2 
 This is line 3 
```

### Доступ к символам строки

#### Доступ к индексу

Программисты могут обращаться к элементам (символам) строки, используя оператор доступа к индексу:

```kotlin
var str = "Example" 
 println(str[2]) 
```

Вывод:

```shell
a 
```

Это как доступ к элементу из массива, вы получаете:

```kotlin
var str = "Example" 
 println(str[9]) // Error: index out of bounds 
```

#### Итерация через строку

Элементы строки - это символы, к которым можно получить доступ посредством операции индексирования: `s[i]` .

```kotlin
var str = "Example" 
 for (c in str) { 
    println(c) 
 } 
```

Вывод:

```shell
E 
 x 
 a 
 m 
 p 
 l 
 e 
```

### Неизменяемость строки

Подобно Java, вы не можете изменять отдельные элементы `String`

```kotlin
var str = "Example" 
 str[2] = "b" // Error 
```

#### Повторное присвоение значений String

```kotlin
var str = "Example" 
 println(str) 
 str = "Example was changed" 
 println(str) 
```

Вывод:

```shell
Example 
 Example was changed 
```

### Строковые свойства

#### Определение длины строки

```kotlin
var str = "Example" 
 println(str.length) 
```

Вывод:

```shell
7 
```

### Строковые функции

Это некоторые из обычных функций `String` доступных из текущей версии Kotlin

### сравнить с

Сравнивает этот объект с указанным объектом для заказа. Возвращает ноль, если этот объект равен указанному другому объекту, отрицательное число, если оно меньше другого, или положительное число, если оно больше другого.

```kotlin
var str = "Example" 
 var str2 = "Example123" 
 var str3 = "Example12345" 
 println(str.compareTo(str2)) 
 println(str.compareTo(str3)) 
 println(str3.compareTo(str)) 
 println(str.compareTo("Example")) 
```

Вывод:

```shell
-3 
 -5 
 5 
 0 # Equal 
```

### равняется

Указывает, является ли объект `String` в точности равным другому объекту `String`

```kotlin
var str = "Example" 
 var str2 = "Example2" 
 println(str.equals("Example")) 
 println(str2.equals("Example")) 
```

Вывод:

```shell
true 
 false 
```

### получить

Возвращает символ в указанном индексе в этой последовательности символов.

\`\` \`kotlin var str = "Пример" Println (str.get (3))
```
Output: 
```

оболочка м
```
### toString 
 
 Returns a string representation of the object. 
```

Котлин println (9.toString () + 10) println (9 + 10)
```
Output: 
```

оболочка "910" 19 \`\` \`

#### Ресурсы

*   [Основные типы Котлина](https://kotlinlang.org/docs/reference/basic-types.html)
*   [Ссылка для ссылки на Kotlin](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)