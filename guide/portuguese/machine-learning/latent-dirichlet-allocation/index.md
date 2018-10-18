---
title: Latent Dirichlet Allocation
localeTitle: Alocação de Dirichlet Latente
---
No processamento de linguagem natural, a alocação latente de Dirichlet (LDA) é um modelo estatístico gerativo que permite que conjuntos de observações sejam explicados por grupos não observados que explicam porque algumas partes dos dados são semelhantes. Por exemplo, se as observações forem palavras coletadas em documentos, ele pressupõe que cada documento é uma mistura de um pequeno número de tópicos e que a criação de cada palavra é atribuível a um dos tópicos do documento. LDA é um exemplo de um modelo de tópico.

Suponha que você tenha o seguinte conjunto de sentenças:

Eu comi um smoothie de banana e espinafre no café da manhã Eu gosto de comer brócolis e banana. Chinchilas e gatinhos são fofos. Minha irmã adotou um gatinho ontem. Olhe para este hamster bonito mastigando um pedaço de brócolis.

A alocação de Dirichlet latente é uma maneira de descobrir automaticamente tópicos que essas sentenças contêm. Por exemplo, considerando essas frases e pedindo 2 tópicos, o LDA pode produzir algo como

Sentenças 1 e 2: 100% Tópico A Frases 3 e 4: 100% Tópico B Sentença 5: 60% Tópico A, 40% Tópico B Tópico A: 30% de brócolis, 15% de banana, 10% de café da manhã, 10% de mastigação ... (nesse ponto, você poderia interpretar o tópico A como alimento) Tópico B: 20% chinchilas, 20% gatinhos, 20% fofo, 15% hamster,… (ponto em que você poderia interpretar o tópico B como sendo sobre animais fofos)

A questão, claro, é: como o LDA realiza essa descoberta?

Modelo LDA

Mais detalhadamente, o LDA representa documentos como misturas de tópicos que geram palavras com certas probabilidades. Assume-se que os documentos são produzidos da seguinte maneira: ao escrever cada documento, você

Decida o número de palavras que o documento terá (digamos, de acordo com uma distribuição de Poisson). Escolha uma mistura de tópicos para o documento (de acordo com uma distribuição Dirichlet sobre um conjunto fixo de tópicos K). Por exemplo, assumindo que temos os dois tópicos de comida e animal fofo acima, você pode escolher o documento para consistir em 1/3 de comida e 2/3 de animais fofos. Gere cada palavra no documento por: … .Primeiro escolhendo um tópico (de acordo com a distribuição multinomial que você amostrou acima; por exemplo, você pode escolher o tópico de comida com 1/3 de probabilidade e o tópico de animais fofos com 2/3 de probabilidade). … .Então, usando o tópico para gerar a própria palavra (de acordo com a distribuição multinomial do tópico). Por exemplo, o tópico alimentar pode produzir a palavra "brócolis" com 30% de probabilidade, "bananas" com 15% de probabilidade e assim por diante.

Assumindo esse modelo generativo para uma coleção de documentos, o LDA tenta voltar atrás dos documentos para encontrar um conjunto de tópicos que provavelmente geraram a coleção.

Exemplo

Vamos fazer um exemplo. De acordo com o processo acima, ao gerar algum documento específico D, você pode

Decida que D será 1/2 sobre comida e 1/2 sobre animais fofos. Escolha 5 para ser o número de palavras em D. Escolha a primeira palavra para vir do tópico de comida, que então lhe dá a palavra "brócolis". Escolha a segunda palavra para vir do tópico de animais fofos, que lhe dá "panda". Escolha a terceira palavra para vir do tópico de animais fofos, dando-lhe "adorável". Escolha a quarta palavra para vir do tópico alimentar, dando-lhe "cerejas". Escolha a quinta palavra para vir do tópico alimentar, dando-lhe "comer".

Assim, o documento gerado sob o modelo LDA será "Broccoli panda adorable cherries eating" (note que o LDA é um modelo de saco de palavras).

