---
title: Smart Contracts
localeTitle: Contratos inteligentes
---
## Contratos inteligentes

El término contrato inteligente fue acuñado por el científico de la computación Nick Szabo en 1994. Un contrato
inteligente es un código que implementa un contrato entre dos o más partes y que se ejecuta de manera automática
una vez se cumplen ciertas condiciones establecidas de antemano.

Por ejemplo, las transacciones en una cadena de bloques son un contrato muy básico: una parte envía recursos a
otra una vez la transferencia ha sido autorizada.
La cadena de bloques Bitcoin permite configurar contratos algo más elaborados involucrando más de dos participantes,
pero no contratos "más inteligentes".
Estos pueden ser deslplegados en la cadena de bloques Ethereum, dado que sus transacciones pueden soportar cualquier
tipo de lógica. Tienen el poder expresivo de una máquina Turing completa - lo que significa que pueden implementar
cualquier tarea realizable por un ordenador.

Como parte del código que se encuentra en la cadena de bloques, un contrato inteligente puede automatizar tareas.
Por ejemplo, cuando una cuenta recibe dinero, puede distribuirlo automáticamente a otras. Esto se hace de manera
completamente transparente y todos los nodos puedan ver qué lógica se está ejecutando.

## Un ejemplo de contrato inteligente

Un ejemplo clásico es de una lotería. El pseudo-código para un contrato inteligente implementando
una lotería muy simple podría ser el siguiente:

```
contrato Loteria {
    inicializar variable 'luckyNumber' = 0
    
    function setLuckyNumber {
        solamente el creador del contrato debería poder llamar a esta función
        la función se ejecuta solamente si 'luckyNumber' == 0
        Asignar a 'luckyNumber' un número entero aleatorio !=0 // ¡Nada fácil de hacer!
        // El entero aleatorio no puede ser visible (lo podríamos hashear) dado
        // que todos los datos del contrato son visibles en la cadena de bloques
    }
    
    function play(int guess) {
        requerimos que la dirección desde la que se invoca la función pague un precio
        requerimos que guess != 0
        if guess == luckyNumber {
            // el premio podría ser 99% del dinero acumulado en el contrato, proveniente
            // de los participantes, y el 1% restante podría ser transferido a la creadora
            // de la lotería
            transferir 0.99 * (saldo del contrato) a la dirección que invocó la función
            transferir 0.01 * (saldo del contrato) a la creadora
        }
    }
}
```

## Tecnologías blockchain con soporte de contratos inteligentes

Dos de las tecnologías más comunes son:

* Ethereum. Nacida como cadena de bloques orientada a los contratos inteligentes. Los contratos inteligentes
se ejecutan en la máquina virtual de Ethereum (EVM por sus siglas en inglés), que podemos imaginar como un
ordenador descentralizado. Podemos escribir los contratos inteligentes de Ethereum en Solidity, Serpent o
Vyper, tras lo que son compilados a código máquina y procesados por la EVM.
* Hyperledger. Una iniciativa de la Fundación Linux para cadenas de bloques privadas - más orientadas al mundo
empresarial. Bajo el nombre de Hyperledger se agrupan varios proyectos, la mayoría de ellos con soporte
de contratos inteligentes. Los contratos inteligentes de Ethereum también se pueden ejecutar en Hyperledger.

Existen muchos otros proyectos que ofrecen (o prometen) soporte de contratos inteligentes - e.g.: EOS, NEO o ICON.
Es posible que compitan con Ethereum por la adopción de mercado (aún muy baja globalmente) en el futuro.


## Fuentes (en inglés)

- [Nick Szabo sobre el concepto de contratos inteligentes](http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart.contracts.html)
- [Contratos "inteligentes" en Bitcoin](https://bitcoin.org/en/developer-guide#contracts)
- [Página oficial de Hyperledger](https://www.hyperledger.org/)
