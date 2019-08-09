---
title: Accessibility Examples
localeTitle: Ejemplos de accesibilidad
---
## Ejemplos de accesibilidad en la aplicación práctica

Estoy escribiendo esta breve guía para proporcionar ejemplos prácticos de cómo implementar la accesibilidad en los sitios web. La accesibilidad no se enfatizó en la escuela ni se enfatiza lo suficiente en el mundo real del desarrollo web. Espero que este artículo, junto con muchos otros, aliente a los desarrolladores a crear sitios accesibles a partir de ahora. Siempre me ha ayudado a obtener ejemplos prácticos de cómo hacer las cosas. Entonces, esta guía se centrará en ejemplos del mundo real que he encontrado en mi vida cotidiana como desarrollador web.

### Saltando la navegación

Para que los usuarios no videntes tengan una experiencia agradable en su sitio web, necesitan poder acceder al contenido de forma rápida y eficiente. Si nunca ha experimentado un sitio web a través de un lector de pantalla, recomiendo hacerlo. Es la mejor manera de probar con qué facilidad se puede navegar un sitio para usuarios no videntes. NVDA es una muy buena aplicación de lector de pantalla que se proporciona de forma gratuita. Pero si usa el lector de pantalla y le resulta útil, considere hacer una donación al equipo de desarrollo. El lector de pantalla se puede descargar desde [nvaccess.org](https://www.nvaccess.org/download/) .

Para permitir que los usuarios no videntes se salten al contenido principal de un sitio y eviten navegar por todos los enlaces de navegación principales:

1.  Cree un "vínculo de omisión de navegación" que viva directamente debajo de la etiqueta del `body` apertura.

```html

<a tabindex="0" class="skip-link" href="#main-content">Skip to Main Content</a> 
```

`tabindex="0"` se agrega para asegurar que el enlace se `tabindex="0"` en el teclado en todos los navegadores. Se puede encontrar más información sobre la accesibilidad del teclado en [webaim.org](https://webaim.org/techniques/keyboard/tabindex) .

2.  El enlace "omitir navegación" debe asociarse con la etiqueta html principal en el documento de su página web mediante la etiqueta de identificación.

```html

<main id="main-content"> 
  ...page content 
 </main> 
```

3.  Oculte el enlace "omitir navegación" por defecto. Esto garantiza que el enlace solo sea visible para los usuarios videntes cuando el enlace está enfocado.

*   Cree una clase para el enlace que se puede diseñar con CSS. En mi ejemplo he añadido la clase de `skip-link` .

```css
.skip-link { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  overflow: hidden; 
  clip: rect(0, 0, 0, 0); 
  white-space: nowrap; 
  -webkit-clip-path: inset(50%); 
  clip-path: inset(50%); 
  border: 0; 
 } 
 .skip-link:active, .skip-link:focus { 
  position: static; 
  width: auto; 
  height: auto; 
  overflow: visible; 
  clip: auto; 
  white-space: normal; 
  -webkit-clip-path: none; 
  clip-path: none; 
 } 
```

Estos estilos CSS ocultan el enlace de manera predeterminada y solo muestran el enlace cuando recibe el enfoque del teclado. Para obtener más información, visite el [a11yproject](http://a11yproject.com/posts/how-to-hide-content) y esta [publicación de blog](http://hugogiraudel.com/2016/10/13/css-hide-and-seek/) .

### Mesas accesibles

### Pestañas accesibles
