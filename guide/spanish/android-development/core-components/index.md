---
title: Android core components
localeTitle: Componentes básicos de Android
---# Componentes básicos de Android

Los componentes principales son los elementos esenciales de una aplicación para Android. Cada uno de ellos tiene su propio propósito y ciclo de vida, pero no todos son independientes. Son:

*   Ocupaciones
*   Servicios
*   Receptores de radiodifusión
*   Proveedores de contenido

## [Ocupaciones](https://developer.android.com/guide/components/activities/)

Una _actividad_ es un componente que tiene una interfaz de usuario y representa una sola pantalla. Una aplicación puede tener múltiples actividades, cada una de ellas puede ser un punto de entrada a la aplicación para el usuario o para el sistema (la actividad de una aplicación que desea abrir otra actividad que pertenece a la misma aplicación o a otra diferente).

## [Servicios](https://developer.android.com/guide/components/services)

Un _servicio_ es un componente sin interfaz de usuario para realizar operaciones de larga ejecución en segundo plano. Hay dos tipos de servicios:

*   Servicios de _primer plano_ : están estrictamente relacionados con la interacción del usuario (por ejemplo, la reproducción de música), por lo que es más difícil para el sistema matarlos.
*   Servicios en _segundo plano_ : no están directamente relacionados con las actividades del usuario, por lo que pueden eliminarse si se necesita más RAM.

## [Receptores de radiodifusión](https://developer.android.com/guide/components/broadcasts)

Un _receptor de difusión_ es otro componente sin interfaz de usuario (excepto una notificación de barra de estado opcional) que permite al sistema enviar eventos desde / a la aplicación, incluso cuando este último no se haya iniciado previamente.

## [Proveedores de contenido](https://developer.android.com/guide/topics/providers/content-providers)

Un _proveedor de contenido_ es un componente que se usa para administrar un conjunto de datos de aplicaciones para compartir con otras aplicaciones. Cada elemento guardado en el proveedor de contenido se identifica mediante un esquema URI.

Para obtener información detallada sobre el tema, consulte la documentación oficial de los [fundamentos de Android.](https://developer.android.com/guide/components/fundamentals)