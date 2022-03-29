Bienvenido a la librería `ui-components` de freeCodeCamp. Los componentes se construyen principalmente desde cero con elementos HTML básicos y [Tailwind CSS](https://tailwindcss.com/).

# Cómo trabajar en la biblioteca de componentes

> [!NOTE]
> 
> freeCodeCamp ha estado usando componentes de Bootstrap en la interfaz de usuario. Sin embargo, nos estamos alejando de ella y construyendo nuestra propia biblioteca de componentes, lo que ayuda a estandarizar nuestros patrones UX/UI y a mejorar la accesibilidad. El proyecto está rastreado en [este problema de GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues/44668).

Se recomiendan los siguientes pasos al trabajar en un nuevo componente:

- Investigación y planificación
- Implementar el componente
- Mostrar los casos de uso en el Storybook
- Escribir pruebas unitarias

## Investigación y planificación

Antes de construir un componente, necesita investigar y documentar cómo se comporta y se ve la versión existente, para asegurarse de que el nuevo tiene estilos coincidentes y soporta todos los usos actuales. Para cumplir con los requisitos de accesibilidad web, también debe prestar atención al aspecto de accesibilidad del componente, ver qué elementos HTML y atributos ARIA se utilizan bajo el capó.

Una vez que haya reunido suficiente información sobre el componente, puede empezar a pensar en la interfaz de accesorios. Idealmente, la interfaz debe ser tan similar a la versión actual como sea posible, para facilitar la adopción más adelante. Puesto que estamos utilizando componentes de Bootstrap, el enfoque más simple es imitar [su implementación](https://github.com/react-bootstrap/react-bootstrap/tree/master/src).

Preferimos solicitudes de extracción más pequeñas que grandes porque aceleran el tiempo de revisión y reducen la sobrecarga cognitiva de los revisores. Por este motivo, debería pensar en cómo desglosar la aplicación y elaborar un plan de entrega.

Recomendamos abrir un número separado de GitHub para cada componente e incluir todas las notas en la descripción de incidencias. Se puede utilizar como un lugar para alojar todas sus notas de trabajo, así como una forma de comunicar el enfoque con los revisores. Utilizaremos el tema para seguir debatiendo, si es necesario. [El problema para el componente Button](https://github.com/freeCodeCamp/freeCodeCamp/issues/45357) puede ser utilizado como referencia.

## Implementando el componente

Se puede crear un nuevo componente utilizando el siguiente comando desde el directorio raíz:

```bash
cd tools/ui-components

npm run gen-component MyComponent
```

El comando generará una nueva carpeta dentro del directorio `ui-components`, con los siguientes archivos:

| Nombre del archivo         | Propósito                                                    |
| -------------------------- | ------------------------------------------------------------ |
| `index.ts`                 | Se utiliza para exportar el componente y sus tipos.          |
| `my-component.stories.tsx` | Se utiliza para demostrar el componente en Storybook.        |
| `my-component.test.tsx`    | Se trata de un archivo de prueba.                            |
| `my-component.tsx`         | Ahí es donde aplicamos el componente.                        |
| `types.ts`                 | Es donde localizamos la interfaz y los tipos del componente. |

Cada componente es diferente, pero en general un componente debería:

- Apoyar el reenvío de ref
- Estilo tanto para temas claros como oscuros
- Estilo internamente basado en sus accesorios (los consumidores no deben necesitar reponer el componente con el accesorio `className`)
- Utilizar el sistema de estilo incorporado desde Tailwind, en lugar de tener estilos personalizados

### Enlaces útiles

- [Configuración de Tailwind CSS](https://tailwindcss.com/docs/configuration)
- [Documentación de React Bootstrap v0.33](https://react-bootstrap-v3.netlify.app)
- [Hoja de estilos de Bootstrap 3.3.7](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [Implementación actual de React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [Pruebas actuales de React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Mostrar los casos de uso en el Storybook

Los casos de uso del componente deben añadirse al archivo Storybook (`.stories.tsx`).

Para iniciar Storybook, ejecute el siguiente comando desde el directorio raíz:

```bash
npm run storybook
```

La página de Storybook está disponible en [http://localhost:6006](http://localhost:6006).

## Escribir pruebas unitarias

Utilizamos [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para escribir pruebas unitarias. Las pruebas deben asegurar que los componentes se comportan como se espera y child accesibles.

Para ejecutar pruebas contra la biblioteca de componentes, ejecute el siguiente comando desde el directorio root:

```bash
npm run test-ui-components
```

### Enlaces útiles

- [Pruebas de Accesibilidad](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Orden de prioridad de las consultas de React Testing Library](https://testing-library.com/docs/queries/about/#priority)
- [Errores comunes con React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
