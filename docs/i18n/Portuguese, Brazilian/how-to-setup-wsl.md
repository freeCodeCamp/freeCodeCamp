# Configurar o freeCodeCamp no subsistema Windows para Linux (WSL)

> [!NOTA] Antes de seguir estas instruções verifique se o sistema atende aos requisitos
> 
> **WSL 2**: Windows 10 64-bit (Versão 2004, Build 19041 ou superior) - disponível para todas as distribuições, incluindo o Windows 10 Home.
> 
> **Docker Desktop para Windows**: Veja os respectivos requisitos para [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) e [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Este guia cobre alguns passos comuns com a instalação do WSL2. Uma vez resolvidos alguns dos problemas comuns com o WSL2, você deve seguir o nosso guia de instalação local para trabalhar com o freeCodeCamp no Windows executando uma distro WSL como o Ubuntu.

## Ativar WSL

Siga as instruções na [documentação oficial](https://docs.microsoft.com/en-us/windows/wsl/install-win10) para instalar o WSL1 e seguido atualizando para o WSL2.

## Install Ubuntu

1. Recomendamos usar Ubuntu-18.04 ou superior com WSL2.

   > [!NOTA]
   > 
   > Embora você possa usar outras distrações não baseadas em debianos, todas vêm com suas próprias pegadas e estão além do âmbito deste guia.

2. Atualize as dependências para o SO

   ```console
   sudo update apt
   sudo upgrade -y

   # limpando
   sudo autoremove -y
   ```

## Configurar Git

O Git vem pré-instalado com Ubuntu 18.04, verifique se sua versão do Git com `git --version`.

```output
~
git --version
git versão 2.25.1
```

(Opcional, mas recomendado) Agora você pode prosseguir para [configurar suas chaves ssh](https://help.github.com/articles/generating-an-ssh-key) com o GitHub.

## Instalando um Editor de Código

É altamente recomendável instalar o [Visual Studio Code](https://code.visualstudio.com) no Windows 10. Tem um ótimo suporte para WSL e instala automaticamente todas as extensões necessárias na distração WSL.

Essencialmente, você irá editar e armazenar seu código no Ubuntu-18.04 com o VS Code instalado no Windows.

## Instalando o Docker Desktop

**O Docker Desktop para Windows** permite instalar e executar banco de dados e serviços como MongoDB, NGINX, etc. Isso é útil para evitar problemas comuns em instalar o MongoDB ou outros serviços diretamente no Windows ou WSL2.

Siga as instruções na [documentação oficial](https://docs.docker.com/docker-for-windows/install) e instale o Docker Desktop para a sua distribuição no Windows.

Existem alguns requisitos mínimos de hardware para a melhor experiência.

## Configurar Docker Desktop para WSL

Quando o Docker Desktop estiver instalado, [siga estas instruções](https://docs.docker.com/docker-for-windows/wsl) e configure-o para usar a instalação Ubuntu-18.04 como backend.

Isso faz com que os contêineres sejam executados no lado do WSL em vez de serem executados no Windows. Você será capaz de acessar os serviços em `http://localhost` tanto no Windows quanto no Ubuntu.

## Instalar MongoDB do Docker Hub

Depois de ter configurado o Docker Desktop para trabalhar com o WSL2, siga essas etapas para iniciar um serviço do MongoDB:

1. Inicie um novo terminal Ubuntu-18.04

2. Puxe `MongoDB 3.6` do dockerhub

   ```console
   docker pull mongo:3
   ```

3. Inicie o serviço MongoDB na porta `27017`e configure-o para ser executado automaticamente ao reiniciar o sistema

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Agora você pode acessar o serviço no Windows ou Ubuntu em `mongodb://localhost:27017`.

## Instalando Node.js e npm

Recomendamos que você instale o lançamento LTS para Node.js com um gerenciador de versões do node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

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

O Node.js vem empacotado com `npm`, você pode atualizar para as versões mais recentes do `npm` com:

```console
npm install -g npm@latest
```

## Configurar localmente o freeCodeCamp

Agora que você instalou os pré-requisitos, siga [nosso guia de instalação local](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) para clonar, instalar e configurar o freeCodeCamp localmente em sua máquina.

> [!AVISO]
> 
> Por favor notar, neste momento, que a configuração para testes do Cypress (e necessidades da GUI relacionadas) é um trabalho em andamento. Você ainda deve ser capaz de trabalhar na maior parte do código.

## Links Úteis

- [Uma instalação do dev WSL2 com Ubuntu 20.04, Node.js, MongoDB, VS Code e Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - um artigo de Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Perguntas frequentes sobre:
  - [Windows Subsistema para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
