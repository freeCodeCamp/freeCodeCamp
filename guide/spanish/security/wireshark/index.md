---
title: Wireshark
localeTitle: Wireshark
---
## Wireshark

Wireshark es una aplicación de analizador de red de código abierto que está disponible para Linux, macOS y Windows. Le permite "rastrear" los [paquetes que](../../network-engineering/packets/) se envían hacia y desde diferentes nodos en una red.

#### ¿Por qué usar Wireshark?

Wireshark es una herramienta poderosa, puede usarla para:

*   Aprende cómo se usan los diferentes protocolos en redes
*   Solucionar problemas de red
*   Analiza el tráfico que pasa por tu red.
*   Analice los datos que su software está comunicando a servidores remotos.
*   Verifique que los datos estén correctamente encriptados antes de ser enviados
*   Desarrollo de protocolos de comunicación en red.
*   Compruebe si hay [troyanos](../trojans/) u otro software malicioso en su computadora

#### ¿Cómo empiezo?

Para utilizar Wireshark en su forma más básica:

1.  [Descarga](https://www.wireshark.org/download.html) e instala la aplicación.
2.  Seleccione la `interface` que desea capturar los paquetes, lo más probable es que este sea su adaptador Ethernet o WiFi.
3.  Observe el bonito flujo de paquetes codificados por colores y deje que la aplicación los capture durante el tiempo que desee.
4.  Cuando tenga suficientes paquetes, seleccione el botón de parada.
5.  Guarde sus paquetes capturados si desea guardarlos para un análisis continuo. Esto se hace como un archivo `.pcap` que es un formato estándar para la _captura de paquetes_ .

![Screenshot of Wireshark on MacOS](https://thejayhaykid.github.io/images/Wireshark.png "Wireshark en MacOS")

#### Análisis, Filtración e Inspección.

Ahora tienes un montón de paquetes, pero ¿qué significa todo esto? Los diferentes colores que viste indican diferentes tipos de tráfico. Por defecto algunos de los colores son:

*   Púrpura claro - paquetes de Protocolo de Control de Transmisión (TCP);
*   Azul claro: paquetes de Protocolo de datagramas de usuario (UDP);
*   Negro - errores

> Nota: Todos estos colores se pueden personalizar, pero tenga en cuenta que cada paquete puede encajar en más de una categoría, por lo que también debe priorizar estas reglas.

Filtrar sus paquetes es una forma rápida de encontrar lo que está buscando. Simplemente escriba la entrada de texto en la parte superior de la ventana para mostrar solo los paquetes que coincidan con su consulta. Por ejemplo, si estaba [buscando tráfico HTTPS](https://en.wikiversity.org/wiki/Wireshark/HTTPS) , ingrese `ssl` en el filtro. Esto mostrará todos los paquetes relacionados con las conexiones HTTPS.

Ahora que ha encontrado algunos paquetes relevantes, seleccione uno para ver más detalles sobre él. Dependiendo del tipo de paquete que inspeccione, esto le dará mucha información detallada. Algunos detalles básicos incluirán:

*   Protocolo utilizado
*   Dirección de origen y puerto
*   Dirección de destino y puerto
*   Tiempos de respuesta

### Más información:

[Wireshark.org](https://www.wireshark.org)  
[Wireshark - Wikipedia](https://en.wikipedia.org/wiki/Wireshark)  
[Cómo usar Wireshark para capturar, filtrar e inspeccionar paquetes - Cómo geek](https://www.howtogeek.com/104278/how-to-use-wireshark-to-capture-filter-and-inspect-packets/)