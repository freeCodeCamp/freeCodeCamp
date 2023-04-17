# Como abrir um Pull Request (PR)

Um pull request (PR) permite que você envie alterações do seu fork do GitHub para o repositório principal do freeCodeCamp.org. Depois de terminar de fazer alterações no código, você pode seguir essas diretrizes para abrir um PR.

Esperamos que nossos colaboradores estejam cientes do processo específico deste projeto. Seguindo as orientações religiosamente, você terá o respeito de outros mantenedores e poupará o tempo de todos.

Alguns exemplos disso são:

1. Não edite arquivos diretamente no GitHub – enquanto você puder, não é uma boa ideia.
2. Certifique-se de seguir a lista de verificação de PR e não apenas desmarcar as coisas; caso contrário, não levaremos você a sério.
3. Utilize a maneira correta de ligar issues na descrição do PR, atualizando o `XXXXXX`. Não adicione apenas números de issues em todo e qualquer lugar e que quiser.
4. Não faça menções com @ nem solicite as revisões de outra pessoa diversas vezes.

   Entendemos que você está animado para contribuir. Por mais que os mantenedores adorem a ideia de responder você, lembre-se de que eles são pessoas ocupadas que cuidam de centenas de solicitações como as suas. Seja paciente, alguém responderá você mais cedo ou mais tarde.

5. Não trabalhe diretamente na branch `main` - crie uma outra branch para as alterações em que está trabalhando.

