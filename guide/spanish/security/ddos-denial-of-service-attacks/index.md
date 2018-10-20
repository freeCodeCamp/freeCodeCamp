---
title: DDoS Distributed Denial of Service
localeTitle: DDoS Distributed Denial of Service
---
Un ataque de denegación de servicio (DOS) se produce cuando el atacante intenta interrumpir los servicios de un servidor bombardeando con múltiples solicitudes falsas e impidiendo que los usuarios reales accedan al servicio. Un ataque de DOS distribuido es cuando el ataque se produce desde varias ubicaciones a la vez, lo que dificulta mucho más que el equipo de seguridad cibernética detecte y maneje el ataque.

Un ataque de denegación de servicio distribuido (DDoS) es un intento de hacer que un servicio en línea o un sitio web no esté disponible al sobrecargarlo con una gran cantidad de tráfico generado por múltiples fuentes.

A diferencia de un ataque de Denegación de Servicio (DoS), en el que una computadora y una conexión a Internet se usan para inundar un recurso específico con paquetes, un ataque DDoS usa muchas computadoras y muchas conexiones de Internet, a menudo distribuidas globalmente en lo que se conoce como botnet .

Los ataques DDoS generalmente están dirigidos a grandes corporaciones donde la denegación de un servicio por unos minutos puede traducirse en la pérdida de millones de dólares.

Existen varios tipos de ataques Ddos y el mejor ataque se determina al examinar las vulnerabilidades del objetivo.

### Tipos de ataques DDoS

Los ataques DDoS pueden clasificarse en tres categorías:

1.  Ataques basados ​​en el volumen
2.  Ataques de protocolo
3.  Ataques de la capa de aplicación

### Ataques basados ​​en el volumen

Los ataques basados ​​en volumen incluyen inundaciones de TCP, inundaciones de UDP, inundaciones de ICMP y otras inundaciones de paquetes falsificados. Estos también se llaman Ataques de Capa 3 y 4 \*. Aquí, un atacante intenta saturar el ancho de banda del sitio objetivo. La magnitud del ataque se mide en bits por segundo (bps).

*   **Inundación de UDP** : una inundación de UDP se usa para inundar puertos aleatorios en un host remoto con numerosos paquetes UDP, más específicamente el número de puerto 53. Se pueden usar firewalls especializados para filtrar o bloquear paquetes UDP maliciosos.
    
*   **Inundación de ICMP** : es similar a la inundación de UDP y se usa para inundar un host remoto con numerosas solicitudes de eco de ICMP. Este tipo de ataque puede consumir ancho de banda entrante y saliente y un alto volumen de solicitudes de ping resultará en una desaceleración general del sistema.
    
*   **Inundación de HTTP** : el atacante envía solicitudes HTTP GET y POST a un servidor web específico en un gran volumen que no puede ser manejado por el servidor y lleva a la denegación de conexiones adicionales de clientes legítimos.
    
*   **Ataque de amplificación** : el atacante realiza una solicitud que genera una gran respuesta que incluye solicitudes DNS para registros TXT grandes y solicitudes GET HTTP para archivos grandes como imágenes, archivos PDF o cualquier otro archivo de datos.
    

### Ataques de protocolo

Los ataques de protocolo incluyen inundaciones SYN, Ping of Death, ataques de paquetes fragmentados, DDoS de Pitufo, etc. Este tipo de ataque consume recursos reales del servidor y otros recursos, como firewalls y balanceadores de carga. La magnitud del ataque se mide en paquetes por segundo.

*   **Inundación de DNS** : las inundaciones de DNS se utilizan para atacar tanto a la infraestructura como a una aplicación DNS para abrumar a un sistema de destino y consumir todo el ancho de banda disponible de la red.
    
*   **Inundación SYN** : el atacante envía solicitudes de conexión TCP más rápido de lo que la máquina puede procesarlas, lo que provoca la saturación de la red. Los administradores pueden modificar las pilas TCP para mitigar el efecto de las inundaciones de SYN. Para reducir el efecto de las inundaciones SYN, puede reducir el tiempo de espera hasta que una pila libere la memoria asignada a una conexión, o descartar selectivamente las conexiones entrantes utilizando un firewall o iptables.
    
*   **Ping of Death** : el atacante envía paquetes mal formados o de gran tamaño con un simple comando ping. IP permite el envío de paquetes de 65,535 bytes, pero el envío de un paquete de ping con un tamaño superior a 65,535 bytes viola el Protocolo de Internet y podría causar un desbordamiento de memoria en el sistema de destino y finalmente bloquear el sistema. Para evitar los ataques de Ping of Death y sus variantes, muchos sitios bloquean por completo los mensajes de ping ICMP en sus cortafuegos.
    

