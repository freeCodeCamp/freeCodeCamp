---
title: Nullable Types
localeTitle: Tipos anuláveis
---
## Tipos anuláveis

Tipos anuláveis ​​são instâncias do [System.Nullable \\](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1) struct. Um tipo anulável pode representar o intervalo correto de valores para seu tipo de valor subjacente, além de um valor `null` adicional. Essa habilidade é muito útil quando você está lidando com bancos de dados ou outros tipos de dados que podem conter elementos sem valor atribuído.

#### Como usar o tipo anulável

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

Para mais informações, visite o seguinte link:

*   [Guia de programação C #: tipos anuláveis](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/)