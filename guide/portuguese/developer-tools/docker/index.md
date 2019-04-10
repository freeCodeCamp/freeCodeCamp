---
title: Docker
localeTitle: Docker
---
O Docker é um software de código aberto destinado a facilitar a implantação de aplicativos. Ele oferece a possibilidade de construir contêineres, incluindo um sistema operacional, bibliotecas e tudo o que você precisa para executar seu aplicativo. Portanto, seu aplicativo pode ser implantado em qualquer máquina. Sua estrutura leve permite que você executar vários contêineres na mesma máquina. Uma imagem contêiner é um pacote executável lightwieght, autônomo, de um software que inclui tudo necessário para executá-lo.

### Características

Contêineres do Docker em execução em uma única máquina compartilham o kernel do sistema operacional dessa máquina; eles começam instantaneamente e usam menos computação e RAM. Imagens são construído a partir de camadas do sistema de arquivos e compartilha arquivos comuns. Isso minimiza o uso do disco e os downloads de imagens são muito mais rápidos.

Os contêineres Docker são baseados em padrões abertos e executados em todas as principais distribuições \* nix, Microsoft Windows e em qualquer infraestrutura, incluindo VMs, bare-metal e na nuvem.

Os contêineres do Docker isolam os aplicativos uns dos outros e da infraestrutura subjacente. O Docker fornece o isolamento padrão mais forte para limitar o aplicativo problemas para um único contêiner em vez de toda a máquina.

## Visão geral

Uma imagem de contêiner é um pacote executável leve e autônomo de um software que inclui tudo o que é necessário para executá-lo: código, tempo de execução, ferramentas do sistema, bibliotecas do sistema, configurações. Disponível para aplicativos baseados em Linux e Windows, o software conteinerizado sempre será executado da mesma forma, independentemente do ambiente. Os contêineres isolam o software de seus arredores, por exemplo, diferenças entre ambientes de desenvolvimento e de preparação e ajudam a reduzir conflitos entre equipes que executam software diferente na mesma infraestrutura.

### Veja também

*   Docker Compose: para criar e gerenciar vários contêineres ao mesmo tempo.

### Contêineres vs. Máquinas virtuais

*   Os contêineres virtualizam o sistema operacional, tornando-os mais portáteis, enquanto as VMs virtualizam o hardware.
*   Os contêineres são uma abstração na camada de aplicativo que agrupa código e dependências. As VMs são uma abstração de hardware físico, transformando um servidor em muitos. O hipervisor ajuda a VM a fazer isso.
*   [CONTENTORES NÃO SÃO VMS](https://blog.docker.com/2016/03/containers-are-not-vms/)

### Instalação do Docker

O Docker está disponível em duas edições: Community Edition (CE) e Enterprise Edition (EE).

[Instale-o daqui](https://docs.docker.com/engine/installation/)

Uma vez instalado tente isto
```
$ docker run hello-world 
 
 Hello from Docker! 
```

Esta mensagem mostra que sua instalação parece estar funcionando corretamente.

### Onde usar o Docker

*   [8 maneiras reais comprovadas de usar o Docker](https://www.airpair.com/docker/posts/8-proven-real-world-ways-to-use-docker)
    
*   [O que é o Docker e quando usá-lo](https://www.ctl.io/developers/blog/post/what-is-docker-and-when-to-use-it/)
    

### Tutoriais do Docker

*   [Documentação](https://docs.docker.com/get-started/)
    
*   [Docker para iniciantes](https://docker-curriculum.com/)
    
*   [Tutoriais e cursos do Docker](https://hackr.io/tutorials/learn-docker)
    
*   [Treinamento Docker. Aprenda Docker From Docker. Treinamento Oficial Docker.](https://training.docker.com/)
    

#### Mais Informações:

Você pode encontrar muitas informações nos seguintes sites:

*   [Site do Docker](https://www.docker.com/)
*   [Docker docs](https://docs.docker.com/)
*   [DockerHub](https://hub.docker.com/)