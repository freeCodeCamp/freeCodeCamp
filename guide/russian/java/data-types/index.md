---
title: Data Types
localeTitle: Типы данных
---
# Типы данных

Java - это строго типизированный язык. Это означает, что в Java каждый тип данных имеет собственное строгое определение. Нет никаких неявных преобразований типа данных при возникновении конфликтов между типами данных. Любое изменение типов данных должно быть явно объявлено программистом.

Java определяет 8 примитивных типов данных: `byte` , `short` , `int` , `long` , `char` , `float` , `double` и `boolean` .

Они делятся на следующие категории:

*   Целые
*   Числа с плавающей запятой
*   Персонажи
*   Булевский тип

Подробности каждого из типов данных приведены ниже:

## Целые:

Они имеют четыре типа: `byte` , `short` , `int` , `long` . Важно отметить, что это подписанные положительные и отрицательные значения. Подписанные целые числа хранятся в компьютере с использованием [дополнения 2](http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html) . Он содержит как отрицательные, так и положительные значения, но в разных форматах, таких как `(-1 to -128)` или `(0 to +127)` . Целочисленное целое число без знака может содержать большее положительное значение и не имеет отрицательного значения `(0 to 255)` . В отличие от C ++ целых чисел без знака в Java нет.

### байт:

Тип данных байта - это 8-битное целое число дополнений, дополненное двумя символами.
```
Wrapper Class: Byte 
 
 Minimum value: -128 (-2^7) 
 
 Maximum value: 127 (2^7 -1) 
 
 Default value: 0 
 
 Example: byte a = 10 , byte b = -50; 
```

### короткая:

Короткий тип данных - это 16-разрядное целое число дополнений, подписанное двумя.
```
Wrapper Class: Short 
 
 Minimum value: -32,768 (-2^15) 
 
 Maximum value: 32,767 (2^15 -1) 
 
 Default value: 0. 
 
 Example: short s = 10, short r = -1000; 
```

### INT:

int - это 32-разрядное целое число дополнений, подписанное двумя. Он обычно используется в качестве типа данных по умолчанию для интегральных значений, если не возникает озабоченность по поводу памяти.
```
Wrapper Class: Integer 
 
 Minimum value: (-2^31) 
 
 Maximum value: (2^31 -1) 
 
 The default value: 0. 
 
 Example: int a = 50000, int b = -20 
```

### долго:

Длинный тип данных - это целое число дополнений, состоящее из 64 бит.
```
Wrapper Class: Long 
 
 Minimum value: (-2^63) 
 
 Maximum value: (2^63 -1) 
 
 Default value: 0L. 
 
 Example: long a = 100000L, long b = -600000L; 
 
 By default all integer type variable is "int". So long num=600851475143  will give an error. 
 But it can be specified as long by appending the suffix L (or l) 
```

## Плавающая точка:

Они также называются действительными числами и используются для выражений с дробной точностью. Они бывают двух типов: `float` , `double` . Поплавок фактически избегают в случае точных данных, таких как данные о валюте или исследованиях.

### плавать:

Тип данных float представляет собой 32-битную 32-битную [IEEE 754 с плавающей точкой](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) .
```
Wrapper Class: Float 
 
 Float is mainly used to save memory in large arrays of floating point numbers. 
 
 Default value: 0.0f. 
 
 Example: float f1 = 24.5f; 
 
 The default data type of floating-point number is double. So float f = 24.5 will introduce an error. 
 However, we can append the suffix F (or f) to designate the data type as float. 
```

### дважды:

двойной тип данных - это 64-битная 64-битная [плавающая точка IEEE 754](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) с двойной точностью. Этот тип данных обычно является выбором по умолчанию. Этот тип данных никогда не должен использоваться для точных значений, таких как валюта.
```
Wrapper Class: Double 
 
 This data type is generally used as the default data type for decimal values. 
 
 Default value: 0.0d. 
 
 Example: double d1 = 123.400778; 
```

## Символ:

Мы используем этот тип данных для хранения символов. Это не то же самое, что символ в C / C ++. Java использует `UNICODE` , международно принятый набор символов. Char на Java длится 16 бит, а в C / C ++ - 8 бит.
```
Wrapper Class: Character 
 
 Minimum value: '\u0000' (or 0). 
 
 Maximum value: '\uffff' (or 65,535). 
 
 Default value: null ('\u0000'). 
 
 Example: char letterA ='a'; 
```

## Boolean:

Это используется для хранения логических значений. Логический тип может иметь значение true или false. Этот тип обычно возвращается реляционными операторами.
```
There are only two possible values: true and false. 
 
 Wrapper Class: Boolean 
 
 This data type is used for simple flags that track true/false conditions. 
 
 Default value is false. 
 
 Example: boolean b = true, boolean b1 = 1(this is not possible in java and give incompatible type error), boolean b2; 
```

## Типы ссылочных данных:

Помимо примитивных типов данных существуют ссылочные переменные, созданные с использованием конструкторов разных классов. Референтные переменные используются для любого класса, а также для массива, String, Scanner, Random, Die и т. Д. Ссылочные переменные инициализируются с использованием нового ключевого слова.

Пример :

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

## Строка:

Строка не является примитивным типом данных, но позволяет хранить несколько типов данных символов в массиве и имеет множество методов, которые можно использовать. Он используется довольно часто, когда пользователь вводит данные, и вам приходится манипулировать им.

В приведенном ниже примере мы пытаемся удалить все буквы из строки и вывести их:

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

Вывод:
```
10198442 

```