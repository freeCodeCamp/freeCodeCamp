---
title: Nullable Types
localeTitle: Tipos que aceptan valores NULL
---
## Tipos que aceptan valores NULL

Los tipos que aceptan valores NULL son instancias de la estructura [System.Nullable\<T\>](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1). Pueden representar el rango de valores para su tipo de valor subyacente, más un valor `null`. Esta capacidad es muy útil cuando se trata de bases de datos u otros tipos de datos que pueden contener elementos sin valor asignado.

#### Cómo utilizar el tipo nullable

```csharp
 // Declaración de una variable que acepta valores NULL (Nullable<int>) 
 int? i = null; 
 
 int  j = 0; 
 int valorPorDefecto = 0; 
 
 // pruebo si es NULL y asigno el valor a otra variable
 if (i.HasValue) 
 { 
    j = i.Value; 
 } 
 
 // obtengo el valor asinado o el valor default cuando el valor es NULL
  j = i.GetValueOrDefault(); // i.GetValueOrDefault(valorPorDefecto) 
 
 // uso el operador coalescente para asignar el valor por defecto cuando el valor actual es NULL
  j = i ?? valorPorDefecto; 
```

Para más información, visite los siguientes enlaces:

* [Guía de programación de C#: tipos que aceptan valores null](https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/nullable-types/using-nullable-types)
* [Tipos que aceptan valores null](https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/nullable-types/index)
