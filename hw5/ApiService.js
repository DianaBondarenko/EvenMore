class Api {
    static BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

    static getAllPokemons = async (start = 1, end = 10) => {
        const response = await fetch(`${this.BASE_URL}?offset=${start - 1}&limit=${end - start + 1}`);
        const data = await response.json();
        return data.results;
    }

    static getPokemonByUrl = async (url) => {
        const response = await fetch(url);
        return await response.json();
    }
}

export default Api;
