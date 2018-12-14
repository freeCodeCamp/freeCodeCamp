---
title: Accessibility Basics
localeTitle: Noções básicas de acessibilidade
---
> "As Artes das Trevas são muitas, variadas, em constante mudança e eternas. Lutar contra elas é como lutar contra um monstro de muitas cabeças, que, cada vez que um pescoço é rompido, brota uma cabeça ainda mais feroz e mais inteligente do que antes. Você está lutando contra isso. que é instável, mutante, indestrutível ".
> 
> \- Professor Severo Snape, Série Harry Potter

O papel da acessibilidade no desenvolvimento é essencialmente entender a perspectiva e as necessidades do usuário e saber que a Web e os aplicativos são uma solução para pessoas com deficiências.

Hoje em dia, mais e mais novas tecnologias são inventadas para tornar a vida dos desenvolvedores, assim como dos usuários, mais fácil. Até que ponto isso é uma coisa boa é um debate para outro momento, por enquanto é o suficiente para dizer que a caixa de ferramentas de um desenvolvedor, especialmente um desenvolvedor web, está tão em constante mudança quanto as chamadas "artes das trevas" estão de acordo com nosso amigo. Snape

Uma ferramenta nessa caixa de ferramentas deve ser acessibilidade. É uma ferramenta que deve idealmente ser usada em um dos primeiros passos de escrever qualquer forma de conteúdo da web. No entanto, esta ferramenta muitas vezes não é tão bem apresentada na caixa de ferramentas da maioria dos desenvolvedores. Isso pode ser devido a um simples caso de não saber que existe até casos extremos, como não se importar com isso.

Na minha vida como usuário e, mais tarde, como desenvolvedor, que se beneficia da acessibilidade em qualquer forma de conteúdo, eu vi os dois lados desse espectro. Se você estiver lendo este artigo, acredito que esteja em uma das seguintes categorias:

*   Você é um desenvolvedor web iniciante e gostaria de saber mais sobre acessibilidade
*   Você é um desenvolvedor web experiente e perdeu o seu caminho (mais sobre isso mais tarde)
*   Você sente que existe uma obrigação legal do trabalho e precisa aprender mais sobre isso.

Se você ficar fora dessas categorias bastante amplas, por favor me avise. Eu sempre gosto de ouvir as pessoas que lêem o que eu escrevo. A implementação da acessibilidade afeta toda a equipe, desde as cores escolhidas pelo designer, a cópia escrita pelo redator e até você, o desenvolvedor.

## Então, o que é acessibilidade de qualquer maneira?

Acessibilidade em si é um pouco um termo enganador, às vezes, especialmente se o inglês é sua segunda língua. Às vezes é referido como design inclusivo.

Se o seu site estiver na Internet, acessível por qualquer pessoa com um navegador da Web, em certo sentido, esse site estará acessível a todos com um navegador da web.

Mas todo o conteúdo do seu website é realmente legível, utilizável e compreensível para todos? Não existem limites que impedem certas pessoas de "acessar" todas as informações que você está expondo?

Você poderia se fazer perguntas como as seguintes:

*   Se você adicionar informações que só estão contidas em um arquivo de áudio, uma pessoa surda pode obter essa informação?
*   Se você denotar uma parte importante do seu site com uma determinada cor, uma pessoa daltônica saberá disso?
*   Se você adicionar imagens em seu site que transmitam informações importantes, como uma pessoa cega ou com deficiência visual saberá?
*   Se você quiser navegar pelo aplicativo com teclado ou boca-de-pau, será possível e previsível?
*   Seu aplicativo assume a orientação do dispositivo e se o usuário não puder alterá-lo fisicamente?
*   Há algum perdão dos aspectos cronometrados de sua inscrição para alguém que pode precisar de mais tempo para preencher um formulário?
*   Seu aplicativo ainda funciona (aprimoramento progressivo) supondo que o JavaScript não carrega no tempo?
*   Você pode até mesmo dizer que, se o seu site é muito pesado, alguém em uma conexão lenta ou irregular poderá ler seu conteúdo?

É aqui que entra em ação a acessibilidade. A acessibilidade envolve basicamente tornar seu conteúdo tão amigável, tão fácil de acessar quanto possível para a maior quantidade de pessoas. Isso inclui pessoas que são surdas, com baixa visão, cegas, disléxicas, mudas, com conexões lentas, daltônicas, que sofrem de epilepsia, fadiga mental, idade, limitações físicas, etc.

## Por que implementar acessibilidade?

Você pode achar que a acessibilidade não se aplica a você ou aos seus usuários, então por que implementá-la? O que um cego faria com uma ferramenta de edição de fotos?

