---
title: Basic Networking
localeTitle: Redes basicas
---
## Redes basicas

La red básica en C implica principalmente abrir sockets y comunicarse a través de ellos. Esto plantea la pregunta, ¿qué es un zócalo?

## Que es un Socket

Un socket es un punto final de un enlace de comunicación de dos vías entre dos programas que se ejecutan en una red. Un punto final es una combinación de una dirección IP y un número de puerto. Un socket está vinculado a un número de puerto para que la capa TCP pueda identificar la aplicación a la que están destinados los datos.

Cuando un programa se ejecuta en una red, está disponible para acceder desde diferentes ubicaciones que no sean la ubicación local. Por diferentes ubicaciones me refiero a que todas las computadoras en la misma red pueden acceder a ella. Pero, ¿cómo lo harán? Por lo tanto, cada programa se registra con un número de puerto. Piense en el número de puerto como un número de apartamento en un apartamento enorme. Si se envía una carta a un apartamento, el número del apartamento le indica a la oficina de correos el apartamento específico al que debe ir.

Pero, ¿cómo llegará al apartamento? Cada apartamento tiene su propia dirección única, la oficina de correos revisa esas direcciones únicas (que en realidad son una cadena) y decide el destino de la carta. En este caso, cada computadora conectada a una red tendrá una dirección IP que es como una dirección que se usa cuando se envía una carta a través de la oficina postal. Del mismo modo, una computadora conectada a una red necesita conocer las direcciones IP de las otras computadoras en la misma red para comunicarse con ellas. Para comunicarse con un programa específico en una computadora específica, se necesita el número de puerto para ese programa. (Piense en el número de apartamento de nuestra analogía de apartamento).

## Conceptos básicos de la programación de socket

La programación de socket es una forma de conectar dos nodos en una red para comunicarse entre sí. Un socket (nodo) escucha en un puerto en particular en una IP, mientras que otro socket se acerca al otro para formar una conexión. El servidor forma el zócalo de escucha mientras el cliente llega al servidor.