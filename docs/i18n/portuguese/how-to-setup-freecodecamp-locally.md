Siga estas orientações para criar um ambiente de desenvolvimento para o freeCodeCamp. Isso é altamente recomendado se você quer contribuir regularmente.

## Escolha entre o Gitpod ou seu próprio computador (configuração local)

Se você deseja fazer uma contribuição única, use o Gitpod para fazer alterações. A configuração do Gitpod abre um ambiente pronto para código em poucos minutos no seu navegador. Para contribuir a longo prazo, recomendamos que você instale o freeCodeCamp em seu computador.

Aqui estão alguns prós e contras que devem ajudá-lo a decidir qual opção é a melhor para você:

| Gitpod                                                                                | Sua própria máquina (configuração local)                                         |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Sem requisitos mínimos de hardware                                                    | Requisitos específicos e mínimos                                                 |
| Não é necessário instalar nenhum software                                             | Software adicional necessário                                                    |
| Sempre atualize a cópia do repositório                                                | É necessário manter uma cópia local do repositório                               |
| Mais lento e pode levar alguns minutos para abrir                                     | Mais rápido e pode ser iniciado em segundos                                      |
| Precisa de uma conexão com a internet para funcionar                                  | Conexão com a internet mínima necessária (uma vez configurada)                   |
| Algumas tarefas, como a compilação e testes, podem demorar mais para serem concluídas | Completa as tarefas mais rapidamente (dependendo das capacidades da sua máquina) |

> [!ATTENTION] **Observação:** se você estiver usando o Windows 10 ou 11, precisará usar o WSL2. Você pode seguir [este guia](how-to-setup-wsl.md) para configurar o WSL2. Você não pode usar o prompt de comando, o Git Bash ou o PowerShell para executar freeCodeCamp nativamente dentro de janelas.

### Como preparar um espaço de trabalho no GitPod

Nós automatizamos o processo de instalação de todas as dependências e ferramentas de que você precisará. With Gitpod you get a free ready-to-code environment in a few minutes, and is useful if you do not have access to computer or want to make one-time changes.

There are various ways to launch an Gitpod workspace:

1. **(Mais rápida)** Anexe `gitpod.io/#` na frente de qualquer URL do GitHub.

   Por exemplo, se você for visitar o seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, adicione `gitpod.io/#` na frente do URL na barra de endereços e clique em enter.

   Isso significa que você pode navegar para `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` e você verá uma área de trabalho criada para você. Isso funciona para qualquer repositório ou pull request no GitHub.

2. Como alternativa, instale uma das extensões abaixo para o seu navegador.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - trabalha com navegadores baseados no Chromium, como o Google Chrome, o Brave, o Edge etc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Once installed you will see a 'Gitpod' button on every repository, pull-request, etc. as a handy shortcut to launch a workspace from there. Veja a página da extensão para detalhes, capturas de tela etc.

That's it, you can now skip to the 'syncing up from parent' section after you have launched a Gitpod workspace. Most parts of this guide applies to Gitpod workspaces, but be mindful of [how the URLs & Ports work within a Gitpod](https://www.gitpod.io/docs/configure/workspaces/ports) workspace.

**Note: Troubleshooting port issues on Gitpod**

Sometimes the service on port `8000` doesn't go live. This is common when you are restarting an inactive workspace.

If the service is not coming up on port `8000`, you can troubleshoot using these steps:

- **Start the server**: Run `pnpm run develop:server` in one terminal window from the root project directory (`/workspace/freeCodeCamp`) to start the server.

- **Start the client**: In another terminal window, run `pnpm run develop -- -H '0.0.0.0'` from the client directory (`/workspace/freeCodeCamp/client`) to start the client.

This should make port `8000` available.

### Como preparar sua máquina local

Here is a minimum system requirement for running freeCodeCamp locally:

- 8 GB RAM
- Relatively fast CPU (4+ cores)
- Windows 10 or 11 (with WSL), macOS, or Linux

