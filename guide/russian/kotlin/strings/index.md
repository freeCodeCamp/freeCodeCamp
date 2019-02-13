---
title: Strings
localeTitle: Строки
---
# Строки

Строка - один из базовых типов данных в языке программирования Kotlin. Строки представлены типом `String`. Строки неизменяемы. Kotlin имеет богатый API для удобной работы со строками.

### Основное использование

#### Объявление

```kotlin
// явное объявление типа
 var firstName : String = "Elon" 
 
 // или неявное объявление типа (оба варианта скомпилируются)
 val lastName = "Musk" 
```

Кроме того, обратите внимание на использование ключевого слова `val` при объявлении переменной, вот как оно себя ведет:

```kotlin
firstName = "Mark" // переменная может быть изменена
 lastName = "Zuckerberg" // переменная не может быть изменена
 lastName = 12 // Ошибка: несоответствие типов
```

#### Сложение строк (конкатенация)

В нижеприведённом примере мы прибавляем `Int` к `String`, что приведёт к выводу `String`.

```kotlin
var str = "abc" + 1 
 println(str + "def") 
```

Вывод:

```shell
abc1def 
```

Даже без явного преобразования значения `Int` (в данном случае 1) в объект `String` в результате получается `String`.

#### Строка с несколькими строками

Kotlin позволяет объявлять переменные `String` с несколькими строками, используя тройные кавычки вместо одинарных:

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

Использование `trimIndent()` дополнительно помогает обеспечить чистый выходной формат, удалив лишние и ненужные отступы в каждой строке. Изучите фрагмент кода ниже:

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

#### Доступ по индексу

Программисты могут обращаться к элементам (символам) строки, используя оператор доступа по индексу:

```kotlin
var str = "Example" 
 println(str[2]) 
```

Вывод:

```shell
a 
```

Это похоже на доступ к элементу из массива. Другой пример:

```kotlin
var str = "Example" 
 println(str[9]) // Ошибка: индекс выходит за границы
```

#### Итерация через строку

Элементы строки - это символы, к которым можно получить доступ через индекс: `s[i]` .

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

Как и в Java, вы не можете изменять отдельные элементы `String`:

```kotlin
var str = "Example" 
 str[2] = "b" // Ошибка
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

### Свойства строки

#### Определение длины строки

```kotlin
var str = "Example" 
 println(str.length) 
```

Вывод:

```shell
7 
```

### Функции строки

Это некоторые из обычных функций `String`, доступных в текущей версии Kotlin.

### compareTo

Сравнивает данный объект с другим указанным объектом. Возвращает ноль, если данный объект равен указанному другому объекту, отрицательное число, если данный объект "меньше" другого, или положительное число, если объект "больше" другого.

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

### equals

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

### get

Возвращает символ в указанном индексе в этой последовательности символов.

``` kotlin
var str = "Example"
println(str.get(3))
```

Вывод:

```shell
m
```

### toString

Возвращает строковое представление объекта.

```kotlin
println(9.toString() + 10)
println(9 + 10)
```

Вывод:

```shell
"910"
19
```

#### Ресурсы

*   [Основные типы языка Kotlin](https://kotlinlang.org/docs/reference/basic-types.html)
*   [String в Kotlin](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)
