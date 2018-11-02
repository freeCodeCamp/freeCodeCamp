---
title: Chef
localeTitle: líder
---
## Chefe de cozinha

Chef é uma ferramenta de automação que transforma a infraestrutura em código. Em outras palavras, é uma ferramenta usada para automatizar a criação e a configuração de sua infraestrutura. Também é usado para manter sua infraestrutura depois de criada.

### Por que usar o Chef

Há várias coisas a considerar antes de um aplicativo totalmente concluído e testado entrar em produção. Algumas das principais coisas são,

*   Criação de infraestrutura (nuvem ou on-premisis)
*   Configuração
*   Manter infra-estrutura

Você pode criar manualmente sua infraestrutura, configurá-la e mantê-la. É um processo muito tedioso e as chances de cometer um erro são altas. Qualquer manual exige muita atenção aos detalhes, treinando outros membros da sua equipe e constantemente atentos para garantir que tudo esteja funcionando como esperado. Se a sua aplicação evoluir rapidamente, toda vez que for para a produção, você terá que fazer todos esses trabalhos manualmente.

Chef é uma ferramenta que ajuda na automação deste processo. Você escreve código (o chef usa _Ruby_ ) para sua infraestrutura e controle de origem. Chef lerá este código para criar e configurar sua infraestrutura automaticamente. As vantagens de usar o Chef são,

*   A criação e configuração da infraestrutura é automatizada
*   Monitoramento e manutenção são automatizados
*   As chances de um erro são insignificantes
*   Infraestrutura é controlada por fonte
*   Implemente o aplicativo rapidamente e com frequência

### Imagem grande e componentes

![Chef big picture](https://docs.chef.io/_images/chef_overview.svg "Visão geral do chef")

Os principais componentes são,

*   Livro de Receitas e Receitas
*   Nó
*   Posto de trabalho
*   Chef Server
*   Chef Client

#### Livro de Receitas e Receitas

Um livro de receitas é a unidade fundamental da configuração. Ele define um cenário e contém tudo o que é necessário para suportar esse cenário. Livro de receitas contém as seguintes coisas,

*   Receitas
*   Valores de atributo
*   Distribuições de arquivos
*   Modelos
*   Extensões para recursos e bibliotecas customizados

Receita é o elemento de configuração mais fundamental. É criado usando _Ruby_ e consiste em uma coleção de recursos necessários para configurar um sistema. Deve ser armazenado em um livro de receitas.

#### Nó

Um nó é qualquer máquina gerenciada pelo Chef. Pode ser físico, virtual, nuvem, dispositivo de rede, etc.

#### Posto de trabalho

Estação de trabalho (a região azul em grande figura) é um computador que executa o Kit de Desenvolvimento Chef (ChefDK) para desenvolver e testar livros de receitas e receitas. Basicamente, é a sua máquina local onde você escreve e testa os scripts Chef que são usados ​​posteriormente para automatizar a infraestrutura. Chef scripts da estação de trabalho é carregado para o Chef Server, uma vez que está pronto.

#### Chef Server

O servidor do chef atua como um hub para dados de configuração. Ele armazena todos os dados de configuração, como livros de receitas, receitas, modelos e distribuições de arquivos necessários para a criação e configuração da infraestrutura.

#### Chef Client

Um Chef Client é um agente que é executado localmente em todos os nós gerenciados pelo Chef. Ele se comunica com o Chef Server para obter os dados de configuração necessários para configurar o nó. O cliente Chef é responsável por executar todas as etapas necessárias para colocar um nó no estado esperado. As diferentes etapas incluem,

*   Registrando e autenticando o nó com o servidor Chef
*   Sincronizando livros de culinária
*   Compilando e executando as receitas necessárias
*   Lidando com exceções e notificações

#### Mais Informações:

Uma documentação mais detalhada pode ser encontrada aqui - [Documentação do Chef](https://docs.chef.io/chef_overview.html "Chefe de cozinha")