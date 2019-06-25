---
title: Null-coalescing Operator
localeTitle: Operador de coalescência nula
---
# Operador de coalescência nula

O operador de coalescência nula em C # é usado para ajudar a designar uma variável para outra e especificar um valor alternativo se o valor da origem for `null` . O operador de coalescência de nulo em C # é `??` .

## Exemplo 1

Como `name` é `null` , o `clientName` receberá o valor "John Doe".

```csharp
string name = null; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```csharp
> John Doe 
```

## Exemplo 2

Como o `name` não é `null` , o `clientName` receberá o valor do `name` , que é "Jane Smith".

```csharp
string name = "Jane Smith"; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```csharp
> Jane Smith 
```

## Alternativa para if… else Statement

Você poderia usar uma instrução `if...else` para testar a presença de `null` e atribuir um valor diferente.

```csharp
string clientName; 
 
 if (name != null) 
    clientName = name; 
 else 
    clientName = "John Doe"; 
```

No entanto, isso pode ser muito simplificado usando o operador de coalescência nula.

```csharp
string clientName = name ?? "John Doe"; 
```

## Alternativa para operador condicional (ternário)

Também é possível usar o operador condicional para testar a presença de `null` e atribuir um valor diferente.

```csharp
string clientName = name != null ? name : "John Doe"; 
```

Novamente, isso pode ser simplificado usando o operador de coalescência nula.

```csharp
string clientName = name ?? "John Doe"; 
```

## Referências

*   [?? Operador (referência C #)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operator)