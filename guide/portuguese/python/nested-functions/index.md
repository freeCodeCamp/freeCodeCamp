---
title: Nested Functions in Python
localeTitle: Funções aninhadas em Python
---
### Namespaces

Os parâmetros de uma função, mais quaisquer variáveis ​​vinculadas (por atribuição ou por outras instruções de ligação, como def) no corpo da função, compõem o espaço de nomes local da função, também conhecido como escopo local. Cada uma dessas variáveis ​​é conhecida como uma variável local da função.

Variáveis ​​que não são locais são conhecidas como variáveis ​​globais (na ausência de definições de funções aninhadas, as quais discutiremos em breve). Variáveis ​​globais são atributos do objeto de módulo, como abordado em "Atributos de objetos de módulo" na página 140. Sempre que a variável local de uma função tiver o mesmo nome de uma variável global, esse nome, dentro do corpo da função, refere-se à variável local, não o global. Expressamos isso dizendo que a variável local oculta a variável global com o mesmo nome em todo o corpo da função.

### A declaração global

Por padrão, qualquer variável vinculada a um corpo de função é uma variável local da função. Se uma função precisar religar algumas variáveis ​​globais, o primeiro declaração da função deve ser:

identificadores globais

onde identificadores é um ou mais identificadores separados por vírgulas (,). Os identificadores listados em uma declaração global referem-se às variáveis ​​globais (ou seja, atributos do objeto do módulo) que a função precisa ser religada. Por exemplo, o contador de funções que vimos em "Outros atributos de objetos de função" na página 73 poderia ser implementado usando uma variável global e global, em vez de um atributo do objeto de função:

\_count = 0 contador de def (): \_count global \_count + = 1 return \_count

Sem a declaração global, a função de contador levantaria uma exceção UnboundLocal-Error porque \_count seria, então, uma variável local não inicializada (não acoplada). Embora a declaração global permita esse tipo de programação, esse estilo é frequentemente deselegante e desaconselhável. Como mencionei anteriormente, quando você deseja agrupar algum estado e algum comportamento, os mecanismos orientados a objeto abordados no Capítulo 5 são geralmente os melhores.

Não use global se o corpo da função apenas usar uma variável global (incluindo a mutação do objeto ligado a essa variável se o objeto for mutável). Use uma declaração global somente se o corpo da função religar uma variável global (geralmente atribuindo ao nome da variável). Por uma questão de estilo, não use global a menos que seja estritamente necessário, pois sua presença fará com que os leitores do seu programa assumam que a declaração está lá para algum propósito útil. Em particular, nunca use global, exceto como a primeira instrução em um corpo de função.

{mospagebreak title = Funções aninhadas e escopos aninhados}

Uma declaração def dentro de um corpo de função define uma função aninhada, e a função cujo corpo inclui o def é conhecida como uma função externa à função aninhada. Código no corpo de uma função aninhada pode acessar (mas não religar) variáveis ​​locais de uma função externa, também conhecidas como variáveis ​​livres da função aninhada.

A maneira mais simples de permitir que uma função aninhada acesse um valor geralmente não é confiar em escopos aninhados, mas sim passar explicitamente esse valor como um dos argumentos da função. Se necessário, o valor do argumento pode ser vinculado quando a função aninhada é definida usando o valor como padrão para um argumento opcional. Por exemplo:

def percent1 (a, b, c): def pc (x, total = a + b + c): retorno (x \* 100,0) / total print "Porcentagens são:", pc (a), pc (b), pc (c)

Aqui está a mesma funcionalidade usando escopos aninhados:

def percent2 (a, b, c): def pc (x): retorno (x \* 100,0) / (a ​​+ b + c) print "Porcentagens são:", pc (a), pc (b), pc (c)

Neste caso específico, o percent1 tem uma pequena vantagem: o cálculo de um + b + c acontece apenas uma vez, enquanto o pc da função interna do percent22 repete o cálculo três vezes. No entanto, se a função externa religar suas variáveis ​​locais entre as chamadas para a função aninhada, a repetição da computação poderá ser necessária. Portanto, é aconselhável estar ciente de ambas as abordagens e escolher o mais apropriado caso a caso.

Uma função aninhada que acessa valores de variáveis ​​locais externas também é conhecida como encerramento. O exemplo a seguir mostra como construir um encerramento:

def make\_adder (augend): def add (addend): return addend + augend retorno add

