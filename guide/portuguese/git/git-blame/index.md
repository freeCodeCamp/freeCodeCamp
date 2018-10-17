---
title: Git Blame
localeTitle: Git Blame
---
## Git Blame

Com `git blame` você pode ver quem mudou o que em um arquivo específico, linha por linha, o que é útil se você trabalha em uma equipe, em vez de sozinho. Por exemplo, se uma linha de código faz você se perguntar por que ela está lá, você pode usar `git blame` e você saberá quem deve perguntar.

### Uso

Você usa `git blame` assim: `git blame NAME_OF_THE_FILE`

Por exemplo: `git blame triple_welcome.rb`

Você verá uma saída como esta:

```shell
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 1) 3.times do 
 e483daf0 (John Doe      2018-06-18 23:50:40 -0500 2)   print 'Welcome ' 
 0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 3) end 
```

Cada linha é anotada com o SHA, nome do autor e data do último commit.

### Aliasing Git Blame

Alguns programadores não gostam da palavra "culpa", devido à conotação negativa que "culpar alguém" traz consigo. Além disso, raramente a ferramenta é usada para culpar alguém, mas para pedir conselhos ou entender o histórico de um arquivo. Portanto, às vezes as pessoas usam um alias para mudar a `git blame` para algo que soa um pouco mais legal, como `git who` , `git history` ou `git praise` . Para fazer isso, basta adicionar um alias git como este:

`git config --global alias.history blame`

Você pode encontrar mais informações sobre aliasing git commands [aqui](../git-alias/index.md) .

### Plugins do Editor de Texto utilizando Git Blame

Existem alguns plugins para editores de texto que utilizam `git blame` . Por exemplo, para criar algo como mapas de calor ou adicionar informações em linha para a linha atual que você está inspecionando. Um exemplo famoso é o [GitLense](https://gitlens.amod.io/) para o VSCode.

### Leitura Adicional

*   [Documentação do Git Blame](https://git-scm.com/docs/git-blame)
*   [leituras adicionais sobre o uso do Git Blame](https://corgibytes.com/blog/2016/10/18/git-blame/)