---
title: Python Mutability and Variable Assignments
localeTitle: Mutabilidade de Python e atribuições variáveis
---
> Todo objeto tem uma identidade, um tipo e um valor. A identidade de um objeto nunca muda depois de ter sido criada; você pode pensar nisso como o endereço do objeto na memória. [fonte](https://docs.python.org/3/reference/datamodel.html#data-model)

Depois que um `object` é criado, o tipo e a identidade não podem ser alterados. Se o valor do objeto pode ou não mudar após a criação determina se o objeto é mutável (pode mudar) ou imutável (não pode mudar).

Até agora aprendemos sobre alguns tipos de objetos e suas subclasses: `string` s e objetos numéricos (inteiro, ponto flutuante, complexo e booleano). Todos esses são objetos **imutáveis** .

Esse conceito pode ser confuso no começo porque o que é bom é um objeto se você não puder modificá-lo. O que torna esses objetos utilizáveis ​​é a capacidade de atribuir e reatribuir variáveis. Funções e operadores podem retornar novos objetos que podem ser atribuídos a variáveis.

Usando a [função id integrada](https://docs.python.org/3/library/functions.html#id) , que retorna a identidade de um objeto, podemos ver como isso funciona.

Aqui estão algumas coisas para manter em mente:

*   Atribuir uma variável não significa que a _variável_ é o _objeto_ . Usamos uma linguagem muito específica, observando que as _instruções de atribuição_ **associam** um **nome** (identificador) a um _objeto_ . Variáveis ​​podem ser reatribuídas:

\`python

> > > a = 1 # Vincule um a um objeto.  
> > > id (a)  
> > > 140355241530152  
> > > a = 2 # Rebinde um para outro objeto.  
> > > id (a)  
> > > 140355241530128  
> > > \`

*   Atribuir duas variáveis ​​diferentes a _objetos imutáveis_ com o mesmo valor pode resultar (não garantido) neles sendo vinculados ao mesmo _objeto_

\`python

> > > a = 1  
> > > b = 1  
> > > id (a)  
> > > 140355241530152  
> > > id (b) # Neste caso aeb estão ligados ao mesmo objeto.  
> > > 140355241530152  
> > > \`

*   Atribuir duas variáveis ​​diferentes a _objetos imutáveis_ com valores diferentes sempre resultará na vinculação a _objetos_ diferentes:

\`python

> > > a = 1  
> > > b = 2  
> > > id (a)  
> > > 140355241530152  
> > > id (b) # aeb estão ligados a objetos diferentes.  
> > > 140355241530128  
> > > \`

*   A reatribuição de variáveis ​​não altera o objeto original, ele as liga a um objeto diferente.

\`python

> > > a = 1  
> > > b = 1  
> > > id (a)  
> > > 140355241530152  
> > > id (b)  
> > > 140355241530152  
> > > a = 2  
> > > id (a) # a é rebatido para um objeto diferente.  
> > > 140355241530128  
> > > id (b) # b ainda está vinculado ao objeto original.  
> > > 140355241530152  
> > > \`