---
title: Template Literals
localeTitle: Literales de plantilla
---## Literales de plantilla

## Introducción:

Cuando queremos usar la variable para hacer una cadena, se vuelve muy doloroso, ya que tenemos que usar el signo + para concatenar y hacer un seguimiento de las comillas.

Ahora, con ES6, podemos hacer una cadena usando backticks y usando marcadores de posición que están indicados con signo de dólar y llaves, como $ {expresión}.

```javascript
const name='John'; 
 const city='London'; 
 
 Older Style: 
 const sentence ='My name is '+ name +'. I live in '+city. 
 ES6 way: 
 const sentence = `My name is ${name}. I live in ${city}`; 
 Here ${name} and ${city}are going to be interpolated by the variable name and city respectively. 
```

## Cuerdas multilínea:

Estilo antiguo

Cuando quisimos dividir nuestra cadena en varias líneas, tuvimos que usar barras invertidas.

```javascript
const multipleLineString= "We have \ 
 multiple lines \ 
 here"; 
```

Ahora, cuando queremos crear una cadena mutiline, podemos hacer uso de cadenas de plantillas. Podemos rodear nuestra cadena con backticks. Este enfoque es extremadamente útil cuando queremos crear un marcado html dinámico.

```javascript
const htmlMarkup = ` 
 <html> 
 <head></head> 
 <title>Template string</title> 
 <body>Hello World</body> 
 </html>`; 
```

## Anidamiento de cadenas de plantillas:

Podemos anidarlos uno dentro del otro.

```javascript
const cities =[ 
 {name:'Delhi', year: 2010}, 
 {name:'Mumbai', year: 2015}, 
 {name:'Kolkata', year: 2017}]; 
 
 
 const markup = ` 
 <ul> 
 ${cities.map(city=>`<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')} 
 </ul>`; 
```

Aquí el operador de unión después de la función de mapa elimina las comas adicionales que se agregan después de cada li.

## Si las declaraciones y funciones

También podemos usar sentencias If dentro de las cadenas de la plantilla.

```javascript
const data = {name: 'John', city: 'London', birthyear: 1900}; 
 const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>`:''}</div>`; 
```

En el ejemplo anterior, si se define el año de nacimiento, entonces se genera div con contenido "Nació en el año", de lo contrario no se creará div.

También podemos llamar a funciones dentro de las cadenas de la plantilla.