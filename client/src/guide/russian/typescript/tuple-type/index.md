---
title: Tuple Type
localeTitle: Тип Tuple
---
# Тип Tuple

Выразите массив, в котором известно определенное количество элементов типов, но не одно и то же.

```typescript
let arr: [string, number]; 
 
 // This is correct 
 arr = ['Hello', 7]; 
 
 //This is incorrect 
 arr = [7, 'Hello']; 
```

При доступе к элементу за пределами известных индексов он будет использовать тип объединения:

```typescript
arr[3] = 'World!' 
 // OK, 'string' can be assigned to 'string | number' 
 
 // Error, 'boolean' is not a 'string | number' 
 arr[5] = false; 
 // Error, 'boolean' is not a 'string | number' 
```

## свойства

В типе машинописного текста вы можете иметь некоторые свойства для создания. Максимальная длина или некоторые другие уникальные типы.

### длина

Это свойство говорит, сколько элементов имеет элемент.

```typescript
let tuple = []; //you can initialize it after the declaration too, not just the method above 
 tuple[0] = 10; 
 tuple[1] = 'Mike'; 
 let number = tuple.length; 
 //number = 2; 
```

## Встроенные методы

В типе Typcript вы можете использовать некоторые встроенные функции. Каждый тип имеет общие и уникальные методы. Ниже вы можете прочитать о наиболее используемых методах типа tuple.

### поп ()

Удаляет последний элемент из кортежа.

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.pop(); 
 //tuple = [10,'Emma',11,'Lily',12,] 
 //We popped 'Mike Ross' from the tuple 
```

### От себя()

Добавляет элемент в конец кортежа.

```typescript
var tuple = [10,'Emma',11,'Lily',12,'Mike Ross']; 
 tuple.push('Rachel Zane'); 
 //tuple = [10,'Emma',11,'Lily',12,'Mike Ross','Rachel Zane'] 
```

[Дополнительная информация о кортежах на TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_tuples.htm)