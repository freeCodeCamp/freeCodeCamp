---
title: Exceptions
localeTitle: Исключения
---
# Исключения

Исключением является непредвиденная ошибка, возникающая во время работы программы, например попытка получить доступ к файлу, который не существует. Он остановит программу, если не будет обработан.

## пример

Если мы попытаемся прочитать текст файла, который не существует:
```
using System.IO; 
 
 string content = File.ReadAllText(@"C:\DoesNotExist.txt"); 
```

Будет `FileNotFoundException` .

Некоторые другие общие исключения:

*   `IndexOutofRangeException` : Попытка получить доступ к массиву с недопустимым индексом.
*   `NullReferenceException` : Попытка использовать неназначенную ссылочную переменную.
*   `DivideByZeroException` : Попытка деления на 0.

## Лучшие практики

### Используйте try / catch / finally Blocks
```
try 
 { 
   var client = new WebClient(); 
   var resultData = client.DownloadString("http://github.com"); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions 
 } 
 finally 
 { 
   //this code is always executed, does not matter if an exception is thrown or not 
 } 
```

### Обращение с возможными исключениями с условиями

Вместо
```
try 
 { 
   conn.Close(); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions. 
 } 
```

Попробуй это
```
if (conn.State != ConnectionState.Closed) 
 { 
    conn.Close(); 
 } 

```