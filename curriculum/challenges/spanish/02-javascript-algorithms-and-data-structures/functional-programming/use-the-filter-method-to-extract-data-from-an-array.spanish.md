---
id: 587d7b8f367417b2b2512b63
title: Use the filter Method to Extract Data from an Array
localeTitle: Utilice el método de filtro para extraer datos de una matriz
challengeType: 1
---

## Description
<section id='description'>
Otra función de matriz útil es <code>Array.prototype.filter()</code> , o simplemente <code>filter()</code> . El método de <code>filter</code> devuelve una nueva matriz que es a lo sumo tan larga como la matriz original, pero generalmente tiene menos elementos.
<code>Filter</code> no altera la matriz original, al igual que el <code>map</code> . Toma una función de devolución de llamada que aplica la lógica dentro de la devolución de llamada en cada elemento de la matriz. Si un elemento devuelve verdadero según los criterios en la función de devolución de llamada, entonces se incluye en la nueva matriz.
</section>

## Instructions
<section id='instructions'>
La variable <code>watchList</code> contiene una serie de objetos con información sobre varias películas. Use una combinación de <code>filter</code> y <code>map</code> para devolver una nueva matriz de objetos con solo <code>title</code> y claves de <code>rating</code> , pero donde <code>imdbRating</code> es mayor o igual a 8.0. Tenga en cuenta que los valores de calificación se guardan como cadenas en el objeto y es posible que desee convertirlos en números para realizar operaciones matemáticas en ellos.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>watchList</code> no debe cambiar.
    testString: 'assert(watchList[0].Title === "Inception" && watchList[4].Director == "James Cameron", "The <code>watchList</code> variable should not change.");'
  - text: Su código debe utilizar el método de <code>filter</code> .
    testString: 'assert(code.match(/\.filter/g), "Your code should use the <code>filter</code> method.");'
  - text: Su código no debe utilizar un bucle <code>for</code> .
    testString: 'assert(!code.match(/for\s*?\(.+?\)/g), "Your code should not use a <code>for</code> loop.");'
  - text: ' <code>filteredList</code> debe ser igual a <code>[{&quot;title&quot;: &quot;Inception&quot;,&quot;rating&quot;: &quot;8.8&quot;},{&quot;title&quot;: &quot;Interstellar&quot;,&quot;rating&quot;: &quot;8.6&quot;},{&quot;title&quot;: &quot;The Dark Knight&quot;,&quot;rating&quot;: &quot;9.0&quot;},{&quot;title&quot;: &quot;Batman Begins&quot;,&quot;rating&quot;: &quot;8.3&quot;}]</code> . '
    testString: 'assert.deepEqual(filteredList, [{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}], "<code>filteredList</code> should equal <code>[{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var watchList = [
                 {
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var filteredList;

// Add your code above this line

console.log(filteredList);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
