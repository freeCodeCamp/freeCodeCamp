---
title: Basic Networking
localeTitle: Rede Básica
---
## Rede Básica

Rede básica em C envolve principalmente abertura de soquetes e comunicação através deles. Isso levanta a questão, o que é um soquete?

## O que é um soquete

Um soquete é um ponto final de um link de comunicação bidirecional entre dois programas em execução em uma rede. Um terminal é uma combinação de um endereço IP e um número de porta. Um soquete é ligado a um número de porta para que a camada TCP possa identificar o aplicativo para o qual os dados serão enviados.

Quando um programa está sendo executado em uma rede, ele está disponível para acesso a partir de locais diferentes da localização local. Por locais diferentes, quero dizer que todos os computadores na mesma rede podem acessá-lo. Mas como vão eles? Portanto, todo programa se registra com um número de porta. Pense no número da porta como um número de apartamento em um enorme apartamento. Se uma carta for enviada para um apartamento, o número do apartamento informa ao correio o apartamento específico para onde ele deve ir.

Mas como chegará ao apartamento? Cada apartamento tem seu próprio endereço, o correio examina o endereço único (que é de fato uma string) e decide o destino da carta. Nesse caso, cada computador conectado a uma rede terá um endereço IP que é como um endereço usado ao enviar uma carta pela agência postal. Da mesma forma, um computador conectado a uma rede precisa conhecer os endereços IP dos outros computadores na mesma rede para se comunicar com eles. Para se comunicar com um programa específico em um computador específico, o número da porta desse programa é necessário. (Pense no número do apartamento da nossa analogia com o apartamento.)

## Noções básicas de programação de soquete

A programação de soquete é uma maneira de conectar dois nós em uma rede para se comunicar uns com os outros. Um soquete (nó) escuta em uma porta particular em um IP, enquanto outro soquete alcança o outro para formar uma conexão. O servidor forma o soquete do ouvinte enquanto o cliente alcança o servidor.