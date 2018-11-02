---
title: GPU
localeTitle: GPU
---
## GPU

GPU significa Unidade de Processamento Gráfico. A maioria dos computadores os usa para renderizar vídeos ou jogar videogames.

Uma GPU é como uma CPU, mas possui diferentes pontos fortes e fracos. As CPUs são muito boas em executar algumas tarefas muito rapidamente. GPUs são muito melhores em executar muitas tarefas ao mesmo tempo, mas mais lentas. Uma GPU típica pode ter mais de 10.000 tarefas em execução, mas para executar tantas tarefas ao mesmo tempo, elas precisam compartilhar memória e outros recursos. As GPUs geralmente executam várias tarefas repetitivas para evitar que a CPU perca tempo. Algumas CPUs têm GPUs internas, mas ter uma GPU separada é quase sempre mais poderosa.

As GPUs podem ser usadas para computação e renderização de vídeo. Maneiras comuns de fazer isso incluem OpenACC, CUDA, OpenCL e OpenGL. Alguns aplicativos incluem implementações de GPU para reduzir o tempo que o aplicativo leva para ser executado.

A GPU foi originalmente usada principalmente para renderização de jogos em 3D para melhorar sua resolução e framerate. Mas agora esses recursos estão sendo aproveitados de forma mais ampla para melhorar as cargas de trabalho computacionais em muitas áreas; por exemplo, modelagem financeira, pesquisa científica de ponta e exploração de petróleo e gás. As GPUs também são usadas como recurso para mineração de bitcoin, pois são capazes de executar tarefas repetitivas facilmente sem sobrecarregar os recursos da CPU, o que permite que você execute um Sistema Operacional no computador com uma CPU de baixo nível e ainda possa usar bitcoin usando a GPU

Existem duas grandes marcas produzindo GPUs: NVidia e AMD. Eles são frequentemente referidos como "equipe verde" e "equipe vermelha", que indicam a cor principal de seu logotipo.

Fabricantes notáveis ​​de GPUs incluem: Nvidia e AMD / ATI.

## Origem da GPU

O background mais primitivo da GPU pode ser mapeado para a era dos controladores VGA (Virtual Graphics Array). Mas estes não eram realmente uma unidade de processamento completa, mas atuavam como unidades de suporte para funções de exibição. Um controlador VGA é um controlador de memória simples conectado à RAM dinâmica e um gerador de exibição. A principal função de um VGA é receber dados de imagem, organizá-los adequadamente e enviá-los para um dispositivo de vídeo, que era principalmente um monitor de computador ou uma tela de TV conectada a um console de jogos para exibição.

A primeira unidade de processamento completa para aceleração gráfica foi desenvolvida e comercializada pela NVIDIA em 1999, "GeForce 256". Os aceleradores 3D mais antigos precisavam confiar na CPU para executar cálculos gráficos. Com o novo "GeForce 256" como um co-processador para CPU, melhorou a taxa de quadros em mais de 50% e reduziu o custo total, expandindo-se assim no mercado de consumo.

## GPU vs CPU

Uma CPU é otimizada para latência mínima, ou seja, "para poder executar o maior número possível de instruções pertencentes a um único thread serial, em uma determinada janela de tempo". O processador deve ser capaz de alternar rapidamente entre as operações. Para obter muita latência na CPU, há muita infraestrutura na CPU, como grandes caches para que os dados fiquem prontamente disponíveis para execução, muitas Unidades de Controle para execuções fora de ordem e alguns núcleos de ALU. O ISA da CPU é projetado de maneira mais generalizada e pode executar uma ampla gama de operações. Enquanto a CPU foi projetada para cálculos e instruções de uso geral, a GPU evoluiu para cálculos gráficos. A mesma computação precisa ser executada em centenas e milhares de pixels para renderização 2D / 3D de gráficos. Assim, as GPUs foram otimizadas principalmente para o rendimento máximo. Isso é implementado usando toneladas de ALUs em uma única arquitetura. O cache L2 é encolhido porque, até que os dados sejam buscados a partir da DRAM, os núcleos da GPU têm muitos cálculos a serem executados, sobrepondo assim o tempo de inatividade da CPU com o paralelismo massivo. Isso é conhecido como ocultação de latência.

## Evolução da arquitetura GPU

As GPUs foram originalmente modeladas no conceito de pipeline de gráficos. O pipeline de gráficos é um modelo teórico, composto por níveis como os dados gráficos devem ser enviados e executados usando GPU e software (como OpenGL, DirectX). O pipeline basicamente converte coordenadas espaciais 3D em dados pixelizados 2D para o dispositivo exibir. A seguir, uma ilustração de "Pipeline de gráficos de função fixa tradicional", um pipeline comumente aceito até hoje.

### 0ª geração

A placa "Reality Engine" da Silicon Graphics Inc. (SGI) marcou o início do hardware da GPU e do pipeline gráfico. Mas a tecnologia ainda dependia da CPU no primeiro semestre. Além disso, a velocidade foi limitada a uma execução de pixel por ciclo de clock. O motor usa o OpenGL, uma programação de aplicativos 2D / 3D amplamente utilizada.

### 1Geração

O "3dfx Voodoo" (1996) evoluiu como um dos primeiros verdadeiros aceleradores 3D para jogos. Ele lidava com mapeamento de texturas, rasterização e z-buffering, mas a CPU ainda tinha que fazer transformações de vértices.

### 2Geração

Este é o ponto em que a primeira verdadeira GPU, a "GeForce 256" da NVIDIA, foi lançada no mercado comum. As GPUs da AGP (Accelerated Graphics Port) usada nesta geração ofereceram novas funções como multi-texturização, transformação de geometria de hardware, mapas de luz e iluminação. Os pipelines tradicionais eram conhecidos como pipeline de "função fixa", porque, quando o desenvolvedor enviava dados gráficos para o pipeline da GPU, os dados não podiam ser alterados.

### 3ª geração

Com esta geração de CPUs, pipelining programável passou a existir. Agora, as partes anteriormente não programáveis ​​podem ser programadas por programadores. Em 2001, a NVIDIA lançou o GeForce3.

### 4ª geração

Com o início do século 21, as primeiras "placas gráficas totalmente programáveis" chegaram aos consumidores. A NVIDIA GeForce FX e a ATI Radeon 9700 estavam entre as primeiras. Essas GPUs podem fazer operações por pixel, juntamente com pixel shaders e vértices programáveis. Mas, hardwares dedicados separados eram necessários para o processamento de shader de pixel e sombreamento de vértice.

### 5ª geração

As GPUs estavam evoluindo e avançando em sua taxa de pico e esta geração de GPUs foi a primeira a utilizar o barramento PCI Express. Vários buffers de renderização, suporte a 64 bits, acesso à textura, etc. foram introduzidos, juntamente com o aumento da memória da GPU.

### 6ª geração

Em 2006, o lançamento da GPU da série NVIDIA GeForce 8 revolucionou a indústria e o alcance da GPU, introduzindo a GPU como processadores massivamente paralelos. Foi o primeiro a ter shaders "unificados" e "programáveis" ou, em outras palavras, processador unificado programável. Unificado significa que todos os processos de pipeline de gráficos foram executados em um único processador e nenhuma unidade externa é necessária para qualquer estágio. Os componentes básicos da arquitetura GPU unificada são discutidos abaixo.

Desde o lançamento das GPUs NVidia da série 9XX, o aumento de desempenho entre gerações só melhorou. Do 980Ti ao 1080Ti e ao recém-lançado 208Tis, o desempenho mais do que dobrou. A AMD também começou a produzir GPUs melhores, como o RX 580 e o Vega 64, embora isso ainda esteja longe do nível da Nvidia. Recentemente, a Nvidia lançou uma nova linha de GPUs intitulada RTX, que inclui as placas mais sofisticadas, como 2080Ti, 2080 e 2070. RTX significa "Ray Tracing", que é uma técnica de renderização usada na geração de imagens que traça o caminho da luz. em uma cena.

## Componentes básicos da arquitetura GPU unificada

As arquiteturas de GPU unificadas são baseadas em uma matriz paralela de muitos processadores programáveis, em que todos os estágios de pipeline de gráficos, viz, vértice, geometria, rasterização e processamento de sombreamento de pixel e cálculos paralelos no mesmo núcleo, em contraste com GPUs anteriores. O conjunto de processadores é altamente integrado com processadores de função fixos para compactação e descompactação, rasterização, operações de rasterização, filtragem de texturas, anti-aliasing, decodificação de vídeo e processamento de vídeo HD.

A arquitetura discutida a seguir está focada na execução de muitos threads paralelos de maneira eficiente em muitos núcleos de processador.

### Matriz do processador

Um array de processadores consiste em muitos núcleos de processamento. Um array de processadores GPU unificado possui uma estrutura organizada típica de multiprocessadores multi-threaded. Para a execução de cada encadeamento, um multiprocessador é envolvido e, em cada multiprocessador de GPUs, também conhecido como Multiprocessadores de Fluxo (SM), há vários processadores de Fluxo, organizados em uma fila. Todos os processadores se conectam a partições DRAM via rede de interconexão.

### Multi-Threading

Como discutido anteriormente, a GPU é otimizada para alto rendimento e ocultação de latência. O multithreading de alta escala reduz a latência de cargas de memória da DRAM. Enquanto um encadeamento fica parado por causa de uma instrução load ou fetch para concluir, o processador pode executar outro encadeamento. Além disso, devido ao multithreading de alta escala, a GPU suporta modelos de programação de sombreamento de gráficos paralelos de baixa granularidade e modelos de programação paralela de computador refinado.

### Arquitetura Multi-Processador

Além de múltiplos núcleos de processador em um SM, há Unidades Funcionais Especiais, uma unidade de instrução multithread, caches de instrução e constantes, e uma memória compartilhada. Além disso, cada núcleo consiste em um grande arquivo de registro multi-threaded (RF). Cada núcleo do processador de streaming consiste em unidades aritméticas inteiras e de ponto flutuante, que juntas podem manipular a maioria das operações.

### SIMT

O multiprocessador de streaming usa uma arquitetura "single-instruction multiple-thread (SIMT)". As instruções são executadas no grupo de threads paralelas conhecidas como warps. Cada thread paralela é do mesmo tipo e inicia em conjunto no mesmo endereço do programa. A arquitetura do processador SIMT é bastante semelhante à arquitetura SIMD. No SIMT, uma instrução específica é executada em vários encadeamentos paralelos de forma independente, enquanto no SIMD, a mesma instrução é executada em várias faixas de dados em grupos síncronos.

### Processador de Streaming

Executa todas as operações FP fundamentais, bem como instruções aritméticas, de comparação, conversão e PTX lógicas. Unidade Funcional Especial Algumas das instruções de thread são executadas em SFUs simultaneamente com outras instruções de thread sendo executadas nos SPs.

#### Mais Informações:

*   [Wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit)
*   [OpenACC](https://www.openacc.org/)
*   [CUDA](https://developer.nvidia.com/cuda-zone)
*   [OpenCL](https://www.khronos.org/opencl/)
*   [OpenGL](https://www.opengl.org/)
*   [nVidia Blog](https://blogs.nvidia.com/blog/2009/12/16/whats-the-difference-between-a-cpu-and-a-gpu/)
*   [NVidia](https://www.nvidia.com/)
*   [AMD](http://www.amd.com/en-us/products/graphics)