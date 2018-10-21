---
title: Grid System
localeTitle: Sistema de rede
---
## Sistema de rede

Em suma, o sistema de grade Bootstrap ajuda você a criar layouts responsivos, é composto por um sistema de linhas e colunas que ajuda a estruturar seu conteúdo.

As linhas são grupos horizontais de colunas, com um máximo de 12 colunas por linha. Dentro de cada linha, o conteúdo é colocado dentro das colunas e pode variar entre 1 a 12 colunas.

O Bootstrap tem cinco tipos diferentes de camadas de grade: Extra pequeno, Pequeno, Médio, Grande e Extra grande, há um ponto de interrupção definido para cada um desses níveis de grade.

O Bootstrap usa pixels para definir os pontos de interrupção da camada da grade, as diferentes larguras da janela de visualização que atuam como pontos de interrupção para as camadas da grade são:

#### Como funciona

###### Recipiente

O contêiner é o elemento mais externo que _conterá_ sua grade, use o `container` para um contêiner de largura fixa no meio da tela (margem extra em telas maiores) ou o `container-fluid` para largura total.
```
<div class="container"></div> 
```

###### Linha

Use a `row` para agrupar suas colunas, isso manterá tudo alinhado corretamente e ajudará a estruturar sua grade.
```
<div class="row"></div> 
```

###### Colunas

Classes de colunas indicam o número de colunas que você gostaria de usar, dentre as possíveis 12 por linha. Por exemplo, `col-sm-6` significaria que sua coluna usaria metade da largura da `row` em uma tela pequena, e `col-lg-4` consumiria um terço em uma tela grande.

Aqui está como você definiria um prefixo de classe para usar uma largura de coluna nos vários tamanhos de tela:

*   **Extra Pequeno** `col-1`
*   **Pequeno** `col-sm-1`
*   `col-md-1` **médio**
*   **Grande** `col-lg-1`
*   **Extra grande** `col-xl-1`
```
<div class="col-sm-1"></div> 
```

#### Exemplo

Uma grade de largura total com quatro colunas, cada uma ocupando uma linha completa em xs, meia linha em telas sm e md e um quarto da largura da linha em telas grandes e acima.
```
<div class="container-fluid"> 
  <div class="row"> 
    <div class="col-12 col-sm-6 col-lg-4">First Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div> 
  </div> 
 </div> 
```

_Note que `col-md` e `col-xl` não estão definidos, onde um tamanho não é definido, ele será padronizado até o próximo tamanho menor que foi especificado._

O Bootstrap fornece um sistema de grade de 12 colunas pronto para uso em layouts. Considere o seguinte código.

```html

   <div class="container"> 
    <div class="row"> 
        <div class="col-md-6">Content</div> 
        <div class="col-md-6">Content</div> 
    <div> 
   </div> 
```

Onde:
```
- col = column 
 - md = screen size 
 - 6 = column width 
```

Como um sistema de grade de 12 colunas, todas as larguras de colunas da grade definidas pelo usuário devem totalizar 12.

Os valores de tamanho da tela podem ser atribuídos da seguinte forma:

*   xs - <768px telefones
    
*   sm - <992px comprimidos
    
*   md - <1200px Laptops
    
*   lg -> desktops de 1200px
    
    O Bootstrap é móvel primeiro e responsivo.
    
    Móvel primeiro significa que o layout da grade responderá automaticamente a telas menores. O HTML define o layout da grade para telas maiores.
    

O código e a imagem a seguir mostram o que é possível usando diferentes larguras de coluna.

```html

    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-6">Content</div> 
            <div class="example col-md-6">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
        </div> 
    </div> 
```

![Grade 12-col](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)

#### Mais Informações:

[Bootstrap Docs - Sistema Grid](https://getbootstrap.com/docs/4.0/layout/grid/)

_Este guia é baseado no Bootstrap v4 (ele funcionará com a v3, exceto telas extras pequenas são definidas como `xs` e não há tamanho `xl` )_

*   Extra grande: **largura da janela de visualização> = 1200 px**
*   Grande: **largura da janela de visualização> = 992 px**
*   Médio: **largura da janela de visualização> = 768 px**
*   Pequeno: **largura da janela de visualização> = 576 px**
*   Extra pequeno: **larguras de porta de visualização abaixo de 576 px**

#### Mais Informações:

https://getbootstrap.com/docs/4.0/layout/grid/