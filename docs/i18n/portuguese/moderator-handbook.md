# O manual oficial para os moderadores do freeCodeCamp

Esse manual vai ajudá-lo a moderar lugares diferentes em nossa comunidade. Ele cobre conversas e interações nos tópicos de "pull request" e "issues" do GitHub, no fórum da comunidade, nas salas de conversa e em outras comunidades oficiais fomentadas por nós.

> [!NOTE] Todos os moderadores do freeCodeCamp são moderadores de toda a comunidade. Isso significa que confiamos em você para supervisionar qualquer um destes lugares.

Você pode atuar como moderador em qualquer uma das plataformas de seu interesse. Alguns moderadores ajudam apenas no GitHub, enquanto outros ajudam apenas no fórum. Outros moderadores estão ativos em todos os lugares.

O mais importante é que queremos que você goste de ser um moderador, investindo seu tempo escasso em lugares que sejam de interesse para você.

> "Com grandes poderes vêm grandes responsabilidades." - Tio Ben

Como moderador, seu temperamento é mais importante do que habilidade técnica.

Escute. Seja útil. Não abuse do seu poder.

O freeCodeCamp é uma comunidade inclusiva e temos de mantê-la assim.

Temos um único [Código de Conduta](https://code-of-conduct.freecodecamp.org), que rege toda a nossa comunidade. Quanto menos regras, mais fáceis elas são de lembrar. Você pode ler essas regras e guardá-las na memória [aqui](https://code-of-conduct.freecodecamp.org).

> [!NOTE] Como moderador, nós adicionaríamos você a um ou mais times no GitHub, nos nossos fóruns comunitários e nos servidores de chat. Caso você não tenha acesso a uma plataforma que queira moderar,  [entre em contato com um membro da equipe](FAQ.md#additional-assistance).

## Moderando no GitHub

Moderadores têm duas responsabilidades primárias em relação ao GitHub:

1. Avaliar e responder "issues".
2. Revisar e dar "merge" nos "pull requests" (também conhecido como controle de qualidade).

### Moderando issues do GitHub

Nós usamos nosso repositório principal [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) como a central de rastreamento de "issues" para todos os nossos repositórios. Todos os dias recebemos novas issues. Todas elas precisam ser testadas e identificadas. Esse é também um ótimo lugar para começar a ajudar repositórios de código aberto com suas contribuições.

#### Triagem de issues

[Triagem](https://en.wikipedia.org/wiki/Triage) é um processo de priorizar atenção a cada nova issue. Nós temos uma lista extensa de etiquetas que usamos para marcar a prioridade, categoria, situação e escopo de cada issue.

Você pode nos ajudar a organizar e moderar issues usando etiquetas [dessa lista](https://github.com/freeCodeCamp/freeCodeCamp/labels). Normalmente, uma descrição é disponibilizada juntamente com a etiqueta, explicando o seu significado.

Preste atenção especial às etiquetas `"help wanted"` e `"first timers only"`. Elas devem ser adicionadas aos tópicos que você considere que possam ser abertos aos potenciais contribuidores para realizar um "pull request".

Para a triagem de uma issue trivial como uma correção de ortografia, é recomendado aplicar uma etiqueta "first timers only" juntamente com informações adicionais. Você pode usar o [modelo de resposta](reply-templates.md#first-timer-only-issues) fornecido para esta finalidade.

#### Fechando issues e pull requests parados, desatualizados ou inativos

- Issues ou PRs parados são aqueles que não tiveram nenhuma interação do criador por 21 dias (3 semanas desde a última interação), mas apenas depois que um moderador pediu mais informações/mudanças.

- Atividade é definida como: comentários solicitando uma atualização no PR e triagens como a etiqueta `status: update needed`, entre outras.

- Se o criador do PR pedir assistência adicional ou mais tempo, as regras acima podem ser revistas após uma resposta. Em todo caso, os moderadores devem usar o melhor julgamento para resolverem o estado do PR.

> [!TIP] Recomendamos usar essa lista de [modelos de resposta](reply-templates.md) padrão enquanto estiver monitorando issues.

### Moderando pull requests

Pull Requests (PRs) são como os colaboradores enviam alterações para o repositório do freeCodeCamp. Nós temos que garantir a qualidade dos pull requests antes de decidirmos fazer merge, pedir mudanças ou fechá-los.

#### Tipos de pull requests

1. **Edições das instruções de desafios**

   Essas são mudanças no texto dos desafios - no texto da descrição, da instrução ou do teste.

   Você também pode revisar isso diretamente no GitHub e decidir fazer merge ou não. Precisamos ter um pouco mais de cuidado com relação a isso, pois milhões de pessoas encontrarão este texto enquanto usam o currículo do freeCodeCamp. O pull request deixa o texto mais claro sem deixá-lo muito mais longo? As edições são relevantes e não são excessivamente pedantes? Lembre-se que nosso objetivo é que os desafios sejam mais claros e curtos dentro do possível. Não são o lugar para detalhes obscuros. Os contribuidores talvez tentem adicionar links para recursos dos desafios.

   Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](reply-templates.md#closing-invalid-pull-requests).

   Se as mudanças parecem boas, por favor aprove-as comentando "LGTM" (Looks Good To Me - me parece bom, em inglês). Uma vez que um pull request tiver pelo menos duas aprovações (incluindo a sua) dos moderadores ou equipe de desenvolvedores, você pode fazer o merge.

2. **Edições de código de desafio**

   São mudanças feitas no código do desafio - o objetivo do desafio, a solução do desafio e o texto.

   Esses pull requests precisam ser baixados do GitHub e testados no seu computador ou GitPod para garantir que os testes do desafio ainda passam com a solução atual e para garantir que o novo código não introduz nenhum erro.

   Alguns contribuidores podem tentar adicionar mais testes para cobrir casos confusos pedantes. Precisamos ter cuidado para não deixarmos o desafio muito complicado. Esses desafios e seus testes devem ser simples e intuitivos na medida do possível. Além dos desafios de algoritmo e a seção de preparação para entrevistas, os estudantes devem ser capazes de resolver cada desafio em aproximadamente 2 minutos.

   Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](reply-templates.md#closing-invalid-pull-requests).

   Se as mudanças parecem boas, por favor aprove-as comentando "LGTM". Uma vez que um pull request tiver pelo menos duas aprovações (incluindo a sua) dos moderadores ou equipe de desenvolvedores, você pode fazer o merge.

3. **Mudanças na plataforma**

   Essas edições de código mudam a funcionalidade da plataforma freeCodeCamp em si.

   Às vezes os contribuidores tentam fazer mudanças sem muita explicação, mas para mudanças no código, precisamos garantir que há uma necessidade genuína para a mudança. Esses pull requests devem referenciar uma issue existente no GitHub onde os motivos para a mudança são discutidos. Então você pode abrir o pull request no seu computador e testá-lo localmente.

   Depois de pronto, se as mudanças estão boas, não faça o merge ainda. Você pode comentar "LGTM" no pull request e mencionar **"@freeCodeCamp/dev-team"** para eles darem uma olhada.

4. **Pull Requests automáticos (Dependabot)**

   Alguns PRs são atualizações de dependência automáticos feitos a partir de uma integração. Você não deve dar merge ou aprovar esses PRs. Um dos membros do time de desenvolvimento cuidará da revisão e irá dar merge em PRs automáticos.

#### Como revisar, fazer o merge ou fechar pull requests

##### Seja responsável por um pull request:

Em primeiro lugar, quando você escolhe um pull request para revisar, você deve atribuí-lo a si mesmo. Você pode fazer isso clicando no link "assign yourself" abaixo da parte "assignees" na coluna da direita da interface do GitHub.

Dependendo do tipo de pull request, siga as regras correspondentes listadas anteriormente.

##### Certifique-se de que as verificações de CI passaram:

Antes de dar merge em qualquer pull request, certifique-se de que haja um aviso dizendo que todos os testes passaram (todos marcados em verde) no pull request. Se alguma das verificações falhou, investigue e tente descobrir qual é a causa raíz. A mudança proposta está quebrando nossos testes? O site vai compilar corretamente se darmos merge no PR? Essas verificações são importantes para a estabilidade da plataforma.

> [!WARNING] Fazer merge em um PR que falhou nas verificações CI/CD pode causar dificuldades para todas as partes interessadas, incluindo o time de desenvolvimento e contribuidores.

##### Lidando com conflitos de merge:

Às vezes haverá um conflito de merges.

Isso quer dizer que outro pull request fez mudanças na mesma parte de um arquivo. O GitHub tem uma ferramenta para resolver esses conflitos de merges diretamente no GitHub. Você pode tentar resolver esses conflitos. Use seu melhor julgamento.

As mudanças do pull request estarão no topo e as mudanças da branch principal (main) estarão embaixo. Às vezes, haverá informação redundante que pode ser apagada. Antes de terminar, certifique-se de excluir o `<<<<<<`, `======` e o `>>>>>>` que o Git adiciona para indicar áreas de conflito.

Se não tem certeza, peça ajuda para algum moderador ou para o time de desenvolvimento.

##### Fazendo merge em um pull request válido:

Se o pull request parece pronto para merge (e não requer aprovações adicionais - lembre-se, precisamos de pelo menos duas), você pode ir em frente e fazer o merge. Certifique-se de usar a opção padrão **"Squash and Merge"**. Isto vai comprimir todos os commits de pull requests em um único commit, o que deixará o histórico do Git muito mais fácil de ler.

> Em seguida, você deve comentar no pull request, agradecendo ao colaborador usando sua própria maneira pessoal!

Se o autor do pull request estiver contribuindo pela primeira vez, você também deve parabenizá-lo(a) pelo seu primeiro merge no repositório. Pode-se olhar para o canto superior direito do corpo do PR para saber se é a primeira contribuição da pessoa. Mostrará `First-time contributor` assim:

<details>
   <summary>
      Identificação de First-time contributor nos pull requests (captura de tela)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="Identificação de First-time contributor nos pull requests" />
</details>

Se o pull request não parece pronto para fazer o merge, você pode responder educadamente dizendo ao autor o que ele deve fazer para prepará-lo. Com sorte, ele responderá e deixará o pull request mais próximo de ficar pronto.

Se você precisar de uma segunda opinião em um pull request, vá em frente e deixe seus comentários nele, em seguida, adicione o rótulo "discussing".

##### Fechando um pull request inválido:

Muitas vezes, um pull request será obviamente de baixo esforço. Muitas vezes, você perceberá isso imediatamente quando o colaborador não se importar em verificar os checkboxes do template de requisição de pull request ou quando ele utilizar um título de pull request genérico como "Alterações feitas" ou "Atualizar índice.md".

Há também situações em que o colaborador está tentando adicionar um link para o seu próprio site, incluir uma biblioteca que criou, ou tem uma edição frívola que não serve para ajudar ninguém, exceto a si mesmo.

Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](reply-templates.md#closing-invalid-pull-requests).

#### Outras diretrizes para moderadores no GitHub

Embora você tenha acesso de escrita ao repositório do freeCodeCamp, **você nunca deve enviar o código diretamente para repositórios do freeCodeCamp**. Todos os códigos devem entrar na base de código do freeCodeCamp em forma de pull request a partir de um fork do repositório.

Além disso, você nunca deve aceitar seus próprios PRs. Outro moderador deve revisá-los, assim como qualquer outro PR.

Se você notar que alguém quebrou o [Código de Conduta](https://code-of-conduct.freecodecamp.org) em issues do GitHub, ou abriu pull requests com conteúdo ou código malicioso, mande um e-mail para `support[at]freecodecamp.org` com o link do pull request e podemos considerar bani-los da organização do freeCodeCamp no GitHub.

## Moderando o Fórum

Como moderador, você ajuda a manter nossa comunidade um lugar agradável para qualquer pessoa aprender e buscar ajuda. Você lidará com postagens sinalizadas e tratará spam, mensagens fora do assunto e outras conversas inapropriadas.

Note que, ao se tornar um moderador no fórum, você vai começar a ver dicas azuis sobre os membros do fórum, como "esta é a primeira vez que [person] postou - vamos dar as boas-vindas à comunidade!" ou "[person] não postou há muito tempo - vamos recebê-lo de volta."

![Uma mensagem de texto azul dizendo "esta é a primeira vez que [person] postou - vamos dar as boas-vindas à comunidade!](https://i.imgur.com/mPmVgzK.png)

São oportunidades para você recebê-lo(a) e fazê-lo(a) sentir-se mais especial. Nunca se sabe quais pessoas que estão pouco envolvidas e que podem ser nossos próximos superajudantes, ajudando muitas outras pessoas na sua jornada de programação. Mesmo a menor bondade pode desencadear várias boas ações.

### Excluindo publicações do fórum

Moderadores do fórum podem apagar as postagens dos usuários. Você só deve fazer isso para as seguintes instâncias:

1. Alguém postou uma imagem pornográfica ou graficamente violenta.
2. Alguém postou um link ou código de natureza maliciosa que pode prejudicar os(as) outros(as) usuários(as) freeCodeCamp que clicarem nele.
3. Alguém lotou um tópico com muitas mensagens de spam.
4. Uma conta foi criada, sem qualquer sombra de dúvida, com o intuito de fazer spam.

### Lidando com spam

Para o primeiro post de spam de um usuário legítimo (ou seja, cuja intenção não é fazer spam no fórum, mas sim  de aprender/contribuir), envie uma mensagem explicando o problema e remova o link ou post apropriadamente. Deixe uma observação no perfil do usuário explicando a ação que você tomou. Se o problema persistir, então bloqueie silenciosamente o usuário de postar (usando a opção de silêncio no painel de Administração de Usuário). Envie ao usuário um aviso com o [Código de Conduta](https://code-of-conduct.freecodecamp.org). Marque a opção na mensagem privada que indica que a sua mensagem é um "aviso formal."

Como moderador, você pode fazer perguntas e relatar incidentes na [seção do fórum da equipe de moderadores](https://forum.freecodecamp.org/c/mod-team/4).

### Lidando com conversas fora do assunto

Postagens ou tópicos que parecem estar no lugar errado podem ser renomeados para o que for apropriado.

Em circunstâncias excepcionais, pode ser apropriado que um moderador faça o fork de uma discussão em vários assuntos.

Novamente, se você tiver algum problema ou dúvida, faça uma postagem com suas ações na categoria `"Staff"`, e marque outro moderador se você quiser que eles revisem suas ações de moderação.

### Lidando com soluções publicadas

Se um usuário responder em uma thread de ajuda para o currículo do freeCodeCamp com uma solução, remova-a e use a resposta pronta **Solution Instead of Help** (ou uma resposta semelhante em suas próprias palavras).

Se o OP (pessoa que publicou o pedido de ajuda original) responder em sua própria thread de ajuda para o currículo do freeCodeCamp com sua solução final, desfoque-a e use a resposta pronta **Blurred Spoiler Solution**.

Se um usuário criar uma thread pedindo feedback de uma solução, mova o tópico para o subfórum de feedback e desfoque a solução, conforme necessário. Se o usuário estiver apenas publicando a solução para se exibir, reitre o tópico das listas e use a resposta pronta **Solutions Thread**.

### Usuários menores de idade

Nossos [termos de serviço](https://freecodecamp.org/terms) requerem que os usuários do freeCodeCamp tenham, pelo menos, 13 anos de idade. Se um usuário revelar que ele tem menos de 13 anos de idade, envie-lhe a mensagem abaixo e suspenda a conta. Em seguida, **envie um email para `support[at]freecodecamp.org` para excluir as contas do usuário de freeCodeCamp/learn e do fórum (fornecendo um link para a conta ilícita do fórum).**

```markdown
ASSUNTO: Usuários com menos de 13 anos não têm permissão para usar o fórum de acordo com os nossos Termos de Serviço.

Chegou à nossa atenção o fato de que você tem menos de 13 anos de idade. Segundo os [Termos de Serviço do freeCodeCamp](https://freecodecamp.org/terms), você deve ter pelo menos 13 anos de idade para usar o site ou fórum. Apagaremos suas contas do fórum e do site freeCodeCamp. Essa restrição nos deixa em acordo com as leis dos Estados Unidos.

Por favor, compareça quando estiver com pelo menos 13 anos de idade.

Obrigado(a) pela compreensão.
```

### Moderando via celular

É possível moderar o fórum por um celular, mas você pode encontrar algumas peculiaridades. Esta não é uma lista exaustiva.

- Ao tentar incluir uma "Resposta pronta" em uma resposta, se o menu não abrir (após clicar na engrenagem), clique na área de texto primeiro e tente novamente.
- A 'ferramenta de chave' do moderador está na parte inferior da janela de visualização, mas, se você clicar nela e não puder ver o botão "Select Posts" (Selecionar Posts) pelo fato de ele estar fora de visualização, você pode precisar rolar até ele, embora, às vezes, isso não funcione. Neste caso, pode ser necessário passar para um monitor desktop/laptop.
- Às vezes, clicar no menu de três pontos abaixo de uma postagem pode ocultar o ícone de resposta. Recarregue a página para recuperá-la.

## Moderando no Facebook

Se você ver algo que pareça quebrar nosso [código de conduta](https://code-of-conduct.freecodecamp.org/), exclua imediatamente.

Às vezes, as pessoas publicarão coisas que acham engraçadas. Elas não percebem que o que disseram ou compartilharam pode ser interpretado como ofensivo. Você deve excluir essas publicações, mas não necessariamente banir a pessoa. Espera-se que o usuário entenda que aquilo que postou foi inapropriado, pois a postagem foi apagada.

Mas se é um delito flagrante, isso não pode razoavelmente ser atribuído a uma diferença cultural ou a um mal-entendido da língua inglesa. Nesse caso, você deve considerar fortemente bloquear o membro do grupo do Facebook.

## Moderando o Discord

É assim que os moderadores lidam com violações do nosso [Código de Conduta](https://code-of-conduct.freecodecamp.org/) em nosso servidor de bate-papo:

> [!NOTE] O Camperbot serve como nosso bot de moderação, e todos os comandos usam a interface de comando nativa do Discord. Você pode ver uma lista de todos os comandos digitando `/` em qualquer canal.

1. **Certifique-se de que o usuário tentou violar o [Código de Conduta](https://code-of-conduct.freecodecamp.org).**

   Nem todas as violações do [Código de Conduta](https://code-of-conduct.freecodecamp.org) têm esse propósito. Um novo usuário do freeCodeCamp pode postar uma grande quantidade de códigos para ajudar, sem notar que isso pode ser disruptivo para a conversa. Nesses casos, você pode simplesmente pedir para que eles coloquem seus códigos em serviços como Codepen ou Pastebin.

2. **Se o camper violar clara e intencionalmente o [Código de Conduta](https://code-of-conduct.freecodecamp.org), o moderador procederá da seguinte forma:**

   Para delitos menores, um aviso pode ser emitido com o comando `/warn`. Para mais erros flagrantes, você pode remover o membro do servidor temporariamente com o comando `/kick` ou permanentemente com o comando `/ban`. Em alguns casos, um membro pode precisar de algum tempo para resfriar e coletar seus pensamentos - o comando `/mute` permite que você evite que ele se envolva com a nossa comunidade por um determinado período de tempo. Um membro silenciado pode ver a conversa, mas não pode postar mensagens ou adicionar reações.

   Todos os comandos de moderação levarão um parâmetro `reason`, que deve ser uma breve explicação do motivo da ação ter sido tomada. As ações de moderação feitas com o bot serão registradas em `#mod-log`, o que nos permite a todos ficar na mesma página. Como tal, devemos evitar o uso das ferramentas de moderação embutidas no Discord, pois elas não serão registradas.

   > [!WARNING] A razão fornecida para um comando de moderação também será incluída na notificação de DM ao camper. Por favor, lembre-se de ser profissional aqui.

3. **Criando uma discussão privada**

   Há várias situações onde você deve abordar um problema com um usuário freeCodeCamp em privado. Isso não deve ser feito por DMs, já que isso pode levar a situações onde você diz uma coisa e o usuário freeCodeCamp diz outra. Em vez disso, use a funcionalidade do bot para criar uma discussão privada:

   - Utilize o comando `/private`, onde `target` é o usuário com o qual você deseja abrir um canal privado.
   - O bot vai criar um canal e adicionar o usuário do freeCodeCamp mencionado e todos os moderadores com a função `Your Friendly Moderator`. Enquanto todos os moderadores são adicionados ao canal por uma questão de transparência, o moderador que selecionar esse comando deve ser o único a interagir com o usuário do freeCodeCamp, a não ser que eles peçam assistência.
   - Quando a conversa estiver completa, clique no botão `❌ Close` _na primeira mensagem no canal privado_ para que o bot feche e exclua o canal.

4. **Apagando mensagens**

   Nosso bot de moderação está configurado para registrar automaticamente mensagens excluídas no canal `#mod-log`. Se uma mensagem não estiver de acordo com o nosso Código de Conduta, ou não é apropriado para a nossa comunidade, geralmente você pode excluí-la.

   Note que se a mensagem contiver conteúdo que viole os termos de serviço do Discord, você deverá denunciá-la em https://dis.gd/report **antes de** excluí-la.

5. **Não tenha medo de tomar uma ação**

   Se um usuário do freeCodeCamp violar o [Código de Conduta](https://code-of-conduct.freecodecamp.org), não ameace realizar ações de moderação e nunca os avise em público. Em vez disso, fale com eles usando o comando `/private` do bot ou use os comandos de moderação do bot.

   Se uma violação foi claramente sem intenção e não justifica uma ação de moderação ou conversa privada, deixe o(a) ofensor(a) ciente de sua ação sem que isso soe como uma advertência.

   Por exemplo:

   - O usuário do freeCodeCamp posta um longo bloco de código para pedir ajuda:

     Moderador: **@username** Por favor, use o Codepen ou Pastebin ao postar uma grande quantidade de linhas de código.

   - Ou se você realmente tiver que explicar o motivo:

     Moderador: **@username** Por favor, use Codepen ou Pastebin ao postar uma grande quantidade de linhas de código, pois isso atrapalha o chat e pode ser considerado spam segundo o nosso [Código de Conduta](https://code-of-conduct.freecodecamp.org).

   - Para violações leves e não intencionais do [Código de Conduta](https://code-of-conduct.freecodecamp.org):

     Moderador: este é um lembrete amigável para que todos sigam o [código de conduta](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **Não se gabe por ser um moderador**

   Não se veja como superior dentro da comunidade. **Vocês são a comunidade.** E a comunidade lhe tem confiado para ajudar a proteger algo raro que todos nós compartilhamos - um lugar _acolhedor_ para novos desenvolvedores.

   Se você se gabar por ser um moderador, as pessoas podem se sentir desconfortáveis perto de você, do mesmo modo que as pessoas podem se sentir desconfortáveis perto de um policial, mesmo que elas não estejam fazendo nada de errado. É apenas a natureza humana.

7. **Não contrarie outros moderadores **

   Se você não concorda com a ação de um moderador, fale com ele em privado ou no canal #mod-chat. Nunca passe por cima da ação de um moderador, e nunca contradiga outros moderadores publicamente.  Ao invés disso, tenha uma conversa tranquila no `#mod-chat` e convença o moderador de que ele deveria reverter o banimento e mudar seu ponto de vista.

   _Lembre-se: estamos todos no mesmo time. Queremos dignificar o papel dos moderadores e apresentar uma frente unida._

8. **Fale com outros moderadores**

   Temos uma sala chamada `#mod-chat` somente para moderadores. Use-a! Se você se sentir desconfortável em como lidar com certa situação, peça ajuda a outros moderadores. Se você achar que algo deve ser discutido, faça-o. Você é parte do time e nós damos valor a cada opinião de cada membro do time! Mesmo se você discordar totalmente de algo nestas diretrizes ou do [Código de Conduta](https://code-of-conduct.freecodecamp.org)!

9. **Temporariamente inativo**

   Se você não for ficar ativo como Moderador por um tempo devido a motivo de viagem, doença ou qualquer outra razão, certifique-se de avisar aos outros no canal `#mod-chat`. Isso para sabermos se podemos contar contigo para ser regularmente ativo no servidor ou não.

## Como se tornar um moderador

Suponha que você esteja ajudando pessoas da comunidade de modo consistente ao longo do tempo. Nesse caso, nosso time de moderadores vai notar você e um deles vai mencionar você como um possível moderador da [nossa equipe](https://forum.freecodecamp.org/g/Team). Não existem atalhos para se tornar um moderador.

Se for aprovado, nós adicionaremos você ao nosso time de moderadores no [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [fórum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] GitHub: Depois que foi aceito como moderador, você receberá um convite de repositório do GitHub. Você precisará visitar [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) para poder aceitar o convite.
> 
> Isso é necessário para nós podermos dar a você acesso de escrita em alguns de nossos repositórios.

## Como funciona nossa sala de Colaboradores

Todos são bem-vindos no [chat de colaboradores do nosso servidor](https://discord.gg/PRyKn3Vbay). Esse é o chat destinado aos moderadores e outros usuários do freeCodeCamp que estão contribuindo para nossa comunidade de diversas formas, incluindo através de grupos de estudo.

Assumimos que os colaboradores lerão qualquer coisa neste chat que os mencione diretamente com um **@username**. Tudo o mais é opcional, mas fique à vontade para ler e interagir com qualquer coisa que alguém poste lá dentro.

## Lidando com solicitantes

Você pode ser abordado por organizações que queiram formar uma parceria com o freeCodeCamp de alguma maneira. Quando você perceber que essa é a intenção deles, **pedimos que pare de conversar com eles** e diga-lhes para enviar um e-mail para `team[at]freecodecamp.org`.

Recebemos propostas como essa com frequência. A equipe está em melhor posição para julgar se tal relação valerá a pena para nossa comunidade (e raramente vale).

## Lidando com consultas sobre saúde (mental)

Você pode encontrar situações onde os usuários procuram aconselhamento médico ou estão lidando com questões de saúde mental e buscando apoio.

Como parte de nossa política, você deve evitar falar em privado sobre essas questões. Se a situação em algum ponto refletir de volta para o freeCodeCamp, queremos que as conversas fiquem registradas. Deixe claro que nós não somos profissionais da saúde e que você encoraja o usuário a buscar ajuda profissional.

Apesar de ser difícil às vezes, evite dar quaisquer dicas ou conselhos que não sejam indicar ao usuário buscar ajuda profissional!

Se isso ocorrer no nosso servidor de chat: crie um canal privado para o usuário e o time de moderadores. Isso pode ser feito com o comando`private` do bot.

- O usuário tem a privacidade garantida.
- O chat público não será mais perturbado.
- Outros membros do time podem contribuir caso você se sinta desconfortável ao lidar com a situação sozinho.

Links úteis:

http://suicide.org/international-suicide-hotlines.html

## Uma nota sobre liberdade de expressão

Às vezes, as pessoas vão defender algo ofensivo ou instigante que elas disseram como sendo "liberdade de expressão."

Essa tirinha da XKDC resume perfeitamente o pensamento da maioria das comunidades sobre liberdade de expressão.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Obrigado por ler isto, e obrigado por ajudar a comunidade de desenvolvedores!
