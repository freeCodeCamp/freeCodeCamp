---
id: 6555c1d3e11a1574434cf8b5
title: Build a Pokémon Search App
challengeType: 14
forumTopicId: 16003
dashedName: build-a-pokemon-search-app
---

# --description--

In this project, you'll build an app that will search for Pokémon by name or ID and display the results to the user. To retrieve the Pokémon data and images, you'll use freeCodeCamp's <a href="https://pokeapi-proxy.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">PokéAPI Proxy</a>.

**Objective:** Build an app that is functionally similar to <a href="https://pokemon-search-app.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://pokemon-search-app.freecodecamp.rocks</a>

**User Stories:**

1. You should have an `input` element with an `id` of `search-input`
1. You should have a `button` element with an `id` of `search-button`
1. You should have an element with an `id` of `pokemon-name`
1. You should have an element with an `id` of `pokemon-id`
1. You should have an element with an `id` of `weight`
1. You should have an element with an `id` of `height`
1. You should have an `img` element with an `id` of `sprite`
1. You should have an element with an `id` of `types`
1. You should have an element with an `id` of `hp`
1. You should have an element with an `id` of `attack`
1. You should have an element with an `id` of `defense`
1. You should have an element with an `id` of `special-attack`
1. You should have an element with an `id` of `special-defense`
1. You should have an element with an `id` of `speed`
1. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, and `#special-defense` elements should be `PIKACHU`, `#25` or `25`, `Weight: 60` or `60`, `Height: 4` or `4`, `35`, `55`, `40`, `50`, `50`, and `90`, respectively.
1. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `src` attribute of the `#sprite` element should be set to the Pokémon's `front_default` sprite
1. When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `#types` element should contain a single inner element with the value `ELECTRIC`
1. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, and `#special-defense` elements should be `GENGAR`, `#94` or `94`, `Weight: 405` or `405`, `Height: 15` or `15`, `60`, `65`, `60`, `130`, `75`, and `110`, respectively
1. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `src` attribute of the `#sprite` element should be set to the Pokémon's `front_default` sprite
1. When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `#types` element should contain a two inner element with the text values `GHOST` and `POISON`, respectively

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have an `input` element with an `id` of `search-input`.

```js
const el = document.getElementById('search-input');
assert(!!el && el.nodeName.toLowerCase() === 'input');
```

You should have a `button` element with an `id` of `search-button`.

```js
const el = document.getElementById('search-button');
assert(!!el && el.nodeName.toLowerCase() === 'button');
```

You should have an element with an `id` of `pokemon-name`.

```js
const el = document.getElementById('pokemon-name');
assert(!!el);
```

You should have an element with an `id` of `pokemon-id`.

```js
const el = document.getElementById('pokemon-id');
assert(!!el);
```

You should have an element with an `id` of `weight`.

```js
const el = document.getElementById('weight');
assert(!!el);
```

You should have an element with an `id` of `height`.

```js
const el = document.getElementById('height');
assert(!!el);
```

You should have an `img` element with an `id` of `sprite`.

```js
const el = document.getElementById('sprite');
assert(!!el);
```

You should have an element with an `id` of `types`.

```js
const el = document.getElementById('types');
assert(!!el);
```

You should have an element with an `id` of `hp`.

```js
const el = document.getElementById('hp');
assert(!!el);
```

You should have an element with an `id` of `attack`.

```js
const el = document.getElementById('attack');
assert(!!el);
```

You should have an element with an `id` of `defense`.

```js
const el = document.getElementById('defense');
assert(!!el);
```

You should have an element with an `id` of `special-attack`.

```js
const el = document.getElementById('special-attack');
assert(!!el);
```

You should have an element with an `id` of `special-defense`.

```js
const el = document.getElementById('special-defense');
assert(!!el);
```

You should have an element with an `id` of `speed`.

```js
const el = document.getElementById('speed');
assert(!!el);
```

When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, and `#special-defense` elements should be `PIKACHU`, `#25` or `25`, `Weight: 60` or `60`, `Height: 4` or `4`, `35`, `55`, `40`, `50`, `50`, and `90`, respectively.

