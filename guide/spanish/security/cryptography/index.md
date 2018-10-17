---
title: Cryptography
localeTitle: Criptografía
---
## Criptografía

El objetivo básico de la criptografía es permitir que dos personas se comuniquen a través del canal no seguro de tal manera que una tercera persona no pueda entender lo que se dice. Este canal podría ser una línea telefónica o una red informática.

Los romanos empezaron a usar la criptografía para hacer que los mensajes en la batalla sean ilegibles para el enemigo si se descifran.

La criptografía anterior a la era moderna era efectivamente sinónimo de encriptación, la conversión de información de un estado legible a un sin sentido aparente.

La criptografía moderna se usa en los datos para que solo una parte o solo las partes autorizadas tengan la capacidad de acceder a la información.

El cifrado a lo largo de los años se ha vuelto más avanzado.

### Ejemplo

La información que Person1 quiere enviar a Person2, que llamamos "texto simple", puede ser texto, datos numéricos o cualquier tipo de datos. Person1 cifra el texto simple, usando una clave predeterminada, y envía el "texto cifrado" resultante a través del canal. Person3, al ver el texto cifrado en el canal, no puede determinar qué era el texto simple, pero Person2, quien conoce la clave de cifrado, puede descifrar el texto cifrado y reconstruir el texto simple.

### Cypher César (Cypher De Cambio)

El primer cifrado conocido fue el cifrado César. El cifrado de Ceasar funciona desplazando las letras de un "texto simple" una cantidad específica hacia arriba o hacia abajo en el alfabeto.

Desde la perspectiva de una persona externa, el mensaje parece ser letras aleatorias con espacios en medio.

### Criptografía moderna

El cifrado moderno utiliza números casi aleatorios y funciones matemáticamente sólidas para permitir una comunicación segura. Estas funciones recién desarrolladas no pueden ser fácilmente resquebrajadas debido a su estructura, lo que requiere incluso supercomputadores de cientos de años.

Hay 2 tipos principales de cifrado moderno:

### 1) Cifrado de clave única o simétrica:

El cifrado de clave simétrico es un método de cifrado en el que ambas partes usan solo una clave para el cifrado y descifrado. Estos algoritmos, debido a su diseño, son generalmente mucho más rápidos que el cifrado de clave pública o asimétrico.

Algunas técnicas de cifrado simétrico incluyen: Estándar de cifrado de datos (DES), Estándar de cifrado avanzado (AES), Blow Fish, Two Fish, RC4.

### 2) Cifrado asimétrico o de clave pública:

Los algoritmos de cifrado asimétrico proporcionan a cada usuario un par de claves: una pública y otra privada. Cualquier mensaje cifrado con una clave del par solo se puede descifrar con la otra.

Algunas técnicas asimétricas incluyen: RSA, Diffie-Hellman, DSS (Digital Signature Standard), ElGamal.

### Hash criptográfico

La mayoría de las funciones hash criptográficas están diseñadas para tomar una cadena de cualquier longitud como entrada y producir un valor de hash de longitud fija.

Una función criptográfica hash debe ser capaz de soportar todos los tipos conocidos de ataques criptoanalíticos.

### Criptografía Hashing

Una función hash criptográfica es un tipo de función hash que está diseñada para ser también una función unidireccional (una función que requiere demasiado tiempo y recursos para la fuerza bruta). El propósito principal de los hash es lidiar con la integridad del mensaje, por lo que el mismo mensaje siempre da como resultado el mismo hash.

#### Más información:

*   [Criptografía: teoría y práctica por Douglas Stinson](https://www.crcpress.com/Cryptography-Theory-and-Practice-Third-Edition/Stinson/p/book/9781584885085)
*   [TechTarget en Cifrado](http://searchsecurity.techtarget.com/definition/encryption)
*   [Guia de criptografia](https://www.tutorialspoint.com/cryptography/index.htm)