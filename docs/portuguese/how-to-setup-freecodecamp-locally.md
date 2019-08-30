# Configurando freeCodeCamp localmente

Siga estas instruções para configurar freeCodeCamp localmente em seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Alguns _workflows_ de contribuição como pré-visualização de páginas para o Guia ou Desafios de Código, _debugging_ e correção de _bugs_ no código requerem que você rode freeCodeCamp localmente.

## Dê _Fork_ no repositório do GitHub

['Dar _fork_'](https://help.github.com/articles/about-forks/) é obter sua própria cópia do repositório principal do _freeCodeCamp_ (também conhecido como _repo_) no GitHub.

Isso é essencial, pois assim você pode trabalhar com sua cópia do freeCodeCamp no GitHub, ou baixá-la (_clone_)para trabalhar localmente. Depois, você poderá requisitar que suas mudanças sejam enviadas para o repositório principal via _pull request_.

> **Dica:**
> O repositório principal em `https://github.com/freeCodeCamp/freeCodeCamp` é comumente chamado de repositório `upstream`.
> Seu fork em `https://github.com/SEU_USUARIO/freeCodeCamp` é comumente chamado de repositório `origin`.

**Siga estes passos para dar _fork_ no repositório `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vá para o repositório do freeCodeCamp no GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Clique no botão "Fork" no canto superior direito da tela ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))
3. Depois do _fork_ do repositório, você será levado à sua cópia do freeCodeCamp em `https://github.com/SEU_USUARIO/freeCodeCamp`

![GIF - Como dar fork no freeCodeCamp no GitHub](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## Preparando o ambiente de desenvolvimento

Uma vez que os pré-requisitos estão instalados, você precisa preparar seu ambiente de desenvolvimento. Isso é comum para muitos _workflows_ de desenvolvimento, e você precisará fazer isso uma única vez.

**Siga estes passos para preparar seu ambiente de desenvolvimento:**

1. Instale o [Git](https://git-scm.com/) ou seu _client_ de Git favorito, se você ainda não o possui. Atualize para a versão mais recente, já que a versão que veio em seu OS pode estar desatualizada.

2. (Opcional, mas recomendado) [Configure sua chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.

3. Instale um editor de código da sua escolha.

   Nós recomendamos fortemente usar o [VS Code](https://code.visualstudio.com/) ou o [Atom](https://atom.io/). Este são ótimos editores: grátis e _open source_.

4. Configure o _linting_ em seu editor de código.

   Você deve ter o [ESLint rodando no seu editor](http://eslint.org/docs/user-guide/integrations.html), e isso irá destacar qualquer elemento que não segue o [Guia de Estilo para JavaScript do freeCodeCamp](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > Por favor não ignore nenhum erro de _linting_. Eles existem para te **ajudar** e garantir um código simples e limpo.

## Dê _clone_ na sua cópia do freeCodeCamp

['Clonar'](https://help.github.com/articles/cloning-a-repository/) é **baixar** uma cópia de um repositório que pertence à você ou à outra pessoa, de um local remoto ou `remote` _location_. No seu caso, este local remoto é o seu `fork` repositório do freeCodeCamp, que deve estar disponível em `https://github.com/SEU_USUARIO/freeCodeCamp`.

Execute os seguintes comandos em sua máquina:

1. Abra o Terminal / Prompt de Comando / Bash Shell em seu diretório de projetos

   _Por exemplo: `/seudiretoriodeprojetos/`_

2. _Clone_ seu _fork_ do freeCodeCamp, substituindo `SEU_USUARIO` pelo seu nome de usuário do GitHub

   ```shell
   git clone https://github.com/SEU_USUARIO/freeCodeCamp.git
   ```

Isso irá baixar o repositório do freeCodeCamp integralmente em seu diretório de projetos.

Nota: `--depth=1` cria um clone "raso" do seu fork, baixando apenas o histórico/_commit_ mais recente.

## Configure um `upstream` para o repositório principal

Agora que você já baixou uma cópia do seu _fork_, você precisará configurar um `upstream`.

Como foi mencionado anteriormente, o repositório principal `https://github.com/freeCodeCamp/freeCodeCamp` é geralmente chamado de repositório `upstream`. Seu _fork_ em `https://github.com/SEU_USUARIO/freeCodeCamp` é geralmente chamado de repositório `origin`.

Você precisa apontar sua cópia local para o `upstream` alem de apontar para `origin`. Isso acontece para que você possa sincronizar com mudanças do repositório principal. Dessa forma, você não precisa pelo processo de _fork_ e _clone_ várias vezes.

1.  Mude de diretório para o diretório do freeCodeCamp:

    ```shell
    cd freeCodeCamp
    ```

2.  Adicione o repositório principal do freeCodeCamp como um local remoto ou _remote_:

    ```shell
    git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
    ```

3.  Verifique se a configuração está correta:

    ```shell
        git remote -v
    ```

        A saída deve ser algo parecido com:

    ```shell
        origin    https://github.com/SEU_USUARIO/freeCodeCamp.git (fetch)
        origin    https://github.com/SEU_USUARIO/freeCodeCamp.git (push)
        upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
        upstream    https://github.com/freeCodeCamp/freeCodeCamp.git (push)
    ```

## Rodando o freeCodeCamp localmente em sua máquina

Agora que você tem uma cópia local do freeCodeCamp, você pode seguir essas instruções para fazê-la rodar localmente. Isso irá te ajudar a:

- Pré-visualizar páginas da forma que aparecerão na plataforma.
- Trabalhar com problemas relacionados à UI e melhorias.
- _Debuggar_ e corrigir problemas nos _application servers_ e _client apps_.

Você pode pular a parte de rodar o freeCodeCamp localmente se você está apenas editando arquivo, fazendo `rebase` ou resolvendo conflitos de `merge`. Você pode sempre retornar à essa parte das instruções.

[Pular Rodando o freeCodeCamp localmente em sua máquina](#making-changes-to-your-clone-of-freecodecamp-locally)

### Instalando os pré-requisitos

Existem dois métodos atualmente para rodar o freeCodeCamp localmente:
- Docker (recomendado) 
- Local

Você deve seguir **um** dos métodos abaixo.

A utilização do Docker vai, idealmente, resultar em menos erros durante o processo de instalação e tem como objetivo a melhor experiência de desenvolvimento. Usamos o Docker para instalar e rodar os softwares de dependência adicionais "por trás dos panos". Isso descomplica as coisas e torna a experiência consistente dentre a maioria dos tipos de aparelhos e OS.

Se você tiver problemas com um método, tente utilizar o outro. Se você encontrar problemas com qualquer um dos métodos, tente primeiro realizar uma busca pelo seu problema e ver se ela já foi respondida. Se você não conseguir encontrar uma solução, por favor busque em nosso GitHub na aba [issues] por uma solução e reporte o erro se ele ainda não estiver sido reportado.

E, como sempre, sinta-se livre para dar um pulo no nosso [Chat de Contribuidores(https://gitter.im/FreeCodeCamp/Contributors) para dúvidas pequenas.

### Instalando os pré-requisitos

Comece instalando esses softwares que são pré-requisitos:

Softwares necessários tanto para a execução com Docker quanto para a execução Local:

| Pré-requisito | Versão | Notas |
| ------------ | ------- | ----- |
| [Node.js](http://nodejs.org)| `10.x`  | [LTS Schedule](https://github.com/nodejs/Release#release-schedule) |
| npm (instalado junto do Node)| `6.x`   | Não possui uma versão _LTS_. Utilizandos a versão que vem juntamente com o Node LTS|

**Pré-requisitos adicionais para utilizar o Docker:**

| Pré-requisito | Versão | Notas |
| ------------ | ------- | ----- |
| [Docker CE](https://docs.docker.com/install/) | `Stable (estável)` | - |
| [Docker Compose](https://docs.docker.com/compose/install/) | `Stable (estável)` | Deve ser instalado separadamente caso você não esteja utilizando o macOS ou o Windows |

**Pré-requisitos adicionais para utilizar a Build Local:**

| Pré-requisito | Versão | Notas |
| ------------ | ------- | ----- |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Release Notes](https://docs.mongodb.com/manual/release-notes/), Nota: Nós estamos atualmente na versão `3.6` e [planejamos realizar uma atualização](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

**Importante:**

Recomendamos fortemente atualizar para as versões estáveis mais recentes, ou seja, as versões _LTS_ mencionadas acima. (_LTS_ significa _Long Term Service_ ou _Suporte à longo prazo_)
Se o Node.js já estiver instalado em sua máquina, rode os seguintes comando para verificar as versões:

```shell
node -v
npm -v
```

> Se você possui uma versão diferente, por favor instale as versões recomendadas. Só poderemos ajudar com problemas de instalações das versões recomendadas.

**Estou tendo problemas instalando os pré-requisitos recomendados. O que eu devo fazer?**

Normalmente, desenvolvemos utilizando sistemas operacionais mais populares e atualizados como o macOS 10.12 ou posterior, Ubuntu 16.04 ou posterior e Windows 10. É recomendado que você verifique seu problema específico em fontes como: Google, Stack Overflow ou Stack Exchange. Há chances de que haja alguém que já enfrentou o mesmo problema que o seu e que exista uma resposta pronta para o que você precisa.

Se você utiliza um SO diferente e/ou ainda está encontrando problemas, fale com a [comunidade de contribuidores no nosso fórum público](https://www.freeCodeCamp.org/forum/c/contributors) ou no [Chat de Contribuidores](https://gitter.im/freeCodeCamp/Contributors).

**Por favor evite criar _issues_ no GitHub para problemas de pré-requisito. Eles estão fora do escopo desse projeto.**

### Configurando as dependências

#### Passo 1: Configurar o arquivo de variábel de ambiente
As chaves de API e variáveis de ambiente padrões são armazenadas no arquivo `sample.env`. Esse arquivo precisa ser copiado para um novo arquivo chamado `.env` que é acesso dinamicamente durante o processo de instalação. 

```shell
# Crie uma cópia de "sample.env" e chame-a de ".env".
# Preencha-a com as API Keys e outras senhas necessárias:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

As chaves não precisam ser alteradas para rodar a aplicação localmente. Você pode deixar os valores padrão copiados de `sample.env` como estão.

Tenha em mente que se você quiser utilizar serviços adicionais, você precisará adquirir suas chaves de API próprias para esses serviços e editar adequadamente as entradas no arquivo `.env`.

**Para utilizar a Build do Docker:** Se você está utilizando o Docker e a instalação do Docker te instruiu a utilizar a Docker Toolbox (aplicável a versões antigas do macOS e do Windows), você precisa mudar a variável `DOCKER_HOST_LOCATION` no seu arquivo `.env` para o output do comando `docker-machine ip`. Se você utilizar qualquer versão do Linux suportada pelo Docker ou se você utiliza o Docker Desktop (novas versões do macOS e Windows 10) você pode deixar a variável `DOCKER_HOST_LOCATION` em seu valor padrão.

#### Step 2: Instalando as dependências

Esse passo instalará as dependências necessárias para que a aplicação rode:

**Utilizando a Build do Docker:**
```shell
npm run docker:init
npm run docker:install
npm run docker:seed
```

Cada um dos comandos acima demandará um tempo até terminarem. Você deverá esperar que cada comando complete sua execução antes de executar o próximo.

Você também precisará instalar alguns pacotes do npm fora do Docker. Você pode pular esse passo se você está apenas rodando o aplicativo localmente e não irá utilizar o git.

```shell
npm ci
```

Todos os comandos acima devem ser executados apenas na primeira vez que você prepara o seu ambiente de desenvolvimento local.


**Utilizando a Build Local:**

```sh
# Instale as dependências NPM
npm ci
```

#### Passo 3: Iniciar o MongoDB e popular o banco de dados (Build Local apenas)

Esse passo se aplica somente a Buid Local; se você esta utilizando a build do Docker por favor pule para o passo 4.

A não ser que você tenha o MongoDB rodando em uma configuração diferente da original, a URL armazenada como valor na variável `MONGOHQ_URL` no arquivo `.env` deve funcionar. Se você estiver utilizando uma configuração customizada, modifique esse valor conforme for necessário.

Antes de executar a aplicação localmente, você precisa iniciar o serviço do MongoDB:

Inicie o servidor do MongoDB em um prompt de comando separado:
- No macOS e Ubuntu:

    ```sh
    mongod
    ```

- No Windows você deve especificar o caminho completo para o arquivo binário do `mongodb`

    ```sh
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
    ```

    Por favor substitua o `3.6` com a versão que você possui.

> Dica:
> Você pode evitar ter que iniciar o MongoDB todas as vezes ao instalá-lo como um serviço de background.
> Você pode [aprender mais sobre isso na documentação do MongoDB para o seu SO](https://docs.mongodb.com/manual/administration/install-community/)

Agora vamos popular o banco de dados. Nesse passo, executamos o comando abaixo que preenche o servidor do MongoDB com dados iniciais que são necessários para os serviços. Isso inclui alguns _schemas_, dentre outras coisas.

```sh
npm run seed
```


### Passo 4: Inicie o _freeCodeCamp client application_ e a _API server_

Agora você pode iniciar o servidor da API e a aplicação cliente.

**Build do Docker:**
```shell
npm run docker:develop
```

**Build Local:**
```sh
npm run develop
```

Este único comando irá iniciar todos os serviços, incluindo a API e o cliente disponíveis para você trabalhar.

Agora abra um _browser_ e visite <http://localhost:8000>. Se a aplicação carregar, parabéns – você está pronto pra começar!

> Dica:
>
> O servidor da API é aberto na porta 3000 em `http://localhost:3000`
> A aplicação Gatsby é aberta na porta 8000 em `http://localhost:8000`

O que significa que, se você visitar <http://localhost:3000/explorer> você deveria ver quais APIs temos.

Parabéns 🎉🎉🎉! Agora você tem uma cópia da plataforma de aprendizado do freeCodeCamp completinha e rodando na sua máquina local.

## Como logar quando trabalhando localmente

O seu _setup_ local automaticamente preenche o banco de dados com um usuário local. Ao clicar no botão `Sign In` (logar) você será automaticamente autenticado na aplicação local.

Entretanto, acessar a página de portólio do usuário é um pouco trabalhoso. Durante o desenvolvimento o Gatsby assume o serviço das páginas do lado do cliente e então você verá uma página `404` para o portólio do usuário quando trabalhando localmente.

Clicar no botão `Previw Custom 404 Page` (ver a prévia da página 404 customizada) irá te encaminhar para a página correta.

![Imagem - Como logar quando trabalhando localmente](https://user-images.githubusercontent.com/1884376/52650951-48922e80-2f11-11e9-9eee-360a25ad28ad.gif)

## Breve referência de comandos para trabalhar localmente

[Aqui está uma breve lista](/docs/portuguese/CONTRIBUTING.md) de comandos que você pode precisar quando estiver rodando localmente:

## Fazer alterações locais ao seu clone de freeCodeCamp

> Nota do Tradutor: esta seção utiliza vários termos relacionados ao Git em geral, que não foram traduzidos. Por exemplo: _master, origin, branch, fork, rebase, upstream_.

Você agora pode fazer alterações nos arquivos e fazer commit das suas modificações do clone local do seu fork.

Siga estes passos:

1. Verifique se você está na _branch_ `master`

   ```shell
   git status
   ```

   Você deve ter uma saída da forma:

   ```shell
   On branch master
   Your branch is up-to-date with 'origin/master'.

   nothing to commit, working directory clean
   ```

   Se vocẽ não está na `master` ou se seu diretório não está limpo, ou seja, se há alterações em seu diretório, resolva as mudanças de arquivo/_commits_ e dê _checkout_ para a _branch_ `master`:

   ```shell
   git checkout master
   ```

2. Sincronize as últimas modificações da upstream `master` branch do freeCodeCamp para sua local master branch

	**Nota**: Se você possui qualquer Pull Request que você fez a partir da `master` branch do seu fork, você provavelmente irá perdê-la ao final desse passo. Garanta que seu pull request foi _merged_ por um moderador antes de fazer esse passo. Para evitar esse cenário, você sempre deve trabalhar em uma branch separada da master.

   Este passo **irá sincronizar as últimas alterações** do repositório principal do freeCodeCamp. É importante que você dê _rebase_ frequetemente, para evitar conflitos posteriores.

   Atualize sua cópia local do repositório upstream do freeCodeCamp:
    ```sh
    git fetch upstream
    ```

    Faça hard reset da sua master branch com a master do freeCodeCamp: 

    ```sh
    git reset --hard upstream/master
    ```

    Faça um push da sua master branch para a sua origin para possuir um histórico limpo do seu fork no GitHub:

    ```sh
    git push origin master --force
    ```

    Você pode validar se seu master atual bate com a upstream/master performando um comando diff:

    ```sh
    git diff upstream/master
    ```

    O resultado do outpud deve estar vazio.

3. Agora, você deve criar uma nova _branch_

   Trabalhar em _branches_ separadas para cada _issue_ te ajuda a manter sua cópia local limpa. Você nunca deve trabalhar na `master`. Isso pode causar conflitos na sua cópia do freeCodeCamp e talvez seja necessário iniciar tudo novamente, criando um novo _clone_ ou _fork_.

   Verifique se está na `master` como explicado anteriormente e crie uma nova _branch_ a partir dali:

   ```shell
   git checkout -b fix/update-guide-for-xyz
   ```

   O nome da sua _branch_ deve começar com `fix/`, `feat/`, `docs/`, etc. Evite usar números de _issue_ em _branches_. Os nomes de _branches_ devem ser curtos, significativos e únicos.

   Alguns bons nomes de _branch_ são:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Agora, você pode trabalhar editando páginas e código no seu editor de texto favorito.

5. Uma vez que você está feliz com suas alterações, você deve (opcionalmente) rodar o freeCodeCamp localmente para verificar suas mudanças.

6. Certifique-se de corrigir quaisquer erros, e verifique a formatação de suas mudanças. Nós temos um _style guide_ para os Guias e Desafios de Código na seção de [documentos](/docs/).

7. Agora, verifique e confirme os arquivos que você quer atualizar

   ```shell
   git status
   ```

   Este comando deve mostrar uma lista arquivos `unstaged` que você editou.

   ```shell
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes not staged for commit:
   (use "git add/rm <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Adicione suas mudanças à _staging area_ e faça um _commit_.

   Este passo deve mostrar apenas os arquivos que você alterou ou adicionou. Você pode dar um _reset_, e retornar arquivos que você não pretendia alterar ao estado original .

   ```shell
   git add path/to/my/changed/file.ext
   ```

   Ou, alternativamente, você pode adicionar todos os arquivos `unstaged` para a _staging area_

   ```shell
   git add .
   ```

   Apenas os arquivos que foram movidos para a _staging area_ serão adicionados quando você fizer um _commit_.

   ```shell
   git status
   ```

   Saída:

   ```shell
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Agora você pode _commitar_ suas mudanças com uma mensagem curta, como:

   ```shell
   git commit -m "fix: my short commit message"
   ```

   Alguns exemplos:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Opcional:

   Nós recomendamos fortemente que faça uma mensagem de commit convencional. Isso é uma boa prático que você pode observar em alguns repositórios _Open Source_ mais populares. Como desenvolvedor, isso te encoraja a seguir algumas práticas padrão.

   Alguns exemplos de mensagens de _commit_ convencionais:

   ```md
   fix: update HTML guide article
   fix: update build scripts for Travis-CI
   feat: add article for JavaScript hoisting
   docs: update contributing guidelines
   ```

   Mantenha as mensagens curtas, não mais do que 50 caractéres. Você pode sempre adicionar informações na descrição da mensagem de _commit_.

   Isso não toma nenhum tempo adicional comparado à mensagens não convencionais como 'update file' or 'add index.md'

   Você pode aprender mais sobre [aqui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se você perceber que precisa editar um arquivo ou atualizar a mensagem do _commit_ depois de ter feito o _commit_, você pode fazer isso com o comando:

   ```shell
   git commit --amend
   ```

   Este comando irá abrir o editor de texto padrão como `nano` ou `vi` onde você pode editar o título mensagem de _commit_ e adicionar/editar a descrição.

10. Agora você pode dar _push_ nas suas alterações para o seu repositório _fork_.

    ```shell
    git push origin branch/name-here
    ```

## Fazendo um _Pull Request_ (PR)

1. Uma vez que suas alterações foram enviadas, uma notificação aparecerá na página do seu repositório _fork_ para criar uma _pull request_.

   ![Imagem - Notificação "Compare & pull request" no GitHub](/docs/images/github/compare-pull-request-prompt.png)


## Obtendo ajuda

Se você está com dificuldades e precisa de ajuda, deixa-nos saber ao perguntar na [categoria 'Contributors' em nosso fórum](https://www.freecodecamp.org/forum/c/contributors) ou no [Chat de Contribuidores](https://gitter.im/FreeCodeCamp/Contributors) no Gitter.

Deve haver um erro no console do seu _browser_ ou no Bash / Terminal / Linha de Comando que pode ajudar a identificar o problema. Coloque essa mensagem na sua descrição do problema para que outras pessoas possam identificar o problema mais facilmente e te ajudar a encontrar uma solução.

### _Troubleshooting_: solucionando problemas

Se sua aplicação roda, mas você está encontrando problemas com a interface em si, por exemplo, se as fontes não estão carregando ou se o editor de código não está aparecendo apropriadamente, veja os passos a seguir dependendo do seu setup local:

**Build do Docker:**

```sh
# Utilizamos um mono repo e temos diferentes componentes (server, client, tools, plugins, etc.)
# Use esse comando para limpar todas as dependências em todos os componentes
npm run docker:clean

# Reinstale os pacotes npm
npm run docker:install

# Popule o banco de dados
npm run docker:seed

# Reinicie a aplicação
npm run docker:develop
```

**Build Local:**
```sh
npm run clean
npm ci
npm run seed
npm run develop
```
Se você não consegue logar, e, ao invés disso, receber um banner com uma mensagem de erro dizendo que isso será reportado ao freeCodeCamp, por favor verifique novamente que sua local port 3000 não é utilizada por um programa diferente.

Se você obter erros durante a instalação das dependências, por favor tenha certeza de que você não está em uma rede restrita ou que suas configurações de firewall não estão te impedindo de acessar os recursos. Uma solução seria utilizar um serviço de VPN se possível e se for permitido no seu ambiente. 