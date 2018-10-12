---
title: Files and IO
localeTitle: Файлы и ввод-вывод
---
## Файлы и ввод-вывод

Файл является именованным местоположением на диске для хранения связанной информации. Он используется для постоянного хранения данных в энергонезависимой памяти (например, жесткий диск). Поскольку оперативное запоминающее устройство (ОЗУ) является энергозависимым, которое теряет свои данные, когда компьютер выключен, мы используем файлы для последующего использования данных.

Когда мы хотим читать или писать в файл, нам нужно сначала открыть его. Когда мы закончим, его нужно закрыть, чтобы ресурсы, связанные с файлом, были освобождены.

Следовательно, в Python операция файла происходит в следующем порядке: 1) Открыть файл 2) Чтение или запись (выполнение операции) 3) Закройте файл

Python имеет множество способов ввода и вывода. Некоторые из операций вывода могут печатать текстовые, консольные журналы и даже выводить текст или файл электронной таблицы.

### Выход на экран

Python обеспечивает самый простой способ вывода вывода на экран.

```python
print "Python is a powerful language.","It is easy to learn." 
```

Вывод:
```
Python is a powerful language.It is easy to learn. 
```

### Вход от пользователя

Существует два способа ввода данных от пользователя.

raw\_input (\[подсказка\])

Используется для чтения одной строки со стандартного ввода и возвращает ее как строку

```python
str = raw_input("Enter your name: ") 
 print "Welcome ", str 
```

Вывод:
```
Enter your name: John Doe 
 Welcome John Doe 
```

вход (приглашение)

Аналогичная функциональность для raw\_input (), но предполагает, что вход является допустимым выражением Python

```python
str = input("Enter input: ") 
 print "Input: ", str 
```

Вывод:
```
Enter input: [x*5 for x in range(2,10,2)] 
 Input: [10,20,30,40] 
```

### Взаимодействие с файлами в Python

Используя Python, файлы можно легко открыть, прочитать, записать и закрыть. Имеющиеся функции:

1.  `open()`
2.  `read()`
3.  `write()`
4.  `close()`

Пример:

```python
file1 = open("foo.txt", "r+")     # Opens the file with read permission. 
 file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file. 
 data = file1.read(15)     # Reads first 15 characters in the file. 
 print "First 15 characters are:\n", data     # Prints output 
 file1.close()     # Closes the opened file. 
```

Вывод:
```
First 15 characters are: 
 Python is a pow 
```

#### Открытие файлов

Метод python open () может использоваться для возврата объекта файла. Он чаще всего используется с двумя аргументами, которые являются именем файла и режимом доступа. Режим доступа используется для описания способа доступа или использования файла.

Наиболее часто используемые режимы - это «w», который предназначен для записи в файл и «r», который используется для чтения файла, в то время как «r +» используется для чтения и записи файла. 'a' - это режим, который используется для добавления текста в файл. Аргумент mode также является необязательным и будет считаться «r», если он опускается.

После завершения операции ввода и вывода файл должен быть закрыт, чтобы освободить все ресурсы.

Пример кода для открытия текстового файла:

\`\` \`python file = open ('hello\_world.txt', 'w') file.write ('Hello World!') file.close ()
```
##### Using with 
 An alternative to using the `open()` function in standalone is to make use of the `with` statement to open a file. This is considered best practice as it allows the Python framework to manage the context of opening the file, and will autmoatically perform any required resource cleanup. 
 
 This is adventageous in the fact that it takes the onus off the programmer to close every file that is opened, and that the file will still be closed even if an exception was encountered during an IO operation. 
 
 When using the `with` statement is important to note that access to the file will only available within the scope of the `with` block. 
 
 To open a file using the `with` statement the `with` keyword is entered, followed by the call to `open(file)`. Following this the variable used as a handle to the open file is declared after the `as` keyword. Once the programs execution returns from this block, the file will be closed automatically. 
 
 Sample code to open a text file using the `with` statement: 
```

с открытым ('hello\_world.txt', 'w') как f: f.write ('Hello World!') \`\` \`

#### Дополнительная информация:

[Документация Python - IO](https://docs.python.org/2/tutorial/inputoutput.html) [Автоматизация бурового инструмента](https://automatetheboringstuff.com/chapter8/) [Точки обучения - Python IO](https://www.tutorialspoint.com/python/python_files_io.htm) [8 PEP 343: оператор «с»](https://docs.python.org/2.5/whatsnew/pep-343.html)