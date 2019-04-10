---
title: Git Commit
localeTitle: Git Commit
---
## Git Commit

O comando `git commit` salvará todas as mudanças preparadas, junto com uma breve descrição do usuário, em um "commit" para o repositório local.

Commits estão no centro do uso do Git. Você pode pensar em um commit como um instantâneo do seu projeto, onde uma nova versão desse projeto é criada no repositório atual. Duas características importantes de commits são:

*   você pode lembrar as alterações confirmadas em uma data posterior ou reverter o projeto para essa versão ( [consulte Git checkout](https://guide.freecodecamp.org/git/git-checkout) )
*   Se vários commits editarem diferentes partes do projeto, eles não irão sobrescrever um ao outro, mesmo que os autores do commit não tenham conhecimento um do outro. Esse é um dos benefícios de usar o Git em uma ferramenta como o Dropbox ou o Google Drive.

### Opções

Existem várias opções que você pode incluir com `git commit` . No entanto, este guia cobre apenas as duas opções mais comuns. Para uma extensa lista de opções, por favor consulte a [documentação](https://git-scm.com/docs/git-commit) do [Git](https://git-scm.com/docs/git-commit) .

#### A opção -m

A opção mais comum usada com o `git commit` é a opção `-m` . O `-m` significa mensagem. Ao chamar `git commit` , é necessário incluir uma mensagem. A mensagem deve ser uma breve descrição das alterações que estão sendo confirmadas. A mensagem deve estar no final do comando e deve estar entre aspas `" "` .

Um exemplo de como usar a opção `-m` :

```shell
git commit -m "My message" 
```

A saída no seu terminal deve ser algo como isto:

```shell
[master 13vc6b2] My message 
 1 file changed, 1 insertion(+) 
```

**NOTA:** Se o `-m` não estiver incluído no comando `git commit` , você será solicitado a adicionar uma mensagem em seu editor de texto padrão - veja 'Usando mensagens detalhadas de commit' abaixo.

#### A opção -a

Outra opção popular é a opção `-a` . O `-a` representa todos. Esta opção automaticamente prepara todos os arquivos modificados para serem confirmados. Se novos arquivos forem adicionados, a opção `-a` não organizará esses novos arquivos. Apenas os arquivos dos quais o repositório Git está ciente serão confirmados.

Por exemplo:

Digamos que você tenha um arquivo `README.md` que já foi confirmado no seu repositório. Se você fizer alterações neste arquivo, poderá usar a opção `-a` no comando commit para preparar e incluir as mudanças em seu repositório. No entanto, e se você também adicionou um novo arquivo chamado `index.html` ? A opção `-a` não organizará o `index.html` pois ele não existe atualmente no repositório. Quando novos arquivos foram adicionados, o comando `git add` deve ser chamado para preparar os arquivos antes que eles possam ser confirmados no repositório.

Um exemplo de como usar a opção `-a` :

```shell
git commit -am “My new changes” 
```

A saída no seu terminal deve ser algo como isto:

```shell
[master 22gc8v1] My new message 
 1 file changed, 1 insertion(+) 
```

### Usando mensagens de confirmação detalhadas

Embora `git commit -m "commit message"` funcione bem, pode ser útil fornecer informações mais detalhadas e sistemáticas.

Se você confirmar sem usar a opção `-m` , o git abrirá seu editor de texto padrão com um novo arquivo, que incluirá uma lista comentada de todos os arquivos / mudanças que estão em estágio no commit. Em seguida, você grava sua mensagem de confirmação detalhada (a primeira linha será tratada como a linha de assunto) e a confirmação será executada quando você salvar / fechar o arquivo.

Tenha em mente:

*   Mantenha o tamanho das suas linhas de mensagens de confirmação inferiores a 72 caracteres como prática padrão
*   É perfeitamente ok - e até recomendado - escrever mensagens de confirmação de múltiplas linhas
*   Você também pode se referir a outros problemas ou solicitar solicitações em sua mensagem de confirmação. O GitHub alocou uma referência numérica para todos os pedidos e problemas de pull, por exemplo, se você quer referir-se ao pull request # 788, simplesmente faça isso na linha de assunto ou no texto do corpo conforme apropriado.

#### A opção --amend

A opção `--amend` permite que você altere seu último commit. Vamos dizer que você acabou de cometer e você cometeu um erro na sua mensagem de log de commit. Você pode modificar convenientemente o commit mais recente usando o comando:

```shell
git commit --amend -m "an updated commit message" 
```

Se você esquecer de incluir um arquivo no commit:

```shell
git add FORGOTTEN-FILE-NAME 
 git commit --amend -m "an updated commit message" 
 
 # If you don't need to change the commit message, use the --no-edit option 
 git add FORGOTTEN-FILE-NAME 
 git commit --amend --no-edit 
```

Compromissos prematuros acontecem o tempo todo durante o desenvolvimento do dia-a-dia. É fácil esquecer o palco de um arquivo ou como formatar corretamente sua mensagem de commit. O sinalizador `--amend` é uma maneira conveniente de corrigir esses pequenos erros. Esse comando substituirá a antiga mensagem de confirmação pela atualização especificada no comando.

Emendas modificadas são, na verdade, totalmente novas e o commit anterior não estará mais na sua ramificação atual. Quando você está trabalhando com outras pessoas, você deve tentar evitar cometer commits se o último commit já foi enviado para o repositório.

Com `--amend` , um dos flag úteis que você pode usar é `--author` que permite alterar o autor do último commit que você fez. Imagine uma situação em que você não configurou corretamente seu nome ou e-mail nas configurações do git, mas você já fez um commit. Com o sinalizador `--author` você pode simplesmente alterá-las sem redefinir o último commit.
```
git commit --amend --author="John Doe <johndoe@email.com>" 
```

#### A opção -v ou --verbose

A opção `-v` ou `--verbose` é usada sem a opção `-m` . A opção `-v` pode ser útil quando você deseja editar uma mensagem de commit do Git em seu editor padrão enquanto pode ver as mudanças que você fez para o commit. O comando abre seu editor de texto padrão com um modelo de mensagem de confirmação _, bem como_ uma cópia das alterações feitas para este commit. As alterações, ou diff, não serão incluídas na mensagem de commit, mas elas fornecem uma boa maneira de referenciar suas mudanças quando você as está descrevendo em sua mensagem de commit.

### Mais Informações:

*   Documentação do Git: [commit](https://git-scm.com/docs/git-commit)