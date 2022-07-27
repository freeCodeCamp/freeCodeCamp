# Como traduzir arquivos do freeCodeCamp

## Prepare-se para as contribuições

> O roadmap de localização do freeCodeCamp - não há limites de velocidade

> [!TIP] Você pode começar lendo [este anúncio](https://www.freecodecamp.org/portuguese/news/como-ajudar-a-traduzir-o-freecodecamp-para-seu-idioma/). Recomendamos que entre [em nosso fórum da comunidade](https://forum.freecodecamp.org/c/contributors/3) e [no servidor de chat do Discord](https://discord.gg/PRyKn3Vbay).

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

> [!NOTE] Usamos uma ferramenta e um fluxo de trabalho diferentes para traduzir os [artigos do editorial](https://www.freecodecamp.org/news). Se você estiver interessado em traduzir artigos, leia [este anúncio](https://www.freecodecamp.org/portuguese/news/como-ajudar-a-traduzir-o-freecodecamp-para-seu-idioma/) e entre em contato com o líder das traduções para o seu idioma.

O fluxo de tradução é dividido em duas atividades principais:

- **Traduzir** arquivos do currículo, documentação e elementos da interface como botões, rótulos e etc.:

  Como um tradutor, você pode se cadastrar em [nossa plataforma de tradução](https://translate.freecodecamp.org) e contribuir com traduções em mais de 30 idiomas disponíveis.

- **Revisar** as traduções de todo conteúdo.

  Os revisores verificam se as traduções da comunidade têm um tom uniforme e não contêm problemas como erros de digitação, entre outros. Resumidamente, eles garantem a alta qualidade das traduções. Note que nós não usamos tradução automática por um motivo.

> [!WARNING] Não usamos mais o GitHub para traduzir arquivos diretamente. Se você está voltando a contribuir, vá para nossa [plataforma de tradução](https://translate.freecodecamp.org/).

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

> [!NOTE] Quando o editor abrir, você precisará clicar no ícone de configurações (mostrado como uma engrenagem) e mudar a configuração 'HTML tags displaying' para 'SHOW'. Isso garantirá que você verá tags como `<code></code>` ao invés de `<0></0>`.

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

> [!NOTE] Se você encontrar uma string escondida que inclui traduções, notifique-a no [servidor do Discord](https://discord.gg/PRyKn3Vbay) para que possamos remover a tradução da memória.

Quando tiver terminado de traduzir uma string, clique em `Save` para salvar sua tradução no Crowdin.  Outros contribuintes poderão votar em sua tradução e os revisores poderão aprová-la.

Fique à vontade para traduzir quantas strings quiser - não há nenhuma etapa adicional requerida quando você completar um arquivo inteiro ou propor uma nova tradução. Clicar em `Save` é tudo de que você precisa para salvar sua tradução.

> [!NOTE] Se você ver algo no arquivo fonte em Inglês que esteja impreciso ou incorreto, por favor não conserte-o pelo mecanismo de tradução. No lugar, deixe um comentário na string para nos notificar de uma discrepância ou crie uma "GitHub issue".

## Traduzir a interface de aprendizagem

Nossa interface `/learn` depende de arquivos JSON carregados em um plugin i18n para gerar o texto traduzido. Esse esforço de tradução está dividido entre o Crowdin e o GitHub.

### No GitHub

Os arquivos `links.json`, `meta-tags.json`, `motivation.json` e `trending.json` contêm informações que precisam ser atualizadas para refletirem em seu idioma. No entanto, não podemos carregá-los no Crowdin, já que seu conteúdo não seria uma tradução direta.

Esses arquivos provavelmente serão atualizados pelo líder do seu idioma, mas fique à vontade para [ler sobre como os traduzimos](language-lead-handbook.md).

### No Crowdin

> [!ATTENTION] Não edite o seguintes arquivos por meio de um PR no GitHub.

Os arquivos `intro.json` e `translations.json` são traduzidos no Crowdin, no projeto Learn User Interface (Learn UI). A tradução dessas traduções pode ser um pouco complicada, já que cada valor JSON individual tem sua própria sequência de caracteres e, às vezes, o contexto não é suficiente.

Porém, as informações de `Context` fornecidas no Crowdin podem ajudar a entender onde a string se encaixa em uma estrutura maior.

![Imagem com uma seta apontando para as informações de contexto do Crowdin](https://contribute.freecodecamp.org/images/crowdin/context.png)

Se tiver perguntas sobre onde uma string se encaixa em seu contexto, fale conosco no [chat dos colaboradores](https://discord.gg/PRyKn3Vbay).

## Traduzir a documentação

Traduzir nossa documentação de contribuição é similar a traduzir nossos arquivos de currículo.

> [!NOTE] Nossa documentação de contribuição utiliza`docsify`, e nós temos  uma análise especial para caixas de mensagem como essa.  Caso veja strings iniciadas com `[!NOTE]`, `[!WARNING]`, ou `[!TIP]`, essas palavras NÃO devem ser traduzidas.

### Como traduzir a documentação com links internos

Quando você trabalha na tradução da documentação de contribuição, fique atento aos links internos direcionados a uma seção diferente da documentação.

Certifique-se de substituir o id da seção de destino (a parte depois de `#`) pelo id do documento traduzido. Por exemplo, essa será a aparência em português:

Antes da tradução

```
// em HTML
<a href="nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino">Link text</a>
<a href="#id-do-cabeçalho-da-seção-de-destino">Link text</a>

// em Markdown
[Link text](nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino)
[Link text](#id-do-cabeçalho-da-seção-de-destino)
```

Após a tradução

```
// em HTML
<a href="nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino">Texto do link</a>
<a href="#id-do-cabeçalho-da-seção-de-destino">Texto do link</a>

// em Markdown
[Texto do link](nome-do-arquivo-de-destino.md#id-do-cabeçalho-da-seção-de-destino)
[Texto do link](#id-do-cabeçalho-da-seção-de-destino)
```

Os arquivos na documentação são escritos em markdown, mas eles aparecerão como tags HTML no Crowdin.

Você pode descobrir como o `docsify` converte uma string em seu idioma em um ID, analisando as páginas traduzidas. Se a tradução ainda não  tiver sido implementada, você pode pré-visualizá-la [executando o site da documentação localmente](how-to-work-on-the-docs-theme.md#serving-the-documentation-site-locally).

Você pode aprender mais sobre [links internos em nossa documentação aqui](how-to-work-on-the-docs-theme.md#how-to-create-an-internal-link).

## Traduzir o RPG LearnToCode

O RPG LearnToCode é executado no Ren'Py, que usa uma sintaxe especial para strings traduzidas: (Consulte a [documentação sobre textos do Ren'Py](https://www.renpy.org/doc/html/text.html))

- As frases a serem traduzidas estarão sempre entre `""`. Elas são diálogos ou strings da UI. As palavras-chave que vêm antes ou depois do diálogo são palavras-chave de controle do mecanismo do jogo e serão explicadas em detalhes nas regras subsequentes. Observe que esta primeira regra rege todas as regras subsequentes listadas.
- No caso de `new "..."`, não traduza a palavra-chave `new`.
- Prefixos como `player`, `annika`, `layla`, `marco` (ou variantes como `player happy`, `player @ happy`) não devem ser traduzidos. Eles são palavras-chave de controle para exibir corretamente a imagem do personagem no jogo.
- Textos após as aspas do diálogo, como `nointeract`, não devem ser traduzidos.
- Não traduza o que estiver entre `[]` e `{}`. Estas são interpolações de variáveis e tags de texto. Estes parênteses devem permanecer com metade da largura `[]` e `{}` em vez de seus equivalentes de largura total `【】` e `「」`
- Não traduza a palavra-chave `nointeract` ao final da frase.
- Se tentarmos usar parênteses de largura total `（）`, receberemos um aviso de controle de qualidade (QA). Para evitar o aviso de QA, use parênteses com metade da largura `()`

### Exemplos

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

Observação: as tags `[]` e `{}` devem permanecer intactas.

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

Observação: novamente, o prefixo `new` e a tag `{icon=icon-fast-forward}` devem ser mantidos intactos.

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

Observação: `layla @ neutral` e `[player_name]` permanecem inalterados.

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

### Uma observação sobre o modo como o Crowdin segmenta uma frase

Preste atenção na maneira como o Crowdin segmenta uma linha de diálogo envolvida por aspas de abertura e fechamento `""`. Quando traduzirmos o diálogo, temos de manter as aspas de abertura e fechamento, mesmo que as aspas apareçam em diferentes segmentos.

Esta é a linha que precisa ser traduzida:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

O Crowdin segmenta a string em três partes, como vemos abaixo:

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

## Avaliar Traduções

Crowdin permite que você avalie propostas de tradução existentes. Se você tentar salvar uma tradução, você pode ver uma mensagem indicando que você não pode salvar a duplicata de uma tradução - isso significa que outro contribuinte já propôs uma tradução idêntica. Se você concorda com aquela tradução, clique em `+` para "aprová-la".

Se você ver uma tradução que não possui a mesma clareza da string original, clique em `-` para "desaprová-la".

Crowdin usa esses votos para pontuar cada proposta de tradução de cada string, o que ajuda o time de revisão a determinar qual tradução é a melhor para cada string.

## Verificações de qualidade

Nós disponibilizamos algumas verificações de qualidade para assegurar que as traduções estejam precisas - isso ajuda nossos revisores a analisarem as traduções propostas.

Quando você tenta salvar uma tradução, talvez veja uma mensagem de aviso aparecer a respeito da sua tradução proposta.

![Imagem - Mensagem de aviso de QA](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

Essa mensagem aparece quando o sistema QA (Verificação de Qualidade) do Crowdin identificou algum erro em potencial na tradução proposta. Nesse exemplo, nós modificamos o texto da tag `<code>` e o sistema viu isto.

> [!WARNING] Você tem a opção de salvar uma tradução apesar dos erros. Se fizer isso, clicando em "Save Anyway", você também deve marcar um revisor ou gerenciador do projeto e explicar o motivo do aviso ter sido ignorado nesse caso.

## Boas práticas na tradução

Siga essas diretrizes para se certificar de que nossas traduções estão o mais precisas possível:

- Não traduza o conteúdo dentro de tags `<code>`. Essas tags indicam que o texto está formatado para o código e deve ser deixado em inglês.
- Não adicione conteúdo extra. Se você acha que um desafio necessita de mudanças no texto e conteúdo adicional, você deve propor as mudanças através de uma issue no GitHub ou um pull request que modifique o arquivo em inglês.
- Não mude a ordem do conteúdo.

Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato conosco através do [servidor do Discord](https://discord.gg/PRyKn3Vbay) e nós ficaremos felizes em ajudar você.
