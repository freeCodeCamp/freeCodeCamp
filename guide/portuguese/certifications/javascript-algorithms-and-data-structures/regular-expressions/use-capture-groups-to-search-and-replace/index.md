---
title: Use Capture Groups to Search and Replace
localeTitle: Use grupos de captura para pesquisar e substituir
---
## Use grupos de captura para pesquisar e substituir

Usando `.replace()` com o primeiro conjunto de parâmetros para localizar a parte da string original a ser substituída, e o segundo parâmetro deve ser a substituição.

## Sugestão 1:

Modifique o regex para que o `fixRegex` detecte a parte da string a ser substituída e a variável `replaceText` seja modificada para a string que irá substituir o `fixRegex` .

## Alerta de Spoiler - Solução à frente!

## Solução

```javascript
let huhText = "This sandwich is good."; 
 let fixRegex = /good/; // Change this line 
 let replaceText = "okey-dokey"; // Change this line 
 let result = huhText.replace(fixRegex, replaceText); 

```