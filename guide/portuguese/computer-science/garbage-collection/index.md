---
title: Garbage Collection
localeTitle: Coleta de lixo
---
## Coleta de lixo

#### O que é a coleta de lixo?

Em termos gerais, a coleta de lixo (GC) não é nada além de coletar ou recuperar a memória que foi alocada aos objetos, o que não está em uso no momento em nenhuma parte de nosso programa. Uma breve descrição como abaixo.

A coleta de lixo é o processo no qual os programas tentam liberar espaço de memória que não é mais usado por objetos, e assim por diante. A coleta de lixo é implementada de maneira diferente para todos os idiomas. A maioria das linguagens de programação de alto nível tem algum tipo de coleta de lixo. Linguagens de programação de baixo nível podem adicionar a coleta de lixo por meio de bibliotecas.

Como dito acima, toda linguagem de programação tem seu próprio jeito de GC. Na programação C, os desenvolvedores precisam cuidar da alocação e desalocação de memória usando as funções malloc () e dealloc (). Mas, no caso de desenvolvedores de C #, não é necessário cuidar do GC e também não é recomendado.

\#### Como a alocação de memória está acontecendo? Em C #, a alocação de memória de objetos ocorre no heap gerenciado. que cuida do CLR (common language runtime). Alocação de memória para o heap é feito através de dll win32 no sistema operacional como como no C. Mas, em objetos C são colocados na memória onde sempre o espaço livre se adapte ao tamanho do objeto. E o mapeamento de memória é baseado em conceitos de Linkedlist. Em C #, a alocação de memória para heap está acontecendo de maneira linear. como um após o outro.

Sempre que um novo objeto está sendo criado. Uma memória é alocada no heap e o ponteiro é movido para o próximo endereço de memória. A alocação de memória em C # é mais rápida que a C. Já que em C a memória precisa procurar e alocar para o objeto. então vai demorar um pouco mais que o C #.

\#### Gerações em C # GC? Na programação do .net, o heap tem três gerações chamadas de geração 0, 1, 2. A geração 0 é preenchida primeiro sempre que um novo objeto é criado. Garbage collector executado quando a Geração 0 é preenchida. objetos recém-criados são colocados na Geração 0. Ao executar a coleta de lixo, todos os objetos indesejados são destruídos, a memória é liberada e compactada. O GC cuida de apontar os ponteiros da memória liberada quando o GC acontecer.

Gerações 1 e 2 tem objeto que tem o tempo de vida mais longo. O GC nas gerações 1 e 2 não acontecerá até que as gerações 0 tenham memória suficiente para alocar.

Não é aconselhável invocar o GC programaticamente. É bom deixar isso acontecer sozinho. GC recebe uma chamada sempre que a geração 0 é preenchida. O GC não afetará o desempenho do seu programa.

A coleta de lixo é o processo no qual os programas tentam liberar espaço de memória que não é mais usado por variáveis, objetos e outros. A coleta de lixo é implementada de maneira diferente para todos os idiomas. A maioria das linguagens de programação de alto nível possui algum tipo de coleta de lixo embutido. Linguagens de programação de baixo nível podem adicionar coleta de lixo através de bibliotecas.

A coleta de lixo é uma ferramenta que economiza tempo para o programador, por exemplo, substitui a necessidade de funções como malloc () e free () que são encontradas em C. Também pode ajudar na prevenção de vazamentos de memória.

A desvantagem da coleta de lixo é que ela tem um impacto negativo no desempenho. O programa deve executar regularmente o programa, verificando as referências de objetos e limpando a memória - isso demanda recursos e geralmente requer que o programa faça uma pausa.

Se um objeto não tiver referências (não estiver mais acessível), ele será elegível para coleta de lixo. Por exemplo, no código Java abaixo, o objeto Thing originalmente referenciado por 'thing1' tem sua única referência redirecionada para outro objeto no heap - ele é, então, inacessível e terá sua memória não alocada pelo coletor de lixo.

```java
class Useless { 
  public static void main (String[] args) { 
  Thing thing1 = new Thing(); 
  Thing thing2 = new Thing(); 
  thing2 = thing1; // direct thing2's reference towards thing1 
                   // no references access thing2 
 } } 
```

Um exemplo de coleta de lixo é o ARC, abreviação de contagem automática de referência. Isso é usado no Swift, por exemplo. O ARC se resume a manter o controle das referências a todos os objetos criados. Se a quantidade de referências cair para 0, o objeto será marcado para desalocação.

#### Mais Informações:

*   https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals - Para saber mais sobre a coleta de lixo