---
title: Variables
localeTitle: переменные
---
# переменные

Значения переменных хранятся. Они являются самой основной сущностью, используемой для хранения данных, таких как текст, цифры и т. Д. В программе.

В [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) переменные [_строго типизированы_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) , что означает, что вы должны определять тип для каждой переменной всякий раз, когда вы ее объявляете. В противном случае компилятор будет вызывать ошибку во [время компиляции](https://en.wikipedia.org/wiki/Compile_time) . Поэтому каждая переменная имеет связанный « [тип данных](https://guide.freecodecamp.org/java/data-types) » одного из следующих:

*   Примитивный тип: `int` , `short` , `char` , `long` , `boolean` , `byte` , `float` , `double`
*   Тип обертки: `Integer` , `Short` , `Char` , `Long` , `Boolean` , `Byte` , `Float` , `Double`
*   Тип ссылки: `String` , `StringBuilder` , `Calendar` , `ArrayList` и т. Д.

Возможно, вы заметили, что **тип Wrapper** состоит из типов, записанных точно так же, как и **Primitive Type** , за исключением заглавных букв в начале (например, **Reference Type** ). Это связано с тем, что типы Wrapper фактически являются частью более общих ссылочных типов, но _тесно связаны_ с их примитивными аналогами посредством [автобоксинга и распаковки](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) . На данный момент вам просто нужно знать, что такой «тип Wrapper» существует.

Как правило, вы можете _объявлять_ (т. Е. Создавать) переменные в соответствии с следующим синтаксисом: < _data-type_ > < _variableName_ >;

```java
// Primitive Data Type 
 int i; 
 
 // Reference Data Type 
 Float myFloat; 
```

Вы можете _присвоить_ значение переменной либо одновременно, когда вы объявляете ее (которая называется _инициализацией_ ), либо где-либо в коде после того, как вы ее объявили. Символ **\=** используется для одного и того же.

```java
// Initialise the variable of Primitive Data Type 'int' to store the value 10 
 int i = 10; 
 double amount = 10.0; 
 boolean isOpen = false; 
 char c = 'a'; // Note the single quotes 
 
 //Variables can also be declared in one statement, and assigned values later. 
 int j; 
 j = 10; 
 
 // initiates an Float object with value 1.0 
 // variable myFloat now points to the object 
 Float myFloat = new Float(1.0); 
 
 //Bytes are one of types in Java and can be 
 //represented with this code 
 int byteValue = 0B101; 
 byte anotherByte = (byte)0b00100001; 
```

Как видно из приведенного выше примера, переменные типа Primitive ведут себя несколько иначе, чем переменные типа Reference (& Wrapper), тогда как примитивные переменные _сохраняют_ фактическое значение, ссылочные переменные _относятся к_ «объекту», содержащему фактическое значение. Вы можете узнать больше в разделах, приведенных ниже.

# Другие источники

*   [Типы данных](https://guide.freecodecamp.org/java/data-types)
*   [Классы и объекты](https://guide.freecodecamp.org/java/classes-and-objects)