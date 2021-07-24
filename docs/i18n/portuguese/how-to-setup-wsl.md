# Configure o freeCodeCamp no subsistema Windows para Linux (WSL)

> [!NOTE] Antes de seguir estas instruções, verifique se o sistema atende aos requisitos
> 
> **WSL 2**: Windows 10 64-bit (Version 2004, Build 19041 or higher) - available for all distributions including Windows 10 Home.
> 
> **Docker Desktop for Windows**: See respective requirements for [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) and [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Este guia abrange algumas etapas comuns sobre a instalação do WSL2. Uma vez resolvidos alguns dos problemas comuns com o WSL2, você deve seguir o nosso [guia de instalação local](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) para trabalhar com o freeCodeCamp no Windows executando uma distro WSL como o Ubuntu.

## Ative o WSL

Siga as instruções na [documentação oficial](https://docs.microsoft.com/en-us/windows/wsl/install-win10) para instalar o WSL1 e atualizar para o WSL2.

## Instale o Ubuntu

1. We recommended using Ubuntu-18.04 or above with WSL2.

   > [!NOTE]
   > 
   > Embora você possa usar outras distribuições não baseadas em Debian, todas vêm com seus próprios empecilhos e estão além do escopo deste guia.

2. Atualize as dependências para o sistema operacional

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Configure o Git

O Git vem pré-instalado com Ubuntu 18.04, verifique sua versão do Git com `git --version`.

```output
~
❯ git --version
git version 2.25.1
```

(Optional but recommended) You can now proceed to [setting up your ssh keys](https://help.github.com/articles/generating-an-ssh-key) with GitHub.

## Installing a Code Editor

We highly recommend installing [Visual Studio Code](https://code.visualstudio.com) on Windows 10. Tem um ótimo suporte para WSL e instala automaticamente todas as extensões necessárias na distribuição WSL.

Essentially, you will edit and store your code on Ubuntu-18.04 with VS Code installed on Windows.

Se você usa o [IntelliJ Idea](https://www.jetbrains.com/idea/), talvez precise atualizar seu interpretador do Node e seu gerenciador de pacotes NPM pelo que estiver instalado em sua distro WSL.

Você pode checar essas configurações indo em Settings > Languages & Frameworks > Node.js and NPM.

## Installing Docker Desktop

**O Docker Desktop para Windows** permite instalar e executar banco de dados e serviços como MongoDB, NGINX, etc. Isso é útil para evitar problemas comuns com a instalação do MongoDB ou outros serviços diretamente no Windows ou WSL2.

Siga as instruções da [documentação oficial](https://docs.docker.com/docker-for-windows/install) e instale o Docker Desktop para a sua distribuição no Windows.

Existem alguns requisitos mínimos de hardware para melhor experiência.

## Configure o Docker Desktop para WSL

Quando o Docker Desktop estiver instalado, [siga estas instruções](https://docs.docker.com/docker-for-windows/wsl) e configure-o para usar a instalação do Ubuntu-18.04 como backend.

Isso faz com que os contêineres sejam executados no lado do WSL em vez de serem executados no Windows. Você será capaz de acessar os serviços através do `http://localhost` tanto no Windows quanto no Ubuntu.

## Instale MongoDB usando Docker Hub

Depois de ter configurado o Docker Desktop para trabalhar com o WSL2, siga essas etapas para iniciar um serviço no MongoDB:

1. Launch a new Ubuntu-18.04 terminal

2. Pull `MongoDB 4.0.x` do dockerhub

   ```console
   docker pull mongo:4.0
   ```

3. Inicie o serviço MongoDB na porta `27017` e configure-o para ser executado automaticamente ao reiniciar o sistema

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:4.0
   ```

4. You can now access the service from both Windows or Ubuntu at `mongodb://localhost:27017`.

## Installing Node.js and npm

Recomendamos que você instale a versão LTS para Node.js com um gerenciador de versões do node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Uma vez instalado, use esses comandos para instalar e usar a versão do Node.js, conforme necessário

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm use 12
```

O Node.js vem com o `npm` embutido. Você pode atualizar para as versões mais recentes do `npm` com:

```console
npm install -g npm@latest
```

## Configure localmente o freeCodeCamp

Agora que você instalou os pré-requisitos, siga [nosso guia de instalação local](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) para clonar, instalar e configurar o freeCodeCamp em sua máquina.

> [!WARNING]
> 
> Por favor note que, neste momento, a configuração para testes do Cypress (e necessidades relacionadas à GUI) são um trabalho em andamento. You should still be able to work on most of the codebase.

## Useful Links

- [Configuração de desenvolvimento WSL2 com Ubuntu 20.04, Node.js, MongoDB, VS Code e Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - um artigo de Mrugesh Mohapatra (Desenvolvedor de Equipe na freeCodeCamp.org)
- Frequently asked questions on:
  - [Subsistema Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/faqs)
