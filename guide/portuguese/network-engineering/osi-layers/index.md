---
title: OSI Layers 
localeTitle: Camadas OSI
---
## Camadas OSI

### Introdução

Você já se perguntou como os dados são enviados através da rede de uma máquina para outra? Se sim, então o modelo Open System Interconnected é o que você está procurando.

O modelo OSI é usado para ajudar a padronizar e caracterizar como os dados devem fluir do emissor para o receptor sem levar em consideração a estrutura interna subjacente do terminal (emissor, receptor).

A organização que surgiu com esse modelo é a **Organização Internacional de Padronização** e, portanto, esse modelo é formalmente chamado de **ISO-OSI** .

### Arquitetura

Como na figura abaixo, o modelo divide a rede em **7 camadas** . A comunicação de dados no modelo OSI inicia com a camada superior (Application Layer) da pilha no lado emissor, percorre a pilha até a camada mais baixa do remetente (Camada Física) e, em seguida, percorre a conexão de rede física até a camada inferior no recebimento lado, e até a sua pilha modelo OSI.

Optamos por uma abordagem em camadas porque é fácil projetar camadas independentes com funções dedicadas que interagem entre si em comparação a um único modelo complexo.

![Relação entre remetente, nós intermediários e receptor em várias camadas](https://user-images.githubusercontent.com/16820612/33828192-2773b920-de91-11e7-8804-08dbfaf0143a.jpg)

### **Observações Importantes**

*   _**Camadas de ponta a ponta:**_ No diagrama acima, você notaria que as camadas superiores do protocolo (Application - Transport), as camadas do emissor e do receptor são diretamente conectadas por meio de setas. Isso ocorre porque essas camadas não estão cientes dos dispositivos intermediários usados ​​para transportar dados (como switches e roteadores). Essas camadas parecem se comunicar diretamente umas com as outras.
    
*   _**Unidade de dados:**_ No diagrama acima, a extrema esquerda é a unidade de dados usada em cada camada. A camada de transporte (e as camadas abaixo dela) têm um nome exclusivo para a unidade de dados que está sendo transferida do remetente para o receptor.
    

### **Funções de Camadas**

*   _**Camada 1 - Camada Física:**_ A camada física é a mais baixa das Camadas OSI e a mais complexa. Isto é devido às tecnologias de hardware undible usadas. A função dessa camada é definir como o fluxo de bits será transmitido em vez do pacote de dados lógicos. Ele lida com a definição de qual frequência o bit será transmitido, que tipo de modulação será usada, como os bits serão agrupados e outros parâmetros físicos baixos necessários para a transmissão de bits.
    
*   _**Camada 2 - Camada de Enlace de Dados:**_ A camada de enlace de dados é responsável por transferir dados para dispositivos adjacentes na mesma Rede de Área Local (LAN). Essa camada também tem provisões para garantir que os dados sem erros sejam passados ​​para as camadas superiores da camada física. Por isso, ele contém mecanismos de detecção e correção de erros para garantir que a integridade dos dados seja mantida.
    
*   _**Camada 3 - Camada de Rede:**_ A camada de rede é responsável pelo encaminhamento de pacotes para outras redes. Normalmente, uma rede é dividida em várias sub-redes e a camada de rede, com a ajuda de roteadores, encaminha pacotes entre essas redes para estabelecer uma WAN (Wide Area Network, rede de longa distância).
    
*   _**Camada 4 - Camada de Transporte:**_ A camada de transporte garante que as mensagens sejam entregues sem erros, em seqüência e sem perdas ou duplicações. Ele alivia os protocolos de camadas mais altas de qualquer preocupação com a transferência de dados entre eles e seus pares.
    
*   _**Camada 5 - Camada de Sessão:**_ A camada de sessão permite o estabelecimento de sessões entre processos executados em diferentes estações.
    
*   _**Camada 6 - Camada de apresentação:**_ A camada de apresentação formata os dados a serem apresentados à camada de aplicação.
    
*   _**Camada 7 - Camada de Aplicação:**_ A camada de aplicação serve como janela para usuários e processos de aplicativos acessarem serviços de rede.