---
title: Kotlin
localeTitle: Котлин
---
**Что такое Котлин?**


[Kotlin](https://kotlinlang.org/) - это язык программирования, разработанный компанией [Jetbrains](https://www.jetbrains.com) , известной своими IDE IntelliJ, Pycharm и др.

Он служит заменой Java и работает на JVM. Он находится в разработке около 6 лет, и достиг версии 1.0 всего год назад.

Kotlin настолько понравился разработчикам, что Google анонсировала его как основной язык разработки приложений под Android [Google I / O 2017](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/) .


## Версия

На момент написания этой статьи последняя стабильная версия Kotlin - [версия 1.2.71](https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/)

## Установка


Прежде чем приступать к установке Kotlin, необходимо убедиться, что вы настроили **JDK (Java Development Kit)**.

Если на вашем компьютере не установлен JDK, перейдите в раздел [по этой ссылке](https://guide.freecodecamp.org/java), чтобы узнать, как его установить и настроить. Kotlin работает с **JDK 1.6+**, поэтому убедитесь, что вы установили нужную версию.


**IntelliJ IDEA** - самый быстрый способ заставить Kotlin работать на вашей машине. Это рекомендуемая среда разработки для Kotlin благодаря большому количеству инструментов, предоставляемых Jetbrains. Вы можете бесплатно скачать его [Community Edition](http://www.jetbrains.com/idea/download/index.html) IntelliJ с сайта [JetBrains](https://www.jetbrains.com) .


После установки IntelliJ можно создать свой первый Kotlin-проект дополнительных настроек для этого не требуется.

В меню **Файл** выберете **новый проект**. В открывшемся окне выберете слева пунк **Java**. Отметьте пункт **Kotlin (Java)** как показано на скриншоте ниже, и нажмите кнопку **Далее**.


![новый экран проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

Дайте проекту название и нажмите «Готово».

![название проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

Теперь вы попадете в окно редактора, где слева вы увидите файлы вашего проекта.

![структура проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)


Теперь, создайте новый файл Kotlin в папке **src** и назовите его **helloworld** (или придумайте что-нибудь, более вам подходящее).

![структура проекта](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

После того, как вы создали файл, скопируйте в него следующую программу. Не волнуйтесь, если вы не понимаете, что она делает, мы рассмотрим ее подробно несколько позже.

``` fun main (args: Array ) { println ("Hello World!") }```

![окно программы](https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png) 
 
 Теперь вы можете ее запустить нажав пиктограмму Kotlin расположенную левее вставленной строчки кода. 

 
![hello world](https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png) 
 

 Если все пойдет хорошо, то вы увидите сообщение "Hello World!" в окне **Run** расположенной внизу главного окна. 

 
![run window](https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png) 
 
 
 
 * ## Eclipse 
 
В то время как IntelliJ является рекомендуемой IDE для разработки на Kotlin, это определенно не единственный вариант. **Eclipse** является еще одной популярной IDE среди Java-разработчиков, и Kotlin также хорошо поддерживается Eclipse.
 
После настройки **JDK** в вашей системе следуйте инструкциям ниже.
 
 Загрузите <a href='https://www.eclipse.org/downloads/'>**Eclipse Neon** </a>для вашей операционной системы. После его успешной установки загрузите **Kotlin Plugin** для Eclipse из <a href='http://marketplace.eclipse.org/content/kotlin-plugin-eclipse'>**Eclipse Marketplace**</a>. 
 
 ![eclipse marketplace](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png) 
 
  ***Замечание: Вы можете сделать тоже самое, перейдя в Help -> Eclipse Marketplace, и затем найдя Kotlin Plugin***
 
 Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample. 
 
 Create a new Kotlin Project by clicking on File -> New -> Kotlin Project 
 
 ![new kotlin project](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png) 
 
 An empty project will be created with a directory structure quite similar to a Java project. It would look something like this 
 
 ![empty kotlin project](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png) 
 
 Go ahead and create a new Kotlin file in the **src** folder 
 
 Once that is done go ahead and type out the following code. Don't worry if it does not make sense right now, it will be covered later in the guide. 
``` fun main (args: Array ) { println ("Hello World!") } ```
![eclipse hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png) 
 
 Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on ***Run As -> Kotlin Application*** 
 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png) 
 
 If all goes well, the console window would open to show you the output. 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png) 
 
  * ## Использование компилятора Kotlin из командной строки 
-----

 Если вы предпочитаете обходится без IDE и делать все вручную, вы пожете использовать отдельный компилятор Kotlin. 
 
 ### Загрузка компилятора 
 
 С каждым релизом Kotlin, Jetbrains поставляет компилятор, который можно скачать [с сайта GitHub](https://github.com/JetBrains/kotlin/releases). Версия 1.1.51 была самой свежей на момент написания данного текста. 

 **Установка вручную** 
 
После того как, вы скачали архив с компилятором, его нужно распаковать и запустить стандартную процедуру установки. Добавьте директорию **bin** к системной переменной PATH на необязательном шаге установки. Она (директория) содержит набор скриптов необходимых компилятору, чтобы компилировать и запускать программы Kotlin под Windows, Linux или macOS. 

 
 **Установка при помощи Homebrew (MacOS)** 
 
Вы можете установить компилятор Kotlin на macOS при помощи [Homebrew](http://brew.sh) - менеджера пакетов macOS. Запустите терминал и выполните следующие команды: 

```
$ brew update
$ brew install kotlin
```

**Installation via SDKMAN!** 
 
 Другой простой способ усатновить компилятор Kotlin на macOS, Linux, Cygwin, FreeBSD или Solaris - это использовать [SDKMAN!](http://sdkman.io/). Выполните в терминале следующую команду, для скачивания SDKMAN! : 

``` $ curl -s https://get.sdkman.io | bash ```

После этого запустите с его помощью установку Kotlin:


**Установка в Линуксе** 
 
kotlin компилятор есть также практически во всех пакетных менеджерах дистрибутивов Линукс.
Например Archlinux:
`sudo pacman -S kotlin`

Как и все предыдущие параметры установки, было бы неплохо протестировать запуск установки.


**Протестируем установку**
Теперь необходимо убедиться, что компилятор установился и настроен корректно. Откройте текстовый редактор и напишите простую программу Kotlin:
```
fun main(args: Array<String>) { 
    println("Hello, World!") 
 } 
```

Сохраните этот файл с расширением **.kt** . Теперь все готово, чтобы ее скомпилировать и посмотреть результ. Для этого выполните следующую команду:

``` $ kotlinc hello.kt -include-runtime -d hello.jar ```

параметр `-d` сообщает компилятору, файл с каким именем, и какого формата вы хотите получить. Параметр `-include-runtime` делает полученный .jar-файл самодостаточным и выполнимым, включая библиотеку времени исполнения Kotlin.

Если ошибок компиляции не было, можно запустить приложение, используя следующую команду:

`$ java -jar hello.jar`

Если все пойдет хорошо, вы должны увидеть **Hello World!** на экране терминала
```
$ java -jar hello.jar 
 Hello, World! 
```

Поздравляем, вы успешно установили компилятор Kotlin и среду разработки в вашей системе. На сайте [Try Kotlin](https://try.kotlinlang.org/) можной практиковаться в выполнении различных заданий на Kotlin.

## Документация


У Kotlin подробная и хорошо структурированная документация. Даже если вы новичок в программировании, вам будет удобно. Jetbrains делают довольно много работы, чтобы все было хорошо структурировано. Посмотреть официальную документацию можно по [этой ссылке](https://kotlinlang.org/docs/reference/) .

