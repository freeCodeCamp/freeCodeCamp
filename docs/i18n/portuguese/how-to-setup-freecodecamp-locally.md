Siga estas orientações para criar um ambiente de desenvolvimento para o freeCodeCamp. Isso é altamente recomendado se você quer contribuir regularmente.

## Escolha entre o Gitpod ou seu próprio computador (configuração local)

> [!ATTENTION] **Observação:** o freeCodeCamp não roda nativamente no Windows 10 ou 11. Você precisará usar o WSL2. Você pode seguir [este guia](how-to-setup-wsl.md) para configurar o WSL2. Você não pode usar o prompt de comando, o Git Bash ou o PowerShell para executar freeCodeCamp nativamente no Windows.

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

### Como preparar um espaço de trabalho no GitPod

Nós automatizamos o processo de instalação de todas as dependências e ferramentas de que você precisará. Com o Gitpod, você terá um ambiente gratuito e pronto para o código em alguns minutos. Isso é útil caso você não tenha acesso a um computador ou queira fazer alterações únicas.

Existem várias maneiras de se abrir um espaço de trabalho no Gitpod:

1. **(Mais rápida)** Anexe `gitpod.io/#` na frente de qualquer URL do GitHub.

   Por exemplo, se você for visitar o seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp.git`, adicione `gitpod.io/#` na frente do URL na barra de endereços e clique em enter.

   Isso significa que você pode navegar para `gitpod.io/#https://github.com/YOUR_USER_NAME/freeCodeCamp.git` e você verá uma área de trabalho criada para você. Isso funciona para qualquer repositório ou pull request no GitHub.

2. Como alternativa, instale uma das extensões abaixo para o seu navegador.

   - [Chrome Webstore](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) - trabalha com navegadores baseados no Chromium, como o Google Chrome, o Brave, o Edge etc.
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/gitpod) - Firefox

   Uma vez instalado, você verá um botão 'Gitpod' em cada repositório, pull request etc. Ele será um atalho útil para abrir um espaço de trabalho a partir de lá. Veja a página da extensão para detalhes, capturas de tela etc.

