---
título: Docker
---
## Docker

O Docker é uma plataforma aberta para criar, enviar e executar aplicativos distribuídos. Está escrito em Go. Foi lançado pela primeira vez em 2013 e é desenvolvido pela Docker, Inc.

O Docker é usado para executar pacotes chamados "containers". Os containers são isolados uns dos outros e do sistema operacional. Eles são mais leves que as máquinas virtuais, pois não usam a máquina host para executar um sistema operacional.

Containerização, que é uma maneira de implementar e executar aplicativos, executa serviços isolados que são executados nativamente no kernel do Linux. A memória pode ser definida manualmente para cada contêiner no Docker.

O Docker é usado para simplificar configurações e garantir um fluxo contínuo e suave de integração e implantação. Containers específicos podem ser especificados para ambientes de desenvolvimento, preparação e produção. Uma implementação real de um contêiner em produção, de acordo com o manual do Docker, é executá-lo como um serviço, usando o arquivo `docker-compose.yml` para configuração. Este é um arquivo YAML que define como os containers do Docker devem se comportar na produção.

Uma das maiores vantagens do Docker é que ele pode ser usado por uma equipe que usa sistemas operacionais diferentes para criar projetos sem precisar se preocupar com conflitos de software.

### Instalação

* Ubuntu: `sudo apt install docker`

* RedHat: `yum install docker-ce`

* Windows / macOS: [Download](https://www.docker.com/get-started)

* Linux:
a
```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

#### Mais informações:

* Para download e documentação, verifique o site oficial do docker: [Docker official site](https://www.docker.com)
* Para mais sobre containerização, checkout [Procure IT Operations](https://searchitoperations.techtarget.com/definition/application-containerization-app-containerization)
* Curso Docker 101 [Docker 101](https://github.com/docker/labs/tree/master/beginner/)

