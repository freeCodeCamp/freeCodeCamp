---
title: The C Programming Language
localeTitle: El lenguaje de programación C
---
## Lo esencial

*   Preparar
*   Su primer programa de C #
*   Tipos y variables
*   Declaraciones de control de flujo
*   Los operadores
*   Instrumentos de cuerda
*   Clases, objetos, interfaz y métodos principales
*   Campos y propiedades
*   Alcance y modificadores de accesibilidad
*   Manejo de excepciones

## Intermedio

*   Genéricos
*   Eventos, Delegados y Expresiones Lambda.
*   Marco de la colección
*   LINQ

## Avanzado

*   Programación asíncrona (asíncrona y espera)
*   Biblioteca paralela de tareas

## ¿Qué hay de nuevo en C # 6?

*   Operador condicional nulo
*   Inicializadores de propiedad automática
*   Nombre de Expresiones
*   Funciones y propiedades corporales de expresión
*   Otras características

## Principios orientados a objetos (OOP)

*   Encapsulacion
*   Abstracción
*   Herencia
*   Polimorfismo

## Principios sólidos

*   Principio de responsabilidad única
*   Principio cerrado abierto
*   Principio de sustitución de Liskov
*   Principio de Segregación de Interfaz
*   Principio de inversión de dependencia

## C # Mejores prácticas, patrones de diseño y desarrollo guiado por pruebas (TDD)

## Preparar

