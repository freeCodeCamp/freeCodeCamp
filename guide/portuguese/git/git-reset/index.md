---
title: Git Reset
localeTitle: Git Reset
---
## Git Reset

O comando `git reset` permite que você `git reset` sua cabeça atual para um estado especificado. Você pode redefinir o estado de arquivos específicos, bem como uma ramificação inteira.

### Redefinir um arquivo ou conjunto de arquivos

O comando a seguir permite escolher seletivamente partes do conteúdo e reverter ou desassociar.

```shell
git reset (--patch | -p) [tree-ish] [--] [paths] 
```

### Desencorajar um arquivo

Se você moveu um arquivo para a área de preparação com o `git add` , mas não quer mais que ele faça parte de um commit, você pode usar o `git reset` para desassociar o arquivo:

```shell
git reset HEAD FILE-TO-UNSTAGE 
```

As alterações feitas ainda estarão no arquivo, esse comando apenas remove esse arquivo da sua área de preparação.

### Redefinir uma ramificação para uma confirmação anterior

O comando a seguir redefine o HEAD da sua ramificação atual para o `COMMIT` fornecido e atualiza o índice. Basicamente, ele rebobina o estado de sua ramificação e, em seguida, todos os commits feitos por você, escrevem sobre qualquer coisa que tenha vindo depois do ponto de redefinição. Se você omitir o `MODE` , o padrão será `--mixed` :

```shell
git reset MODE COMMIT 
```

As opções para `MODE` são:

*   `--soft` : não redefine o arquivo de índice ou a árvore de trabalho, mas redefine o HEAD para `commit` . Altera todos os arquivos para "Alterações a serem confirmadas"
*   `--mixed` : redefine o índice, mas não a árvore de trabalho, e relata o que não foi atualizado
*   `--hard` : redefine o índice e a árvore de trabalho. Quaisquer alterações nos arquivos rastreados na árvore de trabalho desde a `commit` são descartadas
*   `--merge` : redefine o índice e atualiza os arquivos na árvore de trabalho que são diferentes entre `commit` e HEAD, mas mantém os que são diferentes entre o índice e a árvore de trabalho
*   `--keep` : redefine entradas de índice e atualiza arquivos na árvore de trabalho que são diferentes entre `commit` e HEAD. Se um arquivo diferente entre `commit` e HEAD tiver alterações locais, a redefinição será abortada

### Desmistificando o Reset

Atraves de um exemplo de utilização básico do Reset com um fluxo de trabalho simples, ou seja, com apenas uma ramificação (a padrão "master").

#### As três árvores

Um jeito simples de se pensar sobre 'reset' e 'checkout' é atraves de uma forma de pensar em que o Git consiste em um gerenciador de conteúdo que trabalha com três árvores diferentes. Por "árvores", entende-se "coleção de arquivos", e não especificamente a estrutura de dados.

O git, como um sistema, gerencia e manipula três árvores em suas operações normais:

| Árvore              | Função          |
| -------------       |:-------------:|
| Head                | snapshot do último commit, próximo parente |
| Index               | próximo snapshot do commit proposto      |
| Working Directory   | sandbox      |

#### A HEAD (cabeça)

HEAD é o ponteiro para referência do ramo (branch) atual, que por sua vez é um ponteiro para o último commit feito naquele ramo (branch). Isto significa que HEAD será o parente do próximo commit que será criado. É geralmente mais simples pensar em HEAD como uma foto (snapshot) do seu último commit naquele ramo (branch).

#### O INDEX (área de preparação)

O INDEX é seu próximo commit proposto, o INDEX também pode ser atribuido ao conceito de "área de preparação" do Git, pois é aqui que o Git irá olhar quando você rodar o comando `git commit`.

#### Working Directory (diretório de trabalho)

E por último, tem-se o diretório de trabalho. As outras duas árvores salvam seus conteúdo de uma forma eficiente mas incoveniente, dentro da pasta `.git`. O diretório de trabalho desempacota estas árvores em arquivos reais, o que torna a edição destes mais fácil. Pense no diretório de trabalho como uma sandbox (caixa de areia), onde você pode tentar mudanças antes de fazer um commit delas para a área de preparação (index).

#### O fluxo de trabalho

O propósito principal do Git é guardar fotos (snapshots) de seu projeto em estados sucessivamente melhores, manipulando as três árvores.


