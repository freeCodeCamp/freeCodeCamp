---
title: Scanning
localeTitle: Digitalização
---
# Digitalização

## Introdução

Digitalização em Rede refere-se a um conjunto de procedimentos para identificar hosts, publicações e serviços em uma rede.

As atividades de varredura podem envolver a verificação de portas abertas em uma rede, captura de banner e criação de diagramas de rede.

## Técnicas de Varredura

Uma das maneiras mais comuns de verificar uma rede é uma técnica chamada de Varredura de Ping. Isso pode determinar os hosts ativos em um intervalo de endereço IP. Um exemplo muito simples disso é ir para a sua linha de comando e digitar `ping 8.8.8.8` . Isso enviará uma solicitação [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) ECHO para um host, neste caso, será o DNS público do Google.

Diferentes protocolos da Internet exigem diferentes métodos de varredura; por exemplo, escanear uma rede [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) seria diferente de escanear uma rede [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) .

As varreduras TCP geralmente aproveitam a maneira como o TCP opera e como o TCP passa por um "handshake" para iniciar a comunicação em uma rede:

1.  Um dispositivo (Host A) enviará uma mensagem `SYN` em uma tentativa de se comunicar através de uma rede com outro dispositivo (Servidor B)
2.  B precisa responder a A com um `SYN` e um `ACK` para confirmar o pedido de A para iniciar a comunicação
3.  A precisa enviar de volta uma mensagem `ACK` para reconhecer a resposta de B
4.  A comunicação pode então começar

Ao longo desta comunicação, há pedaços de informação que cada participante envia na tentativa de iniciar a conversa.

Observe que você também pode verificar redes IPv6 (o IPv6 aumenta o tamanho do endereço IP para disponibilizar muito mais endereços).

Existem muito mais tipos de [varreduras](https://nmap.org/bennieston-tutorial/) que abusam ainda mais do processo do TCP Handshake. Estes incluem varreduras IDLE, varreduras de árvores de Natal, varreduras TCP Inversas e Varreduras Completas.

## Digitalização em testes de penetração

A digitalização é a segunda fase das cinco fases típicas dos testes de penetração. A fase de varredura requer a aplicação de ferramentas técnicas para obter mais informações sobre o seu alvo, mas, neste caso, a informação solicitada é mais comumente relacionada aos sistemas que eles possuem. 1

Existem três objetivos principais:

1.  Determinando se um sistema está vivo
2.  Porta de varredura do sistema
3.  Verificando o sistema em busca de vulnerabilidades 2

### Determinando se o sistema está vivo

Uma maneira de determinar se o sistema de destino está ativo é usando o comando **ping** , conforme mencionado na técnica de varredura de ping acima.

Por exemplo:
```
ping <target_ip_address> -c <number_of_packets_to_send> 
 ping 10.10.0.1 -c 4 
```

Se o sistema de destino estiver ativo, você deve obter uma resposta semelhante à mostrada abaixo.
```
Pinging 10.10.0.1 with 32 bytes of data: 
 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Ping statistics for 10.10.0.1: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milliseconds: 
    Minimum = 26ms, Maximum = 26ms, Average = 26ms 
```

*   **Reply from** indica que nosso pacote ICMP Echo Request foi recebido e um pacote ICMP Echo Reply foi enviado de volta.
*   **Bytes = 32** nos diz que o tamanho do pacote que foi enviado.
*   **time = 26ms** nos permite saber como o tempo combinado levou o pacote ICMP Echo Request para chegar ao destino e que o pacote ICMP Echo Reply retornou à nossa máquina.
*   **TTL = 240** é um valor Time To Live que nos informa o número máximo de saltos que o pacote levaria antes de cair.

## Ferramentas de Digitalização

Existem muitas ferramentas disponíveis para digitalizar, mas uma das mais comuns é o `nmap` . É uma ferramenta útil com funções como obter informações sobre hosts ativos em uma rede, serviços em execução e os tipos e versões do sistema operacional em uso.

## Mais Informações:

*   Como fazer ping no Linux https://www.wikihow.com/Ping-in-Linux
*   [Vídeo de Gordon Lyon aka Fydor, o criador da ferramenta nmap](https://www.youtube.com/watch?v=Hk-21p2m8YY)

## Fontes

1.  Resumindo as cinco fases do teste de penetração. (2015, 06 de maio). Recuperado em 26 de outubro de 2017, em https://www.cybrary.it/2015/05/summarizing-the-five-phases-of-penetration-testing/

3.  Engebretson, P. (2013). As noções básicas de testes de invasão e hacking: Hacking ético e testes de penetração simplificados. 2. Syngress.