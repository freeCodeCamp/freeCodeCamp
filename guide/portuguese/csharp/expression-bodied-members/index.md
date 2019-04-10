---
title: Expression Bodied Methods and Properties
localeTitle: Métodos e propriedades corporais da expressão
---
# Métodos e propriedades corporais da expressão

Você pode declarar métodos e propriedades como uma expressão lambda, sem a necessidade de um bloco de instruções. Destinado a implementações simples, essa sintaxe é mais concisa do que declarar um método ou propriedade regular, pois elimina a necessidade de algumas das chaves e o uso de uma instrução de retorno explícita.

Aqui está um exemplo de uma declaração de método regular:

```csharp
public Point CreatePoint(int x, int y) 
 { 
    return new Point(x, y); 
 } 
```

O seguinte dá o mesmo resultado, mas é escrito como um método de expressão corporal:

```csharp
public Point CreatePoint(int x, int y) => new Point(x, y); 
```

Você também pode declarar propriedades com esta sintaxe. O código a seguir é como declaramos uma propriedade get-only sem uma expressão lambda:

```csharp
public Point Location 
 { 
    get 
    { 
        return _location; 
    } 
 } 
```

Através de um método expression-bodied, podemos reduzir este código para apenas uma linha:

```csharp
public Point Location => _location 

```