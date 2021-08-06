import Pokemon from './Pokemon.js';
import Api from './ApiService.js';

const rangeInput = document.getElementById('searchParams');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loading');
const renderArea = document.getElementById('pokemons');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementsByClassName("close")[0];

let pokemonsDetailed = [];

const parseInput = (input) => {
    if (input.length == 0) {
        return [];
    }
    const parsed = input.split('-');
    if (input.match(/\d{1,4}-\d{1,4}/) && Number(parsed[1]) > Number(parsed[0])) {
        return parsed;
    } else {
        throw new Error('Please input the range in the format \'10-20\'');
    }
}

const loadData = async (e) => {
    const inputValue = rangeInput.value;
    try {
        renderArea.innerHTML = '';
        loadingSpinner.classList.remove('hidden');
        const params = parseInput(inputValue);
        const pokemons = await Api.getAllPokemons(...params);
        if (pokemons.length > 0) {
            for (let pokemon of pokemons) {
                const data = await Api.getPokemonByUrl(pokemon.url);
                const {id, name, sprites, species, height, weight, abilities} = data;
                const pok = new Pokemon(id, name, sprites.front_default, species.name, height, weight, abilities);
                pok.render(renderArea);
                pokemonsDetailed.push(pok);
            }
        }
    } catch (er) {
        errorMessage.innerHTML = er.message;
        errorMessage.classList.remove('hidden');
    }
    loadingSpinner.classList.add('hidden');
    renderArea.childNodes.forEach(el => {
        el.addEventListener('click', renderDetails);
    });
}

const renderDetails = async (ev) => {
    const id = ev.target.tagName == 'div' ? ev.target.id : ev.target.parentElement.id;
    modal.classList.remove('hidden');
    pokemonsDetailed.find(el => el.id == id).renderDetails(modalContent);
}

rangeInput.addEventListener('input', () => {
    errorMessage.classList.add('hidden');
});

loadBtn.addEventListener('click', loadData);

closeModal.addEventListener('click', () => {
    modalContent.lastElementChild.innerHTML = '';
    modal.classList.add('hidden');
});

window.addEventListener('click', (ev) => {
    if (ev.target == modal) {
        modalContent.lastElementChild.innerHTML = '';
        modal.classList.add('hidden');
    }
});
