---
title: Nullable Types
localeTitle: Tipos anulables
---
## Tipos anulables

Los tipos anulables son instancias de [System.Nullable \\](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1) estructura Un tipo anulable puede representar el rango correcto de valores para su tipo de valor subyacente, más un valor `null` adicional. Esta capacidad es muy útil cuando se trata de bases de datos u otros tipos de datos que pueden contener elementos sin valor asignado.

#### Cómo utilizar el tipo nullable

```csharp
// Declare a variable of Nullable type (Nullable<int>) 
 int? i = null; 
 
 int  j = 0; 
 int defaultValue = 0; 
 
 // test for null and assign value to another variable 
 if (i.HasValue) 
 { 
    j = i.Value; 
 } 
 
 // get assigned value or default when current value is null 
 j = i.GetValueOrDefault(); // i.GetValueOrDefault(defaultValue) 
 
 //use coalescing operator to assign default value when current value is null 
 j = i ?? defaultValue; 
```

Para más información, visite el siguiente enlace:

*   [Guía de programación de C #: tipos anulables](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/)