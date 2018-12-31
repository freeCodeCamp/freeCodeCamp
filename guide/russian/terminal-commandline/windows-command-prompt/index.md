---
title: Windows Command Prompt
localeTitle: Командная строка Windows
---# Использование командной строки в Windows

Windows, MacOS и Linux имеют интерфейсы командной строки. Командная строка Windows по умолчанию - это командная строка. Командная строка позволяет пользователям использовать свой компьютер без указания и щелчка мышью. Командная строка представляет собой черный экран, на котором пользователь вводит команды для использования своего компьютера. Те же задачи, которые могут выполняться путем указания и щелчка мышью, также можно выполнить с помощью командной строки. Разница в том, что многие задачи, такие как создание папок и удаление файлов, можно выполнить быстрее в командной строке. Кроме того, он позволяет пользователям настраивать свой компьютер и запускать программы, которые они иначе не могли бы сделать, указав и нажав.

## Открытие командной строки

Чтобы получить доступ к командной строке, нажмите окно меню запуска на панели инструментов рабочего стола (вы также можете нажать кнопку окна на клавиатуре) и типа `cmd` и нажмите `enter` . Появится приглашение командной строки, на нем будет отображаться следующий текст: \`\` \` C: \\ Users \\ имя\_пользователя>
```
## Navigating Directories (Moving through folders) 
 `C:\Users\YourUserName` is called your current working directory (directory is another way to say folder). It is like a street address that tells you where you are on your computer. The current working directory can be a guide as you navigate through your computer. On the right of the `>` we can type `cd`, which stands for Change Directory, and the name of a directory that you want to navigate to. In this case we will type `Documents`. Enter `cd Documents` and your current working directory should look like the following: 
```

C: \\ Users \\ имя\_пользователя \\ Documents>
```
To go back one directory type and enter `cd..`. Your current working directory should return to this: 
```

C: \\ Users \\ имя\_пользователя>
```
With the `cd` and `cd ..` commands you can move back and forth through directories. This might seem very basic at first but as you learn more commands the command prompt will become a very useful and efficient tool. 
 
 ## Here is a list of common commands: 
 | Command | Description  | 
 |---------|--------------| 
 |`help`   |Lists commands that can be used| 
 |  `dir`  |Lists the current directories contents| 
 |`dir /a` |Shows hidden files| 
 | `mkdir` |Creates a new directory| 
 | `rmdir` |Deletes a directory (if empty)| 
 | `rmdir /s`|Deletes a folder and its contents 
 | `cls`  |Clears the command prompt screen 
 | `exit`|Closes the command prompt 
 
 ## Usage Examples: 
 #### Making a Directory 
```

имя MkDir _каталога_ вы _хотите_ to\_make
```
#### Getting Info on a Command 
```

your\_command /?
```
#### Deleting a File and Contents 
```

RM / сек имя директории , которую _вы_ хотите удалить \`\` \`

## Полезные советы:

*   Команда `Ipconfig` показывает IP-адрес вашего компьютера
*   Если вы наберете часть имени каталога и нажмите клавишу `tab` командная строка автоматически закроет ее, и если вы нажмете клавишу `tab` она будет циклически перемещаться по каталогам, начинающимся с одной и той же буквы
*   Вы можете использовать другие оболочки или инструменты, такие как git bash или cmder, чтобы добавить в командную строку дополнительные команды и функции
*   Некоторые задачи требуют, чтобы вы запускали командную строку в качестве администратора, нажав кнопку Windows, и набрав `cmd admin` и `enter` клавишу `enter`
*   Если вы знаете, что путь к файлу или директории может набирать `cd PATH_TO_YOUR_DIRECTORY` а не менять каталоги несколько раз, чтобы попасть в каталог или файл
*   Когда вы нажмете клавишу со стрелкой вверх, появится ваша ранее введенная команда, и если вы нажмете ее несколько раз, она будет циклически выполнять все ваши ранее введенные команды