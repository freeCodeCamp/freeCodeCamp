---
title: Discards
localeTitle: Descartes
---
# Descartes (Discards)
Es una característica introducida en C# 7.

Son variables que son asignadas pero nunca son leídas. Son representadas con la palabra clave `_`.

```csharp
var numero = "2";
if(int.TryParse(numero, out _))
{
  Console.WriteLine("Es un número");	
}
```    
Son útiles cuando se necesita el uso de una variable pero no se quiere leer su contenido y son soportadas en los siguientes casos:

- Deconstrucción de tuplas y objetos
- Pattern matching, usando `is` y `switch`
- Llamadas a métodos con parámetros de salida
- Como variable, si no existe otro `_` en el contexto

### Recursos
- [Msdn blog](https://blogs.msdn.microsoft.com/mazhou/2017/06/27/c-7-series-part-4-discards/)
- [Discards - C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/discards)
