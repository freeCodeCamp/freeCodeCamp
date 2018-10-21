---
title: Known Issues with Codepen
localeTitle: Problemas conhecidos com Codepen
---
Os alunos do Free Code Camp são encorajados a usar o [Codepen.io](http://www.codepen.io/) para montar projetos, e o Codepen é um recurso fantástico para reunir rapidamente códigos utilizáveis. No entanto, o Codepen introduz um nível adicional de abstração no processo de depuração de código. Aqui estão alguns problemas conhecidos que podem te enganar no Codepen, se você não estiver ciente deles:

1.  **Problema de URL com tags de âncora:** CodePen substitui `<a href='URL'>` elementos de âncora, o que significa que você precisa adicionar um `target='_blank'` aos elementos de âncora - caso contrário, eles não funcionarão.
2.  **Problema do plug-in https:** a extensão do Chrome "HTTPS Everywhere" (criada pela [Electronic Frontiers Foundation](http://www.eff.org/) ) interfere nas chamadas do AJAX. Como a extensão usa automaticamente HTTPS, isso pode causar um erro de "conteúdo misto" que impede que os dados JSON / XML sejam carregados. Se você encontrar tal erro, certifique-se de que seus plugins não sejam os culpados. Opcionalmente, você pode usar o [crossorigin.me](http://crossorigin.me) como proxy.
3.  **imgur hotlinking:** Se você usar imagens de [http://imgur.com,](http://imgur.com) elas não aparecerão a maior parte do tempo, isso é devido a seus TOS. Uma maneira de resolver isso é usar um serviço alternativo como [http://postimg.org](http://postimg.org)
4.  **recarregamento automático:** por padrão, sempre que você fizer alterações nas janelas do editor HTML ou JS, a janela de visualização será atualizada. Você pode desativar isso e ativar um "botão Executar", indo para Configurações> Comportamento> "Quer um botão Executar?" e desmarcando a caixa.
5.  **location.reload:** Se você se deparar com um problema de seu código trabalhando na visualização de depuração ou no JSFiddle, mas não na visualização do editor do Codepen ou na visualização de página inteira, verifique novamente se você usou `location.reload()` . Se você fez, você tem que encontrar uma outra maneira de alcançar desejado, porque Codepen irá retirar `location.reload` e deixar apenas `()` em seu código. Leia mais [aqui:](https://blog.codepen.io/documentation/editor/things-we-strip/)
6.  **exibir imagens, adicionar arquivos css / js, hospedados no Github:** você pode querer incluir em sua folha de estilo do projeto Codepen, imagem ou arquivo js hospedado em um Github. Se você adicionar o link Github do seu arquivo às suas configurações no Codepen, ou ao seu html / css ele não funcionará fora da caixa. O que você precisa fazer é:
    1.  Vá para a versão "Raw" do arquivo
    2.  Copie o URL
    3.  Mude `raw.githubusercontent.com` para `rawgit.com`
    4.  usar essa URL para vincular a arquivos hospedados em um github