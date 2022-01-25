# Como traduzir arquivos do freeCodeCamp

É nosso sonho fornecer recursos para você aprender, não importando qual idioma fala. Para nos ajudar com isso, integramos nossa base de código open-source e nosso currículo com o [Crowdin](https://crowdin.com/), uma ferramenta que nos ajuda a traduzir nosso código.

O fluxo de tradução é dividido em duas principais atividades:

- **Traduzir** arquivos do currículo, documentação e elementos da interface como botões, rótulos e etc.:

  Como um tradutor, você pode se cadastrar em [nossa plataforma de tradução](https://translate.freecodecamp.org) e contribuir com traduções em mais de 30 idiomas disponíveis.

- **Revisar** as traduções de todo conteúdo.

  Os revisores verificam se as traduções da comunidade têm um tom uniforme e não contêm problemas como erros de digitação, entre outros. Resumidamente, eles garantem a alta qualidade das traduções. Note que nós não usamos tradução automática por um motivo.

> [!WARNING] Não usamos mais o GitHub para traduzir arquivos diretamente. Se você está voltando a contribuir, vá para nossa [plataforma de tradução](https://translate.freecodecamp.org/).

## Prepare-se para as contribuições

> O roadmap de localização da freeCodeCamp - não há limites

Você pode traduzir o quanto você quiser e quando você puder. O que realmente importa é o quanto de tempo e energia você estará disposto a investir como um voluntário de tradução.

Pedimos apenas que entenda os seguintes pontos:

1. **As traduções são um esforço em equipe.**

   A tradução dos recursos do freeCodeCamp é uma das mais divertidas e gratificantes como um contribuidor. Ela fica ainda melhor quando envolve amigos e colegas que falam o mesmo idioma que você.

   Nós recomendamos que entre [em nosso fórum da comunidade](https://forum.freecodecamp.org/c/contributors/3) e na [sala de chat dos tradutores](https://chat.freecodecamp.org/channel/contributors) com seus amigos e mostre seu interesse antes de começar a traduzir. A ferramenta Crowdin facilita a contribuição com traduções, mas ainda há bastante trabalho.

   Nós esperamos que você goste de contribuir e não venha a se sentir esgotado ou perder o interesse.

   Um grupo pequeno de 4 à 5 indivíduos é um bom tamanho para iniciar o nicho para o seu idioma. Você pode, então, recrutar cada vez mais amigos para se juntarem ao time.

2. **Custa muito aos servidores rodar cada linguagem.**

   Na superfície, os componentes técnicos não parecem ser tão complicados, mas, para que os componentes continuem rodando, há um alto custo. Nisto está incluso o provisionamento adicional de servidores e uma equipe dedicada poder cuidar deles.

   O freeCodeCamp.org comprometeu-se em providenciar de forma gratuita como sempre. No entanto, precisamos priorizar os recursos para os que mais necessitam deles. A última coisa que queremos é desligar os servidores para uma linguagem se a atividade de tradução encerrar e se tornar desatualizada.

   Quando cada linguagem alcançar pelo menos algumas certificações no currículo, nós podemos começar a implantar a linguagem no [`/learn`](https://www.freecodecamp.org/learn) enquanto você continua a traduzir o restante das certificações.

   Por exemplo, gostaríamos de implantar pelo menos todo o conjunto de certificações de front-end quando entregarmos uma nova linguagem pela primeira vez.

3. **E quanto às linguagens que não estão listadas na plataforma de tradução?**

   Nós buscamos em nossa base de usuários e adicionamos os mais de 30 idiomas mais falados para a lista de idiomas habilitados na plataforma de traduções. Alguns idiomas, como o chinês e o espanhol já estão implantados no **/learn** neste momento.

   Infelizmente, a lista não inclui as centenas de idiomas existentes. Nós recebemos dezenas de requisições de contribuidores como você, todos os dias. Eles também gostariam de ajudar na tradução do site no idioma que falam.

   Nós estamos definitivamente torcendo para adicionar mais idiomas na lista, mas, como você já sabe, só seria viável se conseguíssemos um impulso suficiente em torno de um idioma.

   Se você gostaria que nós incluíssemos um novo idioma, recomendamos que você deixe seus amigos animados com isso.

   Quando você tiver um pequeno grupo de pessoas (pelo menos 4-5) interessadas e comprometidas, nós poderemos entrar em contato. Explicaremos todos os detalhes e orientaremos você em algumas das ferramentas e processos.

## Primeiros passos

Primeiro, não se esqueça de vir dar um "Oi" na nossa [sala de chat de tradutores](https://chat.freecodecamp.org/channel/contributors). Nós postamos atualizações regulares sobre recursos de tradução e respondemos a muitas de suas dúvidas lá.

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

> [!NOTE] Quando o editor abrir, você precisará clicar no ícone de configurações (mostrado como uma engrenagem) e mudar a configuração 'HTML tags displaying' para 'SHOW'. Isso garantirá que você veja as tags como `<code></code>` ao invés de `<0></0>`.

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

> [!NOTE] Se você encontrar uma string escondida que inclui traduções, notifique-a na [sala de chat dos tradutores](https://chat.freecodecamp.org/channel/contributors) para que possamos remover a tradução da memória.

Quando tiver terminado de traduzir uma string, clique em `Save` para salvar sua tradução no Crowdin.  Outros contribuintes poderão votar em sua tradução e os revisores poderão aprová-la.

Fique à vontade para traduzir quantas strings quiser - não há nenhuma etapa adicional requerida quando você completar um arquivo inteiro ou propor uma nova tradução. Clicar em `Save` é tudo de que você precisa para salvar sua tradução.

> [!NOTE] Se você ver algo no arquivo fonte em inglês que esteja impreciso ou incorreto, não conserte pelo mecanismo de tradução. Em vez disso, deixe um comentário na string para nos notificar de uma discrepância ou crie uma issue no GitHub.

## Traduzir a documentação

Traduzir nossa documentação de contribuição é similar a traduzir nossos arquivos de currículo.

> [!NOTE] Nossa documentação de contribuição utiliza o `docsify`. Nós temos uma análise especial para caixas de mensagem como essa. Caso veja strings iniciadas com `[!NOTE]`, `[!WARNING]`, ou `[!TIP]`, essas palavras NÃO devem ser traduzidas.

## Translate the LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- The sentences to be translated are always between `""`. These are dialogues or UI strings. The keywords that come before or after the dialogue are game engine control keywords and will be explained in details in subsequent rules. Please note that this first rule governs all subsequent rules listed.
- In case of `new "..."` Do not translate the `new` keyword.
- Prefixes like `player`, `annika`, `layla`, `marco` (or variants like `player happy`, `player @ happy`) should not be translated. These are control keywords to correctly display the character sprite in the game.
- Postfixes like `nointeract` should not be translated.
- Do not translate things between `[]` and `{}`. These are variable interpolations and text tags. These must remain halfwidth parentheses `[]` and `{}` instead of their fullwidth counterparts `【】` and `「」`
- Do not translate the `nointeract` keyword at the end of the sentence.
- If we try to use fullwidth parentheses `（）`, a QA warning will show. To avoid the QA warning, use halfwidth parentheses `()`

### Examples

---

#### Before translation

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- this is the line that needs to be translated. see translation below
```

#### After translation

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Note: The `[]` and `{}` tags should be left intact.

---

#### Before translation

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- translate this line, see below
```

#### After translation

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

---

#### Before translation

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### After translation

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Note: `layla @ neutral` and `[player_name]` are left unchanged.

---

#### Before translation

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### After translation

```renpy
# player "Maybe this is all a dream?" nointeract
player "也许这都是一场梦？" nointeract
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
# translated, keeping the opening quotes `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# translated, no quotes on either side
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# translated, keeping the closing quotes `"`
我最好做笔记，这样我可以学习更多东西。"
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

> [!WARNING] Você tem a opção de salvar uma tradução apesar dos erros. Se fizer isso, clicando em "Save Anyway", você também deve marcar um revisor ou gerenciador do projeto e explicar o motivo do aviso ter sido ignorado nesse caso.

## Translation Best Practices

Follow these guidelines to ensure our translations are as accurate as possible:

- Do not translate the content within `<code>` tags. These tags indicate text that is found in code and should be left in English.
- Do not add additional content. If you feel a challenge requires changes in the text content or additional information, you should propose the changes through a GitHub issue or a pull request that modifies the English file.
- Do not change the order of content.

If you have any questions, feel free to reach out to us in our [contributors chat room](https://chat.freecodecamp.org/channel/contributors) and we will be happy to assist you.
