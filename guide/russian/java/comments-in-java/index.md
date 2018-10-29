---
title: Comments in Java
localeTitle: Комментарии в Java
---
## Комментарии в Java

Комментарии в java похожи на записи в реальной жизни, которые используются для отображения некоторой информации, которую другие программисты или разработчики могут читать и понимать.

Хорошая практика - добавлять комментарии к вашему коду, особенно при работе с командой или в компании. Это помогает будущим разработчикам или товарищам по команде узнать, что происходит более легко, когда они смотрят на ваш код. Комментарии делают ваш код более аккуратным и организованным.

Комментарии Java не выполняются компилятором и интерпретатором.

### Типы комментариев Java

#### 1\. Одиночный комментарий

Чтобы создать однострочный комментарий просто добавить два `//` слэши перед текстом.

```java
// This is how single line comment looks like 
```

#### 2\. Комментарий Multi Line

Чтобы создать многострочный комментарий, заверните строки между `/*` линиями здесь `*/`

```java
public class MyFirstJava { 
    public static void main(String[] args) { 
    /* This Java Code 
       Prints out "Hello world" 
       and you are looking at a multi line comment 
    */ 
        System.out.println("Hello World"); 
    } 
 } 
```

#### 3\. Комментарий к документации

Комментарий к документации используется инструментом Javadoc для создания документации для кода. Документация Комментарий используется разработчиками для документирования кода, например, что делает класс или что делает метод. Это используется инструментом javadoc, который будет компилировать предварительно отформатированный набор html-файлов, содержащих всю информацию, доступную в комментарии.

```java
/** 
 * The Following Java program displays a random between 0 - 50 
 * Most Developer dont document simple program like this 
 * 
 * @author      Quincy Larson 
 * @version     1.0 
 */ 
 
 public class RandomNumbers{ 
    public static void main(String[] args) { 
        int random = (int)(Math.random() * 50 + 1); 
        System.out.println("Hello World"); 
    } 
 } 
```

#### Дополнительная информация:

*   [Ресурсы Java](http://guide.freecodecamp.org/java/resources/)
    
*   [Скомпилированный пример Javadoc](https://docs.oracle.com/javase/8/docs/api/)