### Ataques de la capa de aplicación

Los ataques de la capa de aplicación incluyen Slowloris, ataques DDoS de día cero, ataques DDoS dirigidos a vulnerabilidades de Apache, Windows u OpenBSD y más. Aquí el objetivo es estrellar el servidor web. La magnitud del ataque se mide en Solicitudes por segundo.

*   **Ataque de aplicación** : también se denomina ataque de capa 7, donde el atacante realiza solicitudes excesivas de inicio de sesión, búsqueda en la base de datos o búsqueda para sobrecargar la aplicación. Es realmente difícil detectar los ataques de Capa 7 porque se asemejan al tráfico legítimo del sitio web.
    
*   **Slowloris** : el atacante envía una gran cantidad de encabezados HTTP a un servidor web específico, pero nunca completa una solicitud. El servidor de destino mantiene abiertas cada una de estas conexiones falsas y eventualmente desborda el grupo de conexiones simultáneas máximas, y lleva a la denegación de conexiones adicionales de clientes legítimos.
    
*   **Amplificación NTP** : el atacante explota servidores de Protocolo de tiempo de red (NTP) de acceso público para abrumar al servidor de destino con tráfico de Protocolo de datagramas de usuario (UDP).
    
*   **Ataques DDoS de día** cero: una vulnerabilidad de día cero es una falla del sistema o de la aplicación previamente desconocida por el proveedor, y no se ha corregido ni se ha revisado. Estos son nuevos tipos de ataques que se producen día a día, por ejemplo, explotando vulnerabilidades para las cuales aún no se ha lanzado un parche.
    

### Cómo arreglar un ataque DDoS

Existen bastantes opciones de protección contra DDoS que puede aplicar dependiendo del tipo de ataque DDoS.

Su protección DDoS comienza identificando y cerrando todas las posibles vulnerabilidades a nivel de sistema operativo y aplicación en su sistema, cerrando todos los puertos posibles, eliminando el acceso innecesario del sistema y ocultando su servidor detrás de un sistema proxy o CDN.

Si ve una baja magnitud de DDoS, entonces puede encontrar muchas soluciones basadas en firewall que pueden ayudarlo a filtrar el tráfico basado en DDoS. Pero si tiene un gran volumen de ataques DDoS como en gigabits o incluso más, entonces debería contar con la ayuda de un proveedor de servicios de protección DDoS que ofrezca un enfoque más holístico, proactivo y genuino.

Debe tener cuidado al acercarse y seleccionar un proveedor de servicios de protección DDoS. Hay varios proveedores de servicios que desean aprovechar su situación. Si les informa que está bajo un ataque DDoS, ellos comenzarán a ofrecerle una variedad de servicios a costos excesivamente altos.

Podemos sugerirle una solución simple y funcional que comienza con la búsqueda de un buen proveedor de soluciones DNS que sea lo suficientemente flexible como para configurar los registros A y CNAME para su sitio web. En segundo lugar, necesitará un buen proveedor de CDN que pueda manejar el tráfico DDoS grande y proporcionarle el servicio de protección DDoS como parte de su paquete CDN.

Suponga que la dirección IP de su servidor es AAA.BBB.CCC.DDD. Entonces deberías hacer la siguiente configuración de DNS:

*   Cree un archivo A Registro en la zona DNS como se muestra a continuación con un identificador de DNS, por ejemplo, ARECORDID y manténgalo en secreto desde el mundo exterior.
*   Ahora pídale a su proveedor de CDN que vincule el identificador de DNS creado con una URL, algo como cdn.someotherid.domain.com.
*   Utilizará la URL CDN cdn.someotherid.domain.com para crear dos registros CNAME, el primero para apuntar a www y el segundo registro para apuntar a @ como se muestra a continuación.

Puede tomar la ayuda de su administrador del sistema para comprender estos puntos y configurar su DNS y CDN de manera adecuada. Finalmente, tendrá la siguiente configuración en su DNS.

### Más información

*   [Entendiendo los ataques de denegación de servicio](https://www.us-cert.gov/ncas/tips/ST04-015)
*   [Visualización de los ataques DDoS en todo el mundo](http://www.digitalattackmap.com/#anim=1&color=0&country=ALL&list=0&time=17462&view=map "Visualización de los ataques DDoS en todo el mundo")
*   [Kotaku artículo sobre DDoS](https://kotaku.com/how-ddos-attacks-work-and-why-theyre-so-hard-to-stop-1676445620)