---
title: Garbage Collection
localeTitle: Coleta de lixo
---
## Coleta de lixo

#### O que é a coleta de lixo?

Coleta de lixo é um processo no qual os programas tentam liberar espaço de memória que não é mais usado por objetos e tal. A coleta de lixo é implementada de maneira diferente para todos os idiomas. A maioria das linguagens de programação de alto nível tem algum tipo de coleta de lixo embutida. Linguagens de programação de baixo nível podem adicionar a coleta de lixo por meio de bibliotecas.

Como dito acima, toda linguagem de programação tem seu próprio jeito de GC. Na programação C, os desenvolvedores precisam cuidar da alocação e desalocação de memória usando as funções `malloc()` e `dealloc()` . Para aplicativos C #, os desenvolvedores não precisam mais cuidar do GC e também não é recomendado, porque o .NET framework já trata disso.

\#### Como a alocação de memória acontece? Em C #, a alocação de memória de objetos acontece no heap gerenciado e isso é feito pelo CLR (Common Language Runtime). A alocação de memória para o heap é feita através do win32.dll no Sistema operacional (SO), como em C. Mas em C, os objetos são colocados na memória onde o espaço livre se adapta ao tamanho do objeto. E o mapeamento de memória funciona com base nos conceitos de Linkedlist. Em C #, a alocação de memória para o heap ocorre de maneira linear, isto é, um após o outro.

Sempre que um novo objeto é criado, uma memória é alocada no heap e o ponteiro se move para o próximo endereço de memória. A alocação de memória em C # é mais rápida que a C. Em C, a memória precisa pesquisar e alocar para o objeto, o que adiciona um pouco de tempo adicional.

\#### Gerações no C # GC Na programação do .net, o heap tem três gerações chamadas Geração 0, 1, 2.

A geração 0 é preenchida primeiro sempre que um novo objeto é criado. Garbage collector executado quando a Geração 0 é preenchida. objetos recém-criados são colocados na Geração 0. Ao executar a coleta de lixo, todos os objetos indesejados são destruídos, a memória é liberada e compactada. O GC cuida de apontar os ponteiros da memória liberada quando o GC acontecer.

Gerações 1 e 2 tem objeto que tem o tempo de vida mais longo. O GC nas gerações 1 e 2 não acontecerá até que as gerações 0 tenham memória suficiente para alocar.

Não é aconselhável invocar o GC programaticamente. É bom deixar isso acontecer por conta própria. O GC é executado sempre que a geração 0 é preenchida. O GC não afeta o desempenho do aplicativo.

A coleta de lixo é o processo no qual os programas tentam liberar espaço de memória que não é mais usado por variáveis, objetos e outros. A coleta de lixo é implementada de maneira diferente para todos os idiomas. A maioria das linguagens de programação de alto nível possui algum tipo de coleta de lixo embutido. Linguagens de programação de baixo nível podem adicionar coleta de lixo através de bibliotecas.

A coleta de lixo é uma ferramenta que economiza tempo para o programador, por exemplo, substitui a necessidade de funções como malloc () e free () que são encontradas em C. Também pode ajudar na prevenção de vazamentos de memória.

A desvantagem da coleta de lixo é que ela tem um impacto negativo no desempenho. O programa deve executar regularmente o programa, verificando as referências de objetos e limpando a memória - isso demanda recursos e geralmente requer que o programa faça uma pausa.

Se um objeto não tiver referências (não estiver mais acessível), ele será elegível para coleta de lixo. Por exemplo, no código Java abaixo, o objeto Thing originalmente referenciado por 'thing1' tem sua única referência redirecionada para outro objeto no heap - ele é, então, inacessível e terá sua memória não alocada pelo coletor de lixo.

#### Mais Informações:

\- \+ - https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals - Para saber mais sobre a coleta de lixo