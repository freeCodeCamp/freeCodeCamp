---
title: Python Web Frameworks and What They Do 
localeTitle: Frameworks Python Web e o que eles fazem
---
Nós usamos a palavra `framework` bastante liberalmente nos artigos anteriores. Você pode ou não estar familiarizado com o que é isso. No entanto, discutiremos o que o Python Web Frameworks faz por você, pronto para uso.

Web Frameworks, para colocá-lo informalmente, faz por você o que estaria fazendo _repetidamente_ se você fosse construir muitos sites com diferentes funcionalidades.

Vamos dar um exemplo extremamente grosseiro e tentar fazer uma analogia simples. Diga, você vai jantar e é um restaurante chique. Poderia ser qualquer tipo de restaurante - italiano, mexicano, indiano, coreano, pan-asiático.

Tente pensar nas coisas comuns que acontecem em um restaurante quando um cliente entra. Um manobrista pode levar seu carro e validar o estacionamento. Você pode ser solicitado na recepção se você tivesse reserva; e quantos de seus amigos estão com você. Você provavelmente seria mostrado para a sua mesa, ou pediu para esperar - dependendo da multidão dentro.

Uma vez sentado, você seria perguntado se você queria água normal ou engarrafada. Então alguém perguntaria se você prefere bebidas. Você pode pedir algumas entradas, seguidas pelo prato principal; e finalmente, alguma sobremesa. Você tem que pagar a conta.

Eu entendo se você gostaria de ter um momento para fazer uma viagem pela estrada da memória, desfrutando de um delicioso toothsome. Quando estiver pronto, você precisa se colocar na posição da pessoa que está administrando o negócio.

Se você notar, existem algumas atividades que você está fazendo repetidamente para cada cliente. E com base no tipo de restaurante e na hora do dia, há algumas coisas que seriam diferentes. Por exemplo, o menu e os preços dos alimentos.

Diga, você está executando o negócio; Você também precisa lidar com outros aspectos deste negócio que um cliente seria alheio. Por exemplo; o salário da equipe, administrando livros, pagando aluguel e impostos sobre a propriedade, imprimindo novos cartões de menu etc.

Você está se perguntando para onde esta conversa está indo. Acalme-se! Estamos voltando ao desenvolvimento da Web do Python o mais rápido possível.

Um Web Framework faz essas atividades repetitivas para você - que você faria quando criava um aplicativo da Web usando apenas uma linguagem de programação e algumas bibliotecas de rede. Como o Gerenciamento de Solicitação, Roteamento de URL, Compilação de Template, Configuração de Contexto, Proteção CSRF, Registro em Log, Interação com Banco de Dados via ORM, Autenticação, Renderização de Resposta, etc.

Você provavelmente está se perguntando o que, então, é deixado para o desenvolvedor fazer? Com base no aplicativo, você precisa usar as APIs de estrutura e gravar sua lógica específica do aplicativo.

Seu código preencherá as lacunas deixadas _intencionalmente_ no código da estrutura - e combinará seu código com a estrutura; sua aplicação web teria a vida respirada!

Dois dos frameworks web mais populares no Python são Django e Flask. O Django é provavelmente o framework Python mais usado por aí. O Django ajuda você a construir sites onde você está interagindo tanto com seu cliente (usuário) quanto com seu banco de dados, freqüentemente simultaneamente. O Flask é um micro-framework, que também pode fazer muitas das tarefas que o Django faz, mas usando extensões feitas pela comunidade. Outras estruturas que merecem destaque são os Pylons e o Tornado.

### Django

O Django (/ ˈdʒæŋɡoʊ / JANG-goh) é uma estrutura da Web gratuita e de código aberto, escrita em Python, que segue o padrão arquitetural model-view-template (MVT). Ele é mantido pela Django Software Foundation (DSF), uma organização independente estabelecida como uma organização sem fins lucrativos 501 (c) (3).

