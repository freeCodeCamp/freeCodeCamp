---
title: Clear Specific Values from Your Browser Local Storage
localeTitle: Limpar valores específicos do armazenamento local do seu navegador
---
A remoção de valores específicos do armazenamento local do seu navegador resolverá muitos problemas relacionados ao travamento ou congelamento do navegador no FreeCodeCamp.

Isso resolve, por exemplo, um problema comum com o navegador saindo na página de um desafio após salvar uma resposta com um loop infinito.

Quando isso acontece, você deve excluir o valor em `localStorage` armazenando essa resposta.

## No Chrome:

*   No **freecodecamp.com** , abra suas ferramentas de desenvolvedor.
    
    *   Mais ferramentas> Ferramentas para desenvolvedores (ou `Ctrl` + `Shift` + `I` (Windows), `Cmd` + `Opt` + `I` (Mac))
*   Navegue até a guia `Resources`
    
*   Expanda o item `Local Storage` no painel esquerdo
    
*   Selecione `http://www.freecodecamp.com`
    
*   Encontre o desafio que você deseja excluir dados no painel direito ![Encontrando uma chave nas ferramentas do desenvolvedor do localStorage Chrome](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8300d3dfcf8a07bc3c1f69e7dd730d99e353972d.png)
    
*   Clique com o botão direito no desafio desejado e selecione `Delete`
    

## No Firefox:

*   Em **freecodecamp.com** , abra seu console da web com
    
    *   `Ctrl` + `Shift` + `K`
*   De lá, usando diretamente o console:
    
    *   Digite `console.log(localStorage);` e pressione `Enter` .
        
    *   Clique no link `Storage` . ![Imprima o Objeto localStorage no console da web e mostre o Storage](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e3778d1c24e9da6fe506564405b5b1ebc11facc1.png)
        
    *   O painel **Armazenamento** aparecerá à direita.
        
    *   Filtre os resultados para encontrar o Algoritmo, o Projeto Front End ou o Desafio que está causando o problema.
        
    *   Quando localizado, passe o mouse sobre ele e clique no `x` à direita. ![Clique no x para excluir a entrada de valor.](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a309e8ec8d92301f3507001ca3a796009d0a00d8.png)
        
    *   Uma vez removido, verifique se o problema foi resolvido. Atualize ou feche e abra o navegador, se necessário.
        

**Nota:** Isso também pode ser feito com o [Storage Inspector](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector) , mas parece que o Firefox fica suspenso quando há muitos valores.