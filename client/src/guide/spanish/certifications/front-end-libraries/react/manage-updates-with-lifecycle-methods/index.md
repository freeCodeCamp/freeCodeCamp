---
title: Manage Updates with Lifecycle Methods
localeTitle: Gestionar actualizaciones con métodos de ciclo de vida
---
## Gestionar actualizaciones con métodos de ciclo de vida

Este desafío te hace crear un par de funciones de ciclo de vida, componentWillUpdate y ComponentWillReceiveProps. Se le proporcionará otra función llamada componentDidUpdate. Discutiremos cómo los usa en cada etapa del ciclo de vida del componente y por qué debería usarlos cuando está revisando diferentes etapas de su componente.

Hablemos sobre las funciones y cómo las usarás. Los ciclos de vida de los componentes se pueden dividir en 4 etapas. Inicialización -> Montaje -> Actualizando -> Desmontar. Los componentes con los que trabajará caerán dentro de la etapa de Actualización.

La progresión en la que se llaman estas funciones es la siguiente: componentWillReceiveProps -> componentWillUpdate -> componentDidUpdate

Cuando crea componentWillReceiveProps, esta función verificará si se están recibiendo nuevos accesorios. Si el componente recibió nuevos apoyos, se llamará a la función y dentro del bloque puede comparar los dos estados de prop. La función tomará un argumento típicamente llamado nextProps y lo comparará con this.props. El desafío tiene que crear esta función utilizando el argumento nextProps pasado. Vea la función provista a continuación.

A continuación, en el componente del ciclo de vida del componente, se llamará a BillUpdate, esta función verificará si ha habido alguna actualización de props o estado y se llamará antes de que el componente se renderice. El desafío ya le ha proporcionado esta función y cierra la sesión "El componente está a punto de actualizarse".

Una vez que el componente pasa a través de la fase componentWillUpdate y el componente se procesa, se llamará componentDidUpdate. En esta etapa, puede llamar a this.setState para actualizar los cambios de estado que se produjeron durante las dos primeras fases. Nota: solo puede llamar a setState si se ajusta dentro de una condición. Ya que este desafío solo lo tiene rasguñando la superficie, les gustaría que cierre la sesión y que el "Componente se haya actualizado".

Una vez que haya implementado todas las funciones del ciclo de vida, debería ver que se muestran algunos registros de la consola. Primero, verás que componentWillReceiveProps te envía this.props y nextProps. A continuación, verá un registro de la consola que le permitirá conocer ese componente. Finalmente, después de que el componente se presente, llamará a componentDidUpdate y cerrará la sesión "El componente se ha actualizado".

Nota: Los componentes que está creando están en desuso y estarán disponibles para su uso hasta la versión 17. Puede encontrar más información sobre estas funciones en la sección de recursos a continuación.

```javascript
class Dialog extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  componentWillUpdate() { 
    console.log('Component is about to update...'); 
  } 
  // change code below this line 
 
  // Create componentWillReceiveProps 
  // Pass in argument nextProps and log out the current prop and next prop 
  componentWillReceiveProps(nextProps) { 
    // Log the current property and the next property 
    console.log(this.props, nextProps) 
  } 
 
  // Create function componentDidUpdate 
  // Log out that the component has updated 
  componentDidUpdate() { 
    console.log("Component has updated") 
  } 
 
  // change code above this line 
  render() { 
    return <h1>{this.props.message}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: 'First Message' 
    }; 
    this.changeMessage = this.changeMessage.bind(this); 
  } 
  changeMessage() { 
    this.setState({ 
      message: 'Second Message' 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.changeMessage}>Update</button> 
        <Dialog message={this.state.message}/> 
      </div> 
    ); 
  } 
 }; 
```

### Recursos

*   [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
*   [React Component Lifecycle Visual](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)