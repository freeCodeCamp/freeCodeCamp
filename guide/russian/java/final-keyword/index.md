---
title: Final
localeTitle: окончательный
---
## окончательный

Вы используете ключевое слово `final` чтобы пометить константу переменной, чтобы ее можно было назначить только один раз. Таким образом, вы должны инициализировать конечную переменную со значением. Если его не инициализировать (когда объявлено, внутри Constructor или внутри статических блоков), произойдет ошибка времени компиляции.

**_Пример:_**

```java
class MyClass { 
  public static final double PI = 3.14; 
  public static void main(String[] args){ 
    System.out.println(PI); 
  } 
 } 
```

PI теперь является константой. Любая попытка присвоить ему значение вызовет ошибку.

* * *

Если вы сделаете какой-либо метод окончательным, вы не сможете его переопределить.

```java
class Bike{ 
  final void run(){System.out.println("running");} 
 } 
 
 class Honda extends Bike{ 
   void run(){System.out.println("running safely with 100kmph");} 
 
   public static void main(String args[]){ 
   Honda honda= new Honda(); 
   honda.run(); 
   } 
 } 
```

Выход будет - Выход: ошибка времени компиляции

* * *

Если вы сделаете какой-либо класс окончательным, вы не сможете его продлить.

```java
final class Bike{} 
 
 class Honda1 extends Bike{ 
  void run(){System.out.println("running safely with 100kmph");} 
 
  public static void main(String args[]){ 
  Honda1 honda= new Honda(); 
  honda.run(); 
  } 
 } 
```

Выход будет - Выход: ошибка времени компиляции