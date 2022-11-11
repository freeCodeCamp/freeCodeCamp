Siga estas diretrizes para configurar o freeCodeCamp localmente no seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Alguns destes fluxos de trabalho de contribuição — como correção de erros na base de código ou currículo — necessitam do freeCodeCamp executando localmente em seu computador.

### Como preparar sua máquina local

Comece instalando o software pré-requisito para seu sistema operacional.

Apoiamos principalmente o desenvolvimento em sistemas Linux e Unix. Nossa equipe e colaboradores da comunidade trabalham regularmente com a base de código usando ferramentas instaladas no Ubuntu e no macOS.

Também suportamos o Windows 10 via WSL2, que você pode preparar [lendo este guia](how-to-setup-wsl.md).

Alguns membros da comunidade também desenvolvem no Windows 10 nativamente com Git para Windows (Git Bash), e outras ferramentas instaladas no Windows. Neste momento, não dispomos de apoio oficial para esse tipo de instalações, recomendamos que se utilize WSL2.

#### Pré-requisitos:

| Pré-requisito                                                                                       | Versão  | Observações                                                                                 |
| --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                        | `16.x`  | Usamos a versão "Active LTS". Consulte [Agenda LTS](https://nodejs.org/en/about/releases/). |
| npm (vem junto com o Node)                                                                          | `8.x`   | Usamos a versão que vem com o Node.js Active LTS.                                           |
| [Servidor da Comunidade MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                           |

> [!ATTENTION] If you have a different version, please install the recommended version. We can only support installation issues for recommended versions. See [troubleshooting](#troubleshooting) for details.

Se o Node.js já estiver instalado em sua máquina, execute os comandos a seguir para validar as versões:

```console
node -v
npm -v
```

> [!TIP] We highly recommend updating to the latest stable releases of the software listed above, also known as Long Term Support (LTS) releases.

Depois de estar com os pré-requisitos instalados, você precisa preparar seu ambiente de desenvolvimento. Isto é comum para muitos fluxos de trabalho de desenvolvimento, e você só precisará fazer isso uma vez.

##### Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:

1. Instale o [Git](https://git-scm.com/) ou seu cliente Git favorito, se você ainda não fez isso. Atualize para a versão mais recente. A versão que veio com seu SO pode estar desatualizada.

2. (Opcional mas recomendado) [Configure uma chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.

3. Instale um editor de código de sua escolha.

   Nós recomendamos muito usar o [Visual Studio Code](https://code.visualstudio.com/) ou o [Atom](https://atom.io/). São ótimos editores gratuitos de código aberto.

4. Configure um linting no seu editor de código.

   Você deve ter o [ESLint executando no seu editor](http://eslint.org/docs/user-guide/integrations.html), e ele vai destacar qualquer coisa que não esteja em conformidade com o [Guia de estilo JavaScript do freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Não ignore nenhum erro de linting. Eles têm como objetivo **ajudar** você e garantir uma base de código simples e limpa.

## Faça fork do repositório no GitHub

[Forking](https://help.github.com/articles/about-forks/) é uma etapa onde você obtém sua própria cópia do repositório principal do freeCodeCamp (vulgo _repo_) no GitHub.

Isso é essencial, pois permite que você trabalhe em sua própria cópia do freeCodeCamp no GitHub, ou fazer download (clone) do repositório para trabalhar localmente. Mais tarde, você poderá solicitar alterações para serem enviadas para o repositório principal através de um pull request (PR).

> [!TIP] The main repository at `https://github.com/freeCodeCamp/freeCodeCamp` is often referred to as the `upstream` repository.
> 
> Your fork at `https://github.com/YOUR_USER_NAME/freeCodeCamp` is often referred to as the `origin` repository. `YOUR_USER_NAME` would be replaced with your GitHub username.

**Siga estes passos para criar um fork do repositório `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vá até o repositório freeCodeCamp no GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Clique no botão "Fork" no canto superior direito da interface ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))

3. Depois que o repositório recebeu um fork, você será redirecionado a cópia do repositório freeCodeCamp em `https://github.com/YOUR_USER_NAME/freeCodeCamp`(`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

<details>
   <summary>
      Como criar um fork do freeCodeCamp no GitHub (foto da tela)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Como criar um fork do freeCodeCamp no GitHub" />
</details>

## Clone o seu fork no GitHub

[Clonar](https://help.github.com/articles/cloning-a-repository/) é ** a ação de fazer o download de uma cópia** de um repositório de um local `remote` que pertence a você ou a outra pessoa. No seu caso, este local remoto é o seu `fork` do repositório freeCodeCamp que deve estar disponível em `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

> [!WARNING] If you are working on a WSL2 Linux Distro, you might get performance and stability issues by running this project in a folder which is shared between Windows and WSL2 (e.g. `/mnt/c/Users/`). Therefore we recommend to clone this repo into a folder which is mainly used by your WSL2 Linux Distro and not directly shared with Windows (e.g. `~/PROJECTS/`).
> 
> See [this GitHub Issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) for further Information about this problem.

Execute esses comandos em sua máquina local:

1. Abra um Terminal / Prompt de Comando / Shell no diretório de seus projetos

   _ex.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu nome de usuário do GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Isto vai baixar todo o repositório do freeCodeCamp para seu diretório de projetos.

Nota: `--depth=1` cria um clone raso do seu fork, apenas com o histórico mais recente.

## Configurar sincronização a partir do pai

Agora que você baixou uma cópia do seu fork, será necessário configurar um remote `upstream` para o repositório pai.

[Como mencionado anteriormente](#fork-the-repository-on-github), o repositório principal é referenciado como repositório `upstream`. Seu fork é referenciado como repositório `origin`.

É necessária uma referência do seu clone local para o repositório `upstream` além do repositório `origin`. Isso é para que você possa sincronizar alterações do repositório principal sem a exigência de fazer fork e clone várias vezes.

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

Agora que você tem uma cópia local do freeCodeCamp, você pode seguir estas instruções para executá-lo localmente. Isso permitirá que você:

- Pré-visualize edições das páginas como aparecerão na plataforma de aprendizagem.
- Ajude nos problemas relacionados a Interface do Usuário e melhoramentos.
- Faça a depuração e corrija problemas com aplicativos de servidor e cliente.

Se você encontrar problemas, primeiro faça uma busca na web e procurar por respostas. Se não for encontrada uma solução, procure em nossa página de [issues do GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) para encontrar uma solução e reporte o problema se ainda não foi reportado.

E como sempre, fique à vontade em perguntar na [categoria 'Contribuidores' do fórum](https://forum.freecodecamp.org/c/contributors) ou [no chat dos contribuidores](https://discord.gg/PRyKn3Vbay).

### Configurando dependências

We have automated the process of setting up the development environment in Gitpod for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

(You will still need to create your own fork and branch.)

#### Etapa 1: Configure o arquivo de variável de ambiente

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

> [!TIP] Keep in mind if you want to use services like Auth0 or Algolia, you'll have to acquire your own API keys for those services and edit the entries accordingly in the `.env` file.

#### Etapa 2: Instalar as dependências

This step will install the dependencies required for the application to run:

```console
npm ci
```

#### Etapa 3: Iniciar o MongoDB e criar o banco de dados

Before you can run the application locally, you will need to start the MongoDB service.

> [!NOTE] Unless you have MongoDB running in a setup different than the default, the URL stored as the `MONGOHQ_URL` value in the `.env` file should work fine. If you are using a custom configuration, modify this value as needed.
> 
> If you followed along with the [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), then you should be able to skip this step if the MongoDB server from that guide is already running. You can confirm this by checking that you can reach `http://localhost:27017` on your local machine.

Start the MongoDB server in a separate terminal:

  <!-- tabs:start -->

#### **macOS/Linux**

```console
mongod
```

#### **Windows**

- No Windows, você deve especificar o caminho completo para o binário do `mongod`

```console
"C:\Arquivos de programa\MongoDB\Server\3.6\bin\mongod"
```

Make sure to replace `3.6` with the version you have installed

  <!-- tabs:end -->

> [!TIP] You can avoid having to start MongoDB every time by installing it as a background service. You can [learn more about it in their documentation for your OS](https://docs.mongodb.com/manual/administration/install-community/)

Next, let's seed the database. In this step, we run the below command that fills the MongoDB server with some initial data sets that are required by services. These include a few schemas, among other things.

```console
npm run seed
```

#### Etapa 4: Iniciar o aplicativo client do freeCodeCamp e o servidor de API

You can now start up the API server and the client applications.

```console
npm run develop
```

This single command will fire up all the services, including the API server and the client applications available for you to work on.

Once ready, open a web browser and **visit <http://localhost:8000>**. If the app loads, sign in. Congratulations – you're all set! You now have a copy of freeCodeCamp's entire learning platform running on your local machine.

The API serves endpoints at `http://localhost:3000`. The Gatsby app serves the client application at `http://localhost:8000`

While you are logged in, if you visit <http://localhost:3000/explorer> you should see the available APIs.

> [!WARNING] Clearing your cookies or running `npm run seed:certified-user` will log you out, and you will have to sign in again.

If you have issues while installing it, check out the [troubleshooting section](troubleshooting-development-issues.md)

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| comando           | descrição                                                                      |
| ----------------- | ------------------------------------------------------------------------------ |
| `npm ci`          | Instala / reinstala todas as dependências e inicializa os diferentes serviços. |
| `npm run seed`    | Analisa todos os arquivos Markdown do desafio e os insere no MongoDB.          |
| `npm run develop` | Inicia o servidor de API freeCodeCamp e aplicativos Cliente.                   |
| `npm run clean`   | Uninstalls all dependencies and cleans up caches.                              |