```js
async () => {
  try {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    searchInput.value = 'Pikachu';
    searchButton.click();

    const res = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu'); // Fetch from proxy to simulate network delay

    if (res.ok) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief additional delay to allow UI to update

      const pokemonName = document.getElementById('pokemon-name');
      const pokemonID = document.getElementById('pokemon-id');
      const weight = document.getElementById('weight');
      const height = document.getElementById('height');
      const hp = document.getElementById('hp');
      const attack = document.getElementById('attack');
      const defense = document.getElementById('defense');
      const specialAttack = document.getElementById('special-attack');
      const specialDefense = document.getElementById('special-defense');
      const speed = document.getElementById('speed');

      assert(
        pokemonName.innerText.trim().toLowerCase() === 'pikachu' &&
        pokemonID.innerText.trim().replace('#', '') === '25' &&
        (weight.innerText.trim().toLowerCase() === 'weight: 60' || weight.innerText.trim() === '60') &&
        (height.innerText.trim().toLowerCase() === 'height: 4' || height.innerText.trim() === '4') &&
        hp.innerText.trim() === '35' &&
        attack.innerText.trim() === '55' &&
        defense.innerText.trim() === '40' &&
        specialAttack.innerText.trim() === '50' &&
        specialDefense.innerText.trim() === '50' &&
        speed.innerText.trim() === '90'
      );
    }
  } catch (err) {
    throw new Error(err);
  }
};
```

When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `src` attribute of the `#sprite` element should be set to the Pokémon's `front_default` sprite.

```js
async () => {
  try {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    searchInput.value = 'Pikachu';
    searchButton.click();

    const res = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu'); // Fetch from proxy to simulate network delay

    if (res.ok) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief additional delay to allow UI to update

      const sprite = document.getElementById('sprite');
      assert(sprite.src.endsWith('sprites/pokemon/25.png'));
    }
  } catch (err) {
    throw new Error(err);
  }
};
```

When the `#search-input` element contains the value `Pikachu` and the `#search-button` element is clicked, the `#types` element should contain a single inner element with the value `ELECTRIC`.

```js
async () => {
  try {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    searchInput.value = 'Pikachu';
    searchButton.click();

    const res = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu'); // Fetch from proxy to simulate network delay

    if (res.ok) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief additional delay to allow UI to update

      const typesEl = document.getElementById('types');
      assert(typesEl.children.length === 1 && typesEl.children[0].innerText.trim().toLowerCase() === 'electric');
    }
  } catch (err) {
    throw new Error(err);
  }
};
```

When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the values in the `#pokemon-name`, `#pokemon-id`, `#weight`, `#height`, `#hp`, `#attack`, `#defense`, `#special-attack`, and `#special-defense` elements should be `GENGAR`, `#94` or `94`, `Weight: 405` or `405`, `Height: 15` or `15`, `60`, `65`, `60`, `130`, `75`, and `110`, respectively.

```js
async () => {
  try {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    searchInput.value = '94';
    searchButton.click();

    const res = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/94'); // Fetch from proxy to simulate network delay

    if (res.ok) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief additional delay to allow UI to update

      const pokemonName = document.getElementById('pokemon-name');
      const pokemonID = document.getElementById('pokemon-id');
      const weight = document.getElementById('weight');
      const height = document.getElementById('height');
      const hp = document.getElementById('hp');
      const attack = document.getElementById('attack');
      const defense = document.getElementById('defense');
      const specialAttack = document.getElementById('special-attack');
      const specialDefense = document.getElementById('special-defense');
      const speed = document.getElementById('speed');

      assert(
        pokemonName.innerText.trim().toLowerCase() === 'gengar' &&
        pokemonID.innerText.trim().replace('#', '') === '94' &&
        (weight.innerText.trim().toLowerCase() === 'weight: 405' || weight.innerText.trim() === '405') &&
        (height.innerText.trim().toLowerCase() === 'height: 15' || height.innerText.trim() === '15') &&
        hp.innerText.trim() === '60' &&
        attack.innerText.trim() === '65' &&
        defense.innerText.trim() === '60' &&
        specialAttack.innerText.trim() === '130' &&
        specialDefense.innerText.trim() === '75' &&
        speed.innerText.trim() === '110'
      );
    }
  } catch (err) {
    throw new Error(err);
  }
};
```

