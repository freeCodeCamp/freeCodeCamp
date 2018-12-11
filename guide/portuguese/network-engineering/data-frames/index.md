---
title: Data Frames
localeTitle: Quadros de dados
---
## Quadros de dados

Quadros de Dados (Frames) são unidades de dados que são comutáveis ​​através de redes comutadas por pacotes. Os quadros são unidades de dados de protocolo (PDUs) de Camada 2 de interconexão de sistemas abertos (OSI). Os quadros são endereçados usando endereços MAC (Media Access Control). Existem vários protocolos de comunicação de camada 2 diferentes, cada um com informações de controle distintas, mas a maioria utiliza um formato comum.

Os quadros são divididos em informações e dados de controle (também chamados de 'carga útil'). As informações de controle estão contidas no cabeçalho e no trailer da estrutura que encapsulam a carga útil. Encapsulamento é o processo pelo qual um pacote de Camada 3 tem um cabeçalho de Camada 2 adicionado à frente e um trailer de Camada 2 adicionado no final. Este é o formato padrão para Data Frames: um cabeçalho seguido pela carga útil seguida por um trailer.

![Um quadro na camada de enlace de dados](http://www.highteck.net/images/156-Datalink-PDU.jpg)

O cabeçalho do Data Frame contém informações específicas do protocolo, mas todos os cabeçalhos incluem o protocolo em uso e os endereços MAC de origem / destino. Os protocolos comuns da camada 2 incluem Ethernet e protocolo ponto a ponto (PPP). Os trailers do Data Frame geralmente contêm uma FCS (Frame Check Sequence) que permite que o dispositivo receptor verifique a integridade do quadro recebido.

#### Mais Informações: