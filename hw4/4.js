function pokemons () {
    const baseUrl =  `https://pokeapi.co/api/v2/pokemon`;
    async function getTenPokemonsFull() {
        let pokemons = [];
        for (let i = 1; i <= 10; i++) {
            let response = await fetch(`${baseUrl}/${i}`);
            if (response.status === 200) {
                let pokemon = await response.json();
                pokemons.push({
                    id: pokemon.id,
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight,
                });
            } else {
                throw new Error(response.status);
            }
        }
        storePokemons(pokemons);
        return pokemons;
    }
    function storePokemons(pokemons) {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }
    function getPokemons() {
        return JSON.parse(localStorage.getItem('pokemons'));
    }
    function sortPokemonsByHeight() {
        const pokemons = getPokemons();
        if (pokemons) {
            pokemons.sort((a, b) => a.height - b.height);
            sessionStorage.setItem("pokemonsSortedByHeight", JSON.stringify(pokemons));
        }
        return pokemons;
    }
    function sortPokemonsByWeight() {
        const pokemons = getPokemons();
        if (pokemons) {
            pokemons.sort((a, b) => a.weight - b.weight);
            sessionStorage.setItem("pokemonsSortedByWeight", JSON.stringify(pokemons));
        }
        return pokemons;
    }
    function run() {
        getTenPokemonsFull().then(res => console.log('Ten pokemons: ',res));
        console.log('Pokemons sorted by height: ', sortPokemonsByHeight());
        console.log('Pokemons sorted by weight: ', sortPokemonsByWeight());
    }
    run();
}

pokemons();
