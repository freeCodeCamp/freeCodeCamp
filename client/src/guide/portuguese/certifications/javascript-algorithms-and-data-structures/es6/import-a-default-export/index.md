---
title: Import a Default Export
localeTitle: Importar uma exportação padrão
---
## Importar uma exportação padrão

Importar um padrão de exportação é quase o mesmo que importar uma exportação normal; você simplesmente não precisa das chaves para definir o nome do que está importando do arquivo!

## Sugestão 1:

Preencha os espaços em branco: `import _ from "file-name"` . Conecte o nome do seu módulo (que é `subtract` ) em `_` e coloque `"math-functions"` em `"file-name"` .

## Alerta de Spoiler - Solução à frente!

## Solução:

```javascript
"use strict"; 
 import subtract from "math_functions"; 
 subtract(7,4); 

```