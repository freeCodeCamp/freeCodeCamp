# Como traduzir arquivos do freeCodeCamp

É nosso sonho fornecer recursos para você aprender, não importando qual idioma fala. Para nos ajudar com isso, integramos nosso código fonte open-source & com [Crowdin](https://crowdin.com/). Uma ferramenta que nos ajuda traduzir nosso código fonte.

O fluxo de tradução é divido em duas principais atividades:

- **Traduzindo** arquivos do currículo, documentação e elementos de interface como botões, rótulos e etc.:

  Como um tradutor você pode se cadastrar em [nossa plataforma de tradução](https://translate.freecodecamp.org) e contribuir com traduções em 30+ idiomas disponíveis.

- **Revisando** as traduções de todo conteúdo.

  Revisores verificam se as traduções da comunidade tem um tom uniforme e não contenham problemas como erros de digitação e etc. Resumidamente, eles garatem a alta qualidade das traduções. Note que nós não usamos máquina nas traduções por um motivo.

> [!WARNING] Nós não usamos mais o GitHub para traduzir arquivos diretamente. Se você está voltando a contribuir, se direcione para nossa [plataforma de tradução](https://translate.freecodecamp.org/).

## Prepare-se para as contribuições

> O roadmap de localização da freeCodeCamp - Não há limites

Você pode traduzir o quanto você quer, e quando você puder. O que realmente importa é o quanto de tempo e energia está disposto a investir como um voluntário de tradução.

Nós apenas pedimos que entenda os seguintes pontos:

1. **As traduções são um esforço em equipe.**

   A tradução dos recursos da freeCodeCamp é uma das mais divertidas e gratificantes como um contribuidor, e funciona melhor quando está envolvida em amigos e colegas que falam o mesmo idioma que você.

   Nós recomendamos que entre [em nosso fórum da comunidade](https://forum.freecodecamp.org/c/contributors/3) e na [sala de chat dos tradutores](https://chat.freecodecamp.org/channel/contributors) com seus amigos e mostre seu interesse antes de começar a traduzir. A ferramenta Crowdin facilita a contribuição com traduções, mas ainda há bastante trabalho.

   Nós esperamos que você goste de contribuir e não venha a se sentir esgotado ou perder o interesse.

   Um grupo pequeno de 4 à 5 indivíduos é um bom tamanho para iniciar o nicho para o seu idioma no mundo. Você pode, então, recrutar cada vez mais amigos para se juntarem ao time.

2. **Custa muito aos servidores rodar cada linguagem.**

   Na superfície, os componentes técnicos não parecem ser tão complicados, mas, para que os componentes continuem rodando, há um alto custo. Nisto está incluso o provisionamento adicional de servidores e uma equipe dedicada para que possam cuidar deles.

   A freeCodeCamp.org comprometeu-se em providenciar de forma gratuita como sempre. No entanto, precisamos priorizar os recursos para os que mais necessitam. A última coisa que queremos é desligar os servidores para uma linguagem se a atividade de tradução encerrar e se tornar desatualizada.

   Quando cada linguagem alcançar pelo menos algumas certificações no currículo, nós podemos começar a implantar a linguagem no [`/learn`](https://www.freecodecamp.org/learn) enquanto você continua a traduzir o restante das certificações.

   Por exemplo, gostaríamos de implantar pelo menos todo o conjunto do front-end das certificações quando entregarmos uma nova linguagem pela primeira vez.

3. **E quanto às linguagens que não estão listadas na plataforma de tradução?**

   Nós buscamos em nossa base de usuários e adicionamos os mais de 30 idiomas mais falados para a lista de idiomas habilitados na plataforma de traduções. Alguns idiomas, como o chinês e o espanhol já estão implantados no **/learn** neste momento.

   Infelizmente, a lista não inclui as centenas de idiomas existentes lá fora. Nós recebemos dezenas de requisições de contribuidores que como você todo dia. Eles também gostariam de ajudar na tradução do site no idioma que falam.

   Nós estamos definitivamente torcendo para adicionar mais idiomas na lista, mas, como você já sabe, só seria viável se conseguíssemos um impulso suficiente em torno de um idioma.

   Se você gostaria nós incluíssemos um novo idioma, nós recomendamos que você deixe seus amigos animados com isso.

   Quando você tem um pequeno grupo de pessoas (pelo menos 4-5) interessadas e comprometida, nós podemos entrar em contato. Nós vamos explicar todos os detalhes e orientar você em algumas das ferramenta e processos.

## Primeiros passos

Primeiro, tenha certeza de vir dar uma "Oi" na nossa [sala de chat de tradutores](https://chat.freecodecamp.org/channel/contributors). Nós postamos atualizações regulares sobre recursos de tradução e respondemos à muitas de suas dúvidas lá.

Próximo, vá para a nossa [plataforma de tradução](https://translate.freecodecamp.org/) e faça o login (se você não contribuiu com traduções anteriormente, você precisará criar uma conta).

Finalmente, faça o nosso passo a passo abaixo para entender as ferramentas de tradução e fluxos de trabalho à sua disposição.

Boa tradução.

## Selecione um projeto e um arquivo

Quando você visita a plataforma de tradução, você deve ver múltiplos "projetos" disponíveis para tradução:

1. Projeto de [Contribuição de documentação](https://translate.freecodecamp.org/contributing-docs), que contém os arquivos para a documentação deste site.
2. Projeto de [Programação do currículo](https://translate.freecodecamp.org/curriculum), que contém nossos arquivos de desafios para nosso curriculum.
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
4. Se um contribuinte propôs uma tradução para uma string, o Crowdin vai mostrar a proposta aqui. Você não pode salvar uma tradução idêntica - ao invés disso, se a tradução estiver precisa, você deve clicar no ícone `+` para "aprová-la".  Uma tradução imprecisa pode ser "desaprovada" com o ícone `-`.
5. O Crowdin vai recomendar traduções baseadas na TM (Translation Memory) ou na MT (Machine Translation). Translation Memory se refere a strings similares ou idênticas que já foram traduzidas/aprovadas em outros arquivos. Machine Translation refere-se a traduções recomendadas por bibliotecas integradas.
6. Esse é o painel do editor, onde você pode propor traduções para a string selecionada.
7. A string selecionada no editor estará marcada em amarelo.
8. Aqui você verá tags indicando o estado da string. `Done` significa que a string possui pelo menos uma proposta de tradução. `Todo` significa que a string não possui nenhuma proposta de tradução.
9. Aqui você pode ver a janela de comentários. Se você tem perguntas ou preocupações acerca de uma string em particular, você pode comentar aqui para que outros tradutores vejam.
10. Esses dois "botões de painel" esconderão o documento à esquerda e os comentários à direita.

> [!NOTE] Se você encontrar uma string escondida que inclui traduções, notifique-a na [sala de chat dos tradutores](https://chat.freecodecamp.org/channel/contributors) para que possamos remover a tradução da memória.

Quando tiver terminado de traduzir uma string, clique em `Save` para salvar sua tradução no Crowdin.  Outros contribuintes poderão votar em sua tradução e os revisores poderão aprová-la.

Você é bem-vindo para traduzir quantas strings quiser - não há nenhuma etapa adicional requerida quando você completar um arquivo inteiro ou propor uma nova tradução. Clicar em `Save` é tudo que você precisa para salvar sua tradução.

> [!NOTE] Se você ver algo no arquivo fonte em inglês que esteja impreciso ou incorreto, não conserte pelo mecanismo de tradução. No lugar, deixe um comentário na string para nos notificar de uma discrepância ou crie uma issue no GitHub.

## Traduzir a documentação

Traduzir nossa documentação de contribuição é similar a traduzir nossos arquivos de currículo.

> [!NOTE] Nossa documentação de contribuição utiliza `docsify`, e nós temos uma análise especial para caixas de mensagem como essa.  Caso veja strings iniciadas com `[!NOTE]`, `[!WARNING]`, ou `[!TIP]`, essas palavras NÃO devem ser traduzidas.

## Avaliar traduções

O Crowdin permite que você avalie propostas de tradução existentes. Se você tentar salvar uma tradução, você pode ver uma mensagem indicando que você não pode salvar a duplicata de uma tradução - isso significa que outro contribuinte já propôs uma tradução idêntica. Se você concorda com aquela tradução, clique em `+` para "aprová-la".

Se você ver uma tradução que não possui a mesma clareza da string original, clique em `-` para "desaprová-la".

O Crowdin usa esses votos para pontuar cada proposta de tradução de cada string, o que ajuda o time de revisão a determinar qual tradução é a melhor para cada string.

## Verificações de qualidade

Nós disponibilizamos algumas verificações de qualidade para assegurar que as traduções estejam precisas - isso ajuda nossos revisores a analisarem as traduções propostas.

Quando você tenta salvar uma tradução, talvez veja uma mensagem de aviso aparecer a respeito da sua tradução proposta.

![Imagem - Mensagem de aviso](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

Essa mensagem aparece quando o sistema QA (Verificação de Qualidade) do Crowdin identificou algum erro em potencial na tradução proposta. Nesse exemplo, nós modificamos o texto da tag `<code>` e o sistema viu isto.

> [!WARNING] Você tem a opção de salvar uma tradução apesar dos erros. Se fizer isso, clicando em "Save Anyway", você também deve marcar um revisor ou gerenciador do projeto e explicar o motivo do aviso ter sido ignorado nesse caso.

## Boas práticas na tradução

Siga essas diretrizes para se certificar de que nossas traduções estão o mais precisas possível:

- Não traduza o conteúdo dentro de tags `<code>`. Essas tags indicam que o texto está formatado para o código e deve ser deixado em inglês.
- Não adicione conteúdo extra. Se você acha que um desafio necessita de mudanças no texto e conteúdo adicional, você deve propor as mudanças através de uma issue no GitHub ou um pull request que modifique o arquivo em inglês.
- Não mude a ordem do conteúdo.

Se você tiver alguma dúvida, sinta-se a vontade para entrar em contato conosco através da [sala de chat dos tradutores](https://chat.freecodecamp.org/channel/contributors) e nós ficaremos felizes em te ajudar.
