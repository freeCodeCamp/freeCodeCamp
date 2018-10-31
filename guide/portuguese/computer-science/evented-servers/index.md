---
title: Evented Servers
localeTitle: Servidores Evented
---
## Servidores Evented

Os servidores de eventos executam um único loop de eventos que manipula eventos para todos os clientes conectados. Isso se opõe aos servidores encadeados, que usam vários encadeamentos em execução simultânea, em que cada encadeamento manipula uma solicitação do cliente.

Em termos simples, os servidores Evented têm apenas um thread principal que é compartilhado entre todas as solicitações do cliente. O que é especial em servidores Evented é o fato de que eles podem priorizar o trabalho que precisa ser feito com as solicitações dos clientes. Nós vamos ilustrar isso com um exemplo.

Digamos que você seja o proprietário de uma empresa de táxi (que seja conhecido como o Servidor) e você tenha pessoas ligando para sua empresa (que sejam conhecidas como Clientes) que desejam organizar uma coleta (permita que elas sejam conhecidas como Solicitações). Você contrata operadores (deixe-os serem conhecidos como Processos / Threads) para receber pedidos dos Clientes. Sua lógica de negócios afirma que seu operador deve permanecer na linha até que um motorista de táxi tenha sido despachado para o cliente. Então, essencialmente, você gostaria de contratar tantos operadores quanto a quantidade de motoristas de táxi que você pode despachar.

Com um servidor Evented, há apenas um operador que é capaz de obter os detalhes de retirada dos clientes, mas sabe que deve ligar para o cliente de volta assim que o taxista tiver sido despachado para ele.

Esses tipos de servidores usam retornos de chamada para informar aos clientes quando suas solicitações foram tratadas.

#### Mais Informações:

[Arquitetura com direção uniforme na Wikipedia](https://en.wikipedia.org/wiki/Event-driven_architecture)