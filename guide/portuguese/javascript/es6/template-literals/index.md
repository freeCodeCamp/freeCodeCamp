---
title: Template Literals
localeTitle: Literais de modelos
---## Literais de modelos

## Introdução:

Quando queremos usar a variável para fazer uma string, torna-se muito doloroso, pois temos que usar o sinal de + para concatenar e manter o controle de citações.

Agora, com o ES6, podemos criar strings usando backticks e usando marcadores de posição indicados com cifrão e chaves, como $ {expression}.

```javascript
const name='John'; 
 const city='London'; 
 
 Older Style: 
 const sentence ='My name is '+ name +'. I live in '+city. 
 ES6 way: 
 const sentence = `My name is ${name}. I live in ${city}`; 
 Here ${name} and ${city}are going to be interpolated by the variable name and city respectively. 
```

## Cordas MultiLine:

Estilo mais antigo:

Quando queríamos dividir nossa string em várias linhas, tínhamos que usar barras invertidas.

```javascript
const multipleLineString= "We have \ 
 multiple lines \ 
 here"; 
```

Agora, quando queremos criar uma string mutilina, podemos usar strings de template. Podemos cercar nossa string com backticks. Essa abordagem é extremamente útil quando queremos criar uma marcação html dinâmica.

```javascript
const htmlMarkup = ` 
 <html> 
 <head></head> 
 <title>Template string</title> 
 <body>Hello World</body> 
 </html>`; 
```

## Aninhamento de sequências de modelos:

Podemos aninhá-los uns dentro dos outros.

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

Aqui, o operador de junção após a função map remove as vírgulas extras que são adicionadas após cada li.

## Se declarações e funções

Nós também podemos usar instruções If dentro das strings do template.

```javascript
const data = {name: 'John', city: 'London', birthyear: 1900}; 
 const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>`:''}</div>`; 
```

No exemplo acima, se birthyear for definido, então div com o conteúdo "He born in the year" é gerado, caso contrário não haveria div criado.

Também podemos chamar funções dentro das cadeias de modelo.