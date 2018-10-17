---
title: Delete a Git Branch Both Locally and Remotely
localeTitle: Excluir um branch do Git local e remotamente
---
// localmente ((se você sabe o que está fazendo!) git branch -d localBranchName
```
// and then if you need to... 
 // on remote 
 git push origin :remoteBranchName 
```

## Quando excluir filiais?

Normalmente, em um fluxo de contribuição, os `Branches` são uma ótima maneira de trabalhar em diferentes recursos, correções, etc., enquanto os isolam da base de código principal. Portanto, um repo pode ter um branch `master` e separar branches para trabalhar em diferentes recursos.

Normalmente, quando o trabalho é concluído em um recurso e é recomendável excluir o ramo.

## O fluxo de trabalho Excluir:

Digamos que você tenha um `AwesomeRepo` chamado `AwesomeRepo` e `AwesomeRepo` hospedado no Github, em um local como `https://github.com/my_username/AwesomeRepo` .

Também vamos supor que tem os ramos como:  
`master`  
`feature/some-cool-new-stuff`  
`fix/authentication`  
`staging`

Para consistência, vamos supor que os nomes das ramificações sejam os mesmos tanto no `local` quanto no `remote` .

Agora, digamos que você tenha concluído essa correção para autenticação e queira remover a `fix/authentication` da filial.

## Excluindo a ramificação REMOTAMENTE:

Simplesmente faça:

`git push --delete <remote> <branch>` .

Por exemplo: `git branch --delete origin fix/authentication`

Se você receber o erro
```
error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name' 
```

Talvez outra pessoa já tenha excluído o ramo. Tente sincronizar sua lista de ramificações usando
```
git fetch -p 
```

O manual do git diz -p, --prune Depois de buscar, remova qualquer ramificação de rastreamento remoto que não exista mais no controle remoto.

## Excluindo o ramo LOCALMENTE:

Primeiro check-out para um ramo diferente daquele que você deseja excluir:

`git checkout <branch>` .

Por exemplo: `git checkout master`

O Git não permitirá que você exclua o branch em que você está no momento.

Em seguida, continue com a exclusão:

`git branch -D <branch>` .

Por exemplo: `git branch -D fix/authentication`