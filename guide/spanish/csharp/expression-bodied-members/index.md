---
title: Expression Bodied Methods and Properties
localeTitle: Métodos y propiedades corporales de expresión
---
# Métodos y propiedades corporales de expresión

Puede declarar métodos y propiedades como una expresión lambda, sin la necesidad de un bloque de instrucciones. Destinada a implementaciones simples, esta sintaxis es más concisa que declarar un método o una propiedad regular, ya que elimina la necesidad de algunas llaves y el uso de una declaración de devolución explícita.

Aquí hay un ejemplo de una declaración de método regular:

```csharp
public Point CreatePoint(int x, int y) 
 { 
    return new Point(x, y); 
 } 
```

Lo siguiente da el mismo resultado, pero está escrito como un método con expresión:

```csharp
public Point CreatePoint(int x, int y) => new Point(x, y); 
```

También puede declarar propiedades con esta sintaxis. El siguiente código es cómo declaramos una propiedad de obtención sin una expresión lambda:

```csharp
public Point Location 
 { 
    get 
    { 
        return _location; 
    } 
 } 
```

A través de un método con cuerpo de expresión, podemos reducir este código a una sola línea:

```csharp
public Point Location => _location 

```