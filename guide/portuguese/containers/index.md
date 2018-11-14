---
title: Containers
localeTitle: Recipientes
---
## Recipientes

Os contêineres são uma solução para o problema de como fazer com que o software seja executado de forma confiável quando movido de um ambiente de computação para outro. Isso pode ser de um laptop de desenvolvedor para um ambiente de teste, de um ambiente de preparo para produção e talvez de uma máquina física. um Data Center para uma máquina virtual em uma nuvem privada ou pública.

Em outras palavras, um Container consiste em um ambiente de tempo de execução inteiro: um aplicativo, além de todas as suas dependências, bibliotecas e outros binários e arquivos de configuração necessários para executá-lo, agrupados em um pacote. Contendo a plataforma de aplicativos e suas dependências, as diferenças nas distribuições do sistema operacional e na infraestrutura subjacente são abstraídas.

Os contêineres são uma virtualização no nível do sistema operacional - um recurso do sistema operacional no qual o kernel permite a existência de várias instâncias isoladas do espaço do usuário. Essas instâncias, chamadas containers, podem parecer computadores reais do ponto de vista de programas executados neles.

## Máquinas virtuais

Uma VM é essencialmente uma emulação de um computador real que executa programas como um computador real. As VMs são executadas na parte superior de uma máquina física usando um “hipervisor”. Um hypervisor, por sua vez, é executado em uma máquina host ou em um hardware “bare-metal”.

Um _hipervisor_ é um software, firmware ou hardware que as VMs executam em cima. Os próprios hipervisores são executados em computadores físicos, chamados de "máquina host". A máquina host fornece recursos às VMs, incluindo RAM e CPU. Esses recursos são divididos entre VMs e podem ser distribuídos conforme você preferir. Portanto, se uma VM estiver executando um aplicativo com recursos mais pesados, você poderá alocar mais recursos para essa que as outras VMs em execução na mesma máquina host.

A VM que está sendo executada na máquina host (novamente, usando um hipervisor) também é chamada de “máquina convidada”. Essa máquina convidada contém tanto o aplicativo quanto o que ele precisa para executar esse aplicativo (por exemplo, binários e bibliotecas do sistema). Ele também carrega uma pilha inteira de hardware virtualizado, incluindo adaptadores de rede virtualizados, armazenamento e CPU - o que significa que também possui seu próprio sistema operacional convidado completo. Por dentro, a máquina convidada se comporta como uma unidade própria, com recursos dedicados. Do lado de fora, sabemos que são recursos de compartilhamento de VM fornecidos pela máquina host.

Como mencionado acima, uma máquina convidada pode ser executada em um hipervisor hospedado ou em um hipervisor bare-metal. Existem algumas diferenças importantes entre eles.

Primeiramente, um hypervisor de virtualização hospedado é executado no sistema operacional da máquina host. Por exemplo, um computador executando o OSX pode ter uma máquina virtual (por exemplo, VirtualBox ou VMware Workstation 8) instalada na parte superior do sistema operacional. A VM não tem acesso direto ao hardware, por isso tem que passar pelo sistema operacional do host (no nosso caso, o Mac OSX).

O benefício de um hipervisor hospedado é que o hardware subjacente é menos importante. O sistema operacional do host é responsável pelos drivers de hardware em vez do próprio hipervisor e, portanto, é considerado como tendo mais “compatibilidade de hardware”. Por outro lado, essa camada adicional entre o hardware e o hipervisor cria mais sobrecarga de recursos, o que diminui o desempenho da VM.

Um ambiente de hypervisor bare-metal aborda o problema de desempenho instalando e executando a partir do hardware da máquina host. Como ele interage diretamente com o hardware subjacente, ele não precisa de um sistema operacional host para ser executado. Nesse caso, a primeira coisa instalada no servidor de uma máquina host como sistema operacional será o hipervisor. Ao contrário do hipervisor hospedado, um hipervisor bare-metal possui seus próprios drivers de dispositivo e interage com cada componente diretamente para qualquer tarefa de E / S, processamento ou específica do SO. Isso resulta em melhor desempenho, escalabilidade e estabilidade. A desvantagem aqui é que a compatibilidade de hardware é limitada porque o hipervisor só pode ter tantos drivers de dispositivo integrados nele.

Depois de toda essa conversa sobre hipervisores, você pode estar se perguntando por que precisamos dessa camada adicional de "hipervisor" entre a VM e a máquina host.

Bem, como a VM tem um sistema operacional virtual próprio, o hipervisor desempenha um papel essencial ao fornecer às VMs uma plataforma para gerenciar e executar esse sistema operacional convidado. Ele permite que os computadores host compartilhem seus recursos entre as máquinas virtuais que estão sendo executadas como convidados em cima delas.

## Recipiente

Ao contrário de uma VM que fornece virtualização de hardware, um contêiner fornece virtualização no nível do sistema operacional, abstraindo o “espaço do usuário”. Você verá o que quero dizer quando descompactarmos o termo container.

Para todos os efeitos, os contêineres se parecem com uma VM. Por exemplo, eles têm espaço privado para processamento, podem executar comandos como raiz, ter uma interface de rede privada e endereço IP, permitir rotas personalizadas e regras de iptable, montar sistemas de arquivos e etc.

A grande diferença entre contêineres e VMs é que os contêineres _compartilham_ o kernel do sistema host com outros contêineres.

## Orquestração

Existem várias estruturas de orquestração de contêineres aproveitadas na produção: enxame-docker e kubernetes

## Lista de provedores de contêiner

Abaixo está uma pequena lista dos fornecedores de contêineres mais usados ​​que podem ser usados.

*   [Docker](https://www.docker.com/)
*   [Kubernetes](https://kubernetes.io/)
*   [Amazon AWS ECS](https://aws.amazon.com/ecs/?nc1=h_ls)
*   [RKT](https://github.com/rkt/rkt)
*   [Tecido Azure](https://azure.microsoft.com/en-us/services/service-fabric/)