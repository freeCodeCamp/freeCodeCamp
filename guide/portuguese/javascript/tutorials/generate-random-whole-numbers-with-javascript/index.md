---
title: Generate Random Whole Numbers with JavaScript
localeTitle: Gere números inteiros aleatórios com JavaScript
---
É ótimo podermos criar números decimais aleatórios, mas é ainda mais útil se formos muito mais úteis para gerar um número inteiro aleatório.

Para conseguir isso, podemos multiplicar o número aleatório por dez e usar o `Math.floor()` para converter o número decimal em um número inteiro
```
Math.floor(Math.random()*10) 

```