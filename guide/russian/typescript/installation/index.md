---
title: Installation
localeTitle: Монтаж
---
## Монтаж

![Монтаж](https://cdn-media-1.freecodecamp.org/imgr/9ILjA1q.jpg)

Чтобы начать работу, вам потребуются два компилятора TypeScript и редактор, который поддерживает TypeScript.

На приведенном выше [снимке](https://github.com/palantir/tslint) экрана я устанавливаю как компилятор, так и [TSLint](https://github.com/palantir/tslint) (который похож на [ESLint](https://eslint.org/) ), используя `npm` в интегрированном терминале [Visual Studio Code](https://code.visualstudio.com/) .

### Установка TypeScript

Эта команда установит пакет TypeScript в качестве зависимости в вашем проекте, используя [`npm`](https://www.npmjs.com/) который является популярным менеджером пакетов.

```bash
npm i typescript 
```

_Примечание._ Существует [несколько опций](https://docs.npmjs.com/cli/install) , предоставляемых `npm` зависимости от того, где вы хотите установить TypeScript.

*   `npm i -g typescript` для глобальной установки пакета TypeScript
*   `npm i -D typescript` для установки пакета TypeScript в качестве зависимости dev

### TSLint

Посмотрите , как настроить параметры пылеобразования для Машинописи на [машинописи](./) > [ЛИНТЕРЕ](./linter) в **руководстве freeCodeCamp.**

### Компиляция одного файла с помощью JavaScript

```bash
tsc multiplication.ts 
```

_Примечание._ Вы можете сконфигурировать этот процесс компиляции TypeScript в качестве настраиваемого сценария npm в вашем `package.json` . `package.json` .

### Параметры конфигурации

```bash
touch tsconfig.json 
```

Также есть возможность создать файл [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) который указывает корневые файлы и параметры компилятора.

[`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) файле [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) вы можете указать, что TypeScript должен скомпилироваться с ES5 вместо ES6.

### Быстрый пример

![умножение](https://cdn-media-1.freecodecamp.org/imgr/V5nP3xj.jpg)

На скриншоте выше вы можете увидеть два файла - `multiplication.js` и `multiplication.ts` .

Эта программа просто распечатывает произведение двух чисел, которые я предварительно определил.

> `multiplication.ts`

```typescript
let a: number = 10; 
 let b: number = 2; 
 
 function showProduct(first: number, second: number): void { 
  console.info("Mathematical! The result is " + first * second + "."); 
 } 
 
 showProduct(a, b); 
 
 // Mathematical! The result is 20. 
```

Как только я закончил создание `multiplication.ts` , я могу скомпилировать его на JavaScript с помощью команды `tsc` которая означает компиляцию типа TypeScript.

> `multiplication.js`

```javascript
var a = 10; 
 var b = 2; 
 
 function showProduct(first, second) { 
    console.info("Mathematical! The result is " + first * second + "."); 
 } 
 
 showProduct(a, b); 
 
 // Mathematical! The result is 20. 
```

Bam - я просто скомпилировал TypeScript для JavaScript!