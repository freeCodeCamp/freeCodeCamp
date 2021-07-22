# O manual oficial para os moderadores do freeCodeCamp

Esse manual vai ajudá-lo a moderar lugares diferentes em nossa comunidade. Ele cobre conversas e interações nos tópicos de "pull request" e "issues" do GitHub, o fórum da comunidade, as salas de conversa e outras comunidades oficiais fomentadas por nós.

> [!NOTE] Todos os moderadores do freeCodeCamp são moderadores de toda a comunidade. Isso significa que confiamos em você para supervisionar um qualquer destes lugares.

Você pode atuar como moderador em qualquer uma das plataformas de seu interesse. Alguns moderadores ajudam apenas no GitHub, enquanto outros ajudam apenas no fórum. Outros moderadores são ativos em todos os lugares.

O mais importante é que queremos que você goste de ser um moderador, investindo seu tempo escasso em lugares que sejam de interesse para você.

> "Com grandes poderes vêm grandes responsabilidades." - Tio Ben

Como moderador, seu temperamento é mais importante do que habilidade técnica.

Escute. Seja útil. Não abuse do seu poder.

O freeCodeCamp é uma comunidade inclusiva e temos de mantê-la assim.

Temos um código de conduta único que rege toda a nossa comunidade. Quanto menos regras, mais fáceis elas são de lembrar. Você pode ler essas regras e guardá-las na memória [aqui](https://code-of-conduct.freecodecamp.org).

> [!NOTE] Como moderador, nós adicionaríamos você a um ou mais times no GitHub, nos nossos fóruns comunitários e nos servidores de chat. Caso você não tenha acesso a uma plataforma que queira moderar, [entre em contato com um membro da equipe](/FAQ?id=additional-assistance).

## Moderando no GitHub

Moderadores têm duas responsabilidades primárias em relação ao GitHub:

1. Avaliar e responder "issues"
2. Revisar e dar "merge" nos "pull requests" (também conhecido como controle de qualidade).

### Moderando issues do GitHub

Nós usamos nosso repositório principal [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) como a central de rastreamento de "issues" para todos os nossos repositórios. Todos os dias recebemos novas issues. Todas elas precisam ser testadas e identificadas. Esse é também um ótimo lugar para começar a ajudar repositórios de código aberto com suas contribuições.

#### Triagem de issues

[Triagem](https://en.wikipedia.org/wiki/Triage) é um processo de priorizar atenção a cada nova issue. Nós temos uma lista extensa de etiquetas que usamos para marcar a prioridade, categoria, situação e escopo de cada issue.

Você pode nos ajudar a organizar e moderar issues usando etiquetas [dessa lista](https://github.com/freeCodeCamp/freeCodeCamp/labels). Normalmente, uma descrição é disponibilizada juntamente com a etiqueta, explicando o seu significado.

Preste atenção especial às etiquetas `"help wanted"` e `"first timers only"`. Elas devem ser adicionadas aos tópicos que você considere que possam ser abertos aos potenciais contribuidores para realizar um "pull request".

A `"first timer only"` label should be applied to a trivial issue (ex. a typo fix) and should include additional information. Você pode usar esse [modelo de resposta](/moderator-handbook?id=first-timer-only-issues).

#### Fechando issues e pull requests parados, desatualizados ou inativos

- Issues ou PRs parados são aqueles que não tiveram nenhuma interação do criador por 21 dias (3 semanas desde a última interação), mas apenas depois que um moderador pediu mais informações/mudanças.

- Atividade é definida como: comentários solicitando uma atualização no PR e triagens como a etiqueta `status: update needed`, entre outras.

- Se o criador do PR pedir assistência adicional ou mais tempo, as regras acima podem ser revistas após uma resposta. Em todo caso, os moderadores devem usar o melhor julgamento para resolverem o estado do PR.

> [!TIP] Recomendamos usar essa lista de [modelos de resposta](https://contribute.freecodecamp.org/#/moderator-handbook?id=reply-templates) padrão enquanto estiver monitorando issues.

### Moderando pull requests

Pull Requests (PRs) are how contributors submit changes to freeCodeCamp's repository. We must perform Quality Assurance (QA) on pull requests before we decide whether to merge them, request changes, or close them.

#### Tipos de pull requests

1. **Edições das instruções de desafios**

   Essas são mudanças no texto dos desafios - no texto da Descrição, da Instrução ou do Teste.

   Você também pode revisar isso diretamente no GitHub e decidir fazer merge ou não. Precisamos ter um pouco mais de cuidado com relação a isso, pois milhões de pessoas encontrarão este texto enquanto usam o currículo do freeCodeCamp. O pull request deixa o texto mais claro sem deixá-lo muito mais longo? As edições são relevantes e não são excessivamente pedantes? Lembre-se que nosso objetivo é que os desafios sejam mais claros e curtos dentro do possível. Não são o lugar para detalhes obscuros. Os contribuidores talvez tentem adicionar links para recursos dos desafios.

   Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

   Se as mudanças parecem boas, por favor aprove-as comentando "LGTM". Uma vez que um pull request tiver pelo menos duas aprovações (incluindo a sua) dos moderadores ou equipe de desenvolvedores, você pode fazer o merge.

2. **Challenge Code Edits**

   São mudanças feitas no código do desafio - o objetivo do desafio, a solução do desafio e o texto.

   Esses pull requests precisam ser baixados do GitHub e testados no seu computador ou GitPod para garantir que os testes do desafio ainda passam com a solução atual, e o novo código não introduz nenhum erro.

   Alguns contribuidores podem tentar adicionar mais testes para cobrir casos confusos pedantes. Precisamos ter cuidado para não deixarmos o desafio muito complicado. Esses desafios e seus testes devem ser simples e intuitivos na medida do possível. Além dos desafios de algoritmo e a seção de preparação para entrevistas, os estudantes devem ser capazes de resolver cada desafio em aproximadamente 2 minutos.

   Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

   Se as mudanças parecem boas, por favor aprove-as comentando "LGTM". Uma vez que um pull request tiver pelo menos duas aprovações (incluindo a sua) dos moderadores ou equipe de desenvolvedores, você pode fazer o merge.

3. **Mudanças na plataforma**

   Essas edições de código mudam a funcionalidade da plataforma freeCodeCamp em si.

   Às vezes os contribuidores tentam fazer mudanças sem muita explicação, mas para mudanças no código, precisamos garantir que há uma necessidade genuína para a mudança. Esses pull requests devem referenciar uma issue existente no GitHub onde os motivos para a mudança são discutidos. Então você pode abrir o pull request no seu computador e testá-lo localmente.

   Depois de pronto, se as mudanças estão boas, não faça o merge ainda. Você pode comentar "LGTM" no pull request e mencionar **"@freeCodeCamp/dev-team"** para eles darem uma olhada.

4. **Pull Requests automáticos (Dependabot)**

   Alguns PRs são atualizações de dependência automáticos feitos a partir de uma integração. Você não deve dar merge ou aprovar esses PRs. Um dos membros do time de desenvolvimento cuidará da revisão e irá dar merge em PRs automáticos.

#### Como revisar, dar merge ou fechar pull requests

##### Seja responsável por um pull request:

Em primeiro lugar, quando você escolhe um pull request para revisar, você deve atribuí-lo a si mesmo. Você pode fazer isso clicando no link "assign yourself" abaixo da parte "assignees" na coluna da direita da interface do GitHub.

Dependendo do tipo de pull request, siga as regras correspondentes listadas anteriormente.

##### Certifique-se de que os testes de CI passaram:

Antes de dar merge em qualquer pull request, certifique-se que há um aviso dizendo que todos os testes passaram (todos marcados em verde) no pull request. If you see any of the checks failing, please investigate and clarify the root cause. A mudança proposta está quebrando nossos testes? O site vai compilar corretamente se darmos merge no PR? Essas verificações são importantes para a estabilidade da plataforma.

> [!WARNING] Fazer merge em um PR que falhou nas verificações CI/CD pode causar dificuldades para todas as partes interessadas, incluindo o time de desenvolvimento e contribuidores.

##### Lidando com conflitos de merge:

Às vezes haverá um conflito de merges.

Isso quer dizer que outro pull request fez mudanças na mesma parte de um arquivo. O GitHub tem uma ferramenta para resolver esses conflitos de merges diretamente no GitHub. Você pode tentar resolver esses conflitos. Apenas use seu melhor julgamento.

As mudanças do pull request estarão no topo e as mudanças da branch master estarão embaixo. Às vezes, haverá informação redundante que pode ser apagada. Antes de terminar, certifique-se de excluir o `<<<<<<`, `======` e o `>>>>>>` que o Git adiciona para indicar áreas de conflito.

Se não tem certeza, peça ajuda para algum moderador ou para o time de desenvolvimento.

##### Fazendo merge em um pull request válido:

Se o pull request parece pronto para merge (e não requer aprovações adicionais - lembre-se, precisamos de pelo menos duas), você pode ir em frente e fazer o merge. Certifique-se de usar a opção padrão **"Squash and Merge"**. Isto vai comprimir todos os commits de pull requests em um único commit, o que deixará o histórico do Git muito mais fácil de ler.

> Em seguida, você deve comentar no pull request, agradecendo ao colaborador usando sua própria maneira pessoal.

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

Muitas vezes, um pull request será obviamente de baixo esforço. Muitas vezes, você perceberá isso imediatamente quando o colaborador não se importar em verificar os checkboxes do template de requisição de pull request ou quando ele utilizar um título de pull request genérico como "alterações feitas" ou "Atualizar índice.md".

Há também situações em que o colaborador está tentando adicionar um link para o seu próprio site, incluir uma biblioteca que criou, ou tem uma edição frívola que não serve para ajudar ninguém, exceto a si mesmo.

Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

#### Other guidelines for Moderators on GitHub

Embora você tenha acesso de escrita ao repositório do freeCodeCamp, **você nunca deve enviar o código diretamente para repositórios do freeCodeCamp**. Todos os códigos devem entrar na base de código do freeCodeCamp em forma de pull request a partir de um fork do repositório.

Além disso, você nunca deve aceitar seus próprios PRs. Outro moderador deve revisá-los, assim como qualquer outro PR.

Se você notar que alguém quebrou o [código de conduta](https://code-of-conduct.freecodecamp.org) em issues do GitHub, ou abriu pull requests com conteúdo ou código malicioso, mande um e-mail para `support[at]freecodecamp.org` com o link do pull request e podemos considerar bani-los da organização do freeCodeCamp no GitHub.

## Moderating the Forum

Como moderador, você ajuda a manter nossa comunidade um lugar agradável para qualquer pessoa aprender e buscar ajuda. Você lidará com postagens sinalizadas e tratará spam, mensagens fora do assunto e outras conversas inapropriadas.

Note que, ao se tornar um moderador no fórum, você vai começar a ver dicas azuis sobre os membros do fórum, como "esta é a primeira vez que [person] postou - vamos dar as boas-vindas à comunidade!" ou "[person] não postou há muito tempo - vamos recebê-lo de volta."

![Uma mensagem de texto azul dizendo "esta é a primeira vez que [person] postou - vamos dar as boas-vindas à comunidade!](https://i.imgur.com/mPmVgzK.png)

São oportunidades para você recebê-lo(a) e fazê-lo(a) sentir-se mais especial. Nunca se sabe quais pessoas que estão pouco envolvidas e que podem ser nossos próximos superajudantes, ajudando muitas outras pessoas na sua jornada de programação. Mesmo a menor bondade pode desencadear várias boas ações.

### Excluindo publicações do fórum

Moderadores do fórum podem apagar as postagens dos usuários. Você só deve fazer isso para as seguintes instâncias:

1. Alguém postou uma imagem pornográfica ou graficamente violenta.
2. Alguém postou um link ou código de natureza maliciosa que pode prejudicar os(as) outros(as) usuários(as) freeCodeCamp que clicarem nele.
3. Alguém lotou um tópico com muitas mensagens de spam.

### Dealing with spam

Para a primeira postagem de spam de um usuário, envie uma mensagem explicando o problema e remova o link ou a postagem, conforme apropriado. Deixe uma observação no perfil do usuário explicando a ação que você tomou. Se o problema persistir, então bloqueie silenciosamente o usuário de postar (usando a opção de silêncio no painel de Administração de Usuário). Envie um aviso ao usuário com o Código de Conduta. Marque a opção na mensagem privada que indica que a sua mensagem é um "aviso formal."

Você pode fazer perguntas e relatar incidentes na [seção do fórum da equipe](https://forum.freecodecamp.com/c/staff).

### Lidando com conversas fora do assunto

Postagens ou tópicos que parecem estar no lugar errado podem ser renomeados para o que for apropriado.

Em circunstâncias excepcionais, pode ser apropriado que um moderador faça o fork de uma discussão em vários assuntos.

Novamente, se você tiver algum problema ou dúvida, faça uma postagem com suas ações na categoria Staff, e marque outro moderador se você quiser que eles revisem suas ações de moderação.

### Usuários menores de idade

Nossos [Termos de Serviço](https://www.freecodecamp.org/terms) requerem que usuários freeCodeCamp tenham pelo menos 13 anos de idade. Se um usuário revelar que tem menos de 13 anos envie a mensagem abaixo e exclua sua conta do fórum (se a exclusão não estiver disponível, suspender a conta é suficiente).

**Mande um e-mail para `support[at]freecodecamp.org` para excluir a conta freeCodeCamp do usuário também.**

```markdown
ASSUNTO: Usuários menores de 13 anos não podem usar o fórum segundo os Termos de Serviço

Percebemos que você é menor de 13 anos de idade. Segundo os [termos de serviço do freeCodeCamp](https://www.freecodecamp.org/news/terms-of-service), você deve ter pelo menos 13 anos de idade para usar o site ou fórum. Estaremos apagando suas contas do fórum e do site freeCodeCamp. Essa restrição nos deixa em acordo com as leis dos Estados Unidos.

Por favor, compareça quando estiver com pelo menos 13 anos de idade.

Obrigado(a) pela compreensão.
```

## Moderando no Facebook

Se você ver algo que pareça quebrar nosso [Código de Conduta](https://code-of-conduct.freecodecamp.org/), você deve excluí-lo imediatamente.

Às vezes, as pessoas publicam coisas que acham engraçadas. Não percebem que o que disseram ou o que compartilharam pode ser interpretado como ofensivo. Você deve apagar esse tipo de postagem, mas não banir a pessoa. Talvez, o usuário entenderá que o que postou foi inapropriado, pois a postagem foi apagada.

Mas se é uma ofensa que não pode ser atribuída a uma diferença cultural ou um mal entendimento da língua inglesa. Nesse caso, você deve considerar bloquear o membro do grupo do Facebook.

## Moderando o Chat

Veja como os moderadores lidam com violações do nosso[Código de Conduta](https://code-of-conduct.freecodecamp.org/) no nosso servidor de chat:

1. **Certifique-se de que foi intencional a violação do Código de Conduta.**

   Nem todas as violações do CdC são intencionais. Um novo usuário freeCodeCamp pode postar uma grande quantidade de códigos para ajudar, sem notar que isso pode ser considerado spam. Nesses casos, você pode simplesmente pedir para que eles coloquem seus códigos em serviços como Codepen ou Pastebin.

2. **Se o usuário freeCodeCamp claramente e intencionalmente violar o Código de Conduta, o moderador vai proceder da seguinte maneira:**

   Expulse ou mute a pessoa que está ofendendo da sala de chat. Para expulsar ou mutar alguém, clique com o botão direito na foto de perfil dele, selecione os três pontos, e selecione "Remove from room" para expulsar ou "Mute user" para evitar que envie mensagens. Depois, faça um breve resumo do caso no canal #mod-log. Segue um exemplo de como o resumo pode ser:

   ```
   Expulso: _@username_
   Motivo(s): _Fazendo spam, enganando_
   Evidência: _Um ou mais links na(s) mensagem(ns)_
   ```

3. **Criando uma discussão privada**

   Há várias situações onde você deve abordar um problema com um usuário freeCodeCamp em privado. Isso não deve ser feito por DMs, já que isso pode levar a situações onde você diz uma coisa e o usuário freeCodeCamp diz outra. Em vez disso, use a funcionalidade do bot para criar uma discussão privada:

   - Selecione o comando `!fCC private username`, onde `username` é o nome de usuário de chat do usuário do freeCodeCamp.
   - O bot vai criar um novo canal e adicionar o usuário do freeCodeCamp mencionado e todos os moderadores com a função `Your Friendly Moderator`. Enquanto todos os moderadores são adicionados ao canal para transparência, o moderador que der esse comando deve ser o único a interagir com o usuário freeCodeCamp a não ser que eles peçam assistência.
   - Quando a conversa estiver completa, chame o comando `!fCC close` _no canal privado_ para que o bot feche e delete o canal.

4. **Apagando mensagens**

   Moderadores podem apagar mensagens em nosso servidor do chat. Eles devem exercer essa competência somente em quatro situações bem específicas:

   - Alguém postou uma imagem pornográfica ou graficamente violenta.

   - Alguém postou um link ou código de natureza maliciosa e que poderia causar danos a outros usuários freeCodeCamp que clicarem nele.

   - Alguém encheu o chat com várias mensagens de spam de forma tão extrema (normalmente usando bots) para inviabilizar completamente o uso do chat.

   - Alguém postou um anúncio e/ou a uma mensagem/imagem se promovendo (rede social).

   Em todas as outras situações - até mesmo quando o código de conduta é violado -, os moderadores não devem apagar as mensagens porque elas são registros históricos importantes.  Quando você apagar uma mensagem, tenha certeza que você tirou uma captura de tela dela antes! A captura de tela pode ser registrada no canal #mod-log.

   > [!NOTE] Se a mensagem contém material que possa ser ilegal ao capturar a tela, copie o link dela e forneça-o para @raisedadead encaminhá-la para o time de Confiança e Segurança do Discord.

5. **Não use @all ou @here**

   Não use @all ou @here em nenhuma circunstância! Cada pessoa na sala do chat vai receber uma notificação. Em alguns casos, dezenas de milhares de pessoas.

   Ao invés disso, se você deseja que as pessoas vejam seu aviso, você pode fixá-lo no canal e permitir que todos o leiam.

6. **Não tenha medo de tomar uma ação**

   Se um usuário do freeCodeCamp está violando o código de conduta, não ameace-o e nunca avise-o em público.  Ao invés disso, fale com ele em privado usando o comando `private` do bot. Ninguém mais no canal precisa saber que você baniu/suspendeu a pessoa. Se uma violação foi claramente sem intenção e não justifica uma suspenção ou conversa privada, deixe o(a) ofensor(a) ciente de sua ação sem que isso soe como uma advertência. Por exemplo:

   - O usuário freeCodeCamp posta muitas linhas de código para pedir ajuda:

     Moderador: @username Por favor, use o Codepen ou Pastebin ao postar uma grande quantidade de linhas de código.

   - Or if you really have to explain why:

     Moderador: @username Por favor, use Codepen ou Pastebin ao postar uma grande quantidade de linhas de código, pois isso perturba o chat e pode ser considerado spam de acordo com o nosso Código de Conduta.

   - Para violações leves e não intencionais do código de conduta:

     Moderador: Esse é um lembrete amigável a todos para seguirem o código de conduta: https://code-of-conduct.freecodecamp.org/

7. **Não se gabe por ser um moderador**

   Não se veja como superior dentro da comunidade. Você é a comunidade. E a comunidade lhe tem confiado para ajudar a proteger algo raro que todos nós compartilhamos - um lugar _acolhedor_ para novos desenvolvedores.

   Se você se gabar por ser um moderador, as pessoas podem se sentir desconfortáveis perto de você, do mesmo modo que as pessoas podem se sentir desconfortáveis perto de um policial, mesmo que elas não estejam fazendo nada de errado. É apenas a natureza humana.

8. **Não contrarie outros moderadores **

   Se você não concorda com a ação de um moderador, fale com ele em privado ou no canal #mod-chat. Nunca passe por cima da ação de um moderador, e nunca contradiga outros moderadores publicamente.  Ao invés disso, tenha uma conversa tranquila no `#mod-chat` e convença o moderador de que ele deveria reverter o banimento e mudar seu ponto de vista.

   Lembre-se: estamos todos no mesmo time. Queremos dignificar o papel dos moderadores e apresentar uma frente unida.

9. **Fale com outros moderadores**

   Temos uma sala apenas para moderadores. Use-a! Se você se sentir desconfortável em como lidar com certa situação, peça ajuda a outros moderadores. Se você achar que algo deve ser discutido, faça-o. Você é parte do time e nós damos valor a cada opinião de cada membro do time! Mesmo se você discordar totalmente em qualquer parte dessas diretrizes ou do Código de Conduta!

10. **Temporariamente inativo**

    Se você não for ficar ativo como Moderador por um tempo devido a motivo de viagem, doença ou qualquer outra razão, certifique-se de avisar aos outros no canal `#mod-chat`. Isso para sabermos se podemos contar contigo para ser regularmente ativo no servidor ou não.

## How to become a moderator

Suppose you are helping people in the community consistently over time. In that case, our Moderator Team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). There are no shortcuts to becoming a moderator.

If you are approved, we will add you to our Moderator Teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), and chat etc.

> [!NOTE] For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
> 
> This is required for us to be able to give you write access to some of our repositories.

## How we retire inactive moderators

Please note that we will frequently remove mods whom we think are inactive. When we do this, we will send the following message:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting me know.
```

## How our Contributors room works

Anyone is welcome in the [Contributors room on our chat server](https://chat.freecodecamp.org/channel/contributors). It is the designated chat room for moderators and other campers who contribute to our community in any number of ways, including through study groups.

We assume contributors will read anything in this room that directly mentions them with an `@username`. Everything else is optional, but feel free to read anything anyone posts in there and interact.

## Dealing with solicitors

You may be approached by organizations who want to partner or co-brand with freeCodeCamp somehow. Once you realize that this is what they're after, **please stop talking to them** and tell them to email `team[at]freecodecamp.org`.

We get proposals like this all the time, and the staff are in the best position to judge whether such a relationship will be worth it for our community (and it rarely is).

## Dealing with (mental) health inquiries

You may come across situations where users seek medical advice or are dealing with mental health issues and are looking for support.

As a matter of policy, you should avoid talking privately about these matters. Should the situation reflect back to freeCodeCamp, we want to have the conversation(s) on record. Make it clear that we are not medical professionals and that you encourage the user to find professional help.

As difficult as it sometimes can be, avoid giving any tips or advice other than pointing the user in the direction of professional help!

If this happens on our chat server: Create a private channel for the user and the mod team. This can be done with the bot's `private` command.

- The user is guaranteed some privacy
- Public chat is no longer disrupted
- Other team members can pitch in, should you be uncomfortable dealing with the situation yourself

Helpful URLs:

http://www.suicide.org/international-suicide-hotlines.html

## A note on free speech

Sometimes people will defend something offensive or incendiary that they said as "free speech."

This XKCD comic summarizes perfectly most communities' thoughts on free speech. So if someone defends something in the name of "free speech", feel free to send it to them.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Thanks for reading this, and thanks for helping the developer community!

## Reply Templates

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues and pull requests.

> You can make your own with GitHub's built-in [**Saved replies**](https://github.com/settings/replies/) feature or use the ones below.

### Thank you

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Thank you and congrats

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Build Error

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](https://contribute.freecodecamp.org/#/how-to-work-on-coding-challenges?id=testing-challenges) for instructions on running the CI build locally. ✅
```

### Syncing Fork

> When PR is not up to date with the `main` branch.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
````

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
````

¹ If a first-time-contributor has a merge conflict, maintainers will resolve the conflict for them.

### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).
```

### Closing invalid pull requests

> When PR is invalid.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> When PR adds links to external resources.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you, and happy coding.
```

### Closing Invalid Issues

> When an issue relates to the camper's code.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> When an issue is fixed in staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### First Timer Only Issues

> When an issue is deemed to be eligible for first time code contributors.

```markdown
Thanks for opening this issue.

This looks something that can be fixed by "first time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in [our chat room](https://chat.freecodecamp.org/channel/contributors) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing, our moderators will guide you through this.

Sometimes we may get more than one pull requests. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```
