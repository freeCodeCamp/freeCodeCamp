---
title: Array Type
localeTitle: Тип массива
---
# Тип массива

У вас есть полный доступ к массивам в TypeScript. Массивы могут быть написаны двумя разными способами в TypeScript:

**Тип данных\[\]**  
DataType, за которым следуют квадратные скобки `[]`

```typescript
let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

**Массив <DataType>**  
`Array` за которым следует <DataType>

```typescript
let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
```

## Встроенные методы

В типе Typecript Array вы можете использовать некоторые встроенные функции. Каждый тип имеет общие и уникальные методы. Ниже вы можете прочитать о наиболее используемых методах типа массива. В этом примере мы будем использовать объявление массива сверху.

### поп ()

Удаляет последний элемент из массива и возвращает его.

```typescript
var element = names.pop(); 
 //element = Emma 
 var element2 = names.pop(); 
 //element2 = Sophia 
```

### От себя()

Добавляет один или несколько элементов в конец массива и возвращает с новой длиной массива.

```typescript
var length = names.push('Tobias'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias'] 
 // lenght = 6 
 var length2 = names.push('Jack','Lily'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily'] 
 // lenght2 = 8 
```

### задний ход()

Изменяет порядок массива и возвращает его

```typescript
var reverseNames = names.reverse(); 
 //reverseNames = ['Emma','Sophia','John','Emma','Javier'] 
```

[Дополнительные методы и описание в TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)