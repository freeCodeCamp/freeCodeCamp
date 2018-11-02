---
title: String Type
localeTitle: Tipo de String
---
# Tipo de String

Seqüências de caracteres podem ser escritas com `''` aspas simples ou `""` aspas duplas. Seja consistente com seu código e escolha um estilo.

```typescript
let dog: string = 'Fido'; 
 let activity: string = "Playing Outside"; 
```

Seqüências de caracteres podem ser escritas usando literais de modelo:

```typescript
let greeting: string = `Hello, ${firstName} ${lastName}, thank you for attending the ${eventName} event.`; 
```

## Métodos embutidos

No tipo do Datilografe você pode usar algumas funções internas. Cada tipo tem métodos comuns e exclusivos. Abaixo você pode ler sobre os mais usados ​​dos métodos do tipo string.

### dividir ('separador', limite)

Com a função split, você pode dividir sua string em um separador especificado. Você pode definir um número limite, isso indica quantas divisões precisam ser feitas. A string dividida retorna em um tipo de matriz.

```typescript
let names: string = 'Sarah,Lily,John,Paula,Harvey'; 
 let array: string[] = names.split(','); 
 //array = ['Sarah','Lily','John','Paula','Harvey'] 
 let array2: string[] = names.split(',',2); 
 //array2 = ['Sarah','Lily'] 
```

### substr (startAt, length)

Esse método retorna com uma substring, que estrela o caractere `startAt` da string original e seu comprimento é `length` .

```typescript
let names: string = 'Harvey Specter'; 
 let substr: string = names.substr(3,10); 
 //substr = 'rvey Spect' 
```

### substring (startAt, endAt)

Esse método é semelhante ao substr (), mas possui parâmetros diferentes. O segundo parâmetro também é um índice sobre a string original, não um número de comprimento.

```typescript
let names: string = 'Harvey Specter'; 
 let substring: string = names.substring(3,10); 
 //substring = 'rvey Spe' 
```

[Mais métodos e descrição no TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_strings.htm)