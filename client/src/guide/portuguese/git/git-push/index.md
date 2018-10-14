---
title: Git Push
localeTitle: Git Push
---
## Git Push

O comando `git push` permite enviar (ou _enviar_ ) os commits de sua ramificação local em seu repositório Git local para o repositório remoto.

Para poder enviar para o seu repositório remoto, você deve garantir que **todas as suas alterações no repositório local sejam confirmadas** .

A sintaxe deste comando é a seguinte:

```bash
git push <repo name> <branch name> 
```

Existem várias opções diferentes que você pode passar com o comando, você pode aprender mais sobre elas na [documentação](https://git-scm.com/docs/git-push#_options_a_id_options_a) do [Git](https://git-scm.com/docs/git-push#_options_a_id_options_a) ou executar o comando `git push --help` .

### Empurrar para um Repositório e Ramificação Remota Específicos

Para enviar o código, você deve primeiro clonar um repositório em sua máquina local.

```bash
# Once a repo is cloned, you'll be working inside of the default branch (the default is `master`) 
 git clone https://github.com/<git-user>/<repo-name> && cd <repo-name> 
 # make changes and stage your files (repeat the `git add` command for each file, or use `git add .` to stage all) 
 git add <filename> 
 # now commit your code 
 git commit -m "added some changes to my repo!" 
 # push changes in `master` branch to github 
 git push origin master 
```

Para saber mais sobre filiais, confira os links abaixo:

*   [git checkout](https://github.com/renington/guides/blob/master/src/pages/git/git-checkout/index.md)
*   [git branch](https://github.com/renington/guides/blob/master/src/pages/git/git-branch/index.md)

### Empurrar para um repositório remoto específico e todos os ramos nele

Se você quiser enviar todas as alterações para o repositório remoto e todas as ramificações, você poderá usar:

```bash
git push --all <REMOTE-NAME> 
```

no qual:

*   `--all` é o sinalizador que sinaliza que você deseja enviar todas as ramificações para o repositório remoto
*   `REMOTE-NAME` é o nome do repositório remoto que você deseja enviar para

### Empurrar para um ramo específico com o parâmetro force

Se você deseja ignorar as mudanças locais feitas no repositório Git no Github (que a maioria dos desenvolvedores faz para um hot fix no servidor de desenvolvimento), então você pode usar o comando --force para empurrar, ignorando essas alterações.

```bash
git push --force <REMOTE-NAME> <BRANCH-NAME> 
```

no qual:

*   `REMOTE-NAME` é o nome do repositório remoto para o qual você deseja enviar as alterações para
*   `BRANCH-NAME` é o nome da ramificação remota para a qual você deseja enviar suas alterações

### Empurre ignorando o gancho de pré-impulso do Git

Por padrão, o `git push` acionará a opção `--verify` . Isso significa que o git executará qualquer script pré-push do lado do cliente que possa ter sido configurado. Se os scripts pré-push falharem, o git push também será interrompido. (Os ganchos de pré-envio são bons para fazer coisas como, verificar se confirmar mensagens confirmam os padrões da empresa, executar testes de unidade, etc.…). Ocasionalmente, você pode querer ignorar esse comportamento padrão, por exemplo, no cenário em que deseja transferir suas alterações para um ramo de recursos para outro colaborador, mas as alterações de trabalho em andamento estão interrompendo os testes de unidade. Para ignorar o gancho, simplesmente insira seu comando push e adicione a flag `--no-verify`

```bash
git push --no-verify 
```

### Mais Informações:

*   [Documentação do Git - push](https://git-scm.com/docs/git-push)
*   [Ganchos Git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)