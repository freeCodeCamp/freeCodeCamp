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

pnpm run gen-component MyComponent
```

El comando generará una nueva carpeta dentro del directorio `ui-components`, con los siguientes archivos:

| Nombre del archivo         | Propósito                                                  |
| -------------------------- | ---------------------------------------------------------- |
| `index.ts`                 | Se utiliza para exportar el componente y sus tipos.        |
| `my-component.stories.tsx` | Se utiliza para demostrar el componente en Storybook.      |
| `my-component.test.tsx`    | Se trata de un archivo de prueba.                          |
| `my-component.tsx`         | Ahí es donde aplicamos el componente.                      |
| `types.ts`                 | It is where we locate the component's interface and types. |

Cada componente es diferente, pero en general un componente debería:

- Apoyar el reenvío de ref
- Estilo tanto para temas claros como oscuros
- Estilo internamente basado en sus accesorios (los consumidores no deben necesitar reponer el componente con el accesorio `className`)
- Utilizar el sistema de estilo incorporado desde Tailwind, en lugar de tener estilos personalizados

### Uso de los colores

Hay dos "capas" de color en la biblioteca de componentes:

- La capa base, donde los nombres de los colores describen lo que son los colores, por ejemplo, `gray00`, `blue50`
- La capa semántica, donde los nombres de los colores describen para qué sirven, por ejemplo,  `foreground-primary`, `background-danger`

Generalmente, cuando se utilizan colores en un componente, se deben elegir variables semánticas en lugar de las básicas. Sin embargo, hay excepciones, específicamente cuando se estilan los estados del componente, tales como hover, active, disabled, etc. En estos casos, recomendamos utilizar directamente las variables base en lugar de crear nuevas variables semánticas, ya que cada componente puede tener diferentes estilos para sus estados.

> [!NOTE] La definición del color se encuentra en el [archivo `colors.css`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). Un color sólo está disponible para su uso si se añade al [archivo `tailwind.config.js`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) bajo la propiedad `colors`.

### Enlaces útiles

- [Configuración del CSS de Tailwind](https://tailwindcss.com/docs/configuration)
- [Documentación de React Bootstrap v0.33](https://react-bootstrap-v3.netlify.app)
- [Hoja de estilo de Bootstrap 3.3.7](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [Implementación actual de React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [Pruebas actuales de React Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Mostrar los casos de uso en el Storybook

Los casos de uso del componente deben añadirse al archivo Storybook (`.stories.tsx`).

Para iniciar Storybook, ejecute el siguiente comando desde el directorio raíz:

```bash
pnpm run storybook
```

La página Storybook está disponible en [http://localhost:6006](http://localhost:6006).

## Escribir pruebas unitarias

Usamos [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para escribir pruebas unitarias. Las pruebas deben afirmar que los componentes se comportan como se espera y son accesibles.

Para ejecutar pruebas a la biblioteca de componentes, ejecute el siguiente comando desde el directorio raíz:

```bash
pnpm run test-ui-components
```

## Adding packages to the UI-Component library

We restrict adding new packages to the UI Components to help with the project's maintainability. In the rare chance that you think a dependency is needed, please check with the maintainers first and then use the following command to add a package:

```bash
cd tools/ui-components 
pnpm add package_name
```

### Enlaces útiles

- [Pruebas de Accesibilidad](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Orden de prioridad de las consultas de React Testing Library](https://testing-library.com/docs/queries/about/#priority)
- [Errores comunes con la biblioteca de pruebas de React](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
