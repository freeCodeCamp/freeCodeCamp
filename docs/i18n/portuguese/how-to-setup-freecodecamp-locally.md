Siga estas diretrizes para configurar o freeCodeCamp localmente no seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Alguns destes fluxos de trabalho de contribuição — como correção de erros na base de código ou currículo — necessitam do freeCodeCamp executando localmente em seu computador.

> [!TIP] Se você não tem interesse em configurar o freeCodeCamp localmente, considere usar o Gitpod. Nós automatizamos o processo de instalação de todas as dependências e ferramentas de que você precisará.
> 
> Continue lendo este guia para saber mais sobre como usar o GitPod.

## Faça fork do repositório no GitHub

[Forking](https://help.github.com/articles/about-forks/) é uma etapa onde você obtém sua própria cópia do repositório principal do freeCodeCamp (vulgo _repo_) no GitHub.

Isso é essencial, pois permite que você trabalhe em sua própria cópia do freeCodeCamp no GitHub, ou fazer download (clone) do repositório para trabalhar localmente. Mais tarde, você poderá solicitar alterações para serem enviadas para o repositório principal através de um pull request (PR).

> [!TIP] O repositório principal em `https://github.com/freeCodeCamp/freeCodeCamp` é frequentemente chamado de repositório `upstream`.
> 
> Seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp` frequentemente é referenciado como o repositório de `origin`. `YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.

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

## Usar uma máquina local ou o GitPod

Após ter realizado o fork do repositório, você pode usar seu próprio computador local ou um espaço de trabalho baseado no GitPod para trabalhar no código.

Para contribuir a longo prazo, recomendamos que você instale o freeCodeCamp em seu computador.

### Como preparar um espaço de trabalho no GitPod

Nós automatizamos o processo de instalação de todas as dependências e ferramentas de que você precisará. Com o GitPod, você terá um ambiente gratuito e pronto para o código em alguns minutos. Isso é útil caso você não tenha acesso a um computador ou queira fazer alterações únicas.

Existem várias maneiras de se abrir um espaço de trabalho no GitPod:

1. **(Mais rápida)** Anexe `gitpod.io/#` na frente de qualquer URL do GitHub.

   Por exemplo, se você for visitar o seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, adicione `gitpod.io/#` na frente do URL na barra de endereços e clique em enter.

   Isso significa que você pode navegar para `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` e você verá uma área de trabalho criada para você. Isso funciona para qualquer repositório ou pull request no GitHub.

2. Como alternativa, instale uma das extensões abaixo para o seu navegador.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - trabalha com navegadores baseados no Chromium, como o Google Chrome, o Brave, o Edge etc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Uma vez instalado, você verá um botão 'GitPod' em cada repositório, pull request etc. Ele será um atalho útil para abrir um espaço de trabalho a partir de lá. Veja a página da extensão para detalhes, capturas de tela etc.

É isso. Agora, você pode pular para a seção 'sincronizando a partir do pai' depois de ter iniciado um espaço de trabalho no GitPod. A maior parte deste guia se aplica a espaços de trabalho no GitPod, mas preste atenção em [como funcionam os URLs e as portas em um espaço de trabalho do GitPod](https://www.gitpod.io/docs/configure/workspaces/ports).

### Como preparar sua máquina local

Comece instalando o software pré-requisito para seu sistema operacional.

Apoiamos principalmente o desenvolvimento em sistemas Linux e Unix. Nossa equipe e colaboradores da comunidade trabalham regularmente com a base de código usando ferramentas instaladas no Ubuntu e no macOS.

Também suportamos o Windows 10 e 11 via WSL2, que você pode preparar [lendo este guia](how-to-setup-wsl.md).

Alguns membros da comunidade também desenvolvem no Windows nativamente com o Git para Windows (Git Bash) e outras ferramentas instaladas no Windows. Neste momento, não dispomos de apoio oficial para esse tipo de instalações, recomendamos que se utilize WSL2.

#### Pré-requisitos:

| Pré-requisito                                                                                       | Versão  | Observações                                                                                 |
| --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                        | `18.x`  | Usamos a versão "Active LTS". Consulte [Agenda LTS](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                                | `7.x`   | -                                                                                           |
| [Servidor da Comunidade MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.2.x` | -                                                                                           |

> [!ATTENTION] Se você tem uma versão diferente, instale a versão recomendada. Só podemos dar suporte a problemas de instalação para versões recomendadas. Veja [solução de problemas](#troubleshooting) para detalhes.

Se o Node.js já estiver instalado em sua máquina, execute os comandos a seguir para validar as versões:

```console
node -v
pnpm -v
```

> [!TIP] É altamente recomendável atualizar para o mais atual lançamento estável do software listado acima, também conhecido como Lançamentos de Suporte de Longo Prazo (LTS).

Depois de ter os pré-requisitos instalados, você precisa preparar seu ambiente de desenvolvimento. Isto é comum para muitos fluxos de trabalho de desenvolvimento, e você só precisará fazer isso uma vez.

##### Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:

1. Instale o [Git](https://git-scm.com/) ou seu cliente Git favorito, se você ainda não fez isso. Atualize para a versão mais recente. A versão que veio com seu SO pode estar desatualizada.

2. (Opcional, mas recomendado) [Configure uma chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.

3. Instale um editor de código de sua escolha.

   Nós recomendamos muito usar o [Visual Studio Code](https://code.visualstudio.com/) ou o [Atom](https://atom.io/). São ótimos editores gratuitos de código aberto.

4. Configure um linting no seu editor de código.

   Você deve ter o [ESLint executando no seu editor](http://eslint.org/docs/user-guide/integrations.html), e ele vai destacar qualquer coisa que não esteja em conformidade com o [Guia de estilo JavaScript do freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Não ignore nenhum erro de linting. Eles têm como objetivo **ajudar** você e garantir uma base de código simples e limpa.

## Clonar o seu fork no GitHub

[Clonar](https://help.github.com/articles/cloning-a-repository/) é ** a ação de fazer o download de uma cópia** de um repositório de um local `remote` que pertence a você ou a outra pessoa. No seu caso, este local remoto é o seu `fork` do repositório freeCodeCamp que deve estar disponível em `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

> [!WARNING] Se você está usando uma distribuição WSL2 Linux, você talvez tenha problemas relacionados a performance e estabilidade ao executar esse projeto em uma pasta compartilhada entre Windows e WSL2 (ex. `/mnt/c/Users/`). Recomendarmos clonar esse repositório em uma pasta que é principalmente usada pela sua distribuição WSL2 Linux e não diretamente compartilhada com Windows (ex. `~/PROJECTS/`).
> 
> Veja [essa issue no GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) para mais informações sobre esse problema.

Execute esses comandos em sua máquina local:

1. Abra um Terminal/Prompt de Comando/Shell no diretório de seus projetos

   _ex.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu nome de usuário do GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Isto vai baixar todo o repositório do freeCodeCamp para seu diretório de projetos.

Nota: `--depth=1` cria um clone raso do seu fork, com apenas o histórico mais recente.

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

E como sempre, fique à vontade em perguntar na [categoria 'Contributors' (colaboradores) do fórum](https://forum.freecodecamp.org/c/contributors) ou [no servidor de chat](https://discord.gg/PRyKn3Vbay).

### Configurar dependências

#### Etapa 1: Configure o arquivo de variável de ambiente

As chaves de API padrão e variáveis de ambiente são armazenadas no arquivo `sample.env`. Esse arquivo precisa ser copiado para um novo arquivo chamado `.env` que é acessado dinamicamente durante a etapa de instalação.

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

As chaves no arquivo `.env` _ não _ precisam ser alteradas para executar o aplicativo localmente. Você pode deixar os valores padrão copiados de `sample.env` como estão.

> [!TIP] Lembre-se: se quiser usar serviços como Auth0 ou Algolia, você terá que adquirir suas próprias chaves da API para estes serviços e editar as entradas no arquivo `.env`.

#### Etapa 2: Instalar as dependências

Esta etapa vai instalar as dependências necessárias para a execução do aplicativo:

```console
pnpm install
```

#### Etapa 3: Iniciar o MongoDB e criar o banco de dados

Antes de executar o aplicativo localmente, você precisará iniciar o serviço MongoDB.

> [!NOTE] A menos que você tenha o MongoDB executando em uma configuração diferente da padrão, a URL armazenada como valor para `MONGOHQ_URL` no arquivo `.env` funcionará. Se você está usando uma configuração diferente, modifique este valor caso necessário.
> 
> Se você seguiu as instruções de [Windows 10 via WSL2 Setup Guide](how-to-setup-wsl.md), será capaz de pular este passo se o servidor do MongoDB daquele guia já estiver em execução. Você pode confirmar isso verificando se pode acessar `http://localhost:27017` em seu computador local.

Inicie o servidor do MongoDB em um terminal separado:

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

Certifique-se de substituir `3.6` pela versão que você instalou

  <!-- tabs:end -->

> [!TIP] Você pode evitar ter que executar o MongoDB toda vez instalando-o como um serviço em segundo plano. Você pode [aprender mais sobre isso na documentação para seu OS](https://docs.mongodb.com/manual/administration/install-community/)

Em seguida, vamos criar o banco de dados. Nesta etapa, executamos o comando abaixo que preenche o servidor MongoDB com alguns conjuntos de dados iniciais que são requeridos pelos serviços. Dentre outras coisas, incluem alguns esquemas.

```console
pnpm run seed
```

#### Etapa 4: Iniciar o aplicativo client do freeCodeCamp e o servidor de API

Agora você pode iniciar o servidor de API e os aplicativos do client.

```console
pnpm run develop
```

Este único comando vai disparar todos os serviços, incluindo o servidor API e os aplicativos do cliente disponíveis para você trabalhar.

Uma vez pronto, abra um navegador e **acesse <http://localhost:8000>**. Se o aplicativo carregar, faça o login. Parabéns – está tudo pronto! Agora você tem uma cópia da plataforma do freeCodeCamp de aprendizagem inteira rodando em sua máquina local.

A API serve os endpoints em `http://localhost:3000`. O aplicativo Gatsby atende o aplicativo cliente em `http://localhost:8000`

Quando estiver conectado, se você visitar <http://localhost:3000/explorer> poderá ver as APIs disponíveis.

> [!WARNING] Limpar seus cookies ou executar `pnpm run seed:certified-user` desconectará você e será preciso fazer o login novamente.

Se você tiver problemas durante a instalação, confira a [seção de solução de problemas](troubleshooting-development-issues.md)

## Referência de comandos rápidos

Uma rápida referência aos comandos que você precisará ao trabalhar localmente.

| comando            | descrição                                                                      |
| ------------------ | ------------------------------------------------------------------------------ |
| `pnpm install`     | Instala / reinstala todas as dependências e inicializa os diferentes serviços. |
| `pnpm run seed`    | Cria usuários de testes autorizados e os insere no mongodb.                    |
| `pnpm run develop` | Inicia o servidor de API freeCodeCamp e aplicativos Cliente.                   |
| `pnpm run clean`   | Desinstala todas as dependências e limpa os caches.                            |
