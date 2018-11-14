---
title: Array Type
localeTitle: Tipo de Matriz
---
# Tipo de Matriz

Você tem acesso total aos arrays no TypeScript. Os arrays podem ser escritos de duas maneiras diferentes no TypeScript:

**Tipo de dados\[\]**  
Tipo de dados seguido por colchetes `[]`

```typescript
let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

**Array <DataType>**  
`Array` seguido por <DataType>

```typescript
let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

## Métodos embutidos

No tipo Matriz do tipo Datilografe, você pode usar algumas funções internas. Cada tipo tem métodos comuns e exclusivos. Abaixo você pode ler sobre os mais usados ​​dos métodos do tipo array. No exemplo, usaremos a declaração de matriz acima.

### pop ()

Remove o último elemento de uma matriz e retorna com ele.

```typescript
var element = names.pop(); 
 //element = Emma 
 var element2 = names.pop(); 
 //element2 = Sophia 
```

### empurrar()

Adiciona um ou mais elementos ao final da matriz e retorna com o novo comprimento da matriz.

```typescript
var length = names.push('Tobias'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias'] 
 // lenght = 6 
 var length2 = names.push('Jack','Lily'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily'] 
 // lenght2 = 8 
```

### marcha ré()

Inverte a ordem da matriz e retorna com ela

```typescript
var reverseNames = names.reverse(); 
 //reverseNames = ['Emma','Sophia','John','Emma','Javier'] 
```

[Mais métodos e descrição no TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)