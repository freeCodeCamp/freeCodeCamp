---
title: Review Using Props with Stateless Functional Components
localeTitle: Revisión usando accesorios con componentes funcionales sin estado
---
## Revisión usando accesorios con componentes funcionales sin estado

### Consejos

*   Un componente funcional (también conocido como sin estado) es solo una función javascript sencilla que toma los props como un argumento y devuelve un elemento de reacción.
*   Utilice `Component.defaultProps` para establecer accesorios predeterminados.
*   Utilice `Component.propTypes` para establecer tipos de props.

### Solución

```javascript
const Camper = props => (<p>{props.name}</p>); 
 
 Camper.defaultProps = { 
  name: 'CamperBot' 
 }; 
 
 Camper.propTypes = { 
  name: PropTypes.string.isRequired 
 }; 
```

### Enlace relevante

*   [Verificación de tipos con PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)