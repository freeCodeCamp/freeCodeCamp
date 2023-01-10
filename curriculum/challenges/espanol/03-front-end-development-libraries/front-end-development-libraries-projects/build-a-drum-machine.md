---
id: 587d7dbc367417b2b2512bae
title: Crea una batería electrónica
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Objetivo:**Construye una aplicación que sea funcionalmente similar a esta: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.

Completa las historias de usuario a continuación y obtén todas las pruebas para aprobar. Utiliza cualquier librería o API que necesites. Dale tu propio estilo.

Puedes utilizar cualquier combinación de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux y jQuery para completar este proyecto. Debe usar un framework frontend (como React por ejemplo), ya que esta sección trata sobre el aprendizaje de frameworks frontend. No se recomienda utilizar tecnologías adicionales que no estén enlistadas, su uso corre bajo tu propio riesgo. Estamos buscando apoyar otros frameworks de frontend como Angular y Vue, pero actualmente no están soportados. Aceptaremos e intentaremos arreglar todos los informes de problemas que utilicen el stack de tecnologías sugeridas para este proyecto. ¡Feliz día programando!

**Historia de usuario #1:** Debe ser capaz de ver un contenedor externo con un correspondiente `id="drum-machine"` que contiene todos los demás elementos.

**Historia de usuario #2:** Dentro de `#drum-machine` Puedo ver un elemento con un `id="display"` correspondiente.

**Historia de usuario #3:** Dentro de `#drum-machine`Puedo ver 9 elementos de drum pad en los que se puede hacer clic, cada uno con un nombre de clase de `drum-pad`, un identificador único que describe el clip de audio que el pad de tambor será configurado para activar, y un texto interno que corresponde a una de las siguientes teclas del teclado: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. Los pads de la batería DEBEN estar en este orden.

**Historia de usuario #4:** Dentro de cada `.drum-pad`, debe haber un elemento HTML5 `audio` que tenga un atributo `src` apuntando a un clip de audio, un nombre de clase `clip`, y un id correspondiente al texto interno de su padre `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

**Historia de usuario #5:** Cuando hago clic en `.drum-pad` elemento, el clip de audio contenido en su elemento hijo `audio` debe ser activado.

**Historia de usuario #6:** Cuando presione la tecla de activación asociada con cada `.drum-pad`, el clip de audio contenido en su elemento hijo `audio` debe ser activado (p. ej. pulsando la tecla `Q` debería activar el tambor que contiene la cadena `Q`, pulsando la tecla `W` debería activar la tecla Tambor que contiene la cadena `W`, etc.).

**Historia de usuario #7:** Cuando es un `.drum-pad` es activado, una cadena que describe el clip de audio asociado se muestra como el texto interior del elemento `#display` (cada cadena debe ser única).

Aquí tienes algunas muestras de audio que puedes usar para tu batería electrónica:

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

Puedes crear tu proyecto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">usando esta plantilla de CodePen</a> y dando clic en `Save` para crear la tuya. O puedes usar este enlace CDN para ejecutar las pruebas en el ambiente que más te guste: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una vez que hayas terminado, envía la URL a tu proyecto de trabajo con todas sus pruebas verificadas.

# --solutions--

```js
// solution required
```
