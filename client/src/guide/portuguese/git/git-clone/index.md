---
title: Git Clone
localeTitle: Clone Git
---
## Clone Git

O comando `git clone` permite que você copie um repositório remoto em sua máquina local.

Primeiro, encontre o repositório remoto para o projeto no qual você está trabalhando ou com interesse - isso também pode ser o seu fork de um projeto. Em seguida, copie o URL para isso. Por exemplo, se você tiver bifurcado o repositório de guias freeCodeCamp, a URL será semelhante a `https://github.com/YOUR-GITHUB-USERNAME/guides.git` .

Na linha de comando em sua máquina local, navegue até onde você deseja salvar o projeto em seu diretório de trabalho. Finalmente, execute o comando `git clone` :

```shell
git clone URL-OF-REPOSITORY 
```

O nome padrão do novo diretório em seu computador é o nome do repositório, mas você pode alterar isso incluindo o último parâmetro (opcional):

```shell
git clone URL-OF-REPOSITORY NAME-OF-DIRECTORY-ON-COMPUTER 
```

O Git fornece ao remoto o alias "origin". Essa é uma maneira útil de se referir ao controle remoto quando você deseja enviar suas alterações para o servidor remoto ou extrair alterações dele. Veja [Git push](https://guide.freecodecamp.org/git/git-push/) e [Git pull](https://guide.freecodecamp.org/git/git-pull/) para mais detalhes.

O Git apenas puxa o ramo principal do controle remoto para o seu computador. Este ramo é geralmente chamado de "mestre" por convenção, mas pode ser definido de forma diferente dependendo do projeto.

Além disso, o Git configura automaticamente sua ramificação principal local para rastrear a ramificação remota. Quando você executar o `git status` , verá informações sobre se sua filial local está atualizada com o controle remoto. Aqui está um exemplo de saída:

```shell
myCommandPrompt (master) >> git status 
 On branch master 
 Your branch is up-to-date with 'origin/master'. 
 nothing to commit, working tree clean 
 myCommandPrompt (master) >> 
```

Se o seu branch `master` local tiver três commits que você ainda não tenha enviado para o servidor remoto, o status dirá "Sua ramificação está à frente de 'origin / master' por 3 commits."

### Git Clone Mirror

Se você deseja hospedar o espelho de um repositório, você pode usar o parâmetro mirror.

```shell
git clone URL-OF-REPOSITORY --mirror 
```

Depois de espelhar um repositório, você pode clonar seu espelho local de seu servidor.

```shell
git clone NAME-OF-DIRECTORY-ON-COMPUTER 
```

### Mais Informações:

*   Documentação do Git: [clone](https://git-scm.com/docs/git-clone)