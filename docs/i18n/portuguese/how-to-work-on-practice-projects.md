# Como trabalhar em projetos práticos

A pasta `tools/challenge-helper-scripts` contém ferramentas para ajudar a facilitar a criação e a manutenção dos projetos baseados no currículo do freeCodeCamp.

## Criando um novo projeto

Execute `npm run create-project`. Esse comando abrirá uma interface de linha de comando que vai guiar você através do processo. Uma vez que tiver terminado, deverá aparecer um novo desafio no currículo inglês que você pode usar para começar o projeto. Por exemplo, se você tiver criado um projeto chamado `test-project` na certificação de Design responsivo para a web, ele estará em `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se você quer criar novos passos, as ferramentas a seguir vão simplificar o processo.

## create-next-step (criar próximo passo)

Um script único que adicionará automaticamente a próxima etapa com base na última etapa do projeto. O código seed do desafio usará o código do desafio da etapa anterior.

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-next-step
```

## create-empty-steps (criar passos vazios)

Um script único que adiciona automaticamente um número específico de etapas. O código seed de todos os passos criados estarão vazios.

**Observação:** esse script também executa [update-step-titles](#update-step-titles).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-empty-steps X #, onde X é o número de etapas a serem criadas.
```

## insert-step

Um script único que adiciona automaticamente uma nova etapa em uma posição especificada, incrementando todas as etapas subsequentes (seus títulos e em seu meta.json). O código inicial de desafio usará o código inicial de desafio da etapa anterior com os marcadores de região editáveis ​​(ERMs) removidos.

**Observação:** esse script também executa [update-step-titles](#update-step-titles).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run insert-step X #, onde X é a posição para inserir a nova etapa.
```

## delete-step

Um script único que exclui uma etapa existente, decrementa todas as etapas posteriores (seus títulos e em seu meta.json)

**Observação:** esse script também executa [update-step-titles](#update-step-titles).

### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run delete-step X #, onde X é o número do passo a ser excluído.
```

## update-step-titles

Um script único que atualiza automaticamente a frontmatter nos arquivos markdown de um projeto para que eles sejam consistentes com o meta.json do projeto. Garante que o título de cada etapa (e dashedName) correspondam ao challengeOrder do arquivo meta.

### Como executar o script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run update-step-titles
```
