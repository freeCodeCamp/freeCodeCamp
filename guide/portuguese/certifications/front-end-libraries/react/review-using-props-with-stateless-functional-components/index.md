---
title: Review Using Props with Stateless Functional Components
localeTitle: Rever usando adereços com componentes funcionais sem estado
---
## Rever usando adereços com componentes funcionais sem estado

### Dicas

*   Um funcional (aka stateless) componente é apenas uma função javascript simples que leva adereços como um argumento e retorna um elemento reagir.
*   Use `Component.defaultProps` para definir props padrão.
*   Use `Component.propTypes` para definir os tipos de props.

### Solução

```javascript
const Camper = props => (<p>{props.name}</p>); 
 
 Camper.defaultProps = { 
  name: 'CamperBot' 
 }; 
 
 Camper.propTypes = { 
  name: PropTypes.string.isRequired 
 }; 
```

### Link relevante

*   [Tipechecking Com PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)