---
title: Network Engineering
localeTitle: Engenharia de Redes
---
## Engenharia de Redes

_focada em redes de computadores_

Consiste no conjunto de técnicas e metodologias para projetar, desenvolver, implementar, manter, e suportar redes de computadores dentro de uma organização, ou ainda em mais de uma organização, quando estas se comunicam.

Assim como qualquer outro ramo da Engenharia, como Civil, Elétrica ou Mecânica, a Engenharia de Redes se presta ao papel de construir ou otimizar uma rede de computadores, com o intuito de trazer retorno para uma pessoa, instituição pública ou privada. O impacto da Engenharia de Redes pode ter alcance local, estadual, regional, nacional ou mesmo global. O melhor exemplo de rede de computadores global é a Internet.

Os engenheiros de rede podem trabalhar internamente, como parte da equipe de suporte de TI (Tecnologia da Informação) de uma organização, ou externamente, como parte de uma empresa terceirizada de consultoria. Algumas companhias optam ainda por contratar serviços de indivíduos no formato _freelancer_.

Um engenheiro de redes pode se ocupar apenas de uma parte do processo. Por exemplo:  é possível que uma empresa tenha uma equipe pequena responsável apenas pela concepção, desenho e projeto da rede, deixando a cargo de uma empresa contratada sua implementação e posterior suporte.

Excelentes exemplos de instituições que operam com excelência a definição de padrões e especificações para engenharia de redes de computadores são o [IETF](https://www.ietf.org/ "Internet Engineering Task Force") e o [IEEE](https://www.ieee.org/ "Institute of Electrical and Electronics Engineers").

As redes de computadores são compostas por diversos tipos de ativos, ou seja, equipamentos/dispositivos. Podemos citar:
  * _Switches_ (que podem ser de camada 2 ou 3);
  * Roteadores;
  * Servidores;
  * Estações de trabalho;
  * _Firewalls_;
  * Demais _appliances_ relacionados, como balanceadores de carga, detectores de intrusão ou _storages_.

Como a transferência de todos os dados juntos através de uma rede de uma só vez é ineficiente, é necessário que se faça uso de camadas, de forma que as mesmas possam se comunicar e assim, organizar como os dados podem ser trafegados numa rede.

A [ISO](https://www.iso.org/home.html "International Organization for Standardization") criou um padrão mundialmente conhecido como [OSI-RM](https://www.itu.int/rec/T-REC-X/en "Open Systems Interconnection/Reference Model") para guiar a construção de redes de computadores. De fato, este padrão é usado em partes em alguns dispositivos de navegação e comunicação aérea, bem como em redes envolvendo centrais telefônicas ou mesmo computadores mais antigos. Desta forma, o OSI-RM é conhecido como o padrão _de juri_, ou seja, oficial, para redes de computadores.

No entanto, por possuir muitas camadas (total de 7), torna-se oneroso para o uso diário em redes de computadores, que requerem não apenas velocidades altas de transmissão de dados, mas também rápido processamento dos mesmos. Daí, surgiu a suíte de protocolos [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP "Transmission Control Protocol / Internet Protocol") (_Transmission Control Protocol / Internet Protocol_). Possuindo especificações bem mais leves que o OSI-RM, tornou-se o padrão _de facto_, isto é, o padrão efetivamente em uso.

O conjunto de protocolos TCP/IP (na verdade, a sigla "TCP/IP" é usada para facilitar referências escritas e verbais ao tema, pois cada camada do modelo possui diversos protocolos inerentes) pode ser comparado ao OSI-RM, por também possuir camadas, só que em menor quantidade, e protocolos representantes em cada uma delas.

Cada camada do TCP/IP possui um nome e também uma unidade respectiva, a saber:
  * 1 - Física:  não possui unidade correspondente;
  * 2 - Enlace de dados, ou _datalink_:  a unidade é o **quadro** ou **frame**;
  * 3 - Rede:  a unidade é o **pacote**;
  * 4 - Transporte:  se for usado um protocolo orientado a conexão (TCP), a unidade é **segmento**. No caso de usar o protocolo não orientado a conexão (UDP), a unidade se chama **datagrama**;
  * 7 - Aplicação:  a unidade se chama **mensagem**.

Alguns exemplos de cada protocolo da suíte TCP/IP, de acordo com a camada seguem abaixo.  Obviamente, a camada física não é citada, por se tratar apenas de sinais elétricos, ópticos ou ondas de rádio (Wi-Fi):
  * **Enlace de dados**:  CSMA/CD (cabo) ou CSMA/CA (Wi-Fi);
  * **Rede**:  IPv4 ou IPv6;
  * **Transporte**:  TCP ou UDP;
  * **Aplicação**:  HTTP/HTTPS, FTP, SMTP.

A imagem a seguir apresenta os cabeçalhos dos protocolos IPv4 e TCP:

![pacote](https://www.computerhope.com/jargon/p/packet.jpg)

Quando um computador precisa enviar dados a outro, o fluxo vai da aplicação (camada mais superior) para baixo, passando por cada camada e até chegar no meio físico (cabo, fibra óptica ou ar). Daí, ele segue por esse meio físico até chegar ao seu destino. Quando chega, o fluxo é inverso, ou seja, parte da camada mais inferior e vai subindo, até chegar à camada de aplicação.

Quando os pacotes chegam ao destino, uma confirmação é enviada de volta. Se, por algum motivo, um pacote for descartado, ele poderá ser requisitado novamente a partir da origem.
