# Como trabalhar em projetos práticos

A pasta `tools/challenge-helper-scripts` contém ferramentas para ajudar a facilitar a criação e a manutenção dos projetos baseados no currículo do freeCodeCamp.

## Criando um novo projeto

Execute `npm run create-project`. Esse comando abrirá uma interface de linha de comando que vai guiar você através do processo. Uma vez que tiver terminado, deverá aparecer um novo desafio no currículo inglês que você pode usar para começar o projeto. Por exemplo, se você tiver criado um projeto chamado `test-project` na certificação de Design responsivo para a web, ele estará em `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se você quer criar novos passos, as ferramentas a seguir vão simplificar o processo.

## create-next-step (criar próximo passo)

A one-off script that will automatically add the next step based on the last step numbered as `step-xxx.md` where `xxx` represents the 3-digit step number of the last step. O código inicial de desafio usará o código inicial de desafio da etapa anterior com os marcadores de região editáveis ​​(ERMs) removidos.

**Observação:** esse script também executa  [reorder-steps](#reorder-steps).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-next-step
```

## create-empty-steps (criar passos vazios)

Um script único que adiciona automaticamente um número especificado de passos começando a partir de um número específico. O código seed de todos os passos criados estarão vazios.

**Observação:** esse script também executa  [reorder-steps](#reorder-steps).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-empty-steps start=X num=Y # onde X é o número do passo onde deve iniciar e Y é o número de passos que deverão ser criados.
```

## create-step-between

Um único script que automaticamente adiciona passos entre dois passos consecutivos. O código inicial do desafio usará o código inicial do desafio da etapa inicial existente com os marcadores de região editáveis ​​(ERMs) removidos.

**Observação:** esse script também executa  [reorder-steps](#reorder-steps).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-step-between start=X # onde X é o número do passo para começar
```

## delete-step

Um único script que deleta um passo existente e reordena os passos que restaram na pasta do projeto e também atualiza a propriedade do array `challengeOrder` no `meta.json` do projeto com a nova ordem dos passos.

### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run delete-step num=x # onde x é o número do passo a ser deletado.
```

## reorder-steps

Um script único que automaticamente reordena os aquivos de passos em arquivos markdown do projeto baseado no nome dos arquivos. Também atualiza a propriedade do array `challengeOrder`  no `meta.json` do projeto com a nova ordem dos passos.

### Exemplo de trabalho

Digamos que você começa com a estrutura de projeto a seguir:

```bash
step-001.md
step-002.md
step-003.md
step-004.md
step-005.md
step-006.md
```

At some point you decide you need to delete `step-002.md`, because that step is no longer needed. Also, you decide to break down `step-004.md` into three steps instead of just one.

To accomplish this restructure, you would need to delete `step-002.md` and then add a `step-004a.md` and a `step-004b.md`. A nova estrutura da pasta deve ficar assim:

```bash
step-001.md
step-003.md
step-004.md
step-004a.md
step-004b.md
step-005.md
step-006.md
```

You now need the file names to be `step-001.md` through `step-007.md`, because you removed one but gained two more for a net difference of one file. Além disso, o frontmatter de cada arquivo abaixo de um passo adicionado ou excluído precisará ser modificado, onde o valor chave do `title` tem que ser igual ao novo número do passo. For example, after renaming `step-3.md` to `step-2.md`, you would need to change `step-2.md`'s title from `Step 03` to `Step 02`.

Veja abaixo as mudanças necessárias na pasta do projeto:

```bash
step-001.md
step-003.md renamed to step-002.md and title changes to "Step 2"
step-004.md renames to step-003.md and title changes to "Step 3"
step-004a.md renames to step-004.md and title changes to "Step 4"
step-004b.md renames to step-005.md and title changes to "Step 5"
step-005.md renames to step-006.md and title changes to "Step 6"
step-006.md renames to step-007.md and title changes to "Step 7"
```

Junto com as mudanças acima, a chave `challengeOrder` no arquivo `meta.json` do projeto precisará refletir a nova ordem dos passos. Isso é necessário porque cada etapa abaixo de uma exclusão de etapa e/ou adição de etapa altera o `title` associado a cada um dos `id` do desafio da etapa afetada.

### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run reorder-steps
```