Aprendendo

Então agora suponha que você tenha um conjunto de documentos. Você escolheu um determinado número fixo de tópicos K para descobrir e deseja usar o LDA para aprender a representação do tópico de cada documento e as palavras associadas a cada tópico. Como você faz isso? Uma maneira (conhecida como amostragem de Gibbs recolhida \*) é a seguinte:

Percorra cada documento e atribua aleatoriamente cada palavra do documento a um dos tópicos K. Observe que essa atribuição aleatória já fornece representações de tópicos de todos os documentos e distribuições de palavras de todos os tópicos (embora não muito bons). Então, para melhorá-los, para cada documento d… … Vá através de cada palavra w em d… …… .. E para cada tópico t, calcule duas coisas: 1) p (tópico t | documento d) = a proporção de palavras no documento d que estão atualmente atribuídas ao tópico t, e 2) p (palavra w | tópico t ) = a proporção de atribuições ao tópico t sobre todos os documentos que vêm desta palavra w. Reatribuir um novo tópico, onde você escolhe o tópico t com a probabilidade p (tópico t | documento d) \* p (palavra w | tópico t) (de acordo com nosso modelo gerativo, essa é essencialmente a probabilidade de o tópico t gerar palavra w, faz sentido que nós reamostramos o tópico da palavra atual com essa probabilidade). (Além disso, estou encobrindo algumas coisas aqui, como o uso de prioridades / pseudocontes nessas probabilidades.) …… .. Em outras palavras, nesta etapa, assumimos que todas as atribuições de tópicos, exceto a palavra atual em questão, estão corretas e, em seguida, atualizamos a atribuição da palavra atual usando nosso modelo de como os documentos são gerados. Depois de repetir o passo anterior um grande número de vezes, você chegará a um estado relativamente estável em que suas atribuições são muito boas. Portanto, use essas atribuições para estimar as misturas de tópicos de cada documento (contando a proporção de palavras atribuídas a cada tópico desse documento) e as palavras associadas a cada tópico (contando a proporção de palavras atribuídas a cada tópico).

Explicação de Layman

No caso de a discussão acima ser um pouco ofuscante, aqui está outra maneira de ver o LDA em um domínio diferente.

Suponha que você acabou de se mudar para uma nova cidade. Você é um hipster e um fã de anime, então você quer saber onde os outros descolados e geeks de anime tendem a sair. Claro, como um hipster, você sabe que não pode simplesmente perguntar, então o que você faz?

Aqui está o cenário: você procura um monte de estabelecimentos diferentes (documentos) em toda a cidade, tomando nota das pessoas (palavras) saindo em cada uma delas (por exemplo, Alice fica no shopping e no parque, Bob fica no o cinema e o parque, e assim por diante). Crucialmente, você não conhece os típicos grupos de interesse (tópicos) de cada estabelecimento, nem conhece os diferentes interesses de cada pessoa.

Então você escolhe um número K de categorias para aprender (ou seja, você quer aprender os K tipos mais importantes de categorias nas quais as pessoas entram), e começa fazendo uma suposição sobre por que você vê as pessoas onde você faz. Por exemplo, você inicialmente adivinha que Alice está no shopping porque as pessoas com interesses em X gostam de ficar por ali; quando você a vê no parque, você acha que é porque seus amigos com interesses em Y gostam de ficar lá; quando você vê Bob no cinema, você adivinha aleatoriamente que é porque as pessoas Z nesta cidade realmente gostam de assistir filmes; e assim por diante.

É claro que suas estimativas aleatórias são muito provavelmente incorretas (afinal de contas, são adivinhações aleatórias, afinal!), Então você quer aperfeiçoá-las. Uma maneira de fazer isso é:

