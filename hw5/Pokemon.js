class Pokemon {
  constructor(id, name, img, species, height, weight, abilities) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.height = height;
    this.weight = weight;
    this.species = species;
    this.abilities = abilities;
  }

  render(node) {
    const block = document.createElement('div');
    block.id=this.id;
    block.className='pokemon';
    block.innerHTML = `
      <img src=${this.img}>
      <div>${this.name[0].toUpperCase()+this.name.slice(1)}</div>
    `;
    node.appendChild(block);
  }
  renderDetails(node) {
    const block = document.createElement('div');
    block.innerHTML = `
      <img src=${this.img}>
      <div>Name: ${this.name[0].toUpperCase()+this.name.slice(1)}</div>
      <div>Height: ${this.height}</div>
      <div>Weight: ${this.weight}</div>
      <div>Species: ${this.species}</div>
      <div>Abilities: ${this.abilities.map(el => el.ability.name)}</div>
    `;
    node.appendChild(block);
  }
}

export default Pokemon;
