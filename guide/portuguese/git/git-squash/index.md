---
title: Git Squash
localeTitle: Git Squash
---
## Git Squash

Uma das coisas que os desenvolvedores ouvem com frequência sobre seus pedidos de pull é algo como "Isso parece bom para mim, por favor, squash e mesclar". A parte divertida é que não existe tal comando como o `git squash` (a menos que você crie um [alias](https://guide.freecodecamp.org/git/git-rebase) para ele). Para `squash` pull request significa comumente compactar todos os commits deste pedido em um (raramente para outro número) para torná-lo mais conciso, legível e não poluir o histórico do branch principal. Para alcançar esse desenvolvedor, é necessário usar o **modo interativo** do comando [Git Rebase](https://guide.freecodecamp.org/git/git-rebase) .

Muitas vezes, quando você desenvolve algum novo recurso, você acaba com vários commits intermitentes em seu histórico - você desenvolve incrementalmente, afinal. Isso pode ser apenas alguns erros ou etapas para a solução final. Na maioria das vezes não adianta ter todos esses commits na versão pública final do código, então é mais benéfico ter todos eles compactados em um, único e final.

Então vamos supor que você tenha o seguinte log de commit no branch que gostaria de mesclar como parte do pull request:

```shell
$ git log --pretty=oneline --abbrev-commit 
 30374054 Add Jupyter Notebook stub to Data Science Tools 
 8490f5fc Minor formatting and Punctuation changes 
 3233cb21 Prototype for Notebook page 
```

É claro que preferimos ter apenas um commit aqui, já que não há nenhum benefício em saber o que começamos a escrever e quais erros corrigimos lá depois, apenas o resultado final é importante.

Então, o que fazemos é iniciar uma sessão de rebase interativa do **HEAD** atual (commit **30374054** ) para o commit **3233cb21** , com a intenção de combinar **3** commits mais recentes em um:

```shell
$ git rebase -i HEAD~3 
```

Isso abrirá um editor com algo como seguir:

```shell
pick 3233cb21 Prototype for Notebook page 
 pick 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
 # Rebase 
 # 
 # Commands: 
 #  p, pick = use commit 
 #  r, reword = use commit, but edit the commit message 
 #  e, edit = use commit, but stop for amending 
 #  s, squash = use commit, but meld into previous commit 
 #  f, fixup = like "squash", but discard this commit's log message 
 #  x, exec = run command (the rest of the line) using shell 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
```

Como sempre, o Git nos dá uma mensagem de ajuda muito boa, onde você pode ver essa opção de `squash` que estamos procurando.

Atualmente, as instruções para o rebase interativo dizem para `pick` cada confirmação especificada **e** preservar a mensagem de confirmação correspondente. Isso é - não mude nada. Mas queremos ter apenas um commit no final. Simplesmente edite o texto em seu editor substituindo `pick` with `squash` (ou apenas `s` ) ao lado de cada commit que queremos eliminar e salve / saia do editor. Isso pode parecer assim:

```shell
s 3233cb21 Prototype for Notebook page 
 s 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
```

Quando você fecha seu editor salvando essas alterações, ele será reaberto imediatamente, sugerindo a escolha e reformulação de mensagens de confirmação. Algo como

```shell
# This is a combination of 3 commits. 
 # The first commit's message is: 
 Prototype for Notebook page 
 
 # This is the 2nd commit message: 
 
 Minor formatting and Punctuation changes 
 
 # This is the 3rd commit message: 
 
 Add Jupyter Notebook to Data Science Tools 
 
 # Please enter the commit message for your changes. Lines starting 
 # with '#' will be ignored, and an empty message aborts the commit. 
```

Neste ponto, você pode excluir todas as mensagens que não deseja incluir na versão final de confirmação, reformulá-las ou apenas escrever a mensagem de confirmação do zero. Apenas lembre-se que a nova versão incluirá todas as linhas que não estão iniciando com o caractere `#` . Mais uma vez, salve e saia do seu editor.

O seu terminal agora deve mostrar uma mensagem de sucesso, incluindo `Successfully rebased and updated <branch name>` e o log do git deve mostrar um histórico agradável e compactado com apenas uma confirmação. Todos os commits intermediários acabaram e estamos prontos para nos fundir!

### Aviso sobre incompatibilidade de histórico de confirmação local e remota

Essa operação é um pouco perigosa se você já tiver seu branch publicado em um repositório remoto - você está modificando o histórico de commits depois de tudo. Portanto, é melhor fazer a operação de squash no branch local antes de fazer **push** . Às vezes, já será empurrado - como você criaria uma solicitação de pull, afinal? Neste caso, você terá que **forçar** as mudanças no ramo remoto depois de fazer o esmagamento, já que seu histórico local e histórico de ramificação no repositório remoto são diferentes:

`shell $ git push origin +my-branch-name`

Faça o seu melhor para se certificar de que você é o único usando este ramo remoto neste ponto, ou você tornará sua vida mais difícil tendo incompatibilidade de histórico. Mas como a **eliminação** é geralmente feita como a operação final em um ramo antes de se livrar dela, geralmente não é uma preocupação tão grande.