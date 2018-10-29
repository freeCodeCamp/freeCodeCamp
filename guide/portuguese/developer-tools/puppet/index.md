---
title: Puppet
localeTitle: Fantoche
---
## Fantoche

O Puppet é uma ferramenta de gerenciamento de configuração que permite automatizar a configuração e o gerenciamento de sua infraestrutura. Isso ajuda você a economizar tempo automatizando tarefas repetitivas e garantindo que seus sistemas sejam mantidos em um estado desejado.

Puppet vem em duas variedades, Puppet Enterprise e open source Puppet. As plataformas suportadas incluem a maioria das distribuições Linux, várias plataformas UNIX e Windows.

Puppet foi desenvolvido pela [Puppet Labs](https://puppet.com/company) .

### Começando

Você pode configurar sua infraestrutura em uma arquitetura cliente / servidor ou em uma arquitetura independente. O primeiro utiliza a Fantoche `agent` e o boneco `master` aplicações, enquanto que a segunda utiliza o Fantoche `apply` aplicação.

#### Arquitetura de agente / mestre

Nesta arquitetura, um ou mais nós executam o aplicativo mestre do Puppet. Os servidores principais controlam as informações de configuração da infraestrutura completa.

Os nós gerenciados executam o aplicativo do agente Puppet como um serviço de segundo plano e solicitam periodicamente seu `catalog` configuração do (s) mestre (s) do Puppet.

O mestre de marionetes compila e retorna cada catálogo de nós, usando várias fontes de informação. Esta informação recolhida é conhecida como `facts` .

Uma vez que um agente Puppet recebe um catálogo, ele verifica cada recurso descrito nele. Se um recurso não estiver no estado desejado, o agente o corrigirá.

#### Arquitetura autônoma

Nesta arquitetura, cada nó gerenciado possui a cópia da configuração completa.

Cada agente Puppet executa o aplicativo apply como uma tarefa agendada ou cron job.

Como na arquitetura do agente / mestre, o Puppet aplicar compila o catálogo e verifica cada recurso descrito. Se um recurso não estiver no estado desejado, o Puppet apply corrigirá o problema.

Como o aplicativo mestre do Puppet, o Puppet apply precisa de acesso a várias fontes de dados de configuração, que ele usa para compilar um catálogo para o nó que está gerenciando.

#### Catálogo

Um catálogo é um documento que especifica a configuração de uma máquina. Ele lista todos os recursos que precisam ser gerenciados, seu estado desejado e quaisquer dependências entre eles.

O Puppet configura um sistema compilando primeiro um catlog e depois aplicando-o.

#### Fatos

Puppet reúne fatos sobre todos os nós com uma ferramenta chamada `facter` . O Facter reúne as informações necessárias para configurar o sistema. Por exemplo, nomes de host, endereços IP, nomes de sistema operacional, entre outros. No entanto, também é possível adicionar fatos adicionais.

Para mais informações, consulte a documentação da arquitetura Puppet.

#### Mais Informações:

*   [Site](https://puppet.com) oficial do fantoche
*   Uma visão geral da [arquitetura](https://puppet.com/docs/puppet/5.3/architecture.html) Puppet
*   Como usar o Puppet para gerenciar seus servidores. Uma série de tutoriais da [DigitalOcean](https://www.digitalocean.com/community/tutorial_series/how-to-use-puppet-to-manage-your-servers-2)