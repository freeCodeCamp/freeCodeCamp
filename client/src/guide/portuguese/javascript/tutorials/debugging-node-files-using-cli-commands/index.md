---
title: Debugging Node files using CLI commands
localeTitle: Depurando Arquivos de Nó Usando Comandos CLI
---
## Depurando Arquivos de Nó Usando Comandos CLI

Neste tutorial, você aprenderá como depurar seu código Node.js na linha de comando. Seu código JavaScript simples pode ser facilmente depurado usando o DevTools de um navegador. Para o Node, você pode depurar seu código sem sair da sua interface de linha de comando (CLI).

Digamos que você tenha um arquivo chamado `contents.js` . Você executaria o arquivo usando o comando `node` .

```bash
node contents.js 
```

Isso já deve ser conhecido por você desde que você está escrevendo o código Node.js. Agora, qualquer erro que apareça deve ser depurado. Para executar o arquivo no modo de depuração, anexe a palavra-chave `inspect` enquanto executa o arquivo.

```bash
node inspect contents.js 
```

Agora este comando irá abrir seu arquivo no modo de depuração. A partir daqui, você pode percorrer o seu código uma linha de cada vez, pressionando a tecla **N** do seu teclado.

O depurador iniciará na primeira linha. Ao pressionar **N** , você pode mover o depurador para a próxima linha. Se houvesse um erro na primeira linha, ele mostraria um erro em vez de passar para a segunda linha. Isso é muito útil. Se, por exemplo, houver um erro na 17ª linha, ele mostrará o erro antes de avançar.

Pode haver um erro em sua lógica, ou seja, você deseja que um determinado valor seja exibido, mas, em vez disso, mostra um valor diferente. Nesse caso, adicionar `console.log()` pode ajudar você e, com o modo de depuração, ficará mais fácil identificar a causa do erro.

* * *

Agora, às vezes, acontece que o seu código-fonte é enorme. Você entra no modo de depuração para depurar seus erros e tem certeza de que o erro é de uma função na linha 52. Mas como o modo de depuração inicia na linha 1, você não tem escolha senão visitar a linha 52, um por um? Absolutamente não!

Basta adicionar o `debugger` palavras-chave antes da função.

```javascript
console.log("Outside the function....everything's going smoothly"); 
 
 debugger; 
 
 function doesSomething() { 
    //some logic 
    console.log("Something went wrong inside here!"); 
 } 
```

Agora abra o arquivo novamente no modo de depuração e desta vez pressione **C** no seu teclado.

Pressionar **N** move o depurador para a próxima linha e pressionar **C** diz ao depurador para percorrer todo o código de uma só vez. Isso é o mesmo que executar sem o modo de depuração. _Mas_ , seu código tem uma adição neste momento. Você adivinhou - a palavra-chave do `debugger` . Pressionar **C** normalmente executaria o código até o final, mas, por causa da adição do `debugger` , ele parará logo antes do início da função.

Portanto, depois de executar seu arquivo no modo de depuração, pressionar **C** irá ignorar o código e parar exatamente antes da função na palavra-chave do `debugger` . Depois disso, você pode começar a percorrer a função uma linha por vez até identificar o erro.