When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `src` attribute of the `#sprite` element should be set to the Pokémon's `front_default` sprite.

```js
async () => {
  try {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    searchInput.value = '94';
    searchButton.click();

    const res = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/94'); // Fetch from proxy to simulate network delay

    if (res.ok) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief additional delay to allow UI to update

      const sprite = document.getElementById('sprite');
      assert(sprite.src.endsWith('sprites/pokemon/94.png'));
    }
  } catch (err) {
    throw new Error(err);
  }
};
```

When the `#search-input` element contains the value `94` and the `#search-button` element is clicked, the `#types` element should contain a two inner element with the text values `GHOST` and `POISON`, respectively.

```js
async () => {
  try {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    searchInput.value = '94';
    searchButton.click();

    const res = await fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/94'); // Fetch from proxy to simulate network delay

    if (res.ok) {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief additional delay to allow UI to update

      const typesEl = document.getElementById('types');
      const targetTypes = ['ghost', 'poison'];

      assert(
        typesEl.children.length === 2 &&
        targetTypes.includes(typesEl.children[0].innerText.trim().toLowerCase()) &&
        targetTypes.includes(typesEl.children[1].innerText.trim().toLowerCase())
      );
    }
  } catch (err) {
    throw new Error(err);
  }
};
```

# --seed--

## --seed-contents--

```html

```

```css

```

```js

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/png"
      href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
    />
    <title>Pokémon Search App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Pokémon Search App</h1>
    <div class="container">
      <form role="search" id="search-form">
        <label for="search-input">Search for Pokémon Name or ID:</label>
        <input type="text" name="pokemon" id="search-input" required />
        <button id="search-button">Search</button>
      </form>
      <div class="output">
        <div class="top-container">
          <div class="name-and-id">
            <span id="pokemon-name"></span>
            <span id="pokemon-id"></span>
          </div>
          <div class="size">
            <span id="weight"></span>
            <span id="height"></span>
          </div>
          <div class="sprite-container"><img alt id="sprite" /></div>
          <div id="types"></div>
        </div>
        <div class="bottom-container">
          <table>
            <tr>
              <th>Base</th>
              <th>Stats</th>
            </tr>
            <tr>
              <td>HP:</td>
              <td id="hp"></td>
            </tr>
            <tr>
              <td>Attack:</td>
              <td id="attack"></td>
            </tr>
            <tr>
              <td>Defense:</td>
              <td id="defense"></td>
            </tr>
            <tr>
              <td>Sp. Attack:</td>
              <td id="special-attack"></td>
            </tr>
            <tr>
              <td>Sp. Defense:</td>
              <td id="special-defense"></td>
            </tr>
            <tr>
              <td>Speed:</td>
              <td id="speed" class="speed"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

```css
/* CSS reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
}

img {
  display: block;
}

/* Project styling */
body {
  font-family: sans-serif;
  background-color: #0a0a23;
  color: #0a0a23;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #fff;
  margin-top: 20px;
  font-size: 1.7em;
  text-align: center;
}

.container {
  width: 325px;
  margin: 30px 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 10px 10px 0px 0px rgba(223, 220, 220, 0.75);
}

.output,
#search-form {
  display: flex;
  justify-content: center;
}

#search-form {
  flex-wrap: wrap;
  margin: 10px 0;
  padding: 5px;
  border-radius: 8px 8px 0 0;
  gap: 10px;
}

label {
  align-self: center;
}

#search-input {
  height: 40px;
  padding-left: 10px;
  width: 200px;
}

#search-button {
  padding: 14px 0;
  width: 80px;
  border-radius: 20px;
  text-align: center;
  background-color: #a230d7;
  outline: none;
  border: none;
}

