# Como trabalhar em projetos práticos

A pasta `tools/challenge-helper-scripts` contém ferramentas para ajudar a facilitar a criação e a manutenção dos projetos baseados no currículo do freeCodeCamp.

## Criando um novo projeto

Execute `npm run create-project`. Esse comando abrirá uma interface de linha de comando que vai guiar você através do processo. Uma vez que tiver terminado, deverá aparecer um novo desafio no currículo inglês que você pode usar para começar o projeto. Por exemplo, se você tiver criado um projeto chamado `test-project` na certificação de Design responsivo para a web, ele estará em `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se você quer criar novos passos, as ferramentas a seguir vão simplificar o processo.

## create-next-step (criar próximo passo)

A one-off script that will automatically add the next step based on the last step in the project. The challenge seed code will use the previous step's challenge seed code.

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-next-step
```

## create-empty-steps (criar passos vazios)

A one-off script that automatically adds a specified number of steps. The challenge seed code for all steps created will be empty.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-empty-steps X # where X is the number of steps to create.
```

## insert-step

A one-off script that automatically adds a new step at a specified position, incrementing all subsequent steps (both their titles and in their meta.json). The challenge seed code will use the previous step's challenge seed code with the editable region markers (ERMs) removed.

**Note:** This script also runs [update-step-titles](#update-step-titles).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run insert-step X # where X is the position to insert the new step.
```

## delete-step

A one-off script that deletes an existing step, decrementing all subsequent steps (both their titles and in their meta.json)

**Note:** This script also runs [update-step-titles](#update-step-titles).

### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run delete-step X # where X is the step number to be deleted.
```

## update-step-titles

A one-off script that automatically updates the frontmatter in a project's markdown files so that they are consistent with the project's meta.json. It ensures that each step's title (and dashedName) match the meta's challengeOrder.

### How to run script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run update-step-titles
```
