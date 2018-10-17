---
title: Freecodecamp Moderator Guidelines
localeTitle: Diretrizes do Moderador Freecodecamp
---
# Os pilares da moderação

Acima de tudo, lembre-se que o seu propósito como moderador é servir a nossa comunidade:

*   Ouço
*   Seja útil
*   Não abuse do seu poder

# Moderando Gitter

Veja como os moderadores lidam com violações do nosso [Código de Conduta](https://www.freecodecamp.com/code-of-conduct) no Gitter:

1.  Os moderadores irão proibir a pessoa ofensora imediatamente.
    
2.  Os moderadores enviarão a eles a seguinte mensagem:
    
    > Esta é uma mensagem padrão notificando que eu tive que bani-lo temporariamente das salas de chat do freeCodeCamp.
    > 
    > Eu sou um moderador agindo em nome da nossa comunidade de código aberto. Eu posso considerar desbanir você, mas eu preciso que você faça algo primeiro.
    > 
    > 1\. Leia nosso [**`Code of Conduct`**]([https://www.freecodecamp.com/code-of-conduct) ).  
    > 2\. Por favor, confirme que você leu.  
    > 3\. Explique-me por que você acha que eu bani você.
    
3.  Com base na sua resposta, os moderadores decidirão se desassociar o campista infrator. Se o campista ofensor não tiver sido banido por esse moderador antes, e se ele parecer respeitoso e apologético, o moderador poderá liberá-lo. Por uma questão de política, os moderadores serão educados durante este processo, não importa o quão mal o agressor se tenha comportado.
    
4.  Os moderadores digitarão um breve resumo do evento e como eles responderam a ele na [sala de administração](https://gitter.im/freeCodeCamp/admin) . Veja um exemplo de como esses resumos podem parecer:
    
    > Eu bani @username por spamming e enviou-lhes o Código de Conduta. Eles disseram que lamentavam e que honestamente não sabiam o que estavam fazendo era considerado spam. Eu desbanquei eles.
    > 
    > Eu desbanquei @username . Enviei-lhes o Código de Conduta. Eles só hoje perceberam que foram banidos e se desculparam pelo que fizeram.
    > 
    > Eu bani @username por assédio. Eles ficaram mal comigo. Eu recomendo que entremos em contato com Gitter para uma proibição global.
    

Para banir alguém, digite o seguinte na sala de chat:

> `/ban @username`

Se eles cooperarem, você poderá desbanjá-los posteriormente com:

> `/unban @username`

Isso só funciona para esse quarto individual, então talvez seja necessário bani-los em mais de um lugar.

Se um campista continuar pulando de sala em sala causando problemas, os moderadores podem solicitar uma proibição global na [sala de administração](https://gitter.im/freecodecamp/admin) .

### Excluindo mensagens do Gitter

Os moderadores podem excluir mensagens no Gitter. Eles só devem exercitar essa habilidade em três situações muito específicas:

1.  Alguém postou uma imagem pornográfica ou graficamente violenta.
2.  Alguém postou um link ou código de natureza maliciosa e pode prejudicar outros participantes que clicarem nele.
3.  Alguém inundou o chat com muitas mensagens de spam de uma forma tão extrema (geralmente envolvendo bots) que tornou o chat completamente inutilizável.

Em todas as outras situações - mesmo em situações em que o código de conduta é violado - os moderadores não devem excluir a mensagem, pois são um registro histórico importante.

### Não use `@/all`

Não use _`@/all`_ sob nenhuma circunstância. Cada pessoa nessa sala de bate-papo receberá uma notificação. Em alguns casos, dezenas de milhares de pessoas.

Em vez disso, se você quiser que as pessoas vejam um anúncio, use um tamanho de texto de cabeçalho. Você pode fazer isso colocando `#` na frente da sua primeira sentença.

### Não avise ou ameace proibir

Se alguém está quebrando o código de conduta, não os avise ou ameace proibi-los. Em vez disso, silenciosamente bani-los, em seguida, mensagem privada-los e proceder de acordo com o protocolo acima. Ninguém mais na sala precisa saber que você baniu a pessoa.

### Não se gabar de ser um moderador

Não se veja acima da comunidade. Você é a comunidade. E a comunidade confiou em você para ajudar a proteger algo raro que todos nós compartilhamos - um lugar acolhedor para novos desenvolvedores.

Se você se gabar de ser um moderador, as pessoas podem se sentir desconfortáveis ​​perto de você, da mesma forma que as pessoas podem se sentir desconfortáveis ​​com um policial, mesmo que não estejam fazendo nada errado. Esta é apenas a natureza humana.

### Não contradiz outros moderadores

Se você não concordar com a ação de um moderador, fale com eles em particular ou troque-o no mod chat. Nunca anule uma proibição. Em vez disso, faça uma discussão moderada no mod-chat e convença o moderador de que eles mesmos devem reverter sua proibição.

Lembre-se: estamos todos no mesmo time. Queremos dignificar o papel dos moderadores e apresentar uma frente unificada.

# Moderando o GitHub

Os moderadores são voluntários que têm a capacidade de encerrar problemas e aceitar ou negar solicitações de recebimento.

Os moderadores têm duas responsabilidades principais em relação ao GitHub:

1.  Avaliando e respondendo a problemas
2.  QA'ing e mesclando solicitações de pull

### Avaliando e respondendo a problemas

O freeCodeCamp é um projeto ativo de código aberto. Recebemos dezenas de problemas todos os dias, os quais precisam ser triados e rotulados.

Existem várias classes gerais de problemas:

1.  **Solicitações de Ajuda de Código** , que não são apropriadas para problemas.  
    Se um problema for claramente alguém pedindo ajuda, cole a seguinte mensagem e feche o problema.
    
    > Obrigado por comunicar este problema.
    > 
    > Esta é uma mensagem padrão que notifica que esse problema parece ser uma solicitação de ajuda. Em vez de pedir ajuda aqui, clique no botão **"Ajuda"** do desafio sobre freeCodeCamp, que o levará para a sala de chat de ajuda para esse desafio específico. Você também pode ver nossa [**lista completa de salas de chat oficiais**](https://forum.freecodecamp.com/t/free-code-camp-official-chat-rooms/19390) ).
    > 
    > Se você acha que estou errado ao encerrar este problema, reabra-o e adicione mais esclarecimentos. Obrigado e feliz codificação.
    
2.  **Problemas de bugs ou esclarecimentos** Confirme o bug, se possível. Procure detalhes adicionais conforme necessário, como Etapas para Reproduzir. Uma vez que o problema tenha sido reproduzido - ou pelo menos considerado legítimo - o rótulo é `confirmed` . Então:
    
    *   Se for uma simples mudança para um desafio existente, marque a opção como a `help wanted` e, opcionalmente, como `first-timers-only` . Use outras tags conforme apropriado.
        
    *   Se o problema for mais significativo, marque como `bug` .
        
    *   [Guia de uso de etiquetas](https://forum.freecodecamp.com/t/free-code-camp-issue-labels/19556)
        
        Se houver alguma ambiguidade quanto à ação adequada em um problema, sinta-se à vontade para marcar **`@freeCodeCamp/moderators`** para obter opiniões de outros moderadores. Sinalizar como `Discussing` .
        
3.  **Problemas duplicados** Se um problema é o mesmo que outro problema relatado, o problema relatado anteriormente deve ter precedência. Marcar como `Duplicate` , cole a seguinte mensagem substituindo `#XXXXX` pelo número do problema e feche o problema.
    
    > Obrigado por comunicar este problema.
    > 
    > Esta é uma mensagem padrão notificando-o de que este problema parece ser muito semelhante ao da questão #XXXXX , por isso estou fechando-o como duplicado.
    > 
    > Se você acha que estou errado ao encerrar este problema, reabra-o e adicione mais esclarecimentos. Obrigado e feliz codificação.
    
4.  **Corrigido na preparação** Alguns problemas foram corrigidos no teste, mas não tem outro problema no mesmo tópico. Cole a seguinte mensagem e feche o problema:
    
    > Obrigado por comunicar este problema.
    > 
    > Esta é uma mensagem padrão que notifica você de que esse problema está presente na produção, mas foi corrigido no armazenamento temporário. Por causa disso, estou fechando essa questão. Quando o teste for enviado novamente para a produção, seu problema será resolvido.
    > 
    > Se você acha que estou errado ao encerrar este problema, reabra-o e adicione mais esclarecimentos. Obrigado e feliz codificação.
    
5.  **Derramamento de bicicleta O Derramamento de** bicicleta é um exemplo da [lei da trivialidade](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) de [Parkinson](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) . Algumas questões simplesmente não valem a pena consertar. Se você acredita que um problema não vale a pena, `bikeshedding` como " `bikeshedding` , cole e preencha a seguinte mensagem e feche o problema:
    
    > Obrigado por comunicar este problema.
    > 
    > _Dê uma breve explicação de por que isso é bikeshedding, uma forma da [lei da trivialidade](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) de [Parkinson](https://en.wikipedia.org/wiki/Parkinson%27s_law_of_triviality) , então estou fechando._
    > 
    > Se você acha que estou errado ao encerrar este problema, reabra-o e adicione mais esclarecimentos. Obrigado e feliz codificação.
    

### Solicitações de pull moderadas

Pull Requests (PRs) é como os contribuidores do freeCodeCamp enviam alterações para o repositório para consideração. É importante que esses PRs sejam formatados adequadamente e passem por um Teste de Garantia de Qualidade completo antes de serem mesclados.

### Puxe os requisitos de solicitação e a formatação

Todos os PRs devem atender aos seguintes requisitos antes de serem aceitos:

1.  Ele deve referenciar pelo menos um problema em aberto, e o corpo também deve incluir `closes #XXXXX` para cada número de problema que ele aborda (substituindo `#XXXXX` pelo número do problema)
2.  Deve ser contra o ramo de **`staging`**
3.  Deve ser a partir de um ramo não-temporário nomeado apropriadamente, na bifurcação pessoal do usuário de freeCodeCamp
4.  O título deve descrever a mudança feita
5.  Seu título não deve ter um número de problema nele
6.  Seu corpo deve fornecer detalhes sobre a mudança, bem como o nível de teste (ou seja, não testado, testado localmente)
7.  _As_ alterações _relacionadas_ devem ser eliminadas para confirmação única. Mas _as_ alterações _relevantes ou notáveis_ podem ter confirmações separadas.
8.  O código deve passar por todos os testes e linting

Se o PR não atender a um ou mais desses requisitos, abra uma revisão do GitHub, especificando quais dos 8 requisitos ainda não foram atendidos. Novos colaboradores podem ser encaminhados para a sala de bate-papo de [contribuidores](https://gitter.im/freeCodeCamp/Contributors) . A critério do moderador, o problema pode ser encerrado.

### Garantia de Qualidade (QA)

Supondo que os requisitos básicos para o PR sejam cumpridos, todos os PRs devem passar por algum nível de teste de QA. O processo mais básico de QA é verificar o PR localmente no seu computador e testar a funcionalidade alterada.

1.  Certifique-se de que você é capaz de reproduzir o problema localmente.
2.  Verifique se o PR realmente corrige o problema.
3.  Você pode responder ao problema com **"LGTM"** , que significa "parece bom para mim".
4.  Se você tiver alguma dúvida sobre se o PR deve ser mesclado, deixe que uma segunda pessoa o controle de qualidade e, em seguida, eles possam mesclá-lo.
5.  Se já houver um "LGTM" e você conseguir o controle de qualidade do PR, você deverá mesclá-lo.

Se houver alguma dúvida sobre a funcionalidade, você pode mencionar **`@freeCodeCamp/moderators`** para obter uma segunda opinião.

### Requisitos especiais

Os PRs que alteram a função subjacente do site ou fazem alterações não-triviais à interface do usuário ou ao UX do site devem ser aprovados por [@BerkeleyTrue](https://gitter.im/berkeleytrue) ou [@QuincyLarson](https://gitter.im/quincylarson) . Se tiver alguma dúvida, marque-as em um comentário e / ou chame a atenção delas para o PR através do Gitter Chat.

### Outras regras que governam os moderadores

Embora você tenha acesso de gravação ao repositório do freeCodeCamp:

*   **você nunca deve enviar o código diretamente para o repositório freeCodeCamp** . Todo o código deve inserir a base de código do freeCodeCamp na forma de um pedido pull de um fork do repo.
*   você nunca deve aceitar seus próprios PRs. Eles devem ser QA-ed por outro moderador, assim como com qualquer outro PR.

# Moderando o Fórum

Moderar o fórum segue os mesmos princípios que moderar o Gitter. O seguinte descreve as pequenas variações, para explicar as diferenças de Gitter na plataforma Discourse.

Os moderadores do fórum são responsáveis ​​por tornar a nossa comunidade um lugar agradável para qualquer pessoa aprender e obter ajuda. Os moderadores do fórum lidam com postagens sinalizadas e lidam com spam, conversas fora do tópico e outras conversas inapropriadas.

### Excluindo postagens do fórum

Os moderadores do fórum podem excluir as mensagens do usuário. Você deve fazer isso apenas nas seguintes instâncias:

1.  Alguém postou uma imagem pornográfica ou graficamente violenta.
2.  Alguém postou um link ou código de natureza maliciosa e pode prejudicar outros participantes que clicarem nele.
3.  Alguém inundou um tópico com muitas mensagens de spam.

### Lidando com spam

Para a primeira postagem de spam de um usuário, envie uma mensagem explicando o problema e remova o link ou poste conforme apropriado. Deixe uma nota no perfil do usuário explicando a ação que você tomou. Se o problema persistir, siga o processo acima. Bloquear silenciosamente o usuário da postagem e, em seguida, enviar um aviso com o Código de Conduta. Marque a caixa na mensagem privada indicando que sua mensagem é um "aviso formal".

Não é necessário usar a sala de administração do Gitter para relatar incidentes no fórum. Se você tiver dúvidas, por favor, pergunte na seção do fórum da [equipe](https://forum.freecodecamp.com/c/staff) .

### Lidando com conversas fora do tópico

Postagens ou tópicos que parecem estar no lugar errado, podem ser recategorizados ou renomeados para o que for apropriado.

Em circunstâncias excepcionais, pode ser apropriado para um moderador forçar uma discussão em vários tópicos.

Novamente, se você tiver algum problema ou dúvida, faça uma postagem com suas ações na categoria Equipe e marque outro moderador se quiser que eles analisem suas ações de moderação.

# Como se tornar um moderador

Você tem contribuído para a nossa comunidade e deseja o poder / responsabilidade adicional que advém de ser um moderador?

Reúna evidências que mostrem sua utilidade em questões do GitHub e / ou ajudando campistas no Gitter e em nossos fóruns, e envie no Gitter para:

*   [@BerkeleyTrue](https://gitter.im/berkeleytrue)
*   [@CodeNonprofit](https://gitter.im/codenonprofit)
*   [@QuincyLarson](https://gitter.im/quincylarson)

Requisitos adicionais:

*   Você deve ativar a autenticação de dois fatores na sua conta do GitHub.
*   Seu perfil do GitHub deve pelo menos ter seu primeiro nome.
*   Sua foto do GitHub deve mostrar seu rosto.

Se você for aprovado, nós o adicionaremos à nossa [equipe de moderadores](https://github.com/orgs/freeCodeCamp/teams/moderators) .

# Como retiramos os moderadores inativos

Por favor, note que freqüentemente removeremos os mods de problemas que achamos inativos. Quando fizermos isso, enviaremos a seguinte mensagem:

> Esta é uma mensagem padrão informando que, como você parece não ter sido um moderador ativo recentemente, estamos removendo você da nossa equipe do Google Moderator. Agradecemos profundamente sua ajuda no passado.
> 
> Se você acha que fizemos isso por engano, ou quando estiver pronto para voltar e contribuir mais, basta responder a esta mensagem, avisando-me.

# Como funciona a sala de nossos colaboradores

Qualquer pessoa é bem-vinda na [sala de colaboradores](https://gitter.im/freecodecamp/contributors) . É a sala de bate-papo designada para moderadores e outros campistas que estão contribuindo com a nossa comunidade de várias maneiras, inclusive por meio de grupos de estudo.

Nossa suposição é que os colaboradores lerão qualquer coisa nesta sala que os mencione diretamente com um `@username` ou seja direcionada para `@/all` . Tudo o resto é opcional. Mas fique à vontade para ler qualquer coisa que alguém posta lá e interagir.

# Como se tornar um moderador neste fórum

Se você já é um moderador, também pode solicitar o status de moderador neste fórum. Mensagem [@michaelhenderson](/users/michaelhenderson) aqui no fórum e ele verificará seu status de moderador no GitHub, e concederá o status de moderador aqui.

# Lidando com solicitadores

Você pode ser abordado por organizações que desejam fazer parcerias ou co-marcas com o freeCodeCamp de alguma forma. Depois que você perceber que é isso que eles estão procurando, pare de falar com eles e diga-lhes para falar diretamente com Quincy Larson . Ele recebe propostas como esta literalmente todos os dias e está na melhor posição para julgar se tal relacionamento valerá a pena para nossa comunidade (e raramente é).

# Definições

> As palavras-chave "deve", "não deve", "necessário", "deve", "não deve", "RECOMENDADO", "pode" e "opcional" neste documento devem ser interpretadas como descrito no [**RFC 2119**](https://www.ietf.org/rfc/rfc2119.txt) .