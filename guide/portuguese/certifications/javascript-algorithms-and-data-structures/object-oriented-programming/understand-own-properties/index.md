---
title: Understand Own Properties
localeTitle: Compreenda as propriedades próprias
---
## Compreenda as propriedades próprias

### Método:

No código de exemplo fornecido, você verá uma nova matriz `ownProps[]` intialised seguida por uma instrução `for...in` para percorrer as propriedades de `duck` e, em seguida, usar uma instrução `push()` para preencher a nova matriz. O mesmo método deve ser seguido para o objeto `canary` .

Simplesmente substitua o objeto `duck` na instrução 'for… in' pelo objeto `canary` para passar todos os casos de teste.

### Solução:

```javascript
let canary = new Bird("Tweety"); 
 let ownProps = []; 
 // Add your code below this line 
 for(let property in canary) { 
  if(canary.hasOwnProperty(property)) { 
    ownProps.push(property); 
  } 
 } 

```