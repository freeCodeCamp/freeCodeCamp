---
title: Wireshark
localeTitle: Wireshark
---
## Wireshark

O Wireshark é um aplicativo analisador de rede de código aberto que está disponível para Linux, macOS e Windows. Ele permite que você "cheire" [pacotes](../../network-engineering/packets/) enviados para e de diferentes nós em uma rede.

#### Por que usar o Wireshark?

O Wireshark é uma ferramenta poderosa, você pode usá-lo para:

*   Saiba como os diferentes protocolos são usados ​​na rede
*   Resolver problemas de rede
*   Analise o tráfego que passa pela sua rede
*   Analise os dados que seu software está comunicando aos servidores remotos
*   Verifique se os dados estão sendo criptografados adequadamente antes de serem enviados
*   Desenvolvimento de protocolos de comunicação em rede
*   Verifique se há [cavalos](../trojans/) de [Tróia](../trojans/) ou outro software mal-intencionado no seu computador

#### Como eu começo?

Para usar o Wireshark em sua forma mais básica:

1.  [Baixe](https://www.wireshark.org/download.html) e instale o aplicativo.
2.  Selecione a `interface` você gostaria de capturar os pacotes, provavelmente este será seu adaptador ethernet ou WiFi.
3.  Assista ao lindo fluxo de pacotes codificados por cores e deixe o aplicativo capturá-los pelo tempo que desejar.
4.  Quando você tiver pacotes suficientes, selecione o botão Parar.
5.  Salve seus pacotes capturados, se quiser mantê-los para análise contínua. Isso é feito como um arquivo `.pcap` que é um formato padrão para _capturas de pacotes_ .

![Screenshot of Wireshark on MacOS](https://thejayhaykid.github.io/images/Wireshark.png "Wireshark no MacOS")

#### Análise, Filtragem e Inspeção

Agora você tem vários pacotes, mas o que isso significa? As diferentes cores que você viu indicam diferentes tipos de tráfego. Por padrão, algumas das cores são:

*   Roxo claro - Pacotes do Protocolo de Controle de Transmissão (TCP);
*   Azul claro - pacotes UDP (User Datagram Protocol);
*   Black - Erros

> Nota: Essas cores podem ser personalizadas, mas lembre-se de que cada pacote pode se encaixar em mais de uma categoria, portanto, você também deve priorizar essas regras.

Filtrar seus pacotes é uma maneira rápida de encontrar o que você está procurando. Basta digitar a entrada de texto na parte superior da janela para mostrar apenas os pacotes que correspondem à sua consulta. Por exemplo, se você estava [olhando para o tráfego HTTPS](https://en.wikiversity.org/wiki/Wireshark/HTTPS) , insira `ssl` no filtro. Isso mostrará todos os pacotes relacionados a conexões HTTPS.

Agora que você encontrou alguns pacotes relevantes, selecione um para ver mais detalhes sobre ele. Dependendo do tipo de pacote que você inspecionar, isso fornecerá muitas informações detalhadas. Alguns detalhes básicos incluem:

*   Protocolo utilizado
*   Endereço de origem e porta
*   Endereço de destino e porta
*   Tempos de resposta

### Mais Informações:

[Wireshark.org](https://www.wireshark.org)  
[Wireshark - Wikipedia](https://en.wikipedia.org/wiki/Wireshark)  
[Como usar o Wireshark para capturar, filtrar e inspecionar pacotes - como o geek](https://www.howtogeek.com/104278/how-to-use-wireshark-to-capture-filter-and-inspect-packets/)