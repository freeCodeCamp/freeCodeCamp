---
title: Error Handling
localeTitle: Manejo de errores
---
# Manejo de excepciones C ++

Una excepción es un problema que surge durante la ejecución de un programa. Las excepciones proporcionan una forma de transferir el control de una parte de un programa a otra. El control de excepciones de C ++ se basa en tres palabras clave: #try, #catch y #throw.

*   # throw: un programa lanza una excepción cuando aparece un problema. Esto se hace usando una palabra clave throw.
    
*   # captura: un programa detecta una excepción con un controlador de excepciones en el lugar de un programa en el que desea manejar el problema. La palabra clave catch indica la captura de una excepción.
    
*   #try: un bloque try identifica un bloque de código para el cual se activarán excepciones particulares. Es seguido por uno o más bloques de captura.
    

```CPP
#include <iostream> 
 using namespace std; 
 
 int main() 
 { 
   int x = -1; 
 
   // Some code 
   cout << "Before try \n"; 
   try { 
      cout << "Inside try \n"; 
      if (x < 0) 
      { 
         throw x; 
         cout << "After throw (Never executed) \n"; 
      } 
   } 
   catch (int x ) { 
      cout << "Exception Caught \n"; 
   } 
 
   cout << "After catch (Will be executed) \n"; 
   return 0; 
 } 
```

# Antes de continuar ...

## Una revisión

*   Agrupación de tipos de error.
*   Separación del código de manejo de errores del código normal.
*   Las funciones / métodos pueden manejar cualquier excepción que elijan.