---
title: Tables
localeTitle: Tabelas
---
## \## Tabelas

#### Mesa Básica

Para obter o exemplo de estilo básico, inclua a classe base `.table` em qualquer elemento `<table>` .

**Exemplo**
```
<table class="table"> 
  ... 
 </table> 
```

![Mesa Básica](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

* * *

#### Mesa Listrada

Para obter o efeito de linha listrada (zebra-striping) em tabelas, use `.table-striped` em adição a `.table` em qualquer elemento `<table>` . As tabelas distribuídas são estilizadas por meio do seletor CSS `:nth-child` , que não está disponível no Internet Explorer 8.
```
<table class="table table-striped"> 
  ... 
 </table> 
```

![Mesa listrada](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

* * *

#### Mesa delimitada

Para alcançar a tabela de bordas use `.table-bordered` além de `.table` em qualquer elemento `<table>` .
```
<table class="table table-bordered"> 
  ... 
 </table> 
```

![Bordered Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

* * *

#### Mesa Hover

Para obter o efeito de hover row nas tabelas, use `.table-bordered` além de `.table` em qualquer elemento `<table>` .
```
<table class="table table-hover"> 
  ... 
 </table> 
```

![Tabela de foco](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

* * *

#### Mesa condensada

Para obter a tabela condensada use `.table-condensed` além de `.table` em qualquer elemento `<table>` .
```
<table class="table table-condensed"> 
  ... 
 </table> 
```

![Mesa Condensada](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

* * *

#### Tabela Responsiva

Para obter a tabela responsiva, `.table` qualquer tabela `.table` em um elemento `.table-responsive` tabela.

...

![Tabela Responsiva](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

* * *

Os desenvolvedores podem alterar o estilo de cada linha e / ou célula individualmente usando **classes contextuais** .

*   `.active` - Aplica a cor hover a uma linha ou célula específica
    
*   `.success` - Indica uma ação bem-sucedida ou positiva
    
*   `.info` - Indica uma mudança ou ação informativa neutra
    
*   `.warning` - Indica um aviso que pode precisar de atenção
    
*   `.danger` - Indica uma ação perigosa ou potencialmente negativa
    
    … … … … …
    
    … … … … …
    

![Tabela de Classes Contextuais](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

* * *