---
title: Java
localeTitle: Ява
---
**Что такое Java?**

[Java](https://www.oracle.com/java/index.html) - это язык программирования, разработанный [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) в 1995 году, который позже получил [Oracle](http://www.oracle.com/index.html) . Теперь это полноценная платформа с множеством стандартных API-интерфейсов, API-интерфейсов с открытым исходным кодом, инструментов, огромного сообщества разработчиков и используется для создания наиболее надежных корпоративных решений как крупными, так и небольшими компаниями. Разработка приложений для [Android](https://www.android.com/) полностью реализована с помощью Java и его экосистемы. Чтобы узнать больше о Java, прочитайте [это](https://java.com/en/download/faq/whatis_java.xml) и [это](http://tutorials.jenkov.com/java/what-is-java.html) .

## Версия

Последняя версия - это [Java 11](http://www.oracle.com/technetwork/java/javase/overview) , выпущенная в 2018 году с [различными улучшениями по](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) сравнению с предыдущей версией Java 10. Но для всех целей и задач мы будем использовать Java 8 в этой вики для всех обучающих программ.

Java также разделен на несколько «Изданий»:

*   [SE](http://www.oracle.com/technetwork/java/javase/overview/index.html) - Standard Edition - для настольных и автономных серверных приложений
*   [EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) - Enterprise Edition - для разработки и выполнения компонентов Java, которые внедряются в Java-сервер
*   [ME](http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html) - Micro Edition - для разработки и выполнения приложений Java на мобильных телефонах и встроенных устройствах

## Установка: JDK или JRE?

Загрузите последние Java-файлы с [официального сайта](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) . Здесь вы можете столкнуться с вопросом, какой из них скачать, JDK или JRE? JRE означает Java Runtime Environment, которая является платформой, зависящей от Java Virtual Machine, для запуска Java-кодов, а JDK - Java Development Kit, который состоит из большинства инструментов разработки, а самое главное - `javac` компилятора, а также JRE. Таким образом, для обычного пользователя JRE будет достаточно, но поскольку мы будем разрабатывать Java, мы будем загружать JDK.

## Инструкции по установке на платформе

### Windows

*   Загрузите соответствующий [.msi-](https://en.wikipedia.org/wiki/Windows_Installer) файл (x86 / i586 для 32 бит, x64 для 64 бит)
*   Запустите файл .msi. Это сам извлекающий исполняемый файл, который установит Java в вашей системе!

### Linux

*   Загрузите соответствующий [tar.gz-](http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/) файл для вашей системы и установите:

`bash $ tar zxvf jdk-8uversion-linux-x64.tar.gz`

*   [RPM-платформы Linux](https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based) загружают соответствующий файл [.rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager) и устанавливают:

`bash $ rpm -ivh jdk-8uversion-linux-x64.rpm`

*   [Archlinux] Пользователи Archlinux и основанных на нём диструбитивов могут установить последний jdk от Oracle через AUR:
https://aur.archlinux.org/packages/jdk/

`yaourt -S jdk`

*   Пользователи имеют возможность установить версию с открытым исходным кодом Java, OpenJDK или Oracle JDK. Хотя OpenJDK находится в активной разработке и синхронизируется с Oracle JDK, они просто отличаются [лицензированием](http://openjdk.java.net/faq/) . Однако немногие разработчики жалуются на стабильность Open JDK. Инструкции для **Ubuntu** :

Открытая установка JDK:  
`bash sudo apt-get install openjdk-8-jdk`

Установка Oracle JDK:  
`bash sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer`

### макинтош

*   Или загрузите исполняемый файл Mac OSX .dmg из Oracle Downloads
*   Или используйте [Homebrew](http://brew.sh/) для [установки](http://stackoverflow.com/a/28635465/2861269) :

`bash brew tap caskroom/cask brew install brew-cask brew cask install java`

### Проверить установку

Убедитесь, что Java правильно установлена ​​в вашей системе, открыв командную строку (Windows) / Windows Powershell / Terminal (Mac OS и \* Unix) и проверив версии Java runtime и компилятора:
```
$ java -version 
 java version "1.8.0_66" 
 Java(TM) SE Runtime Environment (build 1.8.0_66-b17) 
 Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode) 
 
 $ javac -version 
 javac 1.8.0_66 
```

**Совет** . Если вы получаете сообщение об ошибке «Команда не найдена» ни на `java` ни на `javac` ни на то и другое, не паникуйте, просто ваша система PATH неправильно настроена. Для Windows см. [Этот ответ StackOverflow](http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command) или [эту статью](http://javaandme.com/) о том, как это сделать. Также есть руководства для [Ubuntu](http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu) и [Mac](http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/) . Если вы все еще не можете понять это, не волнуйтесь, просто спросите нас в нашей [комнате Гиттера](https://gitter.im/FreeCodeCamp/java) !

## JVM

Хорошо, так как мы закончили установку, давайте начнем сначала понимать nitty gritty экосистемы Java. Java - это [интерпретируемый и скомпилированный](http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language) язык, то есть код, который мы пишем, компилируется в байт-код и интерпретируется для запуска. Мы пишем код в .java-файлах, Java компилирует их в [байт-коды,](https://en.wikipedia.org/wiki/Java_bytecode) которые запускаются на виртуальной машине Java или JVM для выполнения. Эти байт-коды обычно имеют расширение .class.

Java - довольно безопасный язык, так как он не позволяет вашей программе работать непосредственно на машине. Вместо этого ваша программа запускается на виртуальной машине под названием JVM. Эта виртуальная машина предоставляет несколько API для низкоуровневых взаимодействий с машиной, которые вы можете сделать, но кроме этого вы не можете играть с машинными инструкциями явно. Это добавляет огромный бонус к безопасности.

Кроме того, как только ваш байт-код будет скомпилирован, он может работать на любой виртуальной машине Java. Эта виртуальная машина зависит от машины, то есть она имеет разные реализации для Windows, Linux и Mac. Но ваша программа гарантирована для работы в любой системе благодаря этой виртуальной машине. Эта философия называется [«Write Once, Run Anywhere»](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) .

## Привет, мир!

Давайте напишем образец приложения Hello World. Откройте любой редактор / IDE по выбору и создайте файл `HelloWorld.java` .
```
public class HelloWorld { 
 
    public static void main(String[] args) { 
        // Prints "Hello, World" to the terminal window. 
        System.out.println("Hello, World"); 
    } 
 
 } 
```

**NB** Имейте в виду, что имя файла Java должно быть **точно таким же именем открытого класса** для компиляции!

Теперь откройте терминал / Командная строка. Измените текущий каталог в терминале / Командная строка в каталог, в котором находится ваш файл. И скомпилируйте файл:
```
$ javac HelloWorld.java 
```

Теперь запустите файл с помощью команды `java` !
```
$ java HelloWorld 
 Hello, World 
```

Congrats! Ваша первая Java-программа успешно запущена. Здесь мы просто печатаем строку, передающую ее в API `System.out.println` . Мы рассмотрим все концепции в коде, но вы можете более [внимательно ознакомиться](https://docs.oracle.com/javase/tutorial/getStarted/application/) ! Если у вас есть какие-либо сомнения или вам нужна дополнительная помощь, не стесняйтесь обращаться к нам в любое время в нашем [Gitter Chatroom](https://gitter.im/FreeCodeCamp/java) !

## Документация

Java сильно [документирована](https://docs.oracle.com/javase/8/docs/) , поскольку она поддерживает огромное количество API. Если вы используете какую-либо большую среду IDE, такую ​​как Eclipse или IntelliJ IDEA, вы можете найти документацию Java, включенную внутри.

Кроме того, здесь приведен список бесплатных IDE для Java-кодирования:

*   [NetBeans](https://netbeans.org/)
*   [Затмение](https://eclipse.org/)
*   [IntelliJ IDEA](https://www.jetbrains.com/idea/features/)
*   [Android Studio](https://developer.android.com/studio/index.html)
*   [BlueJ](https://www.bluej.org/)
*   [jEdit](http://www.jedit.org/)
*   [Oracle JDeveloper](http://www.oracle.com/technetwork/developer-tools/jdev/overview/index-094652.html)
