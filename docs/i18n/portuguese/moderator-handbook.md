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

#### Filtering Pull Requests

To sort Pull Requests for Quality Assurance for quick access to PRs that are ready for review, do not have a merge conflict, are not blocked, and have all status checks in green, use the following link to apply the filters:

[Direct link with filter applied](https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Aopen+is%3Apr+-label%3A%22status%3A+blocked%22+-label%3A%22status%3A+merge+conflict%22+status%3Asuccess+draft%3Afalse)

#### Other Guidelines for Moderators on GitHub

Though you will have write access to freeCodeCamp's repository, **you should never push code directly to freeCodeCamp repositories**. All code should enter freeCodeCamp's codebase in the form of a pull request from a fork of the repository.

Also, you should never accept your own PRs. They must be reviewed by another moderator, just like any other PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Moderando o Fórum

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. You will deal with flagged posts and handle spam, off-topic, and other inappropriate conversations.

Note that once you are a moderator on the forum, you will start to see blue moderator hints about forum members, like "this is the first time [person] has posted - let's welcome them to the community!" or "[person] hasn't posted in a long time - let's welcome them back."

![A blue text message saying "this is the first time [person] has posted - let's welcome them to the community!](https://i.imgur.com/mPmVgzK.png)

These are opportunities for you to welcome them and make them feel extra special. You never know which person who's marginally involved may become our next super-helper, helping many other people in their coding journey. Even the slightest kindness may trigger a cascade of good deeds.

### Excluindo publicações do fórum

Forum moderators can delete users' posts. You should only do this for the following instances:

1. Alguém postou uma imagem pornográfica ou graficamente violenta.
2. Alguém postou um link ou código de natureza maliciosa que pode prejudicar os(as) outros(as) usuários(as) freeCodeCamp que clicarem nele.
3. Alguém lotou um tópico com muitas mensagens de spam.
4. Uma conta foi criada, sem qualquer sombra de dúvida, com o intuito de fazer spam.

### Lidando com spam

For the first spam post of a legitimate user (ie. whose intent isn't to spam the forum but to learn/contribute to the forum), send them a message explaining the problem, and remove the link or post as appropriate. Leave a note on the user's profile explaining the action you have taken. If the problem persists, then quietly block the user from posting (using the silence option on the User Admin panel). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Check the box in the private message indicating that your message is a "formal warning."

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Lidando com conversas fora do assunto

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

In exceptional circumstances, it may be appropriate for a moderator to fork a discussion into multiple threads.

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### Lidando com soluções publicadas

If a user replies in a help thread for the freeCodeCamp curriculum with a solution, remove it and use the **Solution Instead of Help** canned reply (or a similar response in your own words).

If the OP (Original Poster) replies within a freeCodeCamp curriculum help thread with their final solution, blur it, and use the **Blurred Spoiler Solution** canned reply.

If a user creates a thread asking for feedback on a solution, move the thread to the feedback subforum and blur the solution, as necessary. If the user is only posting the solution to show it off, then unlist the thread and use the **Solutions Thread** canned reply.

### Usuários menores de idade

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. If a user reveals that they are under the age of 13, send them the message (below), suspend the account then **Email `support[at]freecodecamp.org` to delete the user's freeCodeCamp /learn and forum accounts as well (providing a link to the offending forum account).**

```markdown
ASSUNTO: Usuários com menos de 13 anos não têm permissão para usar o fórum de acordo com os nossos Termos de Serviço.

Chegou à nossa atenção o fato de que você tem menos de 13 anos de idade. Segundo os [Termos de Serviço do freeCodeCamp](https://freecodecamp.org/terms), você deve ter pelo menos 13 anos de idade para usar o site ou fórum. Apagaremos suas contas do fórum e do site freeCodeCamp. Essa restrição nos deixa em acordo com as leis dos Estados Unidos.

Por favor, compareça quando estiver com pelo menos 13 anos de idade.

Obrigado(a) pela compreensão.
```

### Moderando via celular

Moderating the forum is possible via a cell phone but you may encounter some usage quirks. This is not an exhaustive list.

- Ao tentar incluir uma "Resposta pronta" em uma resposta, se o menu não abrir (após clicar na engrenagem), clique na área de texto primeiro e tente novamente.
- A 'ferramenta de chave' do moderador está na parte inferior da janela de visualização, mas, se você clicar nela e não puder ver o botão "Select Posts" (Selecionar Posts) pelo fato de ele estar fora de visualização, você pode precisar rolar até ele, embora, às vezes, isso não funcione. Neste caso, pode ser necessário passar para um monitor desktop/laptop.
- Às vezes, clicar no menu de três pontos abaixo de uma postagem pode ocultar o ícone de resposta. Recarregue a página para recuperá-la.

## Moderando no Facebook

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Sometimes people will post things that they think are funny. They don't realize that what they said or what they shared could be interpreted as offensive. You should delete such posts, but not necessarily ban the person. Hopefully, the user will come to understand that what they posted was inappropriate because the post was deleted.

But if it is an egregious offense that can't reasonably be attributed to a cultural difference or a misunderstanding of the English language. In that case, you should strongly consider blocking the member from the Facebook group.

## Moderando o Discord

Here's how moderators deal with violations of our [Code of Conduct](https://code-of-conduct.freecodecamp.org/) on our chat server:

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

Suppose you are helping people in the community consistently over time. In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] GitHub: Depois que foi aceito como moderador, você receberá um convite de repositório do GitHub. Você precisará visitar [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) para poder aceitar o convite.
> 
> Isso é necessário para nós podermos dar a você acesso de escrita em alguns de nossos repositórios.

## Como funciona nossa sala de Colaboradores

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an **@username**. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Lidando com solicitantes

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Lidando com consultas sobre saúde (mental)

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. This can be done with the bot's `private` command.

- O usuário tem a privacidade garantida.
- O chat público não será mais perturbado.
- Outros membros do time podem contribuir caso você se sinta desconfortável ao lidar com a situação sozinho.

Helpful URLs:

http://suicide.org/international-suicide-hotlines.html

## Uma nota sobre liberdade de expressão

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!
