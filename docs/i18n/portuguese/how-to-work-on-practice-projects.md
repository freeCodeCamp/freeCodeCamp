# Como trabalhar em projetos práticos

Nossos projetos práticos usam uma abordagem baseada em passos para ensinar conceitos aos campers. Um projeto será composto por vários arquivos, aos quais nos referimos como **"passos"**. Esses arquivos são nomeados pelo ID de desafio para evitar problemas com o fluxo de tradução. Infelizmente, isso torna difícil encontrar o arquivo associado a um passo específico.

Criamos uma ferramenta de edição de desafios que ajuda a remediar isso. Essa ferramenta permite navegar pelos projetos disponíveis e pelas etapas para cada projeto (em ordem). Há também um editor de código embutido que você pode usar para trabalhar nos arquivos diretamente.

## Usando o editor de desafios

Essas instruções informarão como usar a nossa ferramenta de edição de desafios para trabalhar nos projetos práticos.

### Iniciando o editor

Para iniciar o editor, certifique-se de estar no diretório raiz do freecodecamp. Em seguida, execute `npm run challenge-editor` para iniciar tanto o client quanto a API que alimenta o editor.

O client será executado na porta `3300`, então você pode acessá-la em `http://localhost:3300`. A API é executada na porta `3200`, para evitar conflitos com o client de aprendizagem e com o servidor. Isso permitirá que você execute o aplicativo do freeCodeCamp ao mesmo tempo que o editor, para poder testar as alterações localmente.

### Navegando pelo editor

A exibição padrão listará os `superblocks` disponíveis - eles são as certificações. Clique no link de certificação em que você deseja trabalhar.

Isso levará você à lista de blocos. Esses são os projetos práticos. Clique no link do projeto em que você deseja trabalhar.

Isso levará você a uma lista de passos para o projeto. Se você estiver trabalhando em um passo existente, clique no link do passo para abrir o editor. Se você estiver adicionando ou removendo etapas, clique no link `Use the step tools` para alternar para as ferramentas de passos para esse desafio.

### Edição dos passos

Ao clicar em um passo, você será levado ao editor. Esse é um editor de texto básico, mas que oferece destaque de sintaxe.

Após realizar as alterações, clique no botão `Save Changes` para salvar as alterações. Você receberá um alerta do navegador informando que as alterações estão prontas para o commit. Observe que você precisará usar o `git` manualmente para colocar as alterações em staging e para fazer o commit dos arquivos - essa ferramenta não fará isso por você.

### Ferramentas de passo

Ao clicar no link `Use the step tools`, você será levado à página step tools (Ferramentas de passo). Isso permitirá que você adicione ou remova passos do projeto.

#### Criar o próximo passo (Create Next Step)

Clicar neste botão adicionará um novo passo ao final do projeto. Esse passo usará o código do passo anterior como seed (ou referência).

#### Criar passos vazios (Create Empty Steps)

Insira o número de passos que você deseja adicionar na entrada. Depois, ao clicar no botão, você criará as diversas etapas vazias ao final do projeto.

#### Inserir passo (Insert Step)

Enter the step number that you want to add. Then, click the `Insert Step` button to add the step. The following steps will be re-ordered.

#### Excluir passo (Delete Step)

Insira o número do passo que deseja excluir. Em seguida, clique no botão `Delete Step` para excluir o passo. Isto atualizará automaticamente os números dos passos posteriores.

#### Atualizar os títulos dos passos (Update Step Titles)

Você não deve precisar usar essa ferramenta a menos que tenha excluído ou adicionado passos manualmente. Esta ferramenta reordenará os números dos passos.

## Usando os scripts manualmente

Se quiser trabalhar nos passos manualmente, em seu IDE local, você pode executar os scripts de gerenciamento de passos diretamente.

A pasta `tools/challenge-helper-scripts` contém ferramentas para ajudar a facilitar a criação e a manutenção dos projetos baseados no currículo do freeCodeCamp.

### Criando um projeto

Execute `npm run create-project` no diretório raiz. Esse comando abrirá uma interface de linha de comando que vai guiar você através do processo. Uma vez que tiver terminado, deverá aparecer um novo desafio no currículo em inglês que você pode usar para começar o projeto. Por exemplo, se você tiver criado um projeto chamado `test-project` na certificação de Design responsivo para a web, ele estará em `curriculum/challenges/english/01-responsive-web-design/test-project`.

Se você quer criar outros passos, as ferramentas a seguir vão simplificar o processo.

### create-next-step

Um script único que adicionará automaticamente o próximo passo com base no último passo do projeto. O código seed do desafio usará o código do desafio do passo anterior.

#### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-next-step
```

### create-empty-steps

Um script único que adiciona automaticamente um número específico de passos. O código seed de todos os passos criados estarão vazios.

**Observação:** esse script também executa [update-step-titles](#update-step-titles).

#### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run create-empty-steps X #, onde X é o número de etapas a serem criadas.
```

### insert-step

Um script único que adiciona automaticamente um novo passo em uma posição especificada, incrementando todos os passos subsequentes (seus títulos e em seu meta.json). O código inicial de desafio usará o código inicial de desafio do passo anterior com os marcadores de região editáveis ​​(ERMs) removidos.

**Observação:** esse script também executa [update-step-titles](#update-step-titles).

#### Como executar esse script:

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run insert-step X #, onde X é a posição para inserir a nova etapa.
```

### delete-step

Um script único que exclui um passo existente e decrementa todos os passos posteriores (seus títulos e em seu meta.json)

**Observação:** esse script também executa [update-step-titles](#update-step-titles).

#### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run delete-step X #, onde X é o número do passo a ser excluído.
```

### update-step-titles

Um script único que atualiza automaticamente a frontmatter nos arquivos markdown de um projeto para que eles sejam consistentes com o meta.json do projeto. Garante que o título de cada passo (e seu dashedName) correspondam ao challengeOrder do arquivo meta.

#### Como executar esse script

1. Mude para o diretório do projeto.
2. Execute o comando npm a seguir:

```bash
npm run update-step-titles
```
