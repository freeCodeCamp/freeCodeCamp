---
title: How to Use Lists
localeTitle: Como usar listas
---
## Como usar listas

As listas são usadas para especificar um conjunto de itens consecutivos ou informações relacionadas de maneira bem formada e semântica, como uma lista de ingredientes ou uma lista de etapas processuais. A marcação HTML tem três tipos diferentes de listas - listas **ordenadas** , não **ordenadas** e de **descrição** .

### Listas ordenadas

Uma lista ordenada é usada para agrupar um conjunto de itens relacionados, em uma ordem específica. Esta lista é criada com a tag `<ol>` . Cada item da lista é cercado pela tag `<li>` .

##### Código

```html

<ol> 
    <li>Mix ingredients</li> 
    <li>Bake in oven for an hour</li> 
    <li>Allow to stand for ten minutes</li> 
 </ol> 
```

##### Exemplo

1.  Misture os ingredientes
2.  Asse no forno por uma hora
3.  Deixe repousar por dez minutos

### Listas não ordenadas

Uma lista não ordenada é usada para agrupar um conjunto de itens relacionados, em nenhuma ordem específica. Esta lista é criada com a tag `<ul>` . Cada item da lista é cercado pela tag `<li>` .

##### Código

```html

<ul> 
    <li>Chocolate Cake</li> 
    <li>Black Forest Cake</li> 
    <li>Pineapple Cake</li> 
 </ul> 
```

#### Exemplo

*   Bolo de chocolate
*   Bolo floresta negra
*   Bolo de abacaxi

### Descrição Listas

Uma lista de descrição é usada para especificar uma lista de termos e suas descrições. Esta lista é criada com a tag `<dl>` . Cada item da lista é cercado pela tag `<dd>` .

##### Código

```html

<dl> 
    <dt>Bread</dt> 
    <dd>A baked food made of flour.</dd> 
    <dt>Coffee</dt> 
    <dd>A drink made from roasted coffee beans.</dd> 
 </dl> 
```

##### Saída

Pão

Um alimento assado feito de farinha.

Café

Uma bebida feita a partir de grãos de café torrados.

#### Lista de estilo

Você também pode controlar o estilo da lista. Você pode usar `list-style` propriedade de listas de `list-style` . Sua lista pode ser marcadores, quadrados, números numéricos ou imagens que você deseja.

`list-style` propriedade `list-style` é uma abreviação para `list-style-type` , `list-style-position` e `list-style-image` .

#### Mais Informações:

\[Listas HTML · Documentos WebPlatform\] (https://webplatform.github.io/docs/guides/html\_lists/ )