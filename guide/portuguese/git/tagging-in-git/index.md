---
title: Tagging in Git
localeTitle: Marcação no Git
---
A marcação permite que os desenvolvedores marquem pontos de verificação importantes no decorrer do desenvolvimento de seus projetos. Por exemplo, versões de lançamento de software podem ser marcadas. (Ex: v1.3.2) Essencialmente permite que você dê um commit a um nome especial (tag).

Para ver todas as tags criadas em ordem alfabética:

```bash
git tag 
```

Para obter mais informações sobre uma tag:

```bash
git show v1.4 
```

Existem dois tipos de tags:

1.  Anotado

```bash
git tag -a v1.2 -m "my version 1.4" 
```

2.  Peso leve

```bash
git tag v1.2 
```

Eles diferem na maneira como são armazenados.  
Estes criam tags no seu commit atual.

Incase, você gostaria de marcar uma confirmação anterior para especificar o código de confirmação que você gostaria de marcar:

```bash
git tag -a v1.2 9fceb02 
```

Os nomes de tags podem ser usados ​​em vez de IDs de confirmação durante o check-out e o envio de confirmações para um repositório remoto.

#### Mais Informações:

*   Documentação do Git: [Documentação](https://git-scm.com/docs/git-tag)
*   Git Tagging Chapter: [Livro](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

Você pode listar todas as tags disponíveis em um projeto com o comando `git tag` (nate que elas aparecerão em ordem alfabética):
```
$ git tag 
 v1.0 
 v2.0 
 v3.0 
```

Essa maneira de listar tags é ótima para projetos pequenos, mas projetos maiores podem ter centenas de tags, portanto, talvez seja necessário filtrá-los ao pesquisar um ponto importante no histórico. Você pode encontrar tags contendo caracteres específicos adicionando um `-l` ao comando `git tag` :
```
$ git tag -l "v2.0*" 
 v2.0.1 
 v2.0.2 
 v2.0.3 
 v2.0.4 
```

## Crie uma tag

Você pode criar dois tipos de tags: anotadas e leves. Os primeiros são competir objetos no banco de dados do GIT: eles são checksummed, requiere uma mensagem (como commits) e armazenam outros dados importantes, como nome, e-mail e data. Por outro lado, as tags leves não exigem uma mensagem ou armazenam outros dados, funcionando apenas como um ponteiro para um ponto específico no projeto.

### Crie uma tag anotada

Para criar uma tag anotada, adicione `-a tagname -m "tag message"` ao comando `git tag` :
```
$ git tag -a v4.0 -m "release version 4.0" 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
```

Como você pode ver, o `-a` especifica que você está criando uma tag anotada, depois vem o nome da tag e, finalmente, o `-m` seguido pela mensagem de tag para armazenar no banco de dados do Git.

### Crie uma tag leve

As tags leves contêm apenas a soma de verificação de confirmação (nenhuma outra informação é armazenada). Para criar um, apenas execute o comando `git tag` sem nenhuma outra opção (os caracteres -lw no final do nome são usados ​​para indicar tags leves, mas você pode marcá-los como quiser):
```
$ git tag v4.1-lw 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
 v4.1-lw 
```

Desta vez, você não especificou uma mensagem ou outros dados relevantes, portanto, a tag contém apenas a soma de verificação do commit referenciado.

## Ver dados da tag

Você pode executar o comando `git show` para visualizar os dados armazenados em uma tag. No caso de tags anotadas, você verá os dados da tag e os dados de confirmação:
```
$ git show v4.0 
 tag v4.0 
 Tagger: John Cash <john@cash.com> 
 Date:   Mon Sat 28 15:00:25 2017 -0700 
 
 release version 4.0 
 
 commit da43a5fss745av88d47839247990022a98419093 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
```

Se a tag que você está assistindo for uma tag leve, você verá apenas os dados de confirmação referenciados:
```
$ git show v1.4-lw 
 commit da43a5f7389adcb9201ab0a289c389ed022a910b 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
```

## Marcando compromissos antigos

Você também pode marcar as confirmações passadas usando o commit da tag git. Para fazer isso, você precisará especificar a soma de verificação da confirmação (ou pelo menos uma parte dela) na linha do comando.

Primeiro, execute git log para descobrir a soma de verificação do commit necessário:
```
$ git log --pretty=oneline 
 ac2998acf289102dba00823821bee04276aad9ca added products section 
 d09034bdea0097726fd8383c0393faa0072829a7 refactorization 
 a029ac120245ab012bed1ca771349eb9cca01c0b modified styles 
 da43a5f7389adcb9201ab0a289c389ed022a910b finished details 
 0adb03ca013901c1e02174924486a08cea9293a2 small fix in search textarea styles 
```

Quando você tiver a soma de verificação necessária, adicione-a no final da linha de criação da tag:
```
$ git tag -a v3.5 a029ac 
```

Você verá a tag foi adicionada corretamente com a `git tag` :
```
$ git tag 
 v1.0 
 v2.0 
 v3.0 
 v3.5 
 v4.0 
 v4.1-lw 
```

## Empurre tags

O Git não envia tags por padrão quando você executa o comando git push. Então, para enviar uma tag com sucesso para um servidor, você terá que `git push origin` comando `git push origin` :
```
$ git push origin v4.0 
 Counting objects: 14, done. 
 Delta compression using up to 8 threads. 
 Compressing objects: 100% (16/16), done. 
 Writing objects: 100% (18/18), 3.15 KiB | 0 bytes/s, done. 
 Total 18 (delta 4), reused 0 (delta 0) 
 To git@github.com:jcash/gitmanual.git 
 * [new tag]         v4.0 -> v4.0 
 ``` 
 
 You can also use the ```--tags``` option to add multiple tags at once with the ```git push origin``` command: 
```

$ git push origin --tags Contando objetos: 1, pronto. Escrevendo objetos: 100% (1/1), 160 bytes | 0 bytes / s, pronto. Total 1 (delta 0), reutilizado 0 (delta 0) Para git@github.com: jcash / gitmanual.git

*   \[nova tag\] v4.0 -> v4.0
*   \[nova tag\] v4.1-lw -> v4.1-lw
```
## Checking out Tags 
 
 You can use ```git checkout``` to checkout to a tag like you would normally do. But you need to keep in mind that this would result a *detached HEAD* state. 
```

$ git checkout v0.0.3 Nota: confirmando 'v0.0.3'.

Você está no estado 'HEAD' desanexado. Você pode olhar em volta, fazer experimental alterações e cometer, e você pode descartar qualquer commits que você fizer neste Estado sem afetar quaisquer filiais, executando outro checkout.
```
## Deleting a Tag 
 
 You may find a situation were you want to delete a certain tag. There's a very useful command for this situations: 
```

$ git tag --delete v0.0.2 $ git tag v0.0.1 v0.0.3 v0.0.4 \`\` \`

### Mais Informações

*   [Git Pro - Noções básicas sobre tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
*   [Git Pro - Documentação](https://git-scm.com/docs/git-tag)
*   [Git HowTo](https://githowto.com/tagging_versions)
*   [Sugestão: tags](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html)
*   [Criando uma tag](https://www.drupal.org/node/1066342)

### Fontes

Documentação do Git: [tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)