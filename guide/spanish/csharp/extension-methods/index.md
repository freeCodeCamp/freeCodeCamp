---
title: Extension Mehods
localeTitle: Mehods de la extensión
---
## Métodos de extensión

Los métodos de extensión le permiten "agregar" métodos a los tipos existentes sin crear un nuevo tipo derivado, volver a compilar o modificar el tipo original. Para el código de cliente escrito en C # no hay diferencia aparente entre llamar a un método de extensión y los métodos que realmente están definidos en un tipo.

Los métodos de extensión más comunes son los operadores de consulta estándar de LINQ que agregan funcionalidad de consulta a los existentes System.Collections.IEnumerable y System.Collections.Generic.IEnumerable. tipos

### Uso

Los métodos de extensión se definen como métodos estáticos, pero se llaman utilizando la sintaxis del método de instancia. Su primer parámetro especifica en qué tipo opera el método, y este parámetro está precedido por este modificador. Los métodos de extensión solo están dentro del alcance cuando importa explícitamente el espacio de nombres en su código fuente con una directiva de **uso** .

### Ejemplo

El siguiente ejemplo muestra un método de extensión definido para la clase **System.String** .
```
namespace ExtensionMethods 
 { 
    public static class MyExtensions 
    { 
        public static int WordCount(this String str) 
        { 
            return str.Split(new char[] { ' ', '.', '?' }, 
                             StringSplitOptions.RemoveEmptyEntries).Length; 
        } 
    } 
 } 
```

Ahora puede llevar el método de **WordCount** al ámbito **usando la** directiva:
```
using ExtensionMethods; 
```

Y puedes llamarlo desde una aplicación usando esta sintaxis:
```
string s = "Hello Extension Methods"; 
 int i = s.WordCount(); 
```

#### Más información:

[Cómo: Implementar y llamar a un método de extensión personalizado (Guía de programación de C #)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-implement-and-call-a-custom-extension-method)