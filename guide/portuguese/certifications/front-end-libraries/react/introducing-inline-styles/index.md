---
title: Introducing Inline Styles
localeTitle: Apresentando Estilos Inline
---
## Apresentando Estilos Inline

## Solução

Este pode ser um pouco complicado, porque o JSX é muito semelhante ao HTML, mas **não é o mesmo** .

Vamos percorrer os passos para que você entenda a diferença. Primeiro, defina sua tag de estilo para um **objeto JavaScript** .

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

Agora você tem sua tag de estilo definida para um objeto vazio. Observe como há dois conjuntos de chaves. Essa é uma diferença importante entre JSX e HTML.

Em segundo lugar, vamos definir a cor para vermelho.

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red' }}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

Finalmente, vamos definir o tamanho da fonte para 72px.

### Spoiler

```jsx
class Colorful extends React.Component { 
  render() { 
    return ( 
      <div style={{ color: 'red', fontSize: '72'}}> 
        Big Red 
      </div> 
    ); 
  } 
 }; 
```

Observe como o atributo JSX é **camelCase** . Essa é outra diferença importante a ser lembrada sobre o JSX. Além disso, você provavelmente notou que não há unidade. No JSX, ao definir o atributo fontSize, a **unidade é opcional** e será definida automaticamente como px, se não definida manualmente.