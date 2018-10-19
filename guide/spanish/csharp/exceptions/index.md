---
title: Exceptions
localeTitle: Excepciones
---
# Excepciones

Una excepción es un error inesperado que se produce mientras se ejecuta un programa, como un intento de acceder a un archivo que no existe. Se detendrá el programa si no se maneja.

## Ejemplo

Si intentamos leer el texto de un archivo que no existe:
```
using System.IO; 
 
 string content = File.ReadAllText(@"C:\DoesNotExist.txt"); 
```

Se `FileNotFoundException` una `FileNotFoundException` .

Algunas otras excepciones comunes:

*   `IndexOutofRangeException` : se intentó acceder a una matriz con un índice no válido.
*   `NullReferenceException` : intento de utilizar una variable de referencia no asignada.
*   `DivideByZeroException` : Intentó dividir entre 0.

## Mejores prácticas

### Usa try / catch / finally Blocks
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

### Manejar posibles excepciones con condiciones

En lugar de
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

Prueba esto
```
if (conn.State != ConnectionState.Closed) 
 { 
    conn.Close(); 
 } 

```