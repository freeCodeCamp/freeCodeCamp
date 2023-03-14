# Configure o freeCodeCamp no subsistema Windows para Linux (WSL)

> [!NOTE] Antes de seguir estas instruções, verifique se o sistema atende aos requisitos
> 
> **WSL 2**: Windows 10 64-bit (Versão 2004, Build 19041 ou superior) - disponível para todas as distribuições, incluindo o Windows 10 Home.
> 
> **Docker Desktop para Windows**: Veja os respectivos requisitos para [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) e [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Este guia abrange algumas etapas comuns sobre a instalação do WSL2. Uma vez resolvidos alguns dos problemas comuns com o WSL2, você deve seguir o nosso [guia de instalação local](how-to-setup-freecodecamp-locally.md) para trabalhar com o freeCodeCamp no Windows executando uma distro WSL como o Ubuntu.

## Ative o WSL

Siga as instruções na [documentação oficial](https://docs.microsoft.com/en-us/windows/wsl/install-win10) para instalar o WSL1 e atualizar para o WSL2.

## Instale o Ubuntu

1. Recomendamos usar Ubuntu-18.04 ou superior com WSL2.

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

(Opcional, mas recomendado) Agora você pode prosseguir para [configurar suas chaves ssh](https://help.github.com/articles/generating-an-ssh-key) com o GitHub.

## Instalando um Editor de Código

É altamente recomendável instalar o [Visual Studio Code](https://code.visualstudio.com) no Windows 10. Tem um ótimo suporte para WSL e instala automaticamente todas as extensões necessárias na distribuição WSL.

Essencialmente, você irá editar e armazenar seu código no Ubuntu-18.04 com o VS Code instalado no Windows.

Se você usa o [IntelliJ Idea](https://www.jetbrains.com/idea/), talvez precise atualizar seu interpretador do Node e seu gerenciador de pacotes NPM pelo que estiver instalado em sua distro WSL.

Você pode checar essas configurações indo em Settings > Languages & Frameworks > Node.js and NPM.

## Instalando o Docker Desktop

**O Docker Desktop para Windows** permite instalar e executar banco de dados e serviços como MongoDB, NGINX, etc. Isso é útil para evitar problemas comuns com a instalação do MongoDB ou outros serviços diretamente no Windows ou WSL2.

Siga as instruções da [documentação oficial](https://docs.docker.com/docker-for-windows/install) e instale o Docker Desktop para a sua distribuição no Windows.

Existem alguns requisitos mínimos de hardware para melhor experiência.

## Configure o Docker Desktop para WSL

Quando o Docker Desktop estiver instalado, [siga estas instruções](https://docs.docker.com/docker-for-windows/wsl) e configure-o para usar a instalação do Ubuntu-18.04 como backend.

Isso faz com que os contêineres sejam executados no lado do WSL em vez de serem executados no Windows. Você será capaz de acessar os serviços através do `http://localhost` tanto no Windows quanto no Ubuntu.

## Instale MongoDB usando Docker Hub

Depois de ter configurado o Docker Desktop para trabalhar com o WSL2, siga essas etapas para iniciar um serviço no MongoDB:

1. Inicie um novo terminal Ubuntu-18.04

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

4. Agora você pode acessar o serviço no Windows ou Ubuntu em `mongodb://localhost:27017`.

## Instalando o Node.js e o pnpm

Recomendamos que você instale a versão LTS para Node.js com um gerenciador de versões do node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Uma vez instalado, use esses comandos para instalar e usar a versão do Node.js, conforme necessário

```console
nvm install --lts

# OU
# nvm install <version>

nvm install 14

# Uso
# nvm use <version>

nvm use 12
```

O Node.js vem com o `npm`, que você pode usar para instalar o `pnpm`:

```console
npm install -g pnpm
```

## Configure localmente o freeCodeCamp

Agora que você instalou os pré-requisitos, siga [nosso guia de instalação local](how-to-setup-freecodecamp-locally.md) para clonar, instalar e configurar o freeCodeCamp em sua máquina.

> [!WARNING]
> 
> Por favor note que, neste momento, a configuração para testes do Cypress (e necessidades relacionadas à GUI) são um trabalho em andamento. Você ainda deve ser capaz de trabalhar na maior parte do código.

## Links Úteis

- [Configuração de desenvolvimento do WSL2 com Ubuntu 20.04, Node.js, MongoDB, VS Code e Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - um artigo de Mrugesh Mohapatra (desenvolvedor da equipe do freeCodeCamp.org)
- Perguntas frequentes sobre:
  - [Subsistema Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
