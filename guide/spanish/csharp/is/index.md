---
title: is
localeTitle: is
---
## is

La palabra clave `is` verifica si un objeto es compatible con un tipo dado, o (desde C# 7) prueba una expresión contra un patrón (pattern matching).

En el siguiente ejemplo se valida si el tipo de obj es Empleado:

```csharp
if (obj is Empleado) {
   Console.WriteLine("Es un empleado");
}
```

Hasta C# 6 el uso de `is` estaba restringido a ese tipo de validaciones, con C# 7, como se mencionó anteriormente, se agregan más funcionalidades a este permitiendo matchear patrones. 

Hay tres tipos de patrones soportados:

- Patrones de tipo
- Patrones constantes
- Patrones var

### Patrones de tipo
Validan si un objeto puede ser casteado a un tipo dado, de este modo retornará true si el objeto es de la clase o bien, extiende de la clase dada. Por ejemplo:

```csharp
public class Empleado : Persona {}

Object o = new Empleado();
if (o is Persona p) {
  Console.WriteLine("Es Persona");
}   
if (o is Empleado p) {
  Console.WriteLine("Es Empleado");
}   

// Es Persona
// Es Empleado
````

### Patrones constantes
Permite consultar si el valor de una variable es igual al valor de una constante. Por ejemplo:

```csharp
expresion is null
expresion is 2
````

### Patrones var
Siempre retornará **true**. El valor de la variable a consultar se asigna a la variable definida. 

```csharp
var expresion = 2;
  if(expresion is var variable){
	Console.WriteLine(variable);
}

// 2
````

#### Más información:

* [Referencia de C#: is](https://docs.microsoft.com/dotnet/csharp/language-reference/keywords/is)
