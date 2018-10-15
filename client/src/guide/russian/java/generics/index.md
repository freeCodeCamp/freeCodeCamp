---
title: Generics
localeTitle: Дженерики
---
# Дженерики

Java Generics - это способ для удобного использования коллекций и классов для конкретных типов данных, из-за необходимости возвращать данные в исходный тип данных. Это предотвращает большую головную боль в виде времени компиляции и ошибок времени выполнения.

Проще говоря, Generics позволяет вам прямо сказать, что, например, объект ArrayList содержит целые числа, поэтому при вызове метода get вам не нужно преобразовывать объекты Object и Integer. Ниже приведен пример того, как вы использовали ArrayList до Generics.

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList classNames; 
 
  public Example() { 
    classNames = new ArrayList(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return (String) classNames.get(index); 
  } 
 } 
```

Основная проблема с вышеизложенным заключается в том, что если какой-либо объект типа типа String был добавлен в ArrayList, тогда метод `getNameAtIndex(int index)` приведет к ошибке выполнения. Чтобы решить эту проблему, мы используем Generics.

Синтаксис для Generics очень прост. Ниже приведен пример создания экземпляра ArrayList.

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList<String> classNames; 
 
  public Example() { 
    classNames = new ArrayList<String>(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

Синтаксис для создания собственного Generic-класса будет следующим.

```java
import java.util.ArrayList; 
 
 public class Example <T> { 
  private ArrayList<T> classNames; 
 
  public Example() { 
    classNames = new ArrayList<T>(); 
  } 
 
  public void addName(T name) { 
    classNames.add(name); 
  } 
 
  public T getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

Обратите внимание, что внутри угловых скобок при присвоении имени классу вы можете убедиться, что тип Generic - это то, что вы хотите. Например, если вы хотите убедиться, что тип может быть прочитан как форма String, вы должны пойти `<T extends String>` .

Обратите внимание, что буква `T` является заполнителем, вы можете сделать все, что угодно, до тех пор, пока вы используете тот же самый во всем классе.