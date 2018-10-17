---
title: Git Stash
localeTitle: Git Stash
---
## Git Stash

O Git possui uma área chamada stash, onde você pode armazenar temporariamente um instantâneo de suas alterações sem comprometê-las com o repositório. É separado do diretório de trabalho, da área de preparação ou do repositório.

Essa funcionalidade é útil quando você faz alterações em uma ramificação que não está pronta para confirmar, mas precisa alternar para outra ramificação.

### Stash Changes

Para salvar suas alterações no stash, execute o comando:

```shell
git stash save "optional message for yourself" 
```

Isso salva suas alterações e reverte o diretório de trabalho para a aparência do último commit. As alterações ocultas estão disponíveis em qualquer ramificação nesse repositório.

Observe que as alterações que você deseja ocultar precisam estar nos arquivos rastreados. Se você criou um novo arquivo e tentar esconder as alterações, poderá receber o erro `No local changes to save` .

### Visualizar alterações ocultas

Para ver o que está no seu stash, execute o comando:

```shell
git stash list 
```

Isso retorna uma lista de seus instantâneos salvos no formato `stash@{0}: BRANCH-STASHED-CHANGES-ARE-FOR: MESSAGE` . A parte `stash@{0}` é o nome do stash e o número nas chaves ( `{ }` ) é o índice desse stash. Se você tiver vários conjuntos de alterações armazenados, cada um deles terá um índice diferente.

Se você esqueceu quais alterações foram feitas no stash, você pode ver um resumo delas com `git stash show NAME-OF-STASH` . Se você quiser ver o layout típico do patch no estilo diff (com os + e os 's' para alterações linha por linha), você pode incluir a opção `-p` (para patch). Aqui está um exemplo:

```shell
git stash show -p stash@{0} 
 
 # Example result: 
 diff --git a/PathToFile/fileA b/PathToFile/fileA 
 index 2417dd9..b2c9092 100644 
 --- a/PathToFile/fileA 
 +++ b/PathToFile/fileA 
 @@ -1,4 +1,4 @@ 
 -What this line looks like on branch 
 +What this line looks like with stashed changes 
```

### Recuperar alterações ocultas

Para recuperar as alterações do stash e aplicá-las ao ramo atual em que você está, você tem duas opções:

1.  `git stash apply STASH-NAME` aplica as alterações e deixa uma cópia no stash
2.  `git stash pop STASH-NAME` aplica as alterações e remove os arquivos do stash

Pode haver conflitos quando você aplica alterações. Você pode resolver os conflitos semelhantes a uma mesclagem ( [consulte Mesclar o Git para obter detalhes](https://guide.freecodecamp.org/git/git-merge/) ).

### Excluir alterações ocultas

Se você quiser remover as alterações ocultas sem aplicá-las, execute o comando:

```shell
git stash drop STASH-NAME 
```

Para limpar todo o stash, execute o comando:

```shell
git stash clear 
```

### Mais Informações:

*   O comando `git merge` : [fCC Guide](https://guide.freecodecamp.org/git/git-merge/)
*   Documentação do Git: [stash](https://git-scm.com/docs/git-stash)