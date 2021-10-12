Esta página descreve como contribuir para os tutoriais e projetos do freeCodeCamp que são concluídos usando a extensão CodeRoad do VS Code.

## Como funcionam os tutoriais

Os tutoriais do freeCodeCamp que usam o CodeRoad têm seu próprio repositório na organização do GitHub do freeCodeCamp. Todos eles começam com `learn-`. Por exemplo, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`.

Cada repositório de tutorial tem um branch `main` e um branch de "versão", como `v1.0.0`, por exemplo.

Os dois arquivos principais do branch `main` são `TUTORIAL.md` e `coderoad.yaml`. `TUTORIAL.md` contém todas as instruções, dicas, títulos e outros detalhes do tutorial. `coderoad.yaml` contém as instruções para o CodeRoad, como os comandos a serem executados e quando fazê-lo, que arquivos devem ser observados para ver se há mudanças e qual branch de versão deve ser usado para as etapas.

O branch de "versão" contém os commits que serão carregados em cada etapa do tutorial. As mensagens de commit desse branch precisam ser específicas. O primeiro commit precisa de `INIT` em sua mensagem e contém todos os arquivos a serem carregados antes da primeira lição.

Mensagens de commits posteriores devem corresponder ao número da etapa em `TUTORIAL.md` do branch `main`. Por exemplo, o commit com a mensagem `10.1` será carregado quando um usuário passar para a etapa `10.1`.

Para fazer mudanças nos commits de um branch de versão, você precisa fazer o rebase e editar os commits que deseja alterar. Isso reescreverá o histórico do Git, por isso não podemos aceitar PRs (pull requests) para esses tipos de branch. Assim que um branch de versão vai para o repositório do freeCodeCamp, ele jamais deve ser alterado.

> [!WARNING]
> 
> Nunca faça ou envie mudanças para um branch de versão que estiver em um dos repositórios do freeCodeCamp. Sempre crie um novo.

## Como contribuir

### Pré-requisitos

Instale as [ferramentas da CLI do CodeRoad](https://www.npmjs.com/package/@coderoad/cli) com `npm install -g @coderoad/cli`.

Houve alguns problemas com a última versão. Se `coderoad --version` não funcionar após a instalação, faça um downgrade para a versão `0.7.0` com `npm install -g @coderoad/cli@0.7.0`.

### Trabalhando no branch `main`

Este conjunto de instruções é para PRs (pull requests) que façam apenas pequenas mudanças no branch `main` para **lições já existentes**. Isso consiste basicamente em erros de digitação, gramática, dicas e mudanças ou reparos nas instruções do arquivo `TUTORIAL.md`.

Para todo o resto, incluindo adicionar e excluir lições, siga as [instruções de Trabalhando em um branch de versão](#working-on-version-branch). Você não precisará criar um novo branch de versão para isso. Pode criar um PR seguindo as instruções abaixo.

> [!NOTE]
> 
> Essas mudanças usarão o branch de versão existente. Se elas forem substanciais, aproveite para adicioná-las ao `CHANGELOG.md`. Na maioria das vezes, uma boa mensagem de commit deverá ser o suficiente.

Você nunca precisará modificar o arquivo `tutorial.json` diretamente. Ele será criado pelas ferramentas da CLI.

Se estiver fazendo somente mudanças pequenas, como corrigir um erro de digitação ou gramatical, não é necessário testar suas mudanças.

Siga essas instruções para fazer um PR, tendo em conta que as instruções geralmente usam as lições ao redor delas para obter contexto:

- Crie uma cópia do branch de versão mais recente com `git branch vX.X.X upstream/vX.X.X`. Não é necessário fazer check out nesse branch. Ele só precisa existir.
- Crie um novo branch a partir do `main` e faça check out nele.
- Faça e **dê um commit** em suas mudanças. Lembrete: você não precisa fazer alterações no arquivo `tutorial.json`. Provavelmente, você só precisará modificar o `TUTORIAL.md`.
- Execute `coderoad build` para recriar o arquivo `tutorial.json`.
- Faça o commit das mudanças, com `update json` como mensagem.
- Faça um pull request.

### Testando as mudanças no branch `main`

Se você quer testar suas alterações na `main` depois de usar as instruções acima, siga essas:

- Siga as instruções no [repositório rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha) para rodar um contêiner
- Comece o tutorial usando o arquivo `tutorial.json` no novo branch

### Revisando PRs para `main`

Se estiver revisando um PR que tem apenas mudanças no `main` relacionadas à problemas de instrução ou gramaticais como descrito acima, as mudanças em `TUTORIAL.md` devem corresponder às mudanças em `tutorial.json`.

O arquivo `tutorial.json` não deverá conter alterações para fazer o commit de hashes ou ids de passos/níveis. Comandos de inicialização ou de nível, ou prováveis observadores de arquivo não devem ser alterados. Há exceções caso exista algum problema com um  passo, mas eles devem ser tratados com mais atenção.

Também tenha em mente  que instruções geralmente usam as lições ao seu redor para contextualizar, então garanta que elas façam sentido.

### Trabalhando no branch de versão

> [!WARNING]
> 
> Lembrete: Nunca faça ou envie mudanças para um branch de versão que esteja em um dos repositórios do freeCodeCamp. Sempre crie um novo

Não existe um jeito fácil de ver exatamente o que mudou entre branches de versão, pois o histórico do Git será reescrito. Aceitar novos branches de versão para usar precisará ser feito com uma consideração cautelosa e testando.

Essas instruções são para mudar qualquer coisa em um branch de versão, como testes, texto de teste, resetar arquivos, adicionar a remover passos, etc.

Siga as próximas instruções para criar uma nova versão:

- Vá para o **último** branch de versão com `git checkout -b vX.X.X upstream/vX.X.X`
- Crie um novo branch fora daquele, aumentando a versão, com `git checkout -b vX.X.Y`
- Efetue suas alterações para o branch de versão. Confira mais informações na [Documentação CodeRoad](https://coderoad.github.io/docs/edit-tutorial) para saber como trabralhar com tutoriais
- Envie o novo branch para seu fork com `git push -u origin vX.X.Y`
- Vá para o branch `main`
- Crie um novo branch fora do `main`. por exemplo, `feat/version-X.X.Y`
- Mude a `uri` em `coderoad.yaml` para o seu fork do repositório. Assim, você e revisadores podem testá-lo antes de enviá-lo para o repositório do freeCodeCamp. Mude a versão para o novo branch em dois lugares naquele arquivo. Adicione suas mudanças para a nova versão no arquivo `CHANGELOG.md`. Faça qualquer outras alterações que você precise.
- Commit suas alterações com a mensagem `feat: release version X.X.Y - <descrição opcional>`
- Rode `coderoad build` para criar um novo arquivo `tutorial.json`
- Adicione e faça o commit do arquivo
- Envie as mudanças para o seu fork
- Teste suas alterações as [instruções para teste abaixo](#testing-changes-to-a-version-branch). Faça qualquer mudança adicional e faça commit delas como você fez anteriormente, ou, se você estiver satisfeito(a), siga o resto das instruções
- Faça um PR para a `main` usando seu novo branch `feat/version-X.X.Y`. Dê o título de `version X.X.Y ready for review`. Não acontecerá o merge disso, é apenas para quem for revisar saiba que existe uma nova versão pronta
- Após isso, suas mudanças serão revisadas

### Testando alterações em um branch de versão

- Siga as instruções no [repositório rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha) para rodar um contêiner
- Comece o tutorial usando o arquivo `tutorial.json` em qualquer fork onde as alterações estejam presentes. Tenha certeza de usar o arquivo no `feat: version-X.X.Y` branch e não no  `main` branch

### Enviando uma nova versão

Antes de enviar uma nova versão, veja o novo branch `feat/version-vX.X.Y` (acontecerá o merge para a `main`) no fork do usuário. Tenha certeza que há adições no arquivo `CHANGELOG.md` que incluem as novas alterações, e a versão em dois lugares do arquivo `coderoad.yaml` correspondem com o novo branch de versão.

Se você tiver acesso de escrita no repositório do freeCodeCamp, verificou os arquivos `CHANGELOG` e `coderoad.yaml`, testou as mudanças usando as instruções acima, e quer enviar uma nova versão de um tutorial:

> [!WARNING]
> 
> Lembrete: Nunca faça ou envie mudanças para um branch de versão que estiver em um dos repositórios do freeCodeCamp. Sempre crie um novo

- Se você não tiver um branch remoto onde existem novas alterações, crie um para o fork do usuário com `git remote add <users_fork>`
- Exclua qualquer branches **locais** que tenham o mesmo nome do novo branch. Parecidos com nomes como `vX.X.Y` ou `feat/version-X.X.Y`
- Vá para o novo branch de versão com `git checkout -b vX.X.Y <remote>/vX.X.Y`
- Envie o novo branch de versão para o repositório do freeCodeCamp com `git push -u upstream/vX.X.Y`. Você precisa enviar o novo branch antes de atualizar a `main` com o novo arquivo `tutorial.json`
- Vá para os branches dos usuários em que ocorrerá o merge na `main` com `git checkout -b feat/version-X.X.Y <remote>/feat/version-X.X.Y`
- Mude a `uri` em `coderoad.yaml` para o seu fork do repositório
- Adicione e faça o commit do arquivo com as mudanças
- Rode `coderoad build` para criar um novo arquivo `tutorial.json`
- Adicione e faça o commit do arquivo
- Envie o novo branch para seu fork com `git push -u origin vX.X.Y`
- Faça um PR para o `main` no repositório do freeCodeCamp
- Se você estiver satisfeito(a), faça o merge ou deixe-o e peça que alguém revise
- Depois que for dado o merge do PR, abra o tutorial seguindo as instruções no [repositório rdb-alpha](https://github.com/freeCodeCamp/rdb-alpha) para ter certeza que está carregando corretamente e que você pode passar por alguns passos
- Por fim, se existem PRs para esta versão, feche-os

### Como reverter para a versão anterior

- Crie um novo branch fora do último `main` com `git checkout -b revert/to-version-X.X.X`
- Reverta todos os commits desse branch a partir do commit da versão depois da que você quer reverter. Por exemplo, você deve ter commits que parecem com isso:

```
fix: typo
release: version 1.0.1
fix: typo
release: version 1.0.0
```

Se você quiser reverter para a v1.0.0, reverta todos os commits a partir de `release: version 1.0.1`

- Crie um PR. Dê o título de `revert: to version X.X.X`
