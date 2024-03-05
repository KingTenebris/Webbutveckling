$.get('https://pokeapi.co/api/v2/pokemon?limit=10', function(data)
{
    console.log(data)
    data.results.forEach(function(pokemon)
    {
        const pokemonItem = (`<li>${pokemon.name}</li>`);

        $('#pokemonList').append(pokemonItem);
    });
});