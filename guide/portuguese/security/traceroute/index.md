---
title: Traceroute
localeTitle: Traceroute
---
**Índice**

*   [Traceroute](#traceroute)
*   [Como os dados trafegam pela internet](#how-data-travels-across-the-internet)
*   [Alguns exemplos para uso](#some-examples-for-usage)
*   [Mais Informações](#more-information)

## Traceroute

Traceroute é uma ferramenta de diagnóstico de rede de computadores para exibir a rota (caminho) e medir atrasos de trânsito de pacotes através de uma rede IP (Internet Protocol). O histórico da rota é registrado como os tempos de ida e volta dos pacotes recebidos de cada host sucessivo (nó remoto) na rota (caminho); A soma dos tempos médios em cada salto é uma medida do tempo total gasto para estabelecer a conexão. O traceroute continua a menos que todos os pacotes (três) enviados sejam perdidos mais de duas vezes, a conexão seja perdida e a rota não possa ser avaliada. Ping, por outro lado, calcula apenas os tempos finais de ida e volta a partir do ponto de destino.

#### Como os dados trafegam pela internet

Cada computador no traceroute é identificado por seu endereço IP, que é o número de nove dígitos separado por pontos que identifica a conexão de rede exclusiva desse computador. Aqui estão alguns detalhes sobre um traceroute:
```
- The journey from one computer to another is known as a hop. 
 - The amount of time it takes to make a hop is measured in milliseconds. 
 - The information that travels along the traceroute is known as a packet. 
```

Uma leitura traceroute normalmente exibirá três colunas separadas para o tempo de salto, já que cada traceroute envia três pacotes separados de informações para cada computador. No topo da lista, o traceroute dará o limite de quantas linhas de saltos ele exibirá - 30 saltos é geralmente o número máximo.

Quando um traceroute tiver dificuldade em acessar um computador, ele exibirá a mensagem "Solicitação expirada". Cada uma das colunas do hop exibirá um asterisco em vez de uma contagem em milissegundos.

#### Alguns exemplos para uso

A maioria das implementações inclui pelo menos opções para especificar o número de consultas a serem enviadas por salto, o tempo de espera por uma resposta, o limite de saltos e a porta a ser usada. Invocar traceroute sem opções especificadas exibe a lista de opções disponíveis, enquanto o homem traceroute apresenta mais detalhes, incluindo os sinalizadores de erro exibidos. Exemplo simples no Linux:
```
[root@example ~]#  traceroute -w 3 -q 1 -m 16 www.google.com 
 traceroute to www.google.com (216.58.200.36), 16 hops max, 60 byte packets 
 1  192.168.4.2 (192.168.4.2)  0.136 ms 
 2  * 
 3  * 
 4  * 
 5  * 
 6  * 
 7  * 
 8  * 
 9  * 
 10  * 
 11  * 
 12  * 
 13  * 
 14  * 
 15  * 
 16  * 
```

No exemplo acima, as opções selecionadas são esperar por três segundos (em vez de cinco), enviar apenas uma consulta para cada salto (em vez de três), limitar o número máximo de saltos para 16 antes de desistir (em vez de 30), com www.google.com como host final.

Isso pode ajudar a identificar definições de tabela de roteamento incorretas ou firewalls que possam estar bloqueando o tráfego ICMP, ou UDP de porta alta em ping Unix, para um site. Observe que um firewall pode permitir pacotes ICMP, mas não permitir pacotes de outros protocolos.

O traceroute também é usado por testadores de penetração para coletar informações sobre a infraestrutura de rede e os intervalos de IP em torno de um determinado host.

Ele também pode ser usado durante o download de dados e, se houver vários espelhos disponíveis para o mesmo fragmento de dados, é possível rastrear cada espelho para obter uma boa idéia de qual espelho seria o mais rápido a ser usado.

#### Mais Informações

Leia mais informações sobre Traceroute:

*   [Como usar o TRACERT no Windows](https://support.microsoft.com/en-us/help/314868/how-to-use-tracert-to-troubleshoot-tcp-ip-problems-in-windows) - [Como usar o TRACERT no Linux](https://www.lifewire.com/traceroute-linux-command-4092586)