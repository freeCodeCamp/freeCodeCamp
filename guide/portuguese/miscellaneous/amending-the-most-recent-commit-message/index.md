---
title: Amending the Most Recent Commit Message
localeTitle: Emendando a mensagem de confirmação mais recente
---
Freqüentemente, a ocasião surgirá onde o último commit foi enviado prematuramente (falta de um arquivo, falta de uma mudança em um arquivo, etc.) ou a mensagem de commit pode ter sido digitada incorretamente ou incompleta. Para tal ocasião, o Git oferece o `--amend` confirmação `--amend` . Para corrigir um commit, comece digitando:
```
git commit --amend 
```

O acima irá confirmar quaisquer alterações adicionais e abrir seu editor, permitindo que você altere a mensagem de commit do commit mais recente. Além disso, você pode definir a mensagem de confirmação diretamente na linha de comando com:
```
git commit --amend -m "New commit message" 
```

Se você quiser adicionar arquivos ou alterações ao commit, você só precisa garantir que as mudanças sejam adicionadas ao staging com `git add` antes de executar o comando. Além disso, se você quiser adicionar todos os arquivos assistidos, modificados (em teste ou não) e alterar o commit, você pode usar:
```
git commit --amend -am "New commit message" 
```

A bandeira `-a` diz para adicionar todos os arquivos que o Git disse para rastrear.

## Emendar um commit depois de empurrar para remoto

Ao usar o sinalizador `--amend` , o Git substituirá o último commit pelo novo commit completo com um novo hash. Isso significa que, se você já tiver enviado para o controle remoto antes de alterar, o commit antigo estará ausente de qualquer push subsequente e qualquer novo push será rejeitado. A maneira de contornar isso é `--force` o empurrão. _NOTA: - a `--force` não deve ser feita levemente._ Para fazer isso, digite:
```
git push <remote> <branch> --force 
```

**Ou**
```
git push <remote> <branch> -f 
```

O envio forçado sobrescreve o ramo remoto com o estado do seu local. Se houver commits no branch remoto que você não tem em seu branch local, você os perderá. Isso pode causar problemas se outros já tiverem retirado ou clonado do seu repositório. Se você acredita que outros já _podem_ ter baixado o commit alterado, por favor, coordene com eles.

## Veja também

*   [git-commit (1) Página do manual](https://www.kernel.org/pub/software/scm/git/docs/git-commit.html)
*   [Pro Git](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
*   [StackOverflow](http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git/179147#179147)