Start by installing the prerequisite software for your operating system.

We primarily support development on Linux and Unix-based systems like Ubuntu and macOS. You can develop on Windows 10 or 11 with WSL2 only. You can follow [this guide](how-to-setup-wsl.md) to set up WSL2. You can't use Command Prompt, Git Bash or PowerShell to run freeCodeCamp natively within windows.


#### Pré-requisitos:

| Pré-requisito                                                                                       | Versão  | Observações                                                                                 |
| --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                        | `18.x`  | Usamos a versão "Active LTS". Consulte [Agenda LTS](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                                | `8.x`   | -                                                                                           |
| [Servidor da Comunidade MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                           |

> [!ATTENTION] Se você tem uma versão diferente, instale a versão recomendada. Só podemos suportar problemas de instalação para versões recomendadas. Veja [solução de problemas](#troubleshooting) para detalhes.

If Node.js is already installed on your machine, run the following commands to validate the versions:

```console
node -v
pnpm -v
```

> [!TIP] É altamente recomendável atualizar para o mais atual lançamento estável do software listado acima, também conhecido como Lançamentos de Suporte de Longo Prazo (LTS).

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will only need to do this once.

##### Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:

1. Instale o [Git](https://git-scm.com/) ou seu cliente Git favorito, se você ainda não fez isso. Atualize para a versão mais recente. A versão que veio com seu SO pode estar desatualizada.

2. (Opcional, mas recomendado) [Configure uma chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.


3. Instale um editor de código de sua escolha. Se você não tem certeza sobre qual editor usar, recomendamos o [Visual Studio Code](https://code.visualstudio.com/) — é gratuito e de código aberto.

4. Configure um linting no seu editor de código.

   Você deve ter o [ESLint executando no seu editor](http://eslint.org/docs/user-guide/integrations.html), e ele vai destacar qualquer coisa que não esteja em conformidade com o [Guia de estilo JavaScript do freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Não ignore nenhum erro de linting. Eles têm como objetivo **ajudar** você e garantir uma base de código simples e limpa.

## Faça o fork do repositório no GitHub

[Forking](https://help.github.com/articles/about-forks/) is a step where you get your own copy of freeCodeCamp's main repository (a.k.a _repo_) on GitHub.

This is essential, as it allows you to work on your own copy of freeCodeCamp on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

> [!TIP] O repositório principal em `https://github.com/freeCodeCamp/freeCodeCamp` é frequentemente chamado de repositório `upstream`.
> 
> Seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp` frequentemente é referenciado como o repositório de `origin`. `YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.

**Follow these steps to fork the `https://github.com/freeCodeCamp/freeCodeCamp` repository:**

1. Vá até o repositório freeCodeCamp no GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Clique no botão "Fork" no canto superior direito da interface ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))

3. Depois que o repositório recebeu um fork, você será redirecionado a cópia do repositório freeCodeCamp em `https://github.com/YOUR_USER_NAME/freeCodeCamp`(`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

<details>
   <summary>
      How to fork freeCodeCamp on GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="How to fork freeCodeCamp on GitHub" />
</details>

## Clonar o seu fork no GitHub

[Cloning](https://help.github.com/articles/cloning-a-repository/) is where you **download** a copy of a repository from a `remote` location that is either owned by you or by someone else. In your case, this remote location is your `fork` of freeCodeCamp's repository that should be available at `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

> [!WARNING] Se você está usando uma distribuição WSL2 Linux, você talvez tenha problemas relacionados a performance e estabilidade ao executar esse projeto em uma pasta compartilhada entre Windows e WSL2 (ex. `/mnt/c/Users/`). Recomendarmos clonar esse repositório em uma pasta que é principalmente usada pela sua distribuição WSL2 Linux e não diretamente compartilhada com Windows (ex. `~/PROJECTS/`).
> 
> Veja [essa issue no GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) para mais informações sobre esse problema.

Run these commands on your local machine:

1. Abra um Terminal/Prompt de Comando/Shell no diretório de seus projetos

   _ex.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu nome de usuário do GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

This will download the entire freeCodeCamp repository to your projects directory.

Note: `--depth=1` creates a shallow clone of your fork, with only the most recent history/commit.

## Configurar sincronização a partir do pai

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

[As mentioned earlier](#fork-the-repository-on-github), the main repository is referred to as the `upstream` repository. Your fork is referred to as the `origin` repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Mude o diretório para o novo diretório freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Adicione uma referência remota ao repositório principal freeCodeCampo:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Certifique-se de que a configuração esteja correta:

   ```console
   git remote -v
   ```

   O resultado deve ser algo parecido com o mostrado abaixo (substituindo `YOUR_USER_NAME` com seu nome de usuário do GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Executando freeCodeCamp localmente

Now that you have a local copy of freeCodeCamp, you can follow these instructions to run it locally. This will allow you to:

- Preview edits to pages as they would appear on the learning platform.
- Work on UI related issues and enhancements.
- Debug and fix issues with the application servers and client apps.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/freeCodeCamp/freeCodeCamp/issues) page for a solution and report the issue if it has not yet been reported.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [our chat server](https://discord.gg/PRyKn3Vbay).

### Configurar dependências

#### Passo 1: Configure o arquivo de variável de ambiente

The default API keys and environment variables are stored in the file `sample.env`. This file needs to be copied to a new file named `.env` that is accessed dynamically during the installation step.

```console
# Crie uma cópia da "sample.env" e a nomeie como ".env".
# Preencher com as chaves e segredos de API necessários:
```

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp sample.env .env
```

#### **Windows**

```console
copy sample.env .env
```

<!-- tabs:end -->

The keys in the `.env` file are _not_ required to be changed to run the app locally. You can leave the default values copied over from `sample.env` as-is.

> [!TIP] Lembre-se: se quiser usar serviços como Auth0 ou Algolia, você terá que adquirir suas próprias chaves da API para estes serviços e editar as entradas no arquivo `.env`.

#### Passo 2: Instale as dependências

This step will install the dependencies required for the application to run:

```console
pnpm install && pnpm run create:config
```

#### Passo 3: Inicie o MongoDB e crie o banco de dados

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] A menos que você tenha o MongoDB executando em uma configuração diferente da padrão, a URL armazenada como valor para `MONGOHQ_URL` no arquivo `.env` funcionará. Se você está usando uma configuração diferente, modifique este valor caso necessário.
> 
> Se você seguiu as instruções de [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), será capaz de pular este passo se o servidor do MongoDB daquele guia já estiver em execução. Você pode confirmar isso verificando se pode acessar `http://localhost:27017` em seu computador local.

Start the MongoDB server in a separate terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- On Windows, you must specify the full path to the `mongod` binary

```console
"C:\Arquivos de programa\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] Você pode evitar ter que executar o MongoDB toda vez instalando-o como um serviço em segundo plano. Você pode [aprender mais sobre isso na documentação para seu OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
pnpm run seed
```

#### Passo 4: Inicie o aplicativo de client do freeCodeCamp e o servidor de API

You can now start up the API server and the client applications.

```console
pnpm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and visit <http://localhost:8000>. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API server serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`.

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Limpar seus cookies ou executar `pnpm run seed:certified-user` desconectará você e será preciso fazer o login novamente.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md).

## Referência de comandos rápidos

A quick reference to the commands that you will need when working locally.

| comando            | descrição                                                                    |
| ------------------ | ---------------------------------------------------------------------------- |
| `pnpm install`     | Instala/reinstala todas as dependências e inicializa os diferentes serviços. |
| `pnpm run seed`    | Cria usuários de testes autorizados e os insere no MongoDB.                  |
| `pnpm run develop` | Inicia o servidor de API freeCodeCamp e aplicativos Cliente.                 |
| `pnpm run clean`   | Desinstala todas as dependências e limpa os caches.                          |