Escolha um lugar e uma pessoa (por exemplo, Alice no shopping). Por que Alice está no shopping? Provavelmente porque outras pessoas no shopping com os mesmos interesses lhe enviaram uma mensagem dizendo-lhe para vir. Em outras palavras, quanto mais pessoas com interesses em X estiverem no shopping e quanto mais forte Alice estiver associada ao interesse X (em todos os outros lugares para onde ela frequenta), mais provável é que Alice esteja no shopping por causa de interesse X. Então, faça um novo palpite a respeito de porque Alice está no shopping, escolhendo um interesse com alguma probabilidade de acordo com a probabilidade que você pensa que é.

Vá através de cada lugar e pessoa uma e outra vez. Seus palpites estão ficando cada vez melhores (afinal, se você notar que muitos geeks ficam na livraria, e você suspeita que Alice é muito nerd, então é uma boa aposta que Alice está na livraria porque seus amigos geeks disseram ela vai lá; e agora que você tem uma idéia melhor do porquê Alice provavelmente está na livraria, você pode usar esse conhecimento para melhorar suas suposições sobre porque todos os outros estão onde estão), e assim, eventualmente, você pode parar atualização. Em seguida, tire um instantâneo (ou vários instantâneos) de seus palpites e use-o para obter todas as informações desejadas:

Para cada categoria, você pode contar as pessoas atribuídas a essa categoria para descobrir o que as pessoas têm esse interesse específico. Ao olhar para as próprias pessoas, você pode interpretar a categoria também (por exemplo, se a categoria X contiver muitas pessoas altas usando camisetas e carregando bolas de basquete, você pode interpretar X como o grupo de "jogadores de basquete"). Para cada lugar P e categoria de interesse C, você pode calcular as proporções de pessoas em P por causa de C (sob o conjunto atual de atribuições), e elas fornecem uma representação de P. Por exemplo, você pode aprender que as pessoas na Barnes & Noble, há 10% de descolados, 50% de fãs de anime, 10% de atletas e 30% de estudantes universitários.

Exemplo do mundo real

Finalmente, vamos passar por um exemplo do mundo real. Eu apliquei o LDA a um conjunto de e-mails de Sarah Palin há pouco tempo (veja http://blog.echen.me/2011/06/27/… para um post no blog, ou http://sarah-palin.heroku.com / para um aplicativo que permite navegar pelos e-mails pelos tópicos aprendidos pelo LDA), aqui estão alguns dos tópicos que o algoritmo aprendeu:

Trig / Família / Inspiração: família, web, correio, deus, filho, de, parabéns, filhos, vida, criança, baixo, trigonometria, bebê, nascimento, amor, você, síndrome, muito, especial, abençoe, velho, marido, anos, obrigado, melhor… Wildlife / BP Corrosion: jogo, peixes, alces, animais selvagens, caça, ursos, polar, urso, subsistência, gestão, área, placa, caça, lobos, controle, departamento, ano, uso, lobo, habitat, caçadores, caribu, programa , denby, pesca,… Energia / Combustível / Petróleo / Mineração: energia, combustível, custos, petróleo, Alasca, preços, custo, atual, alto, ser, casa, público, energia, minas, crise, preço, recurso, necessidade, comunidade, fairbanks, rebate, uso, mineração, aldeias,… Gás: gás, petróleo, gasoduto, agia, projeto, natural, norte, produtores, empresas, fiscais, empresa, energia, desenvolvimento, inclinação, produção, recursos, linha, gasline, transcanada, dito, bilhões, plano, administração, milhões, indústria,… Educação / Resíduos: escola, desperdício, educação, estudantes, escolas, milhões, ler, e-mail, mercado, política, estudante, ano, alta, notícias, estados, programa, primeiro, relatório, negócios, gestão, boletim, informação, relatórios, 2008, trimestre,… Campanha Presidencial / Eleições: correio, web, de, obrigado, você, caixa, mccain, sarah, muito, bom, grande, john, esperança, presidente, sinceramente, wasilla, trabalho, mantenha, faça, adicione, família, republicano, apoio , fazendo, po…

#### Leitura sugerida:

*   https://en.wikipedia.org/wiki/Latent Alocação de _Dirichlet_
*   http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/