<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Como trabalhar em Artigos Guia

Com a tua ajuda, nós podemos criar uma ferramenta de referência compreensiva que ajudará milhões de pessoas que estão a aprender código nos anos que aí vêm. 💛

Tu podes:

- [Ajudar-nos criando e Editando Artigos Guia](#steps-for-creating-and-editing-guide-articles).
- [Ajudar-nos revendo <i>pull requests</i> para Artigos Guia]()

## Passos para Criar e Editar Artigos Guia

1. 🍴 [Fazer <i>fork</i> a este repositório](https://github.com/freeCodeCamp/freeCodeCamp#fork-destination-box)
2. 👀️ Seguir as guias de contribuição delineados mais abaixo.
3. 🔧 Fazer algumas mudanças impressionantes!
4. 📖 Ler este [guia de estilo de melhores práticas](/docs/style-guide-for-guide-articles).
5. 👉 [Fazer um <i>pull request</i>](https://github.com/freeCodeCamp/freeCodeCamp/compare)
6. 🎉 Ter o teu <i>pull request</i> aprovado - sucesso!

Ou então apenas [criar um <i>issue</i>](https://github.com/freeCodeCamp/freeCodeCamp/issues) - qualquer pedacinho de ajuda conta! 😊

### [Segue estas guias recomendadas do nosso Guia de Estilo para um Artigo Guia interessante e completo](/docs/style-guide-for-guide-articles.md)

### Criar um <i>Pull request</i> (PR) para propor mudanças

Há duas maneiras para propor uma mudança num repositório, depois de editares ou adicionar um Artigo Guia:

- [Usando o GitHub Web Interface no teu <i>browser</i>](#using-the-github-web-interface-on-your-browser).
- [Trabalhando na tua máquina pessoal](#working-on-your-local-machine) (_recomendado_ para pré-visualizar mudanças).

#### Usando o GitHub Web Interface no teu browser

Vê a demonstração em vídeo ou segue os passos abaixo:

**[A FAZER]** Atualizar a gravação do GIF.

![GIF a mostrar os passos do GitHub interface](#)

1. Ir à pasta **"pages"** (localizada no [`guide`](/guide)) e encontrar o artigo que gostarias de escrever ou editar.

    > Todos os <i>stubs</i> estarão num ficheiro index.md

2. Carrega o icon de lápis do <kbd>Edit this file</kbd> e faz as tuas mudanças ao ficheiro usando o GitHub-flavored Markdown.

    > Se o icon estiver acizentado e a dar o aviso "You must be on a branch to make or propose changes to this file", então está provavelmente na <i>tree</i> de outra pessoa. No topo esquerdo da página estará uma caixa <i>drop down</i> que dirá "Tree: #######". Carrega no <i>drop down</i> e muda o <i>branch</i> para "master". Agora o lápis deve estar clicável.

3. Faz <i>scroll</i> até ao fim do ecrã e adiciona uma mensagem de <i>commit</i> a explicar as tuas mudanças.

    (Opcional): Nós recomendamos vivamente fazer uma mensagem de <i>commit</i> convencional. Isto é uma boa prática que verás em alguns dos repositórios <i>Open Source</i> mais populares. Como developer, isto encoraja-te a seguir práticas <i>standard</i>.

    Alguns exemplos de mensagens de <i>commit</i> convencionais:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Mantém-nas curtas, não mais que 50 caracteres. Podes sempre adicionar informação adicional na descrição da mensagem de <i>commit</i>.

    Isto não leva tempo adicional comparado com uma mensagem não convencional como 'update file' ou 'add index.md'

    Podes aprender mais sobre <i>commits</i> convencionais [aqui](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

4. Seleciona a opção de <i>radio button</i> para **"Create a new branch for this commit and start a pull request"** e clica em <kbd>Propose file changes</kbd>.

5. No próximo ecrã podes adicionar outros detalhes sobre o teu PR e depois clica em <kbd>Create pull request</kbd>.

Parabéns 🎉! Criaste um <i>pull request</i>.

#### Trabalhando na tua máquina pessoal (_recomendado_ para pré-visualizar mudanças)

Não é obrigatório trabalhares na tua máquina pessoal, a não ser que queiras pré-visualizar as tuas edições ou trabalhar com <i>UI fixes</i> e melhorias. Também é recomendado caso encontres problemas de git como conflitos de <i>merge, rebasing</i>, etc.

##### Lê estas guias em [Como configurar o freeCodeCamp localmente](/docs/how-to-setup-freecodecamp-locally.md)

### Ter um PR aceite

Aqui estão algumas diretrizes que os <i>reviewers</i> seguem ao analizar PRs:

- tem uma descrição e título relevantes
- o PR respeita o [guia de estilo](/docs/style-guide-for-guide-articles)
- nós seguimos dicas QA gerais em [Directrizes de Moderador](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
- desde que um <i>pull request</i> melhore ou expanda o guia, nós aceitamo-lo mesmo que contenha linguagem imperfeita ou conteúdo parcial
- <i>pull requests</i> mais antigos são analizados primeiro

#### Labels

- **content** é para <i>pull requests</i> que modificam o conteúdo dos artigos no guia (adicionam um novo artigo ou atualizam um já existente)
- **duplicate** é para <i>pull requests</i> que têm o mesmo conteúdo que outro PR
- **changes requested** é para <i>pull requests</i> que precisam de mudanças antes de serem <i>merged</i>
- **stale** é para <i>pull requests</i> com uma <i>label</i> _"changes requested"_  que não tem actividade após 2 semanas e será consequentemente fechado
  - Um <i>pull requests</i> _stale_ deve ser fechado.
  - Aqui está [um exemplo](https://github.com/freeCodeCamp/freeCodeCamp/pull/235).

#### Conteúdo Contraditório/Duplicado

UM PR é considera um **duplicate** se faz mudanças ao mesmo artigo que outro PR.

Em geral, um <i>reviewer</i> irá:

1. Ordenar PR por mais antigo
2. Procurar PRs com conteúdo parecido
3. <i>Merge</i> do mais antigo para o mais recente

É muito provável que existirão conflitos de <i>merge</i> com PRs duplicados.

Reviewers farão todos os esforços para resolver estes conflitos e combinar os PRs duplicados.

#### Pedir Mudanças

Se um <i>pull requests</i> não é perfeito, o revisor poderá:

- pedir mudanças ao contribuidor e adicionar a label *changes requested*
- resolver problemas menores e fazer um <i>commit> no topo do PR

#### Travis CI Build

Todos os PRs devem passar a verificação do Travis CI antes de acontecer o <i>merge</i>.

Se um PR quebra o <i>build</i> (uma verificação Travis CI falha e mostra um "X" vermelho) existem três causas prováveis.

Precisas de resolver o provlema antes de podermos <i>merge</i> o teu PR:

1. O teu PR cria um novo artigo e falta o ficheiro 'index.md' algures.
    - Todas as pastas no `src/pages` precisam de um ficheiro `index.md` (e o nome tem de ser `index.md`).
    - Dois cenários prováveis sãoT
      - deste algum outro nome ao ficheiro do novo artigo que não `index.md`, ou
      - criaste uma nova pasta e uma outra sub-pasta e escreveste o artigo na sub-pasta mas esqueceste-te de pôr um ficheiro `index.md` na nova pasta
2. O teu PR cria uma nova pasta e o nome da pasta não está formatado corretamente.
    - O nome da tua pasta deve ser todo em minúsculas e formatado em kebab-case (ex. my-new-folder).
3. O artigo não tem um campo para o `title` no topo.
    - Por favor refere à secção do [Title](#title) mais abaixo por baixo de  [Guia de Estilo para escrever artigos](/docs/style-guide-for-guide-articles.md).

### Quando fechamos <i>pull requests</i>

Nós fechamos PR
- se um PR mais antigo do mesmo artigo é <i>merged</i> e o teu PR não adicionar novo conteúdo
- se há zero/pouco esforço (ex.: copiar e colas de outra fonte como a Wikipédia)
- se há texto copiado de uma fonte com </i>copyright</i>i - ver [problema de citação](https://github.com/freeCodeCamp/freeCodeCamp/issues/2503)
- se não respeita o [Guia de Estilo para escrever artigos](/docs/style-guide-for-guide-articles.md)
- se não respeita o [Academic Honesty policy](https://www.freecodecamp.org/academic-honesty)
- se está parado (se a mudança é pedida e não há atividade durante duas semanas)

Também, se estiveres a trabalhar de um artigo <i>"stub"</i>, as tuas mudanças devem ser substanciais o suficiente para substituir o texto <i>stub</i>.

Não aceitamos um PR que só adiciona links à secção de "Mais Informação:".

O repositório tem um script `Normalise.js` que adiciona atributos a links, mas também procura texto "This is a stub..." via um RegEx.

Se encontrado, vai reverter o artigo de volta para o texto <i>stub</i> genérico (e apagar as tuas mudanças).

Este é comportamento pretendido, visto que permite-nos atualizar todos os <i>stubs</i> se o <i>template stub</i> por alguma razão.

### Encontrar Ajuda

Há uma comunidade de suporte de uma equipa inteira de contribuidores, com quem podes trocar ideias e pedir opiniões sobre a tua escrita.

Mantém-te ativo no [chat room de contribuidores](https://gitter.im/freecodecamp/contributors) e faz muitas perguntas.

---

## Passos para rever <i>pull requests</i> para Artigos Guia

> Esta secção é direccionada a revisores deste repositório.

## Squash e Merge

Nós usamos a opção <kcd>Squash and merge</kcd> quando <i>merging</i> o PR que mantém a <i>commit history</i> limpa.

![GIF - Squash and merge](https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif)

### Filtrar PRs

> PR, Open, Oldest First, Travis CI Build successful, no one assigned, no comments

[`is:pr is:open sort:updated-asc status:success no:assignee comments:0`](https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20status%3Asuccess%20no%3Aassignee%20comments%3A0)

> PR, Open, Oldest First, Does not have labels: `platform`, `enhancement`, `invalid` or `changes requested`

[`is:pr is:open sort:updated-asc -label:platform -label:enhancement -label:invalid -label:"changes requested"`](https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20-label%3Aplatform%20-label%3Aenhancement%20-label%3Ainvalid%20-label%3A%22changes%20requested%22).

### Templates

> Podes criar os teus próprios templates na feature inserida no GitHub em [**Saved replies**](https://github.com/settings/replies/) ou usar os mais abaixo.

#### Agradecimento

Em inglês:
```markdown
Thank you for your contribution to the page! 👍
We're happy to accept these changes, and look forward to future contributions. 🎉
```

Em português:
```markdown
Obrigado pela tua contribuição para a página! 👍
Estamos muito felizes em aceitar estas mudanças e esperamos ver mais tuas contibuições no futuro. 🎉
```

#### Agradecimento e parabenização

> Para agradecer e encorajar a primeira contribuição de um utilizador.

Em inglês:
```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We're happy to accept these changes, and look forward to future contributions. 📝
```

Em português:
```markdown
Olá @username. Parabéns pelo teu primeiro pull request (PR)! 🎉

Obrigada pela tua contribuição para a página! 👍
Estamos muito felizes em aceitar estas mudanças e esperamos ver mais tuas contibuições no futuro. 📝
```

#### Erro de Build

Em inglês:
```markdown
Hey @username

So I'd love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

Once you resolve these issues, I will be able to review your PR and merge it. 😊

Em português:
```markdown
Olá @username

Adoraria juntar as tuas mudanças mas parece que há um erro com o Travis CI build. ⚠️

Assim que resolveres estes problemas, poderei rever o teu PR e juntar ao repositório. 😊

---

> Estás à vontade de referenciar o [Guia de Estilo para escrever artigos](https://github.com/freeCodeCamp/freeCodeCamp#article-title) para este repositório no que toca a formatar um artigo corretamente para que o teu Travis CI build seja aprovado. ✅
>
> Também é uma boa prática no GitHub escrever uma breve descrição das tuas mudanças quando crias um PR. 📝
```

#### Syncing Fork

> Quando o PR não está atualizado quanto ao `master` <i>branch</i>.

Em inglês:
``````markdown
Hey @username

So I'd love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

This particular error was not actually caused by your file but was an old error caused by merging faulty code to the `master` branch. It has since been resolved.

To pass the build, you will have to sync the latest changes from the `master` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, I will be able to review your PR and merge it. 😊

Em português:
``````markdown
Olá @username

Adoraria juntar as tuas mudanças mas parece que há um erro com o Travis CI build. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

Este erro em particular não foi causado pelo teu ficheiro mas foi um erro antigo causado pelo <i>merge</i> de código defeituoso ao `master` <i>branch</i>. Foi, desde então, resolvido.

Para ser aprovado, terás que sincronizar as mudanças mais recentes do `master` <i>branch</i> do repositório do `freeCodeCamp/freeCodeCamp`.

Usando a linha de comandos, podes fazer isto em três passos fáceis:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Se estás a usar um GUI, podes simplesmente `Add a new remote...` e usar o link `git://github.com/freeCodeCamp/freeCodeCamp.git` de cima.

Assim que resolveres estes problemas, poderei rever o teu PR e juntar ao repositório. 😊

---

> Estás à vontade para referênciar o artigo de [Sincronizar um Fork](https://help.github.com/articles/syncing-a-fork/) do GitHub para mais informação em como manter o teu <i>fork</i> atualizado com o repositório principal. 🔄
>
> Também é uma boa prática no GitHub escrever uma breve descrição das tuas mudanças quando crias um PR. 📝
``````

#### Conflictos de Merge

> Quando o PR tem conflitos de merge que necessitam de ser resolvidos.¹

Em inglês:
```markdown
Hey @username

So I'd love to be able to merge your changes but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, I will be able to review your PR and merge it. 😊

---

> If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

Em português:
```markdown
Olá @username

Adoraria juntar as tuas mudanças mas parece que tens algums conflitos de <i>merge</i>. ⚠️

Assim que resolveres estes problemas, poderei rever o teu PR e juntar ao repositório. 😊

---

> Se não estiveres familiar com o processo de conflito de <i>merge</i>, consulta o guia do GitHub quanto a ["Resolver um conflito de merge"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️
>
> Também é uma boa prática no GitHub escrever uma breve descrição das tuas mudanças quando crias um PR. 📝
```

¹ Se é um utilizador a contribuir pela primeira vez tem um problema de <i>merge</i> os <i>mantainers</i> irão resolver o conflito por eles.

#### Duplicado

> Quando um PR é repetitivo ou duplicado.

Em inglês:
```markdown
Hey @username

It seems that similar changes have already been accepted earlier for this article you're editing, sorry about that. 😓

If you feel you have more to add, please feel free to open up a new PR.

Thanks again! 😊

> Hey @username

It seems that similar changes have already been accepted earlier for this article you're editing, sorry about that. 😓

If you feel you have more to add, please feel free to open up a new PR.

Thanks again! 😊

---

> If you have any questions, feel free to reach out through [Gitter](https://gitter.im/FreeCodeCamp/Contributors) or by commenting below. 💬
```

Em português:
```markdown
Olá @username

Parece que mudanças semelhantes já foram aceites antes para este artigo que estás a editar, desculpa. 😓

Se achares que tens mais a adicionar, estás à vontade para abrir outro PR.

Obrigada mais uma vez! 😊
---

> Se tens alguma questão, contacta-nos através do [Gitter](https://gitter.im/FreeCodeCamp/Contributors) ou comentando abaixo. 💬
```

#### Fechar pull requests inválidos

> Quando o PR é inválido.

Em inglês:
```markdown
Hey @username

You haven't actually added any content so I will be  invalid pull requests this PR and marking it as `invalid`. 😓️

Feel free to open another PR though! 👍
```

Em português:
```markdown
Olá @username

Não adicionaste nenhum conteúdo portanto vou ter de invalidar este <i>pull request</i> e marcá-lo como `invalid`. 😓️

Estás à vontade para abrir outro PR! 👍
```