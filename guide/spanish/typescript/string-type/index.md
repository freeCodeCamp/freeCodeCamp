---
title: String Type
localeTitle: Tipo de cadena
---
# Tipo de cadena

Las cadenas se pueden escribir con `''` comillas simples o `""` comillas dobles. Sea consistente con su código y elija un estilo.

```typescript
let dog: string = 'Fido'; 
 let activity: string = "Playing Outside"; 
```

Las cadenas se pueden escribir usando literales de plantilla:

```typescript
let greeting: string = `Hello, ${firstName} ${lastName}, thank you for attending the ${eventName} event.`; 
```

## Métodos incorporados

En el tipo de Typescript puedes usar algunas funciones incorporadas. Cada tipo tiene métodos comunes y únicos. A continuación puede leer sobre los métodos más utilizados de los tipos de cadena.

### dividir ('separador', límite)

Con la función de división, puede dividir su cadena en un separador específico. Puede establecer un número límite, eso dice cuántas divisiones tienen que hacer. La cadena dividida devuelve en un tipo de matriz.

```typescript
let names: string = 'Sarah,Lily,John,Paula,Harvey'; 
 let array: string[] = names.split(','); 
 //array = ['Sarah','Lily','John','Paula','Harvey'] 
 let array2: string[] = names.split(',',2); 
 //array2 = ['Sarah','Lily'] 
```

### substr (startAt, longitud)

Este método devuelve con una subcadena, que se `startAt` en el carácter `startAt` de la cadena original, y su longitud es la `length` .

```typescript
let names: string = 'Harvey Specter'; 
 let substr: string = names.substr(3,10); 
 //substr = 'rvey Spect' 
```

### subcadena (startAt, endAt)

Este método es similar a substr (), pero tiene diferentes parámetros. El segundo parámetro es también un índice sobre la cadena original, no un número de longitud.

```typescript
let names: string = 'Harvey Specter'; 
 let substring: string = names.substring(3,10); 
 //substring = 'rvey Spe' 
```

[Más métodos y descripción en TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_strings.htm)