Os fechamentos são uma exceção à regra geral de que os mecanismos orientados a objeto abordados no Capítulo 5 são a melhor maneira de agrupar dados e códigos. Quando você precisa especificamente construir objetos selecionáveis, com alguns parâmetros fixos no tempo de construção do objeto, os encerramentos podem ser mais simples e mais efetivos do que as classes. Por exemplo, o resultado de make\_adder (7) é uma função que aceita um único argumento e adiciona 7 a esse argumento. Uma função externa que retorna um encerramento é uma "fábrica" ​​para membros de uma família de funções distinguida por alguns parâmetros, como o valor do argumento augend no exemplo anterior, e pode frequentemente ajudá-lo a evitar a duplicação de código.

### Expressões de lambda

Se um corpo da função for uma instrução de expressão de retorno única, você poderá optar por substituir a função pelo formulário de expressão lambda especial:

Parâmetros lambda: expression

Uma expressão lambda é o equivalente anônimo de uma função normal cujo corpo é uma única instrução de retorno. Observe que a sintaxe lambda não usa a palavra-chave return. Você pode usar uma expressão lambda sempre que puder usar uma referência a uma função. O lambda às vezes pode ser útil quando você deseja usar uma função simples como argumento ou valor de retorno. Aqui está um exemplo que usa uma expressão lambda como um argumento para a função de filtro interna (coberta no filtro na página 161):

aList = \[1, 2, 3, 4, 5, 6, 7, 8, 9\] baixo = 3 alta = 7 filtro (lambda x, l = baixo, h = alto: h> x> l, aList) # retorna: \[4, 5, 6\]

Como alternativa, você sempre pode usar uma instrução def local que dê um nome ao objeto da função. Você pode então usar esse nome como argumento ou valor de retorno. Aqui está o mesmo exemplo de filtro usando uma declaração def local:

aList = \[1, 2, 3, 4, 5, 6, 7, 8, 9\] baixo = 3 alta = 7 def dentro dos _limites (valor, l = baixo, h = alto): return h> valor> l filter (dentro dos_ limites, aList) # retorna: \[4, 5, 6\]

Embora o lambda possa ocasionalmente ser útil, muitos usuários do Python preferem def, que é mais geral, e pode tornar seu código mais legível se você escolher um nome razoável para a função.

{mospagebreak title = Geradores}

Quando o corpo de uma função contém uma ou mais ocorrências do rendimento da palavra-chave, a função é conhecida como um gerador. Quando você chama um gerador, o corpo da função não é executado. Em vez disso, chamar o gerador retorna um objeto iterador especial que envolve o corpo da função, suas variáveis ​​locais (incluindo seus parâmetros) e o ponto atual de execução, que é inicialmente o início da função.

Quando o próximo método deste objeto iterador é chamado, o corpo da função é executado até a próxima instrução yield, que recebe o seguinte formato:

expressão de rendimento

Quando uma instrução yield é executada, a execução da função é "congelada", com o ponto atual de execução e variáveis ​​locais intactas, e a expressão seguinte yield é retornada como o resultado do próximo método. Quando o próximo é chamado novamente, a execução do corpo da função é retomada de onde parou, até a próxima declaração de rendimento. Se o corpo da função terminar ou executar uma instrução de retorno, o iterador gerará uma exceção StopIteration para indicar que a iteração foi concluída. instruções de retorno em um gerador não podem conter expressões.

Um gerador é uma maneira muito útil de construir um iterador. Como a maneira mais comum de usar um iterador é fazer um loop com uma instrução for, você normalmente chama um gerador assim:

para avariable em somegenerator (argumentos):

Por exemplo, digamos que você deseje uma sequência de números contando de 1 a N e depois novamente para 1. Um gerador pode ajudar:

def updown (N): para x em xrange (1, N): yield x para x em xrange (N, 0, -1): yield x para i em updown (3): imprimir i # impressões: 1 2 3 2 1

Aqui está um gerador que funciona um pouco como a função xrange integrada, mas retorna uma seqüência de valores de ponto flutuante em vez de uma sequência de inteiros:

def frange (iniciar, parar, passo = 1.0): enquanto iniciar <stop: rendimento começo iniciar + = passo

Esse exemplo é um pouco parecido com xrange porque, por simplicidade, faz com que os argumentos iniciem e parem obrigatórios, e silenciosamente assume que o passo é positivo.

Os geradores são mais flexíveis que as funções que retornam listas. Um gerador pode construir um iterador ilimitado, ou seja, um que retorna um fluxo infinito de resultados (para usar apenas em loops que terminam por outros meios, por exemplo, por meio de uma instrução break). Além disso, um iterador construído pelo gerador executa avaliação preguiçosa: o iterador calcula cada item sucessivo somente quando e se necessário, just in time, enquanto a função equivalente faz todos os cálculos com antecedência e pode exigir grandes quantidades de memória para manter a lista de resultados. Portanto, se tudo que você precisa é a capacidade de iterar em uma seqüência computada, geralmente é melhor calcular a seqüência em um gerador em vez de em uma função que retorna uma lista. Se o chamador precisar de uma lista de todos os itens produzidos por algum gerador G (argumentos), o chamador pode simplesmente usar o seguinte código:

