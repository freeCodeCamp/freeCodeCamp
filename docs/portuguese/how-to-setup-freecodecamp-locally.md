<table>
    <tr>
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Configurando freeCodeCamp localmente

Siga estas instruções para configurar freeCodeCamp localmente em seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Alguns _workflows_ de contribuição como pré-visualização de páginas para o Guia ou Desafios de Código, _debugging_ e correção de _bugs_ no código requerem que você rode freeCodeCamp localmente.

## Dê _Fork_ no repositório do GitHub

['Dar _fork_'](https://help.github.com/articles/about-forks/) é obter sua própria cópia do repositório principal do _freeCodeCamp_ (a.k.a _repo_) no GitHub.

Isso é essencial, pois assim você pode trabalhar com sua cópia do freeCodeCamp no GitHub, ou baixá-la para trabalhar localmente. Depois, você poderá requisitar que suas mudanças sejam enviadas para o repositório principal via _pull request_.

> **Dica:**
> O repositório principal em `https://github.com/freeCodeCamp/freeCodeCamp` é comumente chamado de repositório `upstream`.
> Seu fork em `https://github.com/SEU_USUARIO/freeCodeCamp` é comumente chamado de repositório `origin`.

**Siga estes passos para dar _fork_ no repositório `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vá para o repositório do freeCodeCamp no GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>
2. Clique no botão "Fork" no canto superior direito da tela ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))
3. Depois do _fork_ do repositório, você será levado à sua cópia do freeCodeCamp em `https://github.com/SEU_USUARIO/freeCodeCamp`

![GIF - Como dar fork no freeCodeCamp no Github](/docs/images/github/how-to-fork-freeCodeCamp.gif)

## Preparando o ambiente de desenvolvimento

Uma vez que os pré-requisitos estão instaladas, você precisa preparar seu ambiente de desenvolvimento. Isso é comum para muitos _workflows_ de desenvolvimento, e você precisará fazer isso uma única vez.

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

Rode os seguintes comandos em sua máquina:

1. Abra o Terminal / Prompt de Comando / Bash Shell em seu diretório de projetos

   _Por exemplo: `/seudiretoriodeprojetos/`_

2. _Clone_ seu _fork_ do freeCodeCamp, substituindo `SEU_USUARIO` pelo seu nome de usuário do GitHub

   ```shell
   git clone https://github.com/SEU_USUARIO/freeCodeCamp.git
   ```

Isso irá baixar o repositório do freeCodeCamp integralmente em seu diretório de projetos.

## Configure um `upstream` para o repositório principal

Agora que você já baixou uma cópia do seu _fork_, você precisará configurar um `upstream`.

Como foi mencionado anteriormente, o repositório principal `https://github.com/freeCodeCamp/freeCodeCamp` é comumente chamado de repositório `upstream`. Seu _fork_ em `https://github.com/SEU_USUARIO/freeCodeCamp` é comument chamado de repositório `origin`.

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

Comece instalando esses _softwares_.

| Pré-requisito                                                                                 | Versão | Comentários                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [Notas de atualização](https://docs.mongodb.com/manual/release-notes/), Obs: Estamos atualmente na versão `3.6`, uma [nova atualização está planejada](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |
| [Node.js](http://nodejs.org)                                                                  | `8.x`  | [LTS Schedule](https://github.com/nodejs/Release#release-schedule)                                                                                                                                                 |
| npm (vem junto com o Node)                                                                    | `6.x`  | Não possui uma versão LTS, usamos a versão que vêm com o Node LTS                                                                                                                                                  |

**Importante:**

Recomendamos fortemente atualizar para as versões estáveis mais recentes, ou seja, as versões _LTS_ mencionadas acima. (_LTS_ significa _Long Term Service_ ou _Suporte à longo prazo_)
Se o Node.js or MongoDB já estiverem instaladas em sua máquina, rode os seguintes comando para verificar as versões:

```shell
node -v
mongo --version
npm -v
```

> Se você possui uma versão diferente, por favor instale as versões recomendadas. Só poderemos ajudar com problemas de instalações das versões recomendadas.

**Estou tendo problemas instalando os pré-requisitos recomendados. O que eu devo fazer?**

Normalmente, desenvolvemos utilizando sistemas operacionais mais populares e atualizados como o macOS 10.12 ou posterior, Ubuntu 16.04 ou posterior e Windows 10. É recomendado que você verifique seu problema específico em fontes como: Google, Stack Overflow ou Stack Exchange. Há chances de que haja alguém que já enfrentou o mesmo problema que o seu e que exista uma resposta pronta para o que você precisa.

Se você usa um sistema operacional diferente e/ou ainda está com problemas, vá para a [_contributors community_ no nosso fórum público](https://www.freeCodeCamp.org/c/contributors) ou o [Chat de Contribuidores](https://gitter.im/freeCodeCamp/Contributors). Podemos te ajudar a solucionar seu problema.

Não podemos prover suporte no GitHub, pois problemas de instalação de _software_ estão além do escopo deste projeto.

### Instalando dependências

Comece instalando as dependência necessárias para que a aplicação rode.

```shell
# Instala dependências NPM
npm install
```

Depois você precisará adicionar as variáveis de ambiente privadas (_API Keys_)

```shell
# Crie uma cópia de "sample.env" e chame-a de ".env".
# Preencha-a com as API Keys e outras senhas necessárias:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

As chaves não precisam ser alteradas para rodar a aplicação localmente. Você pode deixar os valores padrão de `sample.env` como estão.

`MONGOHQ_URL` é a mais importante. A não ser que você tenha o MongoDB rodando em uma configuração diferente da padrão, a URL em `sample.env` deve funcionar normalmente.

Você pode deixar as outras chaves como estão. Tenha em mente que se você quiser usar mais serviços, você precisará obter suas próprias chaves e editá-las no arquivo `.env`.

Agora vamos "linkar" vários serviços como o _api-server_, o _client UI application_, etc. Você [aprender mais sobre esses serviços neste guia](#).

Esses serviços são semi-independentes. Significa que, em produção, o _deploy_ é feito em locais diferentes, mas estão todos disponíveis para você quando o projeto está sendo rodado localmente.

> Nota do Tradutor: neste trecho, é utilizado o termo _bootstrap_. Este termo foi substituído por _linkar_, já que não achei uma forma melhor para o termo.

```shell
# Bootstrap ou linkar todos os projetos deste repositório
npm run bootstrap
```

### Inicie o MongoDB

Você precisará iniciar o MongoDB, antes que a aplicação possa rodar:

Inicie o servidor do MongoDB em um terminal separado:

- Em macOS & Ubuntu:

  ```shell
  mongod
  ```

- No Windows, você precisa especificar o caminho completo para o binário `mongod`

  Certifique-se de trocar `3.6` pela versão que você tem instalada.

  ```shell
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

> Dica:
> Você pode evitar de ter que iniciar o MongoDB toda hora instalando-o como um _background service_.
> Você pode [aprender mais sobre isso na documentação sobre seu respectivo sistema operacional](https://docs.mongodb.com/manual/administration/install-community/)

### _Seed_: popule o banco de dados

Agora, vamos popular o banco de dados. Neste passo, vamos rodar o comando abaixo que
irá preencher o servidor MongoDB com alguns _data-sets_ iniciais que são necessários para outros serviços. Isso inclui alguns _schemas_, dentre outras coisas.

> Nota do Tradutor: nesta seção, é utilizado o termo _seed_. Quando se trata de banco de dados, _seed_ ou semente é um conjunto de configurações iniciais criadas para popular o banco de dados. Isso pode incluir entidades, relacionamentos e um conjunto de dados inicial. Então, o verbo _to seed_ foi substituído por "popular o banco de dados".

```shell
npm run seed
```

### Inicie o _freeCodeCamp client application_ e a _API server_

Agora você pode iniciar o servidor da API e a aplicação cliente.

```shell
npm run develop
```

Este único comando irá iniciar todos os serviços, incluindo a API e o cliente disponíveis para você trabalhar.

Agora abra um _browser_ e visite <http://localhost:8000>. Se a aplicação carregar, parabéns! – _you're all set_.

> Dica:
>
> O servidor da API é aberto na porta 3000 em `http://localhost:3000`
> A aplicação Gatsby é aberta na porta 8000 em `http://localhost:8000`

O que significa que, se você visitar <http://localhost:3000/explorer> você deveria ver quais APIs temos.

Parabéns 🎉! Agora você tem uma cópia da plataforma de aprendizado do freeCodeCamp completinha e rodando na sua máquina local.

## Breve referência de comandos para trabalhar localmente

[Aqui está uma breve referência](/docs/README.md) de uma lista de comandos que você pode precisar quando estiver rodando localmente:

## Fazer alterações locais ao seu clone de freeCodeCamp

> Nota do Tradutor: esta seção utiliza vários termos relacionados ao Git em geral, que não foram traduzidos. Por exemplo: _master, origin, branch, fork, rebase, upstream_.

Assim, você pode alterar arquivos e "commitar" suas mudanças.

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

2. Depois, você deve dar `rebase` da `upstream`.

   Este passo **irá sincronizar as últimas alterações** do repositório principal do freeCodeCamp. É importante que você dê _rebase_ frequetemente, para evitar conflitos posteriores.

   ```shell
   git pull --rebase upstream master
   ```

   Opcionalmente, você pode dar _push_ na _branch_ de volta à _origin_, para que você um histórica limpo em seu _fork_ no GitHub.

   ```shell
   git push origin master --force
   ```

3. Agora, você deve criar uma nova _branch_

   Trabalhar em _branches_ separadas para cada _issue_ te ajuda a manter sua cópia local limpa. Você nunca deve trabalhar na `master`. Isso pode causar conflitos na sua cópia do freeCodeCamp e talvez seja necessário iniciar tudo novamente, criando um novo _clone_ ou _fork_.

   Verifique se está na `master` como explicado anteriormente e crie uma nova _branch_ a partir dali:

   ```shell
   git checkout -b fix/update-guide-for-xyz
   ```

   O nome da sua _branch_ deve começar com `fix/`, `feat/`, etc. Evite usar números de _issue_ em _branches_. Os nomes de _branches_ devem ser curtos, significativos e únicos.

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

6. Certifique-se de corrigir quaisquer erros, e verifique a formatação de suas mudanças. Nós temos um _style guide_ para os Guias e Desafios de Código.

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

   Este passo deve mostrar apenas os arquivos que você alterou ou adicionou. Você pode dar um _reset_, e retornar ao estado original arquivos que você não pretendia alterar.

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

2. Por padrão, todas as _pull requests_ devem se referir ao repositório principal do freeCodeCamp, `master` branch.

   Ceritifique-se que o _Base Fork_ está apontando para freeCodeCamp/freeCodeCamp ao crair uma _Pull Request_.\*\*

   ![Imagem - Comparando "forks" ao fazer uma "pull request"](/docs/images/github/comparing-forks-for-pull-request.png)

3. Envie a _pull request_ da sua _branch_ para a _branch_ `master` do freeCodeCamp.

4. No corpo do seu PR inclua um sumário detalhando quais mudanças você fez e por que.

   - Será apresentado a você um _template_ de _pull request_. É um checklist de coisas que você deveria ter feito antes de abrir um _pull request_.

   - Preencha com detalhes como lhe convir. Essa informação será revisada e então será decidido se seu _pull request_ será aceito ou não.

   - Se o PR foi criado para corrigir um problema ou _bug_ existente então, ao fim da descrição da _pull request_, adicione a _keyword_ `closes` e #xxxx (onde xxxx
     é o número da _issue_). Exemplo: `closes #1337`. Isso informa ao GitHub para fechar automaticamente a _issue_ existente, se o PR for _accepted and merged_.

5. Indique se você testou numa cópia local do site ou não.

   Isso é muito importante quando você está fazendo alterações que não são copiar/editar arquivos Markdown. Por exemplo, mudanças de CSS ou código JavaScript, etc.

## Tenha seu PR aceito

## Obtendo ajuda

Se você está com dificuldades e precisa de ajuda, deixa-nos saber ao perguntar na [categoria 'Contributors' em nosso fórum](https://www.freecodecamp.org/forum/c/contributors) ou o [Chat de Contribuidores](https://gitter.im/FreeCodeCamp/Contributors) no Gitter.

Deve haver um erro no console do seu _browser_ ou no Bash / Terminal / Linha de Comando que pode ajudar a identificar o problema.

### _Troubleshooting_: solucionando problemas

Se sua aplicação roda, mas você está encontrando problemas com a interface em si, por exemplo, se as fontes não estão carregando ou se o editor de código não está aparecendo apropriadamente, você pode tentar os seguintes passos ao menos uma vez:

```shell
# Remove todos os node modules instalados
rm -rf node_modules ./**/node_modules

# Reinstala os pacotes NPM
npm install

# Bootstrap, "linka" todos os projetos
npm run bootstrap

# Seed, popula o banco de dados
npm run seed

# Reinicia a aplicação
npm run develop
```
