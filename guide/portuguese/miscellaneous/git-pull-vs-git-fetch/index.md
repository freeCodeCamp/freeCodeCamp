---
title: Git Pull Vs Git Fetch
localeTitle: Git Pull Vs Git Fetch
---
Esses dois comandos são usados ​​regularmente pelos usuários do git. Vamos ver a diferença entre os dois comandos.

Por uma questão de contexto, vale a pena lembrar que provavelmente estamos trabalhando em um repo clone. O que é um clone? simplesmente uma duplicata de outro repositório. É basicamente obter sua própria cópia do código-fonte de outra pessoa.

Dito isso, para manter seu clone atualizado com quaisquer alterações que possam ter sido aplicadas ao original, você precisará trazê-las ao seu clone. É onde o `fetch` e `pull` entram. `git fetch` é o comando que diz ao seu git local para recuperar as últimas informações de meta-dados do original (mas não faz nenhuma transferência de arquivos. É mais como verificar se há algum alterações disponíveis). `git pull` por outro lado, faz isso E traz (copia) essas mudanças do repositório remoto.

Por exemplo
```
git pull origin ankur bugfix 
```

A ideia é ter em mente que geralmente há pelo menos três cópias de um projeto em sua estação de trabalho. Uma cópia é seu próprio repositório com seu próprio histórico de commit (o já salvo, por assim dizer). A segunda cópia é a sua cópia de trabalho, onde você está editando e construindo (ainda não está comprometido com o seu repo). A terceira cópia é a sua cópia "em cache" local de um repositório remoto (provavelmente o original de onde você clonou o seu). Você pode usar o `git fetch` para saber as alterações feitas no repositório / repositório remoto desde o último pull. Isso é útil para permitir a verificação antes de executar um pull real, o que poderia alterar os arquivos em sua ramificação atual e na cópia de trabalho (e possivelmente perder suas alterações, etc.).
```
git fetch 
 git diff ...origin 

```