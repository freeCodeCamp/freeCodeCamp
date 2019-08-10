---
title: Installation
localeTitle: Instalação
---
## Instalação

![Instalação](https://cdn-media-1.freecodecamp.org/imgr/9ILjA1q.jpg)

Para começar você mesmo, as duas coisas que você precisará são o compilador de TypeScript e um editor que suporta TypeScript.

Na captura de tela acima, estou instalando o compilador e o [TSLint](https://github.com/palantir/tslint) (que é semelhante ao [ESLint](https://eslint.org/) ) usando `npm` no terminal integrado do [Visual Studio Code](https://code.visualstudio.com/) .

### Instalando o TypeScript

Este comando instalará o pacote TypeScript como uma dependência em seu projeto usando o [`npm`](https://www.npmjs.com/) que é um gerenciador de pacotes popular.

```bash
npm i typescript 
```

_Nota_ Existem [várias opções](https://docs.npmjs.com/cli/install) que o `npm` fornece dependendo de onde você deseja que o TypeScript seja instalado.

*   `npm i -g typescript` para instalar globalmente o pacote TypeScript
*   `npm i -D typescript` para instalar o pacote TypeScript como uma dependência dev

### TSLint

Veja como configurar as opções de lintagem do [TypeScript](./) em [TypeScript](./) > [Linter](./linter) no **Guia freeCodeCamp** .

### Compilando um único arquivo até o JavaScript

```bash
tsc multiplication.ts 
```

_Nota_ Você pode configurar este processo de compilação do TypeScript como um script npm personalizado no seu `package.json` .

### Opções de configuração

```bash
touch tsconfig.json 
```

Há também a opção de criar um arquivo [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) que especifica os arquivos raiz e as opções do compilador.

Em seu arquivo [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) , por exemplo, você pode especificar que você deseja que o TypeScript compile para ES5 em vez de ES6.

### Exemplo Rápido

![Multiplicação](https://cdn-media-1.freecodecamp.org/imgr/V5nP3xj.jpg)

Na imagem acima, você pode ver dois arquivos - `multiplication.js` e `multiplication.ts` .

Este programa apenas imprime o produto de dois números pré-definidos.

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

Depois que eu terminar de criar `multiplication.ts` , posso compilá-lo para baixo para JavaScript usando o `tsc` comando que significa compilação original datilografado.

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

Bam - Acabei de compilar com sucesso o TypeScript para JavaScript!