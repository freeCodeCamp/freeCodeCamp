---
title: Hash join
id: 5956795bc9e2c415eb244de1
localeTitle: 5956795bc9e2c415eb244de1
challengeType: 5
---

## Description
<section id='description'> 
<p> Una <a href="https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join" title="wp: Join_ (SQL) #Inner_join">unión interna</a> es una operación que combina dos tablas de datos en una tabla, basada en valores de columna coincidentes. La forma más sencilla de implementar esta operación es el algoritmo de <a href="https://en.wikipedia.org/wiki/Nested loop join" title="wp: unión de bucle anidado">unión de bucle anidado</a> , pero una alternativa más escalable es el algoritmo de <a href="https://en.wikipedia.org/wiki/hash join" title="wp: hash join">combinación de hash</a> . </p> 
<p> Implemente el algoritmo de &quot;combinación hash&quot; y demuestre que pasa el caso de prueba que se indica a continuación. </p><p> Debe representar las tablas como estructuras de datos que se sienten naturales en su lenguaje de programación. </p> 
<p> El algoritmo &quot;hash join&quot; consta de dos pasos: </p> 
Fase de hash: <a href="https://en.wikipedia.org/wiki/Multimap" title="wp: Multimap">cree</a> un <a href="https://en.wikipedia.org/wiki/Multimap" title="wp: Multimap">multimapa a</a> partir de una de las dos tablas, asignando desde cada valor de columna de unión a todas las filas que lo contienen. 
El multimapa debe admitir una búsqueda basada en hash que se amplíe mejor que una búsqueda lineal simple, porque ese es el punto central de este algoritmo. 
Idealmente, deberíamos crear el multimapa para la tabla más pequeña, minimizando así el tiempo de creación y el tamaño de la memoria. 
Fase de unión: escanee la otra tabla y busque filas coincidentes buscando en el multimapa creado anteriormente. 
<p> En el pseudocódigo, el algoritmo podría expresarse como sigue: </p> 
<pre> 
sea ​​A = la primera tabla de entrada (o idealmente, la más grande) 
sea ​​B = la segunda tabla de entrada (o idealmente, la más pequeña) 
sea ​​j <sub>A</sub> = el ID de la columna de unión de la tabla A 
sea ​​j <sub>B</sub> = unirse a la columna ID de la tabla B 
dejar M <sub>B</sub> = un multimapa para la asignación de valores individuales a varias filas de la tabla B (comienza vacío) 
dejar C = la tabla de salida (comienza vacío) 
para cada fila b en la tabla B: 
coloque b en el multimap M <sub>B</sub> debajo de la tecla b (j <sub>B</sub> ) 
para cada fila a en la tabla A: 
para cada fila b en el multimap M <sub>B</sub> debajo de la tecla a (j <sub>A</sub> ): 
sea ​​c = la concatenación de la fila ay fila b 
coloca la fila c en la tabla C </p> 
</pre> 
Caso de prueba 
<p> Entrada </p> 
<table> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 
<table style="border:none; border-collapse:collapse;"> 
<tr> 
<td style="border:none"> <i>A =</i> 
</td> 
<td style="border:none"> 
<table> 
<tr> 
<th style="padding: 4px; margin: 5px;"> Años </th> 
<th style="padding: 4px; margin: 5px;"> Nombre 
</th></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 27 </td> 
<td style="padding: 4px; margin: 5px;"> Jonás 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 18 </td> 
<td style="padding: 4px; margin: 5px;"> Alan 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 28 </td> 
<td style="padding: 4px; margin: 5px;"> Gloria 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 18 </td> 
<td style="padding: 4px; margin: 5px;"> Popeye 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 28 </td> 
<td style="padding: 4px; margin: 5px;"> Alan 
</td></tr></table> 
</td> 
<td style="border:none; padding-left:1.5em;" rowspan="2"> 
</td> 
<td style="border:none"> <i>B =</i> 
</td> 
<td style="border:none"> 
<table> 
<tr> 
<th style="padding: 4px; margin: 5px;"> Personaje </th> 
<th style="padding: 4px; margin: 5px;"> Nemesis 
</th></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> Jonás </td> 
<td style="padding: 4px; margin: 5px;"> Ballenas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> Jonás </td> 
<td style="padding: 4px; margin: 5px;"> Arañas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Fantasmas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Zombies 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> Gloria </td> 
<td style="padding: 4px; margin: 5px;"> Buffy 
</td></tr></table> 
</td> </tr> 
<tr> 
<td style="border:none"> <i>j <sub>A</sub> =</i> 
</td> 
<td style="border:none"> <i><code>Name</code> (es decir, columna 1)</i> 
</td> 
<td style="border:none"> <i>j <sub>B</sub> =</i> 
</td> 
<td style="border:none"> <i><code>Character</code> (es decir, columna 0)</i> 
</td></tr></table> 
</td> 
<td style="padding: 4px; margin: 5px;"> 
</td> </tr></table> 
<p> Salida </p> 
<table> 
<tr> 
<th style="padding: 4px; margin: 5px;"> A. Edad </th> 
<th style="padding: 4px; margin: 5px;"> Un nombre </th> 
<th style="padding: 4px; margin: 5px;"> B. Caracter </th> 
<th style="padding: 4px; margin: 5px;"> B. nemesis 
</th></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 27 </td> 
<td style="padding: 4px; margin: 5px;"> Jonás </td> 
<td style="padding: 4px; margin: 5px;"> Jonás </td> 
<td style="padding: 4px; margin: 5px;"> Ballenas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 27 </td> 
<td style="padding: 4px; margin: 5px;"> Jonás </td> 
<td style="padding: 4px; margin: 5px;"> Jonás </td> 
<td style="padding: 4px; margin: 5px;"> Arañas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 18 </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Fantasmas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 18 </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Zombies 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 28 </td> 
<td style="padding: 4px; margin: 5px;"> Gloria </td> 
<td style="padding: 4px; margin: 5px;"> Gloria </td> 
<td style="padding: 4px; margin: 5px;"> Buffy 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 28 </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Fantasmas 
</td></tr> 
<tr> 
<td style="padding: 4px; margin: 5px;"> 28 </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Alan </td> 
<td style="padding: 4px; margin: 5px;"> Zombies 
</td></tr></table> 
<p> </p><p></p><p> El orden de las filas en la tabla de salida no es significativo. </p> 
<p> Si está utilizando matrices indexadas numéricamente para representar filas de la tabla (en lugar de referirse a las columnas por su nombre), podría representar las filas de salida en la forma <code style="white-space:nowrap">[[27, &quot;Jonah&quot;], [&quot;Jonah&quot;, &quot;Whales&quot;]]</code> . </p><hr> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hashJoin</code> es una función.
    testString: 'assert(typeof hashJoin === "function", "<code>hashJoin</code> is a function.");'
  - text: &#39; <code>hashJoin([{ age: 27, name: &quot;Jonah&quot; }, { age: 18, name: &quot;Alan&quot; }, { age: 28, name: &quot;Glory&quot; }, { age: 18, name: &quot;Popeye&quot; }, { age: 28, name: &quot;Alan&quot; }], [{ character: &quot;Jonah&quot;, nemesis: &quot;Whales&quot; }, { character: &quot;Jonah&quot;, nemesis: &quot;Spiders&quot; }, { character: &quot;Alan&quot;, nemesis: &quot;Ghosts&quot; }, { character:&quot;Alan&quot;, nemesis: &quot;Zombies&quot; }, { character: &quot;Glory&quot;, nemesis: &quot;Buffy&quot; }, { character: &quot;Bob&quot;, nemesis: &quot;foo&quot; }])</code> debe devolver <code>[{&quot;A_age&quot;: 27,&quot;A_name&quot;: &quot;Jonah&quot;, &quot;B_character&quot;: &quot;Jonah&quot;, &quot;B_nemesis&quot;: &quot;Whales&quot;}, {&quot;A_age&quot;: 27,&quot;A_name&quot;: &quot;Jonah&quot;, &quot;B_character&quot;: &quot;Jonah&quot;, &quot;B_nemesis&quot;: &quot;Spiders&quot;}, {&quot;A_age&quot;: 18,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Ghosts&quot;}, {&quot;A_age&quot;: 18,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Zombies&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Glory&quot;, &quot;B_character&quot;: &quot;Glory&quot;, &quot;B_nemesis&quot;: &quot;Buffy&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Ghosts&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Zombies&quot;}]</code> &#39;
    testString: 'assert.deepEqual(hashJoin(hash1, hash2), res, "<code>hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])</code> should return <code>[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hashJoin (hash1, hash2) {
  // Good luck!
  return [];
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function hashJoin (hash1, hash2) {
  const hJoin = (tblA, tblB, strJoin) => {
    const [jA, jB] = strJoin.split('=');
    const M = tblB.reduce((a, x) => {
      const id = x[jB];
      return (
        a[id] ? a[id].push(x) : (a[id] = [x]),
        a
      );
    }, {});

    return tblA.reduce((a, x) => {
      const match = M[x[jA]];
      return match ? (
                a.concat(match.map(row => dictConcat(x, row)))
            ) : a;
    }, []);
  };

  const dictConcat = (dctA, dctB) => {
    const ok = Object.keys;
    return ok(dctB).reduce(
            (a, k) => (a[`B_${k}`] = dctB[k]) && a,
            ok(dctA).reduce(
                (a, k) => (a[`A_${k}`] = dctA[k]) && a, {}
            )
        );
  };

  return hJoin(hash1, hash2, 'name=character');
}


```

</section>
