---
title: Embedding Youtube Videos
localeTitle: Incrustar videos de Youtube
---
## Incrustar videos de Youtube

Probablemente muchas veces haya visto videos incrustados en sus sitios web favoritos. Hoy hablaremos sobre la incorporación de videos de YouTube, lo que es muy fácil de hacer, incluso si usted no tiene ningún conocimiento al respecto. Para esta acción usaremos el elemento `<frame>` , que es muy útil para incrustar otros HTML. Se usa muy a menudo para promocionar algunos productos como adiciones. Tenga en cuenta que no solo está limitado a YouTube, sino que también puede experimentar con otros documentos.

### Elemento `<frame>`

#### Utilizando

Puedes poner fácilmente el video elegido usando el elemento `<frame>` . Pero recuerde, también debe definir la altura y el ancho de su reproductor, por lo que usaremos los atributos `height` y `width` .

¿Qué necesitaremos?

*   Video en YouTube y URL
*   Elemento `<frame>` (¡No te olvides de cerrarlo!)
*   Atributos de `width` y `height`

```html

<iframe width="420" height="315" 
 src="https://www.youtube.com/watch?v=v8kFT4I31es"> 
 </iframe> 
```

Los valores insertados se recomiendan, pero puede cambiarlos de la forma que desee.

#### Auto-reproducción

¿Qué deberíamos hacer si queremos que este jugador comience a jugar automáticamente? Simplemente añada a su valor de enlace `?autoplay=1` . Pero tenga cuidado, porque puede ser molesto para muchas personas que visitan su página web.

```html

<iframe width="420" height="315" 
 src="https://www.youtube.com/watch?v=v8kFT4I31es?autoplay=1"> 
 </iframe> 

```