.output {
  margin: 10px 0;
  padding: 5px;
  flex-direction: column;
  align-items: center;
}

.top-container,
.bottom-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 325px;
}

.top-container {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f1f7;
}

.name-and-id {
  height: 28px;
  font-size: 1.1em;
  text-transform: capitalize;
  margin-bottom: 5px;
}

.size {
  height: 22px;
  font-size: 0.85rem;
}

.sprite-container {
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sprite {
  width: 180px;
}

#types {
  min-height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
}

.type {
  width: 66px;
  padding: 5px;
  font-size: 0.7rem;
  text-align: center;
  border-radius: 5px;
  background-color: red;
  text-transform: uppercase;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  font-size: 1 rem;
  color: #fff;
  background-color: #a230d7;
}

th:nth-child(even),
td:nth-child(even) {
  border-left: 5px solid #fff;
}

tr {
  border-bottom: 5px solid #fff;
}

td,
th {
  text-align: center;
  padding: 8px;
}

/* Special styling for Pokémon types */
.normal {
  background-color: #b7b7aa;
}

.fire {
  background-color: #ff6f52;
}

.water {
  background-color: #42a1ff;
}

.electric {
  background-color: #fecc33;
}

.grass {
  background-color: #78cc55;
}

.ice {
  background-color: #66ccfe;
}

.fighting {
  background-color: #d3887e;
}

.poison {
  background-color: #c68bb7;
}

.ground {
  background-color: #dfba52;
}

.flying {
  background-color: #8899ff;
}

.psychic {
  background-color: #ff66a3;
}

.bug {
  background-color: #aabb23;
}

.rock {
  background-color: #baaa66;
}

.ghost {
  background-color: #9995d0;
}

.dragon {
  background-color: #9e93f1;
}

.dark {
  background-color: #b59682;
}

.steel {
  background-color: #abaabb;
}

.fairy {
  background-color: #ed99ed;
}

@media screen and (min-width: 550px) {
  h1 {
    font-size: 2em;
  }

  .container {
    width: 450px;
  }

  #search-form,
  .top-container,
  .bottom-container {
    width: 95%;
  }

  .type {
    width: 75px;
  }
}
```

```js
const pokemonID = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const sprite = document.getElementById("sprite");
const types = document.getElementById("types");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`,
    );
    const data = await response.json();

    // Set Pokémon info
    pokemonName.innerHTML = `${data.name.toUpperCase()}`;
    pokemonID.innerHTML = `#${data.id}`;
    weight.innerHTML = `Weight: ${data.weight}`;
    height.innerHTML = `Height: ${data.height}`;
    sprite.src = data.sprites.front_default;
    sprite.alt = `${data.name} front default sprite`;

    // Set stats
    hp.innerHTML = data.stats[0].base_stat;
    attack.innerHTML = data.stats[1].base_stat;
    defense.innerHTML = data.stats[2].base_stat;
    specialAttack.innerHTML = data.stats[3].base_stat;
    specialDefense.innerHTML = data.stats[4].base_stat;
    speed.innerHTML = data.stats[5].base_stat;

    // Set types
    let typesHTML = "";

    data.types.forEach((obj) => {
      typesHTML += `<span class="type ${obj.type.name}">${obj.type.name}</span>`;
    });
    types.innerHTML = typesHTML;
  } catch (err) {
    resetDisplay();
    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
};

const resetDisplay = () => {
  // reset to default display if pokemon is not found

  // reset image src and alt
  sprite.src = "";
  sprite.alt = "";

  // reset stats
  pokemonName.innerHTML = "";
  pokemonID.innerHTML = "";
  types.innerHTML = "";
  height.innerHTML = "";
  weight.innerHTML = "";
  hp.innerHTML = "";
  attack.innerHTML = "";
  defense.innerHTML = "";
  specialAttack.innerHTML = "";
  specialDefense.innerHTML = "";
  speed.innerHTML = "";
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemon();
});
```
