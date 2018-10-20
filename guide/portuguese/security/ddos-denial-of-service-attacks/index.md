---
title: DDoS Distributed Denial of Service
localeTitle: Negação de Serviço Distribuída DDoS
---
Um ataque de negação de serviço (DOS) ocorre quando o invasor tenta interromper os serviços de um servidor, bombardeando-o com várias solicitações falsas e impedindo que usuários reais acessem o serviço. Um ataque distribuído do DOS ocorre quando o ataque acontece de vários locais ao mesmo tempo, dificultando muito a detecção e o tratamento do ataque pela equipe de segurança cibernética.

Um ataque DDoS (Distributed Denial of Service) é uma tentativa de indisponibilizar um serviço online ou um site sobrecarregando-o com grandes inundações de tráfego geradas por várias fontes.

Ao contrário de um ataque Denial of Service (DoS), no qual um computador e uma conexão com a Internet são usados ​​para inundar um recurso direcionado com pacotes, um ataque DDoS usa muitos computadores e muitas conexões com a Internet, geralmente distribuídas globalmente no que é chamado de botnet. .

Ataques DDoS são geralmente direcionados a grandes corporações onde a negação de um serviço por alguns minutos pode se traduzir em milhões de dólares perdidos.

Existem vários tipos de ataques de DDoS e o melhor ataque é determinado examinando as vulnerabilidades do alvo.

### Tipos de ataques DDoS

Os ataques DDoS podem ser categorizados em três categorias -

1.  Ataques baseados em volume
2.  Protocolos de ataques
3.  Ataques de camada de aplicativo

### Ataques Baseados em Volume

Ataques baseados em volume incluem inundações de TCP, inundações de UDP, inundações de ICMP e outras inundações de spoofedpacket. Estes também são chamados de ataques de camada 3 e 4 \*. Aqui, um invasor tenta saturar a largura de banda do site de destino. A magnitude do ataque é medida em bits por segundo (bps).

*   **UDP Flood** - Um flood UDP é usado para inundar portas aleatórias em um host remoto com vários pacotes UDP, mais especificamente o número de porta 53. Firewalls especializados podem ser usados ​​para filtrar ou bloquear pacotes UDP mal-intencionados.
    
*   **Flooding ICMP** - É semelhante ao flood UDP e usado para inundar um host remoto com várias solicitações de eco ICMP. Esse tipo de ataque pode consumir largura de banda de saída e de entrada e um grande volume de solicitações de ping resultará em lentidão geral do sistema.
    
*   **HTTP Flood** - O invasor envia solicitações HTTP GET e POST para um servidor da Web de destino em um grande volume que não pode ser manipulado pelo servidor e leva à negação de conexões adicionais de clientes legítimos.
    
*   **Ataque de amplificação** - O atacante faz uma solicitação que gera uma grande resposta que inclui solicitações de DNS para grandes registros TXT e solicitações HTTP GET para arquivos grandes, como imagens, PDFs ou qualquer outro arquivo de dados.
    

### Protocolos de ataques

Os ataques de protocolo incluem inundações de SYN, Ping of Death, ataques de pacotes fragmentados, DDoS de Smurf, etc. Esse tipo de ataque consome recursos reais do servidor e outros recursos, como firewalls e balanceadores de carga. A magnitude do ataque é medida em pacotes por segundo.

*   **Inundação de DNS** - inundações de DNS são usadas para atacar a infra-estrutura e um aplicativo DNS para sobrecarregar um sistema de destino e consumir toda a largura de banda de rede disponível.
    
*   **SYN Flood** - O invasor envia solicitações de conexão TCP mais rapidamente do que a máquina de destino pode processá-las, causando saturação da rede. Os administradores podem ajustar as pilhas TCP para atenuar o efeito de inundações SYN. Para reduzir o efeito de inundações de SYN, você pode reduzir o tempo limite até que uma pilha libere a memória alocada para uma conexão ou elimine seletivamente conexões de entrada usando um firewall ou iptables.
    
*   **Ping of Death** - O atacante envia pacotes malformados ou superdimensionados usando um simples comando ping. O IP permite o envio de pacotes de 65,535 bytes, mas o envio de um pacote de ping com mais de 65.535 bytes viola o Internet Protocol e pode causar o estouro de memória no sistema de destino e, finalmente, travar o sistema. Para evitar ataques de Ping of Death e suas variantes, muitos sites bloqueiam mensagens de ping ICMP completamente em seus firewalls.
    

