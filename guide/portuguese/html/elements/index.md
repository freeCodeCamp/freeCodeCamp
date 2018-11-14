---
title: Elements
localeTitle: Elementos
---
# Elementos HTML

Elementos são os blocos de construção do HTML que descrevem a estrutura e o conteúdo de uma página da web. Eles são a parte "Markup" do HyperText Markup Language (HTML).

A sintaxe HTML usa os colchetes angulares ("<" e ">") para manter o nome de um elemento HTML. Os elementos geralmente têm uma tag de abertura e uma tag de fechamento e fornecem informações sobre o conteúdo que contêm. A diferença entre os dois é que a tag de fechamento tem uma barra.

Aqui está um exemplo usando o [elemento p](#) ( `<p>` ) para informar ao navegador que um grupo de texto é um parágrafo:

```html

<p>This is a paragraph.</p> 
```

As tags de abertura e fechamento devem corresponder, caso contrário, o navegador pode exibir conteúdo de maneira inesperada.

![Quadrinhos XKCD mostrando o texto "Q: Como você incomoda um desenvolvedor?" cercado por uma tag div de abertura e tag span de fechamento](http://imgs.xkcd.com/comics/tags.png)

## Elementos de fechamento automático

Alguns elementos HTML são de fechamento automático, o que significa que eles não têm uma tag de fechamento separada. Elementos de fechamento automático normalmente inserem algo em seu documento.

Um exemplo é o [elemento br](#) ( `<br>` ), que insere uma quebra de linha no texto. Anteriormente, as tags de fechamento automático tinham a barra invertida ( `<br />` ), no entanto, a especificação HTML5 não exige mais isso.

## Funcionalidade de Elemento HTML

Existem muitos elementos HTML disponíveis. Aqui está uma lista de algumas das funções que eles executam:

*   dar informações sobre a própria página da web (os metadados)
*   estruturar o conteúdo da página em seções
*   incorporar imagens, vídeos, clipes de áudio ou outros recursos multimídia
*   criar listas, tabelas e formulários
*   dar mais informações sobre determinado conteúdo de texto
*   link para folhas de estilo que têm regras sobre como o navegador deve exibir a página
*   adicionar scripts para tornar uma página mais interativa e dinâmica

## Aninhando Elementos HTML

Você pode aninhar elementos dentro de outros elementos em um documento HTML. Isso ajuda a definir a estrutura da página. Apenas certifique-se de que as tags fechem primeiro do elemento mais interno.

Corrigir: `<p>This is a paragraph that contains a <span>span element.</span></p>`

Incorreta: `<p>This is a paragraph that contains a <span>span element.</p></span>`

## Elementos em bloco e inline

Os elementos vêm em duas categorias gerais, conhecidas como nível de bloco e inline. Os elementos no nível do bloco iniciam automaticamente em uma nova linha, enquanto os elementos incorporados ficam no conteúdo ao redor.

Os elementos que ajudam a estruturar a página em seções, como uma barra de navegação, títulos e parágrafos, geralmente são elementos no nível do bloco. Elementos que inserem ou fornecem mais informações sobre o conteúdo são geralmente inline, como [links](#) ou [imagens](#) .

## O elemento HTML

Há um elemento `<html>` que é usado para conter a outra marcação para um documento HTML. Também é conhecido como o elemento "raiz" porque é o pai dos outros elementos HTML e o conteúdo de uma página.

Aqui está um exemplo de uma página com um [elemento head](#the-head-element) , um [elemento body](#the-body-element) e um [parágrafo](#the-p-element) :

```html

<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>I'm a paragraph</p> 
  </body> 
 </html> 
```

## O elemento HEAD

Este é o contêiner para processar informações e metadados para um documento HTML.

```html

<head> 
  <meta charset="utf-8"> 
 </head> 
```

## O elemento BODY

Este é o contêiner para o conteúdo exibível de um documento HTML.

```html

<body>...</body> 
```

## O elemento P

Cria um parágrafo, talvez o elemento de nível de bloco mais comum.

```html

<p>...</p> 
```

## O elemento A (link)

Cria um hiperlink para direcionar visitantes para outra página ou recurso.

```html

<a href="#">...</a> 
```

## Outros recursos

*   [Parágrafos HTML](#)
*   [HTML br](#)
*   [Links HTML](#)
*   [Imagens HTML](#)
*   [HTML Head](#)
*   [Corpo HTML](#)
*   [DOCTYPE HTML](#)