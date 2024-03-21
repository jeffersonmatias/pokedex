const pokemonlist = window.document.getElementById('pokemonlist')
const LoadMoreButton = document.getElementById('LoadMoreButton')
let offset = 0;
const limit = 10;


function LoadPokemonItens(offset, limit) {
    pokeApi.getpokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `<li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
            </ol>
    
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
    </li>`).join('')
        pokemonlist.innerHTML += newHtml
    })
}

LoadPokemonItens(offset, limit)

LoadMoreButton.addEventListener('click', () => {
    offset += limit
    LoadPokemonItens(offset, limit)
})
