---
title: Error Handling
localeTitle: Manejo de errores
---
## Manejo de errores

El manejo de errores y, en mayor medida, el manejo de excepciones, son funciones / métodos escritos para devolver información importante sobre la manipulación de datos. El manejo de errores se usa a menudo junto con las promesas y devoluciones de llamada. El manejo de errores es una cosa muy importante que todos los desarrolladores deberían tener en cuenta durante la programación. Aquí explicaré cómo manejar los errores que ocurren en tiempo de ejecución usando bloques try-catch con un ejemplo en programas C #. Las declaraciones de prueba-captura están disponibles en todos los lenguajes de programación principales con una sintaxis similar.

### Cómo funciona el bloque try-catch.

La instrucción try-catch consiste en un bloque **try** y un bloque **catch** y un bloque **finally** opcional. El código que podría generar una excepción se debe colocar en el bloque try. El bloque catch toma la excepción que podría lanzarse como un parámetro y luego maneja esa excepción dentro del bloque. Durante el tiempo de ejecución, el código en el bloque de prueba se ejecuta primero. Si se lanza una excepción, se lanzará al bloque catch para ser manejado. Si no hay un bloque catch, el programa mostrará un error de excepción no manejada y dejará de ejecutarse. Se utilizan varios bloques de captura si el código en el bloque de prueba podría generar más de una excepción. También hay un bloque **finalmente** opcional que ejecutará el código en él, independientemente de si se lanza o no una excepción.

A continuación se muestra un programa de ejemplo que maneja la excepción de división por cero usando una clase predefinida en la biblioteca C #. La excepción es la clase base para todas las excepciones.

`c# using System; namespace ErrorHandling { class DivideByZero { int result; DivideByZero() { result = 0; } public void division(int num1, int num2) { try { result = num1 / num2; } catch (DivideByZeroException e) { Console.WriteLine("Exception caught: {0}", e); } catch(Exception ex) { Console.WriteLine("Exception caught: {0}", ex); } finally { Console.WriteLine("Result: {0}", result); } } static void Main(string[] args) { DivideByZero d = new DivideByZero(); d.division(10, 0); Console.ReadKey(); } } }`

*   En el programa anterior, pasar 0 como segundo parámetro lanzará DivideByZeroExceptions.
    
*   Esta excepción será manejada por el bloque catch que tiene la clase DivideByZeroException. Si se producen excepciones que no sean DivideByZeroExceptions, serán manejadas por el bloque de captura de Excepción.
    
    La excepción es la clase base para todas las clases de excepciones disponibles en la biblioteca C #. Incluso si desea escribir su propia excepción, debe heredar la clase base de Excepción en su programa.
    

#### Más información:

https://quizlet.com/135129010/computer-science-error-handling-flash-cards/ https://en.wikipedia.org/wiki/Exception\_handling