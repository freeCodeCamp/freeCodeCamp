# Como abrir um Pull Request (PR)

Um pull request permite que você envie alterações do seu fork no GitHub para o repositório principal do freeCodeCamp.org. Uma vez que você tenha feito alterações no código, ou desafios de codificação, você deve seguir essas diretrizes para enviar uma PR.

## Prepare um bom título de PR

Recomendamos usar [título convencional e mensagens](https://www.conventionalcommits.org/) para commits e pull request. A convenção tem o seguinte formato:

> `<type>([escopo(s) opcional(s)]): <description>`
> 
> Por exemplo:
> 
> `fix(learn): testes para o executante... enquanto o loop desafio`

Ao abrir um Pull Request(PR), você pode usar o abaixo para determinar o tipo, o escopo (opcional) e a descrição.

**Tipo:**

| tipo       | Quando selecionar                                                                  |
|:---------- |:---------------------------------------------------------------------------------- |
| correção   | Funcionalidade alterada/atualizada/melhorada, testes, verbiagem de uma lição, etc. |
| feito      | Somente se você estiver adicionando novas funcionalidades, testes, etc.            |
| chore      | Mudanças que não estão relacionadas ao código, testes ou vérsia de uma lição.      |
| documentos | Mudanças no diretório `/docs` ou nas diretrizes de contribuição, etc.              |

**Escopo**

Você pode selecionar um escopo de [esta lista de etiquetas](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descrição:**

Mantenha-o curto (menos de 30 caracteres) e simples, você pode adicionar mais informações na caixa de descrição de PR e comentários.

Alguns exemplos de bons títulos de PRs seriam:

- `fix(a11y): contraste melhorado na barra de pesquisa`
- `feat: adicione mais testes aos desafios html e css`
- `fix(api,cliente): previnir erros CORS na submissão do formulário`
- `docs(i18n): Tradução para Chinês da configuração local`

## Propondo um Pull Request

1. Uma vez que as edições tenham sido realizadas, será solicitado que você crie um pull request na página do GitHub do seu fork.

   ![Imagem - Comparar o prompt de pull request no GitHub](./images/github/compare-pull-request-prompt.png)

2. Por padrão, todas as pull requests devem ser contra o repositório principal freeCodeCamp, o branch `master`.

   Certifique-se de que seu Fork da Base está definido como freeCodeCamp/freeCodeCamp ao levantar um Pull Request.

   ![Imagem - Comparando bifurcações ao fazer uma solicitação de pull](./images/github/comparing-forks-for-pull-request.png)

3. Envie o pull request do seu branch para o branch `master` do freeCodeCamp.

4. No corpo de seu PR há um resumo mais detalhado das alterações feitas e por quê.

   - Você será apresentado com um modelo de pull request. Esta é uma checklist que você deveria ter seguido antes de abrir o pull request.

   - Preencha os detalhes conforme quiser Essas informações serão revisadas e os revisores decidirão se sua pull request é ou não aceita.

   - Se o PR tem como objetivo resolver um problema existente no GitHub, então, no final do corpo da descrição de seu PR, usar a palavra-chave _Fecha_ com o número de issue para [automaticamente fechar essa questão, se o PR for aceito e combinado](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exemplo: `Fecha a issue #123` fechará a issue 123

5. Indique se você testou uma cópia local do site ou não.

   Isso é muito importante quando se fazem alterações que não são apenas edições de conteúdo de texto, como documentação ou uma descrição de desafio. Exemplos de alterações que precisam de testes locais incluem JavaScript, CSS ou HTML que podem alterar a funcionalidade ou o layout de uma página.

## Feedback sobre pull requests

> Parabéns! :tada: sobre como criar um PR e muito obrigado por dedicar seu tempo a contribuir.

Nossos moderadores vão dar uma olhada e deixar sua opinião para você. Por favor, seja paciente com os outros moderadores e respeite o seu tempo. Todos os pull requests são revisados a seu tempo.

Se você precisar de ajuda por favor discuta na [sala de contribuidores](https://gitter.im/FreeCodeCamp/Contributors), estamos mais do que felizes em ajudá-lo.

> [!TIP] Se você quer contribuir com mais pull requests, nós recomendamos que você leia as alterações [e sincronize as](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) diretrizes para evitar ter que excluir o seu fork.

## Conflitos em um pull request

Conflitos podem surgir porque muitos colaboradores trabalham no repositório, e as alterações podem afetar o seu PR, que está aguardando uma revisão e mesclagem.

Na maioria das vezes você pode não precisar de uma base de sustentação, porque nós esmagamos todos os compromissos, no entanto, se for solicitada uma rebase, é isso que você deve fazer.

### Para correções de erros e funcionalidades de costume

Quando você está trabalhando em bugs comuns e recursos em nosso branch de desenvolvimento `master`, você é capaz de fazer uma base simples:

1. Rebasear sua cópia local:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. Resolver quaisquer conflitos e adicionar / editar commits

   ```console
   # Ou
   git add .
   git commit -m "chore: resolver conflitos"

   # ou
   git add .
   git commit --change --no-edit
   ```

3. Reforce suas alterações para o PR

   ```console
   git push --force origin <pr-branch>
   ```

### Para o próximo currículo e recursos

Quando você está trabalhando em recursos para nossos próximos currículos `next-*` ramificações, você tem uma escolha de cereja:

1. Certifique-se de que seu upstream esteja sincronizado com seu local:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Fazer backup

   a. Exclua seu ramo local depois de ter feito um backup (se você ainda o tem localmente):

      ```console
      git checkout <pr-branch-name>

      # exemplo:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # exemplo:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   marn Ou apenas um backup do seu branch pr (se você não o tem localmente):

      ```console
      git checkout -b <backup-branch-name> original/<pr-branch-name>

      # exemplo:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Comece com uma página aberta:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Resolver quaisquer conflitos e limpar, instalar testes

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # exemplo:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

6. Se tudo estiver bem empurrado de volta ao PR

   ```console
   git push --force origin <pr-branch-name>
   ```
