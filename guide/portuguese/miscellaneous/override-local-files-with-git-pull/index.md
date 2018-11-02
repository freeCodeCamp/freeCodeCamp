---
title: Override Local Files with Git Pull
localeTitle: Substituir arquivos locais com o Git Pull
---
# Quando você precisa substituir os arquivos locais?

Se você sentir a necessidade de descartar todas as alterações locais e apenas redefinir / sobrescrever tudo com uma cópia do ramo remoto, siga este guia.

Importante: Se você tiver alguma alteração local, ela será perdida. Com ou sem a opção `--hard` , qualquer commit local que não tenha sido enviado será perdido.  
Se você tiver algum arquivo que não seja rastreado pelo Git (por exemplo, conteúdo do usuário carregado), esses arquivos não serão afetados.

## O fluxo de trabalho Sobrescrever:

Para sobrescrever seus arquivos locais, faça:
```
git fetch --all 
 git reset --hard <remote>/<branch_name> 
```

Por exemplo:
```
git fetch --all 
 git reset --hard origin/master 
```

## Como funciona:

`git fetch` transfere o mais recente do remoto sem tentar mesclar ou rebase nada.

Então o reset do git reseta o branch master para o que você acabou de buscar. A opção `--hard` altera todos os arquivos em sua árvore de trabalho para corresponder aos arquivos em `origin/master` .

## Informação adicional:

Vale a pena notar que é possível manter os commits locais atuais criando uma ramificação a partir do `master` ou qualquer ramificação em que você queira trabalhar antes de redefinir:

Por exemplo:
```
git checkout master 
 git branch new-branch-to-save-current-commits 
 git fetch --all 
 git reset --hard origin/master 
```

Depois disso, todos os commits antigos serão mantidos em `new-branch-to-save-current-commits` . No entanto, alterações não comprometidas (mesmo encenadas) serão perdidas. Certifique-se de esconder e cometer qualquer coisa que você precisa.

## Atribuição:

_Este artigo é baseado em uma pergunta sobre estouro de pilha [aqui](http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015)_