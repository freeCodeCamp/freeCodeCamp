---
title: Installation
localeTitle: Instalación
---
## Instalación

![Instalación](https://cdn-media-1.freecodecamp.org/imgr/9ILjA1q.jpg)

Para comenzar, las dos cosas que necesitará son el compilador de TypeScript y un editor que admita TypeScript.

En la captura de pantalla anterior, estoy instalando el compilador y [TSLint](https://github.com/palantir/tslint) (que es similar a [ESLint](https://eslint.org/) ) usando `npm` en el terminal integrado de [Visual Studio Code](https://code.visualstudio.com/) .

### Instalación de TypeScript

Este comando instalará el paquete de TypeScript como una dependencia en su proyecto usando [`npm`](https://www.npmjs.com/) que es un administrador de paquetes popular.

```bash
npm i typescript 
```

_Para tener en cuenta_ Hay [varias opciones](https://docs.npmjs.com/cli/install) que proporciona `npm` según el lugar donde desee instalar TypeScript.

*   `npm i -g typescript` para instalar globalmente el paquete TypeScript
*   `npm i -D typescript` para instalar el paquete de TypeScript como una dependencia de desarrollo

### TSLint

Vea cómo configurar las opciones de linting para TypeScript en [TypeScript](./) > [Linter](./linter) dentro de la **Guía freeCodeCamp** .

### Compilando un solo archivo a JavaScript

```bash
tsc multiplication.ts 
```

_Nota_ : Puede configurar este proceso de compilación de TypeScript como un script npm personalizado en su `package.json` .

### Opciones de configuración

```bash
touch tsconfig.json 
```

También existe la opción de crear un archivo [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) que especifique los archivos raíz y las opciones del compilador.

Dentro de su archivo [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) , por ejemplo, puede especificar que desea que TypeScript se compile en ES5 en lugar de ES6.

### Ejemplo rápido

![Multiplicación](https://cdn-media-1.freecodecamp.org/imgr/V5nP3xj.jpg)

En la captura de pantalla anterior, puede ver dos archivos: `multiplication.js` y `multiplication.ts` .

Este programa simplemente imprime el producto de dos números que he predefinido.

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

Una vez que haya terminado de crear `multiplication.ts` , puedo compilarlo en JavaScript utilizando el comando `tsc` que significa compilación de TypeScript.

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

Bam - ¡Acabo de compilar TypeScript a JavaScript con éxito!