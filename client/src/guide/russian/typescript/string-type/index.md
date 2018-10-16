---
title: String Type
localeTitle: Строковый тип
---
# Строковый тип

Строки могут быть записаны с помощью `''` одиночных кавычек» или `""` двойных кавычек». Соблюдайте свой код и выбирайте стиль.

```typescript
let dog: string = 'Fido'; 
 let activity: string = "Playing Outside"; 
```

Строки могут быть написаны с использованием шаблонных литералов:

```typescript
let greeting: string = `Hello, ${firstName} ${lastName}, thank you for attending the ${eventName} event.`; 
```

## Встроенные методы

В типе Typcript вы можете использовать некоторые встроенные функции. Каждый тип имеет общие и уникальные методы. Ниже вы можете прочитать о наиболее используемых методах типа string.

### split ('separator', limit)

С функцией split вы можете разделить строку на указанный разделитель. Вы можете установить предельное число, это говорит о том, сколько разделов нужно делать. Разделенная строка возвращается в виде массива.

```typescript
let names: string = 'Sarah,Lily,John,Paula,Harvey'; 
 let array: string[] = names.split(','); 
 //array = ['Sarah','Lily','John','Paula','Harvey'] 
 let array2: string[] = names.split(',',2); 
 //array2 = ['Sarah','Lily'] 
```

### зиЬзЬг (startAt, длина)

Этот метод возвращает с подстрокой, которая начинается с `startAt` символа, а длина - это `length` .

```typescript
let names: string = 'Harvey Specter'; 
 let substr: string = names.substr(3,10); 
 //substr = 'rvey Spect' 
```

### подстрока (startAt, ENDAT)

Этот метод похож на substr (), но имеет разные параметры. Второй параметр также является индексом исходной строки, а не номером длины.

```typescript
let names: string = 'Harvey Specter'; 
 let substring: string = names.substring(3,10); 
 //substring = 'rvey Spe' 
```

[Дополнительные методы и описание в TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_strings.htm)