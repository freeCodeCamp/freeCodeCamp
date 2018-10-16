---
title: Git Bisect
localeTitle: Git Bisect
---
## Git Bisect

O comando `git bisect` ajuda você a encontrar commits que adicionaram mudanças específicas em seu projeto. Isso é particularmente útil se você precisar descobrir qual alteração introduziu um bug.

Esse comando funciona fornecendo um commit "ruim" que inclui o bug e um "bom" commit antes do bug ser introduzido. Através da pesquisa binária, o `git bisect` selecionará os commits e pedirá que você identifique se o commit é "bom" ou "ruim". Isso continua até que o comando consiga encontrar o commit exato que introduziu a mudança.

### Comandos de bissetos

Para iniciar uma sessão de bisseção, você dirá ao git para iniciar uma sessão de bisseção, identificar uma versão "ruim" e identificar uma versão "boa". Assumindo que o commit atual está quebrado, mas commit `4b60707` é bom, você executará o seguinte:

```shell
git bisect start 
 git bisect bad 
 git bisect good 4b60707 
```

O Git irá verificar um commit entre as versões "good" e "bad" e produzir algo como o seguinte:
```
Bisecting: 2 revisions left to test after this (roughly 2 steps) 
```

Agora você deve dizer ao git se o commit atual funciona com `git bisect good` ou se o commit atual está quebrado com `git bisect bad` . Esse processo será repetido até que o comando seja capaz de imprimir o primeiro commit errado.

Quando terminar, você deve limpar a sessão de divisão. Isso irá redefinir seu HEAD para o que era antes de iniciar a sessão de bisseção:

```shell
git bisect reset 
```

### Outros recursos

*   [Documentação do Git bisect](https://git-scm.com/docs/git-bisect)