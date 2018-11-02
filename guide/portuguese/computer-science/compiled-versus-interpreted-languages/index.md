---
title: Compiled Versus Interpreted Languages
localeTitle: Idiomas Compilados versus Interpretados
---
## Idiomas Compilados versus Interpretados

Cada programa é um conjunto de instruções, seja para adicionar dois números ou enviar uma solicitação pela Internet. Compiladores e intérpretes pegam código legível e o convertem em código de máquina legível por computador. Em uma linguagem compilada, a máquina de destino traduz diretamente o programa. Em uma linguagem interpretada, o código-fonte não é traduzido diretamente pela máquina de destino. Em vez disso, um programa _diferente_ , também conhecido como interpretador, lê e executa o código.

### Tudo bem ... mas o que isso _realmente_ significa?

Então, digamos que você tenha uma receita de homus que você quer fazer, mas é no grego antigo. Há duas maneiras pelas quais você, como um falante de grego antigo, pode seguir suas instruções.

A primeira é se alguém já a traduziu para o inglês para você. Você (e qualquer um que falasse inglês) poderia obter a versão em inglês e fazer homus. Esta é a versão compilada.

A segunda é se você tivesse um amigo que conhecesse o grego antigo. Seu amigo pode se sentar ao seu lado e traduzir o grego antigo para o inglês, linha por linha, à medida que você vai. Neste caso, seu amigo é o intérprete. Esta é a versão interpretada.

### Idiomas compilados

As linguagens compiladas são convertidas diretamente em código de máquina que o processador pode executar. Como resultado, elas tendem a ser mais rápidas e mais eficientes de executar do que as linguagens interpretadas. Eles também dão ao desenvolvedor mais controle sobre aspectos de hardware, como gerenciamento de memória e uso da CPU.

As linguagens compiladas precisam de uma etapa de "compilação" - elas precisam ser compiladas manualmente primeiro. Você precisa "reconstruir" o programa toda vez que precisar fazer uma alteração. No nosso exemplo hummus, toda a tradução é escrita antes de chegar a você. Se o autor original decidiu que queria usar um tipo diferente de azeite, toda a receita precisaria ser traduzida novamente e depois enviada para você.

Exemplos de linguagens compiladas são C, C ++, Erlang, Haskell, Rust e Go.

### Idiomas Interpretados

Os intérpretes executarão um programa linha por linha e executarão cada comando. Agora, se o autor decidisse usar um tipo diferente de azeite, ele poderia riscar o antigo e adicionar o novo. Seu amigo tradutor pode então transmitir essa mudança para você como isso acontece.

Idiomas interpretados já foram conhecidos por serem significativamente mais lentos do que os idiomas compilados. Mas, com o desenvolvimento da [compilação just-in-time](https://guide.freecodecamp.org/computer-science/just-in-time-compilation) , essa lacuna está diminuindo.

Exemplos de linguagens interpretadas comuns são PHP, Ruby, Python e JavaScript.

### Uma pequena advertência

A maioria das linguagens de programação pode ter implementações compiladas e interpretadas. A linguagem em si não é necessariamente compilada ou interpretada. No entanto, para simplificar, eles são geralmente referidos como tal.

Estritamente falando, os termos linguagem interpretada e linguagem compilada não são bem definidos porque, em teoria, qualquer linguagem de programação pode ser interpretada ou compilada. Na moderna implementação de linguagem de programação, é cada vez mais popular que uma plataforma forneça as duas opções. Por exemplo, o Python pode ser executado como um programa compilado ou como uma linguagem interpretada no modo interativo.

**A maioria das ferramentas de linha de comando, CLIs e shells podem, teoricamente, ser classificadas como linguagens interpretadas.**

### Vantagens e desvantagens

#### Vantagens de linguagens compiladas

Programas compilados em código nativo em tempo de compilação geralmente tendem a ser mais rápidos do que os traduzidos em tempo de execução, devido à sobrecarga do processo de tradução.

#### Desvantagens de linguagens compiladas

As desvantagens mais notáveis ​​são: -

*   Tempo adicional necessário para concluir toda a etapa de compilação antes do teste e
*   Dependência de plataforma do código binário gerado.

#### Vantagens dos Idiomas Interpretados

Uma linguagem interpretada fornece implementações alguma flexibilidade adicional sobre implementações compiladas. Como os intérpretes executam o código do programa de origem, o próprio código é independente da plataforma (código de byte do Java, por exemplo). Outros recursos incluem digitação dinâmica e tamanho de programa executável menor.

#### Desvantagens dos Idiomas Interpretados

A desvantagem mais notável é a velocidade de execução típica em comparação com as linguagens compiladas.

#### Mais Informações:

[Wikipedia - Linguagem compilada](https://en.wikipedia.org/wiki/Compiled_language)

[Wikipedia - Linguagem interpretada](https://en.wikipedia.org/wiki/Interpreted_language)

[Artigo: programmerinterview.com - Qual é a diferença entre uma linguagem compilada e interpretada?](http://www.programmerinterview.com/index.php/general-miscellaneous/whats-the-difference-between-a-compiled-and-an-interpreted-language/)