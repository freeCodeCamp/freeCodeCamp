---
title: Array Type
localeTitle: Tipo de matriz
---
# Tipo de matriz

Tienes acceso completo a las matrices en TypeScript. Las matrices se pueden escribir de dos formas diferentes en TypeScript:

**Tipo de datos\[\]**  
Tipo de datos seguido de corchetes `[]`

```typescript
let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

**Array <DataType>**  
`Array` seguido de <DataType>

```typescript
let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

## Métodos incorporados

En el tipo Array de Typescript puedes usar algunas funciones integradas. Cada tipo tiene métodos comunes y únicos. A continuación puede leer los métodos más utilizados de los tipos de matriz. En el ejemplo, usaremos la declaración de matriz de arriba.

### popular()

Elimina el último elemento de una matriz y vuelve con él.

```typescript
var element = names.pop(); 
 //element = Emma 
 var element2 = names.pop(); 
 //element2 = Sophia 
```

### empujar()

Agrega uno o más elementos al final de la matriz y vuelve con la nueva longitud de la matriz.

```typescript
var length = names.push('Tobias'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias'] 
 // lenght = 6 
 var length2 = names.push('Jack','Lily'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily'] 
 // lenght2 = 8 
```

### marcha atrás()

Invierte el orden de la matriz y regresa con ella

```typescript
var reverseNames = names.reverse(); 
 //reverseNames = ['Emma','Sophia','John','Emma','Javier'] 
```

[Más métodos y descripción en TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)