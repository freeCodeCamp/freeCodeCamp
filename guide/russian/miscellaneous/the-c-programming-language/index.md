---
title: The C Programming Language
localeTitle: Язык программирования C
---
## основы

*   Настроить
*   Ваша первая программа на C #
*   Типы и переменные
*   Операции управления потоком
*   операторы
*   Струны
*   Классы, объекты, интерфейс и основные методы
*   Поля и свойства
*   Модификаторы охвата и доступности
*   Обработка исключений

## промежуточный

*   Дженерики
*   События, делегаты и выражения лямбда
*   Сборник
*   LINQ

## продвинутый

*   Асинхронное программирование (Async и Await)
*   Параллельная библиотека задач

## Что нового в C # 6

*   Null-Conditional Operator
*   Инициализаторы автоистории
*   Название выражений
*   Выражение функциональных функций и свойств
*   Другие особенности

## Объектно-ориентированные принципы (ООП)

*   Инкапсуляция
*   абстракция
*   наследование
*   Полиморфизм

## Твердые принципы

*   Единый принцип ответственности
*   Открытый закрытый принцип
*   Принцип замены Лискова
*   Принцип сепарации интерфейса
*   Принцип инверсии зависимостей

## C # Лучшие практики, шаблоны проектирования и тестирование (TDD)

## Настроить

