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

Uma etiqueta `"first timer only"` deve ser aplicada a uma issue trivial (ex. consertando um erro de digitação) e deve incluir informações adicionais. Você pode usar esse [modelo de resposta](/moderator-handbook?id=first-timer-only-issues).

#### Fechando issues e pull requests parados, desatualizados ou inativos

- Issues ou PRs parados são aqueles que não tiveram nenhuma interação do criador por 21 dias (3 semanas desde a última interação), mas apenas depois que um moderador pediu mais informações/mudanças.

- Atividade é definida como: comentários solicitando uma atualização no PR e triagens como a etiqueta `status: update needed`, entre outras.

- Se o criador do PR pedir assistência adicional ou mais tempo, as regras acima podem ser revistas após uma resposta. Em todo caso, os moderadores devem usar o melhor julgamento para resolverem o estado do PR.

> [!TIP] Recomendamos usar essa lista de [modelos de resposta](https://contribute.freecodecamp.org/#/moderator-handbook?id=reply-templates) padrão enquanto estiver monitorando issues.

### Moderando pull requests

Pull Requests (PRs) são como os colaboradores enviam alterações para o repositório do freeCodeCamp. Nós temos que garantir a qualidade dos pull requests antes de decidirmos fazer merge, pedir mudanças ou fechá-los.

#### Tipos de pull requests

1. **Edições das instruções de desafios**

   Essas são mudanças no texto dos desafios - no texto da Descrição, da Instrução ou do Teste.

   Você também pode revisar isso diretamente no GitHub e decidir fazer merge ou não. Precisamos ter um pouco mais de cuidado com relação a isso, pois milhões de pessoas encontrarão este texto enquanto usam o currículo do freeCodeCamp. O pull request deixa o texto mais claro sem deixá-lo muito mais longo? As edições são relevantes e não são excessivamente pedantes? Lembre-se que nosso objetivo é que os desafios sejam mais claros e curtos dentro do possível. Não são o lugar para detalhes obscuros. Os contribuidores talvez tentem adicionar links para recursos dos desafios.

   Você pode fechar pull requests inválidos e respondê-los com esses [modelos de resposta](https://contribute.freecodecamp.org/#/moderator-handbook?id=closing-invalid-pull-requests).

   Se as mudanças parecem boas, por favor aprove-as comentando "LGTM". Uma vez que um pull request tiver pelo menos duas aprovações (incluindo a sua) dos moderadores ou equipe de desenvolvedores, você pode fazer o merge.

2. **Edições de Código de Desafio**

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

Antes de dar merge em qualquer pull request, certifique-se que há um aviso dizendo que todos os testes passaram (todos marcados em verde) no pull request. Se alguma das verificações falhou, investigue e tente descobrir qual é a causa raíz. A mudança proposta está quebrando nossos testes? O site vai compilar corretamente se darmos merge no PR? Essas verificações são importantes para a estabilidade da plataforma.

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

#### Outras diretrizes para moderadores no GitHub

Embora você tenha acesso de escrita ao repositório do freeCodeCamp, **você nunca deve enviar o código diretamente para repositórios do freeCodeCamp**. Todos os códigos devem entrar na base de código do freeCodeCamp em forma de pull request a partir de um fork do repositório.

Além disso, você nunca deve aceitar seus próprios PRs. Outro moderador deve revisá-los, assim como qualquer outro PR.

Se você notar que alguém quebrou o [código de conduta](https://code-of-conduct.freecodecamp.org) em issues do GitHub, ou abriu pull requests com conteúdo ou código malicioso, mande um e-mail para `support[at]freecodecamp.org` com o link do pull request e podemos considerar bani-los da organização do freeCodeCamp no GitHub.

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

### Lidando com spam

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

   - Ou se você realmente tem que explicar o motivo:

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

## Como se tornar um moderador

Suponha que você está ajudando pessoas na comunidade de modo consistente. Nesse caso, nosso Time de Moderadores vai notar você e um deles vai mencionar você como um possível moderador que pode ser da [nossa equipe](https://forum.freecodecamp.org/g/Team). Não há atalhos para se tornar um moderador.

Se for aprovado, nós adicionaremos você ao nosso Time de Moderadores no [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [fórum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] GitHub: Depois que foi aceito como moderador, você receberá um convite de repositório do GitHub. Você precisará visitar [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) para poder aceitar o convite.
> 
> Isso é necessário para nós podermos dar a você acesso de escrita em alguns de nossos repositórios.

## Como nós retiramos moderadores inativos

Observe que, frequentemente, vamos remover moderadores que achamos estarem inativos. Quando fizermos isso, mandaremos a seguinte mensagem:

```markdown
Essa é uma mensagem padrão notificando que você não parece ter sido um moderador ativo recentemente. Sendo assim, estamos removendo você do nosso time de Moderadores. Nós agradecemos profundamente sua ajuda no passado.

Se acha que fizemos isso por engano ou quando você estiver pronto para voltar e contribuir mais, apenas responda essa mensagem me avisando.
```

## Como funciona nossa sala de Contribuidores

Todos são bem-vindos na [Sala de contribuidores no nosso servidor de chat](https://chat.freecodecamp.org/channel/contributors). É a sala de chat destinada aos moderadores e outros usuários freeCodeCamp que estão contribuindo para nossa comunidade de diversas formas, incluindo através de grupos de estudo.

Assumimos que os contribuidores lerão tudo que for postado nessa sala que diretamente os mencione com um `@username`. Tudo o mais é opcional, mas sinta-se à vontade para ler e interagir com tudo que todos postam lá.

## Lidando com solicitadores

Você pode ser abordado por organizações que querem formar uma parceria com o freeCodeCamp de alguma maneira. Quando você perceber que essa é a intenção deles, **pedimos que pare de conversar com eles** e diga-lhes para enviar um e-mail para `team[at]freecodecamp.org`.

Recebemos propostas como essa com frequência e a equipe está em melhor posição para julgar se tal relação valerá a pena para nossa comunidade (e raramente valem).

## Lidando com consultas sobre saúde (mental)

Você pode encontrar situações onde os usuários procuram aconselhamento médico ou estão lidando com questões de saúde mental e buscando apoio.

Como parte de nossa política, você deve evitar falar em privado sobre essas questões. Se a situação em algum ponto refletir o freeCodeCamp, queremos ter a(s) conversa(s) em arquivo. Deixe claro que não somos profissionais da medicina e que você encoraja o usuário a procurar ajuda profissional.

Apesar de ser difícil às vezes, evite dar qualquer dica ou conselho que não seja indicar ao usuário ajuda profissional!

Se isso ocorrer no nosso servidor de chat: crie um canal privado para o usuário e o time de moderadores. Isso pode ser feito com o comando `private` do bot.

- É garantida privacidade a esse usuário
- O chat público não está mais interrompido
- Outros membros do time podem contribuir caso você se sinta desconfortável ao lidar com a situação sozinho

Links úteis:

http://www.suicide.org/international-suicide-hotlines.html

## Uma nota sobre liberdade de expressão

De vez em quando, as pessoas vão defender algo ofensivo ou rebelde que elas disseram como sendo "liberdade de expressão."

Esse quadrinho da XKDC resume perfeitamente o pensamento da maioria das comunidades sobre liberdade de expressão. Então, se alguém defende algo que está dizendo como "liberdade de expressão", sinta-se à vontade para enviar isso.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Obrigado por ler e obrigado por ajudar a desenvolver a comunidade!

## Modelos de resposta

Esses são alguns dos modelos de resposta que você talvez use enquanto estiver cuidando de issues e pull requests.

> Você pode fazer seu próprio modelo com a funcionalidade embutida do GitHub: [**Saved replies**](https://github.com/settings/replies/) ou usar as citadas abaixo.

### Obrigado(a)

```markdown
Obrigado(a) por contribuir com a página! 👍
Estamos felizes em aceitar essas mudanças e esperamos contribuições futuras. 🎉
```

### Obrigado(a) e parabéns

> Para agradecer e encorajar contribuidores de primeira viagem.

```markdown
Olá, @username. Parabéns por seu primeiro pull request (PR)! 🎉

Obrigado(a) por contribuir com a página! 👍
Estamos felizes em aceitar essas mudanças e esperamos contribuições futuras. 📝
```

### Erro de build

```markdown
Olá, @username.

Gostaríamos imensamente de poder fazer merge em suas mudanças, mas parece que há um erro com o build de CI. ⚠️

Assim que você resolver essas issues, nós poderemos rever seu PR e fazer o merge. 😊

---

Fique à vontade para recorrer às [diretrizes de contribuição]
(https://contribute.freecodecamp.org/#/how-to-work-on-coding-challenges?id=testing-challenges) para ver instruções sobre como executar o build de CI localmente. ✅
```

### Sincronização dos forks

> Quando um PR não está atualizado com a branch `main`.

````markdown
Olá, @username.

Gostaríamos imensamente de poder fazer merge de suas mudanças mas parece que a branch não está atualizada. ⚠️

Para resolver esse erro, você terá que sincronizar as últimas mudanças da branch `main` do repositório `freeCodeCamp/freeCodeCamp`.

Usando a linha de comando, você pode fazer isso em três etapas fáceis:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
````

Se você está usando uma interface, você pode simplesmente usar `Add a new remote...` e usar o link `git://github.com/freeCodeCamp/freeCodeCamp.git`.

Quando sincronizar seu fork e passar na compilação, vamos ser capazes de revisar seu PR e fazer merge. 😊

---

Fique à vontade para recorrer ao artigo [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) no GitHub para mais ideias de como manter seu fork atualizado com o repositório upstream. 🔄
````

### Conflitos de merge

> Quando um PR tem conflitos de merge, isso precisa ser resolvido.¹

```markdown
Olá, @username.

Gostaríamos de poder fazer merge em suas mudanças, mas parece que há algum conflito no merge. ⚠️

Assim que você resolver esses conflitos, nós poderemos revisar seu PR e fazer o merge. 😊

---

Se você não estiver familiarizado com o processo de conflito de merge, fique à vontade para ver o guia do GitHub em ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Além disso, é uma boa prática escrever uma breve descrição das suas mudanças ao criar um PR no GitHub. 📝
````

¹ Se é a primeira vez de um contribuidor e ele tem um conflito de merge, os mantenedores resolverão o conflito para ele.

### Duplicado

> Quando um PR é duplo ou repetitivo.

```markdown
Olá, @username.

Esse PR parece fazer alterações semelhantes às do PR <#number> que já existe. Então, vamos fechar esse por ser duplicado.

Se você tiver mudanças adicionais para expandir esse PR, fique à vontade para manter seu push e pedir que esse PR seja reaberto.

Obrigado(a) de novo! 😊

---

Se você tiver alguma pergunta, sinta-se à vontade para fazê-la na [categoria 'Contributors' no nosso fórum](https://forum.freecodecamp.org/c/contributors) ou na [sala de bate-papo dos contribuidores](https://chat.freecodecamp.org/channel/contributors).
```

### Fechando pull requests inválidos

> Quando um PR é inválido.

```markdown
Olá, @username.

Obrigado(a) por abrir esse pull request.

Essa é uma mensagem padrão para notificar que nós revisamos o seu pull request e decidimos não aprová-lo. Gostaríamos de receber seus pull requests futuramente.

Obrigado(a) e feliz programação.
```

> Quando o PR adiciona links para recursos externos.

```markdown
Obrigado(a) pelo seu pull request.

Estamos fechando esse pull request. Pedimos que, em vez de sugerir links e outros detalhes para adicionar à postagem guia correspondente ao desafio por aqui, que você faça isso pelo [tópico do fórum](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**).

Se você acha que cometemos um erro ao fechar essa issue, peça para que seja reaberta e adicione mais detalhes. Obrigado(a) e feliz programação.
```

### Fechando issues inválidas

> Quando uma issue se refere ao código do usuário freeCodeCamp.

```markdown
Obrigado(a) por reportar este problema.

Essa é uma mensagem padrão para notificar que essa issue parece ser um pedido de ajuda. Ao invés de pedir ajuda aqui, clique no botão **"Obter ajuda"** do desafio no freeCodeCamp, e escolha a opção **"Pedir ajuda"**, onde você poderá criar uma pergunta na parte direita do fórum. Geralmente, os voluntários no fórum respondem às perguntas em poucas horas e podem ajudar a determinar se existe um problema com seu código ou com os testes do desafio.

Se os membros do fórum determinarem que não há nada errado com o seu código, você pode solicitar a reabertura desta issue.

Obrigado(a) e feliz programação.
```

> Quando uma issue é a mesma que uma issue anterior

```markdown
Obrigado(a) por reportar este problema.

Essa é uma mensagem padrão avisando que essa issue parece ser igual a issue #XXXXX, então vamos fechá-la.

Se você acha que cometemos um erro ao fechar essa issue, peça para que seja reaberta e adicione mais detalhes. Obrigado(a) e feliz programação.
```

> Quando uma issue foi resolvida na fase de preparo.

```markdown
Obrigado(a) por reportar este problema.

Essa é uma mensagem padrão notificando você de que o problema mencionado aqui está presente na produção, mas que já foi resolvido na fase de preparo. Isso significa que da próxima vez que colocarmos a branch de preparo em produção, esse problema deve estar resolvido. Por isso, estamos fechando essa issue.

Se você acha que cometemos um erro ao fechar essa issue, peça para que seja reaberta e adicione mais detalhes. Obrigado(a) e feliz programação.
```

### Somente para aqueles que lançam uma issue pela primeira vez

> Quando uma issue é considerada eligível pela primeira vez como contribuição ao código.

```markdown
Obrigado(a) por abrir essa issue.

Isso parece algo que pode ser corrigido por aqueles que contribuem com código pela primeira vez a esse repositório. Aqui estão os arquivos que você deve olhar para trabalhar em uma correção:

Lista de arquivos:

1. ...
2. ...
3. ...

Certifique-se de que você leu [nosso guia de contribuição](https://contribute.freecodecamp.org/#/), pois nós priorizamos contribuidores que seguiram as instruções em nossos guias. Junte-se a nós na [nossa sala de bate-papo](https://chat.freecodecamp.org/channel/contributors) ou [no fórum](https://forum.freecodecamp.org/c/contributors/3). Se você precisar de ajuda para contribuir, os moderadores vão te guiar.

Algumas vezes, nós podemos receber mais de um pull-request. Nós tipicamente aceitamos a contribuição mais qualificada seguida pela que foi feita primeiro.

Boas contribuições.
```
