# Como trabalhar em projetos práticos

A pasta `tools/challenge-helper-scripts` contém ferramentas para ajudar a facilitar a criação e a manutenção dos projetos baseados no currículo do freeCodeCamp.

## Criando um novo projeto

Execute `npm run create-project`. Esse comando abrirá uma interface de linha de comando que vai guiar você através do processo. Uma vez que tiver terminado, deverá aparecer um novo desafio no currículo inglês que você pode usar para começar o projeto. Por exemplo, se você tiver criado um projeto chamado `test-project` na certificação de Design responsivo para a web, ele estará em `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se você quer criar novos passos, as ferramentas a seguir vão simplificar o processo.

## create-next-step (criar próximo passo)

Um script único que automaticamente adiciona um novo passo baseado no último passo numerado como `part-xxx.md` onde `xxx` representa o número de 3 dígitos do último passo. O código inicial de desafio usará o código inicial de desafio da etapa anterior com os marcadores de região editáveis ​​(ERMs) removidos.

**Observação:** Esse script também executa  [reorder-steps](how-to-work-on-practice-projects#reorder-steps).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-next-step
```

## create-empty-steps (criar passos vazios)

Um script único que adiciona automaticamente um número especificado de passos começando a partir de um número específico. O código seed de todos os passos criados estarão vazios.

**Observação:** Esse script também executa  [reorder-steps](how-to-work-on-practice-projects#reorder-steps).

### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-empty-steps start=X num=Y # onde X é o número do passo onde deve iniciar e Y é o número de passos que deverão ser criados.
```

## create-step-between

Um único script que automaticamente adiciona passos entre dois passos consecutivos. O código inicial do desafio usará o código inicial do desafio da etapa inicial existente com os marcadores de região editáveis ​​(ERMs) removidos.

**Observação:** Esse script também executa  [reorder-steps](how-to-work-on-practice-projects#reorder-steps).

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
part-1.md
part-2.md
part-3.md
part-4.md
part-5.md
part-6.md
```

Em algum momento, você decide que precisa deletar `part-2.md`, porque os passos nele não são mais necessários. Você também decide que vai diluir as partes dentro de `part-4.md` em três passos ao invés de um.

Para completar essa reestruturação, você precisará deletar `part-2.md` e então adicionar a `part-4a.md` e a `part-5b.md`. A nova estrutura da pasta deve ficar assim:

```bash
part-001.md
part-003.md
part-004.md
part-004a.md
part-004b.md
part-005.md
part-006.md
```

Você precisa agora que os nomes dos arquivos sejam `part-1.md` a `part-7.md`, porque você removeu um, mas ganhou dois arquivos novos, assim gerando somente um arquivo novo. Além disso, o frontmatter de cada arquivo abaixo de um passo adicionado ou excluído precisará ser modificado, onde o valor chave do `title` tem que ser igual ao novo número do passo. Por exemplo, depois de renomeaer `part-3.md` para `part-2.md`, você precisará alterar o título do `part-2.md` de `Part 03` para `Part 02`.

Veja abaixo as mudanças necessárias na pasta do projeto:

```bash
part-001.md
part-003.md renamed to part-002.md and title changes to "Part 2"
part-004.md renames to part-003.md and title changes to "Part 3"
part-004a.md renames to part-004.md and title changes to "Part 4"
part-004b.md renames to part-005.md and title changes to "Part 5"
part-005.md renames to part-006.md and title changes to "Part 6"
part-006.md renames to part-007.md and title changes to "Part 7"
```

Junto com as mudanças acima, a chave `challengeOrder` no arquivo `meta.json` do projeto precisará refletir a nova ordem dos passos. Isso é necessário porque cada etapa abaixo de uma exclusão de etapa e/ou adição de etapa altera o `title` associado a cada um dos `id` do desafio da etapa afetada.

### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run reorder-steps
```
