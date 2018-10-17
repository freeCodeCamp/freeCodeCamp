---
title: Understand How to Use Git Merge
localeTitle: Entenda como usar o Git Merge
---
Vamos dizer que você está trabalhando em um aplicativo semelhante ao Reddit, mas especificamente para trechos de código. Em um aplicativo desse tipo, você provavelmente teria um branch `master` que contém todos os recursos liberados, um branch `dev` que pode conter recursos que foram codificados, mas ainda não implementados. Cada desenvolvedor na equipe criará suas próprias filiais fora do `dev` ramo de características individuais. A estrutura do repositório seria algo como isto:
```
                                  --- Commit 3 --------- dev branch 
                                / 
 --- Commit 1 ---- Commit 2 ---------------------------- master branch 
```

Se você decidiu fundir o 3º commit ( `Commit 3` ) no branch `master` branch `dev` , então seria tão simples quanto rodar um comando `git merge` porque o branch `dev` está _atualizado_ com o branch `master` : todos os commits no branch `master` existem no branch `dev` . Você pode mesclar as ramificações executando os seguintes comandos:
```
git checkout dev 
 git merge master 
```

O resultado seria algo assim:
```
                                               --------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch 
```

Agora você decide trabalhar no recurso de autenticação. Para trabalhar no recurso de autenticação, você cria outra ramificação com base na ramificação `dev` e decide chamá-la de `auth` . É assim que a estrutura do repo se parece:
```
                                                  ------ auth branch 
                                                / 
                                               --------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch 
```

Se você tivesse que cometer quaisquer alterações na ramificação de `auth` , mesclá-las com a ramificação `dev` seria trivial porque ela está atualizada com a ramificação `dev` . Agora, enquanto você estava trabalhando no recurso de autenticação, um dos desenvolvedores terminou de codificar o recurso de realce de sintaxe e decidiu mesclá-lo com a ramificação `dev` . O repo se parece com isso agora:
```
                                                  --- Commit 5 --- auth branch 
                                                / 
                                               --- Commit 4 ------ dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch 
```

Sua ramificação, na terminologia do Git, é agora um commit por trás do branch `dev` . Isso significa que você não pode simplesmente mesclar as duas ramificações: você deve atualizar sua ramificação `auth` com a ramificação `dev` . Isso pode ser feito com `git merge` !

Mesclar a ramificação de `auth` com a ramificação `dev` ou a ramificação `dev` com a ramificação `master` é direta e faz o que você espera, mas mesclar o inverso tem suas próprias idiossincrasias que não são intuitivas à primeira vista. Eu posso tagarelar sobre isso, ou posso mostrar outro grande diagrama do que aconteceria se você mesclasse o branch `dev` com o branch `auth` neste momento:
```
                                                  --- Commit 5 ----------- auth branch 
                                                /               / 
                                               --- Commit 4 -------------- dev branch 
                                             / 
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch 
```

Veja o que eu fiz lá? Olhe para o diagrama por um segundo e tente entender o que está acontecendo aqui antes de prosseguir. Você essencialmente fez outro commit na ramificação `auth` com os commits da ramificação `dev` incluída. Mas tudo bem, certo? Afinal de contas, no final do dia, eu queria atualizar minha ramificação de `auth` com a ramificação `dev` e agora ela _está_ atualizada? Sim. Mas deixe-me mostrar um diagrama para ilustrar explicitamente o que o outro diagrama implica: Sua ramificação de `auth` agora é assim:
```
    --- Commit 5 ------- Commit 4 ------- auth branch 
  /                / 
 ------ Commit 4 --- --------------------- dev branch 
```

Veja Agora? Você _copiou_ o commit. Se você fosse mesclar ao ramo `dev` agora, seria algo como isto:
```
    --- Commit 5 ------- Commit 4 -------------------------------------- auth branch 
  /                /                  \ 
 ------- Commit 4 ----------------------- Commit 5 ---- Commit 4 -------- dev branch 
```

Você mesclou o mesmo commit duas vezes! Isto obviamente não terá repercussões para o seu próprio código, mas se você decidir analisar seus `git logs` , perceberá imediatamente como está suja sua história do git, com alguns commits sendo feitos repetidamente. Se você quisesse reverter para um commit, seria muito difícil decidir para qual commit reverter.

É preferível que você use o [Git-Rebase](http://forum.freecodecamp.com/t/how-to-use-git-rebase/13226) .