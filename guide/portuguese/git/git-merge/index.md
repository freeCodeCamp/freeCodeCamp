---
title: Git Merge
localeTitle: Git Merge
---
## Git Merge

O comando `git merge` irá mesclar quaisquer alterações que foram feitas na base de código em uma ramificação separada para sua ramificação atual.

A sintaxe do comando é a seguinte:

```shell
git merge BRANCH-NAME 
```

Por exemplo, se você está trabalhando atualmente em uma ramificação chamada `dev` e gostaria de mesclar quaisquer novas alterações feitas em uma ramificação denominada `new-features` , você deve emitir o seguinte comando:

```shell
git merge new-features 
```

**Observe:** Se houver alterações não confirmadas na sua ramificação atual, o Git não permitirá que você se una até que todas as alterações na ramificação atual tenham sido confirmadas. Para lidar com essas mudanças, você pode:

*   Crie uma nova ramificação e confirme as alterações

```shell
git checkout -b new-branch-name 
 git add . 
 git commit -m "<your commit message>" 
```

*   Guardá-los

```shell
git stash               # add them to the stash 
 git merge new-features  # do your merge 
 git stash pop           # get the changes back into your working tree 
```

*   Abandone tudo

```shell
git reset --hard        # removes all pending changes 
```

## Mesclar Conflito

Um conflito de mesclagem é quando você faz commits em ramificações separadas que alteram a mesma linha de maneiras conflitantes. Portanto, o Git não saberá qual versão do arquivo deve ser mantida

resultando na mensagem de erro:

CONFLITO (conteúdo): mesclar conflito no resumé.txt Falha na mesclagem automática; corrigir conflitos e, em seguida, confirmar o resultado.

No editor de código, o Git usa marcações para indicar a versão HEAD (master) do arquivo e a outra versão do arquivo.

`<<<<<<< HEAD`

`>>>>>>> OTHER`

A partir do editor de código, apague / atualize para resolver conflitos e remova as marcações especiais, incluindo os nomes de arquivos HEAD e OTHER, recarregue seu arquivo e, em seguida, adicione novamente suas cópias.

Para mais informações sobre o comando `git merge` e todas as opções disponíveis, por favor consulte a [documentação](https://git-scm.com/docs/git-merge) do [Git](https://git-scm.com/docs/git-merge) .