O principal objetivo do Django é facilitar a criação de sites complexos, orientados a banco de dados. O Django enfatiza a capacidade de reutilização e "conectividade" dos componentes, o desenvolvimento rápido e o princípio de não se repetir. O Python é usado por toda parte, mesmo para arquivos de configurações e modelos de dados. O Django também fornece uma interface opcional de criação, leitura, atualização e exclusão administrativa que é gerada dinamicamente através de introspecção e configurada através de modelos de administração.

Alguns sites bem conhecidos que usam o Django incluem o Public Broadcasting Service, o Instagram, o Mozilla, o Washington Times, o Disqus, o Bitbucket e o Nextdoor. Foi usado no Pinterest, mas depois o site mudou para um framework construído sobre o Flask.

### Balão

O Flask é um aplicativo da Web leve do WSGI e um micro-framework que é classificado como um microframework porque não requer ferramentas ou bibliotecas específicas. Ele foi projetado para tornar os primeiros passos rápidos e fáceis, com a capacidade de expandir para aplicativos complexos. No entanto, o Flask suporta extensões que podem adicionar recursos de aplicativos como se fossem implementados no próprio Flask. Existem extensões para mapeadores relacionais de objetos, validação de formulários, manipulação de uploads, várias tecnologias de autenticação abertas e várias ferramentas relacionadas a estruturas comuns. As extensões são atualizadas com muito mais regularidade do que o programa Flask principal. O Flask é comumente usado com o MongoDB (NOSQL DataBase), que permite mais controle sobre bancos de dados e histórico.

Começou como um simples invólucro em torno de Werkzeug e Jinja e se tornou um dos mais populares frameworks de aplicações web em Python.

O Flask oferece sugestões, mas não impõe nenhuma dependência ou layout do projeto. Cabe ao desenvolvedor escolher as ferramentas e bibliotecas que deseja usar. Existem muitas extensões fornecidas pela comunidade que facilitam a adição de novas funcionalidades.

O frasco foi feito em 2004 por um grupo internacional de pitonistas chamado "Pocoo", como uma piada do primeiro de abril, que mais tarde foi transformada em uma coisa "real". Segundo a Wikpedia, foi o framework web Python mais usado no Github. É um micro-framework livre e de código aberto escrito em Python ( [veja no GitHub](https://github.com/freeCodeCamp/guide/tree/master/src/pages/javascript) ). Como os estados da Wikipedia,

O frasco é classificado como um microframework porque não requer ferramentas ou bibliotecas específicas. Ele não possui uma camada de abstração de banco de dados, validação de formulário ou qualquer outro componente em que as bibliotecas de terceiros pré-existentes forneçam funções comuns.

O Flask é muito mais uma estrutura de 'baterias não incluídas', comparado a algo como o Django. Isso significa que você precisa instalar módulos como autenticação de usuário, formulários e outras coisas. Não é para dizer que o Flask não é feito para essas coisas, simplesmente que elas não estão incluídas e esses módulos são feitos pela comunidade. O Flask também possui extensa documentação detalhada disponível em http://flask.pocoo.org/docs/. Ele fornece simplicidade e mais controle sobre coisas menores. Você não terá funcionalidades que não estão sendo usadas, pois você pode escolher o que é adicionado e o que não é.

Sites que usam Flask incluem Pinterest! (que mudou do Django), as API's privadas do Twilio (elas até criaram uma extensão chamada Flask-RESTful para API's), e o Netflix (que usa o ScriptFlask, uma ferramenta baseada no Flask)

### Garrafa

O Bottle é um micro-framework do Python que permite que os usuários se instalem e executem rapidamente com um aplicativo da Web em Python. É muito mais leve do que algo mais completo, como o Django, e não tem dependências de terceiros contando apenas com a biblioteca padrão do Python.

Isso o torna perfeito para pequenas aplicações web, onde alguns dos recursos mais avançados do Django, como autenticação, ou acesso ao banco de dados não seriam necessários.