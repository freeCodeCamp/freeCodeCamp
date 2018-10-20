---
title: Null-conditional Operator
localeTitle: Operador condicional nulo
---
# Operador condicional nulo

Los operadores condicionales nulos permiten la comprobación nula con una cantidad mínima de código. Por ejemplo, si tuvieras una variable de empleado de tipo Empleado con una propiedad de tipo Dirección, puede realizar la comprobación nula de la siguiente manera:

```csharp
Address address = null; 
 if (employee != null) 
 { 
    address = employee.Address; 
 } 
```

Podría usar un operador condicional estándar para hacer que la verificación sea más concisa:

```csharp
Address address = employee != null ? employee.Address : null; 
```

Sin embargo, en C # 6.0 se introdujeron operadores condicionales nulos, por lo que ahora la línea anterior puede simplemente ser representado de la siguiente manera:

```csharp
Address address = student?.Address; 
```

Si el empleado es nulo, la dirección simplemente se asignará como nula y no se producirá NullReferenceExeception. Esto se vuelve más útil con gráficos de objetos más profundos, ya que puede manejar una cadena de acceso condicional de miembros.

Por ejemplo:

```csharp
string city = student?.Address?.City; 
```

Los operadores de condicionalidad nula están en cortocircuito, por lo que tan pronto como una verificación de acceso de miembro condicional Vuelve nulo, el resto no se efectúa.

# Operador de fusión nula

Otra opción útil de comprobación de nulos es el operador de unión nula. Devuelve el operando de la izquierda si el operando no es nulo; De lo contrario, devuelve el operando de la mano derecha.

Por ejemplo:

```csharp
public string GetStringValue() 
 { 
    return null; 
 } 
 
 // Display the value of s if s is NOT null. If x IS null, display the string "It was null." 
 
 string x = GetStringValue(); 
 
 Console.WriteLine(x ?? "It was null."); 
 
 // Result: 
 
 "It was null." 

```