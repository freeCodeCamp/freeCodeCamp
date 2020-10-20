Siga estas diretrizes para configurar o freeCodeCamp localmente no seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Para alguns dos fluxos de trabalho de contribuição, você precisa ter o freeCodeCamp funcionando localmente. Por exemplo, pré-visualizando desafios de codificação ou depurando e corrigindo bugs na base de código.

> [!TIP] Se você não estiver interessado em configurar o freeCodeCamp localmente considere usar o Gitpod, um ambiente gratuito de desenvolvimento online.
> 
> [![Abrir no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Inicia um ambiente de desenvolvimento pronto para programação em seu navegador.)

## Prepare sua máquina local

Comece instalando o software pré-requisito para seu sistema operacional.

Nós apoiamos principalmente o desenvolvimento em sistemas **\*nix**. Nossa equipe e colaboradores da comunidade trabalham regularmente com a base de código usando ferramentas instaladas no Ubuntu e no macOS.

Também suportamos o Windows 10 via WSL2, que pode se preparar [lendo este guia](/how-to-setup-wsl).

Alguns membros da comunidade também se desenvolvem no Windows 10 nativamente com Git para Windows (Git Bash), e outras ferramentas instaladas no Windows. Neste momento, não dispomos de apoio oficial para esse tipo de instalações, pelo que recomendamos que se utilize a WSL2.

**Pré-requisitos:**

| Pré-requisito                                                                                       | Versão | Observações                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Node.js](http://nodejs.org)                                                                        | `12x`  | [Horário LTS](https://github.com/nodejs/Release#release-schedule)                                                                                                                                      |
| npm (vem junto com o Node)                                                                          | `6. x` | Não possui versões LTS, nós usamos a versão empacotada com Node LTS                                                                                                                                    |
| [Servidor da Comunidade MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [Notas de Lançamento](https://docs.mongodb.com/manual/release-notes/), Nota: Estamos atualmente em `3.6`, uma [atualização está planejada](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Se você tem uma versão diferente, por favor instale a versão recomendada. Só podemos suportar problemas de instalação para versões recomendadas. Veja [solução de problemas](#troubleshooting) para detalhes.

Se o Node.js já estiver instalado em sua máquina, execute os seguintes comandos para validar as versões:

```console
node -v
npm -v
```

> [!TIP] É altamente recomendável atualizar para os últimos lançamentos estáveis do software listado acima, também conhecido como lançamentos de Suporte de Longo Prazo (LTS).

Depois de ter os pré-requisitos instalados, você precisa preparar seu ambiente de desenvolvimento. Isto é comum para muitos fluxos de trabalho de desenvolvimento, e você só precisará fazer isso uma vez.

**Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:**

1. Instale o [Git](https://git-scm.com/) ou seu cliente Git favorito, se você ainda não o fez. Atualizar para a versão mais recente; a versão que veio empacotada com seu SO pode estar desatualizada.

2. (Opcional mas recomendado) [Configurar uma chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.

3. Instale um editor de código de sua escolha.

   É altamente recomendável usar [Visual Studio Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/). Estes são ótimos, editores de código livre e de código aberto.

4. Configure um link para o seu editor de código.

   Você deve ter [ESLint executando no seu editor](http://eslint.org/docs/user-guide/integrations.html), e ele irá destacar qualquer coisa que não esteja em conformidade com [freeCodeCamp em JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Por favor, não ignore quaisquer erros de vinculação. Eles são destinados a **ajudar** você e garantir uma base de código simples e limpa.

## Faça fork do repositório no GitHub

[Forking](https://help.github.com/articles/about-forks/) é uma etapa onde você obtém sua própria cópia do repositório principal do freeCodeCamp (um repositório a.k.a __) no GitHub.

Isso é essencial, pois permite que você trabalhe em sua própria cópia do freeCodeCamp no GitHub, ou para fazer o download (clone) do repositório para trabalhar localmente. Mais tarde, você poderá solicitar alterações para serem puxadas para o repositório principal através de um pull request (PR).

> [!TIP] O repositório principal do `https://github.com/freeCodeCamp/freeCodeCamp` é frequentemente referido como o `repositório upstream`.
> 
> Seu fork em `https://github.com/YOUR_USER_NAME/freeCodeCamp` é frequentemente referido como a origem `do repositório`.

**Siga estes passos para criar um fork do repositório `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Vá para o repositório freeCodeCamp no GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Clique no botão "Fork" no canto superior direito da interface ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))

3. Depois que o repositório for bifurcado, você será levado para a sua cópia do repositório freeCodeCamp em `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Como criar um fork freeCodeCamp no GitHub (screenshot)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Como criar um fork freeCodeCamp no GitHub" />
</details>

## Clone o seu fork no GitHub

[Clonar](https://help.github.com/articles/cloning-a-repository/) é onde **faz o download de uma cópia** de um repositório de um local `remoto` que pertence ou a você ou a outra pessoa. No seu caso, este local remoto é o seu `fork` do repositório freeCodeCamp que deve estar disponível no `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Execute esses comandos em sua máquina local:

1. Abrir um Terminal / Prompt de Comando / Shell no diretório de seus projetos

   _i.e.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu GitHub Name

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Isto irá baixar todo o repositório freeCodeCamp para seu diretório de projetos.

Nota: `--depth=1` cria um clone raso do seu fork, com apenas o histórico mais recente.

## Configurar sincronização de pais

Agora que você baixou uma cópia do seu fork, será necessário configurar um controle remoto `a montante` para o repositório pai.

[Como mencionado anteriormente](#fork-the-repository-on-github), o repositório principal é referenciado como repositório `a montante`. Your fork referred to as the `origin` repository.

É necessária uma referência do seu clone local para o repositório `upstream` além do repositório `de origem`. Isso é para que você possa sincronizar alterações do repositório principal sem a exigência de bifurcação e clonagem repetidamente.

1. Mude o diretório para o novo diretório freeCodeCampo:

   ```console
   Campo freeCodec
   ```

2. Adicionar uma referência remota ao principal repositório freeCodeCampo:

   ```console
   adicione o git remotamente upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Certifique-se de que a configuração esteja correta:

   ```console
   git remoto -v
   ```

   A saída deve ser algo como abaixo:

   ```console
   origem https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Executando freeCodeCamp localmente

Agora que você tem uma cópia local do freeCodeCamp, você pode seguir estas instruções para executá-lo localmente. Isso permitirá que você:

- Pré-visualize edições para as páginas como elas aparecerão na plataforma de aprendizagem.
- Trabalho na interface do usuário com problemas e melhorias.
- Depurar e corrigir problemas com servidores de aplicativo e aplicativos de cliente.

Se você encontrar problemas, primeiro faça uma busca na web para sua issue e veja se ela já foi respondida. Se não for encontrada uma solução, por favor, procure em nossa página de [questões](https://github.com/freeCodeCamp/freeCodeCamp/issues) GitHub para encontrar uma solução e reporte o problema se ainda não foi reportado.

E como sempre, sinta-se à vontade para ir em nosso [Bate-papo dos Colaboradores no Gitter](https://gitter.im/FreeCodeCamp/Contributors) ou [nosso servidor de Discord](https://discord.gg/pFspAhS), para consultas rápidas.

> [!TIP] Você pode pular a execução freCodeCamp localmente se estiver simplesmente editando arquivos. Por exemplo, executando uma `rebase`, ou resolvendo `conflitos de merge`.
> 
> Você sempre poderá voltar a esta parte das instruções mais tarde. Você deve **somente** pular esta etapa se não precisar executar os aplicativos na sua máquina.
> 
> [Pular para fazer alterações](#making-changes-locally).

### Configurando dependências

#### Etapa 1: Configurar o arquivo de variável de ambiente

As chaves de API padrão e variáveis de ambiente são armazenadas no arquivo `sample.env`. Este arquivo precisa ser copiado para um novo arquivo chamado `.env` que é acessado dinamicamente durante a etapa de instalação.

```console
# Crie uma cópia da "amostra.env" e nomeie ".env".
# Preenchê-lo com as chaves e segredos de API necessários:

# macOS / Linux
amostra. nv .env

# Windows
copiar sample.env .env
```

The keys in the `.env` file are _not_ required to be changed to run the app locally. Você pode deixar os valores padrão copiados de `sample.env` como está.

> [!TIP] Tenha em mente se quiser usar serviços como Auth0 ou Algolia, você terá que adquirir suas próprias chaves de API para esses serviços e editar as entradas de acordo no `. arquivo nv`.

#### Etapa 2: Instalar dependências

Esta etapa irá instalar as dependências necessárias para a execução do aplicativo:

```console
npm ci
```

#### Etapa 3: Inicie MongoDB e semente o banco de dados

Antes de executar o aplicativo localmente, você precisará iniciar o serviço MongoDB.

> [!NOTE] A menos que o MongoDB esteja executando uma configuração diferente do padrão, a URL armazenada como o valor de `MONGOHQ_URL` no `. o arquivo nv` deve funcionar bem. Se você estiver usando uma configuração personalizada, modifique este valor conforme necessário.

Iniciar o servidor do MongoDB em um terminal separado:

- No macOS & Ubuntu:

  ```console
  mongod
  ```

- No Windows, você deve especificar o caminho completo para o `binário do mongod`

  ```console
  C:\Arquivos de programa\MongoDB\Server\3.6\bin\mongod"
  ```

  Certifique-se de substituir `3.6` pela versão que você instalou

> [!TIP] Você pode evitar ter que iniciar o MongoDB toda vez instalando-o como um serviço em segundo plano. Você pode [aprender mais sobre isso na documentação do seu Sistema Operacional](https://docs.mongodb.com/manual/administration/install-community/)

Em seguida, vamos semear o banco de dados. Nesta etapa, executamos o comando abaixo que preenche o servidor MongoDB com alguns conjuntos de dados iniciais que são necessários pelos serviços. Entre outras coisas, contam-se alguns esquemas.

```console
seed do npm run
```

#### Passo 4: Inicie o aplicativo cliente freeCodeCamp e servidor de API

Agora você pode iniciar o servidor de API e os aplicativos clientes.

```console
desenvolvimento de execução npm
```

Este único comando irá disparar todos os serviços, incluindo o servidor API e os aplicativos do cliente disponíveis para você trabalhar.

> [!NOTE] Uma vez pronto, abra um navegador da web e **visite <http://localhost:8000>**. Se o aplicativo carregar, parabéns - está tudo pronto! Agora você tem uma cópia completa da plataforma de aprendizado freeCodeCamp rodando em sua máquina local.

> [!TIP] O servidor de API serve APIs em `http://localhost:3000`. O aplicativo Gatsby serve o aplicativo cliente em `http://localhost:8000`

> Se você visitar <http://localhost:3000/explorer> você deve ver as APIs disponíveis.

## Entre com um usuário local

Sua configuração local é preenchida automaticamente um usuário local no banco de dados. Clicando no botão `Iniciar sessão` irá automaticamente autenticá-lo no aplicativo local.

No entanto, acessar a página do portfólio do usuário é um pouco complicado. Em desenvolvimento O Gatsby controla a servir as páginas do lado do cliente e, portanto, você terá uma página `404` para o portfólio do usuário quando estiver trabalhando localmente.

Simplesmente clicando no **"Visualizar página personalizada 404"** irá movê-lo para a página correta.

<details>
   <summary>
      Como fazer login ao trabalhar localmente (captura de tela)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Como fazer login quando trabalhar localmente" />
</details>

## Fazer alterações localmente

Agora você pode fazer alterações nos arquivos e fazer commit das suas alterações no seu clone local do seu fork.

Siga estes passos:

1. Valide que você está no `master` branch:

   ```console
   git status
   ```

   Você deve obter uma saída como esta:

   ```console
   No branch master
   Seu branch está atualizado com 'origem/master'.

   nada para commit, diretório de trabalho limpo
   ```

   Se você não está no master ou no seu diretório de trabalho não está limpo, resolva quaisquer arquivos/commits pendentes e `master`:

   ```console
   git check-out mestre
   ```

2. Sincronize as últimas alterações do freeCodeCamp upstream `master` ao seu branch mestre local:

   > [!AVISO] Se você tiver alguma pull request pendente que você fez do branch `master` do seu fork, Perder-lhes-á no final deste passo.
   > 
   > Certifique-se de que seu pull request é mesclado por um moderador antes de executar este passo. Para evitar esse cenário, você deve **sempre** trabalhar em um branch que não seja o `master`.

   Este passo **irá sincronizar as últimas alterações** do repositório principal do freeCodeCamp. É importante que você baseie sua branch em cima da última `upstream/master` o mais frequentemente possível para evitar conflitos mais tarde.

   Atualize sua cópia local do repositório freeCodeCamp upstream:

   ```console
   git buscar upstream
   ```

   Redefina com força a sua ramificação mestre com o mestre freeCodeCampe:

   ```console
   git reset --hard upstream/master
   ```

   Faça push do seu *branch* mestre para sua origem para ter um histórico limpo no GitHub:

   ```console
   git push origin master --force
   ```

   Você pode validar o seu atual mestre corresponde ao upstream/master executando um diff:

   ```console
   git diff upstream/mestre
   ```

   A saída resultante deve estar vazia.

3. Criar uma nova filial:

   Trabalhar em um ramo separado para cada issue ajuda a manter sua cópia de trabalho local limpa. Você nunca deve trabalhar com o `mestre`. Isso irá soltar sua cópia do freeCodeCamp e você pode ter que começar de novo com um clone ou fork.

   Verifique se você está no `master` como explicado anteriormente, e se afaste de lá:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Seu nome de branch deve começar com `fix/`, `feat/`, `docs/`, etc. Evite usar números de issues em branches. Mantenha-os curtos, significativos e únicos.

   Alguns exemplos de bons nomes de filiais são:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edite páginas e trabalhe em código no seu editor de texto favorito.

5. Uma vez que você esteja satisfeito com as alterações você deve opcionalmente executar o freeCodeCamp localmente para visualizar as alterações.

6. Certifique-se de corrigir quaisquer erros e verificar a formatação de suas alterações.

7. Verifique e confirme os arquivos que você está atualizando:

   ```console
   git status
   ```

   Isso deve mostrar uma lista dos arquivos `não executados` que você editou.

   ```console
   No branch feat/documentação
   Sua branch está atualizada com 'upstream/feat/documentação'.

   Alterações não preparadas para o commit:
   (use "git add/rm <file>... para atualizar o que será commit)
   (use "git checkout -- <file>. ." para descartar alterações no diretório de trabalho)

       modificado: CONTRIBUIÇÃO. d
       modificado: docs/LEIAME.md
       modificado: docs/how-to-setup-freecodecamp-localmente. d
       modificado: docs/how-to-work-on-guide-articles.md
...
   ```

8. Fase as alterações e faça um commit:

   Nesta etapa, você só deve marcar arquivos que você editou ou adicionou a si mesmo. Você pode executar um reset e resolver arquivos que você não pretende mudar se necessário.

   ```console
   git add caminho/para/meu/alterado/arquivo.ext
   ```

   Ou você pode adicionar todos os arquivos `não preparados` para a área de preparação:

   ```console
   git add .
   ```

   Apenas os arquivos que foram movidos para a área de staging serão adicionados quando você fizer um commit.

   ```console
   git status
   ```

   Resultado:

   ```console
   No branch feat/documentação
   Sua branch está atualizada com 'upstream/feat/documentação'.

   Alterações a serem comprometidas:
   (use "git reset HEAD <file>..." para instância)

       modificada: CONTRIBUTING.md
       modificado: docs/README.md
       modificado: docs/howp-freecodecamp-locally.md
       modificado: docs/how-to-work-on-guide-articles.md
   ```

   Agora, você pode fazer o commit das alterações com uma pequena mensagem assim:

   ```console
   git commit -m "fix: minha curta mensagem de commit"
   ```

   Alguns exemplos:

   ```md
   correção: atualizar o artigo do guia para Java - loop for
   feat: adicionar artigo do guia para habilidades de linguagem única
   ```

   Opcional:

   É altamente recomendável fazer uma mensagem convencional de compromisso. Esta é uma boa prática que você verá em alguns dos repositórios de código aberto populares. Como um desenvolvedor, isso incentiva você a seguir as práticas padrão.

   Alguns exemplos de mensagens convencionais de commit são:

   ```md
   correção: atualizar artigo do guia HTML
   fix: atualizar scripts de compilação para Travis-CI
   fez: adicionar artigo para a documentação de hoisting em JavaScript
   : atualizar diretrizes de contribuição
   ```

   Guarde estes curtos, não mais do que 50 caracteres. Você sempre pode adicionar informações adicionais na descrição da mensagem de commit.

   Isso não leva mais tempo do que uma mensagem não convencional como 'atualizar arquivo' ou 'adicionar index.md'

   Você pode aprender mais sobre por que deveria usar commits convencionais [aqui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Se você perceber que você precisa editar um arquivo ou atualizar a mensagem de commit depois de fazer um commit você pode fazê-lo depois de editar os arquivos com:

   ```console
   git commit --change
   ```

   Isso irá abrir um editor de texto padrão, como `nano` ou `vi` onde você pode editar o título da mensagem de commit e adicionar/editar a descrição.

10. Em seguida, você pode fazer push das suas alterações no seu fork:

    ```console
    git push origin branch/nome-do-nome aqui
    ```

## Propondo um Pull Request (PR)

Após ter feito as alterações, verifique aqui [como abrir um pedido de pulso](how-to-open-a-pull-request.md).

## Comandos rápidos referência

Uma rápida referência aos comandos que você precisará ao trabalhar localmente.

| comando                                                        | Descrição                                                                                       |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `npm ci`                                                       | Instala / reinstala todas as dependências e bootstraps os diferentes serviços.                  |
| `seed do npm run`                                              | Analisa todos os arquivos Markdown do desafio e os insere no MongoDB.                           |
| `desenvolvimento de execução npm`                              | Inicia o servidor de API freeCodeCamp e aplicativos Cliente.                                    |
| `teste npm`                                                    | Executa todos os testes JS no sistema, incluindo cliente, servidor, lint e testes desafiadores. |
| `teste de execução npm: cliente`                               | Executar o teste do cliente.                                                                    |
| `npm run teste:curriculum`                                     | Execute o teste de currículo suite.                                                             |
| `npm run teste:curriculum --block='HTML básico e HTML5'`       | Teste um bloco específico.                                                                      |
| `npm run test:curriculum --superblock='responsive-web-design'` | Teste um SuperBlock específico.                                                                 |
| `npm run test-curriculum-full-output`                          | Executar a versão de teste do currículo, sem carregar após o primeiro erro                      |
| `npm run teste:server`                                         | Execute o teste do servidor.                                                                    |
| `executar npm e2e`                                             | Execute o Cypress fim para testes finais.                                                       |
| `limpo npm run`                                                | Desinstala todas as dependências e limpa os caches.                                             |

## Solução de problemas

### Problemas com a instalação dos pré-requisitos recomendados

Desenvolvemos regularmente nos sistemas operacionais mais recentes ou mais populares, como o macOS 10.15 ou mais tarde, o Ubuntu 18.04 ou mais tarde e o Windows 10 (com o WSL2).

É recomendável pesquisar seus problemas específicos em recursos como Google, Stack Overflow e Stack Exchange. Existe uma boa possibilidade de alguém ter de enfrentar o mesmo problema e já existe uma resposta à sua pergunta específica.

Se você está em um sistema operacional diferente e/ou ainda está com problemas, veja [obtendo ajuda](#getting-help).

> [!AVISO]
> 
> Por favor, evite criar problemas no GitHub para problemas pré-requisitos. Estão fora do âmbito deste projecto.

### Problemas com a interface do usuário, fontes, erros de construção, etc.

Se você enfrentar problemas com a interface do usuário, Fontes ou ver compilações de erros, uma limpeza pode ser útil:

```console
npm run clean
npm ci
npm run seed
npm run develop
```

ou

Usar o atalho

```
npm run clean-and-develop
```

Se você continuar a enfrentar problemas com a compilação, é recomendável limpar o espaço de trabalho.

Use `git clean` no modo interativo:

```
git limpar -ifdX
```

<details>
   <summary>
      Como limpar o git não rastreado (captura de tela)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Como limpar arquivos git não rastreados" />
</details>

### Problemas com API, Login, Envios de Desafios, etc.

Se você não conseguir fazer o login, ao invés disso, veja um banner com uma mensagem de erro dizendo que será reportado ao freeCodeCamp, por favor, verifique novamente se a porta local `3000` não está em uso em um programa diferente.

**No Linux / macOS / WSL no Windows - Do Terminal:**

```console
netstat -ab ├grep "3000"

tcp4 0 0 0.0.0.0:3000 LISTEN DESKTOP
```

**No Windows - Do PowerShell Elevado:**

```powershell
netstat -ab ├Select-String "3000"

TCP 0.0.0.0:3000 LISTENING DE DESKTOP
```

### Issues instalando dependências

Se você receber erros durante a instalação das dependências, por favor, certifique-se de que você não está em uma rede restrita ou suas configurações de firewall não impedem você de acessar os recursos.

A primeira configuração pode demorar um pouco dependendo da largura de banda da sua rede. Seja paciente, e se você ainda estiver preso, recomendamos que você use o GitPod em vez de uma configuração offline.

## Obtendo ajuda

Se você está preso e precisa de ajuda, Avise-nos perguntando na categoria ['Contribuidores' no nosso fórum](https://forum.freecodecamp.org/c/contributors) ou na sala de bate-papo [colaboradores](https://gitter.im/FreeCodeCamp/Contributors) no Gitter.

Pode haver um erro no console do seu navegador ou no Bash / Terminal / Linha de Comando que ajudará a identificar o problema. Forneça esta mensagem de erro na descrição do seu problema para que outros possam identificar o problema mais facilmente e ajudá-lo a encontrar uma solução.