A verdade é que você está certo até certo ponto. Se você fez uma pesquisa meticulosa com o usuário e excluiu qualquer chance de um determinado grupo de pessoas visitar seu site, a prioridade para atender a esse grupo de pessoas diminui um pouco.

No entanto, fazer esta pesquisa é fundamental na defesa de tal afirmação. Você sabia que havia [jogadores cegos?](http://audiogames.net) e até [fotógrafos cegos?](http://peteeckert.com/) . Talvez você soubesse que [músicos podem ser surdos](http://mentalfloss.com/article/25750/roll-over-beethoven-6-modern-deaf-musicians) ?

Se você fez, bom para você. Se não, acho que isso aumenta ainda mais meu ponto de vista.

A imagem fica ainda mais complicada quando olhamos para a legislação que, na verdade, força você a tornar certos sites e aplicativos da Web acessíveis. Um bom exemplo é a [seção 508](http://jimthatcher.com/webcourse1.htm) baseada nos EUA. Neste momento, esta lei refere-se principalmente a organizações governamentais, sites do setor público, etc. No entanto, as leis mudam.

No ano passado, sites de companhias aéreas foram incluídos nesta lista, o que significa que, mesmo aqui na Europa, os desenvolvedores de sites de companhias aéreas se esforçavam para tornar seu conteúdo acessível. Não fazê-lo pode levar a sua empresa a uma multa de dezenas de milhares de dólares para cada dia em que o problema não é resolvido.

Há variações nessa legislação em todo o mundo, algumas mais severas e abrangentes do que outras. Não saber sobre esse fato não faz com que a ação desapareça, infelizmente.

## Ok, a acessibilidade é um grande negócio. Agora, como vamos implementá-lo?

Essa pergunta, infelizmente, é mais difícil de responder do que parece. A citação de Harry Potter no topo está lá por uma razão, e não é meu ser um ávido leitor de fantasia.

Como afirmei acima, a acessibilidade é importante para um grande grupo de pessoas diferentes, cada uma com suas próprias necessidades. Fazer o seu site trabalhar para literalmente todo mundo é uma grande tarefa em andamento.

Para trazer um pouco de método para a loucura, as Diretrizes de Acessibilidade ao Conteúdo da Web ou [WCAG](https://www.wuhcag.com/web-content-accessibility-guidelines/) foram compostas. Este documento contém vários critérios que você pode usar para verificar seu site. Por enquanto, vou cobrir alguns dos princípios mais importantes aqui. Eu vou apontar você para os frutos mais baixos, por assim dizer. Nos artigos subseqüentes, discutirei técnicas mais avançadas, como o \[WAI-ARIA\], que é importante para aplicativos baseados em JavaScript.

### Fale como os nativos

A especificação HTML é um documento que descreve como o idioma deve ser usado para criar sites. Tecnologias assistivas, como leitores de tela, programas de reconhecimento de fala, etc., estão cientes deste documento. Os desenvolvedores da Web, no entanto, muitas vezes não são, ou pelo menos não são suficientes, e acham que algo assim está correto:

```html

    <div class="awesome-button"></div> 
 
    <span><strong>Huge heading I will style with CSS later</strong></span> 
 
    <span class="clickable-with-JavaScript">English</span> 
```

Adivinha? Todos esses três elementos quebram vários critérios de WCAG e, portanto, não são acessíveis.

O primeiro elemento quebra o chamado "nome, papel, valor" critério, que afirma que todos os elementos em uma página da Web devem expor seu nome, sua função (como botão) e seu valor (como o conteúdo de um campo de edição) para tecnologias assistivas. Este div realmente não fornece nenhum dos três, tornando-o invisível para os leitores de tela.

O segundo elemento parece um título visualmente depois de estilizá-lo com CSS, mas semanticamente é um span. Portanto, tecnologias assistivas não saberão que é um título. Um leitor de tela lerá isso como texto normal, em vez de um título. Os leitores de tela geralmente têm uma tecla de atalho para pular rapidamente para o cabeçalho mais próximo, esse cabeçalho não será incluído nesse escopo.

O terceiro elemento poderia, por exemplo, ser um elemento no qual um usuário pode clicar para alterar o idioma do site. Talvez um menu animado de idiomas seja expandido quando for clicado. No entanto, isso também é um intervalo e não expõe sua função (link ou botão), fazendo com que as tecnologias assistivas pensem que essa é apenas a palavra inglês com algum estilo.

Spans e divs são não-elementos. Eles são destinados a conter outros elementos, não para serem elementos em si. Você pode corrigir isso de duas maneiras:

*   Você pode adicionar manualmente atributos ARIA aos elementos acima. Este é um tópico avançado e fora do escopo deste artigo.
*   Ou você pode simplesmente fazer isso:

```html

    <button>This is a button</button> 
 
    <h2>Here's a heading level two</h2> 
 
    <a href="JavascriptThing">English</a> 
```

Estrondo. De repente, todos esses elementos agora estão perfeitamente acessíveis, apenas usando HTML nativo. HTML do jeito que deveria ser usado, em outras palavras.

### Uma fundação não pode ficar sem estrutura

Um pouco antes, eu toquei nas teclas de atalho de um leitor de tela para pular de posição para posição. Na verdade, existem muitas teclas de atalho como essa para pular rapidamente para a tabela mais próxima, campo de formulário, link etc. Certificar-se de que esses títulos estejam realmente em lugares lógicos é uma boa prática e realmente diminui os níveis de estresse dos usuários de tecnologia assistiva, o que é bom se você quiser que os visitantes voltem ao seu site.

Lembre-se também que os títulos são hierárquicos. Se você usa um h2, certifique-se de que o h3 que o segue realmente tenha algo a ver com esse h2. Não coloque um h3 para detalhes de contato em seu h2 para postagens recentes no blog. Uma boa analogia aqui é um livro com capítulos, que possuem subseções. Você não colocaria uma seção sobre assar biscoitos no meio de um capítulo sobre a preparação de vegetais ... ou ... você não iria ... certo?

### Qual a alternativa?

Imagens em um site são ótimas. Eles adicionam uma nova camada ao seu conteúdo, podem realmente tornar a experiência que os visitantes do seu site têm de maneira mais imersiva e, em geral, ficam bem em meio a todo esse texto. Uma imagem pode dizer mais que mil palavras, certo?

Certamente. Isto é, se você puder vê-los. Na especificação HTML5, um atributo img deve sempre ter um atributo alt. Este atributo é uma alternativa para a imagem no caso de não poder ser visto. Isso seria verdadeiro para visitantes cegos do seu site, mas também quando a imagem não puder ser carregada por algum motivo. Portanto, não adicionar uma tag alt a um atributo img não apenas quebra a acessibilidade, mas também vai contra a especificação HTML5.

Eu imploro a qualquer desenvolvedor web que se pegue fazendo isso para comer o chapéu de seu programador e trabalhar no Windows 95 exclusivamente por uma semana. Depois que o tempo acabar, escreva um ensaio sobre o que você aprendeu com essa provação para que eu possa rir durante o meu café da tarde.

Agora, há uma ressalva aqui. Alt-atributos são obrigatórios de acordo com as especificações HTML5, mas não é obrigatório preenchê-los. `<img src="awesome-image.jpg", alt="">` é, portanto, código HTML5 legal.

Você deve, portanto, preencher tags-alt para todas as imagens? Depende da imagem, na verdade. Para imagens de fundo, a resposta é geralmente não, mas você deve usar CSS para aqueles de qualquer maneira.

Para imagens puramente decorativas que não têm nenhuma informação, você é basicamente livre para escolher. Ou colocar algo útil e descritivo ou nada.

Para imagens que contenham informações, como uma brochura, um mapa, um gráfico, etc., a não adição de texto alternativo substitui as WCAG, a menos que você forneça uma alternativa textual. Isso geralmente é um atributo alt, mas também pode ser um bloco de texto logo abaixo ou ao lado da imagem.

Para imagens de texto, o texto pode ser incluído no atributo alt ou oferecido de alguma maneira alternativa. O problema é que adicionar a alternativa textual na mesma página basicamente faria com que o mesmo conteúdo fosse exibido duas vezes para as pessoas que podem ver a imagem, e é por isso que o atributo alt é melhor nesse caso.

O texto deve fornecer o contexto e a informação que é uma alternativa para ver a imagem. Simplesmente não basta escrever "imagem de balões de ar quente" - por que as imagens de balão estão lá? Se a imagem é estilizada ou transmite um significado emocional, isso pode ser incluído.

### Eu não posso ler seu rabisco, filho

Mesmo as pessoas que não usam óculos e não têm nenhum problema com a sua visão beneficiam-se de uma fonte de fácil leitura e contraste adequado. Tenho certeza de que você se arrependeria se tivesse que preencher um formulário em que letras amarelo-claro e sem esperança fossem colocadas em um fundo branco. Para as pessoas que a visão não é tão boa, como a sua avó, por exemplo, isso se torna irremediavelmente pior.

O WCAG tem taxas de contraste para letras menores e maiores e há muitas ferramentas para verificar se as taxas de contraste são suficientemente fortes. As informações e ferramentas estão lá, vá usá-lo.

Um bom local para começar a verificar o contraste das cores é usando o verificador de contraste de cores [WebAIM](https://webaim.org/resources/contrastchecker/) .

### O que é que este botão faz?

Enquanto estamos no tópico de formulários, vamos rapidamente olhar para a tag de `input` . Esse carinha é meio importante.

Quando você coloca alguns campos de entrada em uma página da Web, pode usar rótulos para… bem… rotulá-los. No entanto, colocá-los ao lado do outro não é suficiente. O atributo que você deseja é o atributo for, que recebe o ID de um campo de entrada subsequente. Dessa forma, as tecnologias assistivas sabem qual rótulo associar a qual campo de formulário.

Eu acho que a melhor maneira de ilustrar isso é dando um exemplo:

```html

    <label for='username'> 
 
    <input type='text' id='username'> 
```

Isso fará com que, por exemplo, um leitor de tela diga "nome de usuário, campo de edição de texto", em vez de apenas informar "campo de edição de texto" e exigir que o usuário procure um rótulo. Isso também ajuda pessoas que usam software de reconhecimento de fala.

### Essa é uma tarefa difícil

Vamos dar uma pequena pausa. Eu quero que você vá olhar para uma página da web muito bem projetada. Pode ser qualquer página. Vá em frente, vou esperar.

Costas? OK ótimo. Agora, olhe a página novamente, mas desabilite todos os CSS. Ainda parece bom? O conteúdo da página ainda está em ordem lógica? Se assim for, ótimo. Você encontrou uma página com estrutura HTML decente. (Uma maneira de visualizar facilmente uma página sem CSS é carregar o site na [Ferramenta de Avaliação de Acessibilidade na Web WAVE](http://wave.webaim.org) do WebAIM. Em seguida, clique na guia "Sem Estilos" para vê-la sem estilos.)

Se não, ótimo. Agora você tem uma impressão do que eu tenho que lidar diariamente quando me deparo com um site mal estruturado.

Divulgação completa: Eu tenho a tendência de amaldiçoar quando isso acontece. Alto. Com vigor.

Por quê isso é tão importante? Eu vou explicar.

_alerta de spoiler!_ Para aqueles que apenas abordaram o currículo HTML / CSS até agora, vamos pular um pouco.

Leitores de tela e outras tecnologias assistivas renderizam uma representação de cima para baixo de uma página da Web com base no DOM do seu site. Todo o CSS posicional é ignorado nesta versão da página da web.

DOM significa Document Object Model e é a estrutura em árvore dos elementos HTML do seu site. Todos os elementos HTML são nós que se interligam hierarquicamente com base nas tags HTML usadas e no JavaScript. Os leitores de tela usam essa árvore DOM para trabalhar com seu código HTML.

Se você colocar seu elemento na parte superior de seu elemento, ele será exibido no topo da sua árvore DOM também. portanto, o leitor de tela também o colocará no topo, mesmo se você movê-lo para a parte inferior da página usando CSS.

Então, uma dica final que eu quero dar a você é prestar atenção na ordem do seu HTML, não apenas no seu site final com CSS adicionado. Será que isso faz sentido sem o CSS? Ótimo!

Ah, isso não acontece? Nesse caso, você pode um dia ouvir uma maldição abafada em uma brisa fria enquanto caminhava para fora. Isso provavelmente será eu, visitando seu site.

Nesse caso, eu realmente só tenho duas palavras para você. Muitas vezes eu ouvi essas mesmas duas palavras dirigidas a mim quando eu escrevi um código ruim e é com grande prazer que eu lhe digo: "vá consertar!"

### Contraste de cor

O contraste da cor deve ser no mínimo 4.5: 1 para texto normal e 3: 1 para texto grande. “Texto grande” é definido como texto com pelo menos 18 pontos (24px) ou 14 pontos (18.66px) e negrito. [Verificador de Contraste](https://webaim.org/resources/contrastchecker/)

## Conclusão

Eu lhe falei sobre acessibilidade, o que é, o que não é e porque é importante.

Eu também dei a você o básico, o básico, de como acertar a acessibilidade. Esses princípios básicos são, no entanto, muito poderosos e podem tornar sua vida muito mais fácil ao codificar a acessibilidade.

Se falamos em termos da FCC, você deve ter isso em mente enquanto faz o currículo de HTML / CSS, bem como o currículo de JavaScript.  
Nos artigos subseqüentes, abordarei vários tópicos mais importantes. Várias perguntas que responderei são:

*   Adicionar cabeçalhos estruturados parece uma boa ideia, mas eles não se encaixam no meu design. O que eu faço?
*   Existe uma maneira para eu escrever conteúdo apenas leitores de tela e outras tecnologias assistivas vêem?
*   Como posso tornar os componentes JavaScript personalizados acessíveis?
*   Quais ferramentas existem, além de testes de usuário inclusivos, que podem ser usadas para desenvolver a experiência mais robusta e acessível para o maior grupo de usuários?
