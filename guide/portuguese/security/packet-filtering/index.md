---
title: Packet Filtering
localeTitle: Filtragem de Pacotes
---
## Filtragem de Pacotes

Filtragem de pacotes é o processo de passar ou bloquear pacotes em uma interface de rede baseada em endereços, portas ou protocolos de origem e destino. O processo é usado em conjunto com o mangling de pacotes e a conversão de endereços de rede (NAT). A filtragem de pacotes geralmente faz parte de um programa de firewall para proteger uma rede local de invasões indesejadas.

### Como conseguir a filtragem de pacotes

Os firewalls da camada de rede definem conjuntos de regras de filtragem de pacotes, que fornecem mecanismos de segurança altamente eficientes. Em um firewall de software, a filtragem de pacotes é feita por um programa chamado filtro de pacotes. O filtro de pacotes examina o cabeçalho de cada pacote com base em um conjunto específico de regras e, com base nisso, decide impedi-lo de passar (chamado DROP) ou permitir que ele passe (chamado ACCEPT).

### Métodos de Filtragem

Existem três maneiras pelas quais um filtro de pacotes pode ser configurado, uma vez que o conjunto de regras de filtragem tenha sido definido. No primeiro método, o filtro aceita apenas os pacotes que, com certeza, são seguros, descartando todos os outros. Esse é o modo mais seguro, mas pode causar inconveniência se pacotes legítimos forem inadvertidamente descartados. No segundo método, o filtro descarta apenas os pacotes que é certo que são inseguros, aceitando todos os outros. Esse modo é o menos seguro, mas causa menos transtornos, principalmente na navegação casual na Web. No terceiro método, se o filtro encontrar um pacote para o qual suas regras não fornecem instruções, esse pacote pode ser colocado em quarentena, ou o usuário pode ser consultado especificamente sobre o que deve ser feito com ele. Isso pode ser inconveniente se fizer com que várias caixas de diálogo apareçam, por exemplo, durante a navegação na Web.