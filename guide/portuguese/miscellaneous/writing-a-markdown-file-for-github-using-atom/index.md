---
title: Writing a Markdown File for Github Using Atom
localeTitle: Escrevendo um arquivo Markdown para o Github usando o Atom
---
O Markdown é uma maneira de estilizar o texto na Web, e os usuários do GitHub usam o markdown para fornecer documentação para seus repositórios.

Dos [guias do GitHub](https://guides.github.com/features/mastering-markdown/) :

> Você controla a exibição do documento; formatar palavras em negrito ou itálico, adicionar imagens e criar listas são apenas algumas das coisas que podemos fazer com o Markdown. Principalmente, o Markdown é apenas um texto normal com alguns caracteres não alfabéticos, como # ou \*.
> 
> Você pode usar o Markdown na maioria dos lugares ao redor do GitHub:
> 
> *   Essência
> *   Comentários em problemas e solicitações de solicitação
> *   Arquivos com a extensão .md ou .markdown
> 
> Os arquivos Markdown têm a extensão `.md` e você verá que um vasto número de repositórios do GitHub possui arquivos `README.md` .

Um ótimo exemplo é que, se você quiser escrever um arquivo Wiki para esse repositório, ele precisará ser um arquivo `.md` . O que você está lendo agora é um arquivo de `writing-a-markdown-file-using-atom.md` chamado `writing-a-markdown-file-using-atom.md` .

Os arquivos de marcação são fáceis de escrever e você pode encontrar uma lista de dicas sobre descontos [aqui](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) .

## Criando um arquivo leia-me no GitHub

Você pode compor um arquivo README.md no próprio GitHub:

![captura de tela 2016-02-29 às 18 07 19](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9a1d7f226df87df437f616fcaf5b7adcf02c8e87.png)

Isso permite que você alterne entre as visualizações "Editar novo arquivo" e "Visualizar":

![captura de tela 2016-02-29 às 18 06 24](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e0b3ddb69c3f2c32c0c7e73f1b1d196a54f03c21.png)

Isso é ideal se o arquivo readme for pequeno e você não se importar em alternar entre as duas visualizações.

Mas e se o seu arquivo `.md` não for um leia-me e você quiser o luxo de trabalhar em um editor de texto e uma visualização ao vivo de como seu texto se parece ao mesmo tempo em que você o edita?

## Escrevendo arquivos Markdown com o Atom

Se você estiver escrevendo um arquivo de marcação longo ou detalhado, será útil obter uma visualização ao vivo de como é exatamente o markdown, da mesma forma que você pode usar os recursos de atualização ao vivo para atualizar seu navegador se estiver trabalhando em um projeto que usa HTML e CSS, por exemplo.

Uma boa maneira de criar um arquivo de marcação usa o [editor de texto Atom](https://atom.io/) . Você pode instalar e usar o Atom gratuitamente.

Atom, como outros editores de texto, faz uso de pacotes, que são pedaços de código que permitem personalizar seu fluxo de trabalho.  
1\. Primeiramente, você desejará instalar o editor de texto Atom [aqui](https://atom.io/) .  
2\. Quando o Atom estiver instalado, abra-o e abra um novo arquivo com uma extensão `.md` .  
3\. Para ver sua visualização ao vivo, clique com o botão direito do mouse no arquivo `.md` no explorador à esquerda e, em seguida, selecione a opção superior, 'Visualização de Markdown':

![captura de tela 2016-02-29 às 18 17 30](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ea3746446180c0e0ad2bb61f30a6c3ad8bc25c57.png)

Legal! Agora você deve ver dois painéis no Atom. À esquerda está o seu texto, e à direita está a sua marcação "compilada", ou seja, o que pode parecer no GitHub:

![captura de tela 2016-02-29 em 18 21 38](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a1f27aa8afe060e252f245ced3456f196c85ef1b.png)

Observe que o Atom também reconhece o que você está trabalhando para ter um formato específico, ou seja, 'GitHub Markdown':

![captura de tela 2016-02-29 às 19 15 43](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf5b2fc473c32a14a2de302fd88e4c2edde02453.png)

1.  Quando o seu arquivo de remarcação está pronto para se comprometer com o seu repositório GitHub, você pode ir em frente e comprometê-lo!

Para contribuir com o wiki FreeCodeCamp, acesse [esta página](https://github.com/FreeCodeCamp/freecodecamp/wiki) e confira a seção 'Guias sobre como contribuir'.

Para adicionar um projeto ou arquivos ao GitHub, acesse [esta página](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) .

**Etapa de bônus: o** Atom tem um pacote chamado [Markdown Preview Plus](https://atom.io/packages/markdown-preview-plus) . Ele faz o mesmo que o pré-visualizador de marcação normal, mas o arquivo de visualização é estilizado com mais precisão para o estilo do GitHub. Vá em frente e instale este pacote e veja o que você recebe.