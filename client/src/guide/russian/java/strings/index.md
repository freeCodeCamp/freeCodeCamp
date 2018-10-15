---
title: Strings
localeTitle: Струны
---
# Струны

Строки - это последовательности символов. В Java `String` является `Object` . Строки не следует путать с символом `char` как символы имеют буквально значение 1, а не последовательность символов. Вы все равно можете использовать 1 значение в пределах String, однако предпочтительно использовать `char` когда вы проверяете 1 символ.

```java
String course = "FCC"; 
 System.out.println(course instanceof Object); 
```

Вывод:
```
true 
```

Вы можете создать объект String следующими способами:

1.  `String str = "I am a String"; //as a String literal`
2.  `String str = "I am a " + "String"; //as a constant expression`
3.  `String str = new String("I am a String"); //as a String Object using the constructor`

Возможно, вы думаете: в чем разница между тремя?

Ну, используя `new` ключевое слово гарантирует, что будет создан новый объект `String` , и новая ячейка памяти будет выделена в `Heap` памяти [(нажмите здесь, чтобы узнать больше)](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html) . строка литералы и постоянные выражения String кэшируются во время компиляции. Компилятор помещает их в пул строк String для предотвращения дублирования и улучшить потребление памяти. Распределение объектов дорогое, и этот трюк увеличивает производительность при создании строк. Если вы используете тот же самый буквальный, JVM использует тот же объект. Использование такого конструктора, как и выше, почти всегда является худшим выбором.

В этом фрагменте кода сколько объектов String создано?

```java
String str = "This is a string"; 
 String str2 = "This is a string"; 
 String str3 = new String("This is a string"); 
```

Ответ: 2 Создаются объекты String. `str` и `str2` оба относятся к одному и тому же объекту. `str3` имеет тот же контент, но с использованием `new` принудительных создание нового, отличного объекта.

Когда вы создаете строковый литерал, JVM внутренне проверяет, что называется `String pool` , чтобы увидеть, может ли он найти аналогичный (контентный) Строковый объект. Если он найдет его, он вернет ту же ссылку. В противном случае он просто продолжит работу и создаст новый объект String в пуле, чтобы такая же проверка может быть выполнена в будущем.

Вы можете проверить это, используя ласточку, быстрое сравнение объектов `==` и реализованное `equals()` .

```java
System.out.println(str == str2); // This prints 'true' 
 System.out.println(str == str3); // This prints 'false' 
 System.out.println(str.equals(str3)); // This prints 'true' 
```

Вот еще один пример того, как создать строку в Java с помощью разных методов:

```java
public class StringExample{ 
 
   public static void main(String args[]) { 
      String s1 = "java";  // creating string by Java string literal 
      char ch[] = {'s','t','r','i','n','g','s'}; 
      String s2 = new String(ch);  // converting char array to string 
      String s3 = new String("example");  // creating Java string by new keyword 
      System.out.println(s1); 
      System.out.println(s2); 
      System.out.println(s3); 
   } 
 } 
```

#### Сравнение строк

Если вы хотите сравнить значение двух переменных String, вы не можете использовать ==. Это связано с тем, что это будет сравнивать ссылки переменных а не значения, которые связаны с ними. Чтобы сравнить сохраненные значения строк, вы используете метод равно.

```java
boolean equals(Object obj) 
```

Он возвращает true, если два объекта равны и false в противном случае.

```java
String str = "Hello world"; 
 String str2 = "Hello world"; 
 
 System.out.println(str == str2); // This prints false 
 System.out.println(str.equals(str2); // This prints true 
```

Первое сравнение ложно, потому что «==» рассматривает ссылки, и они не совпадают.

Второе сравнение верно, потому что переменные сохраняют одни и те же значения. В этом случае «Hello world».

У нас есть несколько встроенных методов в String. Ниже приведен пример метода String Length ().

```java
public class StringDemo { 
 
   public static void main(String args[]) { 
      String palindrome = "Dot saw I was Tod"; 
      int len = palindrome.length(); 
      System.out.println( "String Length is : " + len ); 
   } 
 } 
```

Это приведет к: - `String Length is : 17`

**Ответ: 2** Создаются объекты String. **Заметки**

1.  В методах String используются индексы с нулевым значением, за исключением второго аргумента `substring()` .
2.  Класс String является окончательным - его методы нельзя переопределить.
3.  Когда литерал String найден JVM, он добавляется в пул строковых литералов.
4.  Класс String имеет имя метода `length()` , а массивы имеют длину имени атрибута.
5.  В java строковые объекты неизменяемы. Неизменяемый просто означает неизменяемость или неизменяемость. После создания строкового объекта его данные или состояние не могут быть изменены, но создается новый строковый объект.

Длина строки

«Длина» строки - это просто количество символов в ней. Итак, «hi» - длина 2, а «Hello» - длина 5. Метод length () в строке возвращает свою длину, например:

```java
String a = "Hello"; 
 int len = a.length();  // len is 5 
```

#### Другие методы сравнения, которые также могут использоваться в String:

1.  equalsIgnoreCase (): - сравнивает строку без учета чувствительности к регистру.

```java
String a = "HELLO"; 
 String b = "hello"; 
 System.out.println(a.equalsIgnoreCase(b));   // It will print true 
```

2.  compareTo: - сравнивает значение лексикографически и возвращает целое число.

```java
String a = "Sam"; 
 String b = "Sam"; 
 String c = "Ram"; 
 System.out.println(a.compareTo(b));       // 0 
 System.out.prinltn(a.compareTo(c));       // 1 since (a>b) 
 System.out.println(c.compareTo(a));       // -1 since (c<a) 

```