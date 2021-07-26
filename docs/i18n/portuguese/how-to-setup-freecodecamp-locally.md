Siga estas diretrizes para configurar o freeCodeCamp localmente no seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Alguns destes fluxos de trabalho de contribuição — como correção de erros na base de código ou currículo — necessitam do freeCodeCamp executando localmente em seu computador.

> [!TIP] Se você não tem interesse em configurar o freeCodeCamp localmente, considere usar o Gitpod, um ambiente gratuito de desenvolvimento online.
> 
> [![Abrir no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Inicia um ambiente de desenvolvimento pronto para programação em seu navegador.)

### Como preparar sua máquina local

Comece instalando o software pré-requisito para seu sistema operacional.

Apoiamos principalmente o desenvolvimento em sistemas Linux e Unix. Nossa equipe e colaboradores da comunidade trabalham regularmente com a base de código usando ferramentas instaladas no Ubuntu e no macOS.

Também suportamos o Windows 10 via WSL2, que você pode preparar [lendo este guia](/how-to-setup-wsl).

Alguns membros da comunidade também desenvolvem no Windows 10 nativamente com Git para Windows (Git Bash), e outras ferramentas instaladas no Windows. Neste momento, não dispomos de apoio oficial para esse tipo de instalações, recomendamos que se utilize WSL2.

#### Pré-requisitos:

| Pré-requisito                                                                                       | Versão  | Observações                                                                                 |
| --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                        | `14.x`  | Usamos a versão "Active LTS". Consulte [Agenda LTS](https://nodejs.org/en/about/releases/). |
| npm (vem junto com o Node)                                                                          | `6.x`   | O `npm` não tem lançamentos em LTS. Usamos a versão incluída na Active LTS do Node.js.      |
| [Servidor da Comunidade MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `4.0.x` | -                                                                                           |

> [!ATTENTION] Se você tem uma versão diferente, instale a versão recomendada. Só podemos suportar problemas de instalação para versões recomendadas. Veja [solução de problemas](#troubleshooting) para detalhes.

Se o Node.js já estiver instalado em sua máquina, execute os comandos a seguir para validar as versões:

```console
node -v
npm -v
```

> [!TIP] É altamente recomendável atualizar para o mais atual lançamento estável do software listado acima, também conhecido como Lançamentos de Suporte de Longo Prazo (LTS).

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

## Clone o seu fork no GitHub

[Clonar](https://help.github.com/articles/cloning-a-repository/) é ** a ação de fazer o download de uma cópia** de um repositório de um local `remote` que pertence a você ou a outra pessoa. No seu caso, este local remoto é o seu `fork` do repositório freeCodeCamp que deve estar disponível em `https://github.com/YOUR_USER_NAME/freeCodeCamp`. (`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

> [!WARNING] Se você está usando uma distribuição WSL2 Linux, você talvez tenha problemas relacionados a performance e estabilidade ao executar esse projeto em uma pasta compartilhada entre Windows e WSL2 (ex. `/mnt/c/Users/`). Recomendarmos clonar esse repositório em uma pasta que é principalmente usada pela sua distribuição WSL2 Linux e não diretamente compartilhada com Windows (ex. `~/PROJECTS/`).
> 
> Veja [essa issue no GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/40632) para mais informações sobre este problema.

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

E, como sempre, fique à vontade em perguntar na [categoria 'Contribuidores' do fórum](https://forum.freecodecamp.org/c/contributors) ou [no chat dos contribuidores](https://chat.freecodecamp.org/home).

> [!TIP] Você talvez não queira executar freeCodeCamp localmente se está simplesmente editando arquivos. Por exemplo, fazer `rebase`, ou resolver conflitos de `merge`.
> 
> Você pode sempre retornar a esta parte das instruções depois. Você deve **apenas** ignorar este passo se não precisa executar os aplicativos em sua máquina.
> 
> [Pular para fazer alterações](#making-changes-locally).

### Configurando dependências

#### Etapa 1: Configure o arquivo de variável de ambiente

As chaves de API padrão e variáveis de ambiente são armazenadas no arquivo `sample.env`. Este arquivo precisa ser copiado para um novo arquivo chamado `.env` que é acessado dinamicamente durante a etapa de instalação.

```console
# Crie uma cópia da "sample.env" e a nomeie como ".env".
# Preencha com as chaves secretas da API necessárias:

# macOS / Linux
cp sample.env .env

# Windows
copy sample.env .env
```

As chaves no arquivo `.env` _ não _ precisam ser alteradas para executar o aplicativo localmente. Você pode deixar os valores padrão copiados de `sample.env` como estão.

> [!TIP] Lembre-se: se quiser usar serviços como Auth0 ou Algolia, você terá que adquirir suas próprias chaves da API para estes serviços e editar as entradas no arquivo `.env`.

#### Etapa 2: Instale as dependências

Esta etapa vai instalar as dependências necessárias para a execução do aplicativo:

```console
npm ci
```

#### Etapa 3: Inicie o MongoDB e crie o banco de dados

Antes de executar o aplicativo localmente, você precisará iniciar o serviço MongoDB.

> [!NOTE] A menos que você tenha o MongoDB executando em uma configuração diferente da padrão, a URL armazenada como valor para `MONGOHQ_URL` no arquivo `.env` funcionará. Se você está usando uma configuração diferente, modifique este valor caso necessário.

Inicie o servidor do MongoDB em um terminal separado:

- No macOS e no Ubuntu:

  ```console
  mongod
  ```

- No Windows, você deve especificar o caminho completo para o binário do `mongod`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Certifique-se de substituir `3.6` pela versão que você instalou

> [!TIP] Você pode evitar ter que executar o MongoDB toda vez instalando-o como um serviço em segundo plano. Você pode [aprender mais sobre isso na documentação para seu OS](https://docs.mongodb.com/manual/administration/install-community/)

Em seguida, vamos criar o banco de dados. Nesta etapa, executamos o comando abaixo que preenche o servidor MongoDB com alguns conjuntos de dados iniciais que são requeridos pelos serviços. Dentre outras coisas, incluem alguns esquemas.

```console
npm run seed
```

#### Passo 4: Inicie o aplicativo de client do freeCodeCamp e o servidor de API

Agora você pode iniciar o servidor de API e os aplicativos do client.

```console
npm run develop
```

Este único comando vai disparar todos os serviços, incluindo o servidor API e os aplicativos do cliente disponíveis para você trabalhar.

> [!NOTE] Uma vez pronto, abra um navegador e **acesse <http://localhost:8000>**. Se o aplicativo carregar, parabéns - você está com tudo configurado! Agora você tem uma cópia da plataforma do freeCodeCamp de aprendizagem inteira rodando em sua máquina local.

> [!TIP] O API Server serve APIs em `http://localhost:3000`. O aplicativo Gatsby atende o aplicativo cliente em `http://localhost:8000`

> Se você visitar <http://localhost:3000/explorer> poderá ver as APIs disponíveis.

## Entre com um usuário local

Sua configuração local preenche automaticamente um usuário local no banco de dados. Clicar no botão `Sign In` vai autenticá-lo automaticamente no aplicativo local.

No entanto, acessar a página do portfólio do usuário é um pouco complicado. Em desenvolvimento, o Gatsby controla as páginas do lado do client e, portanto, você terá uma página `404` no portfólio do usuário quando estiver trabalhando localmente.

Apenas clique em **"Visualizar página personalizada 404"** e você será redirecionado para a página correta.

<details>
   <summary>
      Como fazer login ao trabalhar localmente (captura de tela)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Como fazer login ao trabalhar localmente" />
</details>

## Fazendo alterações localmente

Agora você pode fazer alterações nos arquivos e fazer commit das suas alterações no seu clone local do seu fork.

Siga estes passos:

1. Certifique-se que está no branch `main`:

   ```console
   git status
   ```

   Você deve ver um resultado como este:

   ```console
   Na branch main
   Sua branch está atualizada com 'origin/main'.

   nada para enviar no commit, diretório de trabalho limpo
   ```

   Se você não está no main ou seu diretório de trabalho não está limpo, resolva quaisquer arquivos/commits e saia do `main`:

   ```console
   git checkout main
   ```

2. Sincronize as últimas mudanças da branch `main` upstream do freeCodeCamp para sua branch main local:

   > [!WARNING] Se você possui qualquer pull request feito a partir da branch `main`, você os perderá ao fim desta etapa.
   > 
   > Certifique-se de que foi feito um merge no seu pull request por um moderador antes de executar este passo. Para evitar essa situação, você **sempre** deve trabalhar em uma brach que não seja a `main`.

   Este passo **irá sincronizar as últimas alterações** do repositório principal do freeCodeCamp. É importante fazer um rebase em sua branch usando `upstream/main` frequentemente para evitar conflitos depois.

   Atualize sua cópia local do repositório upstream do freeCodeCamp:

   ```console
   git fetch upstream
   ```

   Faça um hard reset na sua branch main com a main do freeCodeCamp:

   ```console
   git reset --hard upstream/main
   ```

   Faça um push da sua branch main para a origin para obter um histórico claro em seu fork do GitHub:

   ```console
   git push origin main --force
   ```

   Você pode validar se sua main atual combina com upstream/main fazendo um diff:

   ```console
   git diff upstream/main
   ```

   O resultado deve mostrar vazio.

3. Crie uma branch novinha em folha:

   Trabalhar em uma branch separada para cada issue ajuda a manter sua cópia de trabalho local limpa. Você nunca deve trabalhar na `main`. Isso vai sujar sua cópia do freeCodeCamp e você pode ter que começar de novo com um clone ou fork.

   Veja se você está na `main` como explicado antes e crie uma branch a partir dela:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Seu nome de branch deve começar com `fix/`, `feat/`, `docs/`, etc. Evite usar números de issues em branches. Mantenha-os curtos, significativos e únicos.

   Alguns exemplos de bons nomes para branches são:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edite páginas e trabalhe no código em seu editor de texto favorito.

5. Quando estiver satisfeito com as alterações, você deve opcionalmente executar o freeCodeCamp localmente para visualizar as alterações.

6. Certifique-se de corrigir quaisquer erros e verificar a formatação de suas alterações.

7. Verifique e confirme os arquivos que você está atualizando:

   ```console
   git status
   ```

   Isso deve mostrar uma lista dos arquivos `unstaged` que você editou.

   ```console
   Na branch feat/documentation
   Sua branch está atualizada com 'upstream/feat/documentation'.

   As mudanças não estão organizadas para commit:
   (use "git add/rm <file>..." para atualizar o que será enviado)
   (use "git checkout -- <file>..." para descartar as mudanças do diretório)

       modificado:   CONTRIBUTING.md
       modificado:   docs/README.md
       modificado:   docs/how-to-setup-freecodecamp-locally.md
       modificado:   docs/how-to-work-on-guide-articles.md
   ...
   ```

8. Organize as alterações e faça um commit:

   Nesta etapa, você só deve marcar arquivos que você editou ou adicionou. Você pode executar um reset e resolver arquivos que você não pretendeu mudar se necessário.

   ```console
   git add caminho/para/meu/arquivo/alterado.ext
   ```

   Ou você pode adicionar todos os arquivos `unstaged` para a área de preparação:

   ```console
   git add .
   ```

   Apenas os arquivos que foram movidos para a área de staging serão adicionados quando você fizer um commit.

   ```console
   git status
   ```

   Resultado:

   ```console
   On branch feat/documentation
   Your branch is up to date with 'upstream/feat/documentation'.

   Changes to be committed:
   (use "git reset HEAD <file>..." to unstage)

       modified:   CONTRIBUTING.md
       modified:   docs/README.md
       modified:   docs/how-to-setup-freecodecamp-locally.md
       modified:   docs/how-to-work-on-guide-articles.md
   ```

   Agora, você pode fazer o commit das alterações com uma pequena mensagem assim:

   ```console
   git commit -m "fix: minha curta mensagem de commit"
   ```

   Alguns exemplos:

   ```md
   fix: update guide article for Java - for loop
   feat: add guide article for alexa skills
   ```

   Opcional:

   É altamente recomendável fazer uma mensagem convencional de commit. Esta é uma boa prática que você verá em alguns dos repositórios de código aberto populares. Como um desenvolvedor, isso incentiva você a seguir os padrões.

   Alguns exemplos de mensagens convencionais de commit são:

   ```md
   correção: atualizar artigo do guia HTML
   fix: atualizar scripts de compilação para Travis-CI
   fear: adicionar artigo para a documentação de hoisting em JavaScript
   docs: atualizar diretrizes de contribuição
   ```

   Escreva pouco, não mais do que 50 caracteres. Você sempre pode adicionar informações extras na descrição da mensagem de commit.

   Isso não leva mais tempo do que uma mensagem não convencional como 'atualizar arquivo' ou 'adicionar index.md'

   Você pode aprender mais sobre o motivo de usar commits convencionais [aqui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se você se deu conta que precisa editar um arquivo ou atualizar a mensagem de commit você pode fazer isso assim:

   ```console
   git commit --amend
   ```

   Isso irá abrir um editor de texto padrão, como `nano` ou `vi` onde você pode editar o título da mensagem de commit e adicionar/editar a descrição.

10. Em seguida, você pode fazer push das suas alterações no seu fork:

    ```console
    git push origin branch/nome-aqui
    ```

## Propondo um Pull Request (PR)

Após ter feito as alterações, veja [como abrir um Pull Request](how-to-open-a-pull-request.md).

## Referência de comandos rápidos

Uma rápida referência aos comandos que você precisará ao trabalhar localmente.

| comando                                                        | descrição                                                                                       |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Instala / reinstala todas as dependências e inicializa os diferentes serviços.                  |
| `npm run seed`                                                 | Analisa todos os arquivos Markdown do desafio e os insere no MongoDB.                           |
| `npm run develop`                                              | Inicia o servidor de API freeCodeCamp e aplicativos Cliente.                                    |
| `npm run storybook`                                            | Inicia o Storybook para o desenvolvimento da biblioteca de componentes.                         |
| `npm test`                                                     | Executa todos os testes JS no sistema, incluindo cliente, servidor, lint e testes dos desafios. |
| `npm run test-client`                                          | Executa o conjunto de testes do cliente.                                                        |
| `npm run test:curriculum`                                      | Executa o conjunto de teste de currículo.                                                       |
| `npm run test:curriculum --block='Basic HTML and HTML5'`       | Testa um bloco específico.                                                                      |
| `npm run test:curriculum --superblock='responsive-web-design'` | Testa um super bloco específico.                                                                |
| `npm run test-curriculum-full-output`                          | Executa o ocnjunto de teste de currículo, sem parar após o primeiro erro                        |
| `npm run test-server`                                          | Executa o conjunto de testes de servidor.                                                       |
| `npm run e2e`                                                  | Executa os testes de ponta a ponta do Cypress.                                                  |
| `npm run clean`                                                | Desinstala todas as dependências e limpa os caches.                                             |

## Solução de problemas

### Problemas com a instalação dos pré-requisitos recomendados

Desenvolvemos regularmente nos sistemas mais recentes e populares, como o macOS 10.15, o Ubuntu 18.04 e o Windows 10 (com WSL2).

É recomendado pesquisar seu issue específico em recursos como Google, Stack Overflow e Stack Exchange. É possível que alguém já tenha enfrentado o mesmo problema que o seu e já possua uma solução.

Se você está em um sistema operacional diferente e/ou ainda está com problemas, veja [obtendo ajuda](#getting-help).

> [!WARNING]
> 
> Por favor, evite criar issues no GitHub sobre pré-requisitos. Estão fora do escopo deste projeto.

### Problemas com a Interface do Usuário, fontes, errors de build, etc.

Se você enfrenta problemas com a interface do usuário, fontes ou erros de build, uma limpeza pode ser útil:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

OU

Use o atalho

```
npm run clean-and-develop
```

Se você continua enfrentando problemas com a compilação, é recomendável limpar o espaço de trabalho.

Use `git clean` no modo interativo:

```
git clean -ifdX
```

<details>
   <summary>
      Como limpar arquivos não rastreados do git (captura de tela)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Como limpar arquivos não rastreados do git" />
</details>

### Problemas com API, login, Envios de Desafios, etc.

Se você não conseguir fazer o login e se vir um banner com uma mensagem de erro dizendo que isso será reportado ao freeCodeCamp, verifique novamente se a porta local `3000` não está em uso por um programa diferente.

**No Linux/macOS/WSL no Windows – no terminal:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

**No Windows – no PowerShell com privilégios:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

### Problemas ao instalar dependências

Se você receber erros durante a instalação das dependências, certifique-se de que você não está em uma rede restrita ou suas configurações de firewall não impedem você de acessar os recursos.

A primeira configuração pode demorar um pouco, dependendo da largura de banda da sua rede. Tenha paciência. Se você ainda tiver problemas, recomendamos usar o GitPod invés de uma configuração off-line.

> [!NOTE] Se estiver usando dispositivos da Apple com o chip M1 para executar a aplicação localmente, sugerimos usar o Node v14.7 ou uma versão mais recente. Do contrário, você poderá ter problemas com dependências como o Sharp.

## Obtendo ajuda

Se você está com dificuldades e precisa de ajuda, fique à vontade em perguntar na categoria ['Contribuidores' em nosso fórum](https://forum.freecodecamp.org/c/contributors) ou [no chat de contribuidores](https://chat.freecodecamp.org/channel/contributors).

Pode haver um erro no console do seu navegador ou no bash/terminal/linha de comando que ajudará a identificar o problema. Forneça esta mensagem de erro na descrição do seu problema para que outros possam identificá-lo mais facilmente e ajudá-lo a encontrar uma solução.