resultante\_list = lista (G (argumentos))

### Expressões geradoras

O Python 2.4 introduz uma maneira ainda mais simples de codificar geradores particularmente simples: expressões geradoras, comumente conhecidas como genexps. A sintaxe de um genexp é semelhante à de uma compreensão de lista (conforme abordado em "List comprehensions" na página 67), exceto que um genexp é colocado entre parênteses (()) em vez de colchetes (\[\]); as semânticas de um genexp são as mesmas da compreensão de lista correspondente, exceto que um genexp produz um iterador produzindo um item por vez, enquanto uma compreensão de lista produz uma lista de todos os resultados na memória (portanto, usando um genexp, quando apropriado, economiza memória). Por exemplo, para somar os quadrados de todos os inteiros de dígito único, em qualquer Python moderno, você pode codificar soma (\[x _x para x em xrange (10)\]); no Python 2.4, você pode expressar essa funcionalidade ainda melhor, codificando-a como soma (x_ x para x em xrange (10)) (da mesma forma, mas omitindo os colchetes) e obter exatamente o mesmo resultado enquanto consome menos memória. Observe que os parênteses que indicam a chamada de função também "fazem o dever duplo" e incluem o genexp (sem necessidade de parênteses extras).

{mospagebreak title = Geradores no Python 2.5}

No Python 2.5, geradores são aprimorados, com a possibilidade de receber um valor (ou uma exceção) de volta do chamador à medida que cada rendimento é executado. Esses recursos avançados permitem que geradores em 2.5 implementem co-rotinas completas, como explicado em http://www.python.org/peps/pep-0342.html. A principal mudança é que, em 2.5, yield não é uma declaração, mas uma expressão, então ela tem um valor. Quando um gerador é retomado chamando seu método em seguida, o valor do rendimento correspondente é Nenhum. Para passar um valor x para algum gerador g (para que g receba x como o valor do rendimento no qual ele é suspenso), em vez de chamar g.next (), o chamador chama g.send (x) (chamando g.send (Nenhum) é como chamar g.next ()). Além disso, um rendimento nulo sem argumentos, no Python 2.5, torna-se legal e equivalente para produzir Nenhum.

Outros aprimoramentos do Python 2.5 para geradores têm a ver com exceções e são abordados em "Aprimoramentos do gerador" na página 126.

### Recursão

O Python suporta recursão (isto é, uma função Python pode se chamar), mas há um limite para o quão profunda a recursão pode ser. Por padrão, o Python interrompe a recursão e gera uma exceção RecursionLimitExceeded (abordada em "Classes de exceção padrão" na página 130) quando detecta que a pilha de chamadas recursivas ultrapassou uma profundidade de 1.000. Você pode alterar o limite de recursão com a função setrecursionlimit do módulo sys, coberto em setrecursionlimit na página 171.

No entanto, alterar o limite de recursão não oferece recursão ilimitada; o limite máximo absoluto depende da plataforma em que seu programa está sendo executado, particularmente no sistema operacional subjacente e na biblioteca de tempo de execução C, mas normalmente é de alguns milhares de níveis. Se as chamadas recursivas forem muito profundas, seu programa falhará. Essa recursão descontrolada, depois de uma chamada para setrecursionlimit que excede as capacidades da plataforma, é uma das poucas maneiras que um programa Python pode travar - realmente falha, difícil, sem a rede de segurança usual dos mecanismos de exceção do Python. Portanto, tenha cuidado ao tentar corrigir um programa que está obtendo exceções RecursionLimitExceeded aumentando o limite de recursão muito alto com setrecursionlimit. Na maioria das vezes, aconselhamos que você procure maneiras de remover a recursão ou, mais especificamente, limite a profundidade da recursão de que seu programa precisa.

Os leitores que estão familiarizados com as linguagens de programação funcional, Lisp ou Schep devem, em particular, estar cientes de que o Python não implementa a otimização da "eliminação da chamada final", que é tão importante nesses idiomas. No Python, qualquer chamada, recursiva ou não, tem o mesmo custo em termos de tempo e espaço de memória, dependendo apenas do número de argumentos: o custo não muda, se a chamada é uma "chamada de cauda" (significando que a chamada é a última operação que o chamador executa) ou qualquer outra chamada não solicitada.