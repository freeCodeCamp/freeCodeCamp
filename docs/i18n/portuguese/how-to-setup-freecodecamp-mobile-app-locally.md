Siga este guia para configurar a aplicação para dispositivos móveis do freeCodeCamp localmente no seu sistema. Isso é altamente recomendado se você quer contribuir regularmente.

Alguns dos fluxos de trabalho de contribuição — como a correção de erros na base de código — necessitam que você execute a aplicação do freeCodeCamp localmente.

## Como preparar sua máquina local

Comece instalando o software pré-requisito para seu sistema operacional.

### Pré-requisitos

| Pré-requisito                   | Versão | Observações                                  |
| ------------------------------- | ------ | -------------------------------------------- |
| [Flutter](https://flutter.dev/) | `3.x`  | -                                            |
| Dart (vem junto com o Flutter)  | `2.x`  | Utilizamos a versão integrada com o Flutter. |

> [!ATTENTION] Se você tem uma versão diferente, instale a versão recomendada. Só podemos dar suporte a problemas de instalação para versões recomendadas.

Se o Flutter já estiver instalado em sua máquina, execute os seguintes comandos para validar as versões:

```console
flutter --version
dart --version
```

> [!TIP] É altamente recomendável atualizar para as versões estáveis mais recentes do software listado acima.

Depois de ter os pré-requisitos instalados, você precisa preparar seu ambiente de desenvolvimento. Isto é comum para muitos fluxos de trabalho de desenvolvimento, e você só precisará fazer isso uma vez.

#### Siga estas etapas para deixar seu ambiente de desenvolvimento pronto:

1. Instale o [Git](https://git-scm.com/) ou seu cliente Git favorito, se você ainda não fez isso. Atualize para a versão mais recente. A versão que veio com seu SO pode estar desatualizada.

2. Configure o [Android Studio](https://developer.android.com/studio) e os [emuladores do Android](https://developer.android.com/studio/run/managing-avds) com a versão mais recente do Android. Recomendamos usar a Pixel 3a XL e a Nexus One (para emulação de telas menores).

3. (Opcional para MacOS) Configuração do Xcode e do iOS Simulator com a versão mais recente do iOS lançada.

4. (Opcional, mas recomendado) [Configure uma chave SSH](https://help.github.com/articles/generating-an-ssh-key/) para o GitHub.

5. Instale um editor de código de sua escolha.

   Nós recomendamos muito usar o [Visual Studio Code](https://code.visualstudio.com/) ou o Android Studio. Também recomendamos instalar as [extensões](https://docs.flutter.dev/get-started/editor?tab=vscode) oficiais.

## Como fazer o fork do repositório no GitHub

[Forking](https://help.github.com/articles/about-forks/) é uma etapa onde você obtém sua própria cópia do repositório (vulgo _repo_) no GitHub.

Isso é essencial, pois permite que você trabalhe em sua própria cópia da aplicação para dispositivos móveis do freeCodeCamp no GitHub, ou fazer download (clone) do repositório para trabalhar localmente. Mais tarde, você poderá solicitar alterações para serem enviadas para o repositório principal através de um pull request (PR).

> [!TIP] O repositório principal em `https://github.com/freeCodeCamp/mobile` é frequentemente chamado de repositório `upstream`.
> 
> Seu fork em `https://github.com/YOUR_USER_NAME/mobile` frequentemente é referenciado como o repositório `origin`. `YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.

**Siga estes passos para criar um fork do repositório `https://github.com/freeCodeCamp/mobile`:**

1. Vá até o repositório da aplicação do freeCodeCamp para dispositivos móveis no GitHub: <https://github.com/freeCodeCamp/mobile>

2. Clique no botão "Fork" no canto superior direito da interface ([Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/))

3. Depois que o repositório recebeu um fork, você será redirecionado para a cópia do repositório em `https://github.com/YOUR_USER_NAME/mobile` (`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub).

## Como clonar o seu fork no GitHub

[Clonar](https://help.github.com/articles/cloning-a-repository/) é onde ** você faz o download de uma cópia** de um repositório de um local `remoto` que pertence a você ou a outra pessoa. No seu caso, este local remoto é o seu `fork` do repositório freeCodeCamp que deve estar disponível em `https://github.com/YOUR_USER_NAME/mobile`. (`YOUR_USER_NAME` será substituído pelo seu nome de usuário do GitHub.)

Execute esses comandos em sua máquina local:

1. Abra um Terminal/Prompt de Comando/Shell no diretório de seus projetos

   _ex.: `/yourprojectsdirectory/`_

2. Clone seu fork do freeCodeCamp, substituindo `YOUR_USER_NAME` pelo seu nome de usuário do GitHub

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/mobile.git
   ```

Isto vai baixar todo o repositório da aplicação do freeCodeCamp para dispositivos móveis para seu diretório de projetos.

Nota: `--depth=1` cria um clone raso do seu fork, com apenas o histórico mais recente.

## Como configurar a sincronização a partir do repositório pai

Agora que você baixou uma cópia do seu fork, será necessário configurar um remote `upstream` para o repositório pai.

[Como mencionado anteriormente](#fork-the-repository-on-github), o repositório principal é referenciado como repositório `upstream`. Seu fork é referenciado como repositório `origin`.

É necessária uma referência do seu clone local para o repositório `upstream` além do repositório `origin`. Isso é para que você possa sincronizar alterações do repositório principal sem a exigência de fazer fork e clone várias vezes.

1. Mude o diretório para o novo diretório `mobile`:

   ```console
   cd mobile
   ```

2. Adicione uma referência remota ao repositório principal mobile do freeCodeCamp:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/mobile.git
   ```

3. Certifique-se de que a configuração esteja correta:

   ```console
   git remote -v
   ```

   O resultado deve ser algo parecido com o mostrado abaixo (substituindo `YOUR_USER_NAME` com seu nome de usuário do GitHub):

   ```console
   origin    https://github.com/YOUR_USER_NAME/mobile.git (fetch)
   origin    https://github.com/YOUR_USER_NAME/mobile.git (push)
   upstream    https://github.com/freeCodeCamp/mobile.git (fetch)
   upstream    https://github.com/freeCodeCamp/mobile.git (push)
   ```

## Como executar a aplicação do freeCodeCamp para dispositivos móveis localmente

Agora que você tem uma cópia local da aplicação do freeCodeCamp para dispositivos móveis, você pode seguir estas instruções para executá-la localmente.

Se você encontrar problemas, primeiro faça uma busca na web e procurar por respostas. Se não for encontrada uma solução, por favor, procure em nossa página de [issues do GitHub](https://github.com/freeCodeCamp/mobile/issues) para encontrar uma solução e reporte o problema se ainda não foi reportado.

E como sempre, fique à vontade em perguntar na [categoria 'Contributors' (colaboradores) do fórum](https://forum.freecodecamp.org/c/contributors) ou [no servidor de chat](https://discord.gg/PRyKn3Vbay).

> [!NOTE] O diretório `mobile` contém duas pastas, `mobile-api` e `mobile-app`. `mobile-api` contém o código da API usada para servir os podcasts. `mobile-app` contém a aplicação em Flutter, que é onde você deve estar quando seguir os passos abaixo.

### Configurar dependências

#### Passo 1: Configure o arquivo de variável de ambiente

As chaves de API padrão e variáveis de ambiente são armazenadas no arquivo `sample.env`. Esse arquivo precisa ser copiado para um novo arquivo chamado `.env` que é acessado dinamicamente durante a etapa de instalação. Lembre-se de mudar o diretório para `mobile-app` antes de executar os comandos a seguir.

```console
# Crie uma cópia da "sample.env" e a nomeie como ".env".
# Preencha-o com as chaves e segredos de API necessários:
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

#### Passo 2: Instalar as dependências

Esta etapa vai instalar as dependências necessárias para a execução do aplicativo:

```console
flutter pub get
```

#### Passo 3: Iniciar a aplicação do freeCodeCamp para dispositivos móveis

Inicie o emulador de sua escolha (Android ou iOS) e aguarde a conclusão do processo de inicialização.

Agora, você pode iniciar o aplicativo executando o seguinte comando:

```console
flutter run
```

> [!TIP] Se estiver usando o VSCode ou o Android Studio, poderá iniciar a aplicação facilmente sem ter de executar os comandos no terminal. Mais informações [aqui](https://docs.flutter.dev/get-started/test-drive).

## Como fazer alterações localmente

Agora você pode fazer alterações nos arquivos e fazer commit das suas alterações no clone local do seu fork.

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

2. Sincronize as últimas mudanças da branch `main` upstream para sua branch main local:

   > [!WARNING] Se você possui qualquer pull request feito a partir da branch `main`, você os perderá ao fim desta etapa.
   > 
   > Certifique-se de que foi feito um merge no seu pull request por um moderador antes de executar este passo. Para evitar essa situação, você **sempre** deve trabalhar em uma brach que não seja a `main`.

   Este passo **irá sincronizar as últimas alterações** do repositório principal da aplicação do freeCodeCamp para dispositivos móveis. É importante fazer um rebase em sua branch usando `upstream/main` frequentemente para evitar conflitos depois.

   Atualize sua cópia local do repositório upstream da aplicação do freeCodeCamp para dispositivos móveis:

   ```console
   git fetch upstream
   ```

   Faça um hard reset na sua branch main com a main da aplicação do freeCodeCamp para dispositivos móveis:

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

   Trabalhar em uma branch separada para cada issue ajuda a manter sua cópia de trabalho local limpa. Você nunca deve trabalhar na `main`. Isso vai sujar sua cópia da aplicação do freeCodeCamp para dispositivos móveis e você pode ter que começar de novo com um clone ou fork.

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

5. Quando estiver satisfeito com as alterações, você deve opcionalmente executar a aplicação do freeCodeCamp para dispositivos móveis localmente para visualizar as alterações.

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
   (use "git checkout -- <file>..." para descartar as alterações no diretório de trabalho)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
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
   Na branch feat/documentation
   Sua branch está atualizada com 'upstream/feat/documentation'.

   Alterações a serem enviadas:
   (use "git reset HEAD <file>..." para retirar do staging)

       modified:   README.md
       modified:   mobile-app/lib/main.dart
   ```

   Agora, você pode fazer o commit das alterações com uma pequena mensagem assim:

   ```console
   git commit -m "fix: my short commit message"
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

   Isso abrirá um editor de texto padrão, como `nano` ou `vi` onde você pode editar o título da mensagem de commit e adicionar/editar a descrição.

10. Em seguida, você pode fazer push das suas alterações no seu fork:

    ```console
    git push origin branch/nome-aqui
    ```

## Executando testes do currículo para dispositivos móveis

> [!NOTE] Você somente precisa seguir esta seção se estiver modificando o executador de testes de desafio na aplicação para dispositivos móveis. Caso contrário, vá para a próxima seção sobre [como abrir um pull request](#proposing-a-pull-request-pr).

1. Faça a clonagem do [repositório do freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) localmente e fora da cópia local do repositório para dispositivos móveis do freeCodeCamp. A estrutura de pastas deve ficar assim:

    ```console
    ├── freeCodeCamp
    ├── mobile
    ```

2. Mude o diretório para o novo diretório do freeCodeCamp:

    ```console
    cd freeCodeCamp
    ```

3. Fazer uma cópia do arquivo `.env`:

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

4. Instale as dependências para o repositório do freeCodeCamp:

    ```console
    pnpm install && pnpm run create:config
    ```

5. Gere o arquivo JSON dos dados de desafio:

    ```console
    pnpm run build:curriculum
    ```

6. Copie o arquivo JSON gerado para a aplicação para dispositivos móveis:

<!-- tabs:start -->

#### **macOS/Linux**

```console
cp ./config/curriculum.json ../mobile/mobile-app/curriculum.json
```

#### **Windows**

```console
copy .\config\curriculum.json ..\mobile\mobile-app\curriculum.json
```

<!-- tabs:end -->

7. Mude o diretório para o diretório da aplicação para dispositivos móveis:

    ```console
    cd ../mobile/mobile-app
    ```

8. Instale as dependências para a aplicação para dispositivos móveis:

    ```console
    flutter pub get
    ```

9. Atualize o arquivo de testes para que use o arquivo JSON de dados do desafio:

    ```console
    sed -i '' 's/..\/..\/config\/curriculum.json/.\/curriculum.json/g' test/widget_test.dart  
    ```

10. Gere os arquivos do desafio:

    ```console
    flutter test test/widget_test.dart
    ```

11. Inicie um servidor local para servir os arquivos de desafio com a ajuda do pacote `serve`:

    ```console
    npx serve
    ```

12. Em um terminal diferente, volte ao repositório do freeCodeCamp:

    ```console
    cd ../../freeCodeCamp
    ```

13. Execute os testes do Cypress:

    ```console
    pnpm cypress run --config retries=1,screenshotOnRunFailure=false,video=false,baseUrl=http://localhost:3000/generated-tests/,specPattern=cypress/e2e/mobile-learn/test-challenges.js -s cypress/e2e/mobile-learn/test-challenges.js -b chrome
    ```

## Propondo um Pull Request (PR)

Após ter feito as alterações, veja [como abrir um Pull Request](how-to-open-a-pull-request.md).

<!-- ## Quick commands reference - NEED TO DISCUSS ABOUT THIS

A quick reference to the commands that you will need when working locally.

| command                                                        | description                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                       | Installs / re-install all dependencies and bootstraps the different services.       |
| `npm run seed`                                                 | Parses all the challenge markdown files and inserts them into MongoDB.              | -->

## Solução de problemas

### Problemas com a instalação dos pré-requisitos recomendados

Regularmente desenvolvemos nos sistemas mais populares como macOS 10.15, Ubuntu 18.04 e Windows 10 (com WSL2).

É recomendado pesquisar seu issue específico em recursos como Google, Stack Overflow e Stack Exchange. É possível que alguém já tenha enfrentado o mesmo problema que o seu e já possui uma solução.

Se você está em um sistema operacional diferente e/ou ainda está com problemas, veja [obtendo ajuda](#getting-help).

### Problemas com a Interface do Usuário, fontes, errors de build, etc.

Se você enfrenta problemas com a interface do usuário ou erros de build, uma limpeza pode ser útil:

```console
flutter clean
```

### Problemas ao instalar dependências

Se você receber erros durante a instalação das dependências, certifique-se de que você não está em uma rede restrita ou suas configurações de firewall não impedem você de acessar os recursos.

Seja paciente, pois a primeira configuração pode demorar um pouco, dependendo da largura de banda da sua rede.

## Obtendo ajuda

Se você está com dificuldades e precisa de ajuda, fique à vontade em perguntar na categoria ['Contributors' (colaboradores) em nosso fórum](https://forum.freecodecamp.org/c/contributors) ou [na sala de bate-papo dos colaboradores](https://discord.gg/PRyKn3Vbay).

Pode haver um erro no console do seu navegador ou no Bash/Terminal/Linha de Comando que ajudará a identificar o problema. Forneça esta mensagem de erro na descrição do seu problema para que outros possam identificá-lo mais facilmente e ajudá-lo a encontrar uma solução.
