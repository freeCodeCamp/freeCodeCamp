---
title: How to Make a Pull Request on Free Code Camp
localeTitle: Como fazer um pedido pull no Free Code Camp
---
# Solicitação de retirada de campo de código livre

**O que é um pedido pull?**

Um pedido pull (PR) é um método de envio de alterações propostas para o Free Code Camp Repo (ou qualquer Repo, para esse efeito). Você fará alterações nas cópias dos arquivos que compõem o Free Code Camp em uma bifurcação pessoal e, em seguida, solicitará que eles sejam aceitos pelo Free Code Camp apropriado.

## Preciso de ajuda?

O Free Code Camp Issue Mods e a equipe estão à disposição para ajudar com os problemas relacionados à Solicitação de Pull na nossa [Sala de Chat de Colaboradores de Ajuda.](https://gitter.im/FreeCodeCamp/Contributors)

## Métodos

Existem dois métodos para criar um campo de código Pull for Free:

1.  Editando arquivos através da interface do GitHub
2.  Editando arquivos em um clone local

## Importante: EDITAR SEMPRE EM UM RAMO

Tirar apenas uma coisa deste documento, deve ser este: nunca, nunca faça edições para o ramo de `staging` . SEMPRE faça uma nova filial ANTES de editar arquivos. Isto é crítico, porque se o seu PR não for aceito, sua cópia do `staging` ficará para sempre maculada e a única maneira de consertá-lo é excluir seu fork e re-fork.

## Editando via seu garfo local (recomendado)

Este e o metodo recomendado. Leia sobre [como configurar e manter uma instância local do campo de código livre](http://forum.freecodecamp.com/t/how-to-fork-and-maintain-a-local-instance-of-free-code-camp/19116) .

1.  Execute a etapa de manutenção da `staging` de rebasing
2.  Assegure-se de estar na ramificação `staging` usando o `git status` :

\`  
$ git status  
Na preparação de filiais  
Sua filial está atualizada com "origem / teste".

nada para cometer, diretório de trabalho limpo  
\`

1.  Se você não estiver no staging ou se o seu diretório de trabalho não estiver limpo, resolva os arquivos / commits pendentes e faça o checkout do staging de `git checkout staging`
2.  Crie um branch off de `staging` com git: `git checkout -B branch/name-here` Nota: A nomeação de ramificação é importante. Use um nome como `fix/short-fix-description` ou `feature/short-feature-description` Consulte as [diretrizes de contribuição](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) para mais detalhes.
3.  Edite seu (s) arquivo (s) localmente com o editor de sua escolha
4.  Verifique seu `git status` para ver arquivos não sincronizados.
5.  Adicione seus arquivos editados: `git add path/to/filename.ext` Você também pode fazer: `git add .` para adicionar todos os arquivos não sincronizados. Tome cuidado, porque você pode acidentalmente adicionar arquivos que não deseja adicionar. Revise seu `git status` primeiro.
6.  Confirme suas edições: `git commit -m "Brief Description of Commit"`
7.  [Esmagar seus commits](http://forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231) , se houver mais de um.
8.  Envie seus commits para o seu GitHub Fork: `git push -u origin branch/name-here`
9.  Ir para etapas comuns

## Edição através da interface do GitHub

**Nota: A** edição através da interface do GitHub não é recomendada, pois não é possível atualizar seu fork através da interface do GitHub sem excluir e recriar o fork.

1.  Criar um garfo do FCC Repo
2.  [Crie um ramo](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) dentro do seu garfo. Nota: A nomeação de ramos é importante. Use um nome como `fix/short-fix-description` ou `feature/short-feature-description` Consulte as [diretrizes de contribuição](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) para mais detalhes.
3.  Edite o arquivo e confirme as alterações.
4.  Continue para as Etapas Comuns.

## Etapas Comuns

1.  Depois que as edições forem confirmadas, você será solicitado a criar uma solicitação de recepção na página do Github do fork.
2.  Por padrão, todas as solicitações de recebimento devem ser contra o repositório principal da FCC, a divisão de `staging` .
3.  Faça um título claro para o seu PR, que indica sucintamente o que está sendo corrigido. Não adicione o número do problema no título. Exemplos: `Add Test Cases to Algorithm Drop It` `Correct typo in Challenge Size Your Images`
4.  No corpo do seu PR, inclua um resumo mais detalhado das alterações feitas e por quê.
5.  Indique se você testou em uma cópia local do site ou não.
6.  Se o seu RP for devido a um problema, você poderá [consultar e encerrar o problema](https://help.github.com/articles/closing-issues-via-commit-messages/) automaticamente adicionando uma palavra-chave como `Closes #xxxx` , em que `xxxx` é o número do problema.

## Próximos passos

### Se as alterações forem solicitadas

Não se preocupe, muitos PRs, especialmente os primeiros PRs, precisam ser corrigidos ou atualizados. Se você usou a interface do GitHub para criar seu PR, será necessário fechar seu PR, criar uma nova ramificação e enviá-la novamente. Isto é porque você não pode esmagar seus commits através da interface do GitHub.

Se você tiver uma cópia local do repositório, poderá fazer as alterações solicitadas e alterar sua confirmação com: `git commit --amend` Isso atualizará sua confirmação existente. Quando você o empurrar para o seu fork, você precisará fazer um push force para sobrescrever seu commit antigo: `git push --force`

Certifique-se de publicar na conversa de RP que você fez as alterações solicitadas.

### Se seu PR for aceito

Uma vez que seu PR é aceito, você pode excluir o ramo que você criou para enviá-lo. Isso mantém seu garfo de trabalho limpo. Você pode fazer isso pressionando um botão na interface PR do GitHub. Você pode excluir a cópia local da ramificação com: `git branch -D branch/to-delete-name`

### Se seu PR for rejeitado

Não se desespere! Você deve receber um feedback sólido dos Moderadores de Problemas sobre o motivo pelo qual ele foi rejeitado e o que é necessário. Por favor, continue contribuindo.