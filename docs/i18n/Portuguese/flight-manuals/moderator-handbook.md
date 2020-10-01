# Manual oficial do Moderador Cadastro de Cadastramento.

Isso ajudará você a moderar lugares diferentes em nossa comunidade, incluindo:

- Problemas no GitHub & pull requests
- O fórum, salas de bate-papo, grupos do Facebook e outros locais de reuniões online
- Eventos presenciais como grupos de estudo, hackathons e conferências

**Todos os moderadores são moderadores em toda a comunidade. Isso significa que confiamos em V. Exa. para supervisionar qualquer destes lugares.**

Dito isto, você pode servir como moderador em quaisquer lugares que sejam do seu maior interesse. Alguns moderadores apenas ajudam no GitHub. Outros apenas ajudam no fórum. Alguns moderadores estão ativos em toda parte.

O mais importante é que queremos que você goste de ser um moderador, e invista seu tempo escasso em lugares que sejam de interesse para você.

> [!NOTA] "Com grande poder vem grande responsabilidade." - Tio Ben

Como moderador, temperamento é mais importante do que habilidade técnica.

Escutem. Seja útil. Não abuse do seu poder.

free CodeCamp é uma comunidade inclusiva, e temos de a manter assim.

Temos um código de conduta único que rege toda a nossa comunidade. Quanto menos forem as regras, mais fáceis de recordar. Você pode ler essas regras e confirmá-las na memória [aqui](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Os moderadores têm a capacidade de fechar issues e aceitar ou fechar pull requests.

Moderadores têm duas responsabilidades primárias em relação ao GitHub:

1. QA'ing e merge de pull requests
2. Avaliando e respondendo a problemas

## Moderando Pull Requests

Pull Requests (PRs) são como os colaboradores enviam alterações para o repositório do freeCodeCamp. É importante que realizemos uma Garantia de Qualidade (QA) nos pull requests antes de decidirmos se os mesclamos ou fechamos.

### Tipos de Pull Requests

1. **Edições de Instrução de Desafios** Estas são mudanças no texto dos desafios - Descrição, Instruções ou Texto de Testes. Você também pode revisá-los corretamente no GitHub e decidir se deseja mesclá-los. Temos de ser um pouco mais cuidadosos com estas medidas, porque milhões de pessoas vão encontrar este texto no seu trabalho através do currículo "freeCodeCampo". O pull request torna o texto mais claro sem deixá-lo muito mais longo? As edições são relevantes e não são excessivamente pedantes? Lembrem-se que o nosso objectivo é que os desafios sejam o mais claros e o mais curtos possível. Eles não são o lugar para detalhes obscuros. Além disso, contribuidores podem tentar adicionar links para os recursos dos desafios. Você pode fechar estes pull requests e responder com isto:

   > Obrigado por seu pull request.
   > 
   > Termino este pull request. Por favor, adicione links e outros detalhes ao artigo guia correspondente do desafio.
   > 
   > Se você acha que estou errado ao fechar este problema, por favor, reabra-o e adicione mais esclarecimentos. Muito obrigado e feliz codificação.

2. **Edições do Código de Desafios** Estas são mudanças no código de um desafio - Semente de Desafio, Solução de Desafios e Strings de Testes. Esses pull requests precisam ser removidos do GitHub e testados em seu computador local para se certificar de que os testes de desafio ainda podem ser passados com a solução atual. e o novo código não introduz nenhum erro. Alguns contribuidores podem tentar adicionar testes adicionais para cobrir casos caídos pedantes. Temos de ter o cuidado de não complicar demasiado o desafio. Estes desafios e os seus testes devem ser tão simples e intuitivos quanto possível. Além dos desafios do algoritmo e da seção de preparação da entrevista, os alunos devem ser capazes de resolver cada desafio em cerca de 2 minutos.

3. **A Codebase altera** Estas edições de código alteram a funcionalidade da própria plataforma freeCodeCamp. Às vezes contribuidores tentam fazer mudanças sem muita explicação, mas para que as alterações de código sejam necessárias para garantir que haja uma verdadeira necessidade de mudança. Portanto, esses pull requests devem fazer referência a um problema existente no GitHub, onde são discutidos os motivos da alteração. Então você pode abrir o pull request no seu computador e testá-los localmente. Depois que tiver feito isso, se as mudanças estiverem boas, não mescle elas ainda assim. Você pode comentar sobre o pull request dizendo "LGTM", e mencionar @raisedadead para que ele possa dar um olhar final.

### Como fazer merge ou fechar pull requests

Em primeiro lugar, quando você escolhe um pull request para controle de qualidade, você deve atribuir a si mesmo a ele. Você pode fazer isso clicando no link "Atribuir" abaixo da parte "atribuídos" na coluna direita da interface do GitHub.

Dependendo do tipo de pull request que é, siga as regras correspondentes listadas acima.

Antes de mesclar qualquer pull request, certifique-se de que o GitHub tem checkmarks verdes para tudo. Se houver qualquer X, investigue-os primeiro e descubra como fazê-los transformar em checkmarks verdes primeiro.

Às vezes haverá um Conflito de Mesclagem. Isso significa que outro pull request fez uma alteração na mesma parte exata do mesmo arquivo. O GitHub tem uma ferramenta para resolver esses conflitos de merge diretamente no GitHub. Você pode tentar resolver esses conflitos. Basta usar seu melhor julgamento. As alterações do pull request serão no topo, e as alterações do branch principal serão abaixo. Por vezes, haverá informação redundante que pode ser eliminada. Antes de terminar, certifique-se de excluir o `<<<<<<`, `======`, e `>>>>>>` que o Git adiciona para indicar áreas de conflito.

Se o pull request parece pronto para mesclar (e não requer aprovação de @raisedadead), você pode ir em frente e mesclá-lo. Certifique-se de usar a funcionalidade padrão "Squash and Merge" no GitHub. Isto irá esmagar todos os commits de pull requests em um único commit, o que tornará o histórico do Git muito mais fácil de ler.

Em seguida, você deve comentar na pull request, agradecendo ao colaborador da sua própria maneira pessoal.

Caso o autor da pull request seja um "colaborador pela primeira vez", você também deve felicitá-los por seu primeiro pull request com merge de um repositório. Pode-se olhar para o canto superior direito do corpo da RP para determinar um contribuinte pela primeira vez.  Ele irá mostrar o `primeiro colaborador` como mostrado abaixo:

![Copiar_editar_para_Java_arrays_article_por_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp,690x281](https://i.imgur.com/dTQMjGM.png)

Se o pull request não parece pronto para fazer o merge, você pode responder educadamente dizendo ao autor o que ele deve fazer para prepará-lo. Esperamos que eles respondam e que preparem seu pull request.

Muitas vezes, um pull request é manifestamente pouco empenhado. Você costuma dizer isso imediatamente quando o colaborador não se incomodava em marcar as caixas de seleção no modelo de Pull Request, ou usou um título genérico de pull request como "alterações feitas" ou "índice de atualização. d".

Há também situações em que o colaborador está tentando adicionar um link para o seu próprio site, ou inclua uma biblioteca que eles mesmos criaram, ou tem uma edição frívola que não serve para ajudar ninguém, exceto a si mesmos.

Em ambas as situações, você deve prosseguir e fechar sua pull request e responder com esta mensagem padrão:

> Obrigado por abrir este pull request.
> 
> Esta é uma mensagem padrão avisando que revisamos sua pull request e decidimos não fazer o merge. Gostaríamos de receber futuros pull requests.
> 
> Muito obrigado e feliz codificação.

Se você precisar de uma segunda opinião em uma pull request, vá em frente e deixe seus comentários no pull request, em seguida, adicione o rótulo "discutir" ao pull request.

## Moderando problemas no GitHub

freeCodeCamp é um projeto de código aberto ativo. Todos os dias recebemos novas questões, todas elas precisam de ser testadas e identificadas.

### Tipos de Problemas no GitHub

1. **Code Help Requests**, para os quais as pessoas criaram erroneamente problemas no GitHub. Se alguém estiver pedindo ajuda, cole a seguinte mensagem, então feche o problema.

   > Obrigado por relatar este problema.
   > 
   > Esta é uma mensagem padrão que notifica que este problema parece ser um pedido de ajuda. Ao invés de pedir ajuda aqui, por favor, clique no botão \*\*"Ajuda"\*\* no desafio no freeCodeCamp, que o ajudará a criar uma pergunta na parte correta do fórum. Voluntários no fórum geralmente respondem a perguntas dentro de algumas horas e podem ajudar a determinar se há algum problema com seu código ou com os testes do desafio.
   > 
   > Se os membros do fórum determinarem que não há nada de errado com seu código, você pode solicitar que essa issue seja reaberta. 
   > 
   > Muito obrigado e feliz codificação.

2. **Bug ou problemas de esclarecimento** Tente reproduzir o bug você mesmo, se puder. Se não, peça a eles as etapas para reproduzir o erro, e se eles têm alguma captura de tela, vídeos ou detalhes adicionais que podem ajudá-lo a reproduzir o problema. Uma vez que você possa reproduzir a issue - ou pelo menos confirmar que é uma issue legítima - rotule-a como `confirmada`. Então:

- Se for uma mudança simples para um desafio existente, rotule como `primeiros temporizadores somente`, caso contrário, label como `help desejado`. Use outros rótulos conforme apropriado.
- Se a questão for mais significativa, sinalize como `bug`. &nbsp; Se houver alguma ambiguidade quanto ao rumo adequado da ação em uma questão, Sinta-se à vontade para marcar @raisedadead sobre o problema obter sua opinião sobre o assunto, e então adicionar o rótulo `discutindo`.

3. **Problemas duplicados** Se uma issue é o mesmo que outro problema reportado, a issue reportada anterior deve ter prioridade. Marque como `Duplicar`, cole a seguinte mensagem substituindo `#XXXXX` pelo número do problema, e então feche a issue.

   > Obrigado por relatar este problema.
   > 
   > Esta é uma mensagem padrão avisando que este problema parece ser muito semelhante à issue #XXXXX, É por isso que a encerro como uma duplicação.
   > 
   > Se você acha que estou errado ao fechar este problema, por favor, reabra-o e adicione mais esclarecimentos. Muito obrigado e feliz codificação.

4. **Corrigido no staging** Alguns problemas podem já ter sido corrigidos no staging, mas não tem um problema no GitHub associado a eles. Se esse for o caso, você pode colar a seguinte mensagem, fechar o problema e adicionar um status de `: resolveu/frete` label:

   > Obrigado por relatar este problema.
   > 
   > Esta é uma mensagem padrão que informa que o problema que aqui referiu está presente em produção. mas que já foi fixada em estagnação. Isto significa que na próxima vez que pressionarmos o ramo de preparação para a produção, este problema deve ser resolvido. Por causa disso, estou encerrando essa questão.
   > 
   > Se você acha que estou errado ao fechar este problema, por favor, reabra-o e adicione mais esclarecimentos. Muito obrigado e feliz codificação.

### Fechando o Estale, Desatualizado, Issues Inativas e Pull Requests

- Problemas obsoletos ou PRs são aqueles que não viram nenhuma atividade do OP por 21 dias (3 semanas após a última atividade), mas somente após um moderador solicitar mais informação/alterações.  Estes podem ser fechados em um script automático/bot ou pelos próprios moderadores.

- Atividade é definida como: Comentários solicitando uma atualização no PR e triagens como o status `: atualização necessária` label etc.

- Se o OP pedir assistência adicional ou mesmo tempo, o acima pode ser relaxado e revisto após uma resposta. De qualquer forma, os mods devem usar o seu melhor julgamento para resolver o status de RP pendente.

### Outras diretrizes para moderadores no GitHub

Embora você tenha acesso de escrita ao repositório do freeCodeCamp, **você nunca deve enviar o código diretamente para repositórios do freeCodeCamp**. Todos os códigos devem inserir a base de código do freeCodeCamp na forma de uma pull request de uma bifurcação do repositório.

Além disso, você nunca deve aceitar suas próprias PRs. Eles devem ser QA'd por outro moderador, assim como qualquer outro PR.

Se você notar que alguém quebrou o [código de conduta](https://code-of-conduct.freecodecamp.org) em questões GitHub, ou abrindo pull requests com conteúdo ou código malicioso, e-mail dev@freecodecamp. rg com um link para a solicitação de tração contrária e podemos considerar bani-los da organização do freeCodeCamp no GitHub.

# Moderando o Fórum

Como moderador, você ajuda a manter nossa comunidade um lugar agradável para qualquer pessoa aprender e buscar ajuda. Você lidará com postagens sinalizadas e tratará de spam, fora do tópico e outras conversas inapropriadas.

Note que uma vez que você é um moderador no fórum, você vai começar a ver dicas azuis sobre os membros do fórum. como"esta é a primeira vez que o [person] postou - vamos dar as boas-vindas à comunidade! ou "[person] não postou há muito tempo - vamos recebê-los de volta."

![Uma mensagem de texto azul dizendo "esta é a primeira vez [person] que postou - vamos dar as boas-vindas à comunidade!](https://i.imgur.com/mPmVgzK.png)

Estas são oportunidades para você recebê-las e fazê-las sentirem-se mais especiais. Nunca se sabe qual pessoa que está marginalmente envolvida pode ser o nosso próximo super-ajudante, ajudando muitas outras pessoas na sua viagem de codificação. Mesmo a menor bondade pode desencadear uma cascata de boas ações.

### Excluir publicações no fórum

Moderadores do fórum têm a capacidade de excluir as postagens do usuário. Você só deve fazer isso para as seguintes instâncias:

1. Alguém publicou uma imagem pornográfica ou graficamente violenta.
2. Alguém postou uma ligação ou código malicioso na natureza e pode prejudicar outros camufladores que clicam nela.
3. Alguém inundou um tópico com muitas mensagens de spam.

### Lidando com spam

Para a primeira postagem de spam de um usuário, envie uma mensagem explicando o problema e remova o link ou postar conforme apropriado. Deixe uma nota no perfil do usuário explicando a ação que você tomou. Se o problema persistir, siga o processo acima. Bloqueia silenciosamente o usuário de postar (usando a opção de silêncio no painel de Administração do Usuário), e então envie um aviso com o Código de Conduta. Marque a caixa na mensagem privada que indica que a sua mensagem é um "aviso formal."

Você pode fazer perguntas e relatar incidentes na [seção do fórum da equipe](https://forum.freecodecamp.com/c/staff).

### Lidando com conversas fora do tópico

Posts ou tópicos que parecem estar no lugar errado podem ser renomeados para o que for apropriado.

Em circunstâncias excepcionais, pode ser apropriado que um moderador bifurque uma discussão em vários assuntos.

Novamente, se você tiver algum problema ou dúvidas, faça um post com suas ações na categoria Pessoal, e marcar outro moderador se você quiser que eles revisem suas ações de moderação.

### Usuários menores

Nossos Termos de Serviço exigem que os usuários do freeCodeCamp tenham pelo menos 13 anos de idade. No caso que um usuário revele que ele tem menos de 13 anos envie a mensagem abaixo e exclua sua conta do fórum (se a exclusão não estiver disponível, suspender a conta é suficiente). Em seguida, envie um e-mail para [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) ou [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org) para excluir a conta freeCodeCamp do usuário também.

```markdown
ASSUNTO: Usuários com menos de 13 anos não têm permissão para usar o fórum por termos de serviço

Chegou à nossa atenção o facto de você ter menos de 13 anos de idade. Por força dos [termos de serviço](https://www.freecodecamp.org/news/terms-of-service), você deve ter pelo menos 13 anos para usar o site ou o fórum. Vamos excluir sua conta no Modo Livre e sua conta no fórum. Esta restrição mantém-nos em conformidade com as leis dos Estados Unidos.

Por favor entre novamente quando tiver pelo menos 13 anos de idade.

Obrigado pela vossa compreensão.
```

# Moderação do Facebook

Se você ver algo que pareça quebrar nosso [Código de Conduta](https://code-of-conduct.freecodecamp.org/), você deve excluí-lo imediatamente.

Às vezes, as pessoas publicam coisas que acham engraçadas. Eles não percebem que o que disseram ou o que compartilharam podem ser interpretados como ofensivos. Nesses casos, sua publicação deve ser excluída, mas a pessoa que a publicou não precisa necessariamente ser banida. Ao serem deletados o seu cargo, espera-se que venham a compreender que o que publicaram era inadequado.

Mas se é um delito flagrante que não pode razoavelmente ser atribuído a uma diferença cultural ou a um mal-entendido da língua inglesa. então você deve considerar fortemente bloquear o membro do grupo do Facebook.

# Moderando o Discord

Veja como os moderadores lidam com violações do nosso [Código de Conduta](https://code-of-conduct.freecodecamp.org/) no Discord:

1. **Certifique-se de que a intenção foi violar o Código de Conduta.** Nem todas as violações do CoC se destinavam a tal. Um novo camper pode postar uma grande quantidade de código para ajuda, sem saber que isso pode ser considerado spamming. Nesses casos, você pode apenas pedir que cole o código com serviços como Codepen ou Pastebin.

2. **Se o acampador violar claramente o Código de Conduta, o moderador procederá da seguinte forma:**

- Suspender o acampamento ofensivo, mas não avisar ou ameaçá-los. Em vez disso, dê a eles a função Suspensa no Discord, e então envie-lhes a seguinte mensagem:

```
Esta é uma mensagem padrão avisando que tive que te suspender temporariamente de falar no servidor do Discord freeCodeCamp.

Sou um moderador agindo em nome da nossa comunidade de código aberto. Eu posso considerar a remoção de sua suspensão, mas preciso que você dê os seguintes 3 passos primeiro:

1. Leia o nosso Código de Conduta: https://code-of-conduct.freecodecamp.org/
2. Mande-me uma mensagem confirmando que você terminou de lê-la.
3. Me explique por que você acha que eu te suspendi e por que devo remover sua suspensão.
```

- Reporte um breve resumo do evento e como eles responderam a ele no canal #admin. Aqui está um exemplo de como esse resumo pode parecer:

```
Suspenso: _@username_
Motivo(s): _Spamming, trolling_
evidência: _Um ou mais links para a(s) mensagem(ns)_
CoC: _Enviado_
```

- Deve ser parecido com um relatório para a eliminação da suspensão:

```
Eu removi a suspensão de ` @username `. Eu lhes enviei o Código de Conduta. Hoje, eles perceberam que foram suspensos e pediram desculpas pelo que fizeram.
```

- Com base na resposta dos delinquentes, o moderador decidirá se deseja retirar a suspensão do acampamento delituoso. Se parecerem respeitadores e desculpas, o moderador pode remover a suspensão. Por uma questão de política, os moderadores serão educados durante este processo, por muito pobre que tenha sido o acampamento delituoso. Se eles não são respeitadores ou não estiverem dispostos a aceitar o CoC, a suspensão deve ser seguida de um banimento do servidor do Discord. Utilize o mesmo resumo como acima, mas substitua "Suspenso:" por "Banned:".

3. **Como banir e/ou desbanir**

- Para banir alguém, clique com o botão direito na foto de usuário/perfil deles e selecione "Banir <username>". Você terá a opção de excluir suas mensagens anteriores - selecione "Não excluir nenhum", uma vez que as mensagens devem permanecer presentes como um recorde histórico.
- Se você decidir banir alguém, isso significa que eles não estão dispostos a cumprir o nosso Código de Conduta. Por conseguinte, a proibição de um Camper raramente deverá ocorrer. No entanto, se surgir a necessidade, você pode fazê-lo clicando no nome do servidor, escolhendo "Configurações do servidor", escolhendo "Bans", selecionando o usuário que deseja desbanir, e clicando em "Revogar Bando".

Os banimentos do Discord são globais - você não pode banir um usuário de um canal específico, somente do servidor inteiro.

4. **Excluindo mensagens** Moderadores podem excluir mensagens no Discord. Deverão exercer essa capacidade apenas em quatro situações muito específicas:

- Alguém publicou uma imagem pornográfica ou graficamente violenta.
- Alguém postou uma ligação ou código malicioso na natureza e pode prejudicar outros camufladores que clicam nela.
- Alguém inundou o bate-papo com muitas mensagens de spam em medida extrema (geralmente envolvendo bots) que tornam o chat completamente inutilizável.
- Alguém publicou anúncio e / ou uma mensagem / imagem auto-promovida (mídias sociais).

Em todas as outras situações - mesmo em situações em que o código de conduta é violado - os moderadores não devem apagar a mensagem, uma vez que se trata de um importante registo histórico. Quando você apagar uma mensagem, certifique-se de tirar uma captura de tela primeiro! A captura de tela pode ser registrada no canal #mod-log, mas para o #log de actividades, é suficiente dizer que a evidência foi "removida devido a um conteúdo sensível". Nota: Se a mensagem contém material que seria ilegal para tirar uma captura de tela, copie o link da mensagem - forneça o link da mensagem para @raisedadead para avançar para a equipe de confiança e segurança do Discord.

5. **Não use @all ou @here** Não use @all ou @here sob nenhuma circunstância! Cada pessoa naquela sala de bate-papo receberá uma notificação. Em alguns casos, dezenas de milhares de pessoas. Em vez disso, se querem que as pessoas vejam um anúncio, podem fixá-lo no canal para permitir que todos o lem.

6. **Não ameace banir ou suspender** Se um camper está quebrando o código de conduta, não ameace banir ou suspendê-los e nunca avisá-los em público. Em vez disso, fale com eles em privado, ou envie-lhes um MD e emita uma suspensão (por acordo com o protocolo acima). Ninguém mais desse canal precisa saber que você baniu / suspendeu a pessoa - os camponeses podem ver o resumo no canal #activity-log se quiserem continuar acompanhando essas informações. Se uma violação tiver sido claramente não intencional e não justificar uma suspensão ou conversa privada, sensibiliza o acampador ofuscante de suas ações / dela sem fazê-lo aparecer como um aviso. Por exemplo:

- Camper postou uma parede de código para solicitar ajuda

  Moderador: @username Use Codepen ou Pastebin para postar grandes quantidades de código.

- Ou se você realmente tem que explicar o porquê:

  Moderador: @username Use Codepen ou Pastebin para publicar grandes quantidades de código, porque perturba o chat para todos e pode ser considerado spamming de acordo com o nosso Código de Conduta.

- Para violações suaves e não intencionais do código de conduta

  Moderador: Este é um lembrete amigável para todos seguirem o código de conduta: https://code-of-conduct.freecodecamp.org/

7. **Não se divirta em ser moderador** Não se veja como acima da comunidade. Você é a comunidade. E a comunidade confiou em você para proteger algo raro que todos compartilhamos - um _lugar_ de recepção para novos desenvolvedores. Se você se gaba de ser um moderador, as pessoas podem se sentir desconfortáveis ao seu redor, da mesma forma que as pessoas podem se sentir desconfortáveis ao redor de um policial, mesmo que não estejam fazendo nada de errado. Isto é apenas uma natureza humana.

8. **Não contradiga os outros moderadores** Se você discordar da ação de um moderador, fale com eles em privado ou levante-o no canal de chat #mod. Nunca sobrescrever um banimento e nunca contradiz os outros moderadores publicamente. Em vez disso, realizem uma discussão fria no chat de moderação e convençam o moderador de que ele próprio deveria reverter a sua proibição ou mudar o seu ponto de vista. Lembre-se: estamos todos na mesma equipe. Queremos dignificar o papel dos moderadores e apresentar uma frente unificada.

9. **Fale com outros moderadores** Só temos espaço para moderadores. Use-o. Se você se sentir desconfortável com como lidar com uma determinada situação, peça ajuda a outros moderadores. Se você acha que algo deveria ser discutido, faça. Você é parte da equipe e valorizamos a entrada de cada membro da equipe! Mesmo que você discorde totalmente de qualquer coisa destas orientações ou do Código de Conduta!

10. **Temporariamente inativo** Se você não estiver ativo como moderador por um tempo de férias, doença ou qualquer outro motivo, certifique-se de que os outros saibam no canal de chat #mod. É assim que sabemos se podemos contar com você para estar regularmente ativo no servidor ou não.

# Como se tornar um moderador

Se você estiver ajudando pessoas da comunidade de forma consistente ao longo do tempo, nossa equipe de moderadores eventualmente tomará nota, e um deles vai te mencionar como um moderador possível de [nossa equipe](https://forum.freecodecamp.org/g/Team). Não há atalhos para se tornar um moderador.

Se você for aprovado, vamos adicioná-lo a nosso Moderador Times no [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [fórum](https://forum.freecodecamp.org/g/moderators), etc.

> [!NOTE] > **Para o GitHub:** Depois de ser aceito como moderador, você receberá um convite para o repositório do Github. Você precisará ir para [freeCodeCamp GitHub Organisation convite](https://github.com/orgs/freeCodeCamp/invitation) para poder aceitar o convite. Isso é necessário para que possamos lhe dar acesso de escrita em alguns dos nossos repositórios.

# Como aposentamos moderadores inativos

Por favor, note que frequentemente removeremos mods que achamos estarem inativos. Quando fizermos isso, enviaremos a seguinte mensagem:

> Esta é uma mensagem padrão avisando que, já que você não parece ter sido um moderador ativo recentemente, nós o removemos de nossa equipe de moderadores. Agradecemos profundamente a sua ajuda no passado.

> Se você acha que fizemos isso por engano, ou quando você estiver pronto para voltar e contribuir mais, apenas responda a essa mensagem me informando.

# Como funciona a sala dos nossos colaboradores

Qualquer pessoa é bem-vindo na sala de [Colaboradores no nosso Discord](https://discord.gg/KVUmVXA). É a sala de bate-papo designada para moderadores e outros campistas que estão contribuindo para a nossa comunidade de todas as maneiras incluindo através de grupos de estudo.

Nossa suposição é que contribuidores irão ler qualquer coisa nesta sala que os mencionam diretamente com um `@username`. Tudo o resto é opcional. Mas sinta-se à vontade para ler o que quer que seja lá posto e interagir.

# Lidando com solicitantes

Você pode ser abordado por organizações que queiram parceira ou co-marca com o freeCodeCamp de alguma forma. Assim que você perceber que é isso que eles estão depois, por favor pare de falar com eles e diga-lhes para enviar um e-mail para quincy@freecodecamp.org. Ele recebe sempre propostas como esta e está em melhor posição para avaliar se tal relação valerá a pena para a nossa comunidade (e raramente vale).

# Lidando com dúvidas (mentais) sobre saúde

Você pode encontrar situações em que os usuários estão à procura de aconselhamento médico ou estão a lidar com problemas de saúde mental e estão à procura de apoio. Por uma questão de política, deveria evitar falar em privado sobre estas questões. Caso a situação em algum momento reflicta o fCC, queremos que as conversas sejam registadas. Deixar claro que não somos profissionais de saúde e que você incentiva o usuário a encontrar ajuda profissional. Por mais difícil que seja às vezes, evite dar dicas ou conselhos além de apontar o usuário para a ajuda profissional!

Se isso acontecer no Discord: Suspense o usuário. Não se trata de os castigar! Suspender um usuário criará um canal privado que só é acessível pelo usuário e pela equipe. Isso irá beneficiar tanto o usuário como o fCC de várias maneiras:

- O usuário tem a garantia de alguma privacidade
- O chat público não está mais interrompido
- Outros membros da equipe podem intervir, caso você se sinta desconfortável em lidar com a situação você mesmo

> [!NOTE] Suspender um usuário automaticamente lhe dá uma mensagem sobre a leitura do nosso Código de Conduta. Certifique-se de informar ao usuário que você o suspendeu para dar alguma privacidade a ele e que ele não está sendo punido. Isto é muito importante! Nós queremos, absolutamente, evitar dar aos usuários a ideia de que eles estão sendo punidos por conseguirem ajuda!

Se você acredita que o usuário é capaz de se rejuntar à comunidade, clique com o botão direito no canal privado e copie o ID. Coloque as seguintes mensagens no log #mod:

> Referência de aconselhamento médico: <channel ID> <username>

Depois disso, você pode remover a suspensão do usuário como normalmente faz.

URLs úteis:

http://www.suicide.org/international-suicide-hotlines.html

# Uma nota sobre a voz livre

Às vezes as pessoas vão defender algo ofensivo ou incendiário que disseram como "liberdade de expressão".

Esta cómica XKCD resume perfeitamente a maioria dos pensamentos das comunidades sobre a liberdade de expressão. Então se alguém defender algo que está dizendo como "voz livre" sinta-se à vontade para enviá-lo para eles.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Obrigado por ler isto, e obrigado por ajudar a comunidade de desenvolvedores!
