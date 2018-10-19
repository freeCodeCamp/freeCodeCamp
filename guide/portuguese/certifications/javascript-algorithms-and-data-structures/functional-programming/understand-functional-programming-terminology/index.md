---
title: Understand Functional Programming Terminology
localeTitle: Entenda a terminologia de programação funcional
---
## Entenda a terminologia de programação funcional

### Método

Assim como no último desafio, você deve chamar o método `getTea` e armazená-lo em uma variável. Só que desta vez, você tem 2 variáveis ​​para armazenar 2 conjuntos separados de dados. Você verá que a função `getTea()` é a mesma de antes, só que agora leva 2 parâmetros separados. O primeiro parâmetro é uma função, portanto, precisaremos passar a função `prepareGreenTea()` ou a função `prepareBlackTea()` , seguida pelo segundo parâmetro `numOfCups` que pode ser inserido como um inteiro.

### Solução

Neste exercício, estamos atribuindo o resultado de uma função de ordem superior às variáveis. Para fazer isso, chamamos uma função com uma função de retorno de chamada como um parâmetro.

## Dica:

`javascript const basketOne = makeBasket(addFruit, 10)`

\## Solução:

\`\` \`javascript

/ \*\*

*   Um longo processo para preparar o chá verde.
*   @return {string} Uma xícara de chá verde. \*\* / const prepareGreenTea = () => 'greenTea';

/ \*\*

*   Obter determinado número de xícaras de chá.
    
*   @param {function (): string} prepareTea O tipo de função de preparação de chá.
    
*   @param {number} numOfCups Número de xícaras de chá necessárias.
    
*   @return {Matriz } Dada quantidade de xícaras de chá. \*\* / const getTea = (prepareTea, numOfCups) => { teaCups const = \[\];
    
    para (deixar xícaras = 1; xícaras <= numOfCups; xícaras + = 1) { const teaCup = prepareTea (); teaCups.push (teaCup); }
    
    retornar teaCups; };
    
    // Adicione seu código abaixo desta linha const tea4GreenTeamFCC = getTea (prepareGreenTea, 27); // :) const tea4BlackTeamFCC = getTea (prepareBlackTea, 13); // :) // Adicione seu código acima desta linha
    
    console.log ( tea4GreenTeamFCC, tea4BlackTeamFCC );
    
    \`\` \`
    

## Explicação de código:

Na solução acima, passamos as funções `prepareGreenTea()` e `prepareBlackTea()` como parâmetros ou funções de retorno de chamada para as funções `getTea()` estão sendo atribuídas às nossas duas variáveis ​​constantes `tea4BlackTeamFCC` e `tea4GreenTeamFCC` . Desta forma, nenhuma variável global é alterada e temos a opção de adicionar um número ilimitado de opções diferentes de métodos `prepareTea()` , já que é uma função de retorno de chamada passada para a função de ordem superior de `getTea()` .