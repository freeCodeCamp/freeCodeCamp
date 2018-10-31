---
title: Docker
localeTitle: Docker
---
## Docker

O Docker é uma plataforma aberta para criar, enviar e executar aplicativos distribuídos. Está escrito em Go. Foi lançado pela primeira vez em 2013 e é desenvolvido pela Docker, Inc.

O Docker é usado para executar pacotes chamados "contêineres". Os contêineres são isolados uns dos outros e do sistema operacional, apenas acessando arquivos do hospedeiro e portas configuradas. Eles são mais leves que as máquinas virtuais, pois os arquivos da Máquina Virtual e aplicações são entrelaçados com as configurações do Sistema Operacional hospedeiro, possui dependência na máquina hospedeira, depende de patches de segurança,e outras particularidades que são fáceis de se perder.

Containerization, que é uma maneira de implementar e executar aplicativos, executa serviços isolados que são executados nativamente no kernel do Linux. A memória pode ser definida manualmente para cada contêiner no Docker.

O Docker é usado para simplificar configurações e garantir um fluxo contínuo e suave de integração e implantação. Contêineres específicos podem ser especificados para ambientes de desenvolvimento, preparação e produção. Uma implementação real de um contêiner em produção, de acordo com o manual do Docker, é executá-lo como um serviço, usando o arquivo `docker-compose.yml` para configuração. Este é um arquivo YAML que define como os contêineres do Docker devem se comportar na produção.

Uma das maiores vantagens do Docker é que ele pode ser usado por uma equipe que usa diferentes sistemas operacionais para criar projetos sem precisar se preocupar com conflitos de software.

A conteirização está subindo na popularidade porque containers são:

- Flexívies: Até as mais complexas aplicações podem ser conteinarizadas.
- Leves: Containers utilizam e compartilham o kernel do hospedeiro
- Intercambiáveis: Você pode instalar updates e upgrades no momento de execução (on-the-fly).
- Portáveis: Você pode montar localmente, realizar o deploy para a nuvem, e executar em qualquer lugar.
- Escaláveis: Você pode aumentar e distruibuir automaticamente réplicas do container.
- Empilhável: Você pode empilhar serviços verticalmente e no momento de execução (on-the-fly).

### Instalação

*   [Ubuntu]: `sudo apt install docker`(https://docs.docker.com/install/linux/docker-ce/ubuntu/)
    
*   [RedHat]: `yum install docker-ce`
    
*   [Windows]: [Download](https://docs.docker.com/docker-for-windows/install/)
    
*   [Mac]: [Download] (https://docs.docker.com/docker-for-mac/install/)
    
```
curl -fsSL https://get.docker.com -o get-docker.sh 
 sh get-docker.sh 
```

## Testando a versão do Docker

Para testar se a instalação da aplicação foi bem sucedida, execute:

```
docker --version
```

Confime se a versão que retornou seja igual a:

```
Docker version 18.06.1-ce, build e68fc7a
```

---

## Teste da instalação do Docker

Teste se a instalação está funcionando executando uma imagem Docker, a hello-world:

```
docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
ca4f61b1923c: Pull complete
Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

## O que é conteirização:
Em termo simples, é nbada mais do que realizar o packaging de um processo/aplicação e as suas depêndencias em uma imagem que pode ser distruibida que possa ser exeutada em um ambiente isolado.

## Porque precisamos de Docker:
Faz que a vida dos engenheiros de software, desenvolvedores, testers, sysadmin mais tranquila pois irão sempre trabalhar no mesmo ambiente de desenvolvimento.
Ajuda a compartilhar o produto final para os clientes/outros times sem se preocupar com as particularidades de cada ambiente.
Reduz o montante de hardware que precisamos para executar as aplicações em não gastando em camadas adicionais no Sistema Operacional.

## Conceitos fundamentais Docker
### Docker Engine (Motor do Docker)
O Docker Engine é aonde o Docker é executado. É um runtime leve e uma caixa de ferramentas que gerencia containers, imagens, builds, e muito mais. É executado nativamente nos sistemas Linux, e é constituido por:

1. Um daemon Docker que é executado no computador hospedeiro.

2. Um Cliente Docker que se comunica com o daemon Docker para a execução de comandos.

3. Uma API REST para a interação com o daemon Docker remotamente.

### Docker Client (Cliente Docker):
O Cliente Docker é o que nós utilizamos para se comunicar. Pense como se fosse um UI para Docker.


### Docker Daemon:
O daemon Docker é o que realmente executa os comandos enviados pelo Cliente Docker - como buildar, executar e distribuir os containers. O daemon Docker executa na máquina hospedeira, mas como usuário, você nunca se comunica diretamente com o daemon. O Cliente Docker pode ser executado na máquina hospedeira, mas não é requisito. Pode ser executado em uma máquina diferente e se comunicar com o daemon Docker que está sendo executado na máquina hospedeira.

#### Mais Informações:

*   Para download e documentação, verifique o site oficial do [docker](https://www.docker.com) : Site oficial do [Docker](https://www.docker.com)
*   Para mais informações sobre conteinerização, faça o checkout [Search IT Operations](https://searchitoperations.techtarget.com/definition/application-containerization-app-containerization)
*   Um Docker 101 de [Docker 101](https://github.com/docker/labs/tree/master/beginner/)