> [!NOTE] Seu PR deve se destinar apenas a alterações no currículo em inglês. Veja [este guia](index.md#translations) para contribuir com traduções.

## Prepare um bom título para o PR

Recomendamos usar [título e mensagens convencionais](https://www.conventionalcommits.org/) para commits e pull request. A convenção tem o seguinte formato:

> `<type>([escopo(s) opcional(is)]): <description>`
> 
> Por exemplo:
> 
> `fix(learn): testes para o desafio de ciclo do...while`

Sempre que abrir um Pull Request (PR), você pode usar a referência abaixo para determinar o tipo, escopo (opcional) e a descrição.

**Tipo:**

| Tipo  | Quando selecionar                                                                      |
|:----- |:-------------------------------------------------------------------------------------- |
| fix   | Funcionalidade mudada ou atualizada/melhorada, testes, a explicação de uma lição, etc. |
| feat  | Somente se você estiver adicionando novas funcionalidades, testes, etc.                |
| chore | Mudanças não relacionadas ao código, testes ou explicação de uma lição.                |
| docs  | Mudanças no diretório `/docs` ou nas diretrizes de contribuição, etc.                  |

**Escopo:**

Você pode selecionar um escopo a partir [desta lista de etiquetas](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descrição:**

Escreva pouco (menos de 30 caracteres) e de modo simples. Você pode adicionar mais informações na caixa de descrição do PR e nos comentários.

Alguns exemplos de bons títulos de PRs seriam:

- `fix(a11y): contraste melhorado da barra de pesquisa`
- `feat: adicionar mais testes aos desafios de HTML e CSS`
- `fix(api,cliente): prevenir erros CORS no envio do formulário`
- `docs(i18n): correção dos links para relativos em vez de absolutos`

## Propondo um Pull Request

1. Uma vez que as edições tenham sido realizadas, será solicitado que você crie um pull request na página do GitHub do seu fork.

   <details>
   <summary>Ver captura de tela</summary>

   ![Imagem - Comparar e solicitar o pull request no GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

   </details>

2. Por padrão, todos os pull requests devem ser feitos no repositório principal do freeCodeCamp, branch `main`.

   Certifique-se de que seu Base Fork está definido como freeCodeCamp/freeCodeCamp ao criar um Pull Request.

   <details>
   <summary>Ver captura de tela</summary>

   ![Imagem - Comparando forks ao fazer um pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

   </details>

3. Envie o pull request do seu branch para o branch `main` do freeCodeCamp.

4. Inclua um resumo mais detalhado das alterações feitas e como suas alterações são úteis no corpo do PR.

   - Será apresentado um modelo de pull request. É uma checklist que você deve seguir antes de abrir o pull request.

   - Preencha os detalhes como quiser. Essas informações serão revisadas e os revisores decidirão se seu pull request será aceito ou não.

   - Se o PR tem como objetivo resolver uma issue GitHub existente, então, no final do corpo da descrição de seu PR, use a palavra-chave _Closes_ com o número da issue para [automaticamente fechá-la, se o PR for aceito e dado merge](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exemplo: `Closes #123` fechará a issue 123

5. Indique se você testou em uma cópia local do site ou não.

   - Isso é muito importante quando se está fazendo mudanças que não são apenas edições no conteúdo do texto como a documentação ou descrição de um desafio. Exemplos de mudanças que precisam ser testadas localmente incluem JavaScript, CSS ou HTML que podem mudar a funcionalidade ou aparência de uma página.

   - Se seu PR afeta o comportamento de uma página ele deve estar acompanhado pelo correspondente [teste de integração Cypress](how-to-add-cypress-tests.md).

## Comentários nos pull requests

> :tada: Parabéns por fazer um PR e muito obrigado(a) por contribuir.

Nossos moderadores vão dar uma olhada e deixar um comentário para você. Seja paciente com os outros moderadores e respeite o tempo deles. Todos os pull requests são revisados no tempo devido.

E como sempre, fique à vontade em perguntar na [categoria 'Contributors' (colaboradores) do fórum](https://forum.freecodecamp.org/c/contributors) ou [na sala de chat de colaboradores](https://discord.gg/PRyKn3Vbay).

> [!TIP] Se você vai contribuir com mais pull requests, recomendamos ler as diretrizes sobre [fazer mudanças e sincronizá-las](how-to-setup-freecodecamp-locally.md#making-changes-locally) para evitar o apagamento de seu fork.

## Conflitos em um pull request

Conflitos podem surgir porque muitos colaboradores trabalham no repositório, e as alterações podem afetar o seu PR, que está aguardando uma revisão e mesclagem.

Na maioria das vezes, você pode não precisar de um rebase, porque nós comprimimos todos os commits. No entanto, se for solicitada uma rebase, é isso que você deve fazer.

### Para funcionalidades e correções de erros comuns

Quando se está trabalhando em erros normais e funcionalidades no seu branch `main` de desenvolvimento, você pode fazer um simples ajuste:

1. Faça um rebase na sua cópia local:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Resolva quaisquer conflitos e adicione / edite commits

   ```console
   # isso
   git add .
   git commit -m "chore: resolve conflitos"

   # ou
   git add .
   git commit --amend --no-edit
   ```

3. Faça um push das suas alterações para o PR

   ```console
   git push --force origin <pr-branch>
   ```

### Para o próximo currículo e próximas funcionalidades

Quando você estiver trabalhando em funcionalidades para nossos próximos branches `next-*` de currículo, você tem que fazer um cherry pick:

1. Certifique-se de que seu upstream esteja sincronizado com seu local:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Faça um backup

   a. Exclua seu branch local depois de ter feito um backup (se você ainda o tem localmente):

   ```console
   git checkout <pr-branch-nome>

   # exemplo:
   # git checkout feat/add-numpy-video-question

   git checkout -b <backup-branch-nome>

   # exemplo:
   #  git checkout -b backup-feat/add-numpy-video-question

   git branch -D <pr-branch-nome>
   ```

   b. Ou apenas faça um backup do seu branch de pr (se você não o tem localmente):

   ```console
   git checkout -b <backup-branch-nome> origin/<pr-branch-nome>

   # exemplo:
   #  git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
   ```

3. Comece do zero:

   ```console
   git checkout -b <pr-branch-nome> next-python-projects
   git cherry-pick <commit-hash>
   ```

4. Resolva os conflitos, faça a limpeza, instale as dependências e execute os testes

   ```console
   pnpm run clean

   pnpm install
   FCC_SUPERBLOCK='<superblock-name>' pnpm run test:curriculum 

   # exemplo:

   # FCC_SUPERBLOCK='python-for-everybody' pnpm run test:curriculum

   ```

5. Se tudo estiver correto, faça um push ao PR

   ```console
   git push --force origin <pr-branch-nome>
   ```
