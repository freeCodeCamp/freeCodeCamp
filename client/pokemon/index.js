document.getElementById("search-button").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("pokemon-name").innerText = data.name.toUpperCase();
            document.getElementById("pokemon-id").innerText = data.id;
            document.getElementById("weight").innerText = `Weight: ${data.weight}`;
            document.getElementById("height").innerText = `Height: ${data.height}`;
            document.getElementById("hp").innerText = data.stats[0].base_stat;
            document.getElementById("attack").innerText = data.stats[1].base_stat;
            document.getElementById("defense").innerText = data.stats[2].base_stat;
            document.getElementById("special-attack").innerText = data.stats[3].base_stat;
            document.getElementById("special-defense").innerText = data.stats[4].base_stat;
            document.getElementById("speed").innerText = data.stats[5].base_stat;
            
            const types = data.types.map(typeInfo => typeInfo.type.name.toUpperCase());
            const typesDiv = document.getElementById("types");
            typesDiv.innerHTML = ''; // Clear previous types
            types.forEach(type => {
                const typeElement = document.createElement("div");
                typeElement.innerText = type;
                typesDiv.appendChild(typeElement);
            });
            
            if (document.getElementById("sprite")) {
                document.getElementById("sprite").src = data.sprites.front_default;
            } else {
                const img = document.createElement("img");
                img.id = "sprite";
                img.src = data.sprites.front_default;
                document.getElementById("pokemon-info").appendChild(img);
            }
        })
        .catch(error => {
            alert(error.message);
        });
});