![exemplo de fluxo de trabalho](https://git-scm.com/book/en/v2/images/reset-workflow.png "exemplo de fluxo de trabalho")

Vamos visualizar este processo: digamos que você está em um novo diretório com apenas um arquivo dentro dele. Iremos chamar isto de v1 do arquivo, versão 1 deste arquivo, e está indicado na imagem em azul. Agora iremos rodar o comando `git init`, o que irá criar um repositório Git com uma referencia HEAD que aponta para um ramo (branch) não criado (master ainda não existe). 

![fluxo de trabalho 1](https://git-scm.com/book/en/v2/images/reset-ex1.png "fluxo de trabalho 1")

Neste momento, apenas o diretório de trabalho possui algum conteúdo.

Agora queremos dar um commit neste arquivo, portanto usamos `git add` para pegar o conteúdo dentro do diretório de trabalho e copiá-lo para o Index (área de preparação).

![fluxo de trabalho 2](https://git-scm.com/book/en/v2/images/reset-ex2.png "fluxo de trabalho 2")

Agora rodamos o `git commit`, o que pega o conteúdo do Index e o salva como uma foto (snapshot) permanente, cria um objeto commit que aponta para esta foto, e atualiza o ramo master para apontar para este commit.

![fluxo de trabalho 3](https://git-scm.com/book/en/v2/images/reset-ex3.png "fluxo de trabalho 3")

Se rodarmos `git status`, não iremos ver mudanças, porque as três árvores estão iguais. 

Agora queremos fazer uma alteração neste arquivo e fazer um commit dele. Iremos fazer o mesmo processo; primeiramente mudamos o arquivo em nosso diretório de trabalho. Iremos chamar de v2 do arquivo, e está indicado em vermelho na figura abaixo.

![fluxo de trabalho 4](https://git-scm.com/book/en/v2/images/reset-ex4.png "fluxo de trabalho 4")

Se rodarmos `git status` agora, iremos ver o arquivo em vermelho como "Changes not staged for commit", porque há diferenças entre o arquivo no Index e no diretório de trabalho. O próximo passo é rodar o comando `git add` para levar o arquivo v2 também para a área de preparação (staging area).  

![fluxo de trabalho 5](https://git-scm.com/book/en/v2/images/reset-ex5.png "fluxo de trabalho 5")

Agora, se rodarmos `git status`, iremos ver o arquivo em verde abaixo de "Changes to be committed" porque a área de preparação e a HEAD estão diferentes, ou seja, nosso próximo commit proposto é agora diferente de nosso último commit. Finalmente, vamos rodar `git commit` para finalizar o commit.

![fluxo de trabalho 6](https://git-scm.com/book/en/v2/images/reset-ex6.png "fluxo de trabalho 6")

Agora `git status` não irá nos mostrar nada, porque as três árvores estão iguais novamente.

##### A função do Reset

O comando reset faz mais sentido quando visto neste contexto.

Para o propósito destes exemplos, vamos dizer que modificamos file.txt novamente e fizemos um terceiro commit. Então agora nosso histórico é algo como a imagem abaixo:

![reset 1](https://git-scm.com/book/en/v2/images/reset-start.png "reset 1")

Vamos agora passo a passo ver o que o Reset faz quando é chamado. Ele manipula diretamente as três árvores em uma forma simples e previsível. Ele faz até três operações básicas.

###### Passo 1: move a HEAD

A primeira coisa que Reset irá fazer é mover para onde HEAD aponta. Isto não é o mesmo que mudar HEAD propriamente (que é o que o comando checkout faz); Reset move o ramo (branch) que HEAD aponta. Isto significa que se HEAD está configurado para o ramo master, isto é, você está atualmente no ramo master, rodar `git reset 9e5e6a4` irá começar por fazer master apontar para 9e5e6a4.

![reset 2](https://git-scm.com/book/en/v2/images/reset-soft.png "reset 2")

Não importa qual forma de Reset com um commit que invocar, esta é a primeira coisa que o comando sempre irá tentar fazer. Com `reset --soft`, ele irá simplesmente para aqui.

Agora dê uma nova olhada para o diagrama e perceba o que aconteceu: ele essencialmente desfez o último comando de `git commit`. Quando você roda `git commit`, o Git cria um novo commit e move o ramo que o Head aponta para ele. Quando você reseta de volta para HEAD~ (o parente de HEAD), você está movendo o ramo devolta para onde estava, sem mudar a área de preparação ou o diretório de trabalho. Você pode agora atualizar a área de preparação e rodar `git commit` novamente para realizar o que `git commit --amend` teria feito.

###### Passo 2: atualizando a área de preparação (--mixed)

Note que se você rodar `git status` agora você verá em verde a diferença entre a área de preparação e o que a nova HEAD é.

A próxima coisa que reset irá fazer é atualizar a área de prepração com o conteúdo do que a foto (snapshot) de HEAD agora aponta.]

![reset 3](https://git-scm.com/book/en/v2/images/reset-mixed.png "reset 3")

Se você especificar a opção `--mixed`, reset irá parar neste ponto. Isto também é padrão, então se você não especificar nenhuma opção (apenas `git reset HEAD~` neste caso), isto é onde o comando irá parar.

Agora dê mais uma olhada para o diagrama e percepa o que aconteceu: ele ainda desfez seu último commit, mas também tirou da área de preparação tudo. Você voltou para antes de rodar o `git add` e `git commit`.

###### Passo 3: atualizar o diretório de trabalho (--hard)

A terceira coisa que o comando reset faz é fazer com que o diretório de trabalho fique igual a área de preparação. Se você usar a opção `--hard`, ele irá continuar para este passo.

![reset 4](https://git-scm.com/book/en/v2/images/reset-hard.png "reset 4")

Então vamos pensar sobre o que aconteceu. Você desfez seu último commit, o `git add` e o `git commit`, e todo o trabalho que fez em seu diretório de trabalho.

É importante notar que a flag (--hard) é a única forma de fazer o comando reset perigoso, e um dos poucos casos onde o Git irá destroir dados de verdade. Qualquer outra invocação de reset pode ser facilmente desfeita, mas a opção `--hard` não pode, uma vez que sobrescreve forçadamente arquivos no diretório de trabalho. Neste caso em particular, nós ainda teríamos a versão v3 de nosso arquivo em um commit no nosso banco de dados do Git, e poderíamos pegá-la devolta. Mas se não tivéssemos dado commit nela, o Git ainda teria sobrescrito o arquivo e seria impossível recuperá-lo.

Resumo

O comando reset sobrescreve estas três árvores em uma ordem específica, parando quando você informá-lo:

Move para onde o ramo HEAD aponta (para aqui se `--soft`)

Faz a área de preparação ficar igual o HEAD (para aqui a não ser que `--hard` seja especificado)

Faz o diretório de trabalho ficar igual a área de preparação

### Mais Informações:

*   [Git redefinir documentação](https://git-scm.com/docs/git-reset)
*   [Git reset desmistificado](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)