[LinqPad](http://www.linqpad.net/) - это .NET-блокнот для быстрой проверки ваших фрагментов кода на C #. Стандартная версия бесплатна и идеальный инструмент для новичков для выполнения языковых инструкций, выражений и программ.

Кроме того, вы также можете загрузить [Visual Studio Community 2015,](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) которая является расширяемой [средой IDE,](https://en.wikipedia.org/wiki/Integrated_development_environment) используемой большинством профессионалов для создания корпоративных приложений.

## Ваша первая программа на C #
```
//this is the single line comment 
 
 /** This is multiline comment, 
 compiler ignores any code inside comment blocks. 
 **/ 
 
 //This is the namespace, part of the standard .NET Framework Class Library 
 using System; 
 // namespace defines the scope of related objects into packages 
 namespace Learning.CSharp 
 { 
  // name of the class, should be same as of .cs file 
  public class Program 
  { 
    //entry point method for console applications 
   public static void Main() 
    { 
      //print lines on console 
      Console.WriteLine("Hello, World!"); 
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console. 
      Console.ReadLine(); 
    } 
  } 
 } 
```

Каждое консольное приложение C # должно иметь [метод Main,](https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx) который является точкой входа программы.

Редактируйте [HelloWorld](https://dotnetfiddle.net/kY7QRm) в .NET Fiddle, инструмент, вдохновленный [JSFiddle,](http://jsfiddle.net) где вы можете изменить фрагменты кода и проверить результат самостоятельно. Обратите внимание, что это просто поделиться и протестировать фрагменты кода, а не использоваться для разработки приложений.

Если вы используете визуальную студию, следуйте этому [руководству,](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx) чтобы создать консольное приложение и понять свою первую программу на C #.

## Типы и переменные

C # - строго типизированный язык. Каждая переменная имеет тип. Каждое выражение или оператор оценивает значение. В C # существует два типа типов:

*   Типы значений
*   Типы ссылок.

**Типы значений** . Переменные, которые являются типами значений, непосредственно содержат значения. Присвоение одной переменной типа значения другому копирует содержащееся значение.

[Изменить в .NET Fiddle](https://dotnetfiddle.net/JCkTxb)
```
int a = 10; 
 int b = 20; 
 a=b; 
 Console.WriteLine(a); //prints 20 
 Console.WriteLine(b); //prints 20 
```

Обратите внимание, что в других динамических языках это может быть другим, но в C # это всегда значение. Когда создается тип значения, создается одно пространство, наиболее вероятно в [стеке](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) , которое представляет собой структуру данных «LIFO» (последняя, ​​первая). Стек имеет ограничения по размеру, а операции с памятью эффективны. Немногие примеры встроенных типов данных - это `int, float, double, decimal, char and string` .

Тип | Пример | Описание  
\--------- | -------------------------------------------------- --------------------------- | -------------------------------------------------- -------------------------------------------------- -----------------------------  
_Целое_ | `int fooInt = 7;` | **Подписанное 32-битное** целое число  
_Длинные_ | `long fooLong = 3000L;` | **Подписанное 64-битное** целое число. **L используется для указания того, что это значение переменной имеет тип long / ulong**  
_Двухместный_ | `double fooDouble = 20.99;` | Точность: **15-16 цифр**  
_Поплавок_ | `float fooFloat = 314.5f;` | Точность: **7 цифр** . **F используется для указания, что это переменное значение имеет тип float**  
_Десятичный_ | `decimal fooDecimal = 23.3m;` | Точность: **28-29 цифр.** Более высокая точность и меньший диапазон позволяют учесть **финансовые и денежные расчеты**  
_Char_ | `char fooChar = 'Z';` | Один **16-разрядный символ Unicode**  
_Boolean_ | `bool fooBoolean = false;` | Boolean - **true & false**  
_Строка_ | `string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);` | **строка символов Unicode.**

Полный список всех встроенных типов данных см. [Здесь.](https://msdn.microsoft.com/en-us/library/ms228360)

[**Типы ссылок**](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) . Переменные ссылочных типов хранят ссылки на их объекты, что означает, что они хранят адрес в местоположении данных в [стеке](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) , также называемом указателями. Фактические данные хранятся в памяти [кучи](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3) . Присвоение ссылочного типа другому не копирует данные, вместо этого создает вторую копию ссылки, которая указывает на то же место в куче.

В куче объекты распределяются и освобождаются в случайном порядке, поэтому для этого требуются накладные расходы на управление памятью и [сборку мусора](https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110) .aspx).

Если вы не пишете [небезопасный код](https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx) или имеете дело с [неуправляемым кодом](https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100) .aspx), вам не нужно беспокоиться о сроках хранения ваших мест памяти. Компилятор .NET и CLR позаботятся об этом, но все же хорошо держать этот ум в целях оптимизации производительности ваших приложений.

Дополнительная информация [здесь](http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91)

## Операции управления потоком

*   [Если](https://msdn.microsoft.com/en-us/library/5011f09h.aspx) инструкция [else](https://msdn.microsoft.com/en-us/library/5011f09h.aspx) : [Edit в .NET Fiddle](https://dotnetfiddle.net/IFVB33)
    
    ```
            int myScore = 700; 
            if (myScore == 700) 
            { 
                Console.WriteLine("I get printed on the console"); 
            } 
            else if (myScore > 10) 
            { 
                Console.WriteLine("I don't"); 
            } 
            else 
            { 
                Console.WriteLine("I also don't"); 
            }
    ```
    
*   [Оператор](https://msdn.microsoft.com/en-GB/library/06tc147t.aspx) switch: [Edit in .NET Fiddle](https://dotnetfiddle.net/lPZftO)
    
    использование системы;
    
    программа открытого класса { public static void Main () { int myNumber = 0; switch (myNumber) { // Секция переключения может иметь более одного ярлыка случая. случай 0: Дело 1: { Console.WriteLine («Случай 0 или 1»); перерыв; }
    
    ```
            // Most switch sections contain a jump statement, such as a break, goto, or return.; 
            case 2: 
                Console.WriteLine("Case 2"); 
                break; 
            // 7 - 4 in the following line evaluates to 3. 
            case 7 - 4: 
                Console.WriteLine("Case 3"); 
                break; 
            // If the value of myNumber is not 0, 1, 2, or 3 the 
            //default case is executed.* 
            default: 
                Console.WriteLine("Default case. This is also optional"); 
                break; // could also throw new Exception() instead 
        } 
     } 
    
    ```
    
    }
    
*   [For](https://msdn.microsoft.com/en-us/library/ch45axte.aspx) & [Foreach](https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx) : [Редактировать в .NET Fiddle](https://dotnetfiddle.net/edxtvq)
    
    for (int i = 0; i <10; i ++) { ЕЫпе (я); // выводит 0-9 }
    
    ЕЫпе (Environment.NewLine); для (int i = 0; i <= 10; i ++) { ЕЫпе (я); // печатает 0-10 }
    
    ЕЫпе (Environment.NewLine); для (int i = 10 - 1; i> = 0; i--) // цикл сокращения { ЕЫпе (я); // печатает 9-0 }
    
    ЕЫпе (Environment.NewLine); //за (; ; ) { // Все выражения являются необязательными. Это утверждение // создает бесконечный цикл. \* //  
    }
    
*   [В то время как](https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx) & [do-while](https://msdn.microsoft.com/en-us/library/370s1zax.aspx) : [Изменить в .NET Fiddle](https://dotnetfiddle.net/O5hOF1)
    
    // Продолжаем цикл while до тех пор, пока индекс не будет равен 10. int i = 0; тогда как (i <10) { Console.Write ("While statement"); Console.WriteLine (i); // Записываем индекс на экран. i ++; // Приращение переменной. }
    
    int number = 0; // выполняем работу сначала, пока условие не будет выполнено, т. е. заканчивается, когда число равно 4. делать { Console.WriteLine (число); // выводит значение из 0-4 номер ++; // Добавить номер в число. } while (число <= 4);