---
title: OSI Layers 
localeTitle: Capas OSI
---
## Capas OSI

### Introducción

¿Alguna vez se ha preguntado cómo se envían los datos a través de la red de una máquina a otra? Si es así, entonces el modelo Open System Interconnected es lo que está buscando.

El modelo OSI se utiliza para ayudar a estandarizar y caracterizar cómo los datos deben fluir de un remitente a otro sin tener en cuenta la estructura interna subyacente del punto final (remitente, receptor).

La organización que creó este modelo es la **Organización Internacional de Normalización** y, por lo tanto, este modelo se conoce formalmente como **ISO - OSI** .

### Arquitectura

Como en la figura siguiente, el modelo divide la red en **7 capas** . La comunicación de datos en el modelo OSI comienza con la capa superior (Capa de aplicación) de la pila en el lado de envío, se desplaza por la pila a la capa más baja del remitente (Capa física), luego atraviesa la conexión de red física a la capa inferior en la capa de recepción lado, y hasta su modelo de pila OSI.

Vamos por un enfoque en capas porque es fácil diseñar capas independientes con funciones dedicadas que interactúan entre sí en comparación con un modelo complejo único.

![Relación entre el remitente, los nodos intermedios y el receptor en varias capas](https://user-images.githubusercontent.com/16820612/33828192-2773b920-de91-11e7-8804-08dbfaf0143a.jpg)

### **Observaciones importantes**

*   _**Capas de extremo a extremo:**_ En el diagrama anterior, notará que las capas superiores del protocolo (Aplicación - Transporte), las capas del remitente y el receptor están conectadas directamente a través de flechas. Esto se debe a que estas capas no son conscientes de los dispositivos intermedios que se utilizan para transportar datos (como conmutadores y enrutadores). Estas capas parecen comunicarse directamente entre sí.
    
*   _**Unidad de datos:**_ En el diagrama anterior, al extremo izquierdo está la unidad de datos que se utiliza en cada una de las capas. La capa de transporte (y las capas debajo de ella) tienen un nombre único para la unidad de datos que se transfiere de un remitente a otro.
    

### **Funciones de las capas**

*   _**Capa 1 - Capa física:**_ la capa física es la más baja de las capas OSI y la más compleja. Esto es debido a las tecnologías de hardware undelying utilizadas. La función de esta capa es definir cómo se transmitirá el flujo de bits en lugar del paquete de datos lógicos. Se trata de definir en qué frecuencia se transmitirá el bit, qué tipo de modulación se usará, cómo se agruparán los bits y otros parámetros físicos de baja altitud necesarios para la transmisión de bits.
    
*   _**Capa 2 - Capa de enlace de datos:**_ la capa de enlace de datos es responsable de transferir datos a dispositivos adyacentes en la misma red de área local (LAN). Esta capa también tiene disposiciones para garantizar que los datos sin errores se transfieran a las capas superiores desde la capa física. Por lo tanto, se mantienen los mecanismos de detección y corrección de errores para garantizar que se mantiene la integridad de los datos.
    
*   _**Capa 3 - Capa de red:**_ la capa de red es responsable de reenviar paquetes a otras redes. Por lo general, una red se divide en varias subredes y la capa de red con la ayuda de enrutadores envía paquetes entre dichas redes para establecer una red de área amplia (WAN).
    
*   _**Capa 4 - Capa de transporte:**_ la capa de transporte garantiza que los mensajes se entreguen sin errores, en secuencia y sin pérdidas ni duplicaciones. Alivia los protocolos de capa superior de cualquier preocupación con la transferencia de datos entre ellos y sus pares.
    
*   _**Capa 5 - Capa de sesión:**_ la capa de sesión permite el establecimiento de sesiones entre procesos que se ejecutan en diferentes estaciones.
    
*   _**Capa 6 - Capa de presentación:**_ la capa de presentación formatea los datos que se presentarán a la capa de aplicación.
    
*   _**Capa 7 - Capa de la aplicación:**_ la capa de la aplicación sirve como ventana para que los usuarios y los procesos de la aplicación accedan a los servicios de red.