### Ataques de camada de aplicativo

Ataques de camada de aplicativo incluem Slowloris, ataques DDoS de dia zero, ataques DDoS que visam vulnerabilidades do Apache, do Windows ou do OpenBSD e muito mais. Aqui o objetivo é travar o servidor web. A magnitude do ataque é medida em Solicitações por segundo.

*   **Ataque à Aplicação** - Também chamado de Ataque à Camada 7, em que o invasor faz log-in excessivo, pesquisa de banco de dados ou solicitações de pesquisa para sobrecarregar o aplicativo. É realmente difícil detectar ataques de Camada 7 porque eles se assemelham ao tráfego legítimo do site.
    
*   **Slowloris** - O invasor envia um grande número de cabeçalhos HTTP para um servidor da Web segmentado, mas nunca conclui uma solicitação. O servidor de destino mantém cada uma dessas conexões falsas abertas e, eventualmente, transborda o conjunto máximo de conexões simultâneas e leva à negação de conexões adicionais de clientes legítimos.
    
*   **NTP Amplification** - O invasor explora servidores NTP (Network Time Protocol) de acesso público para sobrecarregar o servidor de destino com o tráfego UDP (User Datagram Protocol).
    
*   **Ataques DDoS de dia** zero - Uma vulnerabilidade de dia zero é uma falha de sistema ou aplicativo desconhecida anteriormente pelo fornecedor e que não foi corrigida nem corrigida. Estes são novos tipos de ataques que surgem dia a dia, por exemplo, explorando vulnerabilidades para as quais nenhum patch foi liberado.
    

### Como corrigir um ataque DDoS

Existem algumas opções de proteção contra DDoS que você pode aplicar dependendo do tipo de ataque de DDoS.

Sua proteção contra DDoS começa com a identificação e o fechamento de todas as possíveis vulnerabilidades do sistema operacional e do nível do aplicativo em seu sistema, fechando todas as portas possíveis, removendo o acesso desnecessário do sistema e ocultando seu servidor atrás de um proxy ou sistema CDN.

Se você vir uma baixa magnitude do DDoS, poderá encontrar muitas soluções baseadas em firewall que podem ajudá-lo a filtrar o tráfego baseado em DDoS. Mas se você tem um alto volume de ataques DDoS como em gigabits ou até mais, então você deve ter a ajuda de um provedor de serviços de proteção DDoS que ofereça uma abordagem mais holística, pró-ativa e genuína.

Você deve ter cuidado ao abordar e selecionar um provedor de serviços de proteção contra DDoS. Há vários provedores de serviços que desejam aproveitar sua situação. Se você informá-los de que está sob ataque de DDoS, eles começarão a oferecer uma variedade de serviços a custos excessivamente altos.

Podemos sugerir uma solução simples e funcional que comece com uma pesquisa por um bom provedor de soluções DNS que seja flexível o suficiente para configurar os registros A e CNAME do seu site. Segundo, você precisará de um bom provedor de CDN que possa lidar com um grande tráfego de DDoS e fornecer a você um serviço de proteção contra DDoS como parte de seu pacote de CDN.

Suponha que o endereço IP do seu servidor seja AAA.BBB.CCC.DDD. Então você deve fazer a seguinte configuração de DNS -

*   Crie um registro A no arquivo de zona DNS como mostrado abaixo com um identificador de DNS, por exemplo, ARECORDID e mantenha-o em segredo no mundo externo.
*   Agora, peça ao seu provedor CDN para vincular o identificador DNS criado a um URL, algo como cdn.someotherid.domain.com.
*   Você usará o CDN URL cdn.someotherid.domain.com para criar dois registros CNAME, o primeiro a apontar para www e o segundo registro para apontar para @ como mostrado abaixo.

Você pode obter ajuda do administrador do sistema para entender esses pontos e configurar seu DNS e CDN adequadamente. Finalmente, você terá a seguinte configuração no seu DNS.

### Mais Informações

*   [Compreender os ataques de negação de serviço](https://www.us-cert.gov/ncas/tips/ST04-015)
*   [Visualização de ataques DDoS no mundo](http://www.digitalattackmap.com/#anim=1&color=0&country=ALL&list=0&time=17462&view=map "Visualização de ataques DDoS no mundo")
*   [Artigo do Kotaku sobre o DDoS](https://kotaku.com/how-ddos-attacks-work-and-why-theyre-so-hard-to-stop-1676445620)