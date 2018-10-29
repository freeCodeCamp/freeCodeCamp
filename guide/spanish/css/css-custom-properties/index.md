---
title: CSS Custom Properties
localeTitle: Propiedades personalizadas de CSS
---
## Propiedades personalizadas de CSS

Las propiedades personalizadas de CSS también se conocen como variables CSS. A partir de octubre de 2018, las propiedades personalizadas de CSS siguen siendo una tecnología experimental. Considere la [compatibilidad](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) con el [navegador](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) antes de utilizar la función en producción.

### Declarar propiedades personalizadas

Dentro de un selector, las propiedades personalizadas se declaran usando dos guiones (-) y el nombre, seguidos del valor. El valor puede ser simple, como un color (RGB, código hexadecimal, etc.) o tamaño (usando pixel, em, rem, etc.), o puede ser más complejo, como una definición de sombreado. Vea los ejemplos a continuación.

```css
:root { 
  --firstVariable: red; 
  --headerSize: 16px; 
  --dropShadow: 1px 1px 2px 2px rgba(100,100,100,0.2); 
```

La declaración de propiedades personalizadas en el selector de `:root` hace que esas propiedades estén disponibles globalmente. El selector de `:root` se puede considerar igual que el selector `html` .

### Usando propiedades personalizadas

Para usar una propiedad personalizada, se usa la función `var()` , que toma un solo argumento del nombre de la propiedad personalizada. \`\` \`css h1 { tamaño de fuente: var (- headerSize); }

.card { cuadro de sombra: var (- dropShadow); }
```
### Cascading Custom Properties 
 When custom properties are declared in the `:root` selector, those properties are globally available; any style rules can use the properties. If a custom property needs to be different for specific element, class, or id, a property of the same can be declared in that selector. The compiler will first look for a property name within the immediate enclosing selector, then move to the `:root`. 
```

css : root { --font-color: rojo; }

h1 { --font-color: azul; }

h1 { color de fuente: var (- color de fuente); / \* azul \* / }

h2 { color de fuente: var (- color de fuente); /\* rojo \*/ } \`\` \`

#### Más información:

Para más información visite:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
*   [Documento de recomendación del candidato del W3C](https://www.w3.org/TR/css-variables/)
*   [Soporte del navegador](https://caniuse.com/#feat=css-variables)