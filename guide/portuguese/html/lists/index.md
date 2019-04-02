---
title: Lists
localeTitle: Listas
---
# Listas

Listas são usadas para exibir itens. Existem 3 tipos de listas.

## Listas ordenadas

Uma _lista ordenada_ é usada para descrever uma coleta ordenada de dados. Os navegadores geralmente exibem uma lista ordenada como uma lista numerada. Crie uma lista ordenada usando a tag `<ol>` .

## Listas não ordenadas

Uma _lista não ordenada_ é usada para descrever uma coleção não ordenada de dados. Os navegadores geralmente exibem uma lista não ordenada como uma lista com marcadores. Crie uma lista não ordenada usando a tag `<ul>` .

## Lista de itens

Os filhos diretos de listas ordenadas e não ordenadas devem ser itens de lista. Cada item da lista é encapsulado em uma tag `<li>` . Uma tag de item de lista pode conter [conteúdo de fluxo](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content) .

## Exemplos

Uma lista ordenada é escrita como

```HTML
<ol> 
  <li>January</li> 
  <li>February</li> 
  <li>March</li> 
 </ol> 
```

e é exibido como:

1.  janeiro
2.  fevereiro
3.  marcha

Uma lista não ordenada é escrita como

```HTML
<ul> 
  <li>Macintosh</li> 
  <li>Fuji</li> 
  <li>Gala</li> 
 </ul> 
```

e é exibido como:

*   Macintosh
*   Fuji
*   Gala

## Styling Bulletpoints

Uma lista ordenada pode ser usada para uma variedade de funções e em vários estilos. Como a mudança das cores de tag abrangente não altera a cor das próprias marcas, é possível estilizá-las removendo primeiro as marcas pretas tradicionais e inserindo as suas próprias:

Remover marcadores:

```CSS
ul { 
  list-style: none; 
  } 
```

Insira seu próprio:

```CSS
ul li::before { 
  content: "\2022"; 
  color: orange; 
  display: inline-block; 
  width: 1em; 
  } 
```

O estilo de conteúdo adiciona um novo bulletpoint enquanto o estilo display e width cria um espaço entre o marcador e a palavra. Estilos de fonte regulares podem ser aplicados aqui se você quiser deixar a marca maior ou mais ousada.

## Listas de descrição

Uma lista de descrições é uma lista de termos, com uma descrição de cada termo. Uma lista de descrições é feita usando a tag `<dl>` . Cada item na lista é composto de duas tags: um termo `<dt>` e uma descrição desse termo `<dd>` . Eles são chamados de listas de definição em HTML 4.

Aqui está um exemplo de uma lista de descrição:

```HTML
<dl> 
  <dt>Programming</dt> 
  <dd>The process of writing computer programs.</dd> 
  <dt>freeCodeCamp</dt> 
  <dd>An awesome non-profit organization teaching people how to code.</dd> 
 </dl> 
```

o que acabaria parecendo:

Programação

O processo de escrever programas de computador.

freeCodeCamp

Uma incrível organização sem fins lucrativos que ensina as pessoas a codificar.

## Mais Informações:

*   [Listas de HTML em w3schools](https://www.w3schools.com/html/html_lists.asp)