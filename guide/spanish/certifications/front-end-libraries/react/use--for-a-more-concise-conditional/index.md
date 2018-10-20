---
title: Use && for a More Concise Conditional
localeTitle: Use && para un condicional más conciso
---
## Use && para un condicional más conciso

El ejemplo dado es
```
{condition && <p>markup</p>} 
```

que se muestra a continuación utilizando la condición de this.state.dinnerCooked boolean. Si el valor booleano es verdadero, se mostrará el marcado incluido en el {} con la condición, si no, no se mostrará
```
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      dinnerCooked: true 
    } 
  } 
  render() { 
    return ( 
       <div> 
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed 
       </div> 
    ); 
  } 
 }; 
 
 ## Hint: 
 
 You don't have to do a full ```if/then``` statement. Just write the condition you are checking. 
 
 ## Solution: 
 
 As you can see, you don't have to write the full ```if/then``` statement. We only need to check the condition and see if it returns ```true``` or ```false```. In this case, we are checking the value of ```display```. If the value is ```true```, then you return the value to the right of ```&&```, which is ```<h1>Displayed!</h1>```. If the condition is ```false```, it returns nothing. 
```

jsx la clase MyComponent extiende React.Component { constructor (accesorios) { super (accesorios); this.state = { cenaCocinado: falso }  
} render () {  
regreso (

{this.state.dinnerCooked &&

# La cena está cocinada!

} // los contenidos de la etiqueta h1 NO serán mostrados pantalla: verdadero } this.toggleDisplay = this.toggleDisplay.bind (this); } toggleDisplay () { this.setState ({ mostrar:! this.state.display }); } render () { // cambiar código debajo de esta línea regreso (

Visualización de palanca {this.state.display &&

# ¡Desplegado!

}

); } }; \`\` \` Explicación de la [documentación de ReactJS.org](https://reactjs.org/docs/conditional-rendering.html)

Puedes incrustar cualquier expresión en JSX envolviéndola entre llaves. Esto incluye el operador lógico && de JavaScript. Puede ser útil para incluir condicionalmente un elemento.

Funciona porque en JavaScript, true && expresión siempre se evalúa como expresión, y false && expresión siempre se evalúa como falso.

Por lo tanto, si la condición es verdadera, el elemento justo después de && aparecerá en la salida. Si es falso, React lo ignorará y lo omitirá.