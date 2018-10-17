---
title: Try Catch Finally
localeTitle: Попробуйте Catch Наконец
---
# Попробуйте Catch Наконец

Блок Try-Catch-finally используется, чтобы избежать необработанных исключений, нарушающих ваше приложение. Когда ваш код `throws` исключение, которое находится между секцией `try` оно будет зажато в `catch` части инструкции, где вы можете обрабатывать ее по своему усмотрению. Оператор `finally` всегда запускается в конце и обычно используется для очистки неуправляемых ресурсов. Вам не всегда нужно иметь три блока, ниже приведены допустимые параметры.

*   Try-Catch-Наконец
*   Попробуй поймать
*   Примерка Наконец

## Синтаксис

```csharp
try 
 { 
   // Code which could potentially throw an exception 
   var parsedValue = Int32.Parse("abcde"); 
 } 
 catch(Exception e) 
 { 
    // Code to handle the exception 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 finally 
 { 
    // Code which will always run no matter what. 
    Console.WriteLine("Try-Catch block has finished execution"); 
 } 
```

В приведенном выше примере мы пытаемся преобразовать 'abcde' в числовое значение. Эта строка генерирует исключение, потому что оно не может быть успешно преобразовано в число. Вызов будет пойман в блоке catch, и сообщение об исключении и другие данные будут сохранены в переменной, назначенной в блоке catch (буква «e» в приведенном выше примере). После того, как все это будет выполнено, раздел «finally» будет выполнен, чтобы закончить его.

## Попробуйте блок

Блок try должен быть помещен вокруг кода, который может вести себя обычным образом и вызывать `Exception` и разорвать ваше приложение. Имея блок try, вы защищаете себя от фатального сбоя приложения. Важно отметить, как только ваше приложение имеет ошибку и генерируется исключение, остальная часть кода в блоке `Try` **не** будет выполнена.

Блок try имеет свою собственную область методов, поэтому любые переменные, объявленные внутри блока try, не будут доступны вне блока try.

```csharp
try 
 { 
    // Read user input from the console. 
    var userInput = Console.ReadLine(); 
 } 
 catch(Exception e) 
 { 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 
 //Outside the Try block 
 var parsedUserInput = Int32.Parse(userInput);  // Not correct 
```

Приведенное выше даст вам ошибку времени компиляции, так как значение userInput недоступно. Если вам нужен доступ к переменной вне блока try-catch, вам нужно будет объявить переменную перед блоком try.

```csharp
var userInput = ""; 
 try 
 { 
    // Read user input from the console. 
    userInput = Console.ReadLine(); 
 } 
 catch(Exception e) 
 { 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 
 //Outside the Try block 
 var parsedUserInput = Int32.Parse(userInput);  // Correct 
```

## Блок уловов

В этом блоке указывается, какой тип `Exception` вы хотите поймать. Если вы хотите уловить ВСЕ возможные исключения, вы можете использовать базовый класс `Exception` . Если вы хотите только поймать определенный тип исключения, вы можете указать это вместо этого. Некоторыми примерами других типов исключений являются `ArgumentException` , `OutOfMemoryException` и `FormatException` .

```csharp
try 
 { 
   var parsedValue = Int32.Parse("abcde"); 
 } 
 // Only FormatExceptions will be caught in this catch block. 
 catch(FormatException exceptionVariable) 
 { 
    Console.WriteLine(exceptionVariable.Message); 
 } 
```

Переменная, объявленная после типа исключения, будет содержать все данные исключения и может использоваться в блоке `Catch` .

## Наконец, блок

Блок finally **всегда** запускается в конце после блоков `Try` и `Catch` . Этот раздел обычно используется, когда что-то **должно** происходить в конце, независимо от того, было ли исключено исключение. Например, скажем, нам нужна переменная, которая всегда должна быть повторно инициализирована обратно до определенного числа после того, как она будет манипулировать все время.

```csharp
int initalValue = 12; 
 try 
 { 
    // Code which manipulates 'initialValue' 
 } 
 finally 
 { 
    Console.WriteLine("re-initalising value back to 12"); 
    initialValue = 12; 
 } 

```