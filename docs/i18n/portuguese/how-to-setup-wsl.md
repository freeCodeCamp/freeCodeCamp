# Configure o freeCodeCamp no subsistema Windows para Linux (WSL)

> [!NOTE] Antes de seguir estas instruções, verifique se o sistema atende aos requisitos.
> 
> **WSL 2**: Windows 10 64-bit (Versão 2004, Build 19041 ou superior) - disponível para todas as distribuições, incluindo o Windows 10 Home.
> 
> **Docker Desktop para Windows**: Veja os respectivos requisitos para [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) e [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Este guia abrange algumas etapas comuns sobre a instalação do WSL2. Uma vez resolvidos alguns dos problemas comuns com o WSL2, você deve seguir o nosso [guia de instalação local](how-to-setup-freecodecamp-locally.md) para trabalhar com o freeCodeCamp no Windows executando uma distro WSL como o Ubuntu.

## Ative o WSL

Siga as instruções na [documentação oficial](https://docs.microsoft.com/en-us/windows/wsl/install-win10) para instalar o WSL2.

## Instale o Ubuntu

1. Recomendamos usar Ubuntu-18.04 ou superior com WSL2.

   > [!NOTE]
   > 
   > Embora você possa usar outras distribuições não baseadas em Debian, todas vêm com seus próprios empecilhos, que estão além do escopo deste guia.

   A partir de novembro de 2023, Ubuntu e Debian serão as únicas distribuições de Linux [oficialmente suportadas pelo Playwright](https://playwright.dev/docs/intro#system-requirements), a biblioteca de testes de ponta a ponta usada pelo freeCodeCamp.

2. Atualize as dependências para o sistema operacional

   ```bash
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

Se você usa o [IntelliJ Idea](https://www.jetbrains.com/idea/), talvez precise atualizar seu interpretador do Node e seu gerenciador de pacotes npm pelo que estiver instalado em sua distro WSL.

Você pode checar essas configurações indo em Settings > Languages & Frameworks > Node.js and npm.

## Instalando o Docker Desktop

**O Docker Desktop para Windows** permite instalar e executar banco de dados e serviços como MongoDB, NGINX, etc. Isso é útil para evitar problemas comuns com a instalação do MongoDB ou outros serviços diretamente no Windows ou WSL2.

Siga as instruções da [documentação oficial](https://docs.docker.com/docker-for-windows/install) e instale o Docker Desktop para a sua distribuição no Windows.

Existem alguns requisitos mínimos de hardware para melhor experiência.

## Configure o Docker Desktop para WSL

Quando o Docker Desktop estiver instalado, [siga estas instruções](https://docs.docker.com/docker-for-windows/wsl) e configure-o para usar a instalação do Ubuntu-18.04 como backend.

Isso faz com que os contêineres sejam executados no lado do WSL em vez de serem executados no Windows. Você será capaz de acessar os serviços através do `http://localhost` tanto no Windows quanto no Ubuntu.

## Instale MongoDB usando Docker Hub

Depois de ter configurado o Docker Desktop para trabalhar com o WSL2, siga essas etapas para iniciar um serviço no MongoDB:

1. Inicie um novo terminal do Ubuntu

2. Faça o pull do MongoDB a partir do Docker Hub. Consulte a tabela de [Pré-requisitos](how-to-setup-freecodecamp-locally.md#Prerequisites) para ver a versão atual do MongoDB usada pelo freeCodeCamp. Por exemplo, se o número da versão for `5.0.x`, substitua `<x.y>` por `5.0` nos dois trechos de código a seguir.

   ```bash
   docker pull mongo:<x.y>
   ```

3. Inicie o serviço MongoDB na porta `27017` e configure-o para ser executado automaticamente ao reiniciar o sistema

   ```bash
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:<x.y>
   ```

4. Agora você pode acessar o serviço no Windows ou Ubuntu em `mongodb://localhost:27017`.

## Instalando o Node.js e o pnpm

Recomendamos que você instale a versão LTS para Node.js com um gerenciador de versões do node - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Uma vez instalado, use este comando para instalar e usar a versão do Node.js LTS mais recente:

```bash
nvm install --lts
```

Para ver instruções de instalação e de uso de uma versão diferente do Node.js, consulte a [documentação do nvm](https://github.com/nvm-sh/nvm#usage).

O Node.js vem com o `npm`, que você pode usar para instalar o `pnpm`:

```bash
npm install -g pnpm
```

## Configure o freeCodeCamp localmente

Agora que você instalou os pré-requisitos, siga [nosso guia de instalação local](how-to-setup-freecodecamp-locally.md) para clonar, instalar e configurar o freeCodeCamp em sua máquina.

> [!WARNING]
> 
> Por favor note que, neste momento, a configuração para testes do Cypress (e necessidades relacionadas à GUI) é um trabalho em andamento. Você ainda deve ser capaz de trabalhar na maior parte do código.

## Otimizar o Windows e o WSL

   > [!NOTE]
   > 
   > As dicas a seguir foram coletadas de toda a web e não passaram por diversos testes. A quilometragem pode variar.

### Ajuste o agendamento do processador para serviços de segundo plano

Isso pode reduzir os incidentes dos contêineres do Docker causando um crash devido à falta de recursos.

Abra o painel de controle das Propriedades do Sistema pressionando <kbd>Win + R</kbd> e digitando `sysdm.cpl`

<details>
    <summary>
      Digite <code>sysdm.cpl</code> na caixa de diálogo Executar (captura de tela)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/run-sysdm.png" alt="Digite `sysdm.cpl` na caixa de diálogo Executar" />
</details>
<br>

Vá para Avançado -> Desempenho -> Configurações…

<details>
    <summary>
      Botão de Configurações na parte de Desempenho na guia Avançado das Propriedades do Sistema (captura de tela)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-performance-settings.png" alt="Botão Configurações na parte de Desempenho na guia Avançado em Propriedades do Sistema" />
</details>
<br>

Em Avançado -> Agendamento do processador, escolha "Serviços em segundo plano". Não feche a janela. Continue para a próxima dica.

<details>
    <summary>
      Botão de seleção dos Serviços em segundo plano na aba Avançado em Opções de Desempenho (captura de tela)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/background-services.png" alt="Botão de opção dos Serviços em segundo plano na guia Avançado em Opções de Desempenho" />
</details>

### Aumente o tamanho do arquivo de paginação do Windows para a unidade do sistema

Em Avançado -> Memória virtual, clique em "Alterar…"

<details>
    <summary>
      Botão para alterar a memória virtual na aba Avançado em Opções de Desempenho (captura de tela)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/advanced-virtual-memory.png" alt="Botão de alterar a memória virtual na guia Avançado em Opções de Desempenho" />
</details>
<br>

Escolha "Tamanho personalizado". Defina o tamanho inicial para 1.5x e o tamanho máximo para 3x da sua memória física. Em seguida, clique em "Definir".

<details>
    <summary>
      Botão Definir o tamanho personalizado na janela de Memória Virtual (captura de tela)
    </summary>

    <br>
    <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/wsl/set-custom-size.png" alt="Botão Definir o tamanho personalizado na janela de Memória Virtual" />
</details>

### Aumentar o tamanho da memória alocada para o WSL

Crie um arquivo [`.wslconfig`](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) no diretório [`%UserProfile%`](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig) (tipicamente `C:\Users\<NomeDoUsuário>\.wslconfig`). Leia a documentação do [WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig) cuidadosamente e substitua `x` por valores que correspondam às suas próprias necessidades:

```ini
# As configurações se aplicam a todas as distribuições do Linux que rodam no WSL 2
[wsl2]

# Quanta memória atribuir à VM do WSL 2. O valor padrão pode não ser suficiente
memory=xGB

# Quanto de espaço de swap para adicionar à VM do WSL 2. O padrão é 25% da RAM disponível
swap=xGB
```

### Aumentar o tamanho do espaço antigo máximo do Node.js

Isso corrige o erro ["JavaScript heap out of memory"](https://stackoverflow.com/a/54456814) com o ESLint. Adicione o seguinte à sua `~/.bashrc` ou `~/.zshrc`:

```sh
export NODE_OPTIONS="--max-old-space-size=4096"
```

### Evite `pnpm run test`

Ao invés disso, use o script [apropriado ao seu PR](https://forum.freecodecamp.org/t/wsl-performance-issues-while-working-on-the-codebase/644215/2#:~:text=usually%2C%20you%20just%20want%20to%20test%20something%20specific%20to%20either%20the%20curriculum%20or%20the%20client%20or%20the%20api%20-%20almost%20never%20all%203.): `pnpm run test:api`, `pnpm run test:curriculum` ou `pnpm run test-client`.

## Links úteis

- [Configuração de desenvolvimento do WSL2 com Ubuntu 20.04, Node.js, MongoDB, VS Code e Docker](https://hn.mrugesh.dev/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - um artigo de Mrugesh Mohapatra (desenvolvedor da equipe do freeCodeCamp.org)
- Perguntas frequentes sobre:
  - [Subsistema Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Docker Desktop para Windows](https://docs.docker.com/docker-for-windows/faqs)
