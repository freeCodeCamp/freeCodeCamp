---
title: Null-coalescing Operator
localeTitle: Operador de fusión nula
---
# Operador de fusión nula

El operador de unión nula en C # se usa para ayudar a asignar una variable a otra y especificar un valor alternativo si el valor de origen es `null` . El operador de unión nula en C # es `??` .

## Ejemplo 1

Como el `name` es `null` , a `clientName` se le asignará el valor "John Doe".

```csharp
string name = null; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```csharp
> John Doe 
```

## Ejemplo 2

Dado que el `name` no es `null` , a `clientName` se le asignará el valor de `name` , que es "Jane Smith".

```csharp
string name = "Jane Smith"; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```csharp
> Jane Smith 
```

## Alternativa a if ... else Declaración

Podría usar una instrucción `if...else` para probar la presencia de `null` y asignar un valor diferente.

```csharp
string clientName; 
 
 if (name != null) 
    clientName = name; 
 else 
    clientName = "John Doe"; 
```

Sin embargo, esto puede simplificarse enormemente utilizando el operador de fusión nula.

```csharp
string clientName = name ?? "John Doe"; 
```

## Alternativa al operador condicional (ternario)

También es posible utilizar el operador condicional para probar la presencia de `null` y asignar un valor diferente.

```csharp
string clientName = name != null ? name : "John Doe"; 
```

De nuevo, esto se puede simplificar utilizando el operador de unión nula.

```csharp
string clientName = name ?? "John Doe"; 
```

## Referencias

*   [?? Operador (Referencia C #)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operator)