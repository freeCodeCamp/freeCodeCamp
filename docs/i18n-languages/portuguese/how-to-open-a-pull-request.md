<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Como iniciar uma nova Pull Request

## Como elaborar um bom título para a sua Pull Request:

Ao iniciar uma Pull Request(PR), utilize o seguinte escopo para decidir como intitular a sua PR no seguinte formato:
`fix/feat/chore/refactor/docs/perf (escopo): Título da PR`

Um exemplo é `fix(learn): Correção dos testes para o 'do...while loop challenge'`.

| Escopo | Documentação |
|---|---|
| `learn`,`curriculum` | Para Pull Requests que façam alterações nos desafios do curriculum. |
| `client` | Para Pull Requests que façam alterações na lógica da plataforma para o usuário ou na interface do usuário |
| `guide` | Para Pull Requests que façam alterações no guia (guide). |
| `docs` | Para Pull Requests que façam alterações na documentação do projeto. |

## Propondo uma Pull Request (PR)

1. Assim que as alterações estiverem incluídas em um commit, você verá um aviso para criar uma pull request na página do GitHub da sua fork.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Por padrão, todas pull requests devem ser confrontadas com o repositório principal do freeCodeCamp, a branch `master`.

    Assegure-se de que a base da sua fork está apontada para freeCodeCamp/freeCodeCamp quando requisitar a Pull Request.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Submeta a pull request da sua branch para a branch `master` do freeCodeCamp.

4. Inclua no corpo da sua PR um sumário detalhado das mudanças feitas por você e os seus porquês.

    - Você será direcionado para um template de pull request. Essa é uma checklist que você deve seguir antes de abrir a pull request.

    - Preencha os detalhes de acordo com como eles se adequam a você. Essas informações serão revisadas e decidirão se a sua pull request será aceita.

    - Se a PR foi pensada para corrigir um bug/issue existente, ao final da 
      descrição da sua PR adicione a palavra-chave `closes` e #xxxx (onde xxxx
      é o número da respectiva issue). Exemplo: `closes #1337`. Isso diz ao GitHub para
      automaticamente fechar a issue existente caso a PR seja aceita e colocada em merge.

5. Indique se você testou em uma cópia local do site ou não.

    Isso é muito importante quando você está fazendo mudanças que não são apenas edições simples no conteúdo de texto, como uma correção de verbos em um artigo guia. Exemplos de mudanças que necessitam de teste local incluem JavaScript, CSS, ou HTML que poderiam mudar a funcionalidade ou o layout de uma página.
