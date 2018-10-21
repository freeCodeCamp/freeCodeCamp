---
title: Tuple Type
localeTitle: Tipo tupla
---
# Tipo de tupla

Exprese una matriz en la que se conoce un número fijo de elementos de tipos, pero no el mismo.

```typescript
let arr: [string, number]; 
 
 // This is correct 
 arr = ['Hello', 7]; 
 
 //This is incorrect 
 arr = [7, 'Hello']; 
```

Al acceder a un elemento fuera de los índices conocidos, utilizará un tipo de unión:

```typescript
arr[3] = 'World!' 
 // OK, 'string' can be assigned to 'string | number' 
 
 // Error, 'boolean' is not a 'string | number' 
 arr[5] = false; 
 // Error, 'boolean' is not a 'string | number' 
```

## Propiedades

En el tipo de Typescript puedes tener algunas propiedades de buit-in. Por ejemplo, la longitud o algún otro tipo de cada uno.

### longitud

Esta propiedad dice, cuantos elementos tiene su elemento.

```typescript
let tuple = []; //you can initialize it after the declaration too, not just the method above 
 tuple[0] = 10; 
 tuple[1] = 'Mike'; 
 let number = tuple.length; 
 //number = 2; 
```

## Métodos incorporados

En el tipo de Typescript puedes usar algunas funciones incorporadas. Cada tipo tiene métodos comunes y únicos. A continuación puede leer sobre los métodos más utilizados de los tipos de tuplas.

### popular()

Elimina el último elemento de una tupla.

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.pop(); 
 //tuple = [10,'Emma',11,'Lily',12,] 
 //We popped 'Mike Ross' from the tuple 
```

### empujar()

Agrega elemento al final de la tupla.

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.push('Rachel Zane'); 
 //tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane'] 
```

[Más información sobre tuplas en TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)