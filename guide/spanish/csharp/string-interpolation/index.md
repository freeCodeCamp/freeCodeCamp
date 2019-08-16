---
title: String Interpolation
localeTitle: Interpolación de cadenas
---
# Interpolación de cadenas

En C #, normalmente para concatenar cadenas, utilizaría el operador “+” o el formato compuesto con un método como String.Format. Por formato compuesto, me refiero a una cadena de formato con marcadores de posición indexados (elementos de formato) y una lista de objetos que se utilizarán en los marcadores de posición.

# #
```csharp
string mensaje = "Hola " + nombre + " " + apellido + "!"; 
 
string mensaje2 = string.Format("Hello {0} {1}!", nombre, apellido); 
```

C# 6, incorpora las **expresiones de cadena interpoladas**, estas se componen de una cadena con expresiones contenidas que se reemplazan con los resultados de las expresiones. Para utilizarlas debe prefijar su cadena con un signo de dólar ($). Las expresiones que desea incluir en la cadena se colocan en línea entre corchetes. El mensaje anterior ahora se vería así:

# #
```csharp
string mensaje = $"Hola {nombre} {apellido}!"; 
```

Dentro de un string interpolado puedes llamar a funciones, propiedades, métodos y operadores ternarios:

```csharp
	public class Empleado 
	{
		public string Nombre { get; set; }
		public DateTime FechaDeNacimiento { get; set; }
	}
	
	public static void Main()
	{
		var empleado = new Empleado();
		empleado.Nombre = "Juan";
		empleado.FechaDeNacimiento = new DateTime(1980, 12, 12);
		
 		Console.WriteLine($"{empleado.Nombre} ha nacido en {empleado.FechaDeNacimiento:dd/MM/yyyy}");
		//Juan ha nacido en 12/12/1980
		
		Console.WriteLine($"{(empleado.Nombre == "Juan" ? "Es Juan" : "No Es Juan")}");
		//Es Juan
	}
```

## Formato y Alineación
También puedes indicar una alineación y formato al string interpolado siguiendo la siguiente sintaxis:

# #
```
{<expresión interpolada>[,<alineación>][:<formato>]}
```

```csharp
Console.WriteLine($"|{"Alineado a izquierda",-25}|");
Console.WriteLine($"|{"34",5}|");
Console.WriteLine($"{34.1234567:F3}");
```

```
|Alineado a izquierda     |
|   34|
34.123
```

Para más información sobre las posibles alineaciones y formatos: [Composite Formatting, Microsoft](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting#alignment-component)

### Recursos
- [String interpolation (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated) 
