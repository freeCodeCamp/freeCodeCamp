# Como traduzir arquivos do freeCodeCamp

## Prepare-se para as contribuições

> O roadmap de localização do freeCodeCamp - não há limites de velocidade

> [!TIP] You can start by reading [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/). We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [Discord chat server](https://discord.gg/PRyKn3Vbay).

Você pode traduzir o quanto você quiser e quando você puder. O que realmente importa é o quanto de tempo e energia você estará disposto a investir como um voluntário de tradução.

Pedimos apenas que entenda os seguintes pontos:

1. **As traduções são um esforço em equipe.**

   A tradução dos recursos do freeCodeCamp é uma das mais divertidas e gratificantes como um contribuidor. Ela fica ainda melhor quando envolve amigos e colegas que falam o mesmo idioma que você.

   Você pode começar lendo [este anúncio](https://www.freecodecamp.org/portuguese/news/como-ajudar-a-traduzir-o-freecodecamp-para-seu-idioma/). Recomendamos que entre [em nosso fórum da comunidade](https://forum.freecodecamp.org/c/contributors/3) e no [servidor de chat do Discord](https://discord.gg/PRyKn3Vbay) com seus amigos e mostre seu interesse antes de começar a traduzir. O Crowdin, assim como outras ferramentas, facilita a contribuição com traduções, mas ainda há bastante trabalho.

   Nós esperamos que você goste de contribuir e não venha a se sentir esgotado ou perder o interesse.

   Um grupo pequeno de 4 à 5 indivíduos é um bom tamanho para iniciar o nicho para o seu idioma. Você pode, então, recrutar cada vez mais amigos para se juntarem ao time.

2. **Custa muito aos servidores rodar cada linguagem.**

   Na superfície, os componentes técnicos não parecem ser tão complicados, mas, para que os componentes continuem rodando, há um alto custo. Nisto está incluso o provisionamento adicional de servidores e uma equipe dedicada poder cuidar deles.

   O freeCodeCamp.org comprometeu-se em providenciar de forma gratuita como sempre. No entanto, precisamos priorizar os recursos para os que mais necessitam deles. A última coisa que queremos é desligar os servidores para uma linguagem se a atividade de tradução encerrar e se tornar desatualizada.

   Para traduzir o currículo, quando cada idioma alcançar pelo menos algumas certificações no currículo, podemos começar a implantar o idioma no [`/learn`](https://www.freecodecamp.org/learn) enquanto você continua a traduzir o restante das certificações.

   Por exemplo, gostaríamos de implantar pelo menos todo o conjunto de certificações de front-end quando entregarmos uma nova linguagem pela primeira vez.

3. **E quanto às linguagens que não estão listadas na plataforma de tradução?**

   Nós buscamos em nossa base de usuários e adicionamos os mais de 30 idiomas mais falados para a lista de idiomas habilitados na plataforma de traduções. Alguns idiomas, como o chinês e o espanhol já estão implantados no **/learn** neste momento.

   Infelizmente, a lista não inclui as centenas de idiomas existentes. Nós recebemos dezenas de requisições de contribuidores como você, todos os dias. Eles também gostariam de ajudar na tradução do site no idioma que falam.

   Nós estamos definitivamente torcendo para adicionar mais idiomas na lista, mas, como você já sabe, só seria viável se conseguíssemos um impulso suficiente em torno de um idioma.

   Se você gostaria que nós incluíssemos um novo idioma, recomendamos que você deixe seus amigos animados com isso.

   Quando você tiver um pequeno grupo de pessoas (pelo menos 4-5) interessadas e comprometidas, nós poderemos entrar em contato. Explicaremos todos os detalhes e orientaremos você em algumas das ferramentas e processos.

## Visão geral do Crowdin

É nosso sonho fornecer recursos para você aprender, não importando qual idioma fala. Para nos ajudar com isso, integramos nossa base de código open-source e nosso currículo com o [Crowdin](https://crowdin.com/), uma ferramenta que nos ajuda a traduzir nosso código.

> [!NOTE] We use a different tool and workflow for translating [news articles](https://www.freecodecamp.org/news). If you are interested in translating articles, read [this announcement](https://www.freecodecamp.org/news/help-translate-freecodecamp-language/) and reach out to your Language Lead.

O fluxo de tradução é dividido em duas atividades principais:

- **Traduzir** arquivos do currículo, documentação e elementos da interface como botões, rótulos e etc.:

  Como um tradutor, você pode se cadastrar em [nossa plataforma de tradução](https://translate.freecodecamp.org) e contribuir com traduções em mais de 30 idiomas disponíveis.

- **Revisar** as traduções de todo conteúdo.

  Os revisores verificam se as traduções da comunidade têm um tom uniforme e não contêm problemas como erros de digitação, entre outros. Resumidamente, eles garantem a alta qualidade das traduções. Note que nós não usamos tradução automática por um motivo.

> [!WARNING] We are no longer using GitHub to translate files directly, if you are a returning contributor head to our [translation platform](https://translate.freecodecamp.org/) instead.

## Primeiros passos

Primeiro, não se esqueça de vir dar um "Oi" no nosso [servidor do Discord](https://discord.gg/PRyKn3Vbay). Nós postamos atualizações regulares sobre recursos de tradução e respondemos a muitas de suas dúvidas lá.

Depois, vá para a nossa [plataforma de tradução](https://translate.freecodecamp.org/) e faça o login (se você não contribuiu com traduções anteriormente, você precisará criar uma conta).

Finalmente, faça o nosso passo a passo abaixo para entender as ferramentas de tradução e fluxos de trabalho à sua disposição.

Boa tradução.

## Selecione um projeto e um arquivo

Quando você visita a plataforma de tradução, você deve ver vários "projetos" disponíveis para tradução:

1. Projeto de [Contribuição de documentação](https://translate.freecodecamp.org/contributing-docs), que contém os arquivos para a documentação deste site.
2. Projeto do [Currículo de programação](https://translate.freecodecamp.org/curriculum), que contém nossos arquivos de desafios para nosso currículo.
3. Projeto de [Interface de aprendizagem do usuário](https://translate.freecodecamp.org/learn-ui), que contém as "strings" para elementos de UI como botões, "labels", etc. para nossa plataforma de aprendizagem.

Selecione qualquer projeto no qual que deseje contribuir e você verá uma lista de idiomas disponíveis para tradução.

![Imagem - Lista de idiomas disponíveis](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Selecione o idioma que deseja trabalhar e você verá a estrutura completa do arquivo.

![Imagem - Lista de arquivos disponíveis](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Cada arquivo e pasta aparecerá na barra de progresso. A porção **azul** da barra de progresso indica a porcentagem de tradução do arquivo, enquanto a porção **verde** da barra indica a porcentagem aprovada pelo time de revisão.

Selecione um arquivo para traduzir e o Crowdin vai abrir o editor.

> [!NOTE] When the editor view opens, you will need to click the settings icon (shown as a gear) and switch the 'HTML tags displaying' setting to 'SHOW'. This will ensure you can see tags such as `<code></code>` instead of `<0></0>`.

## Traduzir o currículo

![Imagem - janela do editor](https://contribute.freecodecamp.org/images/crowdin/editor.png)

O Crowdin separa o documento em "strings" traduzíveis, geralmente frases. Cada string é traduzida individualmente. Referente à imagem acima:

1. Uma string marcada em verde já tem uma proposta de tradução.
2. Uma string em vermelho ainda _não_ possui uma proposta de tradução.
3. Uma string com texto acinzentado não é traduzível. Esse é o caso para blocos de código e outros conteúdos que não devem ser traduzidos. Você não poderá selecionar essas strings no editor.
4. Se um contribuidor propôs uma tradução para uma string, o Crowdin vai mostrar a proposta aqui. Você não pode salvar uma tradução idêntica - ao invés disso, se a tradução estiver precisa, você deve clicar no ícone `+` para "aprová-la".  Uma tradução imprecisa pode ser "desaprovada" com o ícone `-`.
5. O Crowdin vai recomendar traduções baseadas na TM (Translation Memory) ou na MT (Machine Translation). Translation Memory se refere a strings similares ou idênticas que já foram traduzidas/aprovadas em outros arquivos. Machine Translation refere-se a traduções recomendadas por bibliotecas integradas.
6. Esse é o painel do editor, onde você pode propor traduções para a string selecionada.
7. A string selecionada no editor estará marcada em amarelo.
8. Aqui você verá tags indicando o estado da string. `Done` significa que a string possui pelo menos uma proposta de tradução. `Todo` significa que a string não possui nenhuma proposta de tradução.
9. Aqui você pode ver a janela de comentários. Se você tem perguntas ou preocupações acerca de uma string em particular, você pode comentar aqui para que outros tradutores vejam.
10. Esses dois "botões de painel" esconderão o documento à esquerda e os comentários à direita.

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [Discord](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

Quando tiver terminado de traduzir uma string, clique em `Save` para salvar sua tradução no Crowdin.  Outros contribuintes poderão votar em sua tradução e os revisores poderão aprová-la.

Fique à vontade para traduzir quantas strings quiser - não há nenhuma etapa adicional requerida quando você completar um arquivo inteiro ou propor uma nova tradução. Clicar em `Save` é tudo de que você precisa para salvar sua tradução.

> [!NOTE] If you see something in the English source file that is inaccurate or incorrect, please do not fix it through the translation flow. Instead, leave a comment on the string to notify us that there is a discrepancy, or create a GitHub issue.

## Translate the Learn Interface

Our `/learn` interface relies on JSON files loaded into an i18n plugin to generate translated text. This translation effort is split across both Crowdin and GitHub.

### On GitHub

The `links.json`, `meta-tags.json`, `motivation.json`, and `trending.json` files contain information that needs to be updated to reflect your language. However, we cannot load these into Crowdin, as the content isn't something that would be a one-to-one translation.

These files will most likely be maintained by your language lead but you are welcome to [read about how to translate them](/language-lead-handbook.md).

### On Crowdin

> [!DANGER] Do not edit the following files through a GitHub PR.

The `intro.json` and `translations.json` files are both translated on Crowdin, in the Learn User Interface project. Translating these can be a bit tricky, as each individual JSON value appears as its own string and sometimes the context is missing.

However, the `Context` information provided in Crowdin can help understand where the string fits in to the larger structure.

![Image with an arrow pointing to Crowdin's context information](https://contribute.freecodecamp.org/images/crowdin/context.png)

If you have any questions about where a string fits in to the prose, reach out to us in our [contributor chat](https://discord.gg/PRyKn3Vbay).

## Translate Documentation

Translating our contributing documentation is a similar flow to translating our curriculum files.

> [!NOTE] Our contributing documentation is powered by `docsify`, and we have special parsing for message boxes like this one. If you see strings that start with `[!NOTE]`, `[!WARNING]`, or `[!TIP]`, these words should NOT be translated.

### How to translate documentation with internal links

When you work on translating contributing documentation, watch out for internal links targeting a different section of the documentation.

Make sure to replace the id of the target section (the part after `#`) with the id on the translated document. For example, it will look like this in Japanese:

Before translation

```
// em HTML
<a href="nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino">Link text</a>
<a href="#id-do-cabeçalho-da-seção-de-destino">Link text</a>

// em Markdown
[Link text](nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino)
[Link text](#id-do-cabeçalho-da-seção-de-destino)
```

After translation

```
// em HTML
<a href="nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino">Texto do link</a>
<a href="#id-do-cabeçalho-da-seção-de-destino">Texto do link</a>

// em Markdown
[Texto do link](nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino)
[Texto do link](#id-do-cabeçalho-da-seção-de-destino)
```

The actual files in docs are written in Markdown, but they will appear as HTML tags on Crowdin.

You can find out how `docsify` converts a string in your language into an id by looking into the translated pages. If the translation is not deployed yet, you can preview it by [running the docs site locally](how-to-work-on-the-docs-theme.md#serving-the-documentation-site-locally).

You can learn more about [internal links in our docs here](how-to-work-on-the-docs-theme.md#how-to-create-an-internal-link).

## Translate the LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- As frases a serem traduzidas estarão sempre entre `""`. Elas são diálogos ou strings da UI. As palavras-chave que vêm antes ou depois do diálogo são palavras-chave de controle do mecanismo do jogo e serão explicadas em detalhes nas regras subsequentes. Observe que esta primeira regra rege todas as regras subsequentes listadas.
- No caso de `new "..."`, não traduza a palavra-chave `new`.
- Prefixos como `player`, `annika`, `layla`, `marco` (ou variantes como `player happy`, `player @ happy`) não devem ser traduzidos. Eles são palavras-chave de controle para exibir corretamente a imagem do personagem no jogo.
- Textos após as aspas do diálogo, como `nointeract`, não devem ser traduzidos.
- Não traduza o que estiver entre `[]` e `{}`. Estas são interpolações de variáveis e tags de texto. Estes parênteses devem permanecer com metade da largura `[]` e `{}` em vez de seus equivalentes de largura total `【】` e `「」`
- Não traduza a palavra-chave `nointeract` ao final da frase.
- Se tentarmos usar parênteses de largura total `（）`, receberemos um aviso de controle de qualidade (QA). Para evitar o aviso de QA, use parênteses com metade da largura `()`

### Examples

---

#### Antes da tradução

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- esta é a linha que precisa ser traduzida. veja a tradução abaixo
```

#### Após a tradução

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？Que coincidência! Nosso membro VIP da equipe, {a=[vip_profile_url]}[player_name]{/a} ficará honrado ao saber disso."
```

Note: The `[]` and `{}` tags should be left intact.

---

#### Antes da tradução

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- traduza essa linha, ver abaixo
```

#### Após a tradução

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Avançar"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

---

#### Antes da tradução

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### Após a tradução

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Ha ha, [player_name], é divertido falar com você. Tenho certeza de que você vai gostar de trabalhar em desenvolvimento."
```

Note: `layla @ neutral` and `[player_name]` are left unchanged.

---

#### Antes da tradução

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### Após a tradução

```renpy
# player "Maybe this is all a dream?" nointeract
player "Será que isso tudo é um sonho?" nointeract
```

---

### A Note on How Crowdin Segments a Sentence

Pay attention to how Crowdin segments a line of dialogue wrapped between opening and closing quotes `""`. When we are translating the dialogue, we need to make sure to retain the opening and closing quotes, even if the quotes appear in different segments.

This is the line to be translated:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin segments it into three parts like below:

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# traduzido, mantendo as aspas de abertura `"`
player @ surprised "{b}Full-stack{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# tradução, sem aspas dos dois lados
O que é isso?
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# traduzido, mantendo as aspas de fechamento `"`
É melhor eu anotar para saber mais a respeito."
```

## Rate Translations

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Quality Assurance Checks

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING] You have the option to save a translation in spite of errors. If you do, by clicking "Save Anyway", you should also tag a proofreader or project manager and explain why the QA message needs to be ignored in this case.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Não traduza o conteúdo dentro de tags `<code>`. Essas tags indicam que o texto está formatado para o código e deve ser deixado em inglês.
- Não adicione conteúdo extra. Se você acha que um desafio necessita de mudanças no texto e conteúdo adicional, você deve propor as mudanças através de uma issue no GitHub ou um pull request que modifique o arquivo em inglês.
- Não mude a ordem do conteúdo.

If you have any questions, feel free to reach out to us in our [Discord](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.
