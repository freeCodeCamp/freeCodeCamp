# Como trabalhar em projetos práticos

A pasta `tools/challenge-helper-scripts` contém ferramentas para ajudar a facilitar a criação e a manutenção dos projetos baseados no currículo do freeCodeCamp.

## Criando um novo projeto

Execute `npm run create-project`. Esse comando abrirá uma interface de linha de comando que vai guiar você através do processo. Uma vez que tiver terminado, deverá aparecer um novo desafio no currículo inglês que você pode usar para começar o projeto. Por exemplo, se você tiver criado um projeto chamado `test-project` na certificação de Design responsivo para a web, ele estará em `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se você quer criar novos passos, as ferramentas a seguir vão simplificar o processo.

## create-next-step (criar próximo passo)

Um script único que automaticamente adiciona um novo passo baseado no último passo numerado como `step-xxx.md` onde `xxx` representa o número de 3 dígitos do último passo. O código inicial de desafio usará o código inicial de desafio da etapa anterior com os marcadores de região editáveis ​​(ERMs) removidos.

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

Em algum momento, você decide que precisa deletar `step-002.md`, porque os passos nele não são mais necessários. Você também decide que vai diluir as partes dentro de `step-004.md` em três passos ao invés de um.

Para completar essa reestruturação, você precisará excluir a `step-002.md` e então adicionar a `step-004a.md` e a `step-004b.md`. A nova estrutura da pasta deve ficar assim:

```bash
step-001.md
step-003.md
step-004.md
step-004a.md
step-004b.md
step-005.md
step-006.md
```

Você precisa agora que os nomes dos arquivos sejam `step-001.md` a `step-007.md`, porque você removeu um, mas ganhou dois arquivos novos, assim gerando somente um arquivo novo. Além disso, o frontmatter de cada arquivo abaixo de um passo adicionado ou excluído precisará ser modificado, onde o valor chave do `title` tem que ser igual ao novo número do passo. Por exemplo, depois de renomeaer `step-3.md` para `step-2.md`, você precisará alterar o título do `step-2.md` de `Step 03` para `Step 02`.

Veja abaixo as mudanças necessárias na pasta do projeto:

```bash
step-001.md
step-003.md renomeado para step-002.md e o título muda para "Step 2"
step-004.md renomeado para step-003.md e o título muda para "Step 3"
step-004a.md renomeado para step-004.md e o título muda para "Step 4"
step-004b.md renomeado para step-005.md e o título muda para "Step 5"
step-005.md renomeado para step-006.md e o título muda para "Step 6"
step-006.md renomeado para step-007.md e o título muda para "Step 7"
```

Junto com as mudanças acima, a chave `challengeOrder` no arquivo `meta.json` do projeto precisará refletir a nova ordem dos passos. Isso é necessário porque cada etapa abaixo de uma exclusão de etapa e/ou adição de etapa altera o `title` associado a cada um dos `id` do desafio da etapa afetada.

### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run reorder-steps
```
