---
title: Try Catch Finally
localeTitle: Probar atrapar finalmente
---
# Probar atrapar finalmente

Se utiliza un bloque Try-Catch-Finally para evitar que las excepciones no controladas rompan su aplicación. Cuando su código `throws` una excepción que se encuentra entre la sección de `try` , quedará atrapada en la parte de `catch` de la declaración, donde podrá manejarla como desee. La sentencia `finally` siempre se ejecuta al final y generalmente se usa para limpiar los recursos no administrados. No siempre es necesario tener los tres bloques presentes, a continuación se muestran las opciones válidas.

*   Prueba-captura-finalmente
*   Trata de atraparlo
*   Intentar-finalmente

## Sintaxis

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

En el ejemplo anterior, estamos tratando de convertir 'abcde' en un valor numérico. Esta línea lanzará una excepción porque no se puede convertir a un número con éxito. La excepción se capturará en el bloque catch y el mensaje de excepción y otros detalles se almacenarán en la variable asignada en el bloque catch (la letra 'e' en el ejemplo anterior). Después de que todo esto se haya ejecutado, la sección "finalmente" se ejecutará para finalizarla.

## Prueba bloque

El bloque try debe colocarse alrededor del código que podría comportarse fuera de lo común y provocar una `Exception` y romper su aplicación. Al tener un bloqueo de prueba, te proteges de un bloqueo de aplicación fatal. Es importante tener en cuenta que tan pronto como su aplicación tenga un error y se lance una excepción, el resto del código en el bloque `Try` **no** se ejecutará.

Un bloque try tiene su propio alcance de método, por lo que cualquier variable que se declare dentro del bloque try no será accesible fuera del bloque try.

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

Lo anterior le dará un error de tiempo de compilación ya que el valor 'userInput' no es accesible. Si necesita acceder a una variable fuera del bloque try-catch, deberá declarar la variable antes del bloque try.

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

## Bloque de captura

Este bloque es donde se especifica qué tipo de `Exception` desea capturar. Si desea detectar TODAS las posibles excepciones, puede usar la clase base de `Exception` . Si solo desea capturar un tipo específico de excepción, puede especificarlo en su lugar. Algunos ejemplos de otros tipos de excepción son `ArgumentException` , `OutOfMemoryException` y `FormatException` .

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

La variable declarada después del tipo de excepción contendrá todos los datos de la excepción y puede usarse dentro del bloque `Catch` .

## Finalmente bloque

El bloque finally se ejecuta **siempre** al final después de los bloques `Try` y `Catch` . Esta sección generalmente se usa cuando algo **debe** suceder al final, independientemente de si se lanzó una excepción o no. Por ejemplo, digamos que necesitamos una variable que siempre se reinicialice de nuevo a un número específico después de que haya sido manipulada todo el tiempo.

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