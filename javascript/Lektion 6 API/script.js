$.get('https://pokeapi.co/api/v2/pokemon?limit=5', function(data) 
{
    data.results.forEach(function(pokemon) 
    {
        $('#pokemonNameList').append(
            `
            <li id="${pokemon.name}">${pokemon.name}</li>
            `
        );

        $.get(`${pokemon.url}`, function(pokemonData) 
        {
            // console.log(pokemonData);
            // append additional information to id="${pokemon.name}
            $(`#${pokemon.name}`).append(
                `<ul> 
                    <li>
                        <p>HP: ${pokemonData.stats[0].base_stat}</p>
                    </li>
                    <li>
                        <p>Attack: ${pokemonData.stats[1].base_stat}</p>
                    </li>
                    <li>
                        <img src="${pokemonData.sprites.other.dream_world.front_default}" alt="Pokemon picture"
                    </li>
                    <ul>
                        <p>Type:</p>
                        <li>
                            ${pokemonData.types.map(type => `<p>${type.type.name}</p>`).join('')}
                        </li>
                    </ul>    
                </ul>`
            );
        });
        
    });
});
