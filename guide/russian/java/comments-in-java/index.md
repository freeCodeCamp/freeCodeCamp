---
title: Comments in Java
localeTitle: Комментарии в Java
---
## Комментарии в Java

Комментарии в java похожи на записи в реальной жизни, которые используются для отображения некоторой информации, c помощью которй программисты лучше понимают свой или чужой код.

Хорошая практика - добавлять комментарии к вашему коду, особенно при работе с командой или в компании. Это помогает будущим разработчикам или товарищам по команде легче понять смысл, когда они смотрят на ваш код. Комментарии делают ваш код более аккуратным и организованным.

Комментарии Java игнорируются компилятором и интерпретатором.

### Типы комментариев Java

#### 1\. Однострочный комментарий

Чтобы создать однострочный комментарий просто добавить два `//` слэша перед текстом.

```java
// This is how single line comment looks like 
```

#### 2\. Многостросный комментарий

Чтобы создать многострочный комментарий, заверните строки между `/*` и `*/`

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

Комментарий к документации используется инструментом Javadoc для создания документации для кода. Это используется разработчиками для документирования кода, например, что делает класс или что делает метод. Это делается инструментом javadoc, который нужно добавтить в предварительно отформатированный набор html-файлов, содержащих всю информацию, доступную в комментарии.

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
