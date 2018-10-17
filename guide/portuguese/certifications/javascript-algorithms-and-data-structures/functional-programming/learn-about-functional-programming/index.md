---
title: Learn About Functional Programming
localeTitle: Aprenda sobre a programação funcional
---
## Aprenda sobre a programação funcional

Uma função tem uma entrada ou um parâmetro `const myFunc = (input) => { ...code to execute... }` . Neste caso, a entrada é quantas xícaras de chá devem ser criadas.  

### Método

Apenas uma linha de código deve ser alterada para passar esse desafio. A função `getTea()` deve ser chamada e armazenada na variável `tea4TeamFCC` . Certifique-se de ler a função `getTea()` e entender exatamente o que ela faz. A função recebe uma variável - `numOfCups` . Um array `teaCups[]` é criado primeiro e um loop for é configurado para contar o número de cups passados ​​para a função. Uma nova xícara de chá é então empurrada para o array a cada iteração do loop for.

Assim, resultando em um array cheio da quantidade de xícaras originalmente passadas para a função `getTea()` .

### Solução

```javascript
/** 
 * A long process to prepare tea. 
 * @return {string} A cup of tea. 
 **/ 
 const prepareTea = () => 'greenTea'; 
 
 /** 
 * Get given number of cups of tea. 
 * @param {number} numOfCups Number of required cups of tea. 
 * @return {Array<string>} Given amount of tea cups. 
 **/ 
 const getTea = (numOfCups) => { 
  const teaCups = []; 
 
  for(let cups = 1; cups <= numOfCups; cups += 1) { 
    const teaCup = prepareTea(); 
    teaCups.push(teaCup); 
  } 
 
  return teaCups; 
 }; 
 
 // Add your code below this line 
 
 const tea4TeamFCC = getTea(40); // :( 
 
 // Add your code above this line 
 
 console.log(tea4TeamFCC); 

```