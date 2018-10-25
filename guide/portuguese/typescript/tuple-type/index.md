---
title: Tuple Type
localeTitle: Tipo de tupla
---
# Tipo de tupla

Expresse uma matriz na qual um número fixo de elementos de tipos é conhecido, mas não é o mesmo.

```typescript
let arr: [string, number]; 
 
 // This is correct 
 arr = ['Hello', 7]; 
 
 //This is incorrect 
 arr = [7, 'Hello']; 
```

Ao acessar um elemento fora dos índices conhecidos, ele usará um tipo de união:

```typescript
arr[3] = 'World!' 
 // OK, 'string' can be assigned to 'string | number' 
 
 // Error, 'boolean' is not a 'string | number' 
 arr[5] = false; 
 // Error, 'boolean' is not a 'string | number' 
```

## Propriedades

No tipo do Typescript, você pode ter algumas propriedades de construção. Comprimento do Forexample ou alguns outros tipos exclusivos de cada.

### comprimento

Esta propriedade disse, quantos elementos tem seu elemento.

```typescript
let tuple = []; //you can initialize it after the declaration too, not just the method above 
 tuple[0] = 10; 
 tuple[1] = 'Mike'; 
 let number = tuple.length; 
 //number = 2; 
```

## Métodos embutidos

No tipo do Datilografe você pode usar algumas funções internas. Cada tipo tem métodos comuns e exclusivos. Abaixo você pode ler sobre os mais usados ​​dos métodos do tipo tupla.

### pop ()

Remove o último elemento de uma tupla.

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.pop(); 
 //tuple = [10,'Emma',11,'Lily',12,] 
 //We popped 'Mike Ross' from the tuple 
```

### empurrar()

Adiciona elemento ao final da tupla.

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.push('Rachel Zane'); 
 //tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane'] 
```

[Mais informações sobre tuplas no TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)