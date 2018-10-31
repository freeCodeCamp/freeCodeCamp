---
title: UDP Header
localeTitle: Cabeçalho UDP
---
## Formato de Cabeçalho UDP

O User Datagram Protcol (UDP) é um dos protocolos mais usados ​​no conjunto de protocolos de Internet (IP), juntamente com TCP e ICMP. As características definidoras do UDP são um protocolo rápido, sem conexão. Esses recursos são facilitados pelo cabeçalho UDP.

O cabeçalho UDP é feito dos seguintes quatro campos:

*   Porta de Origem (16 bits): A porta usada no computador dos remetentes para a conexão UDP também referida como a porta de envio. Quando combinado com o IP dos remetentes, permite que o computador remetente crie conexões múltiplas e separadas (conhecidas como Multiplexing).
    
*   Porta de Destino (16 bits): A porta usada no computador receptor para a conexão UDP também é chamada de porta de recebimento. Quando combinado com o IP dos receptores, permite a multiplexação.
    
*   Comprimento (16 bits): Especifica o comprimento do cabeçalho e dos dados do UDP.
    
*   Soma de verificação (16 bits): Usado para verificar erros no cabeçalho e nos dados. Opcional.
    

#### Mais Informações: