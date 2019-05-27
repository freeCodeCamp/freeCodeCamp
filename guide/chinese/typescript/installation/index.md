---
title: Installation
localeTitle: 安装
---
## 安装

![安装](https://cdn-media-1.freecodecamp.org/imgr/9ILjA1q.jpg)

要自己开始，您需要的两件事是TypeScript编译器和支持TypeScript的编辑器。

在上面的屏幕截图中，我在[Visual Studio Code](https://code.visualstudio.com/)的集成终端中使用`npm`安装编译器和[TSLint](https://github.com/palantir/tslint) （类似于[ESLint](https://eslint.org/) ）。

### 安装TypeScript

此命令将使用[`npm`](https://www.npmjs.com/) （一种流行的包管理器）将TypeScript包作为依赖项安装在项目中。

```bash
npm i typescript 
```

_注意_ `npm`提供[了几个选项](https://docs.npmjs.com/cli/install) ，具体取决于您希望安装TypeScript的位置。

*   `npm i -g typescript`全局安装TypeScript包
*   `npm i -D typescript`将TypeScript包安装为dev依赖项

### TSLint

了解如何在**freeCodeCamp指南中的** [TypeScript](./) > [Linter上](./linter)为TypeScript设置linting选项。

### 将单个文件编译为JavaScript

```bash
tsc multiplication.ts 
```

_注意_您可以将此TypeScript编译过程配置为`package.json`的自定义npm脚本。

### 配置选项

```bash
touch tsconfig.json 
```

还可以选择创建指定根文件和编译器选项的[`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)文件。

例如，在[`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)文件中，您可以指定希望TypeScript编译为ES5而不是ES6。

### 快速示例

![乘法](https://cdn-media-1.freecodecamp.org/imgr/V5nP3xj.jpg)

在上面的屏幕截图中，您可以看到两个文件 - `multiplication.js`和`multiplication.ts` 。

这个程序只打印出我预先定义的两个数字的乘积。

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

一旦我完成了`multiplication.ts`创建，我可以使用`tsc`命令将其编译为JavaScript，该命令代表TypeScript编译。

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

Bam - 我刚刚成功地将TypeScript编译为JavaScript！