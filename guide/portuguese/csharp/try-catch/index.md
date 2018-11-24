---
title: Try Catch Finally
localeTitle: Tente pegar Finalmente
---
# Tente pegar Finalmente

Um bloco Try-Catch-Finally é usado para evitar exceções não tratadas que quebram seu aplicativo. Quando seu código `throws` uma exceção que fica entre a seção `try` , ele será capturado na parte `catch` da instrução, onde você pode manipulá-lo como desejar. A instrução `finally` é sempre executada no final e geralmente é usada para limpar recursos não gerenciados. Você nem sempre precisa ter os três blocos presentes, abaixo estão as opções válidas.

*   Try-Catch-Finally
*   Try-Catch
*   Tente-finalmente

## Sintaxe

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

No exemplo acima, estamos tentando converter 'abcde' em um valor numérico. Esta linha lançará uma exceção porque não pode ser convertida para um número com sucesso. A execução será capturada no bloco catch e a mensagem de exceção e outros detalhes serão armazenados na variável designada no bloco catch (A letra 'e' no exemplo acima). Depois de tudo isso ter sido executado, a seção "finalmente" será executada para finalizá-la.

## Tente bloquear

O bloco try deve ser colocado em volta do código que pode se comportar de maneira fora do comum e causar uma `Exception` e interromper sua aplicação. Por ter um bloco try você se protege de uma falha fatal do aplicativo. É importante observar que, assim que seu aplicativo tiver um erro e uma exceção for lançada, o resto do código no bloco `Try` **não** será executado.

Um bloco try tem seu próprio escopo de método, portanto, qualquer variável declarada dentro do bloco try não será acessível fora do bloco try.

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

Acima, você receberá um erro de tempo de compilação, pois o valor 'userInput' não está acessível. Se você precisar acessar uma variável fora do bloco try-catch, será necessário declarar a variável antes do bloco try.

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

## Bloco de captura

Este bloco é onde você especifica o tipo de `Exception` que deseja capturar. Se você quiser pegar TODAS as exceções possíveis, você pode usar a classe base `Exception` . Se você deseja capturar apenas um tipo específico de exceção, é possível especificar isso. Alguns exemplos de outros tipos de exceção são `ArgumentException` , `OutOfMemoryException` e `FormatException` .

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

A variável declarada após o tipo de exceção conterá todos os dados da exceção e poderá ser usada dentro do bloco `Catch` .

## Finalmente bloqueie

O bloco finally é **sempre** executado no final após os blocos `Try` e `Catch` . Esta seção é geralmente usada para quando algo **deve** acontecer no final, independentemente de uma exceção ser lançada ou não. Por exemplo, digamos que precisamos de uma variável para ser sempre re-inicializada de volta para um número específico depois de ter sido manipulada o tempo todo.

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