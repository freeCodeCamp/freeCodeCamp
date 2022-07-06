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

### Using colors

There are two color "layers" in the component library:

- The base layer, where the color names describe what the colors are, e.g. `gray00`, `blue50`
- The semantic layer, where the color names describe what the colors are for, e.g. `foreground-primary`, `background-danger`

Generally when using colors in a component, you should choose semantic variables over the base ones. There are exceptions, however, specifically when you are styling the component's states such as hover, active, disabled, etc. In these cases, we recommend using the base variables directly instead of creating new semantic variables, since each component can have different styles for their states.

> [!NOTE] Color definition can be found in the [`colors.css` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). A color is only available for use if it is added to the [`tailwind.config.js` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) under the `colors` property.

### Enlaces útiles

- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [React Bootstrap v0.33 Docs](https://react-bootstrap-v3.netlify.app)
- [Bootstrap 3.3.7 stylesheet](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [React Bootstrap current implementation](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [React Bootstrap current tests](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Mostrar los casos de uso en el Storybook

Use cases of the component should be added to the Storybook file (`.stories.tsx`).

To start Storybook, run the following command from the root directory:

```bash
npm run storybook
```

The Storybook page is available on [http://localhost:6006](http://localhost:6006).

## Escribir pruebas unitarias

We use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write unit tests. The tests should assert that the components behave as expected and are accessible.

To run tests against the component library, run the following command from the root directory:

```bash
npm run test-ui-components
```

### Useful links

- [Testing for Accessibility](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Order of priority of React Testing Library's queries](https://testing-library.com/docs/queries/about/#priority)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
