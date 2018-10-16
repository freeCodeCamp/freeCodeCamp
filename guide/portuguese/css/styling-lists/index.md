---
title: Styling Lists
localeTitle: Listas de estilo
---
## Listas de estilo

### Recapitulação de listas de HTML

Existem dois tipos principais de listas em HTML - **Ordered** e **Unordered** .

Em listas **ordenadas** ( `<ol></ol>` ), a ordem dos itens da lista é importante. Os itens podem aparecer em ordem por número, numeral romano, numeral alfa ou outro tipo de marcador. O marcador padrão para listas ordenadas é um número (ou `decimal` ):

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/ordered-list.png?raw=true "lista ordenada")

Em listas não **ordenadas** ( `<ul></ul>` ), a ordem dos itens da lista não importa. Os itens aparecem em formato de marcador. O marcador padrão para listas não ordenadas é um ponto ou `disc` arredondado.

> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/unordered-list.png?raw=true "lista não ordenada")

Cada item da lista em uma lista ordenada ou não ordenada é criado com a tag `<li></li>` .

### Estilos Específicos da Lista

Existem três propriedades comuns específicas para listas de estilo: `list-style-type` , `list-style-position` e `list-style-image` . Há também uma propriedade abreviada que inclui todos os três.

#### `list-style-type`

Os marcadores (ou marcadores) que aparecem em listas ordenadas e não ordenadas podem ser estilizados de várias maneiras. A propriedade CSS para estilizar o tipo de marcador é do tipo `list-style-type` . O valor do `list-style-type` padrão para uma lista ordenada é `decimal` , enquanto o padrão para uma lista não ordenada é `disc` .

Exemplo de lista ordenada:

> ```css
> /* css */ 
>  ol { 
>   list-style-type: upper-roman; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-upper-roman.png?raw=true "lista-estilo-tipo upper-roman")

Exemplo de lista não ordenada:

> ```css
> /* css */ 
>  ul { 
>   list-style-type: square; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-square.png?raw=true "quadrado do tipo lista de estilo")

Nenhum exemplo de marcador:

> ```css
> /* css */ 
>  ul { 
>   list-style-type: none; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-type-none.png?raw=true "list-style-type nenhum")

Os valores aceitos para a propriedade de `list-style-type` incluem:

_Não ordenado:_

*   disco ( _padrão_ )
*   círculo
*   quadrado

_Pedido:_

*   decimal ( _padrão_ )
*   decimal-principal-zero
*   baixo-romano
*   romano superior
*   grego inferior
*   latim inferior
*   latim superior
*   armênio
*   georgiano
*   alfa-inferior
*   alfa superior

_De outros:_

*   Nenhum

Nota: todos os valores de propriedade listados acima podem ser usados ​​para estilizar listas ordenadas e não ordenadas (ex: uma lista ordenada com marcadores de lista `square` ).

#### `list-style-position`

`list-style-position` controla se o marcador de lista aparece dentro ou fora de cada elemento do item de lista ( `<li></li>` ). A propriedade aceita dois valores, `outside` (padrão) ou `inside` .

Posicione o marcador `outside` do elemento do item da lista e todas as linhas de texto e sub-linhas de cada item da lista serão alinhadas verticalmente:

> ```css
> /* css */ 
>  ul { 
>   list-style-position: outside; /* default */ 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-outside.png?raw=true "posição de estilo de lista fora")

Posicione o marcador `inside` e a primeira linha de texto de cada item da lista será recuada para dar espaço ao marcador. Quaisquer sub-linhas do mesmo item da lista serão alinhadas com o marcador em vez da primeira linha de texto:

> ```css
> /* css */ 
>  ul { 
>   list-style-position: inside; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-position-inside.png?raw=true "posição de estilo de lista dentro")

#### `list-style-image`

A propriedade `list-style-image` aceita uma URL de imagem no lugar do marcador de lista. O valor padrão para essa propriedade é `none` .

> ```css
> /* css */ 
>  ul { 
>   list-style-image: url(https://url-to-image); 
>  } 
> 
> ```

#### taquigrafia de `list-style`

`list-style` é uma propriedade abreviada para as três propriedades de estilo listadas acima. A ordem de valores que o `list-style` aceita é `list-style-type` `list-style-position` , `list-style-position` `list-style-image` e `list-style-image` . Se algum valor for omitido, o valor padrão para essa propriedade será usado.

> Exemplo:
> 
> ```css
> /* css */ 
>  ul { 
>   list-style: circle inside none; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-shorthand.png?raw=true "taquigrafia em estilo de lista")

#### Mais estilo específico de lista

As tags de lista ordenada também aceitam atributos que controlam os valores de fluxo, contagem ou marcador específico de seus itens de lista. Estes incluem os atributos `start` , `reversed` e `value` . Veja os recursos do MDN listados abaixo para mais detalhes.

### Estilo geral

O conteúdo da lista pode ser estilizado como outros elementos `p` ou `div` . `color` , `font-family` , `margin` , `padding` ou `border` são apenas alguns exemplos de propriedades que podem ser adicionadas aos elementos `ul` , `ol` ou `li` .

Observe que qualquer estilo adicionado ao elemento `ul` ou `ol` afetará a lista inteira. Os estilos adicionados diretamente aos elementos `li` afetarão os itens da lista individual. No exemplo abaixo, as propriedades border e background-color são estilizadas de maneira diferente entre os elementos list e list item:

> ```css
> /* css */ 
>  ul { 
>   list-style-type: circle; 
>   border: 2px solid blue; 
>   background-color: lightblue; 
>  } 
>  li { 
>   margin: 5px; 
>   background-color: lightyellow; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-styles.png?raw=true "estilo geral de estilo de lista")

#### Espaçamento de lista

Você pode notar um espaçamento extra na frente dos itens da lista quando o `list-style-type` está definido como `none` . Definir o `padding` como `0` (ou seja qual for o espaçamento preferido) no elemento da lista substituirá esse preenchimento padrão.

> ```css
> /* css */ 
>  ul { 
>   list-style: none; 
>   padding: 0; 
>  } 
>  li { 
>   padding: 5px 10px; 
>   background-color: #EEEEEE; 
>   border: 1px solid #DDDDDD; 
>  } 
> 
> ```
> 
> ![](https://github.com/kayfo23/imgs-for-fcc-guide/blob/master/list-style-padding.png?raw=true "estilo geral de estilo de lista")

* * *

#### Fontes:

Os links abaixo foram referenciados na compilação de informações encontradas neste artigo. Por favor, visite-os para mais detalhes sobre este tópico.

#### Mais Informações:

[MDN - listas de estilos](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists)

[W3Schools - Listas de CSS](https://www.w3schools.com/css/css_list.asp)

[Truques de CSS - estilo de lista](https://css-tricks.com/almanac/properties/l/list-style/)