---
title: Git Remote
localeTitle: Git Remote
---
## Git Remote

O comando `git remote` permite que você gerencie seus repositórios remotos do Git. Repositórios remotos são referências a outros repositórios Git que operam na mesma base de código.

Você pode [puxar de](https://guide.freecodecamp.org/git/git-pull/) e [empurre para](https://guide.freecodecamp.org/git/git-push/) repositórios remotos.

Você pode enviar ou puxar para um URL HTTPS, como `https://github.com/user/repo.git` , ou um URL SSH, como `git@github.com:user/repo.git` .

Não se preocupe, toda vez que você enviar algo, não será necessário digitar o URL inteiro. O Git associa um URL remoto a um nome e o nome que a maioria das pessoas usa é `origin` .

### Listar todos os repositórios remotos configurados

```bash
git remote -v 
```

Este comando lista todos os repositórios remotos ao lado de sua localização.

Repositórios remotos são referidos pelo nome. Como observado acima, o repositório principal de um projeto é geralmente chamado de `origin` .

Quando você usa [clone git](https://guide.freecodecamp.org/git/git-clone/) Para obter uma cópia de um repositório, o Git configura o local original como o repositório remoto de _origem_ .

### Adicione um repositório remoto

Para adicionar um repositório remoto ao seu projeto, você executaria o seguinte comando:

```bash
git remote add REMOTE-NAME REMOTE-URL 
```

O `REMOTE-URL` pode ser HTTPS ou SSH. Você pode encontrar o URL no GitHub clicando no menu suspenso "Clonar ou baixar" no seu repositório.

Por exemplo, se você quiser adicionar um repositório remoto e chamá-lo de `example` , você executaria:

```bash
git remote add example https://example.org/my-repo.git 
```

### Atualizar um URL remoto

Se o URL de um repositório remoto for alterado, você poderá atualizá-lo com o seguinte comando, em que `example` é o nome do controle remoto:

```bash
git remote set-url example https://example.org/my-new-repo.git 
```

### Excluindo Remotes

A exclusão de controles remotos é feita assim:

```bash
git remote rm REMOTE-NAME 
```

Você pode confirmar que o controle remoto foi removido, visualizando a lista de seus controles remotos existentes:

```bash
git remote -v 
```

### Mais Informações:

*   [Documentação remota do Git](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)