É isso. Agora, você pode pular para a seção 'sincronizando a partir do pai' depois de ter iniciado um espaço de trabalho no Gitpod. A maior parte deste guia se aplica a espaços de trabalho no Gitpod, mas preste atenção em [como funcionam os URLs e as portas em um espaço de trabalho do Gitpod](https://www.gitpod.io/docs/configure/workspaces/ports).

**Observação: solucionando problemas de portas no Gitpod**

Às vezes, o serviço na porta `8000` não vai subir. Isso é comum quando você está reiniciando um espaço de trabalho inativo.

Se o serviço não estiver funcionando na porta `8000`, você pode resolver problemas usando estas etapas:

- **Inicie o servidor**: execute `pnpm run develop:server` em uma janela de terminal do diretório do projeto raiz (`/workspace/freeCodeCamp`) para iniciar o servidor.

- **Inicie o client**: em outra janela do terminal, execute `pnpm run develop -- -H '0.0.0.0'` do diretório do client (`/workspace/freeCodeCamp/client`) para iniciá-lo.

Isso deve tornar a porta `8000` disponível.

### Como preparar sua máquina local

Aqui está um requisito mínimo de sistema para executar o freeCodeCamp localmente:

- 8 GB RAM
- CPU relativamente rápida (4 núcleos ou mais)
- Windows 10 ou 11 (com WSL), macOS ou Linux

Comece instalando o software pré-requisito para seu sistema operacional.

Apoiamos principalmente o desenvolvimento em sistemas Linux e Unix, como o Ubuntu e o MacOS. Você pode desenvolver no Windows 10 ou 11 somente com WSL2. Você pode seguir [este guia](how-to-setup-wsl.md) para configurar o WSL2. Você não pode usar o prompt de comando, o Git Bash ou o PowerShell para executar freeCodeCamp nativamente no Windows.


#### Pré-requisitos:

| Pré-requisito                                                                                       | Versão  | Observações                                                                                 |
| --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                        | `18.x`  | Usamos a versão "Active LTS". Consulte [Agenda LTS](https://nodejs.org/en/about/releases/). |
| [pnpm](https://pnpm.io/installation)                                                                | `8.x`   | -                                                                                           |
| [Servidor da Comunidade MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `5.0.x` | -                                                                                           |

> [!ATTENTION] Se você tem uma versão diferente, instale a versão recomendada. Só podemos suportar problemas de instalação para versões recomendadas. Veja [a seção de solução de problemas](troubleshooting-development-issues.md) para detalhes.

Se o Node.js já estiver instalado em sua máquina, execute os seguintes comandos para validar as versões:

```console
node -v
pnpm -v
```

> [!TIP] É altamente recomendável atualizar para o mais atual lançamento estável do software listado acima, também conhecido como Lançamentos de Suporte de Longo Prazo (LTS).

Depois de ter os pré-requisitos instalados, você precisa preparar seu ambiente de desenvolvimento. Isto é comum para muitos fluxos de trabalho de desenvolvimento. Você só precisará fazer isso uma vez.

##### Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:

1. Instale o [Git](https://git-scm.com/) ou seu cliente Git favorito, se você ainda não fez isso. Atualize para a versão mais recente. A versão que veio com seu SO pode estar desatualizada.

2. (Opcional, mas recomendado) [Configure uma chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.


3. Instale um editor de código de sua escolha. Se você não tem certeza sobre qual editor usar, recomendamos o [Visual Studio Code](https://code.visualstudio.com/) — é gratuito e de código aberto.

4. Configure um linting no seu editor de código.

   Você deve ter o [ESLint executando no seu editor](http://eslint.org/docs/user-guide/integrations.html), e ele vai destacar qualquer coisa que não esteja em conformidade com o [Guia de estilo JavaScript do freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Não ignore nenhum erro de linting. Eles têm como objetivo **ajudar** você e garantir uma base de código simples e limpa.

## Faça o fork do repositório no GitHub

[Forking](https://help.github.com/articles/about-forks/) é uma etapa onde você obtém sua própria cópia do repositório principal do freeCodeCamp (vulgo _repo_) no GitHub.

Isso é essencial, pois permite que você trabalhe em sua própria cópia do freeCodeCamp no GitHub, ou que faça download (clone) do repositório para trabalhar localmente. Mais tarde, você poderá solicitar que alterações serem enviadas para o repositório principal através de um pull request (PR).

> [!TIP] O repositório principal em `https://github.com/freeCodeCamp/freeCodeCamp` é frequentemente chamado de repositório `upstream`.
> 
> Seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp` frequentemente é referenciado como o repositório de `origin`. `YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.

**Siga estes passos para criar um fork do repositório `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vá até o repositório freeCodeCamp no GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Clique no botão "Fork" no canto superior direito da interface ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))

3. Depois que o repositório recebeu um fork, você será redirecionado a cópia do repositório freeCodeCamp em `https://github.com/YOUR_USER_NAME/freeCodeCamp`(`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

<details>
   <summary>
      Como criar um fork do freeCodeCamp no GitHub (imagem)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Como criar um fork do freeCodeCamp no GitHub" />
</details>

## Clonar o seu fork no GitHub

[Clonar](https://help.github.com/articles/cloning-a-repository/) é a ação de **baixar** uma cópia de um repositório de um local `remote` que pertence a você ou a outra pessoa. No seu caso, este local remoto é o seu `fork` do repositório freeCodeCamp que deve estar disponível em `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

> [!WARNING] Se você está usando uma distribuição WSL2 Linux, você talvez tenha problemas relacionados a performance e estabilidade ao executar esse projeto em uma pasta compartilhada entre Windows e WSL2 (ex. `/mnt/c/Users/`). Recomendarmos clonar esse repositório em uma pasta que é principalmente usada pela sua distribuição WSL2 Linux e não diretamente compartilhada com Windows (ex. `~/PROJECTS/`).
> 
> Veja [essa issue no GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) para mais informações sobre esse problema.

Execute estes comandos em sua máquina local:

1. Abra um Terminal/Prompt de Comando/Shell no diretório de seus projetos

   _ex.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu nome de usuário do GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Isto vai baixar todo o repositório do freeCodeCamp para seu diretório de projetos.

Observação: `--depth=1` cria um clone raso do seu fork, apenas com o histórico mais recente.

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
- Trabalhe em issues relacionadas à interface do usuário e melhoramentos.
- Faça a depuração e corrija problemas com servidores de aplicação e aplicações de client.

Se você encontrar problemas, primeiro faça uma busca na web e procurar por respostas. Se encontrar uma solução, procure em nossa página de [issues do GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) para encontrar uma solução e reporte o problema se ainda não foi reportado.

Como sempre, fique à vontade para perguntar na [categoria 'Contributors' (colaboradores) do fórum](https://forum.freecodecamp.org/c/contributors) ou [no servidor de chat](https://discord.gg/PRyKn3Vbay).

### Configurar dependências

#### Passo 1: Configure o arquivo de variável de ambiente

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

As chaves no arquivo `.env` _não_ precisam ser alteradas para executar o aplicativo localmente. Você pode deixar os valores padrão copiados de `sample.env` como estão.

> [!TIP] Lembre-se: se quiser usar serviços como Auth0 ou Algolia, você terá que adquirir suas próprias chaves da API para estes serviços e editar as entradas no arquivo `.env`.

#### Passo 2: Instale as dependências

Esta etapa vai instalar as dependências necessárias para a execução da aplicação:

```console
pnpm install && pnpm run create:config
```

#### Passo 3: Inicie o MongoDB e crie o banco de dados

Antes de executar a aplicação localmente, você precisará iniciar o serviço MongoDB.

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

- No Windows, você deve especificar o caminho completo para o binário `mongod`

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

Por padrão, você será conectado como um novo usuário sem nenhuma certificação concluída. Execute o seguinte comando se precisar desenvolver com certificados concluídos:

```console
pnpm run seed:certified-user
```

> [!WARNING] Executar `pnpm run seed:certified-user` desconectará você. Você precisará limpar os cookies do seu navegador e fazer login novamente.

#### Passo 4: Inicie o aplicativo de client do freeCodeCamp e o servidor de API

Agora você pode iniciar o servidor de API e as aplicações de client.

```console
pnpm run develop
```

Este único comando vai disparar todos os serviços, incluindo o servidor API e as aplicações de client disponíveis para você trabalhar.

Uma vez pronto, abra um navegador e acesse <http://localhost:8000>. Se a aplicação carregar, faça o login. Parabéns – está tudo pronto! Agora você tem uma cópia da plataforma do freeCodeCamp de aprendizagem inteira funcionando em sua máquina local.

O servidor de API serve os endpoints em `http://localhost:3000`. O aplicativo Gatsby atende a aplicação de client em `http://localhost:8000`.

Estando conectando, se você visitar <http://localhost:3000/explorer> poderá ver as APIs disponíveis.

> [!WARNING] Limpar seus cookies ou executar `pnpm run seed:certified-user` desconectará você e será preciso fazer o login novamente.

Se você tiver problemas durante a instalação, confira a [seção de solução de problemas](troubleshooting-development-issues.md).

## Referência de comandos rápidos

Uma rápida referência aos comandos que você precisará ao trabalhar localmente.

| comando                        | descrição                                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| `pnpm install`                 | Instala/reinstala todas as dependências e inicializa os diferentes serviços.                       |
| `pnpm run seed`                | Cria usuários de testes autorizados e os insere no MongoDB.                                        |
| `pnpm run seed:certified-user` | Cria usuários de testes autorizados com certificações totalmente completas e os insere no MongoDB. |
| `pnpm run develop`             | Inicia o servidor de API freeCodeCamp e aplicativos Cliente.                                       |
| `pnpm run clean`               | Desinstala todas as dependências e limpa os caches.                                                |
