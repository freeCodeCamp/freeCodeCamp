---
title: Untrack Files Previously Committed from New Gitignore
localeTitle: Desproteger arquivos anteriormente comprometidos com o novo Gitignore
---
Para não rastrear um _único_ arquivo, ou seja, parar de rastrear o arquivo, mas não excluí-lo do uso do sistema:

`git rm --cached filename`

Para desimpedir _todos os_ arquivos no `.gitignore` :

Primeiro, **confirme** todas as alterações de código pendentes e, em seguida, execute:

`git rm -r --cached`

Isso remove todos os arquivos alterados do índice (área de preparação) e executa:

`git add .`

Confirme:

`git commit -m ".gitignore is now working"`

Para desfazer `git rm --cached filename` , use `git add filename`