---
title: Packets
localeTitle: Pacotes
---
## Pacotes

Um pacote é uma unidade básica de comunicação em uma rede digital. Um pacote também é chamado de **datagrama, segmento, bloco, célula ou quadro,** dependendo do protocolo usado para a transmissão de dados. Quando os dados precisam ser transmitidos, eles são divididos em estruturas semelhantes de dados antes da transmissão, chamados de pacotes, que são remontados ao bloco de dados original quando chegam ao seu destino.

As redes comutadas por pacotes são geralmente mais eficientes em comparação com as redes comutadas por circuitos. A rede comutada por circuito precisa reservar recursos pela duração da comunicação. Redes comutadas por pacotes podem enviar pacotes sob demanda.

No modelo OSI, os pacotes correspondem à camada 3, a camada de rede.

## Estrutura de um pacote de dados

A estrutura de um pacote depende do tipo de pacote e do protocolo. Leia mais abaixo em pacotes e protocolos. Normalmente, um pacote tem um cabeçalho e uma carga útil.

O cabeçalho mantém informações gerais sobre o pacote, o serviço e outros dados relacionados à transmissão. Por exemplo, a transferência de dados pela Internet exige a divisão dos dados em pacotes IP, definidos em IP (Internet Protocol), e um pacote IP inclui:

*   O endereço IP de origem, que é o endereço IP da máquina que envia os dados.
*   O endereço IP de destino, que é a máquina ou o dispositivo para o qual os dados são enviados.
*   O número de seqüência dos pacotes, um número que coloca os pacotes em ordem de forma que eles sejam remontados de maneira a recuperar os dados originais exatamente como eram antes da transmissão.
*   O tipo de serviço.
*   Bandeiras.
*   Alguns outros dados técnicos.
*   A carga útil, que representa a maior parte do pacote (todo o acima é considerado como sobrecarga), e é, na verdade, os dados que estão sendo transportados.

## Pacotes e Protocolos

Os pacotes variam em estrutura e funcionalidade, dependendo dos protocolos que os implementam. VoIP usa o protocolo IP e, portanto, pacotes IP. Em uma rede Ethernet, por exemplo, os dados são transmitidos em quadros Ethernet.

No protocolo IP, os pacotes IP viajam pela Internet através de nós, que são dispositivos e roteadores (tecnicamente chamados de nós neste contexto) encontrados no caminho da origem para o destino.

Cada pacote é roteado para o destino com base em seu endereço de origem e destino. Em cada nó, o roteador decide, com base em cálculos que envolvem estatísticas e custos da rede, para qual nó vizinho é mais eficiente enviar o pacote.

Este nó selecionado é mais eficiente para enviar o pacote. Isso faz parte da comutação de pacotes que realmente libera os pacotes na Internet e cada um deles encontra seu próprio caminho até o destino. Este mecanismo utiliza gratuitamente a estrutura subjacente da Internet, que é a principal razão pela qual as chamadas VoIP e as chamadas pela Internet são mais gratuitas ou muito baratas.

Ao contrário da telefonia tradicional, onde uma linha ou circuito entre a fonte e o destino tem que ser dedicado e reservado (chamado de comutação de circuitos), daí o custo elevado, a comutação de pacotes explora as redes existentes de graça.

Outro exemplo é o TCP (Transmission Control Protocol), que funciona com IP no que chamamos de suíte TCP / IP. O TCP é responsável por garantir que a transferência de dados seja confiável. Para isso, verifica se os pacotes chegaram em ordem, se algum pacote está faltando ou se foi duplicado, e se há algum atraso na transmissão de pacotes. Ele controla isso definindo um tempo limite e sinais chamados confirmações.

## Conclusão

Os dados viajam em pacotes através de redes digitais e todos os dados que consumimos, seja texto, áudio, imagens ou vídeo, são divididos em pacotes que são reagrupados em nossos dispositivos ou computadores. É por isso que, por exemplo, quando uma imagem é carregada em uma conexão lenta, você vê pedaços dela aparecendo um após o outro.

#### Mais Informações:

[Todos os conceitos de rede em detalhes breves](https://www.lifewire.com/what-is-a-data-packet-3426310 "Artigo da Lifewire sobre pacotes de dados")