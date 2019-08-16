---
title: Array Type
localeTitle: Тип array
---
# Тип массива

У вас есть полный доступ к массивам в TypeScript. Массивы могут быть объявлены двумя разными способами:

**DataType\[\]**  
DataType, за которым следуют квадратные скобки `[]`

```typescript
let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

**Array <DataType>**  
`Array`, за которым следует <DataType>

```typescript
let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

## Встроенные методы

В типе Array вы можете использовать некоторые встроенные функции. Каждый тип имеет общие и уникальные методы. Ниже вы можете прочитать о наиболее используемых методах типа Array. В этом примере мы будем использовать объявление массива как было показано выше.

### pop()

Удаляет последний элемент из массива и возвращает его.

```typescript
var element = names.pop(); 
 //element = Emma 
 var element2 = names.pop(); 
 //element2 = Sophia 
```

### push()

Добавляет один или несколько элементов в конец массива и возвращает длину нового массива.

```typescript
var length = names.push('Tobias'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias'] 
 // length = 6 
 var length2 = names.push('Jack','Lily'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily'] 
 // length2 = 8 
```

### reverse()

Изменяет порядок элементов в массиве на обратный и возвращает его.

```typescript
var reverseNames = names.reverse(); 
 //reverseNames = ['Emma','Sophia','John','Emma','Javier'] 
```

[Дополнительные методы и описание в TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)