[LinqPad](http://www.linqpad.net/) es un bloc de notas .NET para probar rápidamente sus fragmentos de código C #. La edición estándar es gratuita y una herramienta perfecta para que los principiantes ejecuten declaraciones de lenguaje, expresiones y programas.

Alternativamente, también puede descargar [Visual Studio Community 2015,](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) que es un [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) extensible utilizado por la mayoría de los profesionales para crear aplicaciones empresariales.

## Su primer programa de C #
```
//this is the single line comment 
 
 /** This is multiline comment, 
 compiler ignores any code inside comment blocks. 
 **/ 
 
 //This is the namespace, part of the standard .NET Framework Class Library 
 using System; 
 // namespace defines the scope of related objects into packages 
 namespace Learning.CSharp 
 { 
  // name of the class, should be same as of .cs file 
  public class Program 
  { 
    //entry point method for console applications 
   public static void Main() 
    { 
      //print lines on console 
      Console.WriteLine("Hello, World!"); 
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console. 
      Console.ReadLine(); 
    } 
  } 
 } 
```

Cada aplicación de consola C # debe tener un [método principal](https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx) que es el punto de entrada del programa.

Edite [HelloWorld](https://dotnetfiddle.net/kY7QRm) en .NET Fiddle, una herramienta inspirada en [JSFiddle](http://jsfiddle.net) donde puede modificar los fragmentos de código y comprobar la salida por sí mismo. Tenga en cuenta que esto es solo para compartir y probar los fragmentos de código, no para utilizarlos en el desarrollo de aplicaciones.

Si está utilizando Visual Studio, siga este [tutorial](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx) para crear una aplicación de consola y comprender su primer programa de C #.

## Tipos y variables

C # es un lenguaje fuertemente tipado. Cada variable tiene un tipo. Cada expresión o declaración se evalúa a un valor. Hay dos tipos de tipos en C #

*   Tipos de valor
*   Tipos de referencia.

**Tipos de valor** : las variables que son tipos de valor contienen directamente valores. Al asignar una variable de tipo de valor a otra, se copia el valor contenido.

[Editar en .NET Fiddle](https://dotnetfiddle.net/JCkTxb)
```
int a = 10; 
 int b = 20; 
 a=b; 
 Console.WriteLine(a); //prints 20 
 Console.WriteLine(b); //prints 20 
```

Tenga en cuenta que en otros idiomas dinámicos esto podría ser diferente, pero en C # siempre es una copia de valor. Cuando se crea el tipo de valor, se crea un único espacio en la [pila](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) , que es una estructura de datos "LIFO" (último en entrar, primero en salir). La pila tiene límites de tamaño y las operaciones de memoria son eficientes. Algunos ejemplos de tipos de datos incorporados son `int, float, double, decimal, char and string` .

Tipo | Ejemplo | Descripción  
\--------- | -------------------------------------------------- --------------------------- | -------------------------------------------------- -------------------------------------------------- -----------------------------  
_Entero_ `int fooInt = 7;` | Entero de **32 bits firmado**  
_Largo_ | `long fooLong = 3000L;` | Entero de **64 bits firmado** . **L se utiliza para especificar que este valor de variable es de tipo long / ulong**  
_Doble_ | `double fooDouble = 20.99;` | Precisión: **15-16 dígitos.**  
_Flotar_ `float fooFloat = 314.5f;` | Precisión: **7 dígitos** . **F se utiliza para especificar que este valor de variable es de tipo float**  
_Decimal_ | `decimal fooDecimal = 23.3m;` | Precisión: **28-29 dígitos.** Su mayor precisión y menor alcance lo hace apropiado para **cálculos financieros y monetarios**  
_Char_ | `char fooChar = 'Z';` | Un solo **carácter Unicode de 16 bits.**  
_Booleano_ | `bool fooBoolean = false;` | Booleano - **verdadero y falso**  
_Cadena_ `string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);` | **Una cadena de caracteres Unicode.**

Para obtener una lista completa de todos los tipos de datos incorporados, consulte [aquí](https://msdn.microsoft.com/en-us/library/ms228360)

[**Tipos de referencia**](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) : las variables de los tipos de referencia almacenan referencias a sus objetos, lo que significa que almacenan la dirección en la ubicación de los datos en la [pila](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) , también conocidos como punteros. Los datos reales se almacenan en la memoria del [montón](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3) . La asignación de un tipo de referencia a otro no copia los datos, en su lugar crea la segunda copia de referencia que apunta a la misma ubicación en el montón.

En el montón, los objetos se asignan y se desasignan en orden aleatorio, por lo que esto requiere la sobrecarga de administración de memoria y [recolección de basura](https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110) .aspx).

A menos que escriba [un código inseguro](https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx) o trate con un [código no administrado (](https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100) .aspx), no necesita preocuparse por la vida útil de sus ubicaciones de memoria. El compilador .NET y CLR se encargarán de esto, pero aún así es bueno tener esto en cuenta para optimizar el rendimiento de sus aplicaciones.

Mas informacion [aqui](http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91)

## Declaraciones de control de flujo

*   [Si otra cosa](https://msdn.microsoft.com/en-us/library/5011f09h.aspx) : [Editar en .NET Fiddle](https://dotnetfiddle.net/IFVB33)
    
    ```
            int myScore = 700; 
            if (myScore == 700) 
            { 
                Console.WriteLine("I get printed on the console"); 
            } 
            else if (myScore > 10) 
            { 
                Console.WriteLine("I don't"); 
            } 
            else 
            { 
                Console.WriteLine("I also don't"); 
            }
    ```
    
*   [Cambiar](https://msdn.microsoft.com/en-GB/library/06tc147t.aspx) declaración: [Editar en .NET Fiddle](https://dotnetfiddle.net/lPZftO)
    
    utilizando el sistema;
    
    programa de clase publica { vacío estático público principal () { int myNumber = 0; interruptor (myNumber) { // Una sección de cambio puede tener más de una etiqueta de caso. caso 0: caso 1: { Console.WriteLine ("Caso 0 o 1"); descanso; }
    
    ```
            // Most switch sections contain a jump statement, such as a break, goto, or return.; 
            case 2: 
                Console.WriteLine("Case 2"); 
                break; 
            // 7 - 4 in the following line evaluates to 3. 
            case 7 - 4: 
                Console.WriteLine("Case 3"); 
                break; 
            // If the value of myNumber is not 0, 1, 2, or 3 the 
            //default case is executed.* 
            default: 
                Console.WriteLine("Default case. This is also optional"); 
                break; // could also throw new Exception() instead 
        } 
     } 
    
    ```
    
    }
    
*   [Para](https://msdn.microsoft.com/en-us/library/ch45axte.aspx) & [Foreach](https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx) : [Editar en .NET Fiddle](https://dotnetfiddle.net/edxtvq)
    
    para (int i = 0; i <10; i ++) { Console.WriteLine (i); // imprime 0-9 }
    
    Console.WriteLine (Environment.NewLine); para (int i = 0; i <= 10; i ++) { Console.WriteLine (i); // imprime 0-10 }
    
    Console.WriteLine (Environment.NewLine); para (int i = 10 - 1; i> = 0; i--) // bucle de decremento { Console.WriteLine (i); // imprime 9-0 }
    
    Console.WriteLine (Environment.NewLine); //para (; ; ) { // Todas las expresiones son opcionales. Esta declaración // crea un bucle infinito. \* //  
    }
    
*   [While](https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx) & [do-while](https://msdn.microsoft.com/en-us/library/370s1zax.aspx) : [Editar en .NET Fiddle](https://dotnetfiddle.net/O5hOF1)
    
    // Continuar el ciclo while hasta que el índice sea igual a 10. int i = 0; mientras (i <10) { Console.Write ("While statement"); Console.WriteLine (i); // Escriba el índice en la pantalla. i ++; // Incrementar la variable. }
    
    número int = 0; // funciona primero, hasta que se cumpla la condición, es decir, termina cuando el número es 4. hacer { Console.WriteLine (número); // imprime el valor de 0-4 numero ++; // Añadir uno al número. } while (número <= 4);