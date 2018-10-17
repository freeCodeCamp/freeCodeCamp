---
title: How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux
localeTitle: Como bifurcar e manter uma instância local do Free Code Camp no Mac e no Linux
---
Se você planeja escrever uma solicitação de pull para o Free Code Camp , você quase certamente precisará de uma cópia local do site. Ter uma cópia local do site lhe dará capacidade adicional com o Git que não está disponível através da interface do navegador do GitHub, incluindo a atualização de suas confirmações de fork e rebasing / squashing.

Este guia abordará como bifurcar o projeto da FCC, clonar uma cópia local e como manter seu fork. Todos os comandos do Git serão dados para a linha de comando, o que nós recomendamos fortemente que você use, mas a maioria dos comandos também pode ser executada em um ambiente gráfico do Git.

Se você estiver usando o Windows, [use este guia](https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366) .

## Preciso de ajuda?

O Free Code Camp Issue Mods e a equipe estão à disposição para ajudar com os problemas relacionados à Solicitação de Pull em nossa [sala de bate-papo de Colaboradores de Ajuda.](https://gitter.im/FreeCodeCamp/HelpContributors)

## Configurando seu sistema

1.  Instale o [Git](https://git-scm.com/) ou seu cliente favorito do Git
2.  (Opcional) [Configure uma chave SSH](https://help.github.com/articles/generating-ssh-keys/) para o Github.  
    Usar o SSH pode acelerar bastante suas interações com o GitHub, já que você não será solicitado a fornecer sua senha.
3.  Crie um diretório de projetos pai em seu sistema. Para os fins deste documento, vamos assumir que é `/mean/`

## Acampamento de código livre de bifurcação

1.  Navegue até o repositório Free Code Camp de nível superior: `https://github.com/FreeCodeCamp/freecodecamp`
2.  Clique no botão "Fork" no canto superior direito da interface. [Mais detalhes aqui](https://help.github.com/articles/fork-a-repo/) .
3.  Depois que o projeto for bifurcado, você será levado à sua cópia do `username/freecodecamp` da FCC em `username/freecodecamp`

## Clonando seu garfo

1.  De sua bifurcação da FCC, copie o URL clone HTTPS ou SSH (se você instalou as chaves SSH)
2.  Abra um Bash Shell / Linha de Comando / Terminal no seu diretório de projetos (IE: `/mean/` )
3.  Clone seu garfo de git:

`git clone https://github.com/yourUserName/FreeCodeCamp.git`

Isso fará o download de todo o repositório da FCC para o diretório de projetos.

`bash $ git clone https://github.com/yourUserName/FreeCodeCamp.git Cloning into 'FreeCodeCamp'... remote: Counting objects: 37294, done. remote: Compressing objects: 100% (13/13), done. remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281 Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done. Resolving deltas: 100% (26053/26053), done. Checking connectivity... done. Checking out files: 100% (573/573), done.`

### Configurando seu Upstream

1.  Altere o diretório para o novo diretório `FreeCodeCamp`
2.  Adicione um controle remoto ao repositório oficial da FCC:

`git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git`

Parabéns, agora você tem uma cópia local do repositório da FCC!

## Mantendo seu garfo

Agora que você tem uma cópia do seu fork, há um trabalho que você precisará fazer para mantê-lo atualizado.

## Rebasing de Upstream

Faça isso toda vez antes de criar uma ramificação para um PR:

1.  Verifique se você está no ramo de `staging`

`bash $ git status On branch staging Your branch is up-to-date with 'origin/staging'.`

1.  Se você não estiver no staging, resolva quaisquer arquivos / commits pendentes e faça o checkout staging  
    `git checkout staging`
2.  Faça um pull com rebase contra o `upstream` :

`git pull --rebase upstream staging`

Isto irá puxar para baixo todas as mudanças na versão oficial sem fazer um commit adicional em seu repositório local.  
4\. (Opcional) Forçar o push de sua atualização para o seu garfo do GitHub

`git push origin staging --force`

Isto irá sobrescrever o ramo de teste no seu garfo.

`bash $ git push origin staging --force Counting objects: 99, done. Delta compression using up to 12 threads. Compressing objects: 100% (38/38), done. Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done. Total 38 (delta 25), reused 0 (delta 0) To git@github.com:yourUserName/FreeCodeCamp.git f7a525c..8a2271d staging -> staging`