---
title: Git Revert
localeTitle: Git Reverter
---
## Git Reverter

O comando `git revert` desfaz um commit, mas ao contrário do `git reset` , que remove o commit do histórico de commit, ele anexa um novo commit com o conteúdo resultante. Isso evita que o Git perca o histórico, o que é importante para a integridade do seu histórico de revisão e para uma colaboração confiável. Quando você está trabalhando em um repositório com outros desenvolvedores, usar o `git reset` é altamente perigoso porque você altera o histórico de commits, o que torna muito difícil manter um histórico consistente de commits com outros desenvolvedores.

### Opções comuns

1.) Esta é uma opção padrão e não precisa ser especificada. Esta opção abrirá o editor de sistema configurado e solicitará que você edite a mensagem de confirmação antes de confirmar a reversão.

```shell
  -e 
  --edit 
```

2.) Este é o inverso da opção -e. A `revert` não abrirá o editor.

```shell
  --no-edit 
```

3.) Passar esta opção irá impedir que o `git revert` crie um novo commit que inverta o commit alvo. Em vez de criar o novo commit, essa opção adicionará as alterações inversas ao índice de armazenamento temporário e ao diretório de trabalho.

```shell
  -n 
  --no-edit 
```

### Exemplo.

Vamos imaginar a seguinte situação. 1.) Você está trabalhando em um arquivo e adiciona e confirma suas alterações. 2.) Você então trabalha em algumas outras coisas, e faz mais commits. 3.) Agora você percebe, três ou quatro commits atrás, você fez algo que você gostaria de desfazer - como você pode fazer isso?

Você pode estar pensando, basta usar `git reset` , mas isso irá remover todos os commits após o que você gostaria de alterar - `git revert` para o resgate! Vamos percorrer este exemplo:

```shell
mkdir learn_revert # Create a folder called `learn_revert` 
 cd learn_revert # `cd` into the folder `learn_revert` 
 git init # Initialize a git repository 
 
 touch first.txt # Create a file called `first.txt` 
 echo Start >> first.txt # Add the text "Start" to `first.txt` 
 
 git add . # Add the `first.txt` file 
 git commit -m "adding first" # Commit with the message "Adding first.txt" 
 
 echo WRONG > wrong.txt # Add the text "WRONG" to `wrong.txt` 
 git add . # Add the `wrong.txt` file 
 git commit -m "adding WRONG to wrong.txt" # Commit with the message "Adding WRONG to wrong.txt" 
 
 echo More >> first.txt # Add the text "More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding More to first.txt" # Commit with the message "Adding More to first.txt" 
 
 echo Even More >> first.txt # Add the text "Even More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding Even More to First.txt" # Commit with the message "Adding More to first.txt" 
 
 # OH NO! We want to undo the commit with the text "WRONG" - let's revert! Since this commit was 2 from where we are not we can use git revert HEAD~2 (or we can use git log and find the SHA of that commit) 
 
 git revert HEAD~2 # this will put us in a text editor where we can modify the commit message. 
 
 ls # wrong.txt is not there any more! 
 git log --oneline # note that the commit history hasn't been altered, we've just added a new commit reflecting the removal of the `wrong.txt` 
```

#### Mais Informações:

*   [Git reverter documentação](https://git-scm.com/docs/git-revert)
*   [Git reverta tutorial interativo](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)