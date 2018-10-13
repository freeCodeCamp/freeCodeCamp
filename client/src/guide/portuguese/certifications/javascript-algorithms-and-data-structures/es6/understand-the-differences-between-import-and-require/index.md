---
title: Understand the Differences Between import and require
localeTitle: Entenda as diferenças entre importar e exigir
---
## Entenda as diferenças entre importar e exigir

Vamos esclarecer: `require()` carrega o arquivo inteiro e seus componentes (funções, variáveis), enquanto `import _ from` permite que você escolha manualmente quais componentes você quer.

Nesta lição, você está encarregado de importar a função `capitalizeStrings()` , que vem do arquivo `"string-functions"` .

## Sugestão 1:

Preencha os espaços em branco: `import { function_name } from "file_name"` . O nome da sua função é `capitalizeStrings` e seu nome de arquivo é `"string-functions"` .

## Alerta de Spoiler - Solução à frente!

## Solução

```javascript
"use strict"; 
 import { capitalizeString } from "string-functions"; 
 capitalizeString("